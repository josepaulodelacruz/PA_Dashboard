import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import { MainSpan, SubSpan } from '@/Components/Labels/Spans'
import React, { ReactNode } from 'react'

interface ChartCardProps {
  backgroundValue: string
  title: ReactNode,
  subTitle: ReactNode,
}

const ChartCard: React.FC<ChartCardProps> = ({ backgroundValue, title, subTitle }) => {

  return (
    <Grid item md={4} xs={12}>
      <div className="h-[250px] relative w-full flex justify-center mb-10">
        <div className='h-[200px] shadow-xl relative top-[-70] z-10 rounded-xl w-11/12' style={{ background: backgroundValue }}>
        </div>
        <Paper className="absolute px-7 pb-5 items-start mt-10 bg-white flex flex-col justify-end w-full h-full top-0 left-0 rounded-xl shadow-md"
          sx={{ borderRadius: '0.75rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem' }}>
          <MainSpan>{title}</MainSpan>
          <SubSpan>{subTitle}</SubSpan>
        </Paper>
      </div>
    </Grid>
  )
}

export default ChartCard
