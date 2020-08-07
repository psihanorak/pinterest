import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseConfig.databaseURL;

const getMeals = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/meals.json`)
    .then((response) => {
      const mealsObjects = response.data;
      const meals = [];
      Object.keys(mealsObjects).forEach((mealId) => {
        mealsObjects[mealId].id = mealId;
        meals.push(mealsObjects[mealId]);
      });
      resolve(meals);
    })
    .catch((err) => reject(err));
});

const getMealsById = (mealsId) => axios.get(`${baseUrl}/meals/${mealsId}.json`);

const deleteMeals = (mealsId) => axios.delete(`${baseUrl}/meals/${mealsId}.json`);

export default { getMeals, getMealsById, deleteMeals };
