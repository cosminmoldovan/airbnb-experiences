import logo from '../images/airbnb-logo.svg'

function Navbar(){
   return (
        <nav className="nav">
            <img src={logo} alt="airbnb-logo" className="nav-logo" />
        </nav>
   );
}
export default Navbar;