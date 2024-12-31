import { MapContainer, TileLayer } from 'react-leaflet'
import GeoJsonComponent from "./Components/GeoJsonComponent";
import useSearchNavbar from '@/Hooks/Search/useSearchNavbar'
import BlockLotSearch from './Components/BlockLotSearch';
import { useState } from 'react';
import { MainSpan, SubSpan } from "@/Components/Labels/Spans"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'

const SiteProjectFields = ({ label, value, values = [], loading, btn = null }) => {
  return (
    <div className="flex-grow whitespace-nowrap py-1">
      <div className='flex flex-row justify-between items-center'>
        <SubSpan>{label}</SubSpan>
        {btn}
      </div>
      <div className='border bg-gray-100 shadow-sm'>
        {loading ? (
          <div className="shimmer h-10 w-full"></div>
        ) : (
          values.length <= 0 ? (
            <MainSpan style={{ padding: '0.5rem' }}>{value}</MainSpan>
          ) : (
            <div className="flex flex-col whitespace-nowrap">
              {values.map((val) => {
                let index = values.indexOf(val);
                return <SubSpan key={val}><strong>{index + 1}</strong>. {val}</SubSpan>
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
}

const ViewPlotPage = () => {
  const position = [14.283487045004009, 121.13838586162709];
  const { onSearch, search, onReset } = useSearchNavbar()
  const [isSideOpen, setIsSideOpen] = useState(false)
  const [tabValue, setTabValue] = useState("tasks");

  return (
    <div
      style={{
        viewTransitionName: 'main',
      }}
      className={`group transition-all duration-300 h-screen bg-gray-200 shadow-md grid grid-cols[100%] ease-in-out ${isSideOpen ? 'grid-cols-[auto_450px]' : 'grid-cols-[100%_0%]'}`}
    >

      <div className=''>
        <BlockLotSearch
          isSideOpen={isSideOpen}
          search={search}
          onReset={onReset}
          onSideOpen={() => {
            setIsSideOpen((state) => !state)
          }}

        />

        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%", zIndex: 0 }}

          className="rounded-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <GeoJsonComponent />

        </MapContainer>
      </div>

      <div className='overflow-auto'>

        <div className='p-2'>

          <SiteProjectFields
            label="Site Project:"
            value="Saint Joseph Village 6"
            btn={<Button>Expand</Button>}
          />

          <SiteProjectFields
            label="Address"
            value="Brgy. Butong, Cabuyao City Laguna"
          />

          <div className='flex flex-row flex-grow gap-2'>
            <SiteProjectFields
              label="BLOCK: "
              value="0024"
            />
            <SiteProjectFields
              label="LOT:"
              value="0018"
            />

            <SiteProjectFields
              label="Phase:"
              value="Annex A"
            />
          </div>

          <div className='flex flex-row gap-2'>
            <SiteProjectFields
              label="Start Date:"
              value="March 24, 2024"
            />
            <SiteProjectFields
              label="End Date:"
              value="October 21, 2024"
            />
          </div>

          <div className='flex flex-row gap-2'>
            <SiteProjectFields
              label="Contract Price"
              value="PHP 500,000"
            />
            <SiteProjectFields
              label="Percentage of Completion"
              value="85%"
            />

          </div>


          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              variant="fullWidth"
              value={tabValue} onChange={(_, newValue) => setTabValue(newValue)} aria-label="basic tabs example">
              <Tab value={"tasks"} label="Tasks" />
              <Tab value={"workers"} label="Workers" />
              <Tab value={"scopeOfWorks"} label="SCOPE OF WORKS" />
            </Tabs>

          </Box>



        </div>


      </div>

    </div>
  )
}

export default ViewPlotPage
