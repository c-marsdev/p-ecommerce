import Nav from "./Nav";

const Header = () => {
  return (
    <div className="border-2">
      <img src="./src/assets/logo.png" alt="logo" width="60px" />
      <h1>Header</h1>
      <Nav />
      <div>Search</div>
    </div>
  );
};
export default Header;
