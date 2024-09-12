// 소숫점 위도, 경도 (37.4040404 / 127.4040404)을 도, 분 으로 변환
// 예 37도21분 / 127도43분

// 위도 - 37
export const dnYnLat = (lat) => {
  const latInt = parseInt(lat);
  const degrees = String(parseInt(lat));
  const minutes = String(Math.trunc((lat - degrees) * 60));
  return `${degrees}${minutes}`;
};

// 경도 - 127
export const dnYnLon = (lon) => {
  const degrees = String(parseInt(lon));
  const minutes = String(Math.trunc((lon - degrees) * 60));

  return `${degrees}${minutes}`;
};

// 도 / 분 계산식
// 도
// 예시 위도: 37.3650040
//  = 37
//  --- parseInt(37.3650040) === 37 ---

// 분
// 예시 위도: 37.3650040
// = 0.3670040 * 60 = 21.90023999999994
// = 21
// --- Math.trunc((37.3650040 - 37) * 60) === 21 ---

// 37도21분
