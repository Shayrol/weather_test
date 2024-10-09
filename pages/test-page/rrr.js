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
