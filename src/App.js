import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FormWithBirthDate from './Form/page/formWithBirthDate/FormWithBirthDate';
import FormWithSelect from './Form/page/formWithSelect/FormWithSelect';

function App() {
  return (
    <div className='container'>
      <div className='row d-flex justify-content-center'>
        <div className='col-6'>
          {' '}
          <FormWithSelect />
          <br />
          <hr />
          <br />
          <FormWithBirthDate />
        </div>
      </div>
    </div>
  );
}

export default App;
