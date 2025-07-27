
import React from 'react'

interface Props {
  title: string;
  lang: "en" | "bn";
}
const DetailsHero = ({ title, lang }: Props) => {
  
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default DetailsHero
