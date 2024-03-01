import './App.css';
import {Header} from "./components/common/Header";
import {Footer} from "./components/common/Footer";
import {MainSection} from "./components/common/MainSection";
import {useState} from "react";

function App() {

    const [selectedTab, setSelectedTab] = useState('Home');

    return (
        <div className="App pt-10 pb-10
        px-48 max-2xl:px-36 max-xl:px-28 max-lg:px-16 max-md:px-10 max-sm:px-2
        w-full bg-[url('assets/images/Background.png')] bg-cover flex-col justify-center"
        >

            <Header selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
            <MainSection selectedTab={selectedTab} />
            <Footer/>

        </div>
    );
}

export default App;
