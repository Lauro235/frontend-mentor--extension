import './_Cards.scss';
import { v4 as uuidv4 } from 'uuid';
import useBrowserWidth from '../../Hooks/useBrowserWidth';
import mob from '../../Assets/image-product-mobile.avif';
import large from '../../Assets/image-product-desktop.avif';
import sample from '../../sample_data.json';

function Cards() {
  const desktop = useBrowserWidth(800);
  const { cards: mySample } = sample;

  function mapCards() {
    return mySample.map((card) => {
      return (
        <div key={uuidv4()} className="screen-container">
          <div className="content-container">
            <div className="image-wrapper">
              {!desktop ? (
                <img className="image" src={mob} alt="petals" />
              ) : (
                <img className="image" src={large} alt="petals" />
              )}
            </div>
            <div className="text">
              <h3 className="subtitle">Perfume</h3>
              <h1 className="title">{card['Product Name']}</h1>
              <p className="description-text">{card.Description}</p>
              <div className="cta--price-wrapper">
                <span className="current-price">{`$ ${card['Current Price']}`}</span>
                <span className="previous-price">{`$ ${card['Previous Price']}`}</span>
              </div>
              <button type="button" className="add-to-cart">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      );
    });
  }

  return <div>{mySample ? mapCards() : <h2>No cards available</h2>}</div>;
}

export default Cards;
