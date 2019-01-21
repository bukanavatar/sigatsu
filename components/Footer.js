import LazyLoad from 'react-lazyload';

const Footer = ()=>(
    <section className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <LazyLoad offset={100}>
                        <img src="/static/images/logo-white.png" alt="Anu" width="100" style={{marginBottom: '32px'}}/>
                    </LazyLoad>
                </div>
                <div className="col-md-3">
                    <p className="navHome">Home</p>
                    <p className="navDampak">Dampak</p>
                    <p className="navPenyebab">Penyebab</p>
                    <p className="navAlat">Alat</p>
                </div>
                <div className="col-md-3">
                    <p className="navMap">Map</p>
                </div>
            </div>
        </div>
        <h6>by Es Mahal</h6>
    </section>
);
export default Footer