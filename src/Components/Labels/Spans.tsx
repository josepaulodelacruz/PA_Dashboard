import { useTheme } from "@mui/material/styles";

const SpanTheme = () => {
  const theme = useTheme()
  const { dark, text } = theme.palette as { gradients?: any, dark?: any, text?: any }

  const textColor = dark.main
  const subTextColor = text.main

  return {textColor: textColor, subTextColor: subTextColor}
}

const MainSpan = () => {

  const textTheme = SpanTheme()

  return (
    <h6 className='text-[1rem] font-bold' style={{ color: textTheme.textColor }} >
      Websites Views
    </h6>
  )
}

const SubSpan = () => {
  const textTheme = SpanTheme()
  return (
    <span className='text-[0.70rem] font-light' style={{ color: textTheme.subTextColor }} >
      Last Campaign Performance
    </span>
  )

}

export { MainSpan, SubSpan }


