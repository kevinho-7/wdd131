document.addEventListener("DOMContentLoaded", () => {
    
    // Set current year
    const currentYearElement = document.getElementById("currentyear");
    if (currentYearElement) {
      currentYearElement.textContent = new Date().getFullYear();
    } else {
      console.error("Element with id 'currentyear' not found.");
    }
  
    // Set last modification date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
      lastModifiedElement.textContent = "Last Modification: " + document.lastModified;
    } else {
      console.error("Element with id 'lastModified' not found.");
    }
  
    // Wind Chill Calculation
    const temperature = 18; 
    const windSpeed = 5;
    let windChill = "N/A";
  
    function calculateWindChill(temp, wind) {
      return (13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16)).toFixed(1) + " °C";
    }
  
    if (temperature <= 10 && windSpeed >= 4) {
      windChill = calculateWindChill(temperature, windSpeed);
    }
  
    const windChillElement = document.querySelector(".weather-item span#wind-chill");
    if (windChillElement) {
      windChillElement.textContent = windChill;
    } else {
      console.error("Element with class 'weather-item span#wind-chill' not found.");
    }
  });