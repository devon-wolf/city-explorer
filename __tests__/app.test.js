const { mungeLocation, mungeWeather, mungeReviews } = require('../lib/munge-utils.js');

test('returns the location name, lat, and lon of the first item in the data', async() => {
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
