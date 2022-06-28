import type { NextApiRequest, NextApiResponse } from 'next'
import TopBarAttributes from '../../interfaces/top-bar'

export default function contact(
  req: NextApiRequest,
  res: NextApiResponse<TopBarAttributes>
) {
  res.status(200).json(
    {
      email: 'contact@advancelashes.com',
      phone: '+1 (469) 369 6363',
      schedule: 'Monday – Saturday 8:00 AM – 05:00 PM (Dallas, TX USA) GMT -6'
    }
  )
}
