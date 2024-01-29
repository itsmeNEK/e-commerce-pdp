import { NextResponse } from "next/server"

export async function GET(request: Request) {
  return NextResponse.json({
    products: [
      {
        id: 1,
        company: "Sneaker Company",
        title: "Fall Limited Edition Sneakers",
        description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        price: 250,
        discount: 0.5,
        thumbnail: {
          image: "https://res.cloudinary.com/dtnvsv2dx/image/upload/v1706533949/e-commerce-pdp/image-product-1-thumbnail.jpg",
          alt: "Shoes top & bottom",
        },
        images: [
          {
            image: "https://res.cloudinary.com/dtnvsv2dx/image/upload/v1706533949/e-commerce-pdp/image-product-1-thumbnail.jpg",
            alt: "Shoes top & bottom",
            small: true,
          },
          {
            image: "https://res.cloudinary.com/dtnvsv2dx/image/upload/v1706533950/e-commerce-pdp/image-product-2-thumbnail.jpg",
            alt: "Shoes on a rock",
            small: true,
          },
          {
            image: "https://res.cloudinary.com/dtnvsv2dx/image/upload/v1706533950/e-commerce-pdp/image-product-3-thumbnail.jpg",
            alt: "A shoe on a rock top view",
            small: true,
          },
          {
            image: "https://res.cloudinary.com/dtnvsv2dx/image/upload/v1706533950/e-commerce-pdp/image-product-4-thumbnail.jpg",
            alt: "A shoe on a rock side view",
            small: true,
          },
          {
            image: "https://res.cloudinary.com/dtnvsv2dx/image/upload/v1706533950/e-commerce-pdp/image-product-1.jpg",
            alt: "Shoes top & bottom",
            small: false,
          },
          {
            image: "https://res.cloudinary.com/dtnvsv2dx/image/upload/v1706533950/e-commerce-pdp/image-product-2.jpg",
            alt: "Shoes on a rock",
            small: false,
          },
          {
            image: "https://res.cloudinary.com/dtnvsv2dx/image/upload/v1706533950/e-commerce-pdp/image-product-3.jpg",
            alt: "A shoe on a rock top view",
            small: false,
          },
          {
            image: "https://res.cloudinary.com/dtnvsv2dx/image/upload/v1706533951/e-commerce-pdp/image-product-4.jpg",
            alt: "A shoe on a rock side view",
            small: false,
          },
        ],
      },
    ],
  })
}
