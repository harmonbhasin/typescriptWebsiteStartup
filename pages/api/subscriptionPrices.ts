import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProductProps } from '../../components/pricing/product'

// Fake users data
const productList: ProductProps[] = [
  {
    name: 'Premium',
    description: 'Deep dive into your health with our complete health analysis',
    price: '30',
    features: [
      'Exclusive access to new features',
      'Comprehensive diet plan',
      'Injury assistance',
      'Bloodwork analysis',
      'Coaches on call',
    ],
    priceId: process.env.PREMIUM_KEY,
    special: false,
  },
  {
    name: 'Optimize',
    description:
      "Utilize online coaching with access to our A.I. that'll help keep you accountable through text conversations",
    price: '8.50',
    features: [
      '10+ workout templates',
      'Custom workout programs',
      'Access to A.I. 24/7 365',
      'Daily texts from A.I.',
      'Customize your A.I.',
    ],
    priceId: process.env.OPTIMIZE_KEY,
    special: true,
  },
]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  // Get data from your database
  res.status(200).json(productList)
}
