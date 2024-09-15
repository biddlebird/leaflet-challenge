// Initializing the map
const map = L.map('map').setView([37.7749, -122.4194], 2);  // Centered on the world

// Title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Fetching the data
const url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

fetch(url)
    .then(Response => Response.json())
    .then(data => {
       // marker size based in earthquake magnitude
       function markerSize(magnitude) {
        return magnitude * 3;
       }

       // color based on depth 
       function markerColor(depth) {
         return depth > 90 ? '#ff5f65' :
                depth > 70 ? '#fca35d' :
                depth > 50 ? '#fdb72a' :
                depth > 30 ? '#f7db11' :
                depth > 10 ? '#dcf400' :
                             '#a3f600';
        }

        // marker for each earthquake using a loop
        data.features.forEach(feature => {
            const [lon, lat, depth] = feature.geometry.coordinates;
            const magnitude = feature.properties.mag; 
            const place = feature.properties.place;

            // create circle
            L.circleMarker([lat, lon], {
                radius: markerSize(magnitude), // size based on magnitude
                fillColor: markerColor(depth), // color based on depth
                color: "#000",                 // border color
                weight: 1, 
                opacity: 1,
                fillOpacity: 0.8
            })

            // popup with map details
            .bindPopup(`<h3>${place}</h3><hr><p>Magnitude: ${magnitude}</p><p>Depth: ${depth} km</p>`)  // Popup with details
            .addTo(map);
        });
    })
    .catch(error => console.error('Error fetching data:', error));


    // adding legend to the map
    const legend = L.control({ position: 'bottomright' });

    legend.onAdd = function () {
        const div = L.DomUtil.create('div', 'info legend');
        const depths = [0, 10, 30, 50, 70, 90];
        const colors = [
            '#a3f600',
            '#dcf400',
            '#f7db11',
            '#fdb72a',
            '#fca35d',
            '#ff5f65'
        ];
    
        // Loop through the intervals and generate labels with colored squares
        for (let i = 0; i < depths.length; i++) {
            div.innerHTML +=
                '<i style="background:' + colors[i] + '"></i> ' +
                depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
        }
    
        return div;
    };

    legend.addTo(map);



// Tectonic Plates Data
const tectonicPlatesURL = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json";

// fetch data
fetch(tectonicPlatesURL)
    .then(Response => Response.json())
    .then(plateData => {
        L.geoJSON(plateData, {
            style: {
                color: "orange",  // color for tectonic plate boundaries
                weight: 2
            }
        }).addTo(map);
    })
    .catch(error => console.error('Error fetching tectonic plates data:', error));

