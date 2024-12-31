import BorderedButton from '@/Components/Button/BorderedButton';
import { MainSpan, SubSpan } from '@/Components/Labels/Spans.tsx'
import { NavLink, useNavigate } from "react-router-dom"
import StringRoutes from "@/Constants/stringRoutes"
import '../index.css'


const SiteProjectSectionComponent = ({ isLoading = false, onVisit = null }) => {
  const navigate = useNavigate()

  const SiteProjectFields = ({ label, value, values = [], loading }) => {
    return (
      <div className="flex-grow">
        <SubSpan>{label}</SubSpan>
        <div className='border bg-gray-100 shadow-sm'>
          {loading ? (
            <div className="shimmer h-10 w-full"></div>
          ) : (
            values.length <= 0 ? (
              <MainSpan style={{ padding: '0.5rem' }}>{value}</MainSpan>
            ) : (
              <div className="flex flex-col">
                {values.map((val) => {
                  let index = values.indexOf(val);
                  return <SubSpan key={val}><strong>{index + 1}</strong>. {val}</SubSpan>
                })}
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="px-4 relative -top-5">
      <div className='flex flex-row justify-between items-center'>
        <div className='flex flex-col'>
          <MainSpan>Saint Joseph Village 6</MainSpan>
          <SubSpan>Brgy. Butong, Cabuyao City, Laguna</SubSpan>
        </div>
        {

          <NavLink
            viewTransition
            to={StringRoutes.view_map_plot}
          >
            <BorderedButton >VISIT</BorderedButton>
          </NavLink>
        }
      </div>

      <div className='grid grid-cols-12 pt-2'>

        <div
          className='bg-gray-200 col-span-2 h-[150px] w-full'>
          logo here
        </div>

        <div className='col-span-10 px-5'>
          <SiteProjectFields
            label="Developer:"
            value="P.A Properties Development Corporation"
            loading={isLoading}
          />
          <div className='flex flex-row gap-4'>
            <SiteProjectFields
              label="Project Head:"
              value="Dela Cruz, Jose Paulo"
              loading={isLoading}
            />
            <SiteProjectFields
              label="Project Engineer:"
              value="Dela Cruz, Jose Paulo"
              loading={isLoading}
            />
          </div>

          <SiteProjectFields
            label="CMD:"
            value="Dela Cruz, Jose Paulo"
            loading={isLoading}
          />

          <SiteProjectFields
            label="PMD:"
            value="Dela Cruz, Jose Paulo"
            loading={isLoading}
          />

          <div className='flex flex-row gap-4'>
            <SiteProjectFields
              label="Phases:"
              values={[
                "St. Joseph Village 6 and old projects",
                "St. Joseph Village 6 Phase 1",
                "St. Joseph Village 6 Phase 2",
                "St. Joseph Village 6 Phase 3",
                "St. Joseph Village 6 Phase 4",
                "St. Joseph Village 6 Phase 1A",
                "St. Joseph Village 6 Phase 2A",
              ]}
              loading={isLoading}
            />
            <SiteProjectFields
              label="Models:"
              values={[
                "Havanna",
                "Mahogany",
                "Marimar 1"
              ]}
              loading={isLoading}
            />
          </div>

          <div className='flex flex-row gap-4'>
            <SiteProjectFields
              label="Conractors"
              values={[
                "PA Builders",
              ]}
              loading={isLoading}
            />

            <SiteProjectFields
              label="Engineers"
              values={[
                "Engr. Cruz",
                "Engr. John",
                "Engr. Doe"
              ]}
              loading={isLoading}
            />

          </div>


        </div>
      </div>
    </section>

  )
}

export default SiteProjectSectionComponent
