import React, { useEffect, useState } from 'react';
import CardItem from '../card-item/card-item';
import { useDispatch } from 'react-redux';
import { thunkPizzaAction } from '../../redux/redux-components/card';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Card = () => {
  const state = useTypedSelector((state) => state.card);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkPizzaAction());
  }, []);

  return (
    <ul className='card'>
      {state.items.map((item) => (
        <CardItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default Card;
