import { NextApiRequest, NextApiResponse } from 'next'
// This is your test secret API key.
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// https://github.com/alexfromsofia/ecommerce/blob/main/components/Cart.tsx
// use-shopping-cart
// Used this to implement shopping cart
export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
        line_items: [
            {
            price: 'price_1LYhsoHDxcuP4tEiQ7iTllJh',
            adjustable_quantity: {
                enabled: true,
                minimum: 1,
                maximum: 5
            },
            quantity:1
            },
        ],
        shipping_address_collection: {
            allowed_countries: ['US']
          },
        mode: 'payment',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/pricing`,
        automatic_tax: {enabled: true},
        });
        res.redirect(303, session.url);
        } catch (err: any) {
        res.status(err.statusCode || 500).json(err.message);
        }
    } else {
        res.setHeader('Allow', 'POST');
        res.status(405).end('Method Not Allowed');
      }
}