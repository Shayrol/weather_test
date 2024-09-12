import { atom, selector } from "recoil";

// export const isOpenState = atom({
//   key: "isOpenState",
//   default: false,
// });

// export const isEditState = atom({
//   key: "isEdit",
//   default: true,
// });

// export const AddressState = atom({
//   key: "isAddressState",
//   default: "",
// });

// export const ZonCodeState = atom({
//   key: "isZonCodeState",
//   default: "",
// });

// // pagination
// export const isStartPageState = atom({
//   key: "isStartPageState",
//   default: 1,
// });

// // // pagination
// // layout의 게시글 클릭시 1page의 게시물이 보여지도록 됨
// export const isActivePageState = atom({
//   key: "isActivePageState",
//   default: 1,
// });

// // search
// // export const isSearch = atom({
// //   key: "isSearch",
// //   default: "",
// // });

// // accessToken(JWT)
// export const isAccessToken = atom<string>({
//   key: "isAccessToken",
//   default: "",
// });

// // restoreAccessTokenLoadable
// // atom이 아닌 API 응답/요청 받기위해 selector를 사용한다.
// // accessToken 중복요청 막기위함
// export const restoreAccessTokenLoadable = selector({
//   key: "restoreAccessTokenLoadable",
//   get: async () => {
//     // const newAccessToken = await getAccessToken();
//     // return newAccessToken;
//   },
// });

// // BoardOfTheBest 최신화
// export const isBoardOfTheBest = atom({
//   key: "BoardOfTheBest",
//   default: true,
// });

// // MarketsWriter Tag 저장 - string[]
// export const isTagsState = atom<string[]>({
//   key: "isTagsState",
//   default: [],
// });

// // kakaoMap lat, lon 좌표
// export const isLatState = atom<number>({
//   key: "isLatState",
//   default: 0,
// });
// export const isLonState = atom<number>({
//   key: "isLonState",
//   default: 0,
// });

// // 최근 본 상품 저장
// export const isTodayItems = atom<string[]>({
//   key: "isTodayItems",
//   default: [],
// });

export const isWeatherData = atom({
  key: "isWeatherData",
  default: {
    location: "",
    weather: "",
    sunTime: "",
    daysWeather: "",
  },
});

export const isLoading = atom({
  key: "isLoading",
  default: true,
});

// 일출, 일몰
export const isSunTime = atom({
  key: "isSunTime",
  default: "",
});

// 일주일 날씨 데이터
export const isMonthWeather = atom({
  key: "isMonthWeather",
  default: {},
});
