import Header from "../Component/element/Header";
import { gradientStyle } from "../Component/element/GradientStyle";
import Card from "../Component/element/Card";
import classNames from "classnames";
import { useState } from "react";

export default function Home() {
  const [isHover, setHover] = useState(false);

  return (
    <div>
      <div className="">
        <Header />

        {/* First section */}
        <div className="sm:grid sm:grid-cols-2">
          {/* Left design */}
          <section
            className="container mx-auto px-8 sm:pl-[80px]"
            style={gradientStyle}
          >
            <div className="pb-[61px]">
              <h1 className="text-orange-400 text-[44px] font-bold leading-[70px]">
                Memoverse - <br /> Empower Your <br />
                Memories and Stories
              </h1>
              <p className="text-stone-950 text-2xl font-normal leading-loose">
                A Decentralized Application for Creative Expression and Eternal
                Photo Albums
              </p>

              <div className="space-x-6 pt-[10px]">
                <button className="bg-gradient-to-r from-orange-400 px-5 py-2.5  to-orange-400 text-white rounded-sm text-center ">
                  Start Creating
                </button>

                <button className="outline outline-offset-2 outline-1 px-5 py-2 rounded-sm">
                  Connect Wallet
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-stone-950 text-2xl font-bold leading-loose">
                Trending Blog posts{" "}
              </h3>

              <div className="sm:grid sm:grid-cols-2 pb-[60px]">
                <div
                  className=" "
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <div className="overflow-hidden cursor-pointer border-2 border-white rounded-sm w-[244px] h-[155px] ">
                    <img
                      src="src/assets/images/Frame (2).png"
                      alt="trending blog"
                      className={classNames({
                        "scale-110 transition-transform": isHover,
                      })}
                    />
                  </div>

                  <Card className="rounded-none w-[243px] h-[124px]">
                    <h4 className=" p-[14px] text-white pb-2 text-base font-semibold leading-snug">
                      Journey through Time
                    </h4>
                    <p
                      className=" p-[14px] text-justify text-white text-opacity-80 
                    text-[9.75px] font-normal leading-[13.40px]"
                    >
                      From the majestic peaks of snow-capped mountains to the
                      sun-kissed beaches with turquoise waters, each photograph
                      becomes a window to a new world, inviting you to explore
                      and dream
                    </p>
                  </Card>
                </div>

                <div
                  className=" pt-[30px] sm:pt-0"
                  onMouseOver={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                >
                  <div className="cursor-pointer overflow-hidden border-2 border-white rounded-sm w-[244px] h-[155px] ">
                    <img
                      src="src/assets/images/Frame (1).png"
                      alt="trending blog"
                      className={classNames({
                        "scale-110 transition-transform": isHover,
                      })}
                    />
                  </div>

                  <Card className="rounded-none w-[243px] h-[124px]">
                    <h4 className=" p-[14px] text-white pb-2 text-base font-semibold leading-snug">
                      Memoirs of a Dreamer
                    </h4>
                    <p
                      className=" p-[14px] text-justify text-white text-opacity-80 
                    text-[9.75px] font-normal leading-[13.40px]"
                    >
                      Step into the magical world of a dreamer, where creativity
                      knows no boundaries, and artistry is a way of life. Join
                      me in embracing artistry
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Right design */}
          <section className="bg-stone-950">
            <div className="container mx-auto pt-[80px] px-8 sm:pl-[80px]">
              <div
                className=" "
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <div
                  className="overflow-hidden align-middle 
                  cursor-pointer w-[350.87px] h-[300px] rounded-tl-full 
                  rounded-tr-full shadow border border-white "
                >
                  <img
                    src="src/assets/images/placeholder.png"
                    alt="trending blog"
                    className={classNames({
                      "scale-110 transition-transform": isHover,
                    })}
                  />
                </div>

                <Card className="rounded-none w-[350.87px] h-[250px]">
                  <p className="p-[30px]  text-white text-xl font-semibold leading-7">
                    From the majestic peaks of snow-capped mountains to the
                    sun-kissed beaches with turquoise waters, each photograph
                    becomes a window to a new world, inviting you to explore and
                    dream
                  </p>
                </Card>
              </div>

              <div className="grid grid-cols-3 pt-[80px]">
                <div className="flex gap-4 sm:gap-6">
                  <h2 className="text-orange-300 text-2xl sm:text-3xl font-bold leading-7 sm:leading-9">
                    50k+
                  </h2>
                  <p className="text-white text-[13px] sm:text-base font-normal leading-snug pt-2">
                    Users
                  </p>
                </div>

                <div className="flex gap-4 sm:gap-6">
                  <h2 className="text-orange-300 text-2xl sm:text-3xl font-bold leading-7 sm:leading-9">
                    30k+
                  </h2>
                  <p className="text-white text-[10px] sm:text-base font-normal leading-snug pt-2">
                    Blog plosts
                  </p>
                </div>

                <div className="flex gap-4 sm:gap-6">
                  <h2 className="text-orange-300 text-2xl sm:text-3xl font-bold leading-7 sm:leading-9">
                    20k+
                  </h2>
                  <p className="text-white text-[13px] sm:text-base font-normal leading-snug pt-2">
                    Albums
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Second section */}
        <div className="bg-stone-950">
          <div className="container mx-auto px-8 sm:px-[80px] py-[100px]">
            <h2 className="text-white text-3xl pb-[48px] font-bold leading-10">
              Welcome to Memoverse, where creativity <br /> meets blockchain
              technology
            </h2>

            <div className="sm:grid sm:grid-cols-3 sm:space-x-0 gap-4">
              {/* first content */}
              <div>
                <div className=" w-80 h-px border border-white"></div>
                <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
                  Secure and Immutable
                </h3>
                <p className="text-white text-xl font-normal leading-7">
                  With blockchain technology, your <br /> memories are forever{" "}
                  <br />
                  preserved and tamper-proof.
                </p>
              </div>

              {/* second content */}
              <div>
                <div className=" w-80 h-px border border-white"></div>
                <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
                  Connect with a Vibrant Community
                </h3>
                <p className="text-white text-xl font-normal leading-7">
                  Join a community of creators and <br />
                  storytellers from around the world and <br />
                  explore
                </p>
              </div>

              {/* third content */}
              <div>
                <div className=" w-80 h-px border border-white"></div>
                <h3 className="text-white text-2xl font-bold leading-loose pt-[40px]">
                  Rewarding Creativity
                </h3>
                <p className="text-white text-xl font-normal leading-7">
                  Earn tokens for your <br />
                  contributions and engagement <br />
                  on the platform.
                </p>
              </div>
            </div>
            <div className="py-[40px]">
              <button className="bg-gradient-to-r from-orange-400 px-5 py-2.5  to-orange-400 text-white rounded-sm text-center ">
                Start Creating
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
