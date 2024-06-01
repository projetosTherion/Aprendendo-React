import {Home as HomeIcon,Search,Library, ChevronLeft, ChevronRight, Play as PlayIcon} from 'lucide-react'
import { Play } from 'next/font/google';

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
       <div className="flex flex-1">

        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"/>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"/>
          <div className="w-3 h-3 bg-green-500 rounded-full"/>
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex itens-center gap-2 text-xs font-semibold text-zinc-200">
            <HomeIcon />
            home
            </a>
            <a href="" className="flex itens-center gap-2 text-xs font-semibold text-zinc-200">
            <Search />
            Search
            </a>
            <a href="" className="flex itens-center gap-2 text-xs font-semibold text-zinc-200">
            <Library />
            Library
            </a>
          </nav>
          <nav className="mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2">
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Playlist1</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Playlist1</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Playlist1</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Playlist1</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Playlist1</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Playlist1</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Playlist1</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Playlist1</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Playlist1</a>
            <a href='' className="text-sm text-zinc-400 hover:text-zinc-100">Playlist1</a>

          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className="flex items-center gap-3">
           <button className=" rounded-full bg-black/40 p-1">
            <ChevronLeft/>

           </button>
  <button className="rounded-full bg-black/40 p-1">
    <ChevronRight/>
  </button>
         </div>
        
        <h1 className="font-bold  text-4xl mt-10">   Good afternoon</h1>
        <div className="grid grid-cols-3 gap-4 mt-4">
        <a href='#' className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src ="Pink.jpg" width={104} height={104} />
            <strong>The Dark Side of the Moon</strong>
            <button className="w-12 h-9 flex items-center justify-center rounded-[100%] bg-green-400 text-black ml-auto mr-2">
           <PlayIcon />
            </button>
          </a>
        
          <a href='#' className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src ="Pink.jpg" width={104} height={104} />
            <strong>The Dark Side of the Moon</strong>
            <button className="w-12 h-9 flex items-center justify-center rounded-[100%] bg-green-400 text-black ml-auto mr-2">
           <PlayIcon />
            </button>
          </a>
        
          <a href='#' className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src ="Pink.jpg" width={104} height={104} />
            <strong>The Dark Side of the Moon</strong>
            <button className="w-12 h-9 flex items-center justify-center rounded-[100%] bg-green-400 text-black ml-auto mr-2">
           <PlayIcon />
            </button>
          </a>
        
          <a href='#' className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src ="Pink.jpg" width={104} height={104} />
            <strong>The Dark Side of the Moon</strong>
            <button className="w-12 h-9 flex items-center justify-center rounded-[100%] bg-green-400 text-black ml-auto mr-2">
           <PlayIcon />
            </button>
          </a>
          <a href='#' className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src ="Pink.jpg" width={104} height={104} />
            <strong>The Dark Side of the Moon</strong>
            <button className="w-12 h-9 flex items-center justify-center rounded-[100%] bg-green-400 text-black ml-auto mr-2">
           <PlayIcon />
            </button>
          </a>
        
          <a href='#' className="bg-white/10 rounded flex items-center gap-4 overflow-hidden hover:bg-white/20 transition-colors">
            <img src ="Pink.jpg" width={104} height={104} />
            <strong>The Dark Side of the Moon</strong>
            <button className="w-12 h-9 flex items-center justify-center rounded-[100%] bg-green-400 text-black ml-auto mr-2">
           <PlayIcon />
            </button>
          </a>
        
          
        </div>
        </main>
       </div>
       <footer className="bg-zinc-800 border-t  border-zinc-700 p-6"> footer</footer>
      </div>
  );
}
