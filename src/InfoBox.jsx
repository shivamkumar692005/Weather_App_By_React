import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FaBrain, FaCloudShowersHeavy } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

export default function InfoBox({ info}) {
  let imgUrl = 'https://media.istockphoto.com/id/1137759901/photo/summer-hot-weather-season-high-temperature-thermometer-with-city-view.jpg?s=1024x1024&w=is&k=20&c=k7zrlCGWEjywYTLUrKk5nnRKPoy49aHRv2KzBDsbJxw='
  if(info.weather) {
    let weather = info.weather;
    if(weather == 'Clear') {
      imgUrl = 'https://images.unsplash.com/photo-1644983038252-a80b1536bdfb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  } else if(weather == 'Clouds') {
      imgUrl = 'https://media.istockphoto.com/id/157527872/photo/storm-cloud.jpg?s=1024x1024&w=is&k=20&c=bX9T0wxwo4YUBXjBXOD76eER6jJ9H73i0M3-XFvMbno=';
  } else if(weather == 'Drizzle') {
      imgUrl = 'https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.jpg?s=1024x1024&w=is&k=20&c=6y2CMbbSmyo_ZI6HlD25TNF_M93Qt_odD1Jse0FWNZQ=';
  } else if(weather == 'Mist') {
      imgUrl = 'https://media.istockphoto.com/id/1195458582/photo/aerial-view-of-misty-mountains-at-sunrise.jpg?s=1024x1024&w=is&k=20&c=xES3cWT4pVhyLdvANDhmKgFgsHIhbFjtGdhawUpUi9s=';
  } else if(weather == 'Rain') {
      imgUrl = 'https://media.istockphoto.com/id/498063665/photo/rainy-landscape.jpg?s=1024x1024&w=is&k=20&c=JmmkAKBNVz2QC2YaXGl8lLvYQYrn6SYXt_FPtN-8JUc=';
  } else if(weather == 'Snow') {
      imgUrl = 'https://media.istockphoto.com/id/521998431/photo/whiteout-conditions.jpg?s=1024x1024&w=is&k=20&c=bkMU3ZsAaxe7oVekkU3OmiEO5Ec_c3MYupbmpY0WSuU=';
  } else if(weather == 'Haze') {
      imgUrl ='https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=1024x1024&w=is&k=20&c=FzBhkGLI-zWZ36jW-uKKSeJJcFSNLFJ0b_kWmGlscuk=';
  }
}
  return (
    <div
      style={{
        maxWidth: '350px',
        margin: 'auto',
        marginTop: "50px",
        textAlign: "center",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={imgUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }} component={'span'}>
            <p>weather : {info.weather} {info.weather==='Clouds'?<FaCloudShowersHeavy/>:info.weather==='Clouds'?<FaBrain />:<IoIosSunny />}</p>
            <p>Temperature : {info.temperature}&deg;C</p>
            <p>Humidity : {info.humidity}</p>
            <p>TemMin : {info.temMin}</p>
            <p>TemMax : {info.temMax}</p>
            <p>FeelsLike : {info.feelsLike}&deg;C</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
