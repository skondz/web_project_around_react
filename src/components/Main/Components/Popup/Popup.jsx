export default function Popup({ onClose, title, children }) {
  return (
    <div>
      <div className={`popup ${open ? "popup__show" : ""}`}>
        <div className="popup__overlay" onClick={onClose}></div>
        <div
          className={`${!title ? "popup__container-img" : "popup__container"}`}
        >
          <button
            className="popup__btn-close"
            id="close"
            onClick={onClose}
          ></button>
          {children}
        </div>
      </div>
    </div>
  );
}
