import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

function App() {
  const [info, setInfo] = useState({
    city: "",
    weather: "",
    temperature: '',
    humidity: '',
    temMin: '',
    temMax: '',
    feelsLike: '',
  });
  const [error, setError] = useState(false);


  function UpdateInfo (info) {
    setInfo(info);
  }

  
  return (
    <>
      <SearchBox UpdateInfo={UpdateInfo} setError={setError}/>
      
      { info.city && <InfoBox info={info} />}

      {error && <p style={{color: 'red', textAlign: 'center'}}>City Not Found</p>}
      
    </>
  );
}

export default App;
