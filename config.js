var config = {
    style: 'mapbox://styles/geunhee-mit/ck8qnjomg0e421im0fwueaxvq',
    accessToken: 'pk.eyJ1IjoiZ2V1bmhlZS1taXQiLCJhIjoiY2s4ZjBvc3JkMDF5MDNsc3k4ZXZpc3phdyJ9.ubTF4v5-Sr3trIe0ytzIZQ',
    showMarkers: false,
    alignment: 'left',
    theme: 'dark',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'school',
            title: 'School location and students',
            image: 'img/1x/Asset 1.png',
            description: '1,126,501 students | 1,866 school facilities',
            location: {
              center: { lon: -74.03449, lat: 40.69642 },
              zoom: 11.33,
              pitch: 0.00,
              bearing: 0.00
              //https://demos.mapbox.com/location-helper/
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        }
        ,
        {
            id: 'riskExposure',
            title: 'Risk exposure to flooding',
            image: '',
            description: '0.0 % of flood zone areas 0.0 schools within the floodplain zones 0.0 % of schools within floodplain zones',
            indicator: 'Schools in floodplain zones'
            location: {
              center: { lon: -74.03449, lat: 40.69642 },
              zoom: 11.33,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
            ],
            onChapterExit: [
              {
                  layer: 'schoolground',
                  opacity: 0
              }
            ]
        },
        {
            id: 'Researchquestion',
            title: 'Research Question',
            image: '',
            description: '1. How the new york city government is allocating public resources to mitigate flooding impacts in school facilities? 2. Are public resources allocated to the schools with the highest risk of flooding?',
            location: {
              center: { lon: -74.03449, lat: 40.69642 },
              zoom: 11.33,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'terrainRGB',
                  opacity: 1
              }
            ],
            onChapterExit: [
              {
                  layer: 'schoolground',
                  opacity: 0
              }
            ]
        },
        {
            id: 'Location',
            title: 'School location and students',
            description: '1,126,501 students | 1,866 school facilities',
            location: {
              center: { lon: -73.99850, lat: 40.70524 },
              zoom: 14.03,
              pitch: 0.00,
              bearing: 0.00
            },
            onChapterEnter: [
              {
                  layer: 'schoolground_2',
                  opacity: 1
              },
              {
                  layer: 'terrainRGB',
                  opacity: 0.5
              }
            ],
            onChapterExit: [
            ]
        }
    ]
};
