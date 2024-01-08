import  Badge from "./components/Badge";
import { Carousel } from "flowbite-react";

const photos1 = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

const photos2 = ["/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg", "/10.jpg"];

export default function Home() {
  return (
    <main>
      <div className="bg-main sm:grid sm:grid-cols-12 sm:gap-x-6 lg:gap-x-0 pl-4 pr-4 pb-0 pt-16">
        <Badge />

        <section className="sm:mr-5 sm:col-span-6 2xl:col-span-7">
          <div className="hidden sm:grid sm:grid-rows-2 sm:gap-y-2">
            <CarouselComp photos={photos1} />
            <CarouselComp photos={photos2} />
            <CarouselComp photos={photos2} />
          </div>
        </section>
      </div>
    </main>
  );
}

function CarouselComp({ photos }) {
  return (
    <div className="h-auto w-auto sm:h-64 md:h-72 lg:h-80 xl:h-96 xl:w-auto 2xl:h-carousel 2xl:w-carousel">
      <Carousel>
        <img src={photos[0]} alt="..." />
        <img src={photos[1]} alt="..." />
        <img src={photos[2]} alt="..." />
        <img src={photos[3]} alt="..." />
        <img src={photos[4]} alt="..." />
      </Carousel>
    </div>
  );
}
