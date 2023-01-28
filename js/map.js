
document.addEventListener('DOMContentLoaded',function(){
  var mapContainer = document.getElementById('map'),
    mapOption = { 
        center: new kakao.maps.LatLng(37.4253, 126.42847),
        level: 3
    };
  var map = new kakao.maps.Map(mapContainer, mapOption);
  var markerPosition  = new kakao.maps.LatLng(37.4253, 126.4284); 
  var marker = new kakao.maps.Marker({
      position: markerPosition
  });
  marker.setMap(map);
  var iwContent = '<div class="map-marker"><p class="map-name">네스트호텔</p><p class="marker-address">인천광역시 중구 영종해안남로 (가나다 0123)</p><a href="https://map.kakao.com/?urlX=373513.0&urlY=1090917.0&name=Nest+Hotel" target="_blank" class="marker-btn">큰지도보기</a> <a href="https://map.kakao.com/link/to/Nest Hotel,37.4253, 126.4284" target="_blank" class="marker-btn">길찾기</a></div>',
      iwPosition = new kakao.maps.LatLng(37.4253, 126.4284); //인포윈도우 표시 위치입니다
  var infowindow = new kakao.maps.InfoWindow({
      position : iwPosition, 
      content : iwContent 
  });
  infowindow.open(map, marker); 
});