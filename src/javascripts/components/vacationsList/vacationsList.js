import vacationsData from '../../helpers/data/vacationsData';
import vacationComponent from '../vacations/vacations';
import boardList from '../boardList/boardList';
import utils from '../../helpers/utils';

const createVacations = () => {
  vacationsData.getVacations()
    .then((vacations) => {
      console.warn('getVacations worked!', vacations);
      let domString = `<div id="vacation-header">
                      <h1>Vacations</h1>
                      </div>
                      <div id="vacations-to-boards">
                      <a><span>Back to Boards</span></a>
                      </div>
                      <div id="vacation-category" class="d-flex flex-wrap">
                      `;

      vacations.forEach((vacation) => {
        domString += vacationComponent.vacationMaker(vacation);
      });

      domString += '</div>';

      utils.printToDom('#vacations', domString);
    })
    .catch((err) => console.error('getVacations did not work!', err));
};

const showVacationEvent = (e) => {
  const boardId = e.currentTarget.id;
  createVacations(boardId);
  $('#board-header').hide();
  $('#wallBoard').hide();
  $('#vacations').show();
};

const hideVacationEvent = (e) => {
  const boardId = e.target.id;
  boardList.createWallBoard(boardId);
  $('#board-header').show();
  $('#wallBoard').show();
  $('#vacations').hide();
};

export default { createVacations, showVacationEvent, hideVacationEvent };
