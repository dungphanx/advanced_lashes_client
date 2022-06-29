const bestSellings: BestSelling[] = [
  {
    "name": "A+ Strong Adhesive",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/a_strong_adhesive/",
    "price": "$35.00"
  },
  {
    "name": "Pre-made Volume Eyelash – 8D",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/premade-8d/",
    "price": "$32.00"
  },
  {
    "name": "V – Butterfly Lash – Mixed Tray",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/butterfly-lash-mix-trays/",
    "price": "$15.00"
  },
  {
    "name": "Mink Lash Tray – “D” Curl",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/minklashtray_d_curl/",
    "price": "$10.00"
  },
  {
    "name": "MIX Flower Lash – NEW",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/mix-flower-lash/",
    "price": "$15.00"
  },
  {
    "name": "V – Butterfly Lash – Individual Sized Tray",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/butterfly-lash-individual-size/",
    "price": "$15.00"
  },
  {
    "name": "Pre-made Volume Eyelash – 4D",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/premade-4d/",
    "price": "$24.00"
  },
  {
    "name": "Mink Lash Tray – “C” Curl",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/minklashtray_c_curl/",
    "price": "$10.00"
  },
  {
    "name": "PreMade Fans – 5D w/Cylinder",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/mi-tru-5d/",
    "price": "$12.00"
  },
  {
    "name": "Pre-made Volume Eyelash – 5D",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/premade-5d/",
    "price": "$26.00"
  },
  {
    "name": "Pre-made Volume Eyelash – 3D",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/premade-3d/",
    "price": "$17.00"
  },
  {
    "name": "Mink Lash Tray – Flower Lash",
    "image_url": "https://www.advancelashes.com/wp-content/uploads/2019/10/20191019_110714-450x450.jpg",
    "url": "https://www.advancelashes.com/product/flower-lash/",
    "price": "$15.00"
  }
]

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type BestSelling = {
  name: string,
  image_url: string,
  url: string,
  price: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<BestSelling[]>
) {
  res.status(200).json(bestSellings)
}
