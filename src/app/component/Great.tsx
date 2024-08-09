import Image from "next/image";

function Great(){

    const note = 'your gateway to unforgettable experiences and thrilling adventures in nature!. Nestled amidst breathtaking landscapes and pristine wilderness, our camping spot is the perfect destination for out dor enthuaiasts, nature lovers, and adventures seekers alike. Get ready to embark on the camping trip of a lifetime, where sunrise brings new opportunities for expoloration and every starlit night beckons with the promise of world and excitement.';


    return (
        <section>
           <div className="first-place">
                <div className="text-great flex items-center justify-around py-20">
                    <div className="image">
                        <Image 
                        src={'/image/flag (1).png'}
                        alt=""
                        width={31}
                        height={41}
                        className="ml-8 pb-4 max-sm:ml-2"
                        />
                        <p className="ml-8 pb-4 font-bold max-sm:ml-2" >Top thing to do in the park</p>
                        <Image 
                        src={'/image/Rectangle 7.png'}
                        alt=""
                        width={700}
                        height={540}
                        className="max-sm:w-[360px]"/>
                    </div>

                    <div className="word-two max-sm:px-4">
                        <h2 className="font-extrabold">Special Private Top</h2>

                         <Image 
                        src={'/image/star.png'}
                        alt=""
                        width={91}
                        height={91}
                        className="py-4"
                        />

                        <p className="w-[392px] text-[13px] pb-4 font-semibold max-sm:max-w-[340px]">{note}</p>
                        <p className="text-sky-500 text-[14px] pb-4 font-semibold">18k views     595 likes</p>
                        <button className=" py-2 px-6 text-[15px]  bg-white text-black rounded-full ease-in-out duration-0.3s transform border-2 border-solid border-black">
                        See details
                        </button>
                    </div>
                </div>

                <div className="word-three flex items-center justify-evenly py-10">
                    <div className="max-sm:px-4 py-4">
                         <h2 className="font-extrabold">Water Hike Adventure</h2>

                         <Image 
                        src={'/image/star.png'}
                        alt=""
                        width={91}
                        height={91}
                        className="py-4"
                        />

                        <p className="w-[392px] text-[13px] pb-4 font-semibold max-sm:max-w-[340px]">{note}</p>
                        <p className="text-sky-500 text-[14px] pb-4 font-semibold">18k views     595 likes</p>
                        <button className=" py-2 px-6 text-[15px]  bg-white text-black rounded-full ease-in-out duration-0.3s transform border-2 border-solid border-black">
                        See details
                        </button>
                    </div>
                    <Image 
                        src={'/image/Rectangle 8.png'}
                        alt=""
                        width={700}
                        height={540}
                         className="max-sm:w-[360px]"
                        />
                </div>

                <div className="text-great flex items-center pt-10 justify-around">
                        <Image 
                        src={'/image/Rectangle 9.png'}
                        alt=""
                        width={700}
                        height={540}
                         className="max-sm:w-[360px]"
                        />
                    <div className="word-four max-sm:px-4 ">
                         <h2 className="font-extrabold">Amazing Hike Adventure</h2>

                         <Image 
                        src={'/image/star.png'}
                        alt=""
                        width={91}
                        height={91}
                        className="py-4"
                        />

                        <p className="w-[392px] text-[13px] pb-4 font-semibold max-sm:max-w-[340px]">{note}</p>
                        <p className="text-sky-500 text-[14px] pb-4 font-semibold">18k views     595 likes</p>
                        <button className=" py-2 px-6 text-[15px]  bg-white text-black rounded-full ease-in-out duration-0.3s transform border-2 border-solid border-black">
                        See details
                        </button>
                    </div>
                </div>

           </div>
        </section>
    );
};

export default Great;