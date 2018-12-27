//取得圖台相關資訊與設定
function getTileLayers(p: string) {
    const mapboxStr = "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}";
    const mapboxOption = {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox.streets',
        accessToken: 'sk.eyJ1IjoiYW5keXRhMjQiLCJhIjoiY2pwa2lydGg0MDNvYzN4czg0dWppd3FkNiJ9.E6mIiiD1nsXf5XS_-3G5nA',
        detectRetina: true
    };
    const locationIQStr = "https://{s}-tiles.locationiq.org/v2/obk/r/{z}/{x}/{y}.png?key={key}";
    const locationIQOption = {
        key: "53dbe00236f220",
        detectRetina: true
    };
    const osmStr = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const osmOption = {
        detectRetina: true
    }

    this.mapboxStr = mapboxStr;
    this.mapboxOption = mapboxOption;
    this.locationIQStr = locationIQStr;
    this.locationIQOption = locationIQOption;
    this.osmStr = osmStr;
    this.osmOption = osmOption;
}

class Conf {
    serverUrl: string;
    key: string;
    accessToken: string;
    id: string;
    detectRetina: boolean;
    constructor() {
        this.detectRetina = true;
    }
}
class ConfItem {
    Providor: string;
    ConfValue: Conf;
    constructor(Providor: string) {
        this.Providor = Providor;
    }
    getConf() {
        return this.ConfValue;
    }
}