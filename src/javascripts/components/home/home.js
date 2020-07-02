import utils from '../../helpers/utils';

const homeHeader = () => {
  let domString = '';
  domString += `<div id="home-header">
                <h1>Pinterest</h1>
                </div>`;
  utils.printToDom('#home', domString);
};

export default { homeHeader };
