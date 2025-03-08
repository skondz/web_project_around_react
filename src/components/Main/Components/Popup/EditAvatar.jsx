export default function EditAvatar({}) {
  return (
    <form className="popup__form" id="form-avatar" noValidate>
      <p className="popup__title">Editar Avatar</p>

      <fieldset className="popup__fieldset">
        <input
          type="url"
          className="popup__input"
          id="input-avatar"
          name="avatar"
          placeholder="Enlace a la imagen"
          required
          minLength="2"
          maxLength="200"
        />
        <span className="input-avatar-error input-error"></span>
        <button className="popup__button popup__btn-change" type="submit">
          Guardar
        </button>
      </fieldset>
    </form>
  );
}
