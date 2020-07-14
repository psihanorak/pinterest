import modelsData from '../../helpers/data/modelsData';
import modelComponent from '../supermodels/models';
import boardList from '../boardList/boardList';
import utils from '../../helpers/utils';

const createModels = () => {
  modelsData.getModels()
    .then((models) => {
      console.warn('getModels worked!', models);
      let domString = `<div id="model-header">
                      <h1>Models</h1>
                      </div>
                      <div id="models-to-boards">
                      <a><span>Back to Boards</span></a>
                      </div>
                      <div id="model-category" class="d-flex flex-wrap">
                      `;

      models.forEach((model) => {
        domString += modelComponent.modelMaker(model);
      });

      domString += '</div>';

      utils.printToDom('#models', domString);
    })
    .catch((err) => console.error('getModels did not work!', err));
};

const showModelEvent = (e) => {
  const boardId = e.currentTarget.id;
  createModels(boardId);
  $('#board-header').hide();
  $('#wallBoard').hide();
  $('#models').show();
};

const hideModelEvent = (e) => {
  const boardId = e.target.id;
  boardList.createWallBoard(boardId);
  $('#board-header').show();
  $('#wallBoard').show();
  $('#models').hide();
};

export default { createModels, showModelEvent, hideModelEvent };
