import Logo from '../../assets/images/Logo.png'
import {tabImages, tabNames} from '../../assets/tabs/Tabs';
import ProfileImage from '../../assets/images/ProfileImage.png';
import MikeIcon from '../../assets/images/TalkIcon.png'
import SettingIcon from '../../assets/images/SettingIcon.png'
import {useState} from "react";
import {Link} from "react-router-dom";

export function Header({ selectedTab, setSelectedTab }) {

    return(
        <header className='w-full flex items-center justify-between'>
            <img src={Logo} width={130} />

            <div className='flex gap-4 max-lg:gap-2 max-sm:gap-1'>
                {
                    tabNames.map((name, index) => (
                        <Link to={`/${name}`}
                            className={`bg-bgWhite h-10 w-28 rounded-xl px-4 flex gap-2 items-center justify-center cursor-pointer max-lg:w-full ${selectedTab === name ? 'border-[1px] border-accent' : undefined }`}
                            onClick={() => {setSelectedTab(name)}} key={index}
                        >
                            <img src={tabImages[index]} className='w-[12px] h-[12px]'/>

                            <h6 className='text-white text-[13px] font-semibold max-lg:hidden'>{name}</h6>
                        </Link>

                    ))
                }
            </div>

            <div className='flex items-center gap-2 max-sm:hidden'>
                <div className='rounded-[100%] bg-bgWhite w-8 h-8 flex items-center justify-center'>
                    <img src={MikeIcon} className='w-[60%]'/>
                </div>
                <div className='rounded-[100%] bg-bgWhite w-8 h-8 flex items-center justify-center'>
                    <img src={SettingIcon} className='w-[60%]'/>
                </div>

                <img src={ProfileImage} className='w-[50px] h-[50px] ml-4'/>
            </div>
        </header>
    )
}