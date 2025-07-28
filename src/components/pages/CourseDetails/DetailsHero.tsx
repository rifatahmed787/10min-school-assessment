import Heading from '@/components/common/Heading';
import React from 'react';

interface Props {
  title: string;
  lang: 'en' | 'bn';
}

const DetailsHero = ({ title, lang }: Props) => {
  return (
    <div lang={lang}>
      <Heading as='h1' variant='highlight'>
        {title}
      </Heading>
    </div>
  );
};

export default DetailsHero;