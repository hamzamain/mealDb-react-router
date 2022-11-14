import React from "react";
import { useLoaderData } from "react-router-dom";

const MealDetails = () => {
  const mealData = useLoaderData();
  const meal = mealData.meals[0];
  const { strMeal, idMeal, strArea, strCategory, strMealThumb } = meal;
  console.log(meal);
  return (
    <div>
      <h2>{strMeal}</h2>
      <img width={"400px"} src={strMealThumb} alt="" />
      <p>Meal Id: {idMeal}</p>
      <p>Food Location: {strArea}</p>
      <p>Category: {strCategory}</p>
    </div>
  );
};

export default MealDetails;
