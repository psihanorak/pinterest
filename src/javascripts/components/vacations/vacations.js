import vacationsData from '../../helpers/data/vacationsData';
import utils from '../../helpers/utils';

import boardsComponent from '../boards/boards';
import vacationMaker from '../vacationMaker/vacationMaker';

import './vacations.scss';

const createVacations = () => {
  vacationsData.getVacations()
    .then((vacations) => {
      let domString = ` <div id="vacations-boards">
                          <button type="button" class="btn btn-secondary btn-sm">Back</button>
                        </div>
                          <div id="vacations-avatar"> 
                          <div id="vacations-header">
                            <h1>${vacations.name}</h1>
                          </div>
                          <div id="avatar">
                            <img src="src/images/profile.png" class="card-img-top" alt="...">
                          </div>
                        </div>
                        <div id="vacations-container" class="d-flex flex-wrap">`;

      vacations.forEach((vacation) => {
        domString += vacationMaker.vacationMaker(vacation);
      });

      domString += '</div>';
      utils.printToDom('#vacations', domString);
    })
    .catch((err) => console.error('createVacations did not work', err));
};

const showVacationsEvent = (e) => {
  const boardId = e.currentTarget.id;
  createVacations(boardId);
  $('#boards').addClass('hide');
  $('#vacations').removeClass('hide');
};

const hideVacationsEvent = (e) => {
  const boardId = e.target.id;
  boardsComponent.createBoards(boardId);
  $('#boards').removeClass('hide');
  $('#vacations').addClass('hide');
};

export default { createVacations, showVacationsEvent, hideVacationsEvent };
