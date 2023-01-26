import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProductProps } from '../../components/pricing/product'

// Fake users data
const productList: ProductProps[] = [
  {
    name: 'Premium',
    description: 'Deep dive into your health with our complete health analysis',
    price: '25',
    features: [
      'First access to new features',
      'Comprehensive diet plan',
      'Bloodwork analysis',
      'Life coaching',
      'Schedule calls',
    ],
    priceId: process.env.PREMIUM_KEY,
    special: false,
  },
  {
    name: 'Optimize',
    description:
      'Utilize online coaching and get exclusive access to our AI texts',
    price: '6',
    features: [
      'Custom workout programs',
      'Access to coaches 24/7',
      'Injury assitance',
      'Daily schedule texts',
      'Daily weight-in texts',
    ],
    priceId: process.env.OPTIMIZE_KEY,
    special: true,
  },
]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  // Get data from your database
  res.status(200).json(productList)
}
