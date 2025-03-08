export default function EditProfile({}) {
  return (
    <form className="popup__form" id="form-profile" noValidate>
      <p className="popup__title">Editar Perfil</p>

      <fieldset className="popup__fieldset">
        <input
          type="text"
          className="popup__input popup__input-first"
          id="input-name"
          name="nombre"
          placeholder="Nombre"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="input-name-error input-error"></span>
        <input
          type="text"
          className="popup__input"
          id="input-about"
          name="about"
          placeholder="Acerca de mi"
          required
          minLength="2"
          maxLength="400"
        />
        <span className="input-about-error input-error"></span>

        <button className="popup__button popup__btn-save" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
