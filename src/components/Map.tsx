import { MapContainer, TileLayer, Marker, ZoomControl } from 'react-leaflet'
import { Icon } from 'leaflet'
import MarkerIcon from '../assets/icons/icon-location-marker.svg'

const Map = () => {
    const markerIcon = new Icon({
        iconUrl: MarkerIcon,
        iconSize: [50, 50],
        iconAnchor: [25, 50]
    })

    return (
        <div id="map">
            <MapContainer center={[41.4813203, -71.3120000]} zoom={16} scrollWheelZoom={false} zoomControl={false}>
                <ZoomControl position="topright" />
                <TileLayer
                    attribution="Jawg Maps"
                    url="https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}"
                    accessToken="tVB4e6pWcF5aF4O0GZEfhFOcXCcqMt5gMuLykDjaF3qMxW5NMswdxOKM1cz40lj0"
                />
                <Marker position={[41.4804000, -71.311000]} icon={markerIcon} />
            </MapContainer>
        </div>
    )
}

export default Map