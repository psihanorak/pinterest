import workoutsData from '../../helpers/data/workoutsData';
import utils from '../../helpers/utils';

import boardsComponent from '../boards/boards';
import workoutMaker from '../workoutMaker/workoutMaker';

import './workouts.scss';

const createWorkouts = () => {
  workoutsData.getWorkouts()
    .then((workouts) => {
      let domString = ` <div id="workouts-boards">
                          <button type="button" class="btn btn-secondary btn-sm">Back</button>
                        </div>
                        <div id="workouts-avatar"> 
                          <div id="workouts-header">
                            <h1>${workouts.name}</h1>
                          </div>
                          <div id="avatar">
                            <img src="src/images/profile.png" class="card-img-top" alt="...">
                          </div>
                        </div>
                        <div id="workouts-container" class="d-flex flex-wrap">`;

      workouts.forEach((workout) => {
        domString += workoutMaker.workoutMaker(workout);
      });

      domString += '</div>';
      utils.printToDom('#workouts', domString);
    })
    .catch((err) => console.error('createWorkouts did not work', err));
};

const showWorkoutsEvent = (e) => {
  const boardId = e.currentTarget.id;
  createWorkouts(boardId);
  $('#boards').addClass('hide');
  $('#workouts').removeClass('hide');
};

const hideWorkoutsEvent = (e) => {
  const boardId = e.target.id;
  boardsComponent.createBoards(boardId);
  $('#boards').removeClass('hide');
  $('#workouts').addClass('hide');
};

export default { createWorkouts, showWorkoutsEvent, hideWorkoutsEvent };
