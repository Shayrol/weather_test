/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  // build를 하면 profile 폴더의 index.jsx가 profile.html로 되는데
  // profile 폴더 안에 index.jsx 로 나누고 싶으면 trailingSlash 사용
  trailingSlash: true,
  // react 18번전으로 next에서 strict mode로 useEffect가 2번
  // 실행이 되는 문제가 있음 개발 환경에서만 일어나고
  // 아래 명령어로 strict mode 끌 수 있다.
  reactStrictMode: false,
};

export default nextConfig;
