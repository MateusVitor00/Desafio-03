import React, { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import Overlay from "ol/Overlay";
import { useGeographic } from "ol/proj";

//CSS
import { MapContainer, PopupContainer, PopupContent } from './styles'

const MapComponent = ({ latitude, longitude, temperature }) => {
  // Ref => Null, pois ainda não foi renderizado
  const mapRef = useRef(null);
  const popupRef = useRef(null);

  useGeographic();

  useEffect(() => {
    if (!mapRef.current) {

      mapRef.current = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new OSM(),
          }),
        ],
        view: new View({
          center: [longitude, latitude],
          zoom: 5,
        }),
      });

      // Overlay da temperatura pela OpenLayers
      popupRef.current = new Overlay({
        element: document.getElementById("popup"),
        positioning: "center",
        offset: [0, 0],
        autoPan: false,
      });

      mapRef.current.addOverlay(popupRef.current);
    } else {
      mapRef.current.getView().setCenter([longitude, latitude]);
    }

    // Posição da overlay de temperatura no mapa.
    popupRef.current.setPosition([longitude, latitude]);
    document.getElementById("popup-content").innerHTML = `${temperature}°C`;

  }, [latitude, longitude, temperature]);

  return (
    <MapContainer>
      <div id="map" style={{ width: "50%", height: "400px" }}></div>
      <PopupContainer id="popup">
        <PopupContent id="popup-content">{temperature}°C</PopupContent>
      </PopupContainer>
    </MapContainer>
  );
};

export {MapComponent};
