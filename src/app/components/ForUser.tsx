import Image from "next/image";


export function ForUser(){
    return (
    <div className='grid grid-cols-8 gap-4 mt-4'> 
        <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src= "/album.jpg" className='w-full' width={120} height={120} alt = "Capa do album Dominic Fike"></Image> 
        <strong className='font-semibold'>Daily Mix 1</strong>
        <span className='text-sm text-zinc-400'>Dominic Fike, Sunburn</span>
        </a>
        <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src= "/album.jpg" className='w-full' width={120} height={120} alt = "Capa do album Dominic Fike"></Image> 
        <strong className='font-semibold'>Daily Mix 1</strong>
        <span className='text-sm text-zinc-400'>Dominic Fike, Sunburn</span>
        </a>
        <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src= "/album.jpg" className='w-full' width={120} height={120} alt = "Capa do album Dominic Fike"></Image> 
        <strong className='font-semibold'>Daily Mix 1</strong>
        <span className='text-sm text-zinc-400'>Dominic Fike, Sunburn</span>
        </a>
        <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src= "/album.jpg" className='w-full' width={120} height={120} alt = "Capa do album Dominic Fike"></Image> 
        <strong className='font-semibold'>Daily Mix 1</strong>
        <span className='text-sm text-zinc-400'>Dominic Fike, Sunburn</span>
        </a>
        <a href="" className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10'>
        <Image src= "/album.jpg" className='w-full' width={120} height={120} alt = "Capa do album Dominic Fike"></Image> 
        <strong className='font-semibold'>Daily Mix 1</strong>
        <span className='text-sm text-zinc-400'>Dominic Fike, Sunburn</span>
        </a>
  </div>)
}