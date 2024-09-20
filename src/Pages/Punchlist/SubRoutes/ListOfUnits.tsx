
interface ListOfUnitsProps {
  type: 'WITHIN_WARRANTY'|'BEYOND_WARRANTY'
}


const ListOfUnits: React.FC<ListOfUnitsProps> = ({type}) => {
  console.log(type)
  return (
    <div>
      List of units
    </div>
  ) 
}

export default ListOfUnits
