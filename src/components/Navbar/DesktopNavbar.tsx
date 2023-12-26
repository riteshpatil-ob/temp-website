import Image from 'next/image';

import LogoDark from '@/assets/images/logo-dark.png';

const NAV_ITEMS = [
    {
        title: "Products",
    },
    {
        title: "Use Cases",
    },
    {
        title: "Pricing",
    },
    {
        title: "Developers",
    },
    {
        title: "Resources",
    },
]

const DesktopNavbar = () => {
    return (
        <nav className="fixed w-screen p-5 flex justify-between items-center bg-white">
            <Image src={LogoDark} alt="One Bharat" className="w-28 h-auto" />

            <div className='flex flex-wrap justify-center items-center'>
                {NAV_ITEMS.map(({title}) => (
                    <p key={title} className='text-base mr-8'>{title}</p>
                ))}
            </div>

            <div className='flex flex-wrap justify-center items-center'>
                <div className='border px-6 py-2 border-[#111111]'>Contact Us</div>
            </div>
        </nav>
    )
}

export default DesktopNavbar;