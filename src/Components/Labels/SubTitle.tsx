
interface SubTitleLabelProps {
  children: React.ReactNode,
  style?: React.CSSProperties
}

const SubTitleLabel = ({ children, style } : SubTitleLabelProps) => {
  return (
    <div className="text-[0.6rem] text-black font-light" style={style!}>
      {children}
    </div>

  )
}

export default SubTitleLabel
