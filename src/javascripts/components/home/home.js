import utils from '../../helpers/utils';

const pinterestHeader = () => {
  let domString = '';
  domString += `<div id="home">
                <h1>Pinterest</h1>
                </div>`;
  utils.printToDom('#home', domString);
};

export default { pinterestHeader };
