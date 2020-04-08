var config = {
    style: 'mapbox://styles/geunhee-mit/ck8qnjomg0e421im0fwueaxvq',
    accessToken: 'pk.eyJ1IjoiZ2V1bmhlZS1taXQiLCJhIjoiY2s4ZjBvc3JkMDF5MDNsc3k4ZXZpc3phdyJ9.ubTF4v5-Sr3trIe0ytzIZQ',
    showMarkers: false,
    alignment: 'left',
    theme: 'light',
    //title: 'Glaciers of Glacier National Park',
    //subtitle: 'Change in coverage from 1998 to 2015',
    byline: '',
    footer: 'Source: Story text from Wikipedia, August 2019. Data from <a href="https://www.usgs.gov/centers/norock/science/retreat-glaciers-glacier-national-park">USGS</a>',
    chapters: [
        {
            id: 'glacier-np',
            title: 'Questions',
            image: '',
            description: ' 1. How to seperate HTML, CSS, JS if the template combined it in one html file?    2. I want to make scroll interactin only for text element(Project title ~ Research question) and then scroll down the whole page(map). How can I achieve this?    3. How can we embed charts/graphs that I made in anaconda to the webpage?    4. I am confused about onChapterEnter: /Exit in mapbox template. Could you explain how it works?',
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
              {
                  layer: 'terrainRGB',
                  opacity: 0
              }
            ]
        }
        ,
        {
            id: 'harrison1998',
            title: 'Harrison Glacier, 1998',
            image: '',
            description: 'Harrison Glacier is located in the US state of Montana in Glacier National Park. Situated on a southeast facing ridge immediately south of Mount Jackson, Harrison Glacier is the largest glacier in Glacier National Park. Compared to many of the vanishing glaciers in Glacier National Park, Harrison Glacier has a much higher altitude accumulation zone (approximately 9,000 feet (2,700 m)) which has allowed it to maintain some equilibrium in its glacier mass balance.',
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
            id: 'harrison2015',
            title: 'Harrison Glacier, 2015',
            image: '',
            description: 'Between 1998 and 2015, Harrison Glacier lost 169 acres of surface area (about 37%).',
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
            id: 'blackfoot1998',
            title: 'ddddddd',
            description: 'ddddddd.dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
            image: 'img/bar.png',
            location: {
              center: { lon: -74.03449, lat: 40.69642 },
              zoom: 11.33,
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
        // {
        //     id: 'blackfoot2015',
        //     title: 'Blackfoot Glacier, 2015',
        //     image: '',
        //     description: 'Between 1998 and 2015, Blackfoot Glacier lost 31 acres of surface area (about 8%).',
        //     location: {
        //         center: [-113.66573, 48.59181],
        //         zoom: 12.92,
        //         pitch: 51.50,
        //         bearing: -26.40
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0.25
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0
        //         }
        //     ]
        // },
        // {
        //     id: 'agassiz1998',
        //     title: 'Agassiz Glacier, 1998',
        //     image: '',
        //     description: 'Agassiz Glacier is in Glacier National Park in the U.S. state of Montana. It is named after Louis Agassiz, a Swiss-American glaciologist. The glacier is situated in a cirque to the southeast of Kintla Peak west of the Continental Divide. Agassiz Glacier is one of several glaciers that have been selected for monitoring by the U.S. Geological Survey\'s Glacier Monitoring Research program, which is researching changes to the mass balance of glaciers in and surrounding Glacier National Park.',
        //     location: {
        //         center: [-114.15881, 48.93439],
        //         zoom: 13.51,
        //         pitch: 41.00,
        //         bearing: 78.33
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'agassiz2015',
        //     title: 'Agassiz Glacier, 2015',
        //     image: '',
        //     description: 'Between 1998 and 2015, Agassiz Glacier lost 108 acres of surface area (about 37%).',
        //     location: {
        //         center: [-114.15881, 48.93439],
        //         zoom: 13.51,
        //         pitch: 41.00,
        //         bearing: 78.33
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0.25
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0
        //         }
        //     ]
        // },
        // {
        //     id: 'rainbow1998',
        //     title: 'Rainbow Glacier, 1998',
        //     image: '',
        //     description: 'Rainbow Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated immediately to the east of Rainbow Peak at an elevation between 8,500 feet (2,600 m) and 8,000 feet (2,400 m) above sea level. The glacier has visible crevasses in satellite imagery. Rainbow Glacier has shown modest retreat compared to other glaciers in Glacier National Park.',
        //     location: {
        //         center: [-114.08659, 48.88039],
        //         zoom: 13.09,
        //         pitch: 50.00,
        //         bearing: -53.60
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'rainbow2015',
        //     title: 'Rainbow Glacier, 2015',
        //     image: '',
        //     description: 'Between 1998 and 2015, Rainbow Glacier lost 17 acres of surface area (about 6%).',
        //     location: {
        //         center: [-114.08659, 48.88039],
        //         zoom: 13.09,
        //         pitch: 50.00,
        //         bearing: -53.60
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0.25
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0
        //         }
        //     ]
        // },
        // {
        //     id: 'kintla1998',
        //     title: 'Kintla Glacier, 1998',
        //     image: '',
        //     description: 'Kintla Glacier is in Glacier National Park in the U.S. state of Montana. The glacier is situated on a plateau 2 miles (3.2 km) southwest of Kintla Peak at an elevation between 8,700 feet (2,700 m) and 7,700 feet (2,300 m) above sea level. The glacier has numerous crevasses and is actually two glaciers.',
        //     location: {
        //         center: [-114.18755, 48.92880],
        //         zoom: 13.09,
        //         pitch: 48.50,
        //         bearing: 164.00
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'kintla2015',
        //     title: 'Kintla Glacier, 2015',
        //     image: '',
        //     description: 'Between 1998 and 2015, Harrison Glacier lost 24 acres of surface area (about 10%).',
        //     location: {
        //         center: [-114.18755, 48.92880],
        //         zoom: 13.09,
        //         pitch: 48.50,
        //         bearing: 164.00
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0.25
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0
        //         }
        //     ]
        // },
        // {
        //     id: 'sperry1998',
        //     title: 'Sperry Glacier, 1998',
        //     image: '',
        //     description: 'Sperry Glacier is a glacier on the north slopes of Gunsight Mountain west of the Continental Divide in Glacier National Park in the U.S. state of Montana. Although many geologic features of Glacier National Park were formed during the much longer period of glaciation ending over 10,000 years ago, Sperry Glacier — like all the glaciers in the park today — is a product of the recent Little Ice Age, the period of cooler average temperatures starting in about the 13th century and concluding in the mid-19th century.',
        //     location: {
        //         center: [-113.75672, 48.62433],
        //         zoom: 13.68,
        //         pitch: 34.50,
        //         bearing: 106.40
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'sperry2015',
        //     title: 'Sperry Glacier, 2015',
        //     image: '',
        //     description: 'Between 1998 and 2015, Harrison Glacier lost 37 acres of surface area (about 16%).',
        //     location: {
        //         center: [-113.75672, 48.62433],
        //         zoom: 13.68,
        //         pitch: 34.50,
        //         bearing: 106.40
        //     },
        //     onChapterEnter: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0.25
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //             layer: 'gnpglaciers-2015',
        //             opacity: 0
        //         }
        //     ]
        //  }
    ]
};
