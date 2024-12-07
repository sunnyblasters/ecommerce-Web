import Image from "next/image";
import Hero from "./components/heroSection/Hero";

import Carousel from "./components/flashSales/Carousel";
import CarouselCategory from "./components/category/CarouselCategory";
import ParentProducts from "./components/products/ParentProducts";
import CarouselExplore from "./components/exploreProducts/CarouselExplore";
import MultipleExplore from "./components/exploreProducts/MultipleExplore";
import NewArrival from "./components/newArrival/NewArrival";
import ParentServices from "./components/services/ParentServices";

import MusicCategory from "./components/Music/Music";
// import ChildServices from "./components/services/ChildServices";


export default function Home() {
  return (
    <main>
        <Hero />
        <hr />
        <Carousel />
        <hr />
        <CarouselCategory />
        <hr />
        <ParentProducts />
        <hr />
        <MusicCategory />
        <hr />
        <MultipleExplore />
        <hr />
        <NewArrival />
        <hr />
        {/* <ChildServices /> */}
        <ParentServices />
    </main>
  );
}
