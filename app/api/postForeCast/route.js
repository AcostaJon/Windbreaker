// post user input to get weather
export async function POST(request) {
    // extract data passed to post function
    const input = await request.json();

    // run
    try {
        // get current weather 
        const forecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=36279875f3bd444e934214049221502&q=${input}&days=3&aqi=no&alerts=no`).then((data) => data.json())

        // return current weather
        return Response.json({ forecast })
    }
    // catch and throw any errors
    catch (err) {
        // throw any issues
        return new Response(err)
    }
}