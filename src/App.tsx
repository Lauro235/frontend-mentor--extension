import './Styles/base/reset.scss';
import './_App.scss';
// import useWindowSize from './Hooks/useWindowSize';
import Cards from './Components/Cards/Cards';

function App() {
  // const { height } = useWindowSize();

  return (
    <div className="App">
      <Cards />
    </div>
  );
}

export default App;
