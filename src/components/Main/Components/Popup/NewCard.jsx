export default function NewCard({}) {
  return (
    <form className="popup__form" id="form-add" noValidate>
      <p className="popup__title">Nuevo Lugar</p>
      <fieldset className="popup__fieldset">
        <input
          type="text"
          className="popup__input popup__input-first"
          id="input-title"
          name="name"
          placeholder="Titulo"
          required
          minLength="2"
          maxLength="40"
        />
        <span className="input-title-error input-error"></span>
        <input
          type="url"
          className="popup__input"
          id="input-link"
          name="link"
          placeholder="Enlace a la imagen"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="input-link-error input-error"></span>
        <button className="popup__button popup__btn-create" type="submit">
          Crear
        </button>
      </fieldset>
    </form>
  );
}
