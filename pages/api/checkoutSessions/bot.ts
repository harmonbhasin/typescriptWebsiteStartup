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
            price: 'price_1LXzEgHDxcuP4tEi1ZHo84sD',
            quantity: 1,
            },
        ],
        phone_number_collection: {
            enabled: true,
          },
        mode: 'subscription',
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/pricing`,
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