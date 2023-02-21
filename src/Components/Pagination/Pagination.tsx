import { PaginateProps } from '../../Types/Types';
import './_Pagination.scss';

function Pagination({ cardsPerPage, totalCards, paginate }: PaginateProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    console.log('This is total cards: ', totalCards);
    console.log('This is cards per page: ', cardsPerPage);
    console.log('This is the index: ', i);
    pageNumbers.push(i);
  }

  // let i = 1;
  // while (totalCards && cardsPerPage === numOfCards) {
  //   pageNumbers.push(i);
  //   i++;
  // }

  return (
    <nav>
      <ul className="navParent">
        {pageNumbers.map((num) => {
          return (
            <li className="navLinks" key={num}>
              <button
                type="button"
                onClick={() => {
                  paginate(num);
                }}
              >
                {num}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Pagination;
