
interface ListOfUnitsProps {
  type: 'WITHIN_WARRANTY'|'BEYOND_WARRANTY'
}


const ListOfUnits: React.FC<ListOfUnitsProps> = ({type}) => {
  return (
    <div>
      List of units
    </div>
  ) 
}

export default ListOfUnits
