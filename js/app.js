const apiKey = `fea920cfa95c17d0853b566140898dd1`

 const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
     fetch(url)
    .then(res => res.json())
    .then(data => temperatureDisplay(data))
 }
 /*
 const temperatureDisplay = data => {
   console.log(data.name)
   const city = document.getElementById('city')
   city.innerText = data.name
   

   const temperature = document.getElementById('temperature')
   temperature.innerText = data.wind.deg

   const clouds = document.getElementById('clouds')
   clouds.innerText = data.weather[0].main

 }

 document.getElementById('search-btn').addEventListener('click', function(){
   const searchField = document.getElementById('input-field')
   const value = searchField.value
   loadTemperature(value)
 })
 */
 const temperatureDisplay = data => {
  console.log(data)
 //\ setInnertextId('city', data.name)
  setInnertextId('temperature', data.main.temp)
  setInnertextId('clouds', data.weather[0].main)
}


 const setInnertextId = (id, text) =>{

const element = document.getElementById(id)
element.innerText = text;

  /*
   const city = document.getElementById(id)
   city.innerText = text

   const temperature = document.getElementById(id)
   temperature.innerText = text;

   const cloud = document.getElementById(id)
   cloud.innerText = text;
*/

 }


 document.getElementById('search-btn').addEventListener('click', function(){
   const searchField = document.getElementById('input-field')
   const city = searchField.value
   // set city
   document.getElementById('city').innerText = city;
   loadTemperature(city)
 })
 
  loadTemperature('dhaka')


