import TableContainer from "@/Components/Table/TableContainer"
import { TableRow } from "@mui/material"
import { TableHeaderLabel } from "@/Components/Table/TableLabel"
import { useNavigate } from 'react-router-dom';
import StringRoutes from "@/Constants/stringRoutes";
import useFetchProjects from "@/Hooks/Projects/useFetchProjects";
import '@/index.css'
import { SubSpan } from "@/Components/Labels/Spans";
import Chip from '@/Components/Chip'
import BorderedButton from '@/Components/Button/BorderedButton'
import PrimaryButton from "@/Components/Button/PrimaryButton";
import { useEffect, useState } from "react";
import { Project } from "@/Types";
import SubTitleLabel from "@/Components/Labels/SubTitle";

const HomePage = () => {
  const navigate = useNavigate();
  const { data, isError, isSuccess, error } = useFetchProjects(true)
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
          <TableRow>
            <TableHeaderLabel title="ID" />
            <TableHeaderLabel title="GROUP" />
            <TableHeaderLabel title="DESCRIPTION" />
            <TableHeaderLabel title="MODELS" />
            <TableHeaderLabel title="HOUSETYPES" />
            <TableHeaderLabel title="ACTION" />

          </TableRow>
        }
      >
        {
          projects.map((project) => (
            <RowComponent 
              handleViewProjet={(project: Project) => _handleViewProject(project)}
              key={project.id} project={project}/>
          ))
        }
      </TableContainer>
    </div>
  );
};

const RowComponent = (props: any & Project) => {
  const { project } = props;
  return <TableRow className="border-b">
    <td className="column-header">
      <SubSpan>{project.id}</SubSpan>
    </td>
    <td className="column-header">
      <SubTitleLabel>{project.description}</SubTitleLabel>
    </td>
    <td className="column-header">
      <SubSpan>{project.description}</SubSpan>
    </td>
    <td className="column-header w-[250px]">
      <Chip />
      <Chip />
      <Chip />
    </td>
    <td className="column-header flex-wrap w-[200px]">
      <Chip />
    </td>

    <td className="column-header">

      <PrimaryButton onClick={() => props.handleViewProjet(project)}>
        <span className="text-xs font-light">View</span>
      </PrimaryButton>
    </td>

  </TableRow>

}

export default HomePage;
