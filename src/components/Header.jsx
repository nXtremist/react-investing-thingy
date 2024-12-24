import logo from "../assets/logo.png";
export default function Header({ children }) {
  return (
    <>
      <header id="header">
        <img src={logo} alt="" />
        <h1>{children}</h1>
      </header>
    </>
  );
}
