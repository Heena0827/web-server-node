const request = require('request')

const geocode = (address, callback) => {
    const mapboxurl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiaGVlbmEwODI3IiwiYSI6ImNrOTU3c25keDA5ZzEzaWwyYmU0ZTB4Y3YifQ.3cc0eYa0bRhXud6enf1XgA&limit=1 `

    request({url: mapboxurl, json: true}, (error, {body}) => {
        if(error) {
            callback("Something went wrong!")
        } else if(body.features.length === 0) {
            callback("Unable to find the requested location in mapbox.")            
        } else {
            const long = body.features[0].center[0]
            const lat = body.features[0].center[1]
            const place_name = body.features[0].place_name
            callback(undefined, {long, lat, place_name})
        }
    })
}

module.exports = geocode