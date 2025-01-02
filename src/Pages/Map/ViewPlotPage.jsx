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
import TableRow from '@mui/material/TableRow'
import { flushSync } from 'react-dom';
import TableContainer from '@/Components/Table/TableContainer'

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
  const [tabValue, setTabValue] = useState("tasks")
  const [isExpanded, setIsExpanded] = useState(false)

  const _handleExpandedView = () => {
    document.startViewTransition(() => {
      flushSync(() => {
        setIsExpanded(state => !state)
      })
    })
  }

  return (
    <div
      style={{
        viewTransitionName: 'main',
      }}
      className={`group transition-all duration-1000 h-screen shadow-md grid grid-cols[100%] ease-in-out `}
    >

      {/* 1st grid START HERE*/}
      <div>
        {
          !isExpanded ?
            <BlockLotSearch
              isSideOpen={isSideOpen}
              search={search}
              onReset={onReset}
              onSideOpen={() => {
                setIsSideOpen((state) => !state)
              }}
            /> : null
        }

        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={true}
          style={{ height: "100%", width: "100%", zIndex: 0 }}
          className=''
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>'
            url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          />
          <GeoJsonComponent />
        </MapContainer>
      </div>
      {/* 1st grid END HERE*/}

      {/* 2nd grid START HERE*/}
      <div style={{ viewTransitionName: "expanded-grid", width: isExpanded ? '100%' : isSideOpen ? '450px' : 0 }} className={`overflow-auto bg-gray-200 h-full right-0 absolute duration-500`}>
        <div className='p-2'>
          <SiteProjectFields
            label="Site Project:"
            value="Saint Joseph Village 6"
            btn={<Button onClick={_handleExpandedView}>{isSideOpen ? (isExpanded ? "Minimize" : "Expand") : ""}</Button>}
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
              className='whitespace-nowrap'
              variant="fullWidth"
              value={tabValue} onChange={(_, newValue) => setTabValue(newValue)} aria-label="basic tabs example">
              <Tab value={"tasks"} label="Tasks" />
              <Tab value={"workers"} label="Workers" />
              <Tab value={"scopeOfWorks"} label="SCOPE OF WORKS" />
            </Tabs>
          </Box>

          <div className='py-2'/>

          <TableContainer
            tableTitle='Tasks'
            tableHeader={
              <TableRow>
                <th align='left' className='column-header'>Code</th>
                <th align='left' className='column-header'>Description</th>
                <th align='left' className='column-header'>Time</th>
              </TableRow>
            }
          >
          </TableContainer>
        </div>
      </div>
      {/* 2nd grid END HERE*/}
    </div>
  )
}

export default ViewPlotPage
