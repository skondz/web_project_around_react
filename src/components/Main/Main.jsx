import { useState } from "react";
import avatar from "../../images/userAvatar.jpeg";
import Popup from "./Components/Popup/Popup";
import NewCard from "./Components/Popup/NewCard";
import EditProfile from "./Components/Popup/EditProfile";
import EditAvatar from "./Components/Popup/EditAvatar";
import Card from "./Components/Card/Card";
const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
  {
    isLiked: false,
    _id: "67cb443f5f3ef4001a9792ca",
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
    owner: "01835e08c3e3a3ad4628c0cf",
    createdAt: "2025-03-07T19:08:47.229Z",
  },
  {
    isLiked: false,
    _id: "67cb44545f3ef4001a9792d4",
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
    owner: "01835e08c3e3a3ad4628c0cf",
    createdAt: "2025-03-07T19:09:08.269Z",
  },
  {
    isLiked: false,
    _id: "67cb44635f3ef4001a9792de",
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
    owner: "01835e08c3e3a3ad4628c0cf",
    createdAt: "2025-03-07T19:09:23.497Z",
  },
  {
    isLiked: false,

    _id: "67cb44735f3ef4001a9792e4",
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
    owner: "01835e08c3e3a3ad4628c0cf",
    createdAt: "2025-03-07T19:09:39.021Z",
  },
];

console.log(cards);

export default function Main() {
  // const [addCardPopup, setAddCardPopup] = useState(false);
  // const [editProfile, setEditProfile] = useState(false);
  // const [editAvatar, setEditAvatar] = useState(false);
  // const [imagePopup, setImagePopup] = useState(false);

  // const closePopups = () => {
  //   setAddCardPopup(false);
  //   setEditProfile(false);
  //   setEditAvatar(false);
  // };

  const [popup, setPopup] = useState(null);

  const newCardPopup = { title: "Nuevo Lugar", children: <NewCard /> };

  const profilePopup = { title: "Editar Perfil", children: <EditProfile /> };

  const avatarPopup = { title: "Editar Avatar", children: <EditAvatar /> };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__avatar-overlay"
            onClick={() => {
              handleOpenPopup(avatarPopup);
            }}
          ></div>
          <img
            src={avatar}
            alt="imagen de perfil"
            className="profile__avatar"
          />
        </div>
        <div className="profile__info">
          <h1 className="profile__name">Fernando Escobar</h1>
          <img
            src="./src/images/EditButton.svg"
            alt="boton para editar"
            className="profile__btn-edit"
            onClick={() => {
              handleOpenPopup(profilePopup);
            }}
          />
          <h2 className="profile__about">WFM</h2>
        </div>
        <img
          src="./src/images/addButton.svg"
          alt="boton de agregar"
          className="profile__btn-add"
          onClick={() => {
            handleOpenPopup(newCardPopup);
          }}
        />
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card key={card._id} card={card} handleOpenPopup={handleOpenPopup} />
        ))}
      </section>
      {/* <NewCard open={addCardPopup} onClose={closePopups} />
      <EditProfile open={editProfile} onClose={closePopups} />
      <EditAvatar open={editAvatar} onClose={closePopups} /> */}
      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
