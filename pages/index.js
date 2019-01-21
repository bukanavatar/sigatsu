import React, {Component} from 'react';
import Navbar from "../components/Navbar";
import HeroLanding from "../components/HeroLanding";
import Head from 'next/head';
import SecondLanding from "../components/SecondLanding";
import ThirdLanding from "../components/ThirdLanding";
import FourthLanding from "../components/FourthLanding";
import FifthLanding from "../components/FifthLanding";
import SixthLanding from "../components/SixthLanding";
import SeventhLanding from "../components/SeventhLanding";
import Footer from "../components/Footer";

class Index extends Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "/static/js/script.js";
        script.async = false;
        document.body.appendChild(script);
        // if ('serviceWorker' in navigator) {
        //     // Use the window load event to keep the page load performant
        //     window.addEventListener('load', () => {
        //         navigator.serviceWorker.register('/sw.js');
        //         console.log("Masuk Gan")
        //     });
        // }
    }


    render() {
        return (
            <div>
                <Head>
                    <title>Sigatsu - Siaga Tsunami</title>
                    <meta charSet="UTF-8"/>
                    <meta name="viewport"
                          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"/>
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                    <link rel="stylesheet" href="/static/css/hamburgers.min.css"/>
                    <link rel="stylesheet" href="/static/css/bootstrap.min.css"/>
                    <link rel="stylesheet" href="/static/css/animate.css"/>
                    <link rel="stylesheet" href="/static/css/main.css"/>
                    <link rel="stylesheet" href="/static/css/slick.css"/>
                    <link rel="stylesheet" href="/static/css/slick-theme.css"/>
                    <link href='https://api.mapbox.com/mapbox-gl-js/v0.52.0/mapbox-gl.css' rel='stylesheet'/>
                </Head>
                <Navbar/>
                <HeroLanding/>
                <SecondLanding/>
                <ThirdLanding/>
                <FourthLanding/>
                <FifthLanding/>
                <SixthLanding/>
                <SeventhLanding/>
                <Footer/>
                <script src="/static/js/jquery-min.js"></script>
                <script src="/static/js/jquery-ui.min.js"></script>
                <script src="/static/js/slick.min.js"></script>
            </div>
        );
    }
}

export default Index