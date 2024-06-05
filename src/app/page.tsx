import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Main } from './components/Main'
export default function Home() {
  return (
     <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <Sidebar></Sidebar>
        <Main></Main>
      </div>
      <Footer></Footer>
     </div>
  );
}
