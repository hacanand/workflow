"use client";
import React from "react";

type Props = {
  onPayment(id: string): void;
  products: any[];
  tier: string;
};

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const SubscriptionCard = ({ onPayment, products, tier }: Props) => {
  //console.log(products);
  return (
    <section className="flex w-full justify-center md:flex-row flex-col gap-6">
      {products &&
        products?.map((product: any) => (
          <Card className="p-3" key={product.id}>
            <CardHeader>
              <CardTitle>{product.nickname}</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <CardDescription>
                {product.nickname == "Unlimited"
                  ? "Enjoy unlimited credits to automate your tasks with ease. Perfect for large projects looking to scale their automation capabilities."
                  : product.nickname == "Pro"
                  ? " Enjoy monthly 100 credits to automate your tasks with ease. Perfect for small projects looking to automate their tasks."
                  : product.nickname == "Free" &&
                    " Enjoy 10 credits to automate your tasks with ease. Perfect for small projects looking to automate their tasks."}
              </CardDescription>
              <div className="flex justify-between">
                <p>
                  {product.nickname == "Free"
                    ? "10"
                    : product.nickname == "Pro"
                    ? "100"
                    : product.nickname == "Unlimited" && "unlimited"}{" "}
                  credits
                </p>
                <p className="font-bold whitespace-nowrap ">
                  {product.nickname == "Free"
                    ? "Free"
                    : product.nickname == "Pro"
                    ? ` ₹ ${product.unit_amount_decimal / 100}`
                    : product.nickname == "Unlimited" &&
                      ` ₹ ${product.unit_amount_decimal / 100}`}
                  /mo
                </p>
              </div>
              {product.nickname == tier ? (
                <Button disabled variant="outline">
                  Active
                </Button>
              ) : (
                <Button onClick={() => onPayment(product.id)} variant="outline">
                  Purchase
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
    </section>
  );
};
