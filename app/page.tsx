
import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";
import { stripe } from "@/lib/stripe";
import { Link } from "lucide-react";
import Image from "next/image";


export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit:4,

  })

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12 ">
        <div className="mx-auto grid grid-cols-1 items-center justify-item-center gap-8 px-8 sm:px-16 lg:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Welcome to My Ecommerce</h2>
            <p className="text-neutral-600">Discover the latest products at the best prices</p>
            <Button asChild variant="default" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white">
              <Link href="/products" className="inline-flex items-center justify-center rounded-full px-6 py-3">
              Browse all products
              </Link>
            </Button>
          </div>
          <Image
            alt="banner image"
            width={300}
            height={300}
            src={products.data[0].images[0]}
          />
        </div>
      </section>
      <section>
      <Carousel />
      </section>
    </div>
  );
}
