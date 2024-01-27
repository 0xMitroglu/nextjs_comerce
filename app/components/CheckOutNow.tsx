"use client";

import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "../lib/sanity";
import { ProductCart } from "./AddToBag";

export default function CheckOutNow({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();

  const buyNow = (priceId: string) => {
    checkoutSingleItem(priceId);
  };

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlFor(image).url(),
    price_id: price_id,
  };
  return (
    <div>
      <Button
        variant={"secondary"}
        onClick={() => {
          buyNow(product.price_id);
        }}
      >
        Check Out Now <ShoppingCart className="h-4 w-4 ml-4" />
      </Button>
    </div>
  );
}
