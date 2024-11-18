import ChecklistUnitInfoColumn from "../Components/ChecklistUnitInfoColumn"
import useGetUnitByIdMutation from "@/Hooks/UnitAcceptance/useGetUnitByIdMutation"
import { useSnackbar } from "notistack"
import { useLayoutEffect, useState, useRef } from "react"
import { useReactToPrint } from "react-to-print"
import { useSearchParams } from "react-router-dom"
import { ChecklistUnit } from "@/Types"
import DisableIcon from '@mui/icons-material/DisabledByDefault'
import PrimaryButton from "@/Components/Button/PrimaryButton"
import '../index.css'

const ChecklistForm = () => {
  const { mutateAsync: getUnitById } = useGetUnitByIdMutation()
  const [searchParams] = useSearchParams()
  const { enqueueSnackbar } = useSnackbar()
  const [unit, setUnit] = useState<ChecklistUnit>();
  const [checklistTitle, setChecklistTitle] = useState<string[]>([''])
  const contentRef = useRef<HTMLDivElement>(null)
  const handlePrint = useReactToPrint({ contentRef })

  useLayoutEffect(() => {
    _handleGetUnitById()
  }, [searchParams])

  const _handleGetUnitById = async () => {
    let id = searchParams.get('ID')
    await getUnitById({ id: id! }, {
      onSuccess: (response) => {
        console.log(response.data)
        if (response.data.length === 0) {
          enqueueSnackbar(response.errorMessage, {
            variant: 'error',
            anchorOrigin: {
              horizontal: 'right',
              vertical: 'bottom',
            },
          });
        }

        const _unit: ChecklistUnit = response.data as ChecklistUnit
        setUnit(_unit)

        let labels: string[] = [];
        _unit?.checklists?.map((checklist) => {
          if (!labels.includes(checklist.class)) {
            labels.push(checklist.class)
          }
        })
        setChecklistTitle(labels)
      },
      onError: (response) => {
        enqueueSnackbar(response.message, {
          variant: 'error',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'bottom',
          },
        });

      }
    })
  }

  return (
    <div>
      <div ref={contentRef} className="grid grid-cols-12 bg-white border-black border">

        {
          !unit ? null : <ChecklistUnitInfoColumn unit={unit} />
        }

        <div className="col-span-10">

          <div className="w-[auto] break-words overflow-hidden" style={{ columnCount: 3, columnGap: '0px', columnFill: 'auto', height: '680px' }}>

            <div className="flex flex-col bg-white flex-1 border">

              {
                checklistTitle?.map((title, index) => {
                  return (
                    <div key={index}>
                      <div className="bg-gray-400 flex justify-center">
                        <span className="text-[0.60rem] font-bold text-center ">{title}</span>
                      </div>
                      {
                        unit?.checklists?.map((checklist, subIndex) => {
                          if (checklist.class === title) {
                            let remarks = checklist.remarks === "NOT APPLICABLE" ? "N/A" : checklist.remarks
                            let isNotApplicable = checklist.remarks === "NOT APPLICABLE" ? true : false
                            return (
                              <div className="flex flex-row px-3 items-center" key={subIndex}>
                                {
                                  isNotApplicable ? <DisableIcon fontSize="small" sx={{ fontSize: '12px', color: 'gray' }} /> : <input type="checkbox" disabled checked={checklist.is_check} />
                                }
                                <span className="text-[0.40rem] pl-1 py-[0.2rem]" style={{ textDecoration: isNotApplicable ? 'line-through' : 'none', color: isNotApplicable ? 'gray' : 'inherit' }}>{checklist.item}</span>
                                <div className="flex-1 border-b pl-2 text-center text-[0.40rem]">{remarks}</div>
                              </div>
                            );
                          }
                        })
                      }
                    </div>
                  )

                })
              }
            </div>
          </div>

        </div>

      </div>

      <PrimaryButton 
        className="hide-on-print"
        onClick={() => {
        window.print()
      }} style={{ 
          float: 'right',
          padding: '0.5rem', 
          margin: '0.5rem 1rem',
        }}>
        PRINT
      </PrimaryButton>

    </div>

  )

}

export default ChecklistForm

