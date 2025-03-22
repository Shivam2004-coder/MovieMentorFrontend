import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import { appStore } from './utils/appStore';
import { Toaster } from 'sonner';
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <Provider store={appStore} >
        <Toaster richColors />
        <Body/>
    </Provider>
  );
}

export default App;