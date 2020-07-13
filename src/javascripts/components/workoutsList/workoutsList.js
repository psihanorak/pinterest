import workoutsData from '../../helpers/data/workoutsData';
import workoutComponent from '../workouts/workouts';
import boardList from '../boardList/boardList';
import utils from '../../helpers/utils';

const createWorkouts = () => {
  workoutsData.getWorkouts()
    .then((workouts) => {
      console.warn('getWorkouts worked!', workouts);
      let domString = `<div id="workout-header">
                      <h1>Workouts</h1>
                      </div>
                      <div id="workouts-to-boards">
                      <a><span>Back to Boards</span></a>
                      </div>
                      <div id="workout-category" class="d-flex flex-wrap">
                      `;

      workouts.forEach((workout) => {
        domString += workoutComponent.workoutMaker(workout);
      });

      domString += '</div>';

      utils.printToDom('#workouts', domString);
    })
    .catch((err) => console.error('createMeals did not work!', err));
};

const showWorkoutEvent = (e) => {
  const boardId = e.currentTarget.id;
  createWorkouts(boardId);
  $('#board-header').hide();
  $('#wallBoard').hide();
  $('#workouts').show();
};

const hideWorkoutEvent = (e) => {
  const boardId = e.target.id;
  boardList.createWallBoard(boardId);
  $('#board-header').show();
  $('#wallBoard').show();
  $('#workouts').hide();
};

export default { createWorkouts, showWorkoutEvent, hideWorkoutEvent };
