import mealsComponent from '../components/mealsList/mealsList';
import workoutsComponent from '../components/workoutsList/workoutsList';
import vacationsComponent from '../components/vacationsList/vacationsList';
import modelsComponent from '../components/supermodelsList/modelsList';

const clickEvents = () => {
  $('body').on('click', '.board1', mealsComponent.showMealsEvent);
  $('body').on('click', '#meals-to-boards', mealsComponent.hideMealsEvent);
  $('body').on('click', '.board2', workoutsComponent.showWorkoutEvent);
  $('body').on('click', '#workouts-to-boards', workoutsComponent.hideWorkoutEvent);
  $('body').on('click', '.board3', vacationsComponent.showVacationEvent);
  $('body').on('click', '#vacations-to-boards', vacationsComponent.hideVacationEvent);
  $('body').on('click', '.board4', modelsComponent.showModelEvent);
  $('body').on('click', '#models-to-boards', modelsComponent.hideModelEvent);
};

export default { clickEvents };
