import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  const { strMeal, idMeal, strArea, strCategory, strMealThumb } = meal;

  const navigator = useNavigate();
  const handlerNavigator = () => {
    navigator(`/meal/${idMeal}`);
  };
  return (
    <div>
      <h3>{strMeal}</h3>
      <p>Id: {idMeal}</p>
      <img width={"400px"} src={strMealThumb} alt="" />
      <div className="mt-2">
        <Link to={`/meal/${idMeal}`}>
          <button className="btn btn-primary me-2">Order</button>
        </Link>
        <button className="btn btn-danger" onClick={handlerNavigator}>
          Order 2
        </button>
      </div>
    </div>
  );
};

export default Meal;
