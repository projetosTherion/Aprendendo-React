import {Home , Search, Library} from 'lucide-react' 
export function Sidebar(){

    return(
        <aside className = "w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className = "w-3 h-3 bg-red-500 rounded-full"></div>
            <div className = "w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className = "w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className = "space-y-5 mt-10">
            <a href="" className= "flex itens-center gap-4 text-sn font-semibold text-zinc-200">
              <Home />
              Home  
            </a>
            <a href="" className= "flex itens-center gap-4 text-sn font-semibold text-zinc-200">
              <Search />
              Search     
           </a>
            <a href="" className= "flex itens-center gap-4 text-sn font-semibold text-zinc-200">
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-3">
            <a href="" className = "text-sn text-zinc-400 hover:text-zinc-100 ">HIT ME HARD AND SOFT</a>
            <a href="" className = "text-sn text-zinc-400 hover:text-zinc-100 ">We Are Not Your Kind </a>
            <a href="" className = "text-sn text-zinc-400 hover:text-zinc-100 ">一 </a>
            <a href="" className = "text-sn text-zinc-400 hover:text-zinc-100 ">二 </a>
            <a href="" className = "text-sn text-zinc-400 hover:text-zinc-100 ">三</a>
          </nav>

        </aside>
    )
}