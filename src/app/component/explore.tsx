
function Explore(){

    const note = 'your gateway to unforgettable experiences and thrilling adventures in nature!. Nestled amidst breathtaking landscapes and pristine wilderness, our camping spot is the perfect destination for out dor enthuaiasts, nature lovers, and adventures seekers alike. Get ready to embark on the camping trip of a lifetime, where sunrise brings new opportunities for expoloration and every starlit night beckons with the promise of world and excitement.'

    return (
        <section className="pt-14">
            <div className="text-center text-white max-sm:max-w-[350px]">
                <h1 className="text-[40px] pt-12 pb-4 font-bold max-sm:pl-3">Your Exploration Start Here</h1>
                <p className="text-[15px] leading-4 w-[467px] h-[92px] items-center mx-auto max-sm:max-w-[350px]">{note}</p>
            </div>
        </section>
    );
};

export default Explore;