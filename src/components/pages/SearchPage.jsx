import {FilmCard} from "../common/FilmCard";
import {useEffect, useState} from "react";
import {search} from "../../requests/ApiRequests";

export const SearchPage = () => {

    const [searchValue, setSearchValue] = useState('');

    const [filmData, setFilmData] = useState([]);

    useEffect(() => {
        search(searchValue).then(res => {
            setFilmData(res.data.d);
        });
    }, [searchValue]);

    const handleKeyDownSearch = (event) => {
        if (event.key === 'Enter') {
            setSearchValue(event.target.value);
        }
    };

    return (
        <section className='w-full mt-20 mb-20'>
            <div className='w-full flex items-center justify-center'>
                <h1 className='text-bgWhite  font-bold text-[100px]'>Search What You Want</h1>
            </div>

            <div className='w-full flex items-center justify-center mt-5'>
                <input
                    className='bg-bgWhite border-[1px] border-white w-96 h-12 rounded-xl px-4 text-white'
                    placeholder='Search Here...'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyDownSearch}
                />
            </div>

            <div className='w-full flex justify-between mt-24'>


                {
                    filmData? (
                        filmData?.map((item, index) => (
                            index > 0 && index < 6 && (<FilmCard key={index} img={item?.i?.imageUrl} title={item?.l} rank={item?.i?.width}/>)
                        ))
                    ) : (
                        <h1>Loading....</h1>
                    )
                }

            </div>
        </section>
    )
}