import DashboardLayout from "@/Layouts/DashboardLayout";
import { MainSpan } from '@/Components/Labels/Spans.tsx'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

const geojsonData = {
  type: "FeatureCollection",
  name: "test",
  crs: {
    type: "name",
    properties: { name: "urn:ogc:def:crs:OGC:1.3:CRS84" },
  },
  features: [
    {
      type: "Feature",
      properties: { fid: 1 },
      geometry: {
        type: "MultiPolygon",
        coordinates: [
          [
            [
              [121.139842731552108, 14.286324727799521],
              [121.139341181789902, 14.286758221771338],
              [121.134257907172668, 14.28396020052479],
              [121.134718790738006, 14.283080064583006],
              [121.13565411326752, 14.283500428447281],
              [121.135870999651232, 14.283185155622688],
              [121.137687423114443, 14.284144109092782],
              [121.137944975695021, 14.283986473186566],
              [121.137809421705242, 14.283868246184431],
              [121.137972086492994, 14.283644928344289],
              [121.133973243794159, 14.281635057811316],
              [121.134135908581897, 14.281227826954574],
              [121.134745901535965, 14.281490556623902],
              [121.134922121722695, 14.280741776257871],
              [121.135952332045093, 14.281017642998311],
              [121.138514302452151, 14.281924059907832],
              [121.140561167697982, 14.282607154297184],
              [121.140940718869402, 14.280860004902317],
              [121.143855129649936, 14.281490556623902],
              [121.142553811347909, 14.28286988235643],
              [121.141957373792835, 14.282672836340742],
              [121.141726932010229, 14.283106337347524],
              [121.140791609480658, 14.282817336769112],
              [121.140439169107196, 14.283710610084981],
              [121.141293159242878, 14.28396020052479],
              [121.140140950329652, 14.284800924180137],
              [121.138731188835806, 14.284433107967397],
              [121.138310971467462, 14.285378919871189],
              [121.139991840940851, 14.286009458931805],
              [121.139842731552108, 14.286324727799521],
            ],
          ],
        ],
      },
    },
  ],
};


const MapPage = () => {
  
  const position = [14.286324727799521, 121.139842731552108, 10.53];
  return (
    <DashboardLayout>

      <div className="block bg-white mt-8 rounded-md pb-10 shadow-sm">

        <div className="relative h-[600px] flex flex-grow shadow-2xl ml-4 mr-4 mt-4 top-[-40px] rounded-lg" >

          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
            className="rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <GeoJSON onClick={() => console.log("click to view plots")} data={geojsonData} style={{ color: "#00595c", weight: 10 }} />
          </MapContainer>

        </div>

        <section className="px-4 relative -top-5">
          <MainSpan>Main</MainSpan>
        </section>

      </div>
    </DashboardLayout>

  )
}

export default MapPage;

