import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
  const meals = useLoaderData();
  console.log(meals);

  const mealsData = meals.meals;
  console.log(mealsData);

  return (
    <div>
      {mealsData.map((meal) => (
        <Meal key={meal.idMeal} meal={meal}></Meal>
      ))}
    </div>
  );
};

export default Meals;
