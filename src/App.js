import './App.css';
import Temp from './component/weather/Temp';

function App() {
  const apiKey = process.env.REACT_APP_WEATHER_API
  return (
    <>
      <Temp apiKey={apiKey}/>
    </>
  );
}

export default App;
