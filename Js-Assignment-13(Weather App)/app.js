console.log("Weather App");

const apiKey = "a84fe2767a08484682c192022250410";
const displayData = document.querySelector("#displayData");
const form = document.querySelector("#form");
let dataArray = [];
form.addEventListener("submit", (event) => {
         event.preventDefault();
let city = document.querySelector("#searchInput");
let cityValue = city.value.trim().toLowerCase();
  if(dataArray.find(item => item.city.toLowerCase() === cityValue)){
            alert("Already checked")
            return
        }

    const weatherApiFetch = async () => {
    try {
        displayData.innerHTML = "Checking...."
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=b4db485d7c4c485fa6d84351232508&q=${cityValue}&aqi=no`);
        const data = await response.json();
        const dataSelected = {
            country: data.location.country,
            city: data.location.name,
            condition: data.current.condition.text,
            humidity: data.current.humidity,
            temperature: data.current.temp_c,
            day: data.current.is_day,
            time: data.location.localtime,
            img: data.current.condition.icon,
            UV :  data.current.uv,
            visbility : data.current.vis_km,
            wind : data.current.wind_kph
        }
        dataArray.unshift(dataSelected)
        displayData.innerHTML = ""
        dataArray.forEach(item =>{
             const newCard = `
         <div>
         <section class="bg-white/15 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-lg">
          <div class="flex items-center mb-4">
  <i class="fas fa-map-marker-alt text-red-500 mr-2"></i>
  <h2 class="text-xl font-medium">${item.city}, ${item.country}</h2>
</div>      
            <div class="flex flex-col md:flex-row justify-between items-center mb-6">
                <div class="text-center  md:text-left mb-4 md:mb-0">
                    <div class="text-6xl font-light mb-2">${item.temperature}°C</div> 
                    <div class="text-xl font-medium">${item.condition}</div>
                </div>
                <div class="w-56 h-56"> <!-- 384px x 384px -->
    <img src="${item.img}" alt="Weather illustration" class="w-full h-full object-contain" />
</div>
            </div>
            
            <!-- Weather Details Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="flex items-center bg-white/10 rounded-xl p-4">
                    <div class="text-2xl w-10 text-center mr-3">
                        <i class="fas fa-wind"></i>
                    </div>
                    <div>
                        <div class="text-sm opacity-80">Wind</div>
                        <div class="text-lg font-medium">${item.wind} kp/h</div>
                    </div>
                </div>
                
                <div class="flex items-center bg-white/10 rounded-xl p-4">
                    <div class="text-2xl w-10 text-center mr-3">
                        <i class="fas fa-tint"></i>
                    </div>
                    <div>
                        <div class="text-sm opacity-80">Humidity</div>
                        <div class="text-lg font-medium">${item.humidity}%</div>
                    </div>
                </div>
                
                <div class="flex items-center bg-white/10 rounded-xl p-4">
                    <div class="text-2xl w-10 text-center mr-3">
                        <i class="fas fa-sun"></i>
                    </div>
                    <div>
                        <div class="text-sm opacity-80">UV Index</div>
                        <div class="text-lg font-medium">${item.UV}</div>
                    </div>
                </div>
                
                <div class="flex items-center bg-white/10 rounded-xl p-4">
                    <div class="text-2xl w-10 text-center mr-3">
                        <i class="fas fa-eye"></i>
                    </div>
                    <div>
                        <div class="text-sm opacity-80">Visibility</div>
                        <div class="text-lg font-medium">${item.visbility} km</div>
                    </div>
                </div>
            </div>
        </section>
         
         </div>
        `
        displayData.insertAdjacentHTML("beforeend" , newCard)
        })
    } catch (error) {
        alert("This is not a city")
    }
}
weatherApiFetch()        
city.value = ""

})

// const weatherApiFetch = async () => {
//     try {
//         const response = await apiUrl;
//         const data = await response.json();
//         // console.log(data.location);
//         // console.log(data.current);
//         const date = new Date();
//         const day = date.getDay(data.current.is_day);
//         console.log(day);

//         const dataSelected = {
//             country: data.location.country,
//             city: data.location.name,
//             condition: data.current.condition.text,
//             humidity: data.current.humidity,
//             temperature: data.current.temp_c,
//             day: data.current.is_day,
//             time: data.location.localtime,
//             img: data.current.condition.icon
//         }
//         console.log(dataSelected);
//         displayData.innerHTML += `
//          <div>
//          <section class="bg-white/15 backdrop-blur-md rounded-2xl p-6 mb-6 shadow-lg">
//             <div class="flex items-center mb-4">
//                 <i class="fas fa-map-marker-alt mr-2"></i>
//                 <h2 class="text-xl font-medium">${dataSelected.city}</h2>
//             </div>
            
//             <div class="flex flex-col md:flex-row justify-between items-center mb-6">
//                 <div class="text-center md:text-left mb-4 md:mb-0">
//                     <div class="text-6xl font-light mb-2">${dataSelected.temperature}°C</div>
//                     <div class="text-xl font-medium">${dataSelected.condition}</div>
//                 </div>
//                 <div class="w-56 h-56"> <!-- 384px x 384px -->
//     <img src="${dataSelected.img}" alt="Weather illustration" class="w-full h-full object-contain" />
// </div>
//             </div>
            
//             <!-- Weather Details Grid -->
//             <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div class="flex items-center bg-white/10 rounded-xl p-4">
//                     <div class="text-2xl w-10 text-center mr-3">
//                         <i class="fas fa-wind"></i>
//                     </div>
//                     <div>
//                         <div class="text-sm opacity-80">Wind</div>
//                         <div class="text-lg font-medium">12 km/h</div>
//                     </div>
//                 </div>
                
//                 <div class="flex items-center bg-white/10 rounded-xl p-4">
//                     <div class="text-2xl w-10 text-center mr-3">
//                         <i class="fas fa-tint"></i>
//                     </div>
//                     <div>
//                         <div class="text-sm opacity-80">Humidity</div>
//                         <div class="text-lg font-medium">${dataSelected.humidity}%</div>
//                     </div>
//                 </div>
                
//                 <div class="flex items-center bg-white/10 rounded-xl p-4">
//                     <div class="text-2xl w-10 text-center mr-3">
//                         <i class="fas fa-sun"></i>
//                     </div>
//                     <div>
//                         <div class="text-sm opacity-80">UV Index</div>
//                         <div class="text-lg font-medium">4 Moderate</div>
//                     </div>
//                 </div>
                
//                 <div class="flex items-center bg-white/10 rounded-xl p-4">
//                     <div class="text-2xl w-10 text-center mr-3">
//                         <i class="fas fa-eye"></i>
//                     </div>
//                     <div>
//                         <div class="text-sm opacity-80">Visibility</div>
//                         <div class="text-lg font-medium">16 km</div>
//                     </div>
//                 </div>
//             </div>
//         </section>
         
//          </div>
//         `


//     } catch (error) {
//         console.log(error);

//     }
// }
// weatherApiFetch()