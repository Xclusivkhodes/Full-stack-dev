import globe from "/images/globe.png";

const Header = () => {
  return (
    <header className="header">
      <img src={globe} alt="" className="header-image" />
      <p className="header-text">my travel jounal</p>
    </header>
  );
};

export default Header;
