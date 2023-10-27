import React, { FC } from 'react'
import './CartItem.css'
import { Product as ProductType } from '../../types/Product';

interface Props {
  product: ProductType;
}

export const CartItem: FC<Props> = ({ product }) => {
  return (
    <div className='cartItem'>
      <div className='cartItem__details'>
        <div className='cartItem__imgBox'>
          <img className='cartItem__image' src={product.imageURL} alt={product.title} />
        </div>
        <div className='cartItem__title'>
          <a href={`/product/${product.id}`}>
            {product.title}
          </a>
        </div>
        <div className='cartItem__price'>
          {product.price}
        </div>
      </div>
      <div>
        <button className='cartItem__btnBox'>
          Remove
        </button>
      </div>
    </div>
  );
}