import LazyLoad from "react-lazyload";

const FifthLanding = ()=>(
    <section className="sixthContainer">
        <div className="sixthContent">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Alat Pendeteksi</h1>
                        <p>It may save you from danger</p>
                    </div>
                </div>
            </div>
            <div className="slickContainer">
                <div className="slickCarousel container-fluid">
                    <div className="anuuu">
                        <LazyLoad offset={100}>
                        <img src="/static/images/seismograph.png" alt=""/>
                        </LazyLoad>
                    </div>
                    <div className="anuuu">
                        <LazyLoad offset={100}>
                        <img src="/static/images/buoy.png" alt=""/>
                        </LazyLoad>
                    </div>
                    <div className="anuuu">
                        <LazyLoad offset={100}>
                        <img src="/static/images/tideGauge.png" alt=""/>
                        </LazyLoad>
                    </div>
                    <div className="anuuu">
                        <LazyLoad offset={100}>
                        <img src="/static/images/floatTideGauge.png" alt=""/>
                        </LazyLoad>
                    </div>
                    <div className="anuuu">
                        <img src="/static/images/seafloorPressure.png" alt=""/>
                    </div>
                </div>
                <div className="container kontenAlatContainer">
                    <div className="row">
                        <div className="col-md-6">
                            <h2 id="judulAlat">Seismograf</h2>
                            <p id="kontenAlat">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                                deserunt
                                in
                                incidunt libero maxime molestiae, quidem quod tempora? Animi dolore error excepturi
                                harum
                                laudantium
                                maiores nemo nesciunt, officiis sint suscipit!</p>
                        </div>
                        <div className="col-md-6">
                            <div className="arrowContainer">
                                <button className="btnArrow nextBesok btn btn-outline-primary">Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
export default FifthLanding