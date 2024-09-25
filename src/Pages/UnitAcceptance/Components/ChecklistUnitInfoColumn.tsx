import { useSearchParams } from "react-router-dom"
import { PrintLabel, SectionLabel } from "./PrintLabel"
import { useLayoutEffect, useState } from 'react';
import { Unit } from "@/Types/Project";

interface ChecklistUnitInfoColumn {
  unit: Unit
}
 
const ChecklistUnitInfoColumn = ({
  unit
} : ChecklistUnitInfoColumn) => {
  const [searchParams] = useSearchParams();
  const [queryParams, setQueryParams] = useState<{
    id: string | null,
    pmd: string | null,
    cmd: string | null,
    warranty_expire: string | null 
  }>()

  useLayoutEffect(() => {
    setQueryParams({
      id: searchParams.get('ID'),
      pmd: searchParams.get('pmd'),
      cmd: searchParams.get('cmd'),
      warranty_expire: searchParams.get('warranty_expire')
    })

  }, [searchParams])

  return (
    <section className="col-span-2 bg-white">
      <div className="h-[45px] w-full bg-gray-100 flex justify-center items-center">
        <span>PALOGO</span>
      </div>

      {/*START CMD TO PMD SECTION*/}
      <div className="h-[45px] w-full bg-black flex flex-col justify-center items-center">
        <span className="text-white text-[0.70rem] font-semibold text-center">UNIT INSPECTION REPORT</span>
        <span className="text-white text-[0.60rem] font-light text-center">CMD TO PMD</span>
      </div>

      <div className="border flex items-start flex-col bg-white">
        <PrintLabel title="DATE TODAY:" value="Oct 21, 1995" />
        <PrintLabel title="PROJECT" value={"ST. Joseph"} />

        <div className="flex flex-row w-full">
          <PrintLabel title="BLOCK" value="024" />
          <PrintLabel title="LOT" value="0018" />
        </div>

        <div className="flex flex-row w-full border border-black items-center">
          <span className="text-[0.60rem] whitespace-nowrap">HOUSE MODEL: </span>
          <span className="flex text-[0.60rem] font-bold justify-center items-center w-full">IRIS</span>
        </div>

        <PrintLabel title="ENGINEER-IN-CHARGE:" value={queryParams?.cmd} />
        <PrintLabel title="CONTRACTOR" value="" />

      </div>
      {/*END CMD TO PMD SECTION*/}

      {/*START PMD'S ACCEPTANCE*/}
      <SectionLabel title="PMD'S ACCEPTANCE" />

      <PrintLabel title="PROPERTY ADMIN" value={queryParams?.pmd} />
      <PrintLabel title="DATE TODAY: " value="09/24/2024" />
      <PrintLabel title={`CONSTRUCTION WARRANTY WILL EXPIRE ON: `} value={queryParams?.warranty_expire} isTitleCentered />
      {/*END PMD'S ACCEPTANCE*/}


      {/*START PMD'S PUNCHLIST*/}
      <SectionLabel title="PMD'S PUNCHLIST" />

      <PrintLabel title="ACKNOWLEDGED BY:"
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


    </section>

  )
}

export default ChecklistUnitInfoColumn
