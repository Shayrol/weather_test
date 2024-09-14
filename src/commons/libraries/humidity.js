// 강수확률에 따라 물방울 이미지 표시

const HumidityArray = [
  {
    name: "낮은습도",
    code: 20,
    img: "/images/Cloud_SVG/humidity/humidity_low.svg",
  },
  {
    name: "보통습도",
    code: 60,
    img: "/images/Cloud_SVG/humidity/humidity_mid.svg",
  },
  {
    name: "높은습도",
    code: 100,
    img: "/images/Cloud_SVG/humidity/humidity_high.svg",
  },
];

export const Humidity = (item) => {
  const result = HumidityArray.find((el) => item <= el.code);
  return result ? result.img : "/images/Cloud_SVG/humidity/humidity_low.svg";
};
