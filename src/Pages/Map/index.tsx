import { MainSpan, SubSpan } from "@/Components/Labels/Spans";
import DashboardLayout from "@/Layouts/DashboardLayout";
import { Paper } from "@mui/material";

const MapPage = () => {
  return (
    <DashboardLayout>

      <div className="h-[500px] relative w-full flex justify-center mb-10">

        <div className='h-[93%] shadow-md relative top-[-70] z-10 rounded-xl w-[98%] bg-yellow-50' >
        </div>
        <Paper className="absolute px-7 pb-5 items-start mt-10 bg-white flex flex-col 
          justify-end w-full h-full top-0 left-0 rounded-xl shadow-md"
          sx={{ borderRadius: '0.75rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem' }}>
          <MainSpan>MAP</MainSpan>
          <SubSpan>Sub Title</SubSpan>
        </Paper>

      </div>



    </DashboardLayout>

  )
}

export default MapPage;

