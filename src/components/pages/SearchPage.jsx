import {FilmCard} from "../common/FilmCard";

export const SearchPage = () => {
    return (
        <section className='w-full mt-20 mb-20'>
            <div className='w-full flex items-center justify-center'>
                <h1 className='text-bgWhite  font-bold text-[100px]'>Search What You Want</h1>
            </div>

            <div className='w-full flex items-center justify-center mt-5'>
                <input className='bg-bgWhite border-[1px] border-white w-96 h-12 rounded-xl px-4 text-white'
                       placeholder='Search Here...'/>
            </div>

            <div className='w-full flex justify-between mt-24'>

                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />
                <FilmCard />

            </div>
        </section>
    )
}