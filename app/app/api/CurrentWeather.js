// api call for curent weather at https://www.weatherapi.com/api-explorer.aspx
// async function
export default async function currentweather(location) {
    // fetch api
    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=36279875f3bd444e934214049221502&q=${location}&aqi=no`)
    // parse the promise to json
        .then(res => res.json())

        // return data
    return response
}              