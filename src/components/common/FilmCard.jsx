import FilmCover from '../../assets/images/FilmCover.png'

export const FilmCard = () => {
    return (
        <div className='w-[200px] h-[400px] border-white border-2 rounded-xl'>
            <div className='h-3/4 w-full'>
                <img src={FilmCover} className='rounded-t-xl h-[300px] w-[200px]' />
            </div>

            <div className='w-full h-1/4 bg-bgWhite rounded-b-xl px-4 py-4'>
                <h1>Ushan</h1>
            </div>
        </div>
    )
}