import { useState, useEffect } from 'react'
import DashboardLayout from "@/Layouts/DashboardLayout";
import { MapContainer, TileLayer } from 'react-leaflet'
import GeoJsonComponent from "./Components/GeoJsonComponent";
import "leaflet/dist/leaflet.css";
import useScroll from "@/Hooks/useScroll"
import SiteProjectSectionComponent from './Components/SiteProjectSectionComponent'
import { NavLink } from 'react-router-dom';
import useSearch from "@/Hooks/Search/useSearchNavbar"
import { geojsonData } from '@/Constants/GeoJson'

const MapPage = () => {
  const [siteProject, setSiteProject] = useState("");
  const [selectedPosition, setSelectedPositiopn] = useState();
  const position = [14.283487045004009, 121.13838586162709];
  const { onTriggeredScrollingToBottom } = useScroll()
  const [isLoading, setIsLoading] = useState(false)
  const { search } = useSearch()

  const _handleSelectSiteProject = async (data, index) => {
    console.log(data)
    console.log(data.properties)
    // setIsLoading(true)
    // onTriggeredScrollingToBottom()
    // await new Promise(resolve => setTimeout(resolve, 5000))
    // setIsLoading(false)
  }

  return (
    <DashboardLayout>

      <div
        className="block bg-white mt-8 rounded-md pb-10 shadow-sm">

        <NavLink
          viewTransition
          style={{ viewTransitionName: 'main' }}
          to={null}
          className="relative h-[600px] flex flex-grow shadow-2xl ml-4 mr-4 mt-4 top-[-40px] rounded-lg" >

          <MapContainer
            center={position}
            zoom={16}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}

            className="rounded-lg"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            {
              geojsonData.map((data, index) => (
                  <GeoJsonComponent
                    search={search}
                    onClick={(a) => _handleSelectSiteProject(a, index)}
                    key={index}
                    data={data}/>
                ))
            }

          </MapContainer>

        </NavLink>

        <SiteProjectSectionComponent
          isLoading={isLoading} />

      </div>


    </DashboardLayout>

  )
}

export default MapPage;

