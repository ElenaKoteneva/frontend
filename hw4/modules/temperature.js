export function celsiusToFahrenheit(temperatureC)
{
    let temperatureF = temperatureC * 9 / 5 + 32;
    console.log(`${temperatureC}°C = ${temperatureF}°F`);
    return temperatureF;
}