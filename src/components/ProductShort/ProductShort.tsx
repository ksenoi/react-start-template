import React, { FC } from 'react'
import './ProductShort.css'
import { Product as ProductType } from '../../types/Product';
import { ButtonAddToCart } from '../../components/ButtonAddToCart/ButtonAddToCart';

interface Props {
  product: ProductType;
}
export const ProductShort: FC<Props> = ({ product }) => {
  return (
    <div className='productshort'>
        <div className='productshort__imgBox'>
          <img className='productshort__image' src={`${product.imageURL}`} alt={product.title} />
        </div>
        <div className='productshort__body'>
          <div className='productshort__content'>
            <h1>
              {product.title}
            </h1>
            <p>
              {product.description}
            </p>
          </div>
          <div className='productshort__info'>
            <div className='productshort__price'>
              {product.price}
            </div>
            <div className='productshort__button'>
              <ButtonAddToCart count={0}></ButtonAddToCart>
            </div>
          </div>
        </div>
    </div>
  );
}