import React from 'react';

import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <Ingredient key={igKey + i} type={igKey} />
      })
    })
  return (
    <div className={classes.Burger}>
      <Ingredient type="bread-top" />
      {transformedIngredients}
      <Ingredient type="bread-bottom" />
    </div>
  );
}

export default burger;