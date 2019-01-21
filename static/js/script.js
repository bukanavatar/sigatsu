$(".heroLanding").css("height", window.innerHeight);
$(".heroBg").css("height", window.innerHeight);
$(".secondContainer").css("height", window.innerHeight);
$(".backgroundSecond").css("height", window.innerHeight);
$(".backgroundThird").css("height", window.innerHeight);
$(".overlaySecond").css("height", window.innerHeight);
$(".fifthContainer").css("height", window.innerHeight);
$(".sixthContainer").css("min-height", window.innerHeight);
$(".sixthContent").css("min-height", window.innerHeight);
$(".seventhContainer").css("min-height", window.innerHeight);

let boolian = true;
$(".navContent").css("display", "none");
$("#buttonNavHam").click(function () {
    if (boolian) {
        console.log("tRUE");
        $(".navContent").css("display", "block");
        setTimeout(function () {
            $("#buttonNavHam").addClass("is-active");
            $(".navContent").addClass("navActive");
            $(".col-sm-3").each(function (i) {
                var $item = $(this);
                setTimeout(function () {
                    $item.removeClass("fadeOutDown");
                    $item.addClass("animated fadeInUp");
                }, 40 * i)
            });
        }, 10)
    } else {
        console.log("Masuk Sini");
        $(".col-sm-3").each(function (i) {
            var $item = $(this);
            setTimeout(function () {
                $item.removeClass("fadeInUp");
                $item.addClass("animated fadeOutDown");
            }, 40 * i)
        });
        setTimeout(function () {
            $("#buttonNavHam").removeClass("is-active");
            $(".navContent").removeClass("navActive");
            setTimeout(function () {
                $(".navContent").css("display", "none");
            }, 500)
        }, 300)
    }
    boolian = !boolian;
});
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > window.innerHeight - 190) {
        $(".navBar").css("background", "#1e6163");
    } else {
        $(".navBar").css("background", "transparent");
    }
    if (scroll > 400 && scroll < 1180) {
        $("#imageOne").css("width", "300");
        setTimeout(function () {
            $("#imageTwo").css("width", "300")
        }, 50)
    } else {
        $("#imageOne").css("width", "0");
        setTimeout(function () {
            $("#imageTwo").css("width", "0")
        }, 50)
    }
});
let lFollowX = 0, lFollowY = 0, x = 0, y = 0, friction = 1 / 30;

function moveBackground() {
    x += (lFollowX - x) * friction;
    y += (lFollowY - y) * friction;
    translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';
    $('.heroBg').css({'-webit-transform': translate, '-moz-transform': translate, 'transform': translate});
    window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function (e) {
    let lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
    let lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
    lFollowX = (20 * lMouseX) / 100;
    lFollowY = (10 * lMouseY) / 100;
});
moveBackground();
console.log(window.innerWidth);
let zoom = 4.5;
if (window.innerWidth <= 480) {
    zoom = 3
}
mapboxgl.accessToken = 'pk.eyJ1IjoiYnVrYW5hdmF0YXIiLCJhIjoiY2pwY2RnZzBtMGthMzNwcDhkYTluOTJkeCJ9.NEHAspoFr-xidb-xlTj7aQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/bukanavatar/cjqq6vcsj8g952smms3htc3wd',
    center: [117.636211, -0.617303],
    zoom: zoom
});
map.scrollZoom.disable();
map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
var stores = {
    "type": "FeatureCollection",
    "features": [{
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [95.33528302101956, 5.5584815474916525]},
        "properties": {
            "nama": "Tsunami Aceh",
            "tanggal": "26 Desember 2004",
            "akibat": "Gempa 9,3SR",
            "korban": "160,000"
        }
    }, {
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [117.58657249999999, -8.616401]},
        "properties": {"nama": "Tsunami Sumba", "tanggal": "19 Agustus 1977", "akibat": "Gempa 7,0SR", "korban": "187"}
    }, {
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [114.36694, -8.21861]},
        "properties": {
            "nama": "Tsunami Banyuwangi",
            "tanggal": "19 Agustus 1977",
            "akibat": "Gempa 7,0SR",
            "korban": "187"
        }
    }, {
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [122.79, -0.95]},
        "properties": {"nama": "Tsunami Banggai", "tanggal": "4 Mei 2000", "akibat": "Gempa 6,5SR", "korban": "46"}
    }, {
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [105.991456, -6.444035]},
        "properties": {
            "nama": "Tsunami Banten",
            "tanggal": "22 Desember 2018",
            "akibat": "Gempa 9,3SR",
            "korban": "373"
        }
    }, {
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [108.557434, -7.6409365000000005]},
        "properties": {
            "nama": "Tsunami Pangadaran",
            "tanggal": "17 Juli 2006",
            "akibat": "Gempa 8.0SR",
            "korban": "100"
        }
    }, {
        "type": "Feature",
        "geometry": {"type": "Point", "coordinates": [119.83333, -0.9]},
        "properties": {
            "nama": "Tsunami Palu",
            "tanggal": "28 September 2018",
            "akibat": "Gempa 7,4SR",
            "korban": "2,100"
        }
    }]
};

map.on('load', function (e) {
    map.addLayer({
        id: 'locations',
        type: 'symbol',
        source: {type: 'geojson', data: stores},
        layout: {'icon-image': 'restaurant-15', 'icon-allow-overlap': false,}
    });
});


stores.features.forEach(function (marker) {
    var el = document.createElement('div');
    el.className = 'marker';
    new mapboxgl.Marker(el, {offset: [0, 0]}).setLngLat(marker.geometry.coordinates).addTo(map);
});

function flyToStore(currentFeature) {
    map.flyTo({center: currentFeature.geometry.coordinates, zoom: zoom});
}

function createPopUp(currentFeature) {
    var popUps = document.getElementsByClassName('mapboxgl-popup');
    const htmlPopup = `<h4>${currentFeature.properties.nama}</h4><div><div class="row"><div class="col">Tanggal</div><div class="col">${currentFeature.properties.tanggal}</div></div><div class="row"><div class="col">Akibat</div><div class="col">${currentFeature.properties.akibat}</div></div><div class="row"><div class="col">Korban</div><div class="col">${currentFeature.properties.korban}</div></div></div>`;
    if (popUps[0]) popUps[0].remove();
    var popup = new mapboxgl.Popup({closeOnClick: true}).setLngLat(currentFeature.geometry.coordinates).setHTML(htmlPopup).addTo(map);
}

map.on('click', function (e) {
    var features = map.queryRenderedFeatures(e.point, {layers: ['locations']});
    if (features.length) {
        var clickedPoint = features[0];
        flyToStore(clickedPoint);
        createPopUp(clickedPoint);
        var activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
            activeItem[0].classList.remove('active');
        }
        var selectedFeature = clickedPoint.properties.address;
        for (var i = 0; i < stores.features.length; i++) {
            if (stores.features[i].properties.address === selectedFeature) {
                selectedFeatureIndex = i;
            }
        }
    }
});

$('.slickCarousel').slick({
    centerMode: true,
    autoPlay: true,
    autoplaySpeed: 1000,
    slidesToShow: 3,
    dots: false,
    infinite: true,
    prevArrow: $(".beforeYesterday"),
    nextArrow: $(".nextBesok"),
    responsive: [{
        breakpoint: 768,
        settings: {arrows: true, centerMode: true, centerPadding: '40px', slidesToShow: 3}
    }, {breakpoint: 480, settings: {arrows: false, centerMode: true, centerPadding: '0px', slidesToShow: 1}}]
});
const dataAlat = [{
    nama: "Seismograf",
    deskripsi: "Seismograf adalah suatu alat yang digunakan untuk mengukur gempa atau getaran yang terjadi pada permukaan bumi. Seismograf akan mencatat getaran dalam bentuk grafik yang disebut seismogram. Seismograf juga berperan dalam menentukan lokasi episentrum"
}, {
    nama: "Buoy",
    deskripsi: "Buoy bekerja berdasarkan gelombang tsunami air laut yang dideteksi oleh sensor yang ditempatkan di OBU. Buoy dapat mengirimkan peringatan tsunami selang 10 menit setelah terjadinya gempa."
}, {
    nama: "Tide Gauge",
    deskripsi: "Tide gauge adalah pendeteksi tsunami yang dipasang di perairan untuk mendeteksi adanya gelombang.  Tide gauge bekerja dengan cara mengukur perubahan permukaan laut secara mekanis dan otomatis. Alat ini dapat mengukur pasang surut air laut yang memungkinkan untuk mendeteksi tsunami secara cepat."
}, {
    nama: "Floating Tide Gauge",
    deskripsi: "Floating tide gauge adalah alat pengukuran pasut yang miliki prinsip kerja berdasarkan pada gerak naik turunnya permukaan laut yang dapat diketahui melalui pelampung yang dihubungkan dengan alat pencatat.\n"
}, {
    nama: "Seafloor Pressure Sensor",
    deskripsi: "Pengukuran tekanan secara real-time ini sangat penting, karena pasang surut bulan, badai, dan tsunami sangat mempengaruhi tekanan di dasar laut. Tekanan ini mempengaruhi bentuk pasang surut, yang bisa saja menjadi tanda awal tsunami"
}];
const judulAlat = document.getElementById("judulAlat");
const kontenAlat = document.getElementById("kontenAlat");
judulAlat.innerText = dataAlat[0].nama;
kontenAlat.innerText = dataAlat[0].deskripsi;
$('.slickCarousel').on('beforeChange', function (e, s, cS, nS) {
    console.log("Current SLide " + cS, "next Slide:" + nS);
    $('#judulAlat').addClass("animated fadeOutDown");
    $('#kontenAlat').addClass("animated fadeOutDown");
    setTimeout(function () {
        judulAlat.innerText = dataAlat[nS].nama;
        kontenAlat.innerText = dataAlat[nS].deskripsi;
        $('#judulAlat').addClass("animated fadeInUp");
        $('#kontenAlat').addClass("animated fadeInUp");
        $('#judulAlat').removeClass("fadeOutDown");
        $('#kontenAlat').removeClass("fadeOutDown");
    }, 500)
});
$(".scrollText").click(function () {
    $('html, body').animate({scrollTop: $(".secondContainer").offset().top - 140}, 2000, "easeInOutQuint")
});
$(".navHome").click(function () {
    tutup();
    $('html, body').animate({scrollTop: $(".heroLanding").offset().top}, 2000, "easeInOutQuint")
});
$(".navPenyebab").click(function () {
    tutup();
    $('html, body').animate({scrollTop: $(".seventhContainer").offset().top - 140}, 2000, "easeInOutQuint")
});
$(".navDampak").click(function () {
    tutup();
    $('html, body').animate({scrollTop: $(".thirdContainer").offset().top - 250}, 2000, "easeInOutQuint")
});
$(".navAlat").click(function () {
    tutup();
    $('html, body').animate({scrollTop: $(".sixthContainer").offset().top - 140}, 2000, "easeInOutQuint")
});
$(".navMap").click(function () {
    $('html, body').animate({scrollTop: $(".fourthContainer").offset().top - 140}, 2000, "easeInOutQuint")
});
window.addEventListener("offline", function () {
    $("#map").addClass("mapOffline");
    $("#map").html("<p>Maaf, Map Hanya Bisa digunakan Online</p>")
});

function tutup() {
    $(".col-sm-3").each(function (i) {
        var $item = $(this);
        setTimeout(function () {
            $item.removeClass("fadeInUp");
            $item.addClass("animated fadeOutDown");
        }, 40 * i)
    });
    setTimeout(function () {
        $("#buttonNavHam").removeClass("is-active");
        $(".navContent").removeClass("navActive");
        setTimeout(function () {
            $(".navContent").css("display", "none");
        }, 500)
    }, 300);
    boolian = !boolian
}