export const getDate = (date) => {
  const _date = new Date(date);
  const yyyy = _date.getFullYear();
  const mm = ("0" + (_date.getMonth() + 1)).slice(-2);
  const dd = ("0" + _date.getDate()).slice(-2);

  // 20240909 - 2024년09월09일 (현재날씨)
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

// 1시간 전 - 현재시간 00시 => 23시 -- 2300
export const getOneHourAgo = () => {
  const now = new Date(); // 현재 시간 가져오기
  now.setHours(now.getHours() - 1); // 1시간 빼기
  const hour = String(now.getHours()).padStart(2, "0") + "00"; // 2자리 문자열로 포맷
  return hour;
};
