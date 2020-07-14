const modelMaker = (model) => {
  const domString = `<div id="model-pins">
                      <img class="card-img" src="${model.imageURL}" alt="Card image"></img>
                     </div>
                    `;
  return domString;
};

export default { modelMaker };
