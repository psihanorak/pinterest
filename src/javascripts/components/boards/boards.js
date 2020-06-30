import utils from '../../helpers/utils';

const boardsHeader = () => {
  let domString = '';
  domString += `<div id="boards">
                <h1>Boards</h1>
                </div>`;
  utils.printToDom('#boards', domString);
};

export default { boardsHeader };
