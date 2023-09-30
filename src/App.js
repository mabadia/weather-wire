import './App.css';
import SearchBar from './components/searchBar';
import WeatherApp from './components/weather';

function App() {
  return (
    <div className="App">
      <SearchBar/>
        <WeatherApp/>
    </div>
  );
}

export default App;
