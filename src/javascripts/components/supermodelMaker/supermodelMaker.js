import './supermodelMaker.scss';

const supermodelMaker = (supermodel) => {
  const domString = ` <div id="supermodels-category">
                        <img class="supermodels-pin" src="${supermodel.imageURL}" alt="Card image">
                        <div id="supermodels-edit">
                          <a><i class="fas fa-edit"></i></a>
                        </div>
                      </div>`;
  return domString;
};

export default { supermodelMaker };
