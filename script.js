function search(){
let district_name= disc.value;
console.log(district_name);
fetch(`http://api.weatherapi.com/v1/current.json?key=0abfc849ac024c3f87845231230304&q=${district_name}&aqi=no`)
// fetch(`http://api.weatherapi.com/v1/current.json?key=0abfc849ac024c3f87845231230304&q=${district_name}&aqi=no`)
.then(data => data.json())
.then(res => displayData(res))
}

function displayData(out){
    // display temperature and city
    
       let cit=out.location.name 
    let temperature= (out.current['temp_c'])
    temp.innerHTML =`${temperature}&#176C;`
    city.innerHTML=`${cit}`;
// display date and time
    let local_time=out.location.localtime
    time.innerHTML=`${local_time}`;
    // display humidity, wind and pressure
    let hum= out.current.humidity
    let win= out.current.wind_mph
    let pre=out.current.pressure_mb
    humidity.innerHTML= hum
    wind.innerHTML = win
    pressure.innerHTML=pre

    // display feels like, visibility and cloud
    let clouds= out.current['cloud'];
    let feels_like=out.current['feelslike_c']
    let visibility=out.current['vis_miles']
    feelslike_c.innerHTML=feels_like;
    vis_miles.innerHTML=visibility;
    cloud.innerHTML=clouds;
    

}
