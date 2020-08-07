import firebase from 'firebase/app';
import 'firebase/auth';
import auth from '../auth/auth';

import utils from '../../helpers/utils';

import './navbar.scss';

const navbar = () => {
  let domString = '';
  domString += `<nav class="navbar navbar-light bg-light">
                  <a class="navbar-brand" href="https://www.pinterest.com/" target="_blank">
                    <i class="fab fa-pinterest fa-3x"></i>
                  </a>
                  <a class="navbar-brand" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i class="fas fa-user-circle fa-3x" hide></i>
                  </a>
                  <div id="dropdown-log" class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <a id="login" class="dropdown-item" href="#">Login</a>
                    <a id="logout" class="dropdown-item" href="#">Logout</a>
                  </div>
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
