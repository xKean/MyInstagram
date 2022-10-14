import Image from 'next/image'
import {
    HomeIcon,

} from '@heroicons/react/24/solid'

import {
    Bars3Icon,
    PaperAirplaneIcon,
    PlusCircleIcon,
    MagnifyingGlassIcon,
    UserGroupIcon,
    HeartIcon,

} from '@heroicons/react/24/outline'


function header() {
    return (
        <div className='shadow-sm border-g bg-white sticky top-0 z-50'>

            <div className="flex justify-between max-w-6xl mx-5 lg:mx-auto">

                {/* Left*/}
                <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
                    <Image src='/insta_logo_handwritten.png'
                        layout='fill'
                        objectFit='contain'
                        alt='Instagram logo hadnwritten'
                    />
                </div>

                <div className='relative lg:hidden flex-shrink-0 w-10 cursor-pointer'>
                    <Image src='/insta_logo_box.png'
                        layout='fill'
                        objectFit='contain'
                        alt='Instagram logo box'
                    />
                </div>

                {/* Middle - Search input field*/}

                <div className='max-w-xs'>

                    <div className='relative mt-1 p-3 rounded-md'>
                        <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500">
                            </MagnifyingGlassIcon>
                        </div>
                        <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focues:border-black rounded-md' type="Text" placeholder='Search' ></input>
                    </div>

                </div>

                {/* Right */}

                <div className="flex items-center justify-end space-x-4">
                    <HomeIcon className="navBtn" />
                    <Bars3Icon className="h-6 md:hidden cursor-pointer" />
                    <div className='relative navBtn'>
                        <PaperAirplaneIcon className='navBtn rotate-45' />
                        <div className='absolute -top-2 -right-4 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                    </div>
                    <PlusCircleIcon className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />
                    <img src='https://i.imgur.com/sDXy5Y3.png' alt="Profile Pic" className='h-10 rounded-full cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default header