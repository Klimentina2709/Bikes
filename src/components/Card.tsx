import "../css/card.css";

export interface CardType {
  name: string;
  price: number;
  gender: string;
  brand: string;
  image: string;
}

interface CardProps {
  cards: CardType[];
}

export default function Card({ cards }: CardProps) {
  return (
    <div className="row gx-4 gy-3 pb-5">
      {cards.map((card, index) => (
        <div className="col-12 col-md-6 col-lg-4 d-flex" key={index}>
          <div className="card rounded-2">
            <div className="h-100 cardInner">
              <div className="bodyCard">
                <img
                  className="img-fluid p-3"
                  src={`../../assets/img/${card.image}.png`}
                  alt={card.name}
                />
              </div>
              <div className="footerCard rounded-bottom-2 p-2 bg-warning">
                <h6 className="text-uppercase fw-bolder">{card.name}</h6>
                <p>
                  <span>{card.price}</span> $
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
