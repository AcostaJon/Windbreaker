export async function GET() {

    try {
        // get current forecast 
        const forecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=36279875f3bd444e934214049221502&q=10001&days=3&aqi=no&alerts=no`).then((data) => data.json())
       
        // return current weather
        return Response.json({forecast})

    } catch (err) {
        // throw any issues
          return new Response(err)
    }


}