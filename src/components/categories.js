import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const categoriesState = useSelector((state) => state.categories);
  const underConstructionMessage = 'Under construction';
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getStatus());
  }, [dispatch]);

  const { categories } = categoriesState;

  const isUnderConstruction = categories.includes('Under construction');

  return (
    <p>
      {isUnderConstruction
        ? underConstructionMessage
        : JSON.stringify(categories)}
    </p>
  );
};

export default Categories;
