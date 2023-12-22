import Image from "next/image";
import { SelectButton } from "./components/SelectButton";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";

const photos1 = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

const photos2 = ["/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg", "/10.jpg"];

export default function Home() {
  return (
    <main>
      <div className="bg-teal-100 sm:grid sm:grid-cols-2 sm:gap-x-6 lg:gap-x-0">

        <section className="w-auto">
          <Card className="flex flex-col w-fit sm:mt-4 sm:ml-1 md:mt-8 md:ml-10 lg:mt-16 lg:ml-40 xl:ml-100 bg-black-600 lg:p-3 sm:p-0 border-collapse h-fit">
            <h1 className="font-times-new-roman font-bold italic ml-32 w-fit">
              Katie Ho
            </h1>
            <Image
              className="ml-8"
              src="/katie.jpg"
              alt="Katie"
              width={250}
              height={250}
              priority
            />
            <div className="flex flex-row space-x-2 mt-2">
              <SelectButton label="STYLES" />
              <SelectButton label="BOOKING" />
              <SelectButton label="POLICY" />
              <SelectButton label="ABOUT ME" />
            </div>
          </Card>
        </section>
        <section className="p-3 sm:mr-5 mr-56">
          <div className="h-56 w-100 sm:h-64 sm:w-100 xl:h-80 xl:w-auto 2xl:h-96">
            <CarouselComp photos={photos1} />
          </div>
          <br />
          <div className="h-56 w-100 sm:h-64 sm:w-100 xl:h-80 xl:w-auto 2xl:h-96">
            <CarouselComp photos={photos2} />
          </div>
          
        </section>
      </div>
    </main>
  );
}

function CarouselComp({ photos }) {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
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
