function celsiusToFahrenheit(value)
{
    let fahrenheit = (9 / 5) * parseInt(value) + 32;
    if (isNaN(fahrenheit)) {
        fahrenheit = "неоткуда конвертировать";
    } else{
        fahrenheit = fahrenheit.toFixed(1);
    }
    document.getElementById("fahrenheitId").innerText = fahrenheit;
}

function consoleOutput(value)
{
    console.log("Привет, " + value + "!");
}
