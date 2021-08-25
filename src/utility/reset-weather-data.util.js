export function dateString(date) {

    const now = new Date();
    const day = new Date(date);

    const nextDayDate = now.getDate() + 1;
    const inputTimeDate = day.getDate();

    const options = {
        day: 'numeric',
        weekday: 'short',
        month:'short'
    }

    const local = navigator.language;

    const formatDate = new Intl.DateTimeFormat(local, options).format(day);

    if (nextDayDate === inputTimeDate) {     
        return 'Tomorrow';        
    }

    
    return formatDate;
}

function changeTempToFahrenheit(temp) {
    const f = (temp * 9 / 5) + 32;
    return f;
}

export function renameWeatherData(data) {
    
    const resetData = data.map((weather, i) => {
    
        const { id, the_temp, max_temp, min_temp, air_pressure, visibility, weather_state_abbr, weather_state_name, wind_speed, wind_direction_compass, humidity,applicable_date } = weather;

        const day = dateString(applicable_date);
        const convertedFrom_C_to_F = {
            num: changeTempToFahrenheit(the_temp),
            maxTemp: changeTempToFahrenheit(max_temp),
            minTemp: changeTempToFahrenheit(min_temp)
        }
        return {
            id,
            visibility,
            humidity,
            day,
            date:applicable_date,
            temp: {
                c: {
                    num: the_temp,
                    maxTemp: max_temp,
                    minTemp: min_temp
                },
                f:{...convertedFrom_C_to_F}
            },
            airPressure: air_pressure,
            wind: {
                speed: wind_speed,
                direction: wind_direction_compass
            },
            weatherState: {
                abbr: weather_state_abbr,
                name: weather_state_name
            }
            
        }
    });

    return resetData;
}