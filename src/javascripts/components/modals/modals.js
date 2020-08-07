import utils from '../../helpers/utils';

import './modals.scss';

const mealModal = () => {
  const domString = ` <div class="modal fade" id="mealsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog" role="document">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h5 class="modal-title" id="exampleModalLabel">Edit Meal</h5>
                              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div class="modal-body">
                              <form class="modify-meal" id="">
                                <div class="form-group">
                                  <label for="editMeal-name">Meal Name</label>
                                  <input type="text" class="form-control" id="editMeal-name" placeholder="Provide a name for your meal here..."value="">
                                </div>
                                <div class="form-group">
                                  <label for="editMeal-image">Meal Image</label>
                                  <input type="imageUrl" class="form-control" id="editMeal-image" placeholder="Provide an image URL for your meal here..." value="">
                                </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <button id="delete-meals-btn" type="button" class="btn btn-secondary">Delete</button>
                              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                              <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                          </div>
                        </div>
                      </div>`;

  utils.printToDom('#modal', domString);
};

export default { mealModal };
