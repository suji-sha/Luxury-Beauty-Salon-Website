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
      {/* Hero Section */}

      <section className="relative w-full h-[500px] overflow-hidden">
        <img
          src="/image/21.jpg"
          alt="Luxury Beauty Salon"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        {/* Second Section */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Our Premium Services
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl font-light">
            Indulge in luxury beauty treatments crafted to make you look and
            feel your absolute best
          </p>
          <div className="mt-8">
            <Badge className="bg-yellow-500 text-black text-lg px-6 py-3">
              Glow Like Never Before
            </Badge>
          </div>
        </div>
      </section>

      {/* Services  */}
      <section className="py-20 px-6 bg-yellow-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Complete Beauty Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From everyday pampering to bridal transformations — we have it all
              under one roof
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* 1. Hair Services */}
            <Card>
              <CardHeader className="bg-yellow-100 text-yellow-800 border-b-2 border-yellow-300 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/30 rounded-full">
                    <Scissors className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Hair Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Haircut & Styling (Men & Women)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Hair Coloring / Highlights / Balayage
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Hair Treatments (Keratin, Rebonding, Hair Spa)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Hair Extensions / Wigs</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Bridal & Party Hair Styling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 2. Skin Care Services */}
            <Card>
              <CardHeader className="bg-amber-100 text-amber-800 border-b-2 border-amber-300 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/30 rounded-full">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Skin Care Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Facials (Deep Cleansing, Anti-Aging, Brightening)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Skin Treatments (Acne, Pigmentation)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Microdermabrasion & Peels</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Body Scrubs & Exfoliation</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Skin Polishing & Glow Treatments
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 3. Makeup Services */}
            <Card>
              <CardHeader className="bg-yellow-100 text-yellow-800 border-b-2 border-yellow-300 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/30 rounded-full">
                    <Palette className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Makeup Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Bridal Makeup</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Party / Event Makeup</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Airbrush Makeup</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Professional Photoshoot Makeup
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Makeup Consultation / Tutorials
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 4. Nail Services */}
            <Card>
              <CardHeader className="bg-amber-100 text-amber-800 border-b-2 border-amber-300 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/30 rounded-full">
                    <HeartHandshake className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Nail Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Manicure & Pedicure</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Nail Art & Design</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Gel / Acrylic / Dip Powder Nails
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Nail Treatments & Strengthening
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 5. Waxing & Hair Removal */}
            <Card>
              <CardHeader className="bg-yellow-100 text-yellow-800 border-b-2 border-yellow-300 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/30 rounded-full">
                    <Zap className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">
                    Waxing & Hair Removal
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Full Body Waxing</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Face & Eyebrow Waxing</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Threading Services</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Laser Hair Removal</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 6. Eye & Lash Services */}
            <Card>
              <CardHeader className="bg-amber-100 text-amber-800 border-b-2 border-amber-300 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/30 rounded-full">
                    <Eye className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">Eye & Lash Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Eyebrow Shaping / Tinting</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Eyelash Extensions / Lift</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Lash Tinting</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Brow Lamination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 7. Spa & Massage Services */}
            <Card>
              <CardHeader className="bg-yellow-100 text-yellow-800 border-b-2 border-yellow-300 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/30 rounded-full">
                    <Flower2 className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">
                    Spa & Massage Services
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Full Body Massage (Swedish, Deep Tissue)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Hot Stone / Aromatherapy Massage
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Head & Shoulder Massage</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Foot Reflexology</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* 8. Specialized Packages  */}
            <Card>
              <CardHeader className="bg-yellow-100 text-yellow-800 border-b-2 border-yellow-300 rounded-t-lg">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-white/40 rounded-full">
                    <Package className="w-8 h-8" />
                  </div>
                  <CardTitle className="text-xl">
                    Specialized Packages
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Bridal Packages (Hair + Makeup + Spa)
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Pre-Wedding / Groom Packages
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">Party / Prom Packages</span>
                  </li>
                  <li className="flex items-start gap-2 text-gray-700">
                    <span className="text-yellow-500 mt-1">✦</span>
                    <span className="text-sm">
                      Monthly / Seasonal Wellness Packages
                    </span>
                  </li>
                </ul>
                <Separator className="my-6" />
                <div className="text-center">
                  <Badge
                    variant="secondary"
                    className="bg-yellow-200 text-yellow-900 font-semibold"
                  >
                    Most Popular
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
