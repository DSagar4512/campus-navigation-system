var map, searchBox; // Declare globally

function initMap() {
    var collegeLocation = { lat: 19.8762, lng: 75.3433 };
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: collegeLocation
    });

    var marker = new google.maps.Marker({
        position: collegeLocation,
        map: map,
        title: "Government Engineering College, Aurangabad"
    });

    // Search Box Setup
    searchBox = new google.maps.places.SearchBox(document.getElementById("searchbox"));
}

function searchPlace() {
    var places = searchBox.getPlaces();
    if (!places || places.length === 0) {
        alert("No place found!");
        return;
    }

    var bounds = new google.maps.LatLngBounds();
    places.forEach(place => {
        if (!place.geometry) return;
        bounds.extend(place.geometry.location);
    });

    map.fitBounds(bounds);
}


function searchPlace() {
    var searchQuery = document.getElementById("searchbox").value;
    if (searchQuery.trim() === "") {
        alert("Please enter a location.");
        return;
    }
    var googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;
    window.open(googleMapsUrl, "_blank"); // Opens Google Maps in a new tab
}