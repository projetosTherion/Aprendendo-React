import {HomeIcon, Search, Library} from "lucide-react"

export function Sidebar(){
    return( 
    <aside className="w-72 bg-zinc-950 p-6">
        <nav className="space-y-5">
        <a href="" className='flex items-center gap-4 gap-3 text-sm font-semibold text-zinc-200'>
            <HomeIcon />
            Home
        </a>
        <a href="" className='flex items-center gap-4 gap-3 text-sm font-semibold text-zinc-200'>
            <Search />
            Search
        </a>
        <a href="" className='flex items-center gap-4 gap-3 text-sm font-semibold text-zinc-200'>
            <Library />
            Your Library              
        </a>

        </nav>
        
        <nav className="mt-6 pt-6 border-t border-zinc-400 flex flex-col gap-3">
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Músicas do Verão</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Sons do Coração</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Melodias Românticas</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Ritmo Contagiante</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Trilha Sonora da Vida</a>
        <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Vibrações Relaxantes</a>
        </nav>
  </aside>)
}