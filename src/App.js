import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import { appStore } from './utils/appStore';
import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './utils/firebase';

function App() {

  useEffect(() => {
    // signOut(auth).then(() => {
    //   // Sign-out successful.
    //   }).catch((error) => {
    //   // An error happened.
    //   });

  },[]);

  return (
    <Provider store={appStore} >
      <Body/>
    </Provider>
  );
}

export default App;
