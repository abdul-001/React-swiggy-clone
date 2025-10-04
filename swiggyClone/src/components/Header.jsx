import Logo from './Logo';
import Navigation from './Navigation';


function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-md bg-white">
      <Logo />
      <Navigation />
    </header>
  );
}

export default Header;