import Navbar from "../pages/Navbar";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="border-2">
      <img src="./src/assets/logo.png" alt="logo" width="60px" />
      <Navbar />
      <div>Search</div>
    </div>
  );
};
export default Header;
