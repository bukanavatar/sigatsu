import LazyLoad from "react-lazyload";

const SecondLanding = ()=>(
    <section className="secondContainer">
        <div className="secondContent">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>APA ITU TSUNAMI ?</h1>
                        <p><b style={{color: "#ffae38"}}>Tsu</b> berarti pelabuhan, dan <b
                            style={{color:"#ffae38"}}>Nami</b>
                            berarti gelombang.
                            Serangkaian gelombang laut yang sangat besar,
                            Dapat bergerak 500 - 1000 km per jam dengan ketinggian 15 - 30 meter dengan ketinggian
                            maksimal
                            51 meter. Semakin lama kecepatannya semakin berkurang hingga 30 km per jam namun
                            gelombang akan
                            menjadi lebih tinggi.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <LazyLoad offset={100}>
                            <div className="imgSecond" id="imageOne"></div>
                        </LazyLoad>
                        <LazyLoad offset={100}>
                        <div className="imgSecond" id="imageTwo"></div>
                        </LazyLoad>
                    </div>
                </div>
            </div>
        </div>
        <div className="backgroundSecond"></div>
        <div className="overlaySecond"></div>
    </section>
);

export default SecondLanding