// 풍속에 따는 이미지 표시 - index.jsx (profile)

const WindArray = [
  // 바람이 안 불음
  {
    name: "바람없음",
    code: 0,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-0.svg",
  },
  // 미풍 풍향감지 가능한 정도
  {
    name: "미풍",
    code: 1,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-1.svg",
  },
  {
    name: "미풍",
    code: 2,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-2.svg",
  },
  {
    name: "미풍",
    code: 3,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-3.svg",
  },
  // 약풍 - 나뭇잎이 조금 흔들리는 정도
  {
    name: "약풍",
    code: 4,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-4.svg",
  },
  {
    name: "약풍",
    code: 5,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-5.svg",
  },
  {
    name: "약풍",
    code: 6,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-6.svg",
  },
  {
    name: "약풍",
    code: 7,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-7.svg",
  },
  {
    name: "약풍",
    code: 8,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-8.svg",
  },
  // 약강풍 - 깃발이 가볍게 흔들리는 정도
  {
    name: "약강풍",
    code: 9,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-9.svg",
  },
  {
    name: "약강풍",
    code: 10,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-10.svg",
  },
  {
    name: "약강풍",
    code: 11,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-11.svg",
  },
  {
    name: "약강풍",
    code: 12,
    img: "/images/Cloud_SVG/fill/wind/wind-beaufort-12.svg",
  },
  // 강풍 - 작은 나무 전체가 흔들리는 정도
  {
    name: "강풍",
    code: 1000,
    img: "/images/Cloud_SVG/fill/wind/wind-alert.svg",
  },
];

export const Wind = (item) => {
  const itemInt = Math.floor(item);
  const result = WindArray.find((el) => el.code === itemInt);
  console.log("WIND: ", result && result.img);
  return result ? result.img : "/images/Cloud_SVG/fill/wind/wind-alert.svg";
};
