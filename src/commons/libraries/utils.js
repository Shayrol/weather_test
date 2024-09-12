export const getDate = (date) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = ("0" + (_date.getMonth() + 1)).slice(-2);
  const dd = ("0" + _date.getDate()).slice(-2);

  // 20240909 - 2024년09월09일
  return `${yyyy}${mm}${dd}`;
};

// 자정 시 날짜가 변경이 되어 해당 날의 00시의 데이터가 없음 - (02시 부터 data가져옴 그래서 이전의 날에서 data 불러오기)
export const getDateAPI = (date) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = ("0" + (_date.getMonth() + 1)).slice(-2);
  const dd = ("0" + (_date.getDate() - 1)).slice(-2);

  // 20240909 - 2024년09월08일
  return `${yyyy}${mm}${dd}`;
};

// export const getFullDate = () => {
//   const _date = new Date();
//   const yyyy = _date.getFullYear();
//   const mm = ("0" + String(_date.getMonth() + 1)).slice(-2);
//   const dd = ("0" + String(_date.getDate() - 1)).slice(-2);
//   const HH = ("0" + String(_date.getHours())).slice(-2);

//   // 00시 ~ 06시까지는 해당 요일의 data를 못 불러오고
//   // 06시, 18시에 하루 2번 데이터를 업데이트를 하고 24시간 유지된다.
//   // 우리가 취해야 할 데이터 시간은
//   // 00시~06시는 어제의 날짜의 18시 data를 사용을 해야 하는 것
//   // 06시~18시는 오늘의 오전 data 사용
//   // 18시~ 다음날 06시는 오늘의 data 사용

//   // const MM = ("0" + String(_date.getMinutes())).slice(-2);
//   // 202409092100 - 2024년09월09일06시00분 - 06,18시 데이터만 불러오고 24시간 동안 데이터를 유지함
//   return `${yyyy}${mm}${dd}0600`;
// };

// 06시 기준으로 24시, 06시 부터 09일 이라면 => 다음날 10일 05시 59분 까지 09일 / 이후 10일 적용
export const getFullDate = () => {
  const now = new Date();

  // 현재 시간을 기준으로 06시보다 이전인지, 이후인지 체크
  const hours = now.getHours();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
  const date = String(now.getDate()).padStart(2, "0");

  let resultDate = `${year}${month}${date}`;
  let time = "0600"; // 고정 시간은 06시로 설정

  // 현재 시간이 06시 이전이라면 전날의 06시를 기준으로 날짜를 설정
  if (hours < 6) {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1); // 하루 전으로 설정
    const prevYear = yesterday.getFullYear();
    const prevMonth = String(yesterday.getMonth() + 1).padStart(2, "0");
    const prevDate = String(yesterday.getDate()).padStart(2, "0");

    resultDate = `${prevYear}${prevMonth}${prevDate}`;
  }

  return `${resultDate}${time}`;
};

export const getTime = (date) => {
  const _date = new Date(date);
  const HH = ("0" + String(_date.getHours())).slice(-2);
  const MM = ("0" + String(_date.getMinutes())).slice(-2);
  const minutes = MM <= 30 ? "00" : "30";
  // 초단기예보는 현재시간이 21~23시 사이에 있으면 data를 불러오지 못한다.
  const hours = "21" === HH ? "20" : HH === "22" && HH === "23" ? "00" : "01";

  return `${HH}${minutes}`;
};

// 단기예보조회
export const getTime2 = (date) => {
  const _date = new Date(date);
  const H = ("0" + String(_date.getHours())).slice(-2);

  const HH = ("0" + String(_date.getHours())).slice(-2);
  const MM = ("0" + String(_date.getMinutes())).slice(-2);
  const minutes = MM <= 30 ? "00" : "30";
  // 예보는 현재시간이 21~23시 사이에 있으면 data를 불러오지 못한다.
  const hours = "21" === HH ? "20" : HH === "22" && HH === "23" ? "00" : "01";

  // 단기예보를 1시간 이전의 값을 입력을 해야 현재시간의 데이터를 불러옴
  // 단기예보가 일주일의 날씨예보 데이터를 불러와야 하는데 그렇지 못하고 있음...

  return `${H}30`;
};

export const fullDate = (date) => {
  const _date = new Date(date);
  const FullYEAR = String(_date.getFullYear());
  const MONTH = ("0" + String(_date.getMonth() + 1)).slice(-2);
  const DATE = ("0" + String(_date.getDate())).slice(-2);

  return `${FullYEAR}${MONTH}${DATE}`;
};

// 18, 19, 20시인 경우 17시로 반환함
// 이는 20시로 data 요청을 하면 21시 부터의 data를 불러옴..
export function getClosestHour(inputHour) {
  // inputHour를 문자열로 변환
  const inputHourStr = String(inputHour).padStart(2, "0"); // 네 자릿수로 변환 (예: 19 -> 1900)

  // 시간 부분만 추출
  const hour = parseInt(inputHourStr.slice(0, 2), 10);

  // 기준 시간인 02시부터 3시간 간격으로 배열 생성
  const referenceHours = [2, 5, 8, 11, 14, 17, 20, 23];

  // 현재 시간보다 작거나 같은 가장 큰 기준 시간을 찾음
  let closestHour = referenceHours.reduce((prev, curr) => {
    if (curr === hour) {
      return prev; // prev는 현재까지 발견된 가장 큰 값
    }
    // 현재 값이 hour보다 작거나 같은 경우, prev를 업데이트합니다.
    return curr <= hour ? curr : prev;
  });

  // 시간을 2자리 숫자로 변환 후 반환 (예: 02, 05, 08 등)
  return ("0" + String(closestHour)).slice(-2) + "00";
}

// 24시가 아닌 12시기준표
export const Hours = (time) => {
  const Hour = time / 100;
  const time12Hour =
    Hour <= 12 ? (Hour === 0 ? 12 : Hour) : Hour === 12 ? 12 : Hour - 12;

  return time12Hour;
};

// 20240909을 2024년09월09일로 변경
export const formatDate = (day) => {
  const dayString = day.toString(); // 숫자를 문자열로 변환
  const year = dayString.slice(0, 4); // 연도 추출
  const month = dayString.slice(4, 6); // 월 추출
  const date = dayString.slice(6, 8); // 일 추출

  return `${year}년 ${month}월 ${date}일`;
};

export const fullDay = () => {
  const date = new Date();
};
