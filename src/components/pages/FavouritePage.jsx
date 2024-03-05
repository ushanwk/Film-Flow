import {FilmCard} from "../common/FilmCard";

export const FavouritePage = () => {
    return (
        <section className='w-full mt-20 mb-20'>
            <div className='w-full flex items-center justify-center'>
                <h1 className='text-bgWhite font-bold text-[100px]'>Favourite Things...</h1>
            </div>

            <div className='w-full mt-[85px]'>
                <div className='w-full flex justify-between items-center'>
                    <h4 className='text-white text-[30px] font-normal'>Your Favourites</h4>

                    <div className='w-28 h-10 border-[1px] border-white rounded-full flex items-center justify-center'>
                        <h5 className='text-white font-normal'>See all</h5>
                    </div>
                </div>

                <div className='w-full flex justify-between mt-8'>

                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>
                    <FilmCard/>

                </div>
            </div>
        </section>
    )
}