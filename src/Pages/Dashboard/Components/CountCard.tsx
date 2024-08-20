
import { useTheme } from "@mui/material/styles"
import Paper from '@mui/material/Paper'
import React from 'react'
import '../index.css'

interface CountCardProps {
  cardLogo?: {title: string, icon: React.ReactNode, gradientColor: string},
  percentage?: { count: number, timeline: string }
  total?: string,
}

const CountCard = ({ cardLogo, total }: CountCardProps) => {
  const theme = useTheme() as any

  const textColor = theme.palette.secondary.main
  const gradient = cardLogo?.gradientColor

  const CardLogo = () =>
    <div style={{background: gradient}} className="ml-3 w-[4rem] h-[4rem] bg-white rounded-lg shadow-xl flex items-center justify-center relative top-[-1] left-2 z-10" >
      {cardLogo?.icon}
    </div>

  const CardTitle = () =>
    <div className="flex flex-col items-end flex-1">
      <span className="text-sm font-light" style={{ color: textColor }}>{cardLogo?.title}</span>
      <h4 className="font-bold text-xl">{total!}</h4>
    </div>


  return (
    <div className="h-[150px] relative">
      <CardLogo />
      <Paper 
        className="absolute p-4 top-5 flex flex-col h-[130px] self-end w-full bg-white "
        sx={{borderRadius: '0.75rem', boxShadow: 'rgba(0, 0, 0, 0.1) 0rem 0.25rem 0.375rem -0.0625rem, rgba(0, 0, 0, 0.06) 0rem 0.125rem 0.25rem -0.0625rem'}}
        
        elevation={0}>
        <CardTitle />
        <hr className="lineDivider"/>
        <div style={{color: textColor}}>
          <span className="font-bold text-green-400 text-sm">+55%</span>
          <span
            className="font-light text-sm"
            style={{ color: textColor, textTransform: 'none', letterSpacing: '0.02857em', verticalAlign: 'unset' }}> than last week</span>
        </div>
      </Paper>
    </div>
  )
}

export default CountCard
