<div class="map-main" id="map">
<script>
function initMap(){

var pos = {lat: 55.776910, lng: 37.655009};

var opt = {
center: pos,
zoom: 18
}

var map = new google.maps.Map(document.getElementById('map'), opt);

var marker = new google.maps.Marker({
position: pos,
map: map
});

}
</script>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDdzRKKlaMkJNRlUQPy5joALkJAo4ME2i4&callback=initMap"
async defer></script>
    <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2105c380fd9d112860b6116f7ee315ba3e8d32ae8c06b02adc535cb9424bac16&amp;width=100%25&amp;height=720&amp;lang=ru_RU&amp;scroll=false"></script>
    <div class="map-info">
        <h2>Контакты</h2>
        <p>г. Москва, Комсомольская площадь, 3/30с4, оф. 403</p>
        <p>E-mail: sale@3dcrafter.ru <br>
            Телефон #1: +7 495 00-44-187</p>
        <p>Режим работы: <br> круглосуточно</p>
    </div>
</div>
