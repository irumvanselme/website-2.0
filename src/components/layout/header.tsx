import Image from 'next/image'
import React from 'react'
import ArrowDownIcon from '../assets/icons/arrow-down'
import LanguageIcon from '../assets/icons/language'
import { Button } from '../ui/button'

function Link({ children }: { children: React.ReactNode }) {
    return (
        <a
            className="flex h-full items-center px-4 text-caption text-[#FFFFFFCC] hover:text-white focus:font-medium focus:text-white "
            href="#"
        >
            {children}
        </a>
    )
}

export default function Header() {
    return (
        <div className="h-12 bg-black text-white xs1:px-2 xs:px-4 sm:px-6 lg:h-16 lg:px-32 xl:px-36 2xl:px-56 3xl:px-[272px] 4xl:px-[464px] 5xl:px-[784px] 6xl:px-[1224px]">
            <div className="flex h-full w-full items-center justify-between">
                <Image
                    src={'/images/logo-group-horizontal-light.svg'}
                    width={100}
                    height={100}
                    alt="Logo1"
                />

                <div className="flex h-full items-center">
                    <div className="flex h-full items-center">
                        <Link>Home</Link>
                        <Link>App</Link>
                        <Link>Mupi</Link>
                        <Link>Contact us</Link>
                    </div>
                    <div className="mx-3 h-6 w-[1px] bg-gray-400" />
                    <div className="flex">
                        <button className="group flex h-10 w-10 items-center justify-center rounded-3xl hover:bg-[#FFFFFF0D] focus:bg-[#FFFFFF0D] group">
                            <LanguageIcon />
                        </button>
                        <Button
                            className="h-10 text-white hover:text-white ml-2 hover:bg-[#ffffff11] hover:border-white"
                            variant="subtle"
                            size="sm"
                            iconPosition="right"
                            color="white"
                            icon={ArrowDownIcon}
                        >
                            Get the Beta
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
