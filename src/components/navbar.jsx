const Navbar = () => {
    return(<nav className="navbar">
        <div><span>Education Hub</span></div>
      <ul id="nav-items">
        <a className="list-items" href=""><li>Home</li></a>
        <a className="list-items"   href=""><li>Dropdown</li></a>
        <a  className="list-items" href=""><li>News</li></a>
        <a  className="list-items" href=""><li>Gallery</li></a>
        <a className="list-items" href=""><li>About</li></a>
        <a className="list-items" href=""><li>contact</li></a>
      </ul>
      <div className="nav-btn"><button>Enroll Now</button></div>
      

    </nav>)
};

export default Navbar;