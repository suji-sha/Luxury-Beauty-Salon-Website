import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

{
  /* json detail*/
}
export const products = [
  {
    id: 1,
    title: "Radiant Glow Vitamin C Serum",
    image: "/image/43.jpg",
    category: "Skincare – Serum",
    idealFor: "Dull, uneven skin tone",
    details: [
      "20% Pure Vitamin C + Hyaluronic Acid",
      "Brightens dark spots",
      "Boosts collagen",
      "Lightweight & non-sticky",
      "Dermatologist tested",
    ],
    price: "NPR 1,850",
    size: "30ml",
  },
  {
    id: 2,
    title: "HydraSoft Daily Moisturizer",
    image: "/image/44.jpg",
    category: "Skincare – Moisturizer",
    idealFor: "Dry, sensitive skin",
    details: [
      "Ceramide + Shea Butter formula",
      "72-hour hydration",
      "Strengthens skin barrier",
      "Non-comedogenic",
    ],
    price: "NPR 1,450",
    size: "50gm",
  },
  {
    id: 3,
    title: "SilkRepair Keratin Shampoo",
    image: "/image/45.jpg",
    category: "Haircare – Shampoo",
    idealFor: "Frizzy, damaged hair",
    details: [
      "Infused with keratin & argan oil",
      "Repairs split ends",
      "Smoothes frizz",
      "Sulfate-free formula",
    ],
    price: "NPR 980",
    size: "250ml",
  },
  {
    id: 4,
    title: "Volume Boost Hair Serum",
    image: "/image/46.jpg",
    category: "Haircare – Serum",
    idealFor: "Thin, flat hair",
    details: [
      "Volumizing lightweight serum",
      "Adds shine",
      "Protects from heat up to 230°C",
      "Non-greasy",
    ],
    price: "NPR 1,250",
    size: "50ml",
  },
  {
    id: 5,
    title: "Luxe Matte Liquid Lipstick",
    image: "/image/47.jpg",
    category: "Makeup – Lipstick",
    idealFor: "Rosewood Pink shade",
    details: [
      "12-hour long wear",
      "Matte but non-drying",
      "Smudge-proof & transfer-proof",
      "Enriched with Vitamin E",
    ],
    price: "NPR 550",
    size: "5ml",
  },
  {
    id: 6,
    title: "Flawless Finish Foundation",
    image: "/image/48.jpg",
    category: "Makeup – Face",
    idealFor: "",
    details: [
      "Medium–full coverage",
      "Natural matte finish",
      "Sweat-resistant",
      "Available in 12 shades",
    ],
    price: "NPR 1,950",
    size: "30ml",
  },
  {
    id: 7,
    title: "GlowEssence Body Lotion",
    image: "/image/49.jpg",
    category: "Body Care – Lotion",
    idealFor: "",
    details: [
      "Almond oil + Vitamin E",
      "Deep hydration",
      "Softens rough patches",
      "Light floral fragrance",
    ],
    price: "NPR 599",
    size: "200ml",
  },
  {
    id: 8,
    title: "PureSense Green Tea Toner",
    image: "/image/50.jpg",
    category: "Skincare – Toner",
    idealFor: "",
    details: [
      "Controls oil",
      "Minimizes pores",
      "Alcohol-free",
      "Refreshing natural scent",
    ],
    price: "NPR 850",
    size: "150ml",
  },
  {
    id: 9,
    title: "SoftBlush Cheek Tint",
    image: "/image/52.jpg",
    category: "Makeup – Blush",
    idealFor: "",
    details: [
      "Water-gel tint",
      "Long-lasting natural glow",
      "Blends easily",
      "Suitable for all skin tones",
    ],
    price: "NPR 1,100",
    size: "10ml",
  },
  {
    id: 10,
    title: "Charcoal Detox Face Mask",
    image: "/image/51.jpg",
    category: "Skincare – Mask",
    idealFor: "",
    details: [
      "Activated charcoal + clay",
      "Pulls out blackheads",
      "Tightens pores",
      "Great for oily/combination skin",
    ],
    price: "NPR 650",
    size: "100gm",
  },
];

export default function ProductPage() {
  return (
    <>
      <div className="bg-brand-bg">
        {/* Hero Section (same) */}
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
        {/* Product Grid */}
        <section className="bg-brand-secondary py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden group cursor-pointer border-0 shadow-lg py-0 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 rounded-lg"
              >
                <CardHeader className="px-0">
                  <div className="relative w-full aspect-square">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="object-cover rounded-t-lg w-full h-85 group-hover:scale-110 transition-all duration-500"
                    />
                  </div>

                  <CardTitle className="text-base font-semibold px-2 mt-2">
                    {product.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-2 pb-4 space-y-1">
                  <span className="text-brand-muted text-sm block">
                    <strong>Category:</strong> {product.category}
                  </span>

                  {product.idealFor && (
                    <span className="text-brand-muted text-sm block">
                      <strong>Ideal For:</strong> {product.idealFor}
                    </span>
                  )}

                  <div className="mt-2 space-y-1">
                    <p className="text-brand-cta text-sm font-medium">
                      Product Details:
                    </p>

                    <ul className="text-brand-muted text-sm list-disc list-inside space-y-1">
                      {product.details.map((d, index) => (
                        <li key={index}>{d}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-3">
                    <p className="text-sm font-semibold text-brand-dark-2">
                      Price: {product.price}
                    </p>
                    <p className="text-sm text-brand-muted">
                      Size: {product.size}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
