import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = (props) => {
  const nLat = props.latitude * -1;
  const nLong = props.longitude * -1;
  return (
    <div style={{ maxWidth: "76.5vw", margin: "auto" }}>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [nLong, nLat, 0],
          scale: 590,
        }}
      >
        <Graticule stroke="#EAEAEC" />
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#9998A3"
                stroke="#EAEAEC"
              />
            ))
          }
        </Geographies>
        <Marker coordinates={[nLong * -1, nLat * -1]}>
          <g
            fill="none"
            stroke="#FA5533"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y="-30"
            style={{
              fontFamily: "system-ui",
              fill: "#263A72",
              fontSize: "50",
              fontWeight: "bold",
            }}
          >
            {props.name}
          </text>
        </Marker>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
