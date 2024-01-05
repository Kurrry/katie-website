import Image from "next/image";
import { SelectButton } from "./components/SelectButton";
import { Carousel } from "flowbite-react";
import { Card } from "flowbite-react";

const photos1 = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg"];

const photos2 = ["/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg", "/10.jpg"];

export default function Home() {
  return (
    <main>
      <div className="bg-main sm:grid sm:grid-cols-12 sm:gap-x-6 lg:gap-x-0 pl-4 pr-4 pb-0 pt-16">
        <section className="pl-6 2xl:pl-3 sm:col-span-6 2xl:col-span-5">
          <div className="w-auto fixed">
            <div className="flex flex-col w-fit md:ml-20 lg:ml-40 xl:ml-80 bg-black-600 pl-6 border-collapse h-fit">
              <Image
                className="2xl:hidden"
                src="/katie.jpg"
                alt="Katie"
                width={300}
                height={300}
                priority
              />
              <Image
                className="2xl:block hidden"
                src="/katie.jpg"
                alt="Katie"
                width={400}
                height={350}
                priority
              />
              <div className="flex flex-row space-x-1 2xl:space-x-4 mt-[0.81rem]">
                <SelectButton label="BOOKING" />
                <SelectButton label="GALLERY" />
                <SelectButton label="POLICY" />
              </div>
            </div>
          </div>
        </section>

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
