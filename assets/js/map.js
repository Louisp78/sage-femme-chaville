// Initialize and add the map
function initMap() {
    const cabinet = { lat: 48.80993232855575, lng: 2.1910219850465724 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 17,
        center: cabinet,
    });
    const marker = new google.maps.Marker({
        position: cabinet,
        map: map,
    });
}