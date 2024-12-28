import { useState } from 'react'
import DashboardLayout from "@/Layouts/DashboardLayout";
import { MainSpan, SubSpan } from '@/Components/Labels/Spans.tsx'
import { MapContainer, TileLayer } from 'react-leaflet'
import GeoJsonComponent from "./Components/GeoJsonComponent";
import BorderedButton from '../../Components/Button/BorderedButton';
import "leaflet/dist/leaflet.css";

const MapPage = () => {
  const [siteProject, setSiteProject] = useState()
  const position = [14.283487045004009, 121.13838586162709];

  const SiteProjectFields = ({ label, value, values = [] }) => {
    return (
      <div className='grow'>
        <SubSpan>{label}</SubSpan>
        <div className='border p-2 bg-gray-100 shadow-sm'>
          {
            values.length <= 0 ?
              <MainSpan>{value}</MainSpan> :
              <div class="flex flex-col">
                {
                  values.map((val) => (
                    <SubSpan>{val}</SubSpan>
                  ))
                }
              </div>

          }
        </div>
      </div>
    )
  }

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
            <GeoJsonComponent />

          </MapContainer>

        </div>
        <section className="px-4 relative -top-5">
          <div className='flex flex-row justify-between items-center'>
            <div className='flex flex-col'>
              <MainSpan>Saint Joseph Village 6</MainSpan>
              <SubSpan>Brgy. Butong, Cabuyao City, Laguna</SubSpan>
            </div>
            <BorderedButton>VISIT</BorderedButton>
          </div>

          <div className='grid grid-cols-12 pt-2'>

            <div style={{ backgroundColor: "#00595c" }} className='col-span-2 h-[150px] w-full'>
              logo here
            </div>

            <div className='col-span-10 px-5'>
              <SiteProjectFields
                label="Developer"
                value="P.A Properties Development Corporation"
              />
              <div className='flex flex-row gap-4'>
                <SiteProjectFields
                  label="Project Head"
                  value="Dela Cruz, Jose Paulo"
                />
                <SiteProjectFields
                  label="Project Engineer"
                  value="Dela Cruz, Jose Paulo"
                />
              </div>

              <SiteProjectFields
                label="CMD"
                value="Dela Cruz, Jose Paulo"
              />

              <SiteProjectFields
                label="PMD"
                value="Dela Cruz, Jose Paulo"
              />

              <div className='flex flex-row gap-4'>
                <SiteProjectFields
                  label="Phases"
                  values={[
                    "St. Joseph Village 6 and old projects",
                    "St. Joseph Village 6 Phase 1",
                    "St. Joseph Village 6 Phase 2",
                    "St. Joseph Village 6 Phase 3",
                    "St. Joseph Village 6 Phase 4",
                    "St. Joseph Village 6 Phase 1A",
                    "St. Joseph Village 6 Phase 2A",
                  ]}
                />
                <SiteProjectFields
                  label="Models"
                  values={[
                    "Havanna",
                    "Mahogany",
                    "Marimar 1"
                  ]}
                />
              </div>


            </div>
          </div>
        </section>

      </div>
    </DashboardLayout>

  )
}

export default MapPage;

