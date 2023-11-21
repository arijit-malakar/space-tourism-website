import "../styles/header.css";

interface HeaderProps {
  logoPath: string;
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ logoPath, children }) => {
  return (
    <header className="header">
      <img src={logoPath} alt="logo-img" />
      <div className="header-divider"></div>
      {children}
    </header>
  );
};

export default Header;
