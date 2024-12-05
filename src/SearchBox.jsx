import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import './SearchBox.css'
import { useState } from "react";

export default function SearchBox({ UpdateInfo, setError }) {
    let [city, setCity] = useState("");
    

    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "7abf13807df39617ad3ae38ed5d7fb44";

    let getWeather = async() => {
       try {
        let res = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes = await res.json();
        let result = {
            city: city,
            country: jsonRes.sys.country,
            weather: jsonRes.weather[0].main,
            temperature: jsonRes.main.temp,
            humidity: jsonRes.main.humidity,
            temMin: jsonRes.main.temp_min,
            temMax: jsonRes.main.temp_max,
            feelsLike: jsonRes.main.feels_like
        }
        setError(false);

        return result;
       } catch (err) {
        setError(true);
       }
    }

    let handleOnChange = (event) => {
        setCity(event.target.value);
    }

    let onFormSubmit = async(event) => {
       try {
        event.preventDefault();
        console.log(city);
        setCity("");
        let result = await getWeather();
        if(!result) return UpdateInfo({});
        UpdateInfo(result);
       } catch (err) {
        console.log(err);
       }
    }
  return (
    <div className="seach-box">
      <h3>Weather APP</h3>
      <form onSubmit={onFormSubmit}>
        <TextField id="city" label="City Name" variant="outlined" value={city}  onChange={handleOnChange} required />
        <br /> <br />
        <Button variant="contained" type="submit">Search</Button>
      </form>
    </div>
  );
}
