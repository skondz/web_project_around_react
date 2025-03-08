import ImagePopup from "../Popup/ImagePopup";
export default function Card(props) {
  const { name, link, isLiked } = props.card;

  const imageComponent = {
    children: <ImagePopup name={name} link={link} />,
  };

  return (
    <div className="card">
      <img
        src={link}
        alt={name}
        className="card__image"
        onClick={() => props.handleOpenPopup(imageComponent)}
      />
      <div className="card__info">
        <p className="card__text">{name}</p>
        <button className="card__btn-delete"></button>
        <button className="card__btn-like"></button>
      </div>
    </div>
  );
}
