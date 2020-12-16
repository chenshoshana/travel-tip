export const locationService = {
    getLocations,
    createLocation
}


const gLocations = [{ lat: 17, lng: 19, name: 'Puki Home' }];

function getLocations() {
    return Promise.resolve(gLocations)
}


function createLocation(place) {
    return {
        id: 789456,
        name: place.name,
        lat: place.lat,
        lng: place.lng,
        createAt: Date.now()
            // weather and updateAt
    }
}