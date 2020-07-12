import mealsComponent from '../components/mealsList/mealsList';

const clickEvents = () => {
  $('body').on('click', '.board1', mealsComponent.showMealsEvent);
  $('body').on('click', '#back-to-boards', mealsComponent.hideMealsEvent);
};

export default { clickEvents };
