import SDKDemo from "../Blockchain_Service/delsoon";
import { gradientStyle } from "../Component/element/GradientStyle";
export default function SignIn() {
  
  return (
    <div className="sm:grid sm:grid-cols-2">
      {/* right seection */}
      <section style={gradientStyle} className="">
        <div
          className="container
          mx-auto px-[60px] py-[80px]  text-center"
        >
          <h1 className=" text-orange-400 text-[30px] font-bold leading-[52px]">
            Unlock the Gateway to Your <br />
            Memories and Imagination!
          </h1>
          <p className="text-stone-950 pt-[10px] text-base font-normal leading-snug">
            Sign In now to preserve your precious moments, share your <br />
            adventures, and inspire others with your unique perspective
          </p>

          <img
            src="src/assets/images/SignIn-Icon.png"
            alt="sigIn-Illustration"
            className="inline-block align-middle pt-[64px]"
          />
        </div>
      </section>

      {/* left section */}
      <section className="bg-stone-950">
        <div
          className="container
     mx-auto p-[60px]"
        >
          <img className="" alt="logo" src="src/assets/images/MEMOVERSE (1).png" />
          <h1 className="text-center pt-[100px] pb-[70px] text-white text-[44px] font-bold leading-[58px]">
            Sign in
          </h1>

          <div className="outline outline-1 w-full py-2  rounded-lg text-center text-white text-xl font-semibold leading-7">
            <SDKDemo />
          </div>

          <div className="text-white text-center py-[20px] text-opacity-70 text-2xl font-bold leading-loose">
            -OR-
          </div>

          <div className=" bg-gradient-to-r from-orange-400 mb-[100px] to-orange-400  w-full py-2  rounded-lg text-center text-white text-xl font-semibold leading-7">
            <button>Connect Wallet</button>
          </div>
        </div>
      </section>
    </div>
  );
}
