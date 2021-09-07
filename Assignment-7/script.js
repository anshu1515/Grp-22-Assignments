// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

const Api={
    key:"c76b68e481774aae2ef93bfebe9338c0",
    baseLink: "https://api.openweathermap.org/data/2.5/"
}


const search=document.querySelector('input');
const city= document.getElementById('city-name');
const date=document.getElementById('date');
const temp=document.getElementById('temp');
const range=document.getElementById('range');
const humid=document.getElementById('humidity');
const climate=document.getElementById('climate');
const icon=document.getElementById('icon');

search.addEventListener('keypress',(e)=>{
    if(e.keyCode == 13){

        // console.log(search.value);
        fetchData(search.value);
        // search.value="";
    }
  

})

function fetchData(city){
    fetch(`${Api.baseLink}weather?q=${city}&appid=${Api.key}&units=metric`)
    .then((res) =>{
        return res.json();
    })
    .then(data =>{
        showData(data);
    })
    .catch((err) =>{
        console.log(err.message);
    })
}

function showData(data){
    console.log(data);

    city.innerText= `${data.name},${data.sys.country} `;

    const currentDate=new Date();
    date.innerText= dateFun(currentDate);
 
    temp.innerHTML=`${Math.round(data.main.temp)}&deg;C`;

    range.innerHTML=`${Math.floor(data.main.temp_min)}&deg;C/${Math.ceil(data.main.temp_max)}&deg;C`;
 
    humid.innerText=`${Math.round(data.main.humidity)}`;

    icon.innerHTML= iconchange(data.weather);

    climate.innerText= `${data.weather[0].main}`;

    if(climate.textContent == 'Clear'){
        document.querySelector("body").style.backgroundImage = `url('./images/clear.jpg')`;
    }
    else if(climate.textContent == 'Clouds'){
        document.querySelector("body").style.backgroundImage = `url('./images/cloudy.jpg')`;
    }
    else if(climate.textContent == 'Haze' || climate.textContent == 'Mist'){
        document.querySelector("body").style.backgroundImage = `url('./images/haze.jpg')`;
    }
    else if(climate.textContent == 'Rain'){
        document.querySelector("body").style.backgroundImage = `url('./images/rainyday.jpg')`;
    }
    else if(climate.textContent == 'Snow'){
        document.querySelector("body").style.backgroundImage = `url('./images/snowday.jpg')`;
    }
    else if(climate.textContent == 'Thunderstorm'){
        document.querySelector("body").style.backgroundImage = `url('./images/thunder.jpg')`;
    }



}

function dateFun(d){
    let months=["January","February","March","April","May","June","July","August","September","October","November","December"];
    let days=["Sunday","Monday","Tuesday","Wednesday","Friday","Saturday"];
    let day=days[d.getDay()];
    let date=d.getDate();
    let month=months[d.getMonth()];
    let year=d.getFullYear();
    return `${date} ${month} ${year}, ${day}`;
}

function iconchange(data){
    let a=data[0].icon;
    a=a.substring(0,2)+"d";
    a='<img src="https://openweathermap.org/img/wn/'+a+'@2x.png">'
    return a;
}
