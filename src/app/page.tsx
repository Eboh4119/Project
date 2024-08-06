"use client";

import Image from "next/image";
import Vertical from "./component/vertical";
import Slider from "./component/slider";
import Great from "./component/Great";
import Explore from "./component/explore";




export default function Home() {


  return (
    <main className="w-[1220px]">
      <div className="first-container h-[810px] w-[1220px] ">
        <nav>
          <div className="nav-bar text-white flex justify-between items-center py-16">
          <h2 className="pl-10 text-[19px]">Nubspace Adventure</h2>

          <ul className="flex gap-8 pr-40  items-center ">
            <li><a href="#About">About Camp</a></li>
            <li><a href="#Event">Event</a></li>
          <button className=" sign py-1 px-4 border-2 border-white border-solid rounded-full ease-in-out duration-0.3s transform">Sign in</button>
          </ul>
          </div>  
       </nav>

      {/* first container */}
       <div className="second-container text-white py-[120px] px-70 flex gap-60">

        <div className="vert">
          <Vertical />
        </div>

        <div className="cover-text pl-20">
          <div className=" max-w-[600px] mx-auto pt-4">
          <h2 className="text-[40px] font-semibold">Your Adventure Begins Here!</h2>
          <p className="mx-auto text-[25px] font-[400px] px-7 text-center">Discover the great outdoors</p>
          </div>
       

          <div className="second-paragraph text-white max-w-[[600px] text-center pb-10 pt-20 h-[330px]" >
            <p className="max-w-[470px] text-sm leading-relaxed text-center mx-auto pt-20 pb-4">Discover the magic of Untouched Landscapes, Connect With Nature In It’s Purest Form, and Awaken Your Sense Of Wonder as You Navigate Through Rugged Trails, lush forest and Tequila lakes</p>

            <button className=" py-1 px-4  bg-white text-black rounded-full ease-in-out duration-0.3s transform">
              Reserve Spot
            </button>
            <p className="pt-4">start at 150,000/ night</p>
          </div>
         </div> 
        </div>
        </div>
     
     {/* second container */}
      <div className="world-container h-[484px] w-[1220px]">
        <Slider />
    </div>

{/* third container */}
    <div className="river-container h-[812px] w-[1220px] bg-background-three bg-contain bg-no-repeat">
      <div className="text-white flex gap-20">
        <div className="word-container relative top-[430px] pl-14">
          <h3 className="text-[26px] w-[436px] h-[176px] pb-6">With each visit you contribute to the ongoing conversation, ensuring that the magic of nature endure for generations to come</h3>

          <div className="down-text flex items-center gap-8">
            <div className="w-[111px] h-[120px]">
              <h2 className="text-[22px] font-extrabold">835</h2>
              <p className="w-[111px]">Daily Guided Visit</p>
            </div>

            <div className="w-[113px] h-[120px]">
              <h2 className="text-[22px] font-extrabold">98%</h2>
              <p>Visitor Satisfied</p>
            </div>

            <div className="w-[113px] h-[120px]">
              <h2 className="text-[22px] font-extrabold">70+</h2>
              <p>Biodiversity species</p>
            </div>

            <div className="w-[111px] h-[120px]">
              <h2 className="text-[22px] font-extrabold">150k</h2>
              <p>Community Followers</p>
            </div>
          </div>
        </div>

        <div className="circle relative top-[200px] flex items-center">
        <div className="w-[216px] h-[216px]  rounded-full border-spacing-10 oval"></div>
        <p>Beautiful lake view</p>
        </div>
      </div>
    </div>

     <div className="fourth-container w-[1220px] h-[2100px] text-black">
        <Great />
     </div>

     <div className="last w-[1220px] h-[760px]">
        <Explore />
     </div>

     <footer className="font-semibold h-16 flex justify-between">
      <div></div>
      <ul className="flex gap-16 pt-6 ">
        <li>About camp</li>
        <li>Events</li>
        <li>Animals</li>
        <li>FAQS</li>
        <li>The team</li>
      </ul>
     </footer>
    </main>

  )
}