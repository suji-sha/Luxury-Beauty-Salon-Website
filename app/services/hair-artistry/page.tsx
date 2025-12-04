import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Scissors,
  Sparkles,
  Palette,
  HeartHandshake,
  Zap,
  Eye,
  Flower2,
  Package,
} from "lucide-react";
import Image from "next/image";

export default function ServicesPage() {
  return (
    <>
      <div className="bg-brand-bg">
        {/* Hero Section */}
        <section className="relative w-full h-[500px] overflow-hidden">
          <img
            src="/image/4.jpg"
            alt="Luxury Beauty Salon"
            className="absolute inset-0 w-full h-full object-cover brightness-75"
          />
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Our Product Details
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl font-light">
              Experience premium quality crafted with care. Designed to enhance
              your daily beauty routine.
            </p>
            <div className="mt-8">
              <Badge className="bg-brand-cta text-white text-lg px-6 py-3">
                click to know more
              </Badge>
            </div>
          </div>
        </section>

        {/* Second Section */}
        <section className="bg-brand-secondary py-10 itmes-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 max-w-6xl mx-auto">
            {/* 1 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg py-0">
              <CardHeader className="px-0">
                <div className="relative  w-full aspect-square">
                  <img
                    src="/image/1.jpg"
                    alt="photo"
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardTitle>EYE Shadow</CardTitle>
              </CardHeader>
              <CardContent className="px-0">
                <p className="text-brand-muted text-sm"></p>
              </CardContent>
            </Card>
            {/* 2 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg  p-5">
              <div className="relative  w-full aspect-square"></div>
            </Card>
            {/* 3 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg  p-5">
              <div className="relative  w-full aspect-square"></div>
            </Card>
            {/* 4 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg  p-5">
              <div className="relative  w-full aspect-square"></div>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
