async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const resultDiv = document.getElementById("weatherResult");
  resultDiv.innerHTML = "Loading...";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === 200) {
      resultDiv.innerHTML = `
        <h3>Weather in ${data.name}, ${data.sys.country}</h3>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Condition: ${data.weather[0].description}</p>
      `;
    } else {
      resultDiv.innerHTML = "<p>City not found. Please try again.</p>";
    }
  } catch (error) {
    resultDiv.innerHTML = "<p>Error fetching data. Please try again later.</p>";
  }
}
