import { Shuffle, SkipBack, PlayIcon, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 } from "lucide-react"
import Image from "next/image"
export function Footer(){
    return(      
    <footer className="bg-zinc-900 border-t border-zinc-800 p-6 py-4 flex items-center justify-between">
        <div className='flex items-center gap-3'>
        <Image src= "/album.jpg" width={56} height={56} alt = "Capa do album Dominic Fike"></Image> 
        <div className='flex flex-col'>
            <strong className='font-normal'>Mona Lisa</strong>
            <span className='text-xs text-zinc-400'>Dominic Fike</span>
        </div>
        </div>
        <div className='flex flex-col items-center'>
        <div className='flex items-center gap-3'>
            <Shuffle size= {20} className='text-zinc-200'></Shuffle>
            <SkipBack size= {20} className='text-zinc-200'></SkipBack>
            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black'>
                <PlayIcon />
            </button>
            <SkipForward size= {20} className='text-zinc-200'></SkipForward>
            <Repeat size= {20} className='text-zinc-200'></Repeat>
        </div>
        <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
                <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-500'>2:31</span>
        </div>
        </div>
        <div className='flex items-center gap-2'>
        <Mic2 size= {20}></Mic2>
        <LayoutList size= {20}></LayoutList>
        <Laptop2 size={20}></Laptop2>
        <div className='flex items-center gap-2'>
            <Volume size= {20}></Volume>
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
                <div className='bg-zinc-200 w-18- h-1 rounded-full'></div>
            </div>
        </div>
        <div>
            <Maximize2 size={20}></Maximize2>
        </div>
        </div>
    </footer>)
}