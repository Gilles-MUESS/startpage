import './App.scss';
import Clock from '../Clock/Clock';
import Weather from '../Weather/Weather';
import Search from '../Search/Search';

const App = () => {
  return (
    <div className='App'>
      <div className='row row-center pddtop'>
        <Clock />
        <Weather />
      </div>
      <Search />
    </div>
  );
};

export default App;
