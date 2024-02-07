import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    products: [
      {
        id: 1,
        company: 'Sneaker Company',
        title: 'Fall Limited Edition Sneakers',
        description: `These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.`,
        price: 250,
        discount: 0.5,
        thumbnail: {
          image:
            'https://res.cloudinary.com/dtnvsv2dx/image/upload/f_auto,q_auto/v1/e-commerce-pdp/image-product-1-thumbnail',
          alt: 'Shoes top & bottom',
        },
        images: [
          {
            image:
              'https://res.cloudinary.com/dtnvsv2dx/image/upload/f_auto,q_auto/v1/e-commerce-pdp/image-product-1-thumbnail',

            alt: 'Shoes top & bottom',
            small: true,
          },
          {
            image:
              'https://res.cloudinary.com/dtnvsv2dx/image/upload/f_auto,q_auto/v1/e-commerce-pdp/image-product-2-thumbnail',
            alt: 'Shoes on a rock',
            small: true,
          },
          {
            image:
              'https://res.cloudinary.com/dtnvsv2dx/image/upload/f_auto,q_auto/v1/e-commerce-pdp/image-product-3-thumbnail',
            alt: 'A shoe on a rock top view',
            small: true,
          },
          {
            image:
              'https://res.cloudinary.com/dtnvsv2dx/image/upload/f_auto,q_auto/v1/e-commerce-pdp/image-product-4-thumbnail',
            alt: 'A shoe on a rock side view',
            small: true,
          },
          {
            image:
              'https://res.cloudinary.com/dtnvsv2dx/image/upload/f_auto,q_auto/v1/e-commerce-pdp/image-product-1',

            alt: 'Shoes top & bottom',
            small: false,
          },
          {
            image:
              'https://res.cloudinary.com/dtnvsv2dx/image/upload/f_auto,q_auto/v1/e-commerce-pdp/image-product-2',
            alt: 'Shoes on a rock',
            small: false,
          },
          {
            image:
              'https://res.cloudinary.com/dtnvsv2dx/image/upload/f_auto,q_auto/v1/e-commerce-pdp/image-product-3',
            alt: 'A shoe on a rock top view',
            small: false,
          },
          {
            image:
              'https://res.cloudinary.com/dtnvsv2dx/image/upload/f_auto,q_auto/v1/e-commerce-pdp/image-product-4',
            alt: 'A shoe on a rock side view',
            small: false,
          },
        ],
      },
    ],
  })
}
