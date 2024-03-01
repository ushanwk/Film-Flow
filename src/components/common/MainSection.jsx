import {HomePage} from "../pages/HomePage";
import {SearchPage} from "../pages/SearchPage";
import {WatchlistPage} from "../pages/WatchlistPage";
import {FavouritePage} from "../pages/FavouritePage";

export const MainSection = ({ selectedTab }) => {

    if(selectedTab === 'Home'){
        return (
            <section>
                <HomePage />
            </section>
        )
    }else if(selectedTab === 'Search'){
        return (
            <section>
                <SearchPage />
            </section>
        )
    }else if(selectedTab === 'Watchlist'){
        return (
            <section>
                <WatchlistPage />
            </section>
        )
    }else if(selectedTab === 'Favourite'){
        return (
            <section>
                <FavouritePage />
            </section>
        )
    }else{
        return (
            <section className='flex items-center justify-center w-full h-40'>
                <h1 className='text-white'>Some Error Occurs</h1>
            </section>
        )
    }


}