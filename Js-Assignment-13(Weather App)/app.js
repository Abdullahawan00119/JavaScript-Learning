console.log("Weather App");


const apiKey = "a84fe2767a08484682c192022250410";
const apiUrl = fetch("http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=quetta&aqi=no");

const weatherApiFetch = async () => {
    try {
        const data = (await apiUrl).json();
        console.log(data.location);
        
    } catch (error) {
       console.log(error);
          
    }
}
weatherApiFetch()