//從伺服器取得天氣資料

//let weatherData;
//let cityList;

const getWeatherData = async function () {
  let res = await axios.get(
    "https://suffix-weather-app.zeabur.app/api/weather/all"
  );
  weatherData = res.data;
  cityList = weatherData.cityList; // array

  //載入載入時間
  loadTime();
  //載入現在時間
  currentTime();
  //載入main card & forecast card 結構 （移除loading畫面）
  loadMainCard();
  loadForecastCard();
  //載入下拉選單資料
  cityDropDown(cityList);
  //載入預設（台北）主畫面資料
  renderMainCard(getCurrentWeatherData("臺北市", 0, weatherData));
  //載入預設（台北）預報畫面資料
  renderForecastCard(getForecastWeatherData("臺北市", weatherData));
  //加入監聽功能
  locationButtonMonitoring();
};

//減少request － 刪除

// let weatherData = {
//   success: true,
//   cityList: [
//     "嘉義縣",
//     "新北市",
//     "嘉義市",
//     "新竹縣",
//     "新竹市",
//     "臺北市",
//     "臺南市",
//     "宜蘭縣",
//     "苗栗縣",
//     "雲林縣",
//     "花蓮縣",
//     "臺中市",
//     "臺東縣",
//     "桃園市",
//     "南投縣",
//     "高雄市",
//     "金門縣",
//     "屏東縣",
//     "基隆市",
//     "澎湖縣",
//     "彰化縣",
//     "連江縣",
//   ],
//   data: {
//     嘉義縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "16°C",
//           maxTemp: "18°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "16°C",
//           maxTemp: "27°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "22°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     新北市: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "多雲時晴",
//           rain: "10%",
//           minTemp: "19°C",
//           maxTemp: "20°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "10%",
//           minTemp: "19°C",
//           maxTemp: "25°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "多雲時陰陣雨",
//           rain: "70%",
//           minTemp: "19°C",
//           maxTemp: "22°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     嘉義市: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "15°C",
//           maxTemp: "17°C",
//           comfort: "寒冷至稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "15°C",
//           maxTemp: "28°C",
//           comfort: "寒冷至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "22°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     新竹縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "18°C",
//           maxTemp: "19°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "26°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "21°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     新竹市: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "19°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "25°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "18°C",
//           maxTemp: "21°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     臺北市: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "多雲時晴",
//           rain: "10%",
//           minTemp: "19°C",
//           maxTemp: "20°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "10%",
//           minTemp: "19°C",
//           maxTemp: "26°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "多雲時陰陣雨",
//           rain: "70%",
//           minTemp: "19°C",
//           maxTemp: "22°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     臺南市: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "18°C",
//           maxTemp: "20°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "18°C",
//           maxTemp: "25°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "19°C",
//           maxTemp: "22°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     宜蘭縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "陰短暫雨",
//           rain: "70%",
//           minTemp: "18°C",
//           maxTemp: "19°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "陰時多雲短暫雨",
//           rain: "60%",
//           minTemp: "18°C",
//           maxTemp: "24°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "20%",
//           minTemp: "18°C",
//           maxTemp: "21°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     苗栗縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "13°C",
//           maxTemp: "15°C",
//           comfort: "寒冷",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "13°C",
//           maxTemp: "25°C",
//           comfort: "寒冷至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "10%",
//           minTemp: "15°C",
//           maxTemp: "19°C",
//           comfort: "寒冷至稍有寒意",
//           windSpeed: "",
//         },
//       ],
//     },
//     雲林縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "16°C",
//           maxTemp: "18°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "16°C",
//           maxTemp: "27°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "21°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     花蓮縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "陰短暫雨",
//           rain: "30%",
//           minTemp: "19°C",
//           maxTemp: "20°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "陰時多雲短暫雨",
//           rain: "30%",
//           minTemp: "19°C",
//           maxTemp: "25°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "多雲時晴",
//           rain: "20%",
//           minTemp: "19°C",
//           maxTemp: "22°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     臺中市: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "18°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "27°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "18°C",
//           maxTemp: "22°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     臺東縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "多雲時陰",
//           rain: "20%",
//           minTemp: "19°C",
//           maxTemp: "20°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "多雲",
//           rain: "20%",
//           minTemp: "19°C",
//           maxTemp: "25°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "多雲時晴",
//           rain: "20%",
//           minTemp: "19°C",
//           maxTemp: "22°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     桃園市: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "19°C",
//           maxTemp: "19°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "19°C",
//           maxTemp: "25°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "20%",
//           minTemp: "18°C",
//           maxTemp: "21°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     南投縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "16°C",
//           maxTemp: "18°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "16°C",
//           maxTemp: "27°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "22°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     高雄市: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "20°C",
//           maxTemp: "21°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "19°C",
//           maxTemp: "26°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "19°C",
//           maxTemp: "24°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     金門縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "16°C",
//           maxTemp: "17°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "16°C",
//           maxTemp: "23°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "19°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//       ],
//     },
//     屏東縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "18°C",
//           maxTemp: "20°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "10%",
//           minTemp: "18°C",
//           maxTemp: "28°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "18°C",
//           maxTemp: "24°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     基隆市: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "多雲",
//           rain: "20%",
//           minTemp: "20°C",
//           maxTemp: "20°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "多雲時晴",
//           rain: "20%",
//           minTemp: "20°C",
//           maxTemp: "24°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "多雲時陰陣雨",
//           rain: "70%",
//           minTemp: "19°C",
//           maxTemp: "22°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     澎湖縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "20°C",
//           maxTemp: "21°C",
//           comfort: "舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "20°C",
//           maxTemp: "23°C",
//           comfort: "舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "20°C",
//           maxTemp: "21°C",
//           comfort: "舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     彰化縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "18°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "17°C",
//           maxTemp: "25°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "0%",
//           minTemp: "18°C",
//           maxTemp: "21°C",
//           comfort: "稍有寒意至舒適",
//           windSpeed: "",
//         },
//       ],
//     },
//     連江縣: {
//       updateTime: "三十六小時天氣預報",
//       forecasts: [
//         {
//           startTime: "2025-12-07 00:00:00",
//           endTime: "2025-12-07 06:00:00",
//           weather: "晴時多雲",
//           rain: "10%",
//           minTemp: "16°C",
//           maxTemp: "17°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 06:00:00",
//           endTime: "2025-12-07 18:00:00",
//           weather: "晴時多雲",
//           rain: "10%",
//           minTemp: "16°C",
//           maxTemp: "20°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//         {
//           startTime: "2025-12-07 18:00:00",
//           endTime: "2025-12-08 06:00:00",
//           weather: "晴時多雲",
//           rain: "20%",
//           minTemp: "17°C",
//           maxTemp: "18°C",
//           comfort: "稍有寒意",
//           windSpeed: "",
//         },
//       ],
//     },
//   },
// };

//刪除
//let cityList = weatherData.cityList;

//其他城市下拉選單

const cityDropDown = function (cityList) {
  const otherCities = document.querySelector("#other-cities");
  let data = cityList
    .filter(
      (item) => item !== "臺北市" && item !== "臺中市" && item !== "高雄市" //下拉選單排除按鈕的三個縣市
    )
    .reduce(
      (acc, current) => {
        let item = `<option value="${current}">${current}</option>`;
        acc.push(item);
        return acc;
      },
      ['<option value="" disabled selected>請選擇</option>']
    );
  otherCities.innerHTML = data.join("");
  return false;
};

//加入 weather-main-card HTML structure
const loadMainCard = () => {
  document.querySelector(
    ".weather-main-card"
  ).innerHTML = `<div class="main-info">
          <h1 class="weather-status-text"></h1>

          <div class="comfort-level"></div>

          <div class="temp-and-pop-container">
            <div class="weather-temp-big">
              <span class="temp-unit"></span>
            </div>

            <div class="weather-pop-big">
              <span class="pop-label"></span>
              <span class="pop-unit"></span>
            </div>
          </div>
        </div>

        <div class="weather-icon-large">
          <span class="weather-icon-emoji"></span>
        </div>`;
};

//加入 forecast-container HTML structure

const loadForecastCard = () => {
  document.querySelector(
    ".forecast-container"
  ).innerHTML = `<div class="forecast-grid">
          <article class="forecast-item">
            <span class="forecast-time"></span>
            <div class="forecast-icon-placeholder"></div>
            <span class="forecast-temp"></span>
            <span class="forecast-pop"></span>
          </article>

          <article class="forecast-item">
            <span class="forecast-time"></span>
            <div class="forecast-icon-placeholder"></div>
            <span class="forecast-temp"></span>
            <span class="forecast-pop"></span>
          </article>
        </div>`;
};

//取得“現在”天氣卡資訊
const getCurrentWeatherData = function (cityName, timeIndex, weatherData) {
  return {
    name: cityName,
    weatherText: weatherData.data[cityName].forecasts[timeIndex].weather,
    temperature: `${weatherData.data[cityName].forecasts[
      timeIndex
    ].minTemp.slice(0, -2)}~${weatherData.data[cityName].forecasts[
      timeIndex
    ].maxTemp.slice(0, -2)}`,
    rain: weatherData.data[cityName].forecasts[timeIndex].rain.slice(0, -1),
    weatherEmoji: getWeatherIcon(
      weatherData.data[cityName].forecasts[timeIndex].weather
    ),
    confort: weatherData.data[cityName].forecasts[timeIndex].comfort,
  };
};

//取得“預報”天氣卡資訊

const getForecastWeatherData = (cityName, weatherData) => {
  let data = weatherData.data[cityName].forecasts.slice(1); //刪除current weatherData
  return data.reduce((acc, current) => {
    let item = {
      duration: duration(current.startTime, current.endTime),
      weatherEmoji: getWeatherIcon(current.weather),
      temperature: `${current.minTemp.slice(0, -2)}~${current.maxTemp.slice(
        0,
        -2
      )}`,
      rain: current.rain.slice(0, -1),
    };
    acc.push(item);
    return acc;
  }, []);
};

//渲染"現在"天氣卡資料
const renderMainCard = (dataArr) => {
  //天氣文字
  document.querySelector(".main-info h1").textContent = dataArr.weatherText;
  //最高最低溫
  document.querySelector(
    ".weather-temp-big"
  ).innerHTML = `${dataArr.temperature}<span class="temp-unit">°C`;
  //天氣圖示
  document.querySelector(".weather-icon-emoji").innerHTML =
    dataArr.weatherEmoji;
  //降雨機率
  document.querySelector(
    ".weather-pop-big"
  ).innerHTML = `<span class="pop-label">🌧️ 降雨機率:</span>
              ${dataArr.rain}<span class="pop-unit">%</span>`;
  document.querySelector(
    ".comfort-level"
  ).innerHTML = `** ${dataArr.confort} **`;
};

//渲染“預報”天氣卡資料 (dataArr => array)

const renderForecastCard = (dataArr) => {
  const forecastGrid = document.querySelector(".forecast-grid");
  let data = dataArr
    .reduce((acc, current) => {
      acc.push(`
      <article class="forecast-item">
            <span class="forecast-time">${current.duration}</span>
            <div class="forecast-icon-placeholder">${current.weatherEmoji}</div>
            <span class="forecast-temp">${current.temperature}°C</span>
            <span class="forecast-pop">🌧️ ${current.rain}%</span>
          </article>
      `);
      return acc;
    }, [])
    .join("");
  forecastGrid.innerHTML = data;
};

//監聽預設按鈕
const locationButtonMonitoring = () => {
  document.querySelector(".city-selector"),
    addEventListener("click", (e) => {
      //移除button active狀態
      document
        .querySelectorAll(".city-btn")
        .forEach((item) => item.classList.remove("active"));
      //移除下拉選單active
      document.querySelector("#other-cities").classList.remove("active");
      //將點選的button加上active狀態
      e.target.classList.add("active");
      //取得現在天氣卡資料
      if (e.target.value) {
        let currentWeather = getCurrentWeatherData(
          e.target.value,
          0,
          weatherData
        );
        //渲染現在天氣卡
        renderMainCard(currentWeather);
        //取得預測天氣資料
        let forecastWeather = getForecastWeatherData(
          e.target.value,
          weatherData
        );
        //渲染預測天氣卡
        renderForecastCard(forecastWeather);
      }
    });
};

//計算"預報"卡的時間區間（例如今天到明天清晨...)
const duration = (startTime, endTime) => {
  let startDate = startTime.slice(0, 10);
  let endDate = endTime.slice(0, 10);
  let timeStart = startTime.slice(11, 19);
  if (startDate === endDate && timeStart === "00:00:00") {
    return "今日午夜到清晨";
  } else if (startDate === endDate && timeStart === "06:00:00") {
    return "今日凌晨到傍晚";
  } else if (startDate !== endDate && timeStart === "18:00:00") {
    return "傍晚到明日清晨";
  }
};

//取得天氣圖示
function getWeatherIcon(weather) {
  if (!weather) return "🌤️";
  if (weather.includes("晴")) return "☀️";
  if (weather.includes("多雲")) return "⛅";
  if (weather.includes("陰")) return "☁️";
  if (weather.includes("雨")) return "🌧️";
  if (weather.includes("雷")) return "⛈️";
  return "🌤️";
}

//載入時間並渲染

const loadTime = () => {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let hour = String(h).padStart(2, "0");
  let minute = String(m).padStart(2, "0");
  document.querySelector("#dataTime").textContent = `${hour}:${minute}`;
  return false;
};

//現在時間

const currentTime = () => {
  let time = new Date();
  let hour = String(time.getHours()).padStart(2, "0");
  let minute = String(time.getMinutes()).padStart(2, "0");
  document.querySelector("#currentTime").textContent = `${hour}:${minute}`;
  let second = time.getSeconds();
  let delay = (60 - second) * 1000;
  setTimeout(currentTime, delay);
};

const init = () => {
  getWeatherData();
};

init();
