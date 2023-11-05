import React, { createContext, useState } from 'react'
export let MyContext = createContext();
function Store(props) {

    const [data] = useState({
        "cod": "200",
        "message": 0,
        "cnt": 40,
        "list": [
            {
                "dt": 1699164000,
                "main": {},
                "weather": [],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.24,
                    "deg": 244,
                    "gust": 2.35
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-05 06:00:00"
            },












            
            {
                "dt": 1699174800,
                "main": {
                    "temp": 302.97,
                    "feels_like": 303.11,
                    "temp_min": 302.97,
                    "temp_max": 303.9,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1005,
                    "humidity": 44,
                    "temp_kf": -0.93
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.94,
                    "deg": 251,
                    "gust": 3.03
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-05 09:00:00"
            },
            {
                "dt": 1699185600,
                "main": {
                    "temp": 299.23,
                    "feels_like": 299.23,
                    "temp_min": 299.23,
                    "temp_max": 299.23,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1006,
                    "humidity": 37,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.37,
                    "deg": 229,
                    "gust": 2.8
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-05 12:00:00"
            },
            {
                "dt": 1699196400,
                "main": {
                    "temp": 296.98,
                    "feels_like": 296.46,
                    "temp_min": 296.98,
                    "temp_max": 296.98,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1008,
                    "humidity": 40,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.19,
                    "deg": 254,
                    "gust": 2.35
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-05 15:00:00"
            },
            {
                "dt": 1699207200,
                "main": {
                    "temp": 295.5,
                    "feels_like": 294.86,
                    "temp_min": 295.5,
                    "temp_max": 295.5,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1008,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.27,
                    "deg": 274,
                    "gust": 2.37
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-05 18:00:00"
            },
            {
                "dt": 1699218000,
                "main": {
                    "temp": 294.11,
                    "feels_like": 293.38,
                    "temp_min": 294.11,
                    "temp_max": 294.11,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1007,
                    "humidity": 43,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.3,
                    "deg": 265,
                    "gust": 1.45
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-05 21:00:00"
            },
            {
                "dt": 1699228800,
                "main": {
                    "temp": 293.1,
                    "feels_like": 292.35,
                    "temp_min": 293.1,
                    "temp_max": 293.1,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1008,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.3,
                    "deg": 216,
                    "gust": 1.31
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-06 00:00:00"
            },
            {
                "dt": 1699239600,
                "main": {
                    "temp": 297.79,
                    "feels_like": 297.33,
                    "temp_min": 297.79,
                    "temp_max": 297.79,
                    "pressure": 1017,
                    "sea_level": 1017,
                    "grnd_level": 1010,
                    "humidity": 39,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.06,
                    "deg": 257,
                    "gust": 1.11
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-06 03:00:00"
            },
            {
                "dt": 1699250400,
                "main": {
                    "temp": 302.6,
                    "feels_like": 301.29,
                    "temp_min": 302.6,
                    "temp_max": 302.6,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1008,
                    "humidity": 28,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.39,
                    "deg": 288,
                    "gust": 2.81
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-06 06:00:00"
            },
            {
                "dt": 1699261200,
                "main": {
                    "temp": 303.54,
                    "feels_like": 301.83,
                    "temp_min": 303.54,
                    "temp_max": 303.54,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1006,
                    "humidity": 23,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.58,
                    "deg": 291,
                    "gust": 4.11
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-06 09:00:00"
            },
            {
                "dt": 1699272000,
                "main": {
                    "temp": 298.38,
                    "feels_like": 297.87,
                    "temp_min": 298.38,
                    "temp_max": 298.38,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1006,
                    "humidity": 35,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.55,
                    "deg": 294,
                    "gust": 3.14
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-06 12:00:00"
            },
            {
                "dt": 1699282800,
                "main": {
                    "temp": 296.35,
                    "feels_like": 295.72,
                    "temp_min": 296.35,
                    "temp_max": 296.35,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1007,
                    "humidity": 38,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.69,
                    "deg": 307,
                    "gust": 1.88
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-06 15:00:00"
            },
            {
                "dt": 1699293600,
                "main": {
                    "temp": 295.1,
                    "feels_like": 294.42,
                    "temp_min": 295.1,
                    "temp_max": 295.1,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1007,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.32,
                    "deg": 338,
                    "gust": 1.41
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-06 18:00:00"
            },
            {
                "dt": 1699304400,
                "main": {
                    "temp": 293.74,
                    "feels_like": 293.03,
                    "temp_min": 293.74,
                    "temp_max": 293.74,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1005,
                    "humidity": 45,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 1.03,
                    "deg": 298,
                    "gust": 1.33
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-06 21:00:00"
            },
            {
                "dt": 1699315200,
                "main": {
                    "temp": 292.62,
                    "feels_like": 291.9,
                    "temp_min": 292.62,
                    "temp_max": 292.62,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1007,
                    "humidity": 49,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 1.58,
                    "deg": 259,
                    "gust": 1.61
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-07 00:00:00"
            },
            {
                "dt": 1699326000,
                "main": {
                    "temp": 297.31,
                    "feels_like": 296.88,
                    "temp_min": 297.31,
                    "temp_max": 297.31,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1009,
                    "humidity": 42,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 50
                },
                "wind": {
                    "speed": 1.78,
                    "deg": 292,
                    "gust": 1.97
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-07 03:00:00"
            },
            {
                "dt": 1699336800,
                "main": {
                    "temp": 302.22,
                    "feels_like": 301.2,
                    "temp_min": 302.22,
                    "temp_max": 302.22,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1007,
                    "humidity": 32,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03d"
                    }
                ],
                "clouds": {
                    "all": 25
                },
                "wind": {
                    "speed": 2.48,
                    "deg": 315,
                    "gust": 3.19
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-07 06:00:00"
            },
            {
                "dt": 1699347600,
                "main": {
                    "temp": 303.65,
                    "feels_like": 302.16,
                    "temp_min": 303.65,
                    "temp_max": 303.65,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1005,
                    "humidity": 27,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.84,
                    "deg": 303,
                    "gust": 3.11
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-07 09:00:00"
            },
            {
                "dt": 1699358400,
                "main": {
                    "temp": 298.64,
                    "feels_like": 298.21,
                    "temp_min": 298.64,
                    "temp_max": 298.64,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1004,
                    "humidity": 37,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.24,
                    "deg": 276,
                    "gust": 2.79
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-07 12:00:00"
            },
            {
                "dt": 1699369200,
                "main": {
                    "temp": 296.2,
                    "feels_like": 295.68,
                    "temp_min": 296.2,
                    "temp_max": 296.2,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1006,
                    "humidity": 43,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.31,
                    "deg": 260,
                    "gust": 2.51
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-07 15:00:00"
            },
            {
                "dt": 1699380000,
                "main": {
                    "temp": 294.71,
                    "feels_like": 294.12,
                    "temp_min": 294.71,
                    "temp_max": 294.71,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1006,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.35,
                    "deg": 298,
                    "gust": 2.47
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-07 18:00:00"
            },
            {
                "dt": 1699390800,
                "main": {
                    "temp": 293.43,
                    "feels_like": 292.79,
                    "temp_min": 293.43,
                    "temp_max": 293.43,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1005,
                    "humidity": 49,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.62,
                    "deg": 255,
                    "gust": 1.73
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-07 21:00:00"
            },
            {
                "dt": 1699401600,
                "main": {
                    "temp": 292.27,
                    "feels_like": 291.62,
                    "temp_min": 292.27,
                    "temp_max": 292.27,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1006,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.9,
                    "deg": 217,
                    "gust": 1.95
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-08 00:00:00"
            },
            {
                "dt": 1699412400,
                "main": {
                    "temp": 297,
                    "feels_like": 296.54,
                    "temp_min": 297,
                    "temp_max": 297,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1008,
                    "humidity": 42,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.72,
                    "deg": 238,
                    "gust": 1.79
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-08 03:00:00"
            },
            {
                "dt": 1699423200,
                "main": {
                    "temp": 301.98,
                    "feels_like": 300.88,
                    "temp_min": 301.98,
                    "temp_max": 301.98,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1007,
                    "humidity": 30,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 2.4,
                    "deg": 272,
                    "gust": 2.81
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-08 06:00:00"
            },
            {
                "dt": 1699434000,
                "main": {
                    "temp": 303.34,
                    "feels_like": 301.76,
                    "temp_min": 303.34,
                    "temp_max": 303.34,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1004,
                    "humidity": 25,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 3.1,
                    "deg": 294,
                    "gust": 4.19
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-08 09:00:00"
            },
            {
                "dt": 1699444800,
                "main": {
                    "temp": 298.34,
                    "feels_like": 297.85,
                    "temp_min": 298.34,
                    "temp_max": 298.34,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1004,
                    "humidity": 36,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 4
                },
                "wind": {
                    "speed": 1.97,
                    "deg": 259,
                    "gust": 2.61
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-08 12:00:00"
            },
            {
                "dt": 1699455600,
                "main": {
                    "temp": 296.35,
                    "feels_like": 295.8,
                    "temp_min": 296.35,
                    "temp_max": 296.35,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1006,
                    "humidity": 41,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 804,
                        "main": "Clouds",
                        "description": "overcast clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 85
                },
                "wind": {
                    "speed": 1.73,
                    "deg": 239,
                    "gust": 1.89
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-08 15:00:00"
            },
            {
                "dt": 1699466400,
                "main": {
                    "temp": 294.99,
                    "feels_like": 294.38,
                    "temp_min": 294.99,
                    "temp_max": 294.99,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1006,
                    "humidity": 44,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 803,
                        "main": "Clouds",
                        "description": "broken clouds",
                        "icon": "04n"
                    }
                ],
                "clouds": {
                    "all": 72
                },
                "wind": {
                    "speed": 1.81,
                    "deg": 261,
                    "gust": 1.9
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-08 18:00:00"
            },
            {
                "dt": 1699477200,
                "main": {
                    "temp": 293.45,
                    "feels_like": 292.79,
                    "temp_min": 293.45,
                    "temp_max": 293.45,
                    "pressure": 1012,
                    "sea_level": 1012,
                    "grnd_level": 1005,
                    "humidity": 48,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 29
                },
                "wind": {
                    "speed": 2.03,
                    "deg": 218,
                    "gust": 2.11
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-08 21:00:00"
            },
            {
                "dt": 1699488000,
                "main": {
                    "temp": 292.54,
                    "feels_like": 291.89,
                    "temp_min": 292.54,
                    "temp_max": 292.54,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1006,
                    "humidity": 52,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 802,
                        "main": "Clouds",
                        "description": "scattered clouds",
                        "icon": "03n"
                    }
                ],
                "clouds": {
                    "all": 35
                },
                "wind": {
                    "speed": 2.04,
                    "deg": 226,
                    "gust": 2.14
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-09 00:00:00"
            },
            {
                "dt": 1699498800,
                "main": {
                    "temp": 297.14,
                    "feels_like": 296.69,
                    "temp_min": 297.14,
                    "temp_max": 297.14,
                    "pressure": 1015,
                    "sea_level": 1015,
                    "grnd_level": 1008,
                    "humidity": 42,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 1.47,
                    "deg": 211,
                    "gust": 1.53
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-09 03:00:00"
            },
            {
                "dt": 1699509600,
                "main": {
                    "temp": 302.36,
                    "feels_like": 301.26,
                    "temp_min": 302.36,
                    "temp_max": 302.36,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1007,
                    "humidity": 31,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 1.87,
                    "deg": 281,
                    "gust": 2.38
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-09 06:00:00"
            },
            {
                "dt": 1699520400,
                "main": {
                    "temp": 304.15,
                    "feels_like": 302.63,
                    "temp_min": 304.15,
                    "temp_max": 304.15,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1005,
                    "humidity": 27,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 1
                },
                "wind": {
                    "speed": 2.85,
                    "deg": 288,
                    "gust": 4.5
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-09 09:00:00"
            },
            {
                "dt": 1699531200,
                "main": {
                    "temp": 299.2,
                    "feels_like": 299.2,
                    "temp_min": 299.2,
                    "temp_max": 299.2,
                    "pressure": 1011,
                    "sea_level": 1011,
                    "grnd_level": 1005,
                    "humidity": 37,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 5
                },
                "wind": {
                    "speed": 1.65,
                    "deg": 271,
                    "gust": 2.34
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-09 12:00:00"
            },
            {
                "dt": 1699542000,
                "main": {
                    "temp": 296.92,
                    "feels_like": 296.45,
                    "temp_min": 296.92,
                    "temp_max": 296.92,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1006,
                    "humidity": 42,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 0.87,
                    "deg": 288,
                    "gust": 1.44
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-09 15:00:00"
            },
            {
                "dt": 1699552800,
                "main": {
                    "temp": 295.52,
                    "feels_like": 295.01,
                    "temp_min": 295.52,
                    "temp_max": 295.52,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1007,
                    "humidity": 46,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 0.77,
                    "deg": 33,
                    "gust": 1.43
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-09 18:00:00"
            },
            {
                "dt": 1699563600,
                "main": {
                    "temp": 294.19,
                    "feels_like": 293.66,
                    "temp_min": 294.19,
                    "temp_max": 294.19,
                    "pressure": 1013,
                    "sea_level": 1013,
                    "grnd_level": 1006,
                    "humidity": 50,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.13,
                    "deg": 86,
                    "gust": 1.28
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-09 21:00:00"
            },
            {
                "dt": 1699574400,
                "main": {
                    "temp": 293.23,
                    "feels_like": 292.68,
                    "temp_min": 293.23,
                    "temp_max": 293.23,
                    "pressure": 1014,
                    "sea_level": 1014,
                    "grnd_level": 1007,
                    "humidity": 53,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01n"
                    }
                ],
                "clouds": {
                    "all": 0
                },
                "wind": {
                    "speed": 1.05,
                    "deg": 122,
                    "gust": 1.33
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "n"
                },
                "dt_txt": "2023-11-10 00:00:00"
            },
            {
                "dt": 1699585200,
                "main": {
                    "temp": 297.64,
                    "feels_like": 297.27,
                    "temp_min": 297.64,
                    "temp_max": 297.64,
                    "pressure": 1016,
                    "sea_level": 1016,
                    "grnd_level": 1009,
                    "humidity": 43,
                    "temp_kf": 0
                },
                "weather": [
                    {
                        "id": 800,
                        "main": "Clear",
                        "description": "clear sky",
                        "icon": "01d"
                    }
                ],
                "clouds": {
                    "all": 2
                },
                "wind": {
                    "speed": 1.37,
                    "deg": 179,
                    "gust": 1.51
                },
                "visibility": 10000,
                "pop": 0,
                "sys": {
                    "pod": "d"
                },
                "dt_txt": "2023-11-10 03:00:00"
            }
        ],
        "city": {
            "id": 1260086,
            "name": "Patna",
            "coord": {
                "lat": 25.6,
                "lon": 85.1167
            },
            "country": "IN",
            "population": 1599920,
            "timezone": 19800,
            "sunrise": 1699144188,
            "sunset": 1699184183
        }
    });
    return (
        <MyContext.Provider value={data}>
            {props.children}

        </MyContext.Provider>
    )
}

export default Store
