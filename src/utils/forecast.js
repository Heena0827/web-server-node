const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=7ab98aa734c21dd0ffa33f52134a510f&query=${latitude},${longitude}&units=f`

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback("Something went wrong on weatherstack api.")
        } else if(body.current) {
            const data = body.current
            callback(undefined, `It is currently ${data.temperature} degrees outside, but it feels like ${data.feelslike} degrees.`)
        } else {
            callback("Unable to find requested location. Pls try with different location.")
        }
    })
}

module.exports = forecast