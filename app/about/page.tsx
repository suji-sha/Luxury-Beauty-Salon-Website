import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
export default function AboutPage() {
  return (
    <div className="space-y-16 bg-brand-bg">
      {/* Hero Section with Background Image */}
      <section className="relative h-[500px]">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/image/32.jpg')] bg-cover bg-center"></div>

        {/* Overlay Text */}
        <div className="relative z-10 h-full flex items-center justify-start px-10">
          <div className="max-w-xl">
            {/* <h1 className="text-3xl md:text-4xl font-bold text-brand-cta">
              We bring out your natural beauty through professional makeup
              crafted with care and creativity.
            </h1> */}
          </div>
        </div>
      </section>

      {/* Secondary Section */}
      {/* 1 section */}
      <section className="bg-brand-bg">
        <div className=" container grid grid-cols-[40%_60%] gap-6 items-start m-20">
          {/* Left side card */}
          <Card className="p-0 h-96 ">
            <CardContent className="p-0 h-full">
              <div className="h-full w-full">
                <img
                  className="h-full w-full object-cover"
                  src="/image/2.jpg"
                  alt="Makeup"
                />
              </div>
            </CardContent>
          </Card>
          {/* Right side content */}
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brand-text">
              The Art of Makeup
            </h2>
            <p className="text-brand-muted text-justify">
              Makeup is a creative way to enhance natural beauty, boost
              confidence, and express personal style. Whether it’s a subtle
              everyday look or a bold, glamorous makeover, makeup allows people
              to highlight their best features and explore different aesthetics.
              From foundation and mascara to lipstick and highlighter, each
              product adds its own touch, helping transform a look and reflect
              individuality.
            </p>

            <ul className="list-disc pl-5 space-y-2 text-brand-text">
              <li>
                Enhances Natural Beauty – Makeup highlights your best features
                and brings out a polished look.
              </li>
              <li>
                Boosts Confidence – Wearing makeup can make you feel more
                confident and self-assured.
              </li>
              <li>
                Creative Expression – It allows individuals to showcase their
                personal style and creativity.
              </li>
              <li>
                Versatility – From subtle daytime looks to bold evening glam,
                makeup adapts to any occasion.
              </li>
              <li>
                Variety of Products – Items like foundation, mascara, lipstick,
                and highlighter each contribute to the overall look.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 2 section */}
      <section className=" bg-brand-secondary py-5">
        <div className="container  mx-auto px-2 ">
          <h1 className="text-3xl text-brand-accent text-center">
            We Offer Discount
          </h1>
          <p className="text-2xl text-brand-muted text-center py-2">
            Pamper yourself with flawless beauty! Enjoy an exclusive 20% off on
            all makeup services this month and glow like never before.
          </p>

          {/* card */}
          <div className="grid grid-cols-3 gap-6 items-start ">
            <div className="rounded-lg bg-brand-bg w-100">
              {/* card 1*/}
              <Card className="p-0 h-120">
                <CardContent className="p-0 h-full">
                  <div className="h-full w-full">
                    <img
                      className="h-full w-full object-cover"
                      src="/image/7.jpg"
                      alt="Nail Art"
                    />
                  </div>
                </CardContent>
              </Card>
              <div className="p-4 ">
                <h3 className="text-lg font-semibold mb-2 text-brand-text ">
                  Nail Art
                </h3>
                <p className="text-sm mb-2 text-brand-muted ">
                  Upgrade your nails with our limited-time discount
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-brand-bg w-100">
              {/* card 2 */}
              <Card className="p-0 h-120">
                <CardContent className="p-0 h-full">
                  <div className="h-full w-full">
                    <img
                      className="h-full w-full object-cover"
                      src="/image/8.jpg"
                      alt="hairstyle"
                    />
                  </div>
                </CardContent>
              </Card>
              <div className="p-4 ">
                <h3 className="text-lg font-semibold mb-2  text-brand-text">
                  Hair Style
                </h3>
                <p className="text-sm mb-2 text-brand-muted ">
                  Transform your hair with our limited-time discount
                </p>
              </div>
            </div>
            <div className="rounded-lg bg-brand-bg w-100">
              {/* card 3*/}
              <Card className="p-0 h-120">
                <CardContent className="p-0 h-full">
                  <div className="h-full w-full">
                    <img
                      className="h-full w-full object-cover"
                      src="/image/9.jpg"
                      alt="make up"
                    />
                  </div>
                </CardContent>
              </Card>
              <div className="p-4 ">
                <h3 className="text-lg font-semibold mb-2 text-brand-text ">
                  Make Up
                </h3>
                <p className="text-sm mb-2 text-brand-muted ">
                  Enhance your beauty with our special makeup offer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 section */}
      <section className="bg-brand-bg">
        <div className="container max-w-3xl mx-auto  ">
          <h1 className="text-3xl text-brand-accent text-center font-semibold m-2">
            Gallery
          </h1>
          <p className="text-xl text-brand-muted text-center m-3">
            "Makeup is more than colors—it's confidence, creativity, and the art
            of enhancing your natural beauty. Every shade, every brushstroke,
            brings out a version of you that shines with elegance and grace."
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px] mb-6 md:mb-12">
            <div className="row-span-1 rounded-xl">
              <div className="relative w-full h-full">
                <img
                  className="h-full w-full object-cover"
                  src="/image/16.jpg"
                  alt="make up"
                />
              </div>
            </div>
            <div className="row-span-2 rounded-xl ">
              <div className="w-full h-full ">
                <img
                  className="h-full w-full object-cover"
                  src="/image/11.jpg"
                  alt="make up "
                />
              </div>
            </div>
            <div className="row-span-2 rounded-xl ">
              <div className="relative w-full h-full">
                <img
                  className="h-full w-full object-cover"
                  src="/image/14.jpg"
                  alt="make up "
                />
              </div>
            </div>
            <div className="row-span-2 rounded-xl ">
              <div className="relative w-full h-full">
                <img
                  className="h-full w-full object-cover"
                  src="/image/15.jpg"
                  alt="Hairstyle "
                />
              </div>
            </div>
            <div className="row-span-1 rounded-xl">
              <div className="relative w-full h-full">
                <img
                  className="h-full w-full object-cover"
                  src="/image/19.jpg"
                  alt="make up"
                />
              </div>
            </div>
            <div className="row-span-1 rounded-xl">
              <div className="relative w-full h-full">
                <img
                  className="h-full w-full object-cover"
                  src="/image/20.jpg"
                  alt="make up"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 section */}
      <section className="bg-brand-secondary">
        <div className="center">
          <h1 className="text-3xl text-brand-accent text-center font-semibold py-5 ">
            FeedBack by Customers
          </h1>
        </div>
        <div className="flex justify-center items-center ">
          <Carousel className=" m-30 ">
            <CarouselContent className="flex gap-3">
              {/* 1st Item*/}
              <CarouselItem className="p-2 basis-1/3 ">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className=" flex flex-col items-center justify-center h-full p-4 text-center">
                    <div className=" flex mb-2 gap-1 p-3 text-brand-cta">
                      <div className="relative w-4 h-4 inline-block ">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-text py-5 ">
                      "Amazing service! Loved the makeup and hospitality."
                      "Amazing service! Loved the makeup and hospitality."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              {/* 2nd item */}
              <CarouselItem className="p-2 basis-1/3">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className=" flex mb-2 gap-1 p-3 text-brand-cta">
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-text py-5 ">
                      "Amazing service! Loved the makeup and hospitality."
                      "Amazing service! Loved the makeup and hospitality."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              {/* 3rd item */}
              <CarouselItem className="p-2 basis-1/3">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className=" flex mb-2 gap-1 p-3 text-brand-cta">
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-text py-5 ">
                      "Amazing service! Loved the makeup and hospitality."
                      "Amazing service! Loved the makeup and hospitality."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              {/* 4th item */}
              <CarouselItem className="p-2 basis-1/3">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className=" flex mb-2 gap-1 p-3 text-brand-cta">
                      <div className="relative w-4 h-4 inline-block text-brand-cta">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-text py-5 ">
                      "Amazing service! Loved the makeup and hospitality."
                      "Amazing service! Loved the makeup and hospitality."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              {/* 5th item */}
              <CarouselItem className="p-2 basis-1/3">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className=" flex mb-2 gap-1 p-3 text-brand-cta">
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-text py-5 ">
                      "Amazing service! Loved the makeup and hospitality."
                      "Amazing service! Loved the makeup and hospitality."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              {/* 6th item */}
              <CarouselItem className="p-2 basis-1/3">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className=" flex mb-2 gap-1 p-3 text-brand-cta">
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-text py-12 ">
                      "Amazing service! Loved the makeup and hospitality."
                      "Amazing service! Loved the makeup and hospitality."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
              {/* 7th item */}
              <CarouselItem className="p-2 basis-1/3">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <div className=" flex mb-2 gap-1 p-3 text-brand-cta">
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                      <div className="relative w-4 h-4 inline-block">
                        <p>*</p>
                      </div>
                    </div>
                    <p className="text-sm text-brand-text py-12 ">
                      "Amazing service! Loved the makeup and hospitality."
                      "Amazing service! Loved the makeup and hospitality."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>
    </div>
  );
}
