import React, { useEffect, useState } from 'react';
import CardItem from '../card-item/card-item';
import { useDispatch } from 'react-redux';
import { thunkPizzaAction } from '../../redux/redux-components/card';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import LoadingBlock from '../loading-block/loading-block';
import cx from 'classnames';

import './card.scss';

const Card = () => {
  const state = useTypedSelector((state) => state.card);
  const stateCart = useTypedSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkPizzaAction());
  }, []);

  if (state.loading) {
    return (
      <div>
        {Array(state.items.length)
          .fill(0)
          .map((_, index) => (
            <LoadingBlock key={index} />
          ))}
      </div>
    );
  }

  return (
    <ul className="card">
      {state.items.map((item) => (
        <CardItem
          key={item.id}
          item={item}
          itemCount={stateCart.items[item.id] ? stateCart.items[item.id].items.length : 0}
        />
      ))}
    </ul>
  );
};

export default Card;
