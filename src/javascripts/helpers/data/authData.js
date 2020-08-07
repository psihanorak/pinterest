import firebase from 'firebase/app';
import 'firebase/auth';

import home from '../../components/home/home';
import boards from '../../components/boards/boards';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#navbar').removeClass('hide');
      $('#login').addClass('hide');
      $('#logout').removeClass('hide');
      $('#boards').removeClass('hide');
      $('#home').addClass('hide');
      boards.createBoards();
    } else {
      $('#navbar').removeClass('hide');
      $('#login').removeClass('hide');
      $('#logout').addClass('hide');
      $('#boards').addClass('hide');
      $('#home').removeClass('hide');
      home.homeHeader();
    }
  });
};

export default { checkLoginStatus };
