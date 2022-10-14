import Image from 'next/image'


function header() {
    return (
        <div>

            <div className="flex justify-between max-w-6xl">

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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-500">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </div>
                        <input className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focues:border-black rounded-md' type="Text" placeholder='Search' ></input>
                    </div>

                </div>

                {/* Right */}

                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                </svg>






            </div>


        </div>
    )
}

export default header