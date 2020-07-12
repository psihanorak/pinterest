import mealsComponent from '../components/mealsList/mealsList';

const clickEvents = () => {
  $('body').on('click', '.board1', mealsComponent.showMealsEvent);
};

export default { clickEvents };
