// api call for curent weather at https://www.weatherapi.com/api-explorer.aspx
export default async function currentweather(location) {

    const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=36279875f3bd444e934214049221502&q=${location}&aqi=no`)
        .then(res => res.json())
    return response
}              