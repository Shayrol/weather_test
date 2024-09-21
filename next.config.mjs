/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // build를 하면 profile 폴더의 index.jsx가 profile.html로 되는데
  // profile 폴더 안에 index.jsx 로 나누고 싶으면 trailingSlash 사용
  trailingSlash: true,
  // react 18번전으로 next에서 strict mode로 useEffect가 2번
  // 실행이 되는 문제가 있음 개발 환경에서만 일어나고
  // 아래 명령어로 strict mode 끌 수 있다.
  reactStrictMode: false,
  // 정적 페이지 build 하기 next14 버전
  output: "export",
  // build ID 값을 고정한다. - S3, LB 배포시 _next ID가 달라 에러 생김
  generateBuildId: () => "codecamp-deploy-project",
  // ssr 로 인한 정적 페이지 build 오류 해결하기
  // 안에 있는 폴더만 정적페이지 build시 out폴더에 만들어 진다.
  // getServerSideProps 함수가 있는 페이지는 제외하고 넣으면 된다.
  // 상위 페이지, 404 페이지만 정적 페이지 build 시 out 폴더에 생성이 된다.
  // exportPathMap: () => ({
  //   "/": { page: "/" },
  //   "/404": { page: "/404" },
  // }),
};

export default nextConfig;
