import React from "react";
import { FC } from "react";

import { cnCard } from "./Card.classname";

import "./Card.css";

const defaultProduct = "./img/default_product.jpeg"

type CardProps = {
  image?: string;
  title: string;
  raiting?: number;
  ordersCount?: string;
  firstOrder?: boolean;
  price: string;
}

const Card: FC<CardProps> = ({ image, title, raiting, ordersCount, firstOrder, price }) => {
  return (
    <div className={cnCard()}>
      <div className={cnCard('image-container')}>
      <img className={cnCard('image')} src={image ? image : defaultProduct} alt="product photo" />
      </div>

      <div className={cnCard('content-container')}>
        <p className={cnCard('title')}>{title}</p>
        <div className={cnCard('stat')}>
          {firstOrder ? <p className={cnCard('first-order')}>Попробуйте первым!</p> : (
              <>
                <p className={cnCard('raiting')}>{raiting}</p>
                <p className={cnCard('orders-count')}>{ordersCount}</p>
              </>
            )}
        </div>
        <p className={cnCard('price')}>{price}</p>
      </div>
    </div>
  )
}

export { Card }