"use client"

import React, {useState} from 'react';
import Image from 'next/image';
import Right from '../rightVertical';

const note = 'your gateway to unforgettable experiences and thrilling adventures in nature!. Nestled amidst breathtaking landscapes and pristine wilderness, our camping spot is the perfect destination for out dor enthuaiasts, nature lovers, and adventures seekers alike. Get ready to embark on the camping trip of a lifetime, where sunrise brings new opportunities for expoloration and every starlit night beckons with the promise of world and excitement.';


const slides =[
    {
        text: "Explore Specials Camping Spot",
        image: "/image/map.jpg?text=Slide+1",
        number: "01 / 03",
    
    },
    {
        text: "Explore Special Hunting Spot",
        image: "/image/Rectangle 2.png?text=Slide+2",
        number: "02 / 03"

    },
    {
        text: "Explore Special Dancing Ground",
        image: "/image/background 3.png?text=Slide+3",
        number: "03 / 03"
    }
];

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setAnimating] = useState(false);

    const nextSlide = () => {
        setAnimating(true)

        setTimeout ( ()=> {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
            setAnimating(false);
        }, 500);
       
    };

    const prevSlide = () => {
        setAnimating(true)

        setTimeout ( ()=> {
            setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
            setAnimating(false);
        }, 500);
       
      };
    

    return (
        <div className='slider text-white'>
            <div className= {`slide flex items-center justify-around pt-12 ${isAnimating ? 'fade' : ''}`}>
                <div className="button-click pb-8 relative bottom-20 max-sm:bottom-0 max-sm:pb-2 max-sm:pl-6">
                    <p className='text-[14px]'>{slides[currentSlide].number?.toString()}</p>
                    <h5 className='text-[16px]'>Shift Landscape</h5>
                    <p className='text-[12px]'>Natural Park</p>
                    <button onClick={prevSlide} className='pr-4'>
                    <Image 
                    src={'/image/Arrow 2.png'}
                    alt=''
                    width={16}
                    height={0}
                    />
                    </button>
                   
                    <button onClick={nextSlide}>
                    <Image 
                    src={'/image/Arrow 1.png'}
                    alt=''
                    width={16}
                    height={0}
                    />
                    </button>
                </div>     

                <div className="image-flex">
                <div className='flex item-center text-[8px] gap-8'>
                <Image
                src={'/image/Ellipse 2.png'}
                alt=''
                width={46}
                height={46}
                className='border-4 border-white relative rounded-full bottom-6 left-6'
                />
                <p>Shift land scape</p>
                </div>

                <div className='items-center gap-10 text-[8px]'>
                <Image
                src={'/image/Ellipse 2.png'}
                alt=''
                width={46}
                height={46}
                className='border-4 border-white relative rounded-full top-6 right-8'
                />
                <p className='pl-6'>Bird Watching Spot</p>
                </div>
                </div>

                <div className="explore pl-4 ml-12 max-sm:ml-6 max-sm:pt-2">
                <Image
                src={'/image/Vector (1).png'}
                alt=''
                width={26}
                height={26}
                className = ''
                />
                <h3 className='py-4vmax-sm:py-2'>{slides[currentSlide].text}</h3>
                <p className='text-[13px] w-[391px] h-[139px] py-4 max-sm:py-2 max-sm:max-w-[330px]'>{note}</p>

                <div className='images flex gap-8 py-12'>
                <Image
                src={'/image/Rectangle 2.png'}
                alt=''
                width={69}
                height={67}
                />

                <Image
                src={'/image/Rectangle 3.png'}
                alt=''
                width={69}
                height={67}
                />

                <Image
                src={'/image/Rectangle 4.png'}
                alt=''
                width={69}
                height={67}
                />
                </div>
                </div>

                <div className='side-right'>
                    <Right />
                </div>
                
               
            </div>
        </div>
    );
};

export default Slider;