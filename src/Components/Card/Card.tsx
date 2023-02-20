import './_Card.scss';
import useBrowserWidth from '../../Hooks/useBrowserWidth';
import mob from '../../Assets/image-product-mobile.avif';
import large from '../../Assets/image-product-desktop.avif';
// import useWindowSize from '../../Hooks/useWindowSize';

// interface CardProps {
//   height?: number;
// }

function Card(/* { height }: CardProps */) {
  const desktop = useBrowserWidth(800);

  // console.log(height);

  // const cardStyles: React.CSSProperties = {
  //   height: height ? `${height}px` : '100vh',
  // };

  return (
    <div /* style={cardStyles} */ className="screen-container">
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
          <h1 className="title">Gabrielle Essence Eau De Parfum</h1>
          <p className="description-text">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="cta--price-wrapper">
            <span className="current-price">$149.99</span>
            <span className="previous-price">$169.99</span>
          </div>
          <button type="button" className="add-to-cart">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
