import { useEffect, useState } from 'react';
import Content from './Components/Content';
import Header from "./Components/Header";
import Footer from './Components/Footer';


export default function App() {
 const [search, setSearch] = useState("");
 const [results, setResults] = useState([]);

 const handleSearch = async () => {
   const response = await fetch(`https://kitsu.io/api/edge/manga?filter[text]=${encodeURIComponent(search)}`);
   const data = await response.json();
   setResults(data.data);
 }

  useEffect(() => {
  handleSearch();
  },[]);

  return (
    <>
     <Header 
     search={search}
     setSearch={setSearch}
     handleSearch={handleSearch}
     />
     <Content 
     results={results}
     />
     <Footer />
    </>
  );
}