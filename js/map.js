
document.addEventListener('DOMContentLoaded',function(){

  var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(37.4253, 126.42847), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

  var map = new kakao.maps.Map(mapContainer, mapOption);

  // 마커가 표시될 위치입니다 
  var markerPosition  = new kakao.maps.LatLng(37.4253, 126.4284); 

  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
      position: markerPosition
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(map);

  var iwContent = '<div style="padding:5px;">Nest Hotel <br><a href="https://map.kakao.com/?urlX=373513.0&urlY=1090917.0&name=Nest+Hotel" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Nest Hotel,37.4253, 126.4284" style="color:blue" target="_blank">길찾기</a></div>',
      iwPosition = new kakao.maps.LatLng(37.4253, 126.4284); //인포윈도우 표시 위치입니다

  // 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
      position : iwPosition, 
      content : iwContent 
  });
  infowindow.open(map, marker); 
});