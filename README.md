포항 음식점 API를 활용한 음식점 출력



api : 경상북도 포항시_포항음식점 정보(포항푸드 맞춤형 DB 구축)
https://www.data.go.kr/data/15077458/openapi.do



디자인)
https://www.figma.com/file/6djHfL9fNsz7UiXQC69Bhh/%ED%8F%AC%ED%95%AD%EC%9D%8C%EC%8B%9D%EC%A0%90?node-id=51495%3A4712



데이터 타입 : xml



1. 리스트 출력



사용 파라미터)


pageNo : 출력 페이지 번호

numOfRows : 페이지당 출력할 페이지 수

searchKey : 검색어

townBb : 특정 거리

    s1:설머리물회지구
    s2:등푸른막회거리
    s3:구룡포대게거리
    s4:보경사건강마을
    s5:이동음식일번지
    s6:영일대조개구이거리
    s7:송도카페문화거리
    s8:여남카페거리
    s9:오천오어사둘레길
    s10:오도리해안길
  

ex)http://data.pohangfood.kr/openapi/service/getPHFoodList?pageNo=1&numOfRows=10&searchKey=&townGb=s3


2. 특정 음식점 출력


사용 파라미터)
dataKey : 음식점 데이터 번호


ex)http://data.pohangfood.kr/openapi/service/getPHFoodDetail?dataKey=2731


07 / 16
  1) 검색 기능 구현
  2) 리스트 출력
  3) 머티리얼 디자인 적용
  4) cors 문제로 인해 cors changer 플러그인을 크롬 브라우저에 다운(html,js만으로 해결 불가

07/18)
   1) cors 문제 해결(jsp로 프록시 서버처럼 url을 통일)
   2) heroku 배포
    https://ksh-pohang-restaurant.herokuapp.com/
