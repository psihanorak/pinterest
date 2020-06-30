import firebase from 'firebase/app';
import 'firebase/auth';
import boards from '../../components/boards/boards';
import home from '../../components/home/home';

const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      $('#login').hide();
      $('#logout').show();
      $('#boards').show(boards.boardsHeader);
      $('#home').hide(home.pinterestHeader);
    } else {
      $('#login').show();
      $('#logout').hide();
      $('#boards').hide(boards.boardsHeader);
      $('#home').show(home.pinterestHeader);
    }
  });
};

export default { checkLoginStatus };
