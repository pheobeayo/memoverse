import { useDropzone } from "react-dropzone";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import Header from "../Component/element/Header";
import Footer from "../Component/element/Footer";

export default function PhotoCreate() {
  const [name, setName] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [ setImgBase64] = useState("");
  const [loading, setLoading] = useState("");
  const [fileUrl, setFileUrl] = useState("");

  const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onload = (readerEvent) => {
          const base64 = readerEvent.target.result;
          setImgBase64(base64);
          setFileUrl(file);
        };

        reader.readAsDataURL(file);
      }
    },
  });

  const handleChange = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        break;
      case "photo":
        if (event.target.files && event.target.files.length > 0) {
          setPhotoUrl(event.target.files[0]);
          console.log(event.target.files[0]);
        }
        break;
      default:
        break;
    }
  };

  //files to select

  const Files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  //handle submit
  const resetForm = () => {
    setName("");
    setPhotoUrl("");
  };


  const handlrBundlrUpload = async (fileUrl) => {
    const bundlr = await getBundlr();

    try {
      console.log(fileUrl);
      const dataStream = fileReaderStream(fileUrl);
      const Price = await bundlr.getPrice(fileUrl.size);
      console.log("price:", Price);
      const balance = await bundlr.getLoadedBalance();
      console.log("balance:", balance);
      if (Price.isGreaterThanOrEqualTo(balance)) {
        console.log("Funding node.");

        await bundlr.fund(Price);
        console.log("funded");
      } else {
        console.log("Funding not needed, balance sufficient.");
      }

      const fileType = "image/png";
      const response = await bundlr.upload(dataStream, {
        tags: [{ name: "Content-Type", value: fileType }],
      });
      console.log("bundlr uploaded file:", response.id);

      console.log("Content ID successfully saved to local storage.");

      console.log(
        `Upload success content URI= https://arweave.net/${response.id}`
      );
      return `https://arweave.net/${response.id}`;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name || !photoUrl) {
      console.log(name);
      console.log(photoUrl);

      toast.error("Please fill all required fields");
    } else {
    
      setLoading({ show: true, msg: "Publish..." });

      try {
        // Do something with the form data
        setLoading(true);

        await handlrBundlrUpload(photoUrl);
        setLoading(false);
        resetForm();

        toast.success("Nft successfully minted!");
      } catch (error) {
        console.log(error);
        toast.error("An error occurred while minting the Nft");
      }
    }
  };

  return (
    <div>
      <Header />
      <div className="bg-stone-950">
        <div className="justify-center align-center">
          {/* headers */}
          <div className="pb-3">
            <h1 className="text-white text-[27px] sm:text-[37px] text-center  pt-[66px] font-bold leading-10">
              Upload your pictures
            </h1>
            <p
              className="text-gray-50 text-[13px] 
            sm:text-[18px] pb-[10px] text-center font-normal leading-7"
            >
              Unleash Your Creative Odyssey
            </p>
          </div>

          <div
            className="w-full  items-center 
          justify-center flex flex-col pb-5 "
          >
            <form
              onSubmit={handleSubmit}
              className="shadow-md rounded-lg px-8  pb-[50px] flex flex-col "
            >
              {/* title input */}
              <div className="pb-5 appearance-none">
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="name"
                >
                  Name your picture Enter the title of your blog post
                </label>
                <input
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  id="title"
                  type="text"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  placeholder="Enter the title of your blog post"
                />
              </div>

              {/* picture / add nft input */}
              <div
                {...getRootProps({ className: "dropzone" })}
                className="pb-5 appearance-none"
              >
                <label
                  className="block text-white 
                  text-sm pb-2
                  font-semibold leading-snug"
                  htmlFor="photo"
                >
                  Upload a picture
                </label>
              </div>

              {/* dropzone section for the image */}
              <div className="bg-white rounded-md flex flex-col  ">
                <input
                  name="photo"
                  value=""
                  id="photo"
                  onChange={handleChange}
                  type="file"
                  accept="image/png"
                  className="
                border rounded w-full md:w-[600px] py-3 
                px-3
                 text-gray-700 leading-tight 
                 focus:outline-none focus:shadow-outline"
                  {...getInputProps()}
                />
                {/*  
                <div
                  className=" sm:pt-[50px] 
                w-[22px] sm:w-[50px] h-[50px]"
                >
                  <img src="./images/addNft.png" alt="addNfts" />
                </div>
                */}

                <p
                  className="pt-[20px] text-center text-gray-700 
                text-opacity-50"
                >
                  Drag 'n' drop or Select files here <br /> Pictures (in jpeg or
                  png format only)
                </p>
                <button
                  className="text-violet-500 pb-[50px] flex justify-center align-center"
                  type="button"
                  onClick={open}
                >
                  Select file
                </button>
              </div>
              <aside className="text-white">
                <ul>{Files}</ul>
              </aside>

              <div
                className="bg-gradient-to-r mt-[50px] from-orange-400 px-5 py-2.5 
                to-orange-400  px-5 py-2.5 
                 rounded-lg 
              border justify-center 
              items-center gap-2 inline-flex "
              >
                <button
                  type="submit"
                  className="text-white 
                cursor-pointer"
                  disabled={loading}
                >
                  {loading ? "Publishing..pls wait" : "Publish"}
                </button>
              </div>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
