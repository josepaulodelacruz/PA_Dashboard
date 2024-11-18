import { PrintLabel, SectionLabel } from "./PrintLabel"
import { ChecklistUnit } from "@/Types"
import ChecklistPrint from '@/assets/img/PMDMTSWeb.cl_PAProperties.png'

interface ChecklistUnitInfoColumnProps {
  unit: ChecklistUnit
}

const ChecklistUnitInfoColumn = ({
  unit
}: ChecklistUnitInfoColumnProps) => {
  const date = new Date(Date.parse(unit.date_today)) 
  const formattedDateToday = date.toLocaleDateString(('en-US'))
  const const_warranty_date = new Date(Date.parse(unit.const_warranty)) 
  const formattedConstWarrantyDate = const_warranty_date.toLocaleDateString(('en-US'))

  return (
    <section className="col-span-2 bg-white flex flex-col ">
      <div className="h-[65px] bg-white flex my-1 justify-center items-center">
        <img src={ChecklistPrint} style={{
          objectFit: 'contain',
          width: '100%',
          height: '100%'
        }} />
      </div>

      <div className="h-full flex-col flex ">
        {/*START CMD TO PMD SECTION*/}
        <div className="h-[45px] w-full bg-black flex flex-col justify-center items-center">
          <span className="text-white text-[0.70rem] font-semibold text-center">UNIT INSPECTION REPORT</span>
          <span className="text-white text-[0.60rem] font-light text-center">CMD TO PMD</span>
        </div>

        <div className="border flex items-start flex-col bg-white">
          <PrintLabel title="DATE TODAY:" value={formattedDateToday} />
          <PrintLabel title="PROJECT" value={unit.project} />

          <div className="flex flex-row w-full">
            <PrintLabel title="BLOCK" value={unit.block} />
            <PrintLabel title="LOT" value={unit.lot} />
          </div>

          <div className="flex flex-row w-full border border-black items-center">
            <span className="text-[0.60rem] whitespace-nowrap">HOUSE MODEL: </span>
            <span className="flex text-[0.60rem] font-bold justify-center items-center w-full">{unit.model}</span>
          </div>

          <PrintLabel title="ENGINEER-IN-CHARGE:" value={unit.eic} />
          <PrintLabel title="CONTRACTOR" value={unit.contractor} />

        </div>
        {/*END CMD TO PMD SECTION*/}

        {/*START PMD'S ACCEPTANCE*/}
        <SectionLabel title="PMD'S ACCEPTANCE" />

        <PrintLabel title="PROPERTY ADMIN" value={unit.prop_admin} />
        <PrintLabel title="DATE TODAY: " value={formattedDateToday} />
        <PrintLabel title={`CONSTRUCTION WARRANTY WILL EXPIRE ON: `} value={formattedConstWarrantyDate} isTitleCentered />
        {/*END PMD'S ACCEPTANCE*/}


        {/*START PMD'S PUNCHLIST*/}
        <SectionLabel title="PMD'S PUNCHLIST" />

        <PrintLabel title="ACKNOWLEDGED BY:"
          value={unit.ack_by}
          bottomTitle={
            <span className="text-[0.40rem] text-center">ENGINEER-IN-CHARGE</span>
          } />

        <PrintLabel title="DATE RECEIVED: " value="01/01/1900" /> {/*END PMD'S PUNCHLIST*/}

        {/*START PUNCHLIST COMPLETION COMMITMENT DATE*/}
        <SectionLabel title="PUNCHLIST COMPLETION COMMITMENT DATE" />

        <PrintLabel title="The unit repair will be completed by: " value="01/01/1900" />

        <PrintLabel title="Certified by: " bottomTitle={
          <span className="text-[0.40rem] text-center font-bold">ENGINEER-IN-CHARGE</span>
        } />

        {/*END PUNCHLIST COMPLETION COMMITMENT DATE*/}




      </div>

    </section>

  )
}

export default ChecklistUnitInfoColumn
