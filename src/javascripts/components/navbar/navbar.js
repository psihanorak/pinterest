import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../auth/auth';
import utils from '../../helpers/utils';

const navbar = () => {
  let domString = '';
  domString += `<nav class="navbar navbar-light bg-light">
                  <a class="navbar-brand" href="https://www.pinterest.com/" target="_blank">
                  <span style="font-size: 2em; color: #ff0000;">
                  <i class="fab fa-pinterest"></i>
                  </span>
                  </a>
                  <a class="navbar-brand" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <span style="font-size: 2em; color: #000000;">
                  <i class="fas fa-user-circle"></i>
                  </span>
                  </a>
                  <div id="dropdown-log" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a id="login" class="dropdown-item" href="#">Login</a>
                    <a id="logout" class="dropdown-item" href="#">Logout</a>
                  </div>
                  </a>
                </nav>`;
  utils.printToDom('#navbar', domString);
};

const logInEvent = () => {
  $('#login').click(auth.getSignMeIn());
};

const logOutEvent = () => {
  $('#logout').click((e) => {
    e.preventDefault();
    firebase.auth().signOut();
  });
};

export default { navbar, logInEvent, logOutEvent };
