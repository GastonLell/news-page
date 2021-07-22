import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import axios from "axios";

function App() {
  //guardar categoria para pedido a la API

  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);
  
  const getNews = async () => {
    
    const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${category}&apiKey=5e533e331e2a4d6980c4c92d8a876f76`;

    const response = await axios.get(url)
    
    setNews(response.data.articles)
  };

  useEffect(() => getNews() , [category]);

  return (
    <div className="container-fluid">
      <Header title="News Page" />
      <Formulario setCategory={setCategory} />
    </div>
  );
}

export default App;
