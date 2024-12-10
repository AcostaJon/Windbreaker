export async function GET() {

    try {
        // get current forecast 
        const forecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=36279875f3bd444e934214049221502&q=33406&days=3&aqi=no&alerts=no`).then((data) => data.json())
       
        // return current weather
        return Response.json({forecast})

    } catch (error) {
        // throw any issues
        console.log('error: ' + error)
    }


}