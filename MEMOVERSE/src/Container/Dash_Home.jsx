import { useContext } from "react";
import { gradientStyle } from "../Component/element/GradientStyle";
import { Link } from "react-router-dom";
import { BlogContext } from "../Store/BlogContext";


export default function Dash_Home() {
 const {user, picture} = useContext(BlogContext)
 console.log('username', user)
 console.log('picture', picture)
  return (
    <div className=" ">
      <div className="px-[20px] md:px-[40px]">
        <div className=" pt-[60px] pb-[10px]  sm:flex  sm:justify-between">
          <h2 className="text-white text-lg md:text-3xl font-semibold leading-9">
            Welcome to Memoverse.
          </h2>
          <div className="hidden sm:flex space-x-2">
            <h2 className="text-white text-lg md:text-3xl font-semibold leading-9">
              {user.userId}
            </h2>
            <img
              src={user.userPicture}
              className="w-[15px]  h-[15px] sm:w-[30px] sm:h-[30px] rounded-full"
              alt="profile-pic"
            />
          </div>
        </div>

        <div className="flex  text-white text-xs sm:text-base font-normal leading-normal justify-between">
          <p>Hello {user.userId} , welcome back!</p>

          <div className="hidden sm:flex text-white space-x-4">
            <div className="flex space-x-2">
              <h4 className="text-[10px] sm:text-xl font-semibold leading-7 !text-[#FFA366]">
                900
              </h4>
              <p className="text-[5px] sm:text-xl font-semibold leading-7">
                Following
              </p>
            </div>

            <div className="flex space-x-2">
              <h4 className="text-[10px] sm:text-xl font-semibold leading-7 !text-[#FFA366]">
                120
              </h4>
              <p className="text-[5px] sm:text-xl font-semibold leading-7">
                Blog plosts
              </p>
            </div>

            <div className="flex space-x-2">
              <h4 className="text-[10px] sm:text-xl font-semibold leading-7 !text-[#FFA366]">
                12k
              </h4>
              <p className="text-[5px] sm:text-xl font-semibold leading-7">
                Followers
              </p>
            </div>
          </div>
        </div>

        <div className="py-[50px] md:flex   sm:space-x-6">
          {/* left section */}
          <div className="rounded-md mb-4 sm:mb-0" style={gradientStyle}>
            <div className="p-[40px] space-x-4 flex justify-between">
              <div className="hidden  sm:grid sm:w-[200px] sm:h-[196px]">
                <img
                  src="src/assets/images/SignIn-Icon.png"
                  alt="illustration"
                />
              </div>

              <div>
                <h2 className="text-orange-400 text-xl sm:text-3xl font-bold leading-6 sm:leading-9">
                  Memoverse - Empower <br /> Your Memories and Stories
                </h2>
                <p className="text-stone-950 text-xs sm:text-xs font-semibold py-[20px] leading-none">
                  A Decentralized Application for Creative Expression and
                  Eternal Photo Albums
                </p>

                {/* buttons */}
                <div className="flex space-x-6">
                  <Link to="/BlogCreate">
                    <button className="bg-gradient-to-r rounded-md from-orange-400 sm:px-5 sm:py-2.5  to-orange-400 text-white rounded-sm text-center ">
                      Post a blog
                    </button>
                  </Link>

                  <Link to="/PhotoCreate">
                    <button className="outline outline-offset-2 outline-1  sm:px-5 sm:py-2 rounded-sm">
                      Post a picture
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* right section */}
          <div className="rounded-md" style={gradientStyle}>
            <div className="p-[40px] w-[222px] h-[261px] sm:w-[322px] sm:h-[161px]">
              <h3 className="text-orange-400 pb-2 text-[15px] sm:text-xl font-semibold  sm:leading-7">
                How to create new blog post or photo ablum
              </h3>

              <div className="text-stone-950 text-[10px] sm:text-base font-normal leading-snug">
                <p className="pb-2">1) Create New Post.</p>
                <p className="pb-2">
                  {" "}
                  2) Fill out the form and input all the necessary 
                  details.
                </p>
                <p className="pb-2">3) Compose Your Masterpiece. </p>
                <p className="pb-2">
                  {" "}
                  4) Viola! 🎉 Let Memoverse create the magic as you hit the
                  Publish button.
                </p>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}
