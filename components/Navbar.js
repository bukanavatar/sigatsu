const Navbar = ()=>(
    <nav className="navigation" id="navigasi">
        <div className="navBar">
            <div className="navigationButton">
                <div tabIndex="0" aria-label="Menu" role="button" aria-controls="navigation"
                     className="hamburger hamburger--spin" id="buttonNavHam">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
                </div>
            </div>
        </div>
        <div className="navContent">
            <div className="row navRowContent">
                <div className="col-sm-3 navCol">
                    <span className="navHome">Home</span>
                </div>
                <div className="col-sm-3 navCol">
                    <span className="navDampak">Dampak</span>
                </div>
                <div className="col-sm-3 navCol">
                    <span className="navPenyebab">Penyebab</span>
                </div>
                <div className="col-sm-3 navCol">
                    <span className="navAlat">Alat</span>
                </div>
            </div>
        </div>
    </nav>
);

export default Navbar