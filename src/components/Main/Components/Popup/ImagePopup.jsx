export default function ImagePopup(props) {
  const { name, link } = props;

  return (
    <div>
      <img src={link} alt={name} className="popup__img-full" />
      <p className="popup__img-name">{name}</p>
    </div>
  );
}
