import './Styles/base/reset.scss';
import './_App.scss';
import useWindowSize from './Hooks/useWindowSize';
import Card from './Components/Card/Card';

function App() {
  const { height } = useWindowSize();

  return (
    <div className="App">
      <Card />
      <Card height={height} />
    </div>
  );
}

export default App;
