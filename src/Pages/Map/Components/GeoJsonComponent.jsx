import { GeoJSON, useMapEvents, Marker, Popup } from 'react-leaflet'
import { geojsonData } from '@/Constants/GeoJson'

const GeoJsonComponent = ({onClick}) => {

  const map = useMapEvents({
    click(e) {
      onClick('saint joseph 6')
    }
  })

  return (
    <>
      <GeoJSON data={geojsonData} style={{ color: "#00595c", weight: 10 }} />
      <Marker position={[14.283487045004009, 121.13838586162709]}>
        <Popup >
          Saint Joseph Village 6
        </Popup>
      </Marker>
    </>
  )
}

export default GeoJsonComponent
