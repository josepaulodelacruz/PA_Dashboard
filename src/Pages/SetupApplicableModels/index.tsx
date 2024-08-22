import DashboardLayout from "@/Layouts/DashboardLayout"
import { useOutlet, useLocation } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { useRef } from 'react'
import '@/index.css'

const SetupApplicableModels = () => {
  const currentOutlet = useOutlet();
  const location = useLocation()
  const ref = useRef(null)

  return (
    <DashboardLayout>
      <SwitchTransition
      >
        <CSSTransition
          key={location.pathname}
          classNames='fade'
          unmountOnExit
          nodeRef={ref}
          timeout={300}>
          <div ref={ref}>
            {currentOutlet}
          </div>
        </CSSTransition>

      </SwitchTransition>
    </DashboardLayout>
  )

}

export default SetupApplicableModels;
