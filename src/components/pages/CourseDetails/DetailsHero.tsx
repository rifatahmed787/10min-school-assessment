import { Product } from '@/types/product';
import React from 'react'

interface Props {
  product: Product;
  lang: "en" | "bn";
}
const DetailsHero = ({ product, lang }: Props) => {
    console.log(product, lang)
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}

export default DetailsHero
