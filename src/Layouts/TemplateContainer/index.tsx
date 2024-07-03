import Sidenav from "@/Components/Sidenav"
import Grid from "@mui/material/Grid"
import Navbar from '@/Components/Navbar'
import { Outlet } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'

const TemplateContainer = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const scrollableRef = useRef<any>(null);

  const handleScroll = () => {
    if (scrollableRef.current) {
      if (scrollableRef.current.scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }
  };

  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScroll);
      return () => {
        scrollableElement.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <Grid container >
      <Grid item md={2} xs={12} >
        <Sidenav />
      </Grid>

      <Grid ref={scrollableRef} item md={10} xs={12} style={{ height: '100vh', overflowY: 'auto' }} >
        <Navbar isScrolled={isScrolled} />
        <Outlet />
      </Grid>

    </Grid>
  )
}

export default TemplateContainer
