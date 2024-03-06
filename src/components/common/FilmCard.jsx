import FilmCover from '../../assets/images/FilmCover.png'
import HeartLogo from '../../assets/images/HeartLogo.png'
import StarLogo from '../../assets/images/StarLogo.png'

export const FilmCard = ({ img, title, type, rank }) => {
    return (
        <div className='w-[250px] border-white border-2 rounded-xl'>
            <div className='w-full'>
                <img src={img} className='rounded-t-xl h-[320px] w-[250px]' />
            </div>

            <div className='w-full bg-bgWhite rounded-b-xl px-4 py-4'>
                <div className='w-full flex justify-between items-center'>
                    <h1 className='text-white font-bold'>{title}</h1>
                    <img src={HeartLogo} className='w-[20px] h-[20px] mt-1' />
                </div>

                <div className='w-full flex gap-5 mt-3'>
                    <h5 className='text-[12px] font-normal text-white opacity-60'>Tv Series</h5>
                    <h5 className='text-[12px] font-normal text-white opacity-60'>Rank {rank}</h5>
                </div>

                <div className='w-full flex gap-1 mt-2'>
                    <img src={StarLogo} className='w-[10px] h-[10px]'/>
                    <img src={StarLogo} className='w-[10px] h-[10px]'/>
                    <img src={StarLogo} className='w-[10px] h-[10px]'/>
                    <img src={StarLogo} className='w-[10px] h-[10px]'/>
                    <img src={StarLogo} className='w-[10px] h-[10px]'/>
                </div>
            </div>
        </div>
    )
}