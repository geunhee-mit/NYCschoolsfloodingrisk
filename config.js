AOS.init({
  duration: 1200,
})

var config = {
    style: 'mapbox://styles/geunhee-mit/ck8s8dr9r0sp31inxqwazbh3m',
    accessToken: 'pk.eyJ1IjoiZ2V1bmhlZS1taXQiLCJhIjoiY2s4ZjBvc3JkMDF5MDNsc3k4ZXZpc3phdyJ9.ubTF4v5-Sr3trIe0ytzIZQ',
    showMarkers: false,
    alignment: 'left',
    theme: 'black',
    byline: '',
    // footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'school',
            title: 'School location and students',
            image: 'img/SVG/leg1.svg',
            // image: 'img/NYC_basemap.jpg',
            // description: 'The project seeks to analyze the level of exposure of the school facilities and highlight the current capital investment projects the New York City local government is developing to build new schools and renovate existing schools.',
            location: {
              center: { lon: -74.03449, lat: 40.69642 }, //-74.37829, lat: 40.71238
              zoom: 10.3,
              pitch: 0.00,
              bearing: 0.00
              //https://demos.mapbox.com/location-helper/
            },
            onChapterEnter: [
              // {
              //     layer: 'schools-ratemap-2015-3r2c9x',
              //     opacity: 0
              // },
              {
                  layer: 'schools-2020-100-2lkivu',
                  opacity: 0
              },
              {
                  layer: 'school-floodplain-a0lqb0',
                  opacity: 0
              },
              {
                  layer: 'nycschools-5-1sd31r',
                  opacity: 1
              }
            ],
            onChapterExit: [

            ]
        }
        ,
        {

            id: 'risk',
            title: 'Risk exposure to flooding',
            image: 'img/SVG/leg2.svg',
            description: '0.0 % of flood zone areas \n 0.0 schools within the floodplain zones 0.0 % of schools within floodplain zones',
            location: {
              center: { lon: -74.02387, lat: 40.65117 }, //-74.03449, lat: 40.69642
              zoom: 11.1,
              pitch: 200.00,
              bearing: 10
            },
            onChapterEnter: [
              {
                  layer: 'nycschools-5-1sd31r',
                  opacity: 0.2
              },
              // {
              //     layer: 'schools-ratemap-2015-3r2c9x',
              //     opacity: 1
              // },
              {
                  layer: 'schools-2020-100-2lkivu',
                  opacity: 1
              },
              {
                  layer: 'school-floodplain-a0lqb0',
                  opacity: 1
              },
              // {
              //     layer: 'rateMap_2015',
              //     opacity: 0.5
              // },
              {
                  layer: 'sea-level-rise-maps-2020s-100-c29tkm',
                  opacity: 0.5
              },
              {
                  layer: 'sea-level-rise-maps-2050s-100-99sxch',
                  opacity: 0.9
              }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'budget',
            title: 'Budget Allocation',
            // image: 'img/SVG/leg3.svg',
            description: '1. How the new york city government is allocating public resources to mitigate flooding impacts in school facilities? 2. Are public resources allocated to the schools with the highest risk of flooding?',
            location: {
              center: { lon: -73.98184, lat: 40.71842 },
              zoom: 12.82,
              pitch: 0.00,
              bearing: 1.11
            },
            onChapterEnter: [

            ],
            onChapterExit: [

            ]
        }
        //,
        // {
        //     id: 'result',
        //     title: 'Results',
        //     image: 'img/SVG/leg4.svg',
        //     description: '',
        //     location: {
        //       center: { lon: -74.04696, lat: 40.67412 },
        //       zoom: 11.98,
        //       pitch: 0.00,
        //       bearing: 0.00
        //     },
        //     onChapterEnter: [
        //
        //     ],
        //     onChapterExit: [
        //
        //     ]
        // }

    ]


};
