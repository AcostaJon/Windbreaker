// post user input to get weather
export async function POST(request) {
    // extract data passed to post function
    const input = await request.json();

    // run
    try {
        // get current weather 
        const astronomy = await fetch(`http://api.weatherapi.com/v1/astronomy.json?key=36279875f3bd444e934214049221502&q=${input}&dt=2024-12-06`).then((data) => data.json())

        // return current weather
        return Response.json({ astronomy })
    }
    // catch and throw any errors
    catch (err) {
        // throw any issues
        return new Response(err)
    }
}