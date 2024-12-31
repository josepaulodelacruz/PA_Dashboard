import { MapContainer, TileLayer } from 'react-leaflet'
import DashboardLayout from "@/Layouts/DashboardLayout";
import GeoJsonComponent from "./Components/GeoJsonComponent";
import Navbar from '@/Components/Navbar'
import { MainSpan } from "@/Components/Labels/Spans"
import { useNavigate } from 'react-router-dom'


const ViewPlotPage = () => {
  const navigate = useNavigate()
  const position = [14.283487045004009, 121.13838586162709];
  return (
    <div
      style={{
        viewTransitionName: 'main',
      }}
      className="flex flex-col h-screen bg-gray-200 shadow-md">

      <div className='absolute rounded-md top-10 left-[50px] bg-white w-[45%] z-[500] p-2'>
        <div className='flex flex-row items-center justify-between'>
          <div className='flex flex-col'>
            <MainSpan>Plot</MainSpan>
            <div className='flex flex-row text-sm'>
              <a href={null} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>Map</a>
              <span>/</span>
              <span>Plot</span>
            </div>

          </div>
          <MainSpan>Search</MainSpan>

        </div>




      </div>

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
        <GeoJsonComponent />

      </MapContainer>


    </div>
  )
}

export default ViewPlotPage
