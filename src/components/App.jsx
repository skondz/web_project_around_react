import "../index.css";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
function App() {
  return (
    <>
      <div className="page">
        <Header></Header>

        <Main></Main>

        <Footer></Footer>
        {/* <!-- PopUp Image --> */}
        <div className="popup" id="popup__img">
          <div className="popup__overlay"></div>
          <div className="popup__container-img">
            <button className="popup__btn-close" id="close-img"></button>
            <img src={null} alt={null} className="popup__img-full" />
            <p className="popup__img-name"></p>
          </div>
        </div>
        {/* <!--PopUp Confirmation--> */}
        <div className="popup" id="popup__confirmation">
          <div className="popup__overlay"></div>
          <div className="popup__container">
            <button
              className="popup__btn-close"
              id="close-confirmation"
            ></button>
            <p className="popup__title">¿Estas Seguro?</p>
            <form
              className="popup__form popup__confirmation"
              id="form-confirmation"
              noValidate
            >
              <fieldset className="popup__fieldset popup__fieldset-confirmation">
                <button
                  className="popup__button popup__btn-confirmation"
                  type="submit"
                >
                  Si
                </button>
              </fieldset>
            </form>
          </div>
        </div>
        {/* <!-- sripts --> */}
        <script src="./src/script/index.js" type="module"></script>
      </div>
    </>
  );
}

export default App;
