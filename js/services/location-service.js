export const locationService = {
    getLocations
}


const gLocations = [{ lat: 17, lng: 19, name: 'Puki Home' }];

function getLocations() {
    return Promise.resolve(gLocations)
}


function createLocation(userLat, userLng) {
    return {
        id: 789456,
        name: 'as',
        lat: userLat,
        lng: userLng,
        createAt: Date.now()
            // weather and updateAt
    }
}