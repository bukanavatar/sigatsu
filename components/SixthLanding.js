import React, {Component} from 'react';

class SixthLanding extends Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.js";
        script.async = false;
        document.body.appendChild(script);

    }

    render() {
        return (
            <section className="fourthContainer">
                <div className="overlayMap">
                    <div className="container">
                        <h1>Tsunami Map</h1>
                    </div>
                </div>
                <div id="map"></div>
            </section>
        );
    }
}

export default SixthLanding