export const createHourlyCards = () => {
  const hourlyWeatherForecastSection = document.querySelector(".hourly-weather-forecast-section");

  for (let i = 0; i < 5; i++) {
    const hourlyWeatherForecastCard = document.createElement("div");
    hourlyWeatherForecastCard.classList.add("hourly-weather-forecast-card");

    const hourlyWeatherForecastDateTime = document.createElement("div");
    hourlyWeatherForecastDateTime.classList.add("hourly-weather-forecast-date-time");

    const hourlyWeatherForecastDate = document.createElement("div");
    hourlyWeatherForecastDate.classList.add("hourly-weather-forecast-date", "loading", "dynamic-data");
    hourlyWeatherForecastDate.innerHTML = "&nbsp;";

    const hourlyWeatherForecastTime = document.createElement("div");
    hourlyWeatherForecastTime.classList.add("hourly-weather-forecast-time", "loading", "dynamic-data");
    hourlyWeatherForecastTime.innerHTML = "&nbsp;";

    const hourlyWeatherForecastTemperature = document.createElement("div");
    hourlyWeatherForecastTemperature.classList.add("hourly-weather-forecast-temperature", "loading", "dynamic-data");
    hourlyWeatherForecastTemperature.innerHTML = "&emsp;&emsp;";

    hourlyWeatherForecastDateTime.appendChild(hourlyWeatherForecastDate);
    hourlyWeatherForecastDateTime.appendChild(hourlyWeatherForecastTime);

    hourlyWeatherForecastCard.appendChild(hourlyWeatherForecastDateTime);
    hourlyWeatherForecastCard.appendChild(hourlyWeatherForecastTemperature);

    hourlyWeatherForecastSection.appendChild(hourlyWeatherForecastCard);
  }
};


