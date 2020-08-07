import utils from '../../helpers/utils';

import './home.scss';

const homeHeader = () => {
  let domString = '';
  domString += `  <div id="pinterest-header">
                    <h1>Pinterest</h1>
                  </div>`;
  utils.printToDom('#home', domString);
};

export default { homeHeader };
