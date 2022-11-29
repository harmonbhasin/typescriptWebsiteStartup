import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProductProps } from '../../components/pricing/product'

// Fake users data
const productList: ProductProps[] = [

    {
      name: 'Premium',
      description: 'Deploy the full strength our remote services and gain control over your life.',
      price: '25',
      features: ['Unlimited workout programs','Comprehensive diet plan', 'Assistance with life outside of the gym','Analysis of Apple Health metrics', 'Access to all Plus features'],
      priceId: 'price_1M7mtGHDxcuP4tEilIDQXQau',
      special: false
    },
     {
      name: 'Basic',
      description: "Daily check-ins to stay on your program through our workout bot.",
      price: '6',
      features: ['1 workout program', 'Daily text schedule reminders', 'Daily text weight-ins','Access to future features at same price','Updates to program layout changes'],
      priceId: 'price_1M7mtGHDxcuP4tEilIDQXQau',
      special: true
    }

  ]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  // Get data from your database
  res.status(200).json(productList)
}
