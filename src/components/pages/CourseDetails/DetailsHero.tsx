import { Product } from '@/types/product';
import React from 'react'

interface Props {
  product: Product;
  lang: "en" | "bn";
}
const DetailsHero = ({ product, lang }: Props) => {
    console.log(product)
  return (
    <div>
      
    </div>
  )
}

export default DetailsHero
