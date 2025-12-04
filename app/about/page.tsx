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
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <div className="absolute inset-0 bg-[url('/image/41.jpg')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gray-400/50"></div>
        <div className="relative z-10 h-full flex items-center justify-start px-10">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary">
              Crafting Confidence and Elegance,
            </h1>
            <h1 className="text-3xl md:text-4xl font-bold text-brand-secondary">
              One Client at a Time
            </h1>
            <p className="text-brand-muted mt-4">
              Experience a space where creativity, skill, and luxury meet to
              redefine beauty and self-expression.
            </p>
          </div>
        </div>
      </section>

      {/* Salon Story Section */}
      <section className="bg-brand-bg">
        <div className="container grid grid-cols-[40%_60%] gap-6 items-start m-20">
          <Card className="p-0 h-96">
            <CardContent className="p-0 h-full">
              <img
                className="h-full w-full  rounded-xl object-cover"
                src="/image/42.jpg"
                alt="Salon Interior"
              />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-brand-text">Our Journey</h2>
            <p className="text-brand-muted text-justify">
              Since our founding, Luxury Beauty Salon has been dedicated to
              creating an environment where clients feel valued and inspired.
              Every service is designed with care, combining artistry and
              precision to highlight individuality and enhance confidence.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-brand-text">
              <li>Over a decade of experience in beauty and wellness</li>
              <li>Skilled professionals trained in global beauty capitals</li>
              <li>Commitment to personalized and attentive client care</li>
              <li>Use of premium, ethically sourced products</li>
              <li>A serene and welcoming atmosphere for every visit</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-white py-10">
        <div className="container mx-auto space-y-6">
          <h2 className="text-3xl text-brand-accent text-center font-semibold">
            Meet Our Experts
          </h2>
          <p className="text-brand-muted text-center">
            Our team combines experience, creativity, and passion to deliver
            results that inspire confidence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
            <Card className="py-0 text-center shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="px-0">
                <img
                  src="/image/38.jpg"
                  alt="Stylist"
                  className="w-full h-130 object-cover rounded-t-lg mb-4 "
                />
                <div>
                  <h3 className="font-semibold text-lg text-brand-text">
                    Pat McGrath
                  </h3>
                  <p className="text-brand-muted text-sm">
                    Bridal Makeup Specialist
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="py-0 text-center shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="px-0">
                <img
                  src="/image/39.jpg"
                  alt="Stylist"
                  className="w-full h-130 object-cover rounded-t-lg mb-4"
                />
                <h3 className="font-semibold text-lg text-brand-text">
                  Jawed Habib
                </h3>
                <p className="text-brand-muted text-sm">
                  Hair Artistry & Color Expert
                </p>
              </CardContent>
            </Card>
            <Card className="py-0 text-center shadow-xl hover:shadow-2xl transition-shadow">
              <CardContent className="px-0">
                <img
                  src="/image/40.jpg"
                  alt="Stylist"
                  className="w-full h-130 object-cover rounded-t-lg mb-4"
                />
                <h3 className="font-semibold text-lg text-brand-text">
                  Jebina Lama
                </h3>
                <p className="text-brand-muted text-sm">
                  Skin & Wellness Therapist
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-brand-bg">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl text-brand-accent text-center font-semibold mb-4">
            Our Work
          </h2>
          <p className="text-xl text-brand-muted text-center mb-6">
            A glimpse into transformations and artistry that define our
            commitment to excellence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[250px] mb-12">
            <img
              src="/image/16.jpg"
              alt="Work"
              className="h-full w-full object-cover rounded-xl"
            />
            <img
              src="/image/11.jpg"
              alt="Work"
              className="h-full w-full object-cover rounded-xl"
            />
            <img
              src="/image/14.jpg"
              alt="Work"
              className="h-full w-full object-cover rounded-xl"
            />
            <img
              src="/image/15.jpg"
              alt="Work"
              className="h-full w-full object-cover rounded-xl"
            />
            <img
              src="/image/19.jpg"
              alt="Work"
              className="h-full w-full object-cover rounded-xl"
            />
            <img
              src="/image/20.jpg"
              alt="Work"
              className="h-full w-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* what client say  Section */}
      <section className="bg-white py-10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl text-brand-accent text-center font-semibold mb-6">
            Client Stories
          </h2>
          <Carousel>
            <CarouselContent className="flex gap-4">
              {/*  1 */}
              <CarouselItem className="p-2 basis-1/3">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <p className="text-sm text-brand-text py-5">
                      "The team made me feel special and transformed my look
                      beyond expectations."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/*  2 */}
              <CarouselItem className="p-2 basis-1/3">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <p className="text-sm text-brand-text py-5">
                      "Exceptional service with a personal touch that made my
                      day memorable."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/*  3 */}
              <CarouselItem className="p-2 basis-1/3">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <p className="text-sm text-brand-text py-5">
                      "Every visit leaves me feeling confident and pampered."
                    </p>
                  </CardContent>
                </Card>
              </CarouselItem>

              {/*  4 */}
              <CarouselItem className="p-2 basis-1/3">
                <Card className="h-72 bg-brand-bg">
                  <CardContent className="flex flex-col items-center justify-center h-full p-6 text-center">
                    <p className="text-sm text-brand-text py-5">
                      "A perfect blend of luxury, creativity, and care."
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
