export async function GET() {

    try {
        // get current weather 
        const astronomy = await fetch(`http://api.weatherapi.com/v1/astronomy.json?key=36279875f3bd444e934214049221502&q=33406&dt=2024-12-06`).then((data) => data.json())
       
        // return current weather
        return Response.json({astronomy })

    } catch (err) {
        // throw any issues
        return new Response(err)
    }


}