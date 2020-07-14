# PWA설치
1. 소스 clone
2. 소스 설치 디렉토리 이동 npm 설치
   > npm install -g create-react-app 실행  
   > npm update 실행  
   > express 서버 설치 : npm install --save express 실행  
   > cors 설치 : cors npm install --save cors 실행  

# 소스 build
   > 모든 확장자의 파일을 수정한 다음 반영 하려면 소스를 build를 해야 한다.  
      npm run build 실행

# 노드 서버 기동
   > server 디렉토리로 이동  
      node server.js 실행  

   > 서버를 http와 https로 띄우는 방법이 분리되어 있음.  
      https로 띄우려면 인증가 있어야 한다.
     
# groupware 소스
   > < CORS 처리 >  
       &nbsp;&nbsp;PWA에서 호출하는 groupware 도메인을 header에 추가  
       &nbsp;&nbsp;ex) response.addHeader("Access-Control-Allow-Origin", "http://localhost:3000");  
      < PUSH 클릭시 해당 URL로 이동 >  
      &nbsp;&nbsp;AlarmServiceImpl.java 파일의 sendFCM함수 수정   
       &nbsp;&nbsp;content.put("click_action", "http://localhost:3000/"); // url 수정
   