import LazyLoad from 'react-lazyload';

const SeventhLanding = () =>(
    <section className="eightContainer">
        <div className="container">
            <h1 className="judulTim">Great people behind Sigatsu</h1>
            <div className="row">
                <div className="col-md-3">
                    <center>
                        <LazyLoad offset={100}>
                            <img src="/static/images/aang.jpg" alt="" className="img-fluid rounded-circle" width="200"/>
                        </LazyLoad>
                    </center>
                    <h5>Aang</h5>
                    <p>m.ilham.mubarak@gmail.com</p>
                </div>
                <div className="col-md-3">
                    <center>
                        <LazyLoad offset={100}>
                        <img src="/static/images/rizqy.jpg" alt="" className="img-fluid rounded-circle" width="200"/>
                        </LazyLoad>
                    </center>
                    <h5>Rizqy</h5>
                    <p>rizqyprayogo23@gmail.com</p>
                </div>
                <div className="col-md-3">
                    <center>
                        <LazyLoad offset={100}>
                        <img src="/static/images/riyo.jpg" alt="" className="img-fluid rounded-circle" width="200"/>
                        </LazyLoad>
                    </center>
                    <h5>Riyo</h5>
                    <p>riyodewo05@gmail.com</p>
                </div>
                <div className="col-md-3">
                    <center>
                        <LazyLoad offset={100}>
                        <img src="/static/images/alif.jpg" alt="" className="img-fluid rounded-circle" width="200"/>
                        </LazyLoad>
                    </center>
                    <h5>Alif</h5>
                    <p>alifnabil0505@gmail.com</p>
                </div>
            </div>
        </div>
    </section>
)
export default SeventhLanding