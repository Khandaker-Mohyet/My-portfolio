




const Navbar = () => {

  const nav = <>
    
    <li><a href="#home" className="transition-all duration-150">Home</a></li>
    <li><a href="#about" className="duration-150">About</a></li>
    <li><a href="#skill" className="transition-all duration-150">Skills</a></li>
    <li><a href="#education" className="duration-150">Education</a></li>
    <li><a href="#experience" className="duration-150">Experice</a></li>
    <li><a href="#project" className="duration-150">Project</a></li>
    <li><a href="#contact" className="duration-150">Contact</a></li>
  </>

  return (
    <div className="navbar bg-base-100 fixed z-50 backdrop-blur-lg bg-background/70">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {nav}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {nav}
        </ul>
      </div>
      <div className="navbar-end">
      </div>
    </div>
  );
};

export default Navbar;