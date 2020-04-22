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
            id: 'Project Statement',
            title: 'Project Summary',
            image: '',
            description: 'The project seeks to analyze the level of exposure of the school facilities and highlight the current capital investment projects the New York City local government is developing to build new schools and renovate existing schools.',
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
            id: 'Problem',
            title: 'Problem Statement',
            image: '',
            description: 'Natural hazards cause direct impact to students and teachers, damaging and destroying the school infrastructure. In the aftermath of a disaster, the education service is disruptive, impacting in the school operations, learning and teaching processes.',
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
            image: 'img/bar.png',
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





var layerTypes = {
    'fill': ['fill-opacity'],
    'line': ['line-opacity'],
    'circle': ['circle-opacity', 'circle-stroke-opacity'],
    'symbol': ['icon-opacity', 'text-opacity'],
    'raster': ['raster-opacity'],
    'fill-extrusion': ['fill-extrusion-opacity']
}

var alignments = {
    'left': 'lefty',
    'center': 'centered',
    'right': 'righty'
}

function getLayerPaintType(layer) {
    var layerType = map.getLayer(layer).type;
    return layerTypes[layerType];
}

function setLayerOpacity(layer) {
    var paintProps = getLayerPaintType(layer.layer);
    paintProps.forEach(function(prop) {
        map.setPaintProperty(layer.layer, prop, layer.opacity);
    });
}

var story = document.getElementById('story');
var features = document.createElement('div');
features.classList.add(alignments[config.alignment]);
features.setAttribute('id', 'features');

var header = document.createElement('div');

if (config.title) {
    var titleText = document.createElement('h1');
    titleText.innerText = config.title;
    header.appendChild(titleText);
}

if (config.subtitle) {
    var subtitleText = document.createElement('h2');
    subtitleText.innerText = config.subtitle;
    header.appendChild(subtitleText);
}

if (config.byline) {
    var bylineText = document.createElement('p');
    bylineText.innerText = config.byline;
    header.appendChild(bylineText);
}

if (header.innerText.length > 0) {
    header.classList.add(config.theme);
    header.setAttribute('id', 'header');
    story.appendChild(header);
}

config.chapters.forEach((record, idx) => {
    var container = document.createElement('div');
    var chapter = document.createElement('div');

    if (record.title) {
        var title = document.createElement('h3');
        title.innerText = record.title;
        chapter.appendChild(title);
    }

    if (record.image) {
        var image = new Image();
        image.src = record.image;
        chapter.appendChild(image);
    }

    if (record.description) {
        var story = document.createElement('p');
        story.innerHTML = record.description;
        chapter.appendChild(story);
    }

    container.setAttribute('id', record.id);
    container.classList.add('step');
    if (idx === 0) {
        container.classList.add('active');
    }

    chapter.classList.add(config.theme);
    container.appendChild(chapter);
    features.appendChild(container);
});

story.appendChild(features);

var footer = document.createElement('div');

if (config.footer) {
    var footerText = document.createElement('p');
    footerText.innerHTML = config.footer;
    footer.appendChild(footerText);
}

if (footer.innerText.length > 0) {
    footer.classList.add(config.theme);
    footer.setAttribute('id', 'footer');
    story.appendChild(footer);
}

mapboxgl.accessToken = config.accessToken;

const transformRequest = (url) => {
    const hasQuery = url.indexOf("?") !== -1;
    const suffix = hasQuery ? "&pluginName=journalismScrollytelling" : "?pluginName=journalismScrollytelling";
    return {
      url: url + suffix
    }
}

var map = new mapboxgl.Map({
    container: 'map',
    style: config.style,
    center: config.chapters[0].location.center,
    zoom: config.chapters[0].location.zoom,
    bearing: config.chapters[0].location.bearing,
    pitch: config.chapters[0].location.pitch,
    scrollZoom: false,
    transformRequest: transformRequest
});

var marker = new mapboxgl.Marker();
if (config.showMarkers) {
    marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// instantiate the scrollama
var scroller = scrollama();

map.on("load", function() {
    // setup the instance, pass callback functions
    scroller
    .setup({
        step: '.step',
        offset: 0.5,
        progress: true
    })
    .onStepEnter(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.add('active');
        map.flyTo(chapter.location);
        if (config.showMarkers) {
            marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
            chapter.onChapterEnter.forEach(setLayerOpacity);
        }
    })
    .onStepExit(response => {
        var chapter = config.chapters.find(chap => chap.id === response.element.id);
        response.element.classList.remove('active');
        if (chapter.onChapterExit.length > 0) {
            chapter.onChapterExit.forEach(setLayerOpacity);
        }
    });
});

// setup resize event
window.addEventListener('resize', scroller.resize);
