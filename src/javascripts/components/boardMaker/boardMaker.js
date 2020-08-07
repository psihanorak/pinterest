import './boardMaker.scss';

const createAllBoards = (board) => {
  const domString = ` <div id="grid-container" class="cards">
                        <div id="category" class="${board.id}">
                          <div id="grids">
                            <div class="pin grid-item1"></div>
                            <div class="pin grid-item2"></div>
                            <div class="pin grid-item3"></div>
                            <div class="pin grid-item4"></div>
                            <div class="pin grid-item5"></div>
                            <div class="pin grid-item6"></div>
                          </div>
                        </div>
                        <div id="category-edit">
                          <h5>${board.name}</h5>
                          <a><i class="fas fa-edit"></i></a>
                        </div>
                      </div>`;
  return domString;
};

export default { createAllBoards };
