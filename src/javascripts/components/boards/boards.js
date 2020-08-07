import boardsData from '../../helpers/data/boardsData';
import utils from '../../helpers/utils';

import boardMaker from '../boardMaker/boardMaker';

import './boards.scss';

const createBoards = (boardsId) => {
  boardsData.getBoards(boardsId)
    .then((boards) => {
      console.warn(boards);
      let domString = ` <div id="boards-avatar"> 
                          <div id="boards-header">
                            <h1>${boards.name}</h1>
                          </div>
                          <div id="avatar">
                            <img src="src/images/profile.png" class="card-img-top" alt="...">
                          </div>
                        </div>
                        <div id="boards-container" class="d-flex flex-wrap">`;

      boards.forEach((board) => {
        domString += boardMaker.createAllBoards(board);
      });

      domString += '</div>';
      utils.printToDom('#boards', domString);
    })
    .catch((err) => console.error('createBoards did not work', err));
};

export default { createBoards };
