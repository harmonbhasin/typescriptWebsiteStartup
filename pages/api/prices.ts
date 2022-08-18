import type { NextApiRequest, NextApiResponse } from 'next'
import type { ProductProps } from '../../src/components/pricing/product'

// Fake users data
const productList: ProductProps[] = [
  {
    name: 'Premium',
    description: 'Get in-person training once a week for up to 90 minutes.',
    price: '120',
    features: ['Get exercises that fit the physiology of your body', 'Early access to new features','Access to all Premium features'],
    path: 'api/checkoutSessions/person',
    special: false
  },
    {
      name: 'Pro',
      description: 'Deploy the full strength our remote services and gain control over your life.',
      price: '25',
      features: ['Unlimited workout programs','Comprehensive diet plan', 'Assistance with life outside of the gym','Analysis of Apple Health metrics', 'Access to all Plus features'],
      path: '/api/checkoutSessions/diet',
      special: false
    },
    {
      name: 'Plus',
      description: 'Gain access to our online coaching to help you adjust your program and learn.',
      price: '15',
      features: ['2 workout programs', '24/7 to coaches through text', 'Free program adjustments', 'Rudimentary diet assistance','Access to Optimize features'],
      path: '/api/checkoutSessions/coach',
      special:true
    },
     {
      name: 'Optimize',
      description: "Daily check-ins to stay on your program through our workout bot.",
      price: '5',
      features: ['1 workout program', 'Daily text schedule reminders', 'Daily text weight-ins','Access to future features at same price','Updates to program layout changes'],
      path: '/api/checkoutSessions/bot',
      special: false
    }

  ]

export default (_req: NextApiRequest, res: NextApiResponse) => {
  // Get data from your database
  res.status(200).json(productList)
}
