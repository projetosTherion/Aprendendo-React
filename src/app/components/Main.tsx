import { ChevronLeft, ChevronRight } from "lucide-react";
import { Playlists } from "./Playlists";
import { ForUser } from "./ForUser";


export function Main(){
    return(       
    <main className="flex-1 p-6">
        <div className= "flex items-center gap-4 gap-5">
        <button className="rounded-full bg-black/40 p-1">
            <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
            <ChevronRight />
        </button>
        </div>


        <h1 className='font-semibold text-3xl mt-10'>Good Afternoon</h1>

        <Playlists></Playlists>

        <h2 className='font-semibold text-2xl mt-10'>Made for Henrique Cois</h2>
        <ForUser></ForUser>
    </main>)
}