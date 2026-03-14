"use client";

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient) {

  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
  );

  const data = await response.json();

  if (!data.meals) {
    return [];
  }

  return data.meals;
}

export default function MealIdeas({ ingredient }) {

  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {

    if (!ingredient) return;

    const mealIdeas = await fetchMealIdeas(ingredient);

    setMeals(mealIdeas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas</h2>

      {ingredient && <p>Ingredient: {ingredient}</p>}

      <ul>
        {meals.map((meal) => (
          <li key={meal.idMeal}>
            {meal.strMeal}
          </li>
        ))}
      </ul>
    </div>
  );
}