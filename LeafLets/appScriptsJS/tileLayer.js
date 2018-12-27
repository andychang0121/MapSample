//取得圖台相關資訊與設定
function getTileLayers(p) {
    var mapboxStr = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}";
    var mapboxOption = {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets',
        accessToken: 'sk.eyJ1IjoiYW5keXRhMjQiLCJhIjoiY2pwa2lydGg0MDNvYzN4czg0dWppd3FkNiJ9.E6mIiiD1nsXf5XS_-3G5nA',
        detectRetina: true
    };
    var locationIQStr = "https://{s}-tiles.locationiq.org/v2/obk/r/{z}/{x}/{y}.png?key={key}";
    var locationIQOption = {
        key: "53dbe00236f220",
        detectRetina: true
    };
    var osmStr = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    var osmOption = {
        detectRetina: true
    };
    this.mapboxStr = mapboxStr;
    this.mapboxOption = mapboxOption;
    this.locationIQStr = locationIQStr;
    this.locationIQOption = locationIQOption;
    this.osmStr = osmStr;
    this.osmOption = osmOption;
}
var Conf = /** @class */ (function () {
    function Conf() {
        this.detectRetina = true;
    }
    return Conf;
}());
var ConfItem = /** @class */ (function () {
    function ConfItem(Providor) {
        this.Providor = Providor;
    }
    ConfItem.prototype.getConf = function () {
        return this.ConfValue;
    };
    return ConfItem;
}());
//# sourceMappingURL=tileLayer.js.map