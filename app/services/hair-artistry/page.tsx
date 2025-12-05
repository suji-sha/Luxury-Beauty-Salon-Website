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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 max-w-6xl mx-auto">
            {/* 1 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg py-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-lg">
              <CardHeader className="px-0">
                <div className="relative  w-full aspect-square">
                  <img
                    src="/image/43.jpg"
                    alt="photo"
                    className="object-cover rounded-t-lg h-85 w-full group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                <CardTitle className="text-base font-semibold px-2 mt-2">
                  Radiant Glow Vitamin C Serum
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 pb-4 space-y-1">
                <span className="text-brand-muted text-sm block">
                  <strong>Category:</strong> Skincare – Serum
                </span>
                <span className="text-brand-muted text-sm flex-wrap">
                  <strong> Ideal For:</strong> Dull, uneven skin tone
                </span>
                <div className="mt-2 space-y-1">
                  <p className="text-brand-cta text-sm font-medium">
                    Product Details:
                  </p>

                  <ul className="text-brand-muted text-sm list-disc list-inside items-center space-y-1">
                    <li>20% Pure Vitamin C + Hyaluronic Acid</li>
                    <li>Brightens dark spots</li>
                    <li>Boosts collagen</li>
                    <li>Lightweight & non-sticky</li>
                    <li>Dermatologist tested</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-brand-dark-2">
                    Price: NPR 1,850
                  </p>
                  <p className="text-sm text-brand-muted">Size: 30ml</p>
                </div>
              </CardContent>
            </Card>

            {/* 2 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg py-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-lg">
              <CardHeader className="px-0">
                <div className="relative  w-full aspect-square">
                  <img
                    src="/image/44.jpg"
                    alt="photo"
                    className="object-cover rounded-t-lg group-hover:scale-110 transition-all duration-500"
                  />
                </div>

                <CardTitle className="text-base font-semibold px-2 mt-2">
                  HydraSoft Daily Moisturizer
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 pb-4 space-y-1">
                <span className="text-brand-muted text-sm block">
                  <strong>Category:</strong> Skincare – Moisturizer
                </span>
                <span className="text-brand-muted text-sm flex-wrap">
                  <strong> Ideal For:</strong> Dry, sensitive skin
                </span>
                <div className="mt-2 space-y-1">
                  <p className="text-brand-cta text-sm font-medium">
                    Product Details:
                  </p>

                  <ul className="text-brand-muted text-sm list-disc list-inside items-center space-y-1">
                    <li>Ceramide + Shea Butter formula</li>
                    <li>72-hour hydration</li>
                    <li>Strengthens skin barrier</li>
                    <li>Non-comedogenic</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-brand-dark-2">
                    Price:NPR 1,450
                  </p>
                  <p className="text-sm text-brand-muted">Size: 50gm</p>
                </div>
              </CardContent>
            </Card>
            {/* 3 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg py-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-lg">
              <CardHeader className="px-0">
                <div className="relative  w-full aspect-square">
                  <img
                    src="/image/45.jpg"
                    alt="photo"
                    className="object-cover rounded-t-lg w-full group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <CardTitle className="text-base font-semibold px-2 mt-2">
                  SilkRepair Keratin Shampoo
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 pb-4 space-y-1">
                <span className="text-brand-muted text-sm block">
                  <strong>Category:</strong>Haircare – Shampoo
                </span>
                <span className="text-brand-muted text-sm flex-wrap">
                  <strong> Ideal For:</strong> Frizzy, damaged hair
                </span>
                <div className="mt-2 space-y-1">
                  <p className="text-brand-cta text-sm font-medium">
                    Product Details:
                  </p>

                  <ul className="text-brand-muted text-sm list-disc list-inside items-center space-y-1">
                    <li>Infused with keratin & argan oil</li>
                    <li>Repairs split ends</li>
                    <li>Smoothes frizz</li>
                    <li>Sulfate-free formula</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-brand-dark-2">
                    Price: NPR 980
                  </p>
                  <p className="text-sm text-brand-muted">Size: 250ml</p>
                </div>
              </CardContent>
            </Card>
            {/* 4 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg py-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-lg">
              <CardHeader className="px-0">
                <div className="relative  w-full ">
                  <img
                    src="/image/46.jpg"
                    alt="photo"
                    className="object-cover rounded-t-lg w-full h-85 group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <CardTitle className="text-base font-semibold px-2 mt-2">
                  Volume Boost Hair Serum
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 pb-4 space-y-1">
                <span className="text-brand-muted text-sm block">
                  <strong>Category:</strong> Haircare – Serum
                </span>
                <span className="text-brand-muted text-sm flex-wrap">
                  <strong> Ideal For:</strong> Thin, flat hair
                </span>
                <div className="mt-2 space-y-1">
                  <p className="text-brand-cta text-sm font-medium">
                    Product Details:
                  </p>

                  <ul className="text-brand-muted text-sm list-disc list-inside items-center space-y-1">
                    <li>Volumizing lightweight serum</li>
                    <li>Adds shine</li>
                    <li>Protects from heat up to 230°C</li>
                    <li>Non-greasyy</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-brand-dark-2">
                    Price: NPR 1,250
                  </p>
                  <p className="text-sm text-brand-muted">Size: 50ml</p>
                </div>
              </CardContent>
            </Card>
            {/* 5 */}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg py-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-lg">
              <CardHeader className="px-0">
                <div className="relative  w-full ">
                  <img
                    src="/image/47.jpg"
                    alt="photo"
                    className="object-cover rounded-t-lg w-full group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <CardTitle className="text-base font-semibold px-2 mt-2">
                  Luxe Matte Liquid Lipstick
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 pb-4 space-y-1">
                <span className="text-brand-muted text-sm block">
                  <strong>Category:</strong> Makeup – Lipstick
                </span>
                <span className="text-brand-muted text-sm flex-wrap">
                  <strong> Ideal For:</strong> Rosewood Pink
                </span>
                <div className="mt-2 space-y-1">
                  <p className="text-brand-cta text-sm font-medium">
                    Product Details:
                  </p>

                  <ul className="text-brand-muted text-sm list-disc list-inside items-center space-y-1">
                    <li>12-hour long wear</li>
                    <li>Matte but non-drying</li>
                    <li>Smudge-proof & transfer-proof</li>
                    <li>Enriched with Vitamin E</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-brand-dark-2">
                    Price: NPR 550
                  </p>
                  <p className="text-sm text-brand-muted">Size: 5ml</p>
                </div>
              </CardContent>
            </Card>
            {/* 6*/}
            <Card className="overflow-hidden group cursor-pointer border-0 shadow-lg py-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-lg">
              <CardHeader className="px-0">
                <div className="relative  w-full ">
                  <img
                    src="/image/48.jpg"
                    alt="photo"
                    className="object-cover rounded-t-lg w-full group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <CardTitle className="text-base font-semibold px-2 mt-2">
                  Flawless Finish Foundation
                </CardTitle>
              </CardHeader>
              <CardContent className="px-2 pb-4 space-y-1">
                <span className="text-brand-muted text-sm block">
                  <strong>Category:</strong>Makeup – Face
                </span>

                <div className="mt-2 space-y-1">
                  <p className="text-brand-cta text-sm font-medium">
                    Product Details:
                  </p>

                  <ul className="text-brand-muted text-sm list-disc list-inside items-center space-y-1">
                    <li>Medium–full coverage</li>
                    <li>Natural matte finish</li>
                    <li>Sweat-resistant</li>
                    <li>Available in 12 shades</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-sm font-semibold text-brand-dark-2">
                    Price: NPR 1,950
                  </p>
                  <p className="text-sm text-brand-muted">Size: 30ml</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
}
