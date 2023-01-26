import { NextApiRequest, NextApiResponse } from 'next'

// This is your test secret API key.
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const event = req.body

  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntent = event.data.object
      console.log(paymentIntent)
      res.json(paymentIntent)
      //console.log(`PaymentIntent was successful!`)
      break
    case 'payment_method.attached':
      const paymentMethod = event.data.object
      console.log(`PaymentMethod was attached!`)
      break
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`)
  }

  res.json({ received: true })
  //res.json(paymentIntent)
}
