import mealsComponent from '../components/mealsList/mealsList';
import workoutsComponent from '../components/workoutsList/workoutsList';

const clickEvents = () => {
  $('body').on('click', '.board1', mealsComponent.showMealsEvent);
  $('body').on('click', '#meals-to-boards', mealsComponent.hideMealsEvent);
  $('body').on('click', '.board2', workoutsComponent.showWorkoutEvent);
  $('body').on('click', '#workouts-to-boards', workoutsComponent.hideWorkoutEvent);
};

export default { clickEvents };
