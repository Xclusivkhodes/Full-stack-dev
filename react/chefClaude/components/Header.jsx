import Chef from "../images/chef-claude-icon.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Chef} alt="" className="header-img" />
      <p className="header-text">Chef Claude</p>
    </header>
  );
};

export default Header;
