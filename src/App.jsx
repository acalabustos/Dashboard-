import './App.css';
import '../src/components/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormUpload from './components/Form';
import FirstNav from '../src/components/Navbar';

function App() {
   return (
      <div className='App'>
         <FirstNav></FirstNav>
          <FormUpload></FormUpload>

      </div>
   );
}
export default App 