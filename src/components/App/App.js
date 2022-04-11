import './App.scss';
import Clock from '../Clock/Clock';
import Weather from '../Weather/Weather';

const App = ()  => {
  return (
    <div className="App">
      <div className="grid">
        <div className="row">
          <Clock className="col-4" />
          <Weather className="col-2" />
        </div>
      </div>
    </div>
  );
}

export default App;
