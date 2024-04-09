import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Searchbox.css'
import { useState } from 'react';
const Searchbox = () => {
   let[city,setCity]=useState("");
   const API_URL="https://api.openweathermap.org/data/2.5/weather";
   const API_keys="3614c37910f21f1b65e5014cd5bdda53";

   let getweatherInfo=async()=>{
    let response=await fetch(`${API_URL}?q=${city}&appid=${API_keys}&units=metric`);
    let jsonresponse=response.json();
    console.log(jsonresponse);
   }
   let handlechange=(evt)=>{
    setCity(evt.target.value);
   }

   let handlesubmit=(evt)=>{
   evt.prevenDefault();
   console.log(city);
   getweatherInfo();
   setCity("")
   }

  return (
    <div className='searchbox'>
    <form onSubmit={handlesubmit}>
       <TextField
        id="city" 
        label="City name"
        variant="outlined"
        value={city}
        onChange={handlechange}
        required />
       <br></br>
       <br></br>
       <Button variant="contained" type='submit'>
        Search
      </Button>
      </form>
    </div>
  )
}

export default Searchbox



