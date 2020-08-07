import supermodelsData from '../../helpers/data/supermodelsData';
import utils from '../../helpers/utils';

import boardsComponent from '../boards/boards';
import supermodelMaker from '../supermodelMaker/supermodelMaker';

import './supermodels.scss';

const createSupermodels = () => {
  supermodelsData.getSupermodels()
    .then((supermodels) => {
      let domString = ` <div id="supermodels-boards">
                          <button type="button" class="btn btn-secondary btn-sm">Back</button>
                        </div>
                          <div id="supermodels-avatar"> 
                          <div id="supermodels-header">
                            <h1>${supermodels.name}</h1>
                          </div>
                          <div id="avatar">
                            <img src="src/images/profile.png" class="card-img-top" alt="...">
                          </div>
                        </div>
                        <div id="supermodels-container" class="d-flex flex-wrap">`;

      supermodels.forEach((supermodel) => {
        domString += supermodelMaker.supermodelMaker(supermodel);
      });

      domString += '</div>';
      utils.printToDom('#supermodels', domString);
    })
    .catch((err) => console.error('createSupermodels did not work', err));
};

const showSupermodelsEvent = (e) => {
  const boardId = e.currentTarget.id;
  createSupermodels(boardId);
  $('#boards').addClass('hide');
  $('#supermodels').removeClass('hide');
};

const hideSupermodelsEvent = (e) => {
  const boardId = e.target.id;
  boardsComponent.createBoards(boardId);
  $('#boards').removeClass('hide');
  $('#supermodels').addClass('hide');
};

export default { createSupermodels, showSupermodelsEvent, hideSupermodelsEvent };
