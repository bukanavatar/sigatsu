const HeroLanding = ()=>(
    <section className="heroLanding">
        <div className="heroBg">

        </div>
        <div className="heroContainer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Sigatsu</h1>
                        <h6>Siaga Tsunami</h6>
                    </div>
                    <div className="col-md-6">
                        <div className="anuu" style={{position: 'relative'}}>
                        <span className="scrollText">
                        <svg height="50" width="15">
                          <line x1="0" y1="0" x2="0" y2="100" style={{stroke:"rgb(255,255,255)",strokeWidth:3}}/>
                        </svg>
                        Scroll Down
                    </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default HeroLanding