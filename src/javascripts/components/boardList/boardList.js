import utils from '../../helpers/utils';
import boardData from '../../helpers/data/boardsData';
import boardsComponent from '../boards/boards';

const createWallBoard = () => {
  boardData.getBoards()
    .then((boards) => {
      let domString = `
        <div class="d-flex flex-wrap">
      `;

      boards.forEach((board) => {
        domString += boardsComponent.boardMaker(board);
      });

      domString += '</div>';

      utils.printToDom('#wallBoard', domString);
    })
    .catch((err) => console.error('createWallBoard did not work', err));
};

export default { createWallBoard };
