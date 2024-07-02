import React, { useState } from 'react';
import linearGradient from '@/assets/theme/functions/linearGradient';
import { useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

interface SidenavItemProps {
  name: string;
  icon: React.ReactNode;
  route: string;
}

const SidenavItem = ({ icon, name, route }: SidenavItemProps) => {
  const location = useLocation();
  const theme = useTheme();
  const { gradients } = theme.palette as { gradients?: any };

  const [isHovered, setIsHovered] = useState(false);

  let backgroundValue = linearGradient(gradients.info.main, gradients.info.state);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className='py-[0.5rem] px-[0.925rem] my-[0.09375rem] mx-[1rem] mb-2 flex flex-row border-stone-100 rounded-[0.375rem]'
      style={{
        background: route === location.pathname ? backgroundValue : isHovered ? 'rgba(255, 255, 255, 0.25)' : 'transparent',
        transition: 'background 0.3s ease'
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='p-[0.025rem]'>
        {icon}
        <span className='text-white font-normal ' style={{ fontSize: '0.875rem' }}>{name}</span>
      </div>
    </div>
  );
};

export default SidenavItem;
