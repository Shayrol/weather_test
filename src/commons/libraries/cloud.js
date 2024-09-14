// 하늘 상태에 따른 아이콘 표시 - HourlyWeather.jsx

// 구름 코드
const CloudArray = [
  {
    name: "Loading..",
    code: "0",
    img: "/images/Cloud_SVG/fill/Day/clear-day.svg",
  },
  {
    name: "맑음",
    code: "1",
    img_day: "/images/Cloud_SVG/fill/Day/clear-day.svg",
    img_night: "/images/Cloud_SVG/fill/Night/clear-night.svg",
  },
  {
    name: "구름많음",
    code: "3",
    img_day: "/images/Cloud_SVG/fill/Day/overcast-day.svg",
    img_night: "/images/Cloud_SVG/fill/Night/overcast-night.svg",
  },
  {
    name: "흐림",
    code: "4",
    img_day: "/images/Cloud_SVG/fill/extreme.svg",
    img_night: "/images/Cloud_SVG/fill/extreme.svg",
  },
  // 비, 눈, 소나기
  {
    name: "비",
    pty_code: "1",
    img: "/images/Cloud_SVG/fill/overcast-rain.svg",
  },
  {
    name: "비/눈",
    pty_code: "2",
    img: "/images/Cloud_SVG/fill/overcast-sleet.svg",
  },
  {
    name: "눈",
    pty_code: "3",
    img: "/images/Cloud_SVG/fill/overcast-snow.svg",
  },
  {
    name: "소나기",
    pty_code: "4",
    img: "/images/Cloud_SVG/fill/overcast-drizzle.svg",
  },
];

const dddd = [
  // 중기예보 구름 데이터 이미지
  {
    name: "맑음",
    code: "1",
    img: "/images/Cloud_SVG/fill/Day/clear-day.svg",
  },
  {
    name: "구름많음",
    code: "3",
    img: "/images/Cloud_SVG/fill/Day/overcast-day.svg",
  },
  {
    name: "흐림",
    code: "4",
    img: "/images/Cloud_SVG/fill/extreme.svg",
  },
  // 구름 많은 경우
  {
    name: "구름많고 비",
    img: "/images/Cloud_SVG/fill/overcast-rain.svg",
  },
  {
    name: "구름많고 비/눈",
    img: "/images/Cloud_SVG/fill/overcast-sleet.svg",
  },
  {
    name: "구름많고 눈",
    img: "/images/Cloud_SVG/fill/overcast-snow.svg",
  },
  {
    name: "구름많고 소나기",
    img: "/images/Cloud_SVG/fill/overcast-drizzle.svg",
  },
  // 구름 많은 경우
  {
    name: "흐리고 비",
    img: "/images/Cloud_SVG/fill/overcast-rain.svg",
  },
  {
    name: "흐리고 비/눈",
    img: "/images/Cloud_SVG/fill/overcast-sleet.svg",
  },
  {
    name: "흐리고 눈",
    img: "/images/Cloud_SVG/fill/overcast-snow.svg",
  },
  {
    name: "흐리고 소나기",
    img: "/images/Cloud_SVG/fill/overcast-drizzle.svg",
  },
];

// 구름 확인 -
export const Cloud = (PTYCode, CloudCode, Time, sunrise, sunset) => {
  const sunsetInt = parseInt(sunset?.padStart(2, "0") + "00");
  const sunriseInt = parseInt(sunrise?.padStart(2, "0") + "00");
  const sunLight = Time < sunsetInt && Time > sunriseInt;
  if (PTYCode === "0") {
    const result = CloudArray.find((el) => el.code === CloudCode);

    return sunLight ? result.img_day : result.img_night;
  } else {
    const result = CloudArray.find((el) => el.pty_code === PTYCode);
    return result ? result.img : "/images/Cloud_SVG/fill/Day/clear-day.svg";
  }
};

export const Cloud2 = (CloudName) => {
  if (CloudName) {
    const result = dddd.find((el) => el.name === "흐림");
    return result ? result.img : "/images/Cloud_SVG/fill/Day/clear-day.svg";
  }
};

export const Cloud3 = (CloudCode) => {
  if (CloudCode) {
    const result = dddd.find((el) => el.code === CloudCode);
    return result ? result.img : "/images/Cloud_SVG/fill/Day/clear-day.svg";
  }
};
