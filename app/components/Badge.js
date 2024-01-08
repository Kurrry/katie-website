import Image from "next/image";

import  SelectButton from "./SelectButton";

export default function Badge() {
    return (
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
              <div className="flex flex-row md:pl-5 md:space-x-3 md:pt-1 2xl:space-x-8 2xl:pl-16 2xl:pt-2">
                <div className="flex flex-row">
                  <Image
                    src="/insta.png"
                    alt="Instagram"
                    width={25}
                    height={25}
                  />
                  <a href="https://www.instagram.com/katie.justwink/"><h1 className="hover:text-gray-700 pl-1 underline">blinksbykt</h1></a>
                </div>
                <div className="flex flex-row">
                  <Image
                    src="/pin.png"
                    alt="Instagram"
                    width={25}
                    height={25}
                  />
                  <a href="https://maps.app.goo.gl/ebj2XMAXXGEhkrjT6"><h1 className="hover:text-gray-700 pl-1 underline">Okotoks, Alberta</h1></a>
                </div>
              </div>
            </div>

            <Image
            className="2xl:ml-80"
              src="/logoText.png"
              alt="Blinks by KT"
              width={300}
              height={300}
            />
          </div>
        </section>
    )
}