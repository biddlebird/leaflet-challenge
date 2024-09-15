# Earthquake and Tectonic Plate Visualization

## Overview

This project visualizes earthquake data from the past week using Leaflet.js, providing an interactive map to explore recent seismic activity. It plots earthquake data, reflecting the magnitude and depth of each event, and includes optional tectonic plate boundaries to illustrate the relationship between tectonic plates and seismic activity.

## Features

- **Interactive Map**: Displays earthquake data with markers sized by magnitude and colored by depth.
- **Popups**: Provides detailed information about each earthquake, including location, magnitude, and depth.
- **Legend**: A color-coded legend explains the depth ranges represented on the map.
- **Tectonic Plate Boundaries (Optional)**: Visualizes tectonic plate boundaries to show their relationship with seismic activity.

## Technologies Used

- **Leaflet.js**: JavaScript library for interactive maps.
- **HTML/CSS**: For map layout and styling.
- **JavaScript**: For data fetching, processing, and visualization.
- **GeoJSON**: Format for earthquake and tectonic plate data.

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, etc.)
- An internet connection to fetch live data.

### Installation

1. Clone this repository:
    ```bash
    git clone https://github.com/biddlebird/leaflet-challenge.git
    ```
2. Navigate to the project directory:
    ```bash
    cd leaflet-challenge
    ```

3. Open `index.html` in your preferred web browser.

### Usage

1. **View Earthquakes**: The map displays earthquakes from the past week. Each marker represents an earthquake with its size corresponding to magnitude and color representing depth.
2. **Interactive Details**: Click on any marker to view detailed information about the earthquake.
3. **Legend**: Use the legend to understand the color coding of earthquake depths.
4. **Optional Tectonic Plates**: If included, view tectonic plate boundaries to see their relationship with earthquake activity.

## Additional Information

- **Data Source**:
  - Earthquake Data: [USGS Earthquake Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)
  - Tectonic Plate Data: [Tectonic Plates GeoJSON](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)

