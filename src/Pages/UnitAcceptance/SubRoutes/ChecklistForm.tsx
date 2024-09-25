import ChecklistUnitInfoColumn from "../Components/ChecklistUnitInfoColumn"
import useGetUnitByIdMutation from "@/Hooks/UnitAcceptance/useGetUnitByIdMutation"
import { useSnackbar } from "notistack"
import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Unit } from "@/Types/Project"


const ChecklistForm = () => {
  const { mutateAsync: getUnitById } = useGetUnitByIdMutation()
  const [searchParams] = useSearchParams()
  const { enqueueSnackbar } = useSnackbar()
  const [unit, setUnit] = useState<Unit>();

  useEffect(() => {
    _handleGetUnitById()
  }, [searchParams])

  const _handleGetUnitById = async () => {
    let id = searchParams.get('ID')
    await getUnitById({ id: id! }, {
      onSuccess: (response) => {
        if (response.data.length === 0) {
          enqueueSnackbar(response.errorMessage, {
            variant: 'error',
            anchorOrigin: {
              horizontal: 'right',
              vertical: 'bottom',
            },
          });
        }

        const _unit: Unit =  response.data[0] as Unit
        setUnit(_unit)
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
    <div className="grid grid-cols-12 bg-white">

      <ChecklistUnitInfoColumn unit={unit!} />

      <div className="col-span-4">Col 2</div>
      <div className="col-span-3 bg-blue-300">Col 3</div>
      <div className="col-span-3 bg-white">Col 4</div>

    </div>
  )

}

export default ChecklistForm

