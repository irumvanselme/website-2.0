import { useEffect } from 'react'

const CardContainer = ({ number }: { number: number }) => {
    return (
        <div className="m-3 bg-white text-black text-[10px] flex justify-center items-center h-3.5">
            {number}
        </div>
    )
}

export default function Hero() {
    useEffect(() => {
        let division = document.getElementById('__division') as HTMLDivElement
        if (!division) return

        // document.addEventListener('mousemove', e => {
        //     let [x, y] = [
        //         2350 / 2 - (e.clientY * 2350) / window.innerHeight,
        //         2820 / 2 - (e.clientX * 2820) / window.innerWidth
        //     ]
        //     // console.clear();
        //     division.style.transform = `translate(${x / 10}px, ${y / 10}px)`
        // })
    }, [])

    return (
        <>
            <div
                className="h-screen bg-[#F7F9FC] dark:bg-black overflow-hidden flex items-center justify-center -mt-10 lg:-mt-16"
                id="__hero"
            >
                <div className="h-[235px] w-[280px] scale-[10] bg-black p-[20px] will-change-transform">
                    <div id="__division">
                        <div className="grid grid-cols-5">
                            <CardContainer number={1} />
                            <CardContainer number={2} />
                            <CardContainer number={3} />
                            <CardContainer number={4} />
                            <CardContainer number={5} />
                        </div>
                        <div className="grid grid-cols-4">
                            <CardContainer number={6} />
                            <CardContainer number={7} />
                            <CardContainer number={8} />
                            <CardContainer number={9} />
                        </div>
                        <div className="grid grid-cols-4">
                            <CardContainer number={10} />
                            <CardContainer number={12} />
                            <CardContainer number={13} />
                            <CardContainer number={14} />
                        </div>
                        <div className="grid grid-cols-4">
                            <CardContainer number={15} />
                            <CardContainer number={16} />
                            <CardContainer number={17} />
                            <CardContainer number={18} />
                        </div>
                        <div className="grid grid-cols-4">
                            <CardContainer number={19} />
                            <CardContainer number={20} />
                            <CardContainer number={21} />
                            <CardContainer number={22} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
