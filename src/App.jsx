import Random from "./Components/Random";
import Tag from "./Components/Tag";

export default function App() {
  return(
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
       <h1 className="bg-white rounded-xl w-11/12 mt-[35px] text-center
        px-8 py-1 text-3xl font-bold">RANDOM GIFs</h1>
       <div className="flex flex-col w-full items-center  mt-4">
        <Random />
        <Tag />
       </div>
    </div>
  ) ;
  
}
