import clear from '../images/Clear.png';
import hail from '../images/Hail.png';
import heavyCloud from '../images/HeavyCloud.png';
import snow from '../images/Snow.png';
import thunderStorm from '../images/Thunderstorm.png';
import sleet from '../images/Sleet.png';
import shower from '../images/Shower.png';
import lightRain from '../images/LightRain.png';
import lightCloud from '../images/LightCloud.png';
import heavyRain from '../images/HeavyRain.png';

export function setWeatherImage(weatherStatus) {
    switch (weatherStatus) {
        case 'sn':
            return snow;
        case 'sl':
            return sleet;
        case 'h':
            return hail;
        case 't':
            return thunderStorm;
        case 'hr':
            return heavyRain;
        case 'lr':
            return lightRain;
        case 's':
            return shower;
        case 'hc':
            return heavyCloud;
        case 'lc':
            return lightCloud;
        default:
            return clear;
    }
}