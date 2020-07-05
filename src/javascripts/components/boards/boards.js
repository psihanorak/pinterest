import utils from '../../helpers/utils';

const createHeader = () => {
  let domString = '';
  domString += `<div id="board-header">
                <h1>Boards</h1>
                </div>
                <div id="avatar">
                <img src="src/images/profile.png" class="card-img-top" alt="...">
                </div>`;
  utils.printToDom('#boards', domString);
};

const boardMaker = (board) => {
  const domString = `<div class="grid-container cards">
                      <div id="grids">
                          <div id="grid" class="grid-item1"></div>
                          <div id="grid" class="grid-item2"></div>
                          <div id="grid" class="grid-item3"></div>
                          <div id="grid" class="grid-item4"></div>
                          <div id="grid" class="grid-item5"></div>
                          <div id="grid" class="grid-item6"></div>
                      </div>
                      <div id="category">
                        <h5>${board.name}</h5>
                      </div>
                     </div>`;
  return domString;
};

export default { createHeader, boardMaker };
