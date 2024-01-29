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
          image: "/assets/images/image-product-1-thumbnail.jpg",
          alt: "Product Thumbnail",
        },
        images: [
          {
            image: "/assets/images/image-product-1-thumbnail.jpg",
            alt: "Small Image 1",
            small: true,
          },
          {
            image: "/assets/images/image-product-2-thumbnail.jpg",
            alt: "Small Image 2",
            small: true,
          },
          {
            image: "/assets/images/image-product-3-thumbnail.jpg",
            alt: "Small Image 3",
            small: true,
          },
          {
            image: "/assets/images/image-product-4-thumbnail.jpg",
            alt: "Small Image 4",
            small: true,
          },
          {
            image: "/assets/images/image-product-1.jpg",
            alt: "Large Image 1",
            small: false,
          },
          {
            image: "/assets/images/image-product-2.jpg",
            alt: "Large Image 2",
            small: false,
          },
          {
            image: "/assets/images/image-product-3.jpg",
            alt: "Large Image 3",
            small: false,
          },
          {
            image: "/assets/images/image-product-4.jpg",
            alt: "Large Image 4",
            small: false,
          },
        ],
      },
    ],
  })
}
