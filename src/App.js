import { BrowserRouter } from 'react-router-dom';
import './App.css';
import WeatherRoute from './Components/WeatherRoute';

function App() {
  return (
    <BrowserRouter>
      <WeatherRoute />

    </BrowserRouter>
  );
}

export default App;
