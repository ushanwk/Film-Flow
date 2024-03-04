import HiLogo from '../../assets/images/HiLogo.png';
import {FilmCard} from "../common/FilmCard";

export const HomePage = () => {
    return (
        <section className='w-full mt-20 mb-20 font-bold'>

            <div className='w-full flex items-center gap-5'>
                <img src={HiLogo} className='w-12 h-12'/>
                <h1 className='text-[50px] text-white font-semibold'>Welcome Back</h1>
            </div>

            <h1 className='text-[70px] text-accent font-black'>Ushan Kaushalya</h1>

            <div className='w-full mt-14'>
                <div className='w-full flex justify-between items-center'>
                    <h4 className='text-white text-[30px] font-normal'>Recommend for you</h4>

                    <div className='w-28 h-10 border-[1px] border-white rounded-full flex items-center justify-center'>
                        <h5 className='text-white font-normal'>See all</h5>
                    </div>
                </div>

                <div className='w-full flex justify-between mt-5'>

                    <FilmCard />

                </div>

            </div>

        </section>
    )
}