import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  Scissors,
  Heart,
  Calendar,
  Instagram,
  Youtube,
  Star,
  Quote,
  ArrowRight,
  Dot,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { TikTok_Sans } from "next/font/google";

export default function HomePage() {
  return (
    <>
      {/* Hero Section  */}
      <section className="relative h-screen w-full">
        <div className="absolute inset-0 bg-[url('/image/2.jpg')] bg-cover bg-center h-full w-full bg-fixed"></div>

        <div className="relative flex h-full items-center justify-start px-8">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-brand-cta text-white text-lg px-6 py-3">
              Welcome to Luxury Beauty Salon
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-brand-secondary drop-shadow-lg">
              Reveal Your True Beauty
            </h1>

            <p className="mt-6 text-lg md:text-xl text-brand-secondary/90 drop-shadow-md">
              Experience luxury hair, makeup, skin, and wellness treatments
              designed to make you look and feel radiant — every single day.
            </p>
          </div>
        </div>
      </section>

      {/* Info Section  */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <div className="p-6 bg-white rounded-full mb-5 shadow-lg">
              <Sparkles className="h-12 w-12 text-brand-cta" />
            </div>
            <h3 className="text-2xl font-bold text-brand-accent">
              Premium Products
            </h3>
            <p className="text-brand-muted mt-3 max-w-xs">
              We use only the finest international brands — Kerastase, Olaplex,
              Dyson, Guinot & more
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-6 bg-white rounded-full mb-5 shadow-lg">
              <Scissors className="h-12 w-12 text-brand-cta" />
            </div>
            <h3 className="text-2xl font-bold text-brand-accent">
              Expert Stylists
            </h3>
            <p className="text-brand-muted mt-3 max-w-xs">
              Award-winning artists trained in Paris, London & New York
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-6 bg-white rounded-full mb-5 shadow-lg">
              <Heart className="h-12 w-12 text-brand-cta" />
            </div>
            <h3 className="text-2xl font-bold text-brand-accent">
              Relax & Enjoy
            </h3>
            <p className="text-brand-muted mt-3 max-w-xs">
              A serene sanctuary with champagne, aromatherapy & personalized
              care
            </p>
          </div>
        </div>
      </section>

      {/* About the Salon */}
      <section className="py-20 bg-white">
        <div className="max-w-8xl  6 mx-auto px-6 text-center">
          <Badge className="mb-4 bg-brand-cta text-white">Our Story</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-accent mb-8">
            Where Beauty Meets Artistry
          </h2>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="text-left space-y-5 text-brand-text">
              <p className="text-lg leading-relaxed">
                For over a decade,
                <span className="font-semibold text-brand-cta">
                  Luxury Beauty Salon
                </span>
                has been the ultimate destination for those who refuse to
                compromise on elegance.
              </p>
              <p className="text-lg leading-relaxed text-brand-muted">
                From precision balayage and flawless bridal makeup to advanced
                skin rejuvenation and wellness rituals — every treatment is
                crafted with passion, precision, and the world's most coveted
                products.
              </p>
              <p className="text-lg leading-relaxed">
                Step into our chic sanctuary in the heart of the city and let
                our master stylists reveal the most beautiful version of you.
              </p>
              <Button className="mt-6 bg-brand-cta hover:bg-brand-cta/90">
                Discover More About Us
              </Button>
            </div>
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 overflow-hidden">
              <img
                src="/image/34.jpg"
                alt="Hair Artistry"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Instagram & TikTok Gallery */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-7xl 6 mx-auto px-6 text-center">
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-brand-accent mb-4">
            Follow Our Journey
          </h2>

          {/* Subtext */}
          <p className="text-xl text-brand-muted mb-12">
            Get inspired by real transformations and behind-the-scenes magic
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* 1 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-0">
              <div className="relative w-full h-full ">
                <img
                  src="/image/37.jpg"
                  alt="before and after"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
                  <Instagram className="h-7 w-7 text-white drop-shadow-lg" />
                  <Youtube className="h-7 w-7 text-white drop-shadow-lg" />
                </div> */}
              </div>
            </Card>

            {/* 2 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-0">
              <div className="relative w-full h-full">
                {/* YouTube thumbnail as default */}
                <img
                  src="https://img.youtube.com/vi/dLgdFbIaij0/hqdefault.jpg"
                  alt="Video thumbnail"
                  className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                />

                {/* Video appears only on hover */}
                <iframe
                  src="https://www.youtube.com/embed/dLgdFbIaij0?autoplay=1&mute=1&loop=1&controls=0&playlist=dLgdFbIaij0"
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  allow="autoplay; encrypted-media"
                ></iframe>

                {/* for MP4 video only}
                {/* <video
                  src="https://www.youtube.com/watch?v=dLgdFbIaij0"
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                /> */}

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
                    <Instagram className="h-7 w-7 text-white drop-shadow-lg" />
                    <Youtube className="h-7 w-7 text-white drop-shadow-lg" />
                  </div> */}
              </div>
            </Card>

            {/* 3 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-0">
              <div className="relative w-full h-full">
                {/* YouTube thumbnail as default */}
                <img
                  src="https://img.youtube.com/vi/Y4kpbLwT8R8/hqdefault.jpg"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                />

                {/* Video appears only on hover */}
                <iframe
                  src="https://www.youtube.com/embed/Y4kpbLwT8R8?autoplay=1&mute=1&loop=1&controls=0&playlist=Y4kpbLwT8R8"
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  allow="autoplay; encrypted-media"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
                  <Instagram className="h-7 w-7 text-white drop-shadow-lg" />
                  <Youtube className="h-7 w-7 text-white drop-shadow-lg" />
                </div> */}
              </div>
            </Card>

            {/* 4 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-0">
              <div className="relative w-full h-full">
                <img
                  src="/image/37.jpg"
                  alt="before and after"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
                  <Instagram className="h-7 w-7 text-white drop-shadow-lg" />
                  <Youtube className="h-7 w-7 text-white drop-shadow-lg" />
                </div> */}
              </div>
            </Card>

            {/* 5 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-0">
              <div className="relative w-full h-full">
                {/* YouTube thumbnail as default */}
                <img
                  src="https://img.youtube.com/vi/Y4kpbLwT8R8/hqdefault.jpg"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                />

                {/* Video appears only on hover */}
                <iframe
                  src="https://www.youtube.com/embed/Y4kpbLwT8R8?autoplay=1&mute=1&loop=1&controls=0&playlist=Y4kpbLwT8R8"
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  allow="autoplay; encrypted-media"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
                  <Instagram className="h-7 w-7 text-white drop-shadow-lg" />
                  <Youtube className="h-7 w-7 text-white drop-shadow-lg" />
                </div> */}
              </div>
            </Card>

            {/* 6 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-0">
              <div className="relative w-full h-full">
                {/* YouTube thumbnail as default */}
                <img
                  src="https://img.youtube.com/vi/dLgdFbIaij0/hqdefault.jpg"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                />

                {/* Video appears only on hover */}
                <iframe
                  src="https://www.youtube.com/embed/dLgdFbIaij0?autoplay=1&mute=1&loop=1&controls=0&playlist=dLgdFbIaij0"
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  allow="autoplay; encrypted-media"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
                  <Instagram className="h-7 w-7 text-white drop-shadow-lg" />
                  <Youtube className="h-7 w-7 text-white drop-shadow-lg" />
                </div> */}
              </div>
            </Card>

            {/* 7 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-0">
              <div className="relative w-full h-full">
                <img
                  src="/image/37.jpg"
                  alt="before and after"
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
                  <Instagram className="h-7 w-7 text-white drop-shadow-lg" />
                  <Youtube className="h-7 w-7 text-white drop-shadow-lg" />
                </div> */}
              </div>
            </Card>

            {/* 8 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-300 p-0">
              <div className="relative h-full w-full">
                {/* YouTube thumbnail as default */}
                <img
                  src="https://img.youtube.com/vi/dLgdFbIaij0/hqdefault.jpg"
                  alt="Video thumbnail"
                  className="w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                />

                {/* Video appears only on hover */}
                <iframe
                  src="https://www.youtube.com/embed/dLgdFbIaij0?autoplay=1&mute=1&loop=1&controls=0&playlist=dLgdFbIaij0"
                  className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  allow="autoplay; encrypted-media"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-3">
                  <Instagram className="h-7 w-7 text-white drop-shadow-lg" />
                  <Youtube className="h-7 w-7 text-white drop-shadow-lg" />
                </div> */}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          {/* Badge */}
          <Badge className="mb-4 bg-brand-cta text-white">
            Our Signature Services
          </Badge>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-brand-accent mb-12">
            Indulge in Excellence
          </h2>

          {/* 3 Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* 1 — Hair Artistry */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4 overflow-hidden">
                  <img
                    src="/image/33.jpg"
                    alt="Hair artistry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-brand-accent">
                  Hair Artistry
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-brand-muted flex flex-wrap gap-2 items-center">
                  <span className="flex items-center ">
                    <Dot className="h-4 w-4 text-brand-muted" />
                    Balayage
                  </span>

                  <span className="flex items-center ">
                    <Dot className="h-4 w-4 text-brand-muted" />
                    Keratin
                  </span>

                  <span className="flex items-center ">
                    <Dot className="h-4 w-4 text-brand-muted" />
                    Extensions
                  </span>

                  <span className="flex items-center ">
                    <Dot className="h-4 w-4 text-brand-muted" />
                    Bridal
                  </span>
                </CardDescription>
                <Link href="/services/hair-artistry" passHref>
                  <Button variant="link" className="mt-4 text-brand-cta p-0">
                    Explore
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 2 — Flawless Makeup */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4 overflow-hidden">
                  <img
                    src="/image/35.jpg"
                    alt="Flawless makeup"
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardTitle className="text-2xl text-brand-accent">
                  Flawless Makeup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-brand-muted flex flex-wrap gap-2 items-center">
                  <span className="flex items-center ">
                    <Dot className="h-4 w-4 text-brand-muted" />
                    Airbrush
                  </span>

                  <span className="flex items-center ">
                    <Dot className="h-4 w-4 text-brand-muted" />
                    Editorial
                  </span>
                  <span className="flex items-center ">
                    <Dot className="h-4 w-4 text-brand-muted" />
                    Special Events
                  </span>
                </CardDescription>
                <Link href="/services/flawless-makeup" passHref>
                  <Button variant="link" className="mt-4 text-brand-cta p-0">
                    Explore
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* 3 — Skin & Wellness */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-shadow">
              <CardHeader>
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 mb-4 overflow-hidden">
                  <img
                    src="/image/36.jpg"
                    alt="Flawless makeup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardTitle className="text-2xl text-brand-accent">
                  Skin & Wellness
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg text-brand-muted flex flex-wrap gap-2 items-center ">
                  <span className="flex items-center ">
                    <Dot className="h-4 w-4 text-brand-muted" />
                    Hydrafacial
                  </span>

                  <span className="flex items-center ">
                    <Dot className="h-4 w-4 text-brand-muted" />
                    Guinot
                  </span>

                  <span className="flex items-center">
                    <Dot className="h-4 w-4 text-brand-muted " />
                    Massage Rituals
                  </span>
                </CardDescription>
                <Link href="/services/skin-wellness" passHref>
                  <Button variant="link" className="mt-4 text-brand-cta p-0">
                    Explore
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 bg-brand-bg">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-accent mb-12">
            Loved by Our Guests
          </h2>

          <Carousel className="w-full">
            <CarouselContent>
              {/*  Item 1  */}
              <CarouselItem className="md:basis-1/2">
                <Card className="bg-white mx-6">
                  <CardContent className="pt-8">
                    <Quote className="h-10 w-10 text-brand-cta mx-auto mb-4 opacity-30" />

                    <p className="text-lg italic text-brand-text mb-6">
                      "Best balayage I've ever had! The salon is stunning and
                      the team is pure magic."
                    </p>

                    <div className="flex justify-center gap-1 mb-3">
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                    </div>

                    <p className="font-semibold text-brand-accent">Sophie M.</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/*  Item 2  */}
              <CarouselItem className="md:basis-1/2">
                <Card className="bg-white mx-6">
                  <CardContent className="pt-8">
                    <Quote className="h-10 w-10 text-brand-cta mx-auto mb-4 opacity-30" />

                    <p className="text-lg italic text-brand-text mb-6">
                      "My wedding makeup was flawless. I felt like a princess.
                      Truly exceptional service!"
                    </p>

                    <div className="flex justify-center gap-1 mb-3">
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                    </div>

                    <p className="font-semibold text-brand-accent">Emma L.</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/*  Item 3 */}
              <CarouselItem className="md:basis-1/2">
                <Card className="bg-white mx-6">
                  <CardContent className="pt-8">
                    <Quote className="h-10 w-10 text-brand-cta mx-auto mb-4 opacity-30" />

                    <p className="text-lg italic text-brand-text mb-6">
                      "Their facial treatment changed my skin! I walked out
                      glowing and relaxed."
                    </p>

                    <div className="flex justify-center gap-1 mb-3">
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                    </div>

                    <p className="font-semibold text-brand-accent">Priya S.</p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/*  Item 4  */}
              <CarouselItem className="md:basis-1/2">
                <Card className="bg-white mx-6">
                  <CardContent className="pt-8">
                    <Quote className="h-10 w-10 text-brand-cta mx-auto mb-4 opacity-30" />

                    <p className="text-lg italic text-brand-text mb-6">
                      "Amazing salon, amazing staff. My haircut and color came
                      out perfect!"
                    </p>

                    <div className="flex justify-center gap-1 mb-3">
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                      <Star className="h-5 w-5 fill-brand-cta text-brand-cta" />
                    </div>

                    <p className="font-semibold text-brand-accent">Olivia R.</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>

            <CarouselPrevious className="left-[-30px] md:left-[-60px]" />
            <CarouselNext className="right-[-30px] md:right-[-60px]" />
          </Carousel>
        </div>
      </section>

      {/*  CTA */}
      <section className="py-20 bg-brand-cta text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl 4 md:text-5xl font-bold mb-6">
            Ready to Glow?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Your transformation begins here. Book your luxury experience today.
          </p>
        </div>
      </section>
    </>
  );
}
