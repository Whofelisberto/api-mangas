import { Search } from "lucide-react";
import logo from '../assets/icon.png';

interface HeaderProps {
  search: string;
  setSearch: (value: string) => void;
  handleSearch: () => void;
}

export default function Header({ search, setSearch, handleSearch }: HeaderProps) {
  
  return (
     <header className="bg-black text-white p-2 border-b border-pink-500">
      <nav className="flex items-center space-x-4 ml-20 mr-20">
        <h1>
          <img className=" max-sm:hidden" src={logo} alt="" width={30} height={20} />
        </h1>
        <div className="flex justify-between items-center w-full">
          <ul className="flex space-x-4 uppercase font-semibold max-sm:text-xs">
            <li><a href="/">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
          <div className="flex items-center">
            <Search
              className="w-10 h-10 p-2 cursor-pointer hover:bg-pink-300"
              onClick={handleSearch}
            />
            <input
              type="text"
              placeholder="Buscar manga"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 border border-gray-900 focus:outline-none focus:ring-1 focus:ring-pink-300"
            />
          </div>
        </div>
      </nav>
    </header>
  );
}