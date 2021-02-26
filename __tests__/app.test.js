const { mungeLocation, mungeWeather, mungeReviews } = require('../lib/munge-utils.js');

test('returns the location name, lat, and lon of the first item in the data', () => {
  const rawData = [
    {
      'place_id': '235836898',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'relation',
      'osm_id': '187541',
      'boundingbox': [
        '41.33978',
        '41.469279',
        '-75.719836',
        '-75.604032'
      ],
      'lat': '41.4086874',
      'lon': '-75.6621294',
      'display_name': 'Scranton, Lackawanna County, Pennsylvania, USA',
      'class': 'place',
      'type': 'city',
      'importance': 0.646390427106362,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
    },
    {
      'place_id': '236162566',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'relation',
      'osm_id': '129183',
      'boundingbox': [
        '42.0083026',
        '42.0300158',
        '-94.5613975',
        '-94.5366903'
      ],
      'lat': '42.0224844',
      'lon': '-94.5452524',
      'display_name': 'Scranton, Greene County, Iowa, USA',
      'class': 'place',
      'type': 'city',
      'importance': 0.532395189781967,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
    },
    {
      'place_id': '236163128',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'relation',
      'osm_id': '130065',
      'boundingbox': [
        '38.7678004',
        '38.785882',
        '-95.751603',
        '-95.72349'
      ],
      'lat': '38.7816717',
      'lon': '-95.7385956',
      'display_name': 'Scranton, Osage County, Kansas, USA',
      'class': 'place',
      'type': 'city',
      'importance': 0.515288505579639,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
    },
    {
      'place_id': '236075803',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'relation',
      'osm_id': '181404',
      'boundingbox': [
        '46.133669',
        '46.15929',
        '-103.15378',
        '-103.135786'
      ],
      'lat': '46.1480618',
      'lon': '-103.1429501',
      'display_name': 'Scranton, Bowman County, North Dakota, USA',
      'class': 'place',
      'type': 'city',
      'importance': 0.48508187373810796,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
    },
    {
      'place_id': '96074210',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'way',
      'osm_id': '33062995',
      'boundingbox': [
        '35.3568183',
        '35.3644313',
        '-93.548344',
        '-93.5303029'
      ],
      'lat': '35.3611968',
      'lon': '-93.535743',
      'display_name': 'Scranton, Logan County, Arkansas, USA',
      'class': 'place',
      'type': 'city',
      'importance': 0.478282845036744,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
    },
    {
      'place_id': '236909347',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'relation',
      'osm_id': '8540538',
      'boundingbox': [
        '35.3568183',
        '35.3644313',
        '-93.548344',
        '-93.5303029'
      ],
      'lat': '35.3611968',
      'lon': '-93.535743',
      'display_name': 'Scranton, Logan County, Arkansas, USA',
      'class': 'place',
      'type': 'city',
      'importance': 0.478282845036744,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_city.p.20.png'
    },
    {
      'place_id': '312939',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'node',
      'osm_id': '150951014',
      'boundingbox': [
        '36.4318981',
        '36.4718981',
        '-116.5236595',
        '-116.4836595'
      ],
      'lat': '36.4518981',
      'lon': '-116.5036595',
      'display_name': 'Scranton, Inyo County, California, 92328, USA',
      'class': 'place',
      'type': 'hamlet',
      'importance': 0.429260878198397,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_village.p.20.png'
    },
    {
      'place_id': '385920',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'node',
      'osm_id': '151937770',
      'boundingbox': [
        '47.4057658',
        '47.4457658',
        '-92.9690779',
        '-92.9290779'
      ],
      'lat': '47.4257658',
      'lon': '-92.9490779',
      'display_name': 'Scranton, Hibbing, Saint Louis County, Minnesota, 55746, USA',
      'class': 'place',
      'type': 'hamlet',
      'importance': 0.35,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_village.p.20.png'
    },
    {
      'place_id': '361033',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'node',
      'osm_id': '151676479',
      'boundingbox': [
        '32.2851321',
        '32.3251321',
        '-99.1270127',
        '-99.0870127'
      ],
      'lat': '32.3051321',
      'lon': '-99.1070127',
      'display_name': 'Scranton, Eastland County, Texas, 76437, USA',
      'class': 'place',
      'type': 'hamlet',
      'importance': 0.35,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_village.p.20.png'
    },
    {
      'place_id': '480742',
      'licence': 'https://locationiq.com/attribution',
      'osm_type': 'node',
      'osm_id': '158581120',
      'boundingbox': [
        '42.7206148',
        '42.7606148',
        '-78.8541993',
        '-78.8141993'
      ],
      'lat': '42.7406148',
      'lon': '-78.8341993',
      'display_name': 'Scranton, Erie County, New York, 14075, USA',
      'class': 'place',
      'type': 'hamlet',
      'importance': 0.35,
      'icon': 'https://locationiq.org/static/images/mapicons/poi_place_village.p.20.png'
    }
  ];

  const expectation = {
    'formatted_query': 'Scranton, Lackawanna County, Pennsylvania, USA',
    'latitude': '41.4086874',
    'longitude': '-75.6621294'
  };

  const actual = mungeLocation(rawData);

  expect(actual).toEqual(expectation);
});

test('returns an array of forecasts and times from the data', () => {
  const rawData = {
    'data': [
      {
        'moonrise_ts': 1614377389,
        'wind_cdir': 'SE',
        'rh': 67,
        'pres': 1001.2,
        'high_temp': 4.9,
        'sunset_ts': 1614380001,
        'ozone': 346.5,
        'moon_phase': 0.997742,
        'wind_gust_spd': 13.0938,
        'snow_depth': 86.4,
        'clouds': 41,
        'ts': 1614315660,
        'sunrise_ts': 1614339721,
        'app_min_temp': -10.7,
        'wind_spd': 1.34147,
        'pop': 0,
        'wind_cdir_full': 'southeast',
        'slp': 1029.13,
        'moon_phase_lunation': 0.51,
        'valid_date': '2021-02-26',
        'app_max_temp': 1.2,
        'vis': 24.096,
        'dewpt': -5.2,
        'snow': 0,
        'uv': 2.58294,
        'weather': {
          'icon': 'c03d',
          'code': 803,
          'description': 'Broken clouds'
        },
        'wind_dir': 135,
        'max_dhi': null,
        'clouds_hi': 27,
        'precip': 0,
        'low_temp': -3.5,
        'max_temp': 5,
        'moonset_ts': 1614341663,
        'datetime': '2021-02-26',
        'temp': 0.4,
        'min_temp': -5.2,
        'clouds_mid': 26,
        'clouds_low': 8
      },
      {
        'moonrise_ts': 1614468198,
        'wind_cdir': 'S',
        'rh': 90,
        'pres': 992.417,
        'high_temp': 7.1,
        'sunset_ts': 1614466470,
        'ozone': 298.031,
        'moon_phase': 0.979141,
        'wind_gust_spd': 17.1875,
        'snow_depth': 112.7,
        'clouds': 81,
        'ts': 1614402060,
        'sunrise_ts': 1614426030,
        'app_min_temp': -5.4,
        'wind_spd': 2.72622,
        'pop': 90,
        'wind_cdir_full': 'south',
        'slp': 1019.83,
        'moon_phase_lunation': 0.55,
        'valid_date': '2021-02-27',
        'app_max_temp': 3.9,
        'vis': 17.9803,
        'dewpt': 2.1,
        'snow': 26.25,
        'uv': 2.77264,
        'weather': {
          'icon': 's04d',
          'code': 610,
          'description': 'Mix snow/rain'
        },
        'wind_dir': 178,
        'max_dhi': null,
        'clouds_hi': 13,
        'precip': 3.4375,
        'low_temp': -2.2,
        'max_temp': 7.3,
        'moonset_ts': 1614429831,
        'datetime': '2021-02-27',
        'temp': 3.6,
        'min_temp': -0.5,
        'clouds_mid': 25,
        'clouds_low': 80
      },
      {
        'moonrise_ts': 1614554598,
        'wind_cdir': 'SE',
        'rh': 94,
        'pres': 992.3,
        'high_temp': 3.2,
        'sunset_ts': 1614552939,
        'ozone': 291.573,
        'moon_phase': 0.933277,
        'wind_gust_spd': 12.5,
        'snow_depth': 112.7,
        'clouds': 94,
        'ts': 1614488460,
        'sunrise_ts': 1614512339,
        'app_min_temp': -7.7,
        'wind_spd': 1.84089,
        'pop': 75,
        'wind_cdir_full': 'southeast',
        'slp': 1020.12,
        'moon_phase_lunation': 0.58,
        'valid_date': '2021-02-28',
        'app_max_temp': -0.9,
        'vis': 11.4482,
        'dewpt': -0.3,
        'snow': 0,
        'uv': 1.99009,
        'weather': {
          'icon': 'r04d',
          'code': 520,
          'description': 'Light shower rain'
        },
        'wind_dir': 125,
        'max_dhi': null,
        'clouds_hi': 79,
        'precip': 3.3125,
        'low_temp': -1.8,
        'max_temp': 3.5,
        'moonset_ts': 1614517913,
        'datetime': '2021-02-28',
        'temp': 0.6,
        'min_temp': -2.3,
        'clouds_mid': 74,
        'clouds_low': 80
      }
    ],
    'city_name': 'Nanticoke',
    'lon': -76,
    'timezone': 'America/New_York',
    'lat': 41.21,
    'country_code': 'US',
    'state_code': 'PA'
  };
  
  const expectation = [
    {
      'forecast': 'Broken clouds',
      'time': '2021-02-26'
    },
    {
      'forecast': 'Mix snow/rain',
      'time': '2021-02-27'
    },
    {
      'forecast': 'Light shower rain',
      'time': '2021-02-28'
    }
  ];

  const actual = mungeWeather(rawData);

  expect(actual).toEqual(expectation);
});
