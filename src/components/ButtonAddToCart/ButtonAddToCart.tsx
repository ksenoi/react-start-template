import React, { FC } from 'react'
import './ButtonAddToCart.css'

interface ButtonAddToCartProps{
  /**
 * Number of products
   */  
  count: number
}

export const ButtonAddToCart: FC<ButtonAddToCartProps> = ({count}) => {
  return (
    count === 0 
    ? <button className='btnAddToCart'>
      В корзину
    </button>
    : <div>
        <button className='btnAddToCart__changeCount'>-</button>
        <input className='btnAddToCart__input' type="text" value={count}/>
        <button className='btnAddToCart__changeCount'>+</button>
    </div>
  );
}