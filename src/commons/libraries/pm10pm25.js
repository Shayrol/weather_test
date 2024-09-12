// 미세먼지, 초미세먼지 농도 기준

const PM10Quality = [
  { name: "좋음", value: 30, img: "/images/PM_icon/Good.png" },
  { name: "보통", value: 80, img: "/images/PM_icon/Moderate.png" },
  { name: "나쁨", value: 150, img: "/images/PM_icon/Unhealthy.png" },
  { name: "매우 나쁨", value: 151, img: "/images/PM_icon/Very_Unhealthy.png" },
];

const PM25Quality = [
  { name: "좋음", value: 15, img: "/images/PM_icon/Good.png" },
  { name: "보통", value: 35, img: "/images/PM_icon/Moderate.png" },
  { name: "나쁨", value: 75, img: "/images/PM_icon/Unhealthy.png" },
  { name: "매우 나쁨", value: 76, img: "/images/PM_icon/Very_Unhealthy.png" },
];

// export const PM10 = (pm10) => {
//   const pm10Value = PM10Quality.find((el) => pm10 <= el.value);
//   return pm10Value ? pm10Value.name : "";
// };

// export const PM25 = (pm10) => {
//   const pm25Value = PM25Quality.find((el) => pm10 <= el.value);
//   return pm25Value ? pm25Value : "";
// };

export const PM10 = (pm10) => {
  const pm10Value = PM10Quality.find((el) => pm10 <= el.value);
  return pm10Value
    ? { name: pm10Value.name, img: pm10Value.img }
    : { name: "", img: "" };
};

export const PM25 = (pm25) => {
  const pm25Value = PM25Quality.find((el) => pm25 <= el.value);
  return pm25Value
    ? { name: pm25Value.name, img: pm25Value.img }
    : { name: "", img: "" };
};
