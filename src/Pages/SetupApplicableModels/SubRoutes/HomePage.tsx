import TableContainer from "@/Components/Table/TableContainer"
import { TableRow } from "@mui/material"
import { TableHeaderLabel } from "@/Components/Table/TableLabel"
import { useNavigate } from 'react-router-dom';
import StringRoutes from "@/Constants/stringRoutes";
import '@/index.css'
import { SubSpan } from "@/Components/Labels/Spans";
import Chip from '@/Components/Chip'
import BorderedButton from '@/Components/Button/BorderedButton'
import PrimaryButton from "@/Components/Button/PrimaryButton";
import { useEffect, useState } from "react";
import { Project } from "@/Types";
import SubTitleLabel from "@/Components/Labels/SubTitle";
import useFetchProjectsOnlyAdded from "@/Hooks/Projects/useFetchProjectOnlyAdded";

const HomePage = () => {
  const navigate = useNavigate();
  const { data, isError, isSuccess, error } = useFetchProjectsOnlyAdded()
  const [projects, setProjects] = useState<Project[]>([])

  if (isError) {
    console.error(error)
  }

  useEffect(() => {
    if (isSuccess) {
      const _projects = data?.data;
      setProjects(_projects)
    }

  }, [isSuccess])

  const handleGetProjects = async () => {
    navigate(StringRoutes.project_list)
  };

  const _handleViewProject = async (project: Project) => {
    let navpath = StringRoutes.view_project + '/' + project.id
    navigate(navpath)
  }

  return (
    <div className="flex flex-col">
      <TableContainer
        tableTitle="Projects"
        tableHeaderAction={
          <BorderedButton
            onClick={handleGetProjects}
            style={{ color: 'white', borderColor: 'white', width: '150px', paddingTop: '5px', paddingBottom: '5px' }}
          >
            Add Projects
          </BorderedButton>
        }
        tableHeader={
          <TableRow className="border-b">
            <TableHeaderLabel title="ID" />
            <TableHeaderLabel title="GROUP" />
            <TableHeaderLabel title="DESCRIPTION" />
            <TableHeaderLabel align="center" title="MODELS" />
            <TableHeaderLabel align="center" title="HOUSETYPES" />
            <TableHeaderLabel title="ACTION" />

          </TableRow>
        }
      >
        {
          projects.map((project, index) => (
            <RowComponent
              index={index}
              handleViewProjet={(project: Project) => _handleViewProject(project)}
              key={project.id} project={project} />
          ))
        }
      </TableContainer>
    </div>
  );
};

const RowComponent = (props: any & Project) => {
  const { project, index } = props;
  let rowColor = index % 2 === 1 ? '#f8f9fa' : 'transparent'
  const models: string[] = project.models ? JSON.parse(project.models) : [];
  const housetypes: string[] = project.housetypes ? JSON.parse(project.housetypes) : [];
  return <TableRow className="border-b" style={{ backgroundColor: rowColor }}>
    <td className="column-header">
      <SubSpan>{project.id}</SubSpan>
    </td>
    <td className="column-header">
      <SubTitleLabel>{project.description}</SubTitleLabel>
    </td>
    <td className="column-header">
      <SubTitleLabel>{project.description}</SubTitleLabel>
    </td>
    <td align='left' className="column-header w-[250px]">
      {
        models.map((item, index) => (
          <Chip key={index} name={item} />
        ))
      }
    </td>
    <td align='center' className="column-header flex-wrap w-[200px]">
      {
        housetypes.map((item, index) => (
          <Chip key={index} name={item}/>
        ))
      }
    </td>

    <td className="column-header">

      <PrimaryButton onClick={() => props.handleViewProjet(project)}>
        <span className="text-[0.5rem] font-light">View</span>
      </PrimaryButton>
    </td>

  </TableRow>

}

export default HomePage;
