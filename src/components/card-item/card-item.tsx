import React from 'react';
import { ICardItem } from '../../types/redux/card';
import MyLoader from './loader';
import classes from './card-item.module.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';

interface ICardItemProps {
  item: ICardItem;
}

const CardItem: React.FC<ICardItemProps> = (props) => {
  const state = useTypedSelector(state => state.card);
  const { title, category, id, price, url } = props.item;

  console.log(props.item);
  return (
    // <MyLoader/>
    <li className={classes.cardItem}>
      <img className={classes.img} src={url} alt={title} />
      <h3 className={classes.title}>{title}</h3>
      <div className={classes.selectorBlock}>
        <ul className={classes.cardList}>
          <li className={classes.typeItem}>тонкое</li>
          <li className={classes.typeItem}>традиционное</li>
        </ul>
        <ul className={classes.sizeList}>
          <li className={classes.sizeItem}>тонкое</li>
          <li className={classes.sizeItem}>традиционное</li>
        </ul>
      </div>
      <div className="d-flex justify-content-between">
        <p>от {price} ₽</p>
        <button className={classes.btn}>
          <span className={classes.plus}>+</span>
          <p>Добавить</p>
          <span className={classes.count}>{state.totalCount}</span>
        </button>
      </div>
    </li>
  );
};

export default CardItem;
