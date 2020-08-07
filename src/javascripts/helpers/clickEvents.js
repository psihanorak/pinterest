import mealsComponent from '../components/meals/meals';
import workoutsComponent from '../components/workouts/workouts';
import vacationsComponent from '../components/vacations/vacations';
import supermodelsComponent from '../components/supermodels/supermodels';

const clickEvents = () => {
  mealsComponent.mealsClickEvents();
  $('body').on('click', '.board2', workoutsComponent.showWorkoutsEvent);
  $('body').on('click', '#workouts-boards', workoutsComponent.hideWorkoutsEvent);
  $('body').on('click', '.board3', vacationsComponent.showVacationsEvent);
  $('body').on('click', '#vacations-boards', vacationsComponent.hideVacationsEvent);
  $('body').on('click', '.board4', supermodelsComponent.showSupermodelsEvent);
  $('body').on('click', '#supermodels-boards', supermodelsComponent.hideSupermodelsEvent);
};

export default { clickEvents };
