import Link from "next/link";
import Image from "next/image";
import React, { useState } from 'react';
import { FloatingButton } from "./floating-button";
import { AiOutlineUnorderedList } from 'react-icons/ai';

export const Product:React.FC<any> = ({ name, imageUrl, url, price }) => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return <>
    <Link href={url}>
      <a href={url} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="product flex flex-col">
        <div>
          <Image src={imageUrl} width={450} height={450} alt={name} layout="responsive"/>

          { isHovering ? <FloatingButtonContent /> : null }
        </div>

        <div className="product_name text-xl font-semibold text-center text-slate-900">{name}</div>
        <div className="price text-2xl text-center font-medium">{price}</div>
      </div>
      </a>
    </Link>
  </>
}

export const FloatingButtonContent: React.FC<any> = () => {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return <FloatingButton>
    <button
      className="text-2xl text-white font-bold bg-rose-500 p-2 rounded-full flex gap-3 hover:translate-x-0"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      { isHovering ? <span className="text-base ease-in-out duration-300 transition-shadow">Selec option</span> : null }
      <AiOutlineUnorderedList/>
    </button>
  </FloatingButton>
}

export default Product;
