import { RouteModel } from "@/Types";
import { NavLink } from "react-router-dom";
import ButtonBase from '@mui/material/ButtonBase'
import DropdownIcon from '@mui/icons-material/ExpandMore'

interface CollaspibleNavProps {
  item: RouteModel,
  onClick?: () => void,
  isOpen: boolean
}


const CollapsibleNav = ({ item, onClick, isOpen }: CollaspibleNavProps) => {

  //let backgroundValue = "#006442";
  let backgroundValue = '#00494B'

  const _isRouteHighlighted = (route: string) => {
    const modifiedString = route.replace(/^\/home\//, "").toLowerCase()
    const comparingString = location.pathname.replace(/^\/home\//, "").toLowerCase()
    if (comparingString.includes(modifiedString)) {
      return true
    }
    return false
  }

  return (
    <div
      key={item.key}
      className="flex-col py-[0.5rem] px-[0.025rem] my-[0.09375rem] mx-[1rem] mb-2 flex  border-stone-100 rounded-[0.375rem] relative overflow-hidden"
    >
      <div
        onClick={onClick!}
        className="h-full flex"
        style={{
          transition: 'background 0.3 ease',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: "ellipsis"
        }}
      >
        <ButtonBase className="h-[40px] rounded-sm flex flex-grow" style={{ padding: '0 0.925rem' }}>
          <div className="flex flex-row ">
            {item.icon}
            <span
              style={{
                fontSize: '0.875rem',
                transform: isOpen ? 'translateX(0px)' : 'translateX(-10px)',
                opacity: isOpen ? 1 : 0,
                transition: 'transform 0.3s ease, opacity 0.3s ease',
              }}
              className="text-white font-normal ml-2 text-sm">{item.name}</span>
          </div>
          <DropdownIcon fontSize="small" sx={{ color: '#fff', ml: 'auto' }} />
        </ButtonBase>
      </div>

      <div
        className={`transition-max-height duration-500 ${item.isCollapsible ? 'max-h-[500px]' : 'max-h-0'
          } overflow-hidden`}
      >
        <div className="flex flex-col">
          {
            item.items?.map((item_route) => (
              <NavLink
                key={item_route.key}
                to={item_route.route}
              >
                <div className="flex px-[0.9rem] py-[0.5rem] rounded-[0.375rem] "
                  style={{
                    background: _isRouteHighlighted(item_route.route) ? backgroundValue  : 'transparent',
                    transition: 'background 0.3s ease',
                    whiteSpace: 'nowrap', // Prevent text wrapping
                    overflow: 'hidden',   // Hide overflowing text
                    textOverflow: 'ellipsis', // Add ellipsis for overflowing text
                  }}
                >
                  <div className='py-[0.25rem] flex items-center'>
                    {item_route.icon}
                    <span className='text-white font-normal ml-4'
                      style={{
                        fontSize: '0.875rem',
                        transform: isOpen ? 'translateX(0px)' : 'translateX(-10px)',
                        opacity: isOpen ? 1 : 0,
                        transition: 'transform 0.3s ease, opacity 0.3s ease',
                      }}
                    >
                      {item_route.name}
                    </span>
                  </div>

                </div>

              </NavLink>
            ))
          }
        </div>
      </div>
    </div>
  )

}

export default CollapsibleNav
