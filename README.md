## 날씨 웹 페이지 입니다.

> 이미지
- **header + body**
![날씨 웹(수정) 01](https://github.com/user-attachments/assets/53b2fc16-c1cd-4e43-aafc-fd573f81af3b)
- **footer**
![footer](https://github.com/user-attachments/assets/2a8b5ebf-b8ec-47f3-b2c6-8d4ba119934a)
- **mobile** <br>
![날씨 웹(수정) 02](https://github.com/user-attachments/assets/099a9c40-3308-401a-9fbd-1ebe39b3286f)
- **영상** <br>
![2024-10-1816-35-23-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/d0dfbce1-093b-4046-8ad3-600244646c8f)

---

> 활용한 Open API
- **초단기예보:** 현재 날씨 정보
- **단기예보:** 1시간 간격 날씨예보
- **중기예보:** 주간 날씨예보
- **출몰시각정보:** 일출, 일몰 정보
- **오픈스트리트 맵:** 위도, 경도 값을 통한 상세 주소
- **에어코리아 대기오염정보:** 미세먼지, 초미세먼지 정보


> 성능 개선
- 기존 하나의 함수 안에 모든 API 요청을 넣어 useEffect로 호출을 했음.
 
  문제점: 전체 API 요청을 다 받을 때까지 화면에 출력해 줄게 없어 속도가 많이 느리게 느껴짐 또한 하나 실패하면 전체가 실패함.

- Promise.all를 통해 동시에 요청을 했으나 성공한 대로 값을 반환하는게 아닌 다 끝날때 까지 기다렸다 한 번에 값을 반환해서 취소.

- 그래서 API를 각각 분리하고 필수로 먼저 요청을 받아야 하는 위치, 주소 API 먼저 요청을 하고 받아온 값을 가지고 나머지 날씨, 일출/일몰 API 요청을 인자 값으로 넣어 해결함.

  사용자 경험에서는 API 요청이 끝나는 대로 바로 출력을 해주기에 빠르게 느껴지며 하나의 API 요청이 실패를 해도 다른 나머지 API 요청이 이루어짐.
