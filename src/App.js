import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import cardImage from "./images/image.png";
import weddingImage from "./images/wedding-photography.png";
import mountainImage from "./images/mountain-bike.png";
import {useState} from "react";

const App = () => {
  const [data, setData] = useState([
    {
      img: cardImage,
      rating: "5.0",
      peopleCount: "6",
      country: "USA",
      title: "Life lessons with Katie Zaferes",
      price: "$136",
      online: false,
    },
    {
      img: weddingImage,
      rating: "5.0",
      peopleCount: "30",
      country: "USA",
      title: "Learn wedding photography",
      price: "$125",
      online: true,
    },
    {
      img: mountainImage,
      rating: "5.0",
      peopleCount: "2",
      country: "USA",
      title: "Group Mountain Biking",
      price: "$50",
      online: true,
    },
  ]);

  return (
    <div>
      <Navbar />
      <Hero />
      <Cards data={data} />
    </div>
  );
};

export default App;
