import { PaginateProps } from '../../Types/Types';
import './_Pagination.scss';

function Pagination({ cardsPerPage, totalCards, paginate }: PaginateProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCards / cardsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <div className="opacity" />
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
