
import Navbar from "../Component/element/navbar/Navbar";
import frame1 from "../assets/images/B-frame1.png";
import frame2 from "../assets/images/B-frame2.png";
import frame3 from "../assets/images/B-frame3.png";
import { Link } from "react-router-dom";

export default function Explore() {
  return (
    <div>
        <Navbar/>
      <div className="content-details py-10 flex justify-between flex-wrap">
        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg px-8">
          <img
            src={frame1}
            alt="B-frame1"
            className="object-cover h-full w-full object-center rounded-xlg"
          />
          <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h3 className="font-bold text-orange-400 text-lg">
              Memoirs of a Dreamer: Embracing
              <br></br>Creativity and Artistry in Everyday
              <br></br>Life
            </h3>
            <p className="font-normal text-justify text-white text-sm">
              Through the ups and downs, I have found solace in expressing
              myself through art, and I can not wait to hear your thoughts and
              connect with kindred spirits. Let us celebrate the magic of
              imagination together!
              <br></br>{" "}
              <Link style={{ textDecoration: "none", color: "#FFA366" }}>
                Read more
              </Link>
            </p>
          </div>
        </div>
        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg">
          <img
            src={frame3}
            alt="B-frame3"
            className="object-cover h-full w-full object-center rounded-lg pr-8"
          />
          <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h3 className="font-bold text-orange-400 text-lg">
              Embracing Wellness: My Journey to
              <br></br>Mindfulness, Meditation, Yoga, and
              <br></br>Self-Care
            </h3>
            <p className="font-normal text-sm text-justify text-white">
              In this soul-nourishing post, I open my heart to
              <br></br>inspire and uplift each one of you on your path to
              <br></br>well-being. Through mindfulness practices, yoga
              <br></br>serenity, and self-care rituals, I've found profound
              <br></br>peace and balance.
              <br></br>{" "}
              <Link style={{ textDecoration: "none", color: "#FFA366" }}>
                Read more
              </Link>
            </p>
          </div>
        </div>
        <div className="content-card w-full md:w-[32%] mb-5 h-full rounded-t-lg">
          <img
            src={frame2}
            alt="B-frame2"
            className="object-cover h-full w-full object-center rounded-lg pr-8"
          />
          <div className="w-full h-1/2 pb-5 p-2 shadow-md">
            <h3 className="font-bold text-orange-400 text-lg">
              Life Lessons and Growth: Reflections on Overcoming Challenges
            </h3>
            <p className="font-normal text-sm text-justify text-white pr-8">
              In this safe space, let's embrace vulnerability and wisdom as we
              connect through shared experiences. May my stories inspire you on
              your own path of growth and self-discovery
              <br></br>{" "}
              <Link style={{ textDecoration: "none", color: "#FFA366" }}>
                Read more
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
