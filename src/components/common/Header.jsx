import Logo from '../../assets/images/Logo.png'
import {tabImages, tabNames} from "../../assets/tabs/Tabs";

export function Header() {
    return(
        <header className='w-full flex items-center justify-between'>
            <img src={Logo} width={130} />

            <div className='flex gap-4'>
                {
                    tabNames.map((name, index) => (
                        <div
                            className='bg-bgWhite h-10 w-28 rounded-xl px-4 flex gap-2 items-center justify-center cursor-pointer'>
                            <img src={tabImages[index]} width={15}/>

                            <h6 className='text-white text-[13px] font-semibold'>{name}</h6>
                        </div>

                    ))
                }
            </div>
        </header>
    )
}