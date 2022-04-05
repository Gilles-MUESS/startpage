import './App.scss';
import Clock from '../Clock/Clock';

const App = ()  => {
  return (
    <div className="App">
      <div className="grid">
        <div className="row">
          <Clock />
        </div>
      </div>
    </div>
  );
}

export default App;
