import React, { FC } from 'react'
import './Product.css'
import { Product as ProductType } from '../../types/Product';
import { ButtonAddToCart } from '../../components/ButtonAddToCart/ButtonAddToCart';

interface Props {
  product: ProductType;
}

export const Product: FC<Props> = ({ product }) => {
  return (
    <div className='product'>
      <div className='product_imgBox'>
        <img className='product__image' src={`${product.imageURL}`} alt={product.title} />
      </div>
      <div className='product__details'>
        <div className='product__content'>
          <h2>{product.title}<br />
            <span>{product.category}</span>
          </h2>
          <p>{product.description}</p>
        </div>
        <div className='product__info'>
            <div className='product__price'>
              {product.price}
            </div>
            <div className='product__btnBox'>
              <ButtonAddToCart count={0}></ButtonAddToCart>
            </div>
        </div>
      </div>
    </div>
  );
}
