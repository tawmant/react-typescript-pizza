import React, { useState } from 'react';
import { ICardItem } from '../../types/redux/card';
import MyLoader from './loader';
import classes from './card-item.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import cx from 'classnames';
import { useDispatch } from 'react-redux';
import { CartActionTypes } from '../../types/redux/cart';

interface ICardItemProps {
  item: ICardItem;
  itemCount: number;
}

const CardItem: React.FC<ICardItemProps> = (props) => {
  const dispatch = useDispatch();

  const { itemCount } = props;
  const { title, category, id, price, url, types, sizes } = props.item,
    pizzaSize = [26, 30, 40],
    pizzaTypes = ['тонкое', 'традиционное'],
    [colorPlus, setColorPlus] = useState('#EB5A1E'),
    [activeSize, setActiveSize] = useState<number>(2),
    [activeType, setActiveType] = useState<number>(types[0]);

  const addPizza = () => {
    const obj = {
      id,
      title,
      url,
      price,
      size: pizzaSize[activeSize],
      type: pizzaTypes[activeType],
    };

    dispatch({ type: CartActionTypes.ADD_PIZZA, payload: obj });
  };
  return (
    <li className={classes.cardItem}>
      <img className={classes.img} src={url} alt={title} />
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.selectorBlock}>
        <ul className={classes.cardList}>
          {pizzaTypes.map((type, i) => (
            <li
              key={type}
              onClick={() => setActiveType(i)}
              className={cx(classes.typeItem, {
                [classes.active]: activeType === i,
                [classes.disabled]: !types.includes(i),
              })}
            >
              {type}
            </li>
          ))}
        </ul>
        <ul className={classes.sizeList}>
          {pizzaSize.map((size, i) => (
            <li
              key={size}
              onClick={(e) => setActiveSize(i)}
              data-disabled={!sizes.includes(size)}
              className={cx(classes.sizeItem, {
                [classes.active]: activeSize === i,
                [classes.disabled]: !sizes.includes(size),
              })}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 d-flex justify-content-between align-items-center">
        <p className={classes.cardPrice}>от {price} ₽</p>
        <button
          className={classes.btn}
          onMouseLeave={(e) => setColorPlus('#FE5F1E')}
          onMouseEnter={(e) => setColorPlus('#fff')}
          onClick={() => addPizza()}
        >
          <div
            className="d-flex align-items-center"
            onClick={() => console.log(itemCount)}
          >
            <span className={classes.plus}>
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                  fill={colorPlus}
                />
              </svg>
            </span>
            <p>Добавить</p>
            {itemCount > 0 ? (
              <span className={classes.count}>
                <span>{itemCount}</span>
              </span>
            ) : null}
          </div>
        </button>
      </div>
    </li>
  );
};

export default CardItem;
