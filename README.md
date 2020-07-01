1. npm react 실행 : 반드시 clone받기 전에 실행.
   > > npm install -g create-react-app
2. npm update
   > > npm update
3. express 서버 설치
   > > npm install --save express
   > > packge.json에 ["main" : "sever.js"] 추가
4. cors
   > >  npm install --save cors
5. 소스 clone

# 소스 rebuld
   > > 모든 확장자의 파일을 수정한 다음 반영 하려면 소스를 build를 해야 한다.
   > > npm run build

# groupware 소스
   > > CORS 처리
     - PWA에서 호출하는 groupware 도메인을 header에 추가
     - ex) response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");
   > > PUSH 클릭시 해당 URL로 이동
     - AlarmServiceImpl.java 파일의 sendFCM함수 수정
     - content.put("click_action", "http://localhost:3000/"); // url 수정
   