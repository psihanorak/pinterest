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

export default { createHeader };
