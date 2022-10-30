import Add from '../Add/Add';
import Logo from '../Logo/Logo';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <Logo />
      <Add />
    </header>
  );
}

export default Header;
