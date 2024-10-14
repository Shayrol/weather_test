// 현재 날씨 데이터 - 초단기예보
const nowWeatherResponse = await axios.get(
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=${apiKey}&numOfRows=70&pageNo=1&base_date=${getDate(date)}&base_time=${getOneHourAgo()}&nx=${gridCoords.x}&ny=${gridCoords.y}&dataType=JSON`
);
const nowWeatherItems = nowWeatherResponse.data.response.body.items.item;
nowWeatherItems.forEach((item) => {
  const nowTime = parseInt(item.fcstTime);
  const nowCategory = item.category;
  const nowValue = item.fcstValue;

  if (nowTime === HourInt) {
    nowWeather[nowCategory] = nowValue;
  }
});

// 시간, 3~5일 날씨 데이터 - 단기예보
const weatherResponse = await axios.get(
  `https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${apiKey}&base_date=${getDateAPI(
    date
  )}&base_time=${getClosestHour(hour)}&nx=${gridCoords.x}&ny=${
    gridCoords.y
  }&dataType=JSON&numOfRows=700`
);

// 주간 날씨 데이터 - 중기예보
const daysWeatherResponse = await axios.get(
  `https://apis.data.go.kr/1360000/MidFcstInfoService/getMidLandFcst?serviceKey=${apiKey}&numOfRows=10&pageNo=1&regId=${CityCode.code}&tmFc=${getFullDate()}&dataType=JSON`
);

// 일출, 일몰 데이터
const result = await axios.get(
  `https://apis.data.go.kr/B090041/openapi/service/RiseSetInfoService/getLCRiseSetInfo?longitude=${dnYnLon(longitude)}&latitude=${dnYnLat(latitude)}&locdate=${getDate(date)}&dnYn=N&ServiceKey=${apiKey}`
);

const items = weatherResponse.data.response.body.items.item;
items.forEach((item) => {
  const timeKey = item.fcstTime; // 예: "1800", "1900"
  const dayKey = item.fcstDate; // 예: "20240903", "20240904"
  const category = item.category;
  const value = item.fcstValue;

  // dayKey가 존재하지 않으면 초기화
  if (!weatherData[dayKey]) {
    weatherData[dayKey] = {};
  }
  // timeKey가 존재하지 않으면 초기화
  if (!weatherData[dayKey][timeKey]) {
    weatherData[dayKey][timeKey] = {};
  }
  // 데이터 저장
  weatherData[dayKey][timeKey][category] = value;
});
// console.log("weatherData: ", weatherData);

// 시간별 날씨, 요일별 날씨, 일출일몰, 미세먼지
if ((result && locationResponse && weatherData, daysWeatherResponse)) {
  setWeatherInfo({
    sunTime: result.data.response.body.items.item,
    location: locationResponse.data.address,
    weather: weatherData,
    daysWeather: daysWeatherResponse.data.response.body.items.item[0],
  });

  // 현재 시간 날씨
  if (nowWeather) {
    setNowWeather(nowWeather);
  }

  setLoading(false);
}
