import logo from "../../images/logo.svg";

export default function Header({}) {
  return (
    <header className="header">
      <img src={logo} alt="Logo Arround the U.S." className="header__logo" />
    </header>
  );
}
