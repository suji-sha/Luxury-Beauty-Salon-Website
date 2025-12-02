import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Scissors, Heart, Calendar } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full ">
        <div className="absolute inset-0 bg-[url('/image/2.jpg')] bg-cover  h-full w-full bg-fixed"></div>

        {/* second section */}
        <div className="relative  flex h-full items-center justify-start px-8 ">
          <div className="max-w-2xl text-white">
            <Badge className="mb-4 bg-brand-cta text-white text-lg px-6 py-3 ">
              Welcome to Luxury Beauty Salon
            </Badge>

            <h1 className="text-5xl md:text-7xl font-bold text-brand-secondary">
              Reveal Your True Beauty
            </h1>

            <p className="mt-6 text-lg md:text-xl text-brand-secondary/90 ">
              Experience luxury hair, makeup, skin, and wellness treatments
              designed to make you look and feel radiant — every single day.
            </p>
          </div>
        </div>
      </section>

      {/*  Info Section */}
      <section className="py-16 bg-white-50">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="p-5 bg-white rounded-full mb-4">
              <Sparkles className="h-10 w-10 text-brand-cta" />
            </div>
            <h3 className="text-xl font-bold text-brand-accent">
              Premium Products
            </h3>
            <p className="text-brand-muted mt-2">
              We use only the finest international brands
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-5 bg-white rounded-full mb-4">
              <Scissors className="h-10 w-10 text-brand-cta" />
            </div>
            <h3 className="text-xl font-bold text-brand-accent">
              Expert Stylists
            </h3>
            <p className="text-brand-muted mt-2">
              Trained professionals with years of experience
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="p-5 bg-white rounded-full mb-4">
              <Heart className="h-10 w-10 text-brand-cta" />
            </div>
            <h3 className="text-xl font-bold text-brand-accent">
              Relax & Enjoy
            </h3>
            <p className="text-brand-muted mt-2">
              A peaceful space made just for your comfort
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
