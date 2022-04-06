import Image from 'next/image'
import { Button } from '../ui/button'

function Link({ children }) {
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
                            <svg
                                className="h-6 group-focus:h-5"
                                version="1.1"
                                id="Livello_1"
                                xmlns="http://www.w3.org/2000/svg"
                                x="0px"
                                y="0px"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="white"
                                    d="M20.689,19.705l-4.5-10.5C16.071,8.929,15.8,8.75,15.5,8.75c-0.3,0-0.571,0.179-0.689,0.455l-2.37,5.529
	c-1.852-0.058-3.361-0.191-4.496-0.842c0.246-0.317,0.476-0.652,0.691-0.994c1.082-1.731,1.525-3.881,1.602-6.148H12
	c0.414,0,0.75-0.336,0.75-0.75S12.414,5.25,12,5.25h-1.75V4c0-0.414-0.336-0.75-0.75-0.75S8.75,3.586,8.75,4v1.25H4
	C3.586,5.25,3.25,5.586,3.25,6S3.586,6.75,4,6.75h4.737c-0.077,2.099-0.489,3.938-1.373,5.352c-0.198,0.317-0.399,0.607-0.602,0.869
	c-0.168-0.173-0.319-0.352-0.45-0.534c-0.386-0.536-0.562-1.042-0.562-1.436c0.001-0.414-0.335-0.751-0.749-0.751
	c-0.414-0.001-0.751,0.335-0.751,0.749c-0.001,0.81,0.344,1.619,0.844,2.315c0.185,0.256,0.395,0.505,0.628,0.741
	C5.15,14.511,4.571,14.75,4,14.75c-0.414,0-0.75,0.336-0.75,0.75S3.586,16.25,4,16.25c1.1,0,2.07-0.49,2.908-1.235
	c0.068,0.044,0.138,0.087,0.208,0.129c1.343,0.802,3.013,0.995,4.692,1.067l-1.497,3.493c-0.163,0.381,0.013,0.822,0.394,0.985
	c0.381,0.163,0.822-0.013,0.985-0.394l0.877-2.045h5.868l0.877,2.045c0.163,0.381,0.604,0.557,0.985,0.394
	C20.676,20.526,20.852,20.085,20.689,19.705z M13.209,16.75l2.291-5.346l2.291,5.346H13.209z"
                                />
                            </svg>
                        </button>
                        <Button
                            className="h-10 text-white hover:text-white ml-2 hover:bg-[#ffffff11] hover:border-white"
                            variant="subtle"
                            size="sm"
                            iconPosition="right"
                            color="white"
                            icon={() => (
                                <svg
                                    className="h-6 w-6 ml-2"
                                    version="1.1"
                                    id="Livello_1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    x="0px"
                                    y="0px"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill="white"
                                        d="M7.47,12.53l4,4c0.293,0.293,0.768,0.293,1.061,0l4-4c0.293-0.293,0.293-0.768,0-1.061s-0.768-0.293-1.061,0l-2.72,2.72
	V7.992c0-0.41-0.336-0.742-0.75-0.742s-0.75,0.332-0.75,0.742v6.197l-2.72-2.72c-0.293-0.293-0.768-0.293-1.061,0
	C7.177,11.763,7.177,12.237,7.47,12.53z"
                                    />
                                    <path
                                        fill="white"
                                        d="M20.75,12c0,4.833-3.917,8.75-8.75,8.75c-4.832,0-8.75-3.917-8.75-8.75c0-4.832,3.918-8.75,8.75-8.75
	C16.833,3.25,20.75,7.168,20.75,12z M12,19.25c4.004,0,7.25-3.246,7.25-7.25c0-4.004-3.246-7.25-7.25-7.25
	c-4.004,0-7.25,3.246-7.25,7.25C4.75,16.004,7.996,19.25,12,19.25z"
                                    />
                                </svg>
                            )}
                        >
                            Get the Beta
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
