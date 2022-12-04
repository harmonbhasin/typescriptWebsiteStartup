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
    priceId: 'price_1M9XgEHDxcuP4tEiFpBvCK6E', // Testing: 'price_1M7mtGHDxcuP4tEilIDQXQau',
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
    priceId: 'price_1M9WrWHDxcuP4tEixsWJGzlE', //Testing: 'price_1M7mtGHDxcuP4tEilIDQXQau',
    special: true,
  },
]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  // Get data from your database
  res.status(200).json(productList)
}
