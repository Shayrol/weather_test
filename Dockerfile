# 가상의 컴퓨터 만드는 설명서

# 1. 운영체제 및 프로그램 직접 하나하나 설치
# FROM ubuntu:22.04

# RUN sudo apt install -y nodejs
# RUN sudo npm install -g yarn

# 2. 이미 리눅스, node, npm, yarn까지 모두 깔려있는 컴퓨터 다운로드
# node 14버전은 종료함 18, 20, 22 버전 지원중
FROM node:18

# 2-2. 패키지 먼저 설치하기
# 현재 위치의 package.json 파일을 myfolder 안에 넣어줘
COPY ./package.json /myfolder/
# 헌재 위치의 yarn.lock 파일을 myfolder 안에 넣어줘
COPY ./yarn.lock /myfolder/
WORKDIR /myfolder/
RUN yarn install

# 이렇게 하면 라이브러리 추가되지 않는 이상 캐시가 깨지지 않을 것이여서
# build 시점이 빠를 것이다.

# 2-3. 소스코드 복사하기
COPY . /myfolder/
RUN yarn build

# .dockerignore로 버전이 다른 node_modules / .next등으로 서로다른
# 버전이 설치가 되어 안되는 곳도 발생할 수 있다.
# 그래서 걸러내고 다시 install, build를 하고 start를 해준다.
# 똑같은 버전으로 실행하기 위해 필요한 작업

# 매번 실행 마다 install, build 작업을 하고 start는 비효율 적이다.

# 셋팅과 실행을 구분하기 위해 RUN 이 아닌 CMD yarn start로 한다.
CMD yarn start