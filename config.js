var config = {
    style: 'mapbox://styles/geunhee-mit/ck8qnjomg0e421im0fwueaxvq',
    accessToken: 'pk.eyJ1IjoiZ2V1bmhlZS1taXQiLCJhIjoiY2s4ZjBvc3JkMDF5MDNsc3k4ZXZpc3phdyJ9.ubTF4v5-Sr3trIe0ytzIZQ',
    showMarkers: false,
    alignment: 'left',
    theme: 'dark',
    //title: 'Glaciers of Glacier National Park',
    //subtitle: 'Change in coverage from 1998 to 2015',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'school',
            title: 'School location and students',
            image: 'img/SVG/Asset 1.svg',
            // description: 'The project seeks to analyze the level of exposure of the school facilities and highlight the current capital investment projects the New York City local government is developing to build new schools and renovate existing schools.',
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
            id: 'risk',
            title: 'Risk exposure to flooding',
            image: '',
            description: '0.0 % of flood zone areas \n 0.0 schools within the floodplain zones 0.0 % of schools within floodplain zones',
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
            id: 'result',
            title: 'Results',
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
        }

    ]
};
