function getMapPos() {
    gGoogleMap.addListener('click', (ev) => {
            console.log('Map clicked', ev);
            const placeName = prompt('Place name?')
            console.log('Map clicked', placeName, ev.latLng.lat(), ev.latLng.lng());
            var place = {
                placeName,
                lat: ev.latLng.lat(),
                lng: ev.latLng.lng()
            }
        }
    }
}