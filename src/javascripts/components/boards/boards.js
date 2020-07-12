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
                      <div id="category" class="${board.id}">
                        <div id="grids">
                            <div id="pin" class="grid-item1"></div>
                            <div id="pin" class="grid-item2"></div>
                            <div id="pin" class="grid-item3"></div>
                            <div id="pin" class="grid-item4"></div>
                            <div id="pin" class="grid-item5"></div>
                            <div id="pin" class="grid-item6"></div>
                        </div>
                      </div>
                      <div id="category-header">
                        <div><h5>${board.name}</h5></div>
                        <a id="edit"><i class="fas fa-edit"></i></a>
                      </div>
                     </div>`;
  return domString;
};

export default { createHeader, boardMaker };
