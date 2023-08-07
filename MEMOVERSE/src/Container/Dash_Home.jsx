export default function Dash_Home() {
  return (
    <div className=" ">
     <div className="px-[20px] md:px-[40px]">
      <div className=" pt-[60px] pb-[10px] flex  justify-between">
        <h2 className="text-white text-lg md:text-3xl font-semibold leading-9">
          Welcome to Memoverse.
        </h2>
        <div className="flex space-x-2">
        <h2 className="text-white text-lg md:text-3xl font-semibold leading-9">
          Primose Roberts
        </h2>
        <img src="src/assets/images/profile.jpeg"   className="rounded-full" alt="profile-pic"/>
        </div>
      </div>

      <div className="flex text-white text-xs sm:text-base font-normal leading-normal justify-between">
        <p>Hello Primrose, welcome back!</p>

        <div className="flex text-white space-x-4"> 
            <div className="flex space-x-2">
                <h4 className="!text-[#FFA366]">900</h4>
                <p>Following</p>
            </div>

            <div className="flex space-x-2">
                <h4 className="!text-[#FFA366]">120</h4>
                <p>Blog plosts</p>
            </div>

            <div className="flex space-x-2">
                <h4 className="!text-[#FFA366]">12k</h4>
                <p>Followers</p>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}
