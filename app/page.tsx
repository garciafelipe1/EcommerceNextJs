import { Carousel } from "@/components/carousel";
import { stripe } from "@/lib/stripe";
import Image from "next/image";
import Link from "next/link"; // Importación correcta.
import { cn } from "@/lib/utils"; // Importa la utilidad cn.

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 4,
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12 ">
        <div className="mx-auto grid grid-cols-1 items-center justify-item-center gap-8 px-8 sm:px-16 lg:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to My Ecommerce
            </h2>
            <p className="text-neutral-600">
              Discover the latest products at the best prices
            </p>
            <Link
              href="/products"
              className={cn(
                "inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
              )}
            >
              Browse all products
            </Link>
          </div>
          <Image
            alt="banner image"
            width={300}
            height={300}
            src={products.data[0].images[0]}
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel products={products.data} />
      </section>
    </div>
  );
}
