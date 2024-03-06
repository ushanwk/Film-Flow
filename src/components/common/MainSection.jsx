import {HomePage} from "../pages/HomePage";
import {Route, Routes} from "react-router-dom";
import {WatchlistPage} from "../pages/WatchlistPage";
import {SearchPage} from "../pages/SearchPage";
import {FavouritePage} from "../pages/FavouritePage";
import {useEffect, useState} from "react";
import {search} from "../../requests/ApiRequests";
import {data} from "autoprefixer";

export const MainSection = () => {

    return(
        <Routes>
            <Route path='' element={<HomePage />}></Route>
            <Route path='/Home' element={<HomePage />}></Route>
            <Route path='/Search' element={<SearchPage />}></Route>
            <Route path='/Watchlist' element={<WatchlistPage />}></Route>
            <Route path='/Favourite' element={<FavouritePage />}></Route>
        </Routes>
    );

}