console.log('Client side javascript file is loaded!')

function fetchWeatherInfo(address) {
    
}

const formElement = document.querySelector('form')
const searchterm = document.querySelector('input')
const result = document.getElementById("weather-info")

formElement.addEventListener('submit', (e) => {
    e.preventDefault()
    result.innerHTML = "Loading..."
    const address = searchterm.value
    fetch('/weather?weather='+address).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                result.innerHTML = `Error: ${data.error}`
            } else {
                result.innerHTML = `${data.forecast} , in ${data.location}`
            }
        })
    })

})