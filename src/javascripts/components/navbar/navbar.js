import utils from '../../helpers/utils';

const navbar = () => {
  let domString = '';
  domString += `<nav class="navbar navbar-light bg-light">
                  <a class="navbar-brand" href="https://www.pinterest.com/" target="_blank">
                  <span style="font-size: 2em; color: red;">
                  <i class="fab fa-pinterest"></i>
                  </span>
                  </a>
                  <a class="navbar-brand" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span style="font-size: 2em; color: black;">
                  <i class="fas fa-user-circle"></i>
                  </span>
                  </a>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a class="dropdown-item login" href="#">Login</a>
                    <a class="dropdown-item logout" href="#">Logout</a>
                  </div>
                  </a>
                </nav>`;
  utils.printToDom('#navbar', domString);
};

export default { navbar };
