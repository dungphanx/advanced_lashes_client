import type { NextApiRequest, NextApiResponse } from 'next'
import MenuItem from '../../interfaces/menu-item'

export default function menu(
  req: NextApiRequest,
  res: NextApiResponse<MenuItem[]>
) {
  res.status(200).json(
    [
      {
        text: 'Home',
        desc: 'Where the heart is',
        url: '/'
      },
      {
        text: 'Academy',
        desc: 'Be an artist',
        url: '/academy'
      },
      {
        text: 'Shop',
        desc: 'Looking for stuff?',
        url: '/shop'
      },
      {
        text: 'Blog',
        desc: 'keep the tips',
        url: '/blog'
      },
      {
        text: 'Contact',
        desc: 'Get in touch',
        url: '/contact'
      },
      {
        text: 'Galleries',
        desc: 'Graduated classes',
        url: '/galleries'
      }
    ]
  )
}
