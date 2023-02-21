import { useState } from 'react';
import './Styles/base/_reset.scss';
import './_App.scss';
// import useWindowSize from './Hooks/useWindowSize';
import Cards from './Components/Cards/Cards';
import Pagination from './Components/Pagination/Pagination';
import { cards } from './sample_data.json';

function App() {
  // eslint-disable-next-line no-debugger
  // debugger;
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [cardsPerPage] = useState<number>(4);

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

  // Change page  & return scoll point to 0
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="App">
      <Cards cardsPerPage={currentCards} />
      <Pagination
        cardsPerPage={cardsPerPage}
        totalCards={cards.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
