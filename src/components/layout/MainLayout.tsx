import Footer from "components/Footer";
import MobileNavbar from "components/MobileNavbar"
import Navbar from "components/Navbar"
import React, { useCallback, useState } from "react"
import { useEffect } from "react";
import styled from "styled-components"

const MainDiv = styled.div``;

const MainLayout: React.FC = ({ children }) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  const handleDismissMobileMenu = useCallback(() => {
    setMobileMenu(false)
  }, [setMobileMenu])

  const handlePresentMobileMenu = useCallback(() => {
    setMobileMenu(true)
  }, [setMobileMenu]);

  /**
   * Mobile sidebar open then hide body scrolling
   */
  useEffect (()=>{
    mobileMenu ?
    document.getElementsByTagName('body')[0].style.overflow = "hidden" :
    document.getElementsByTagName('body')[0].style.overflow = "auto"
  },[mobileMenu]);

  return (
    <>
      <MainDiv className={`row justify-content-center m-0`} >
        <MainDiv className = {`col-md-11 col-lg-10`} >
          <Navbar onPresentMobileMenu={handlePresentMobileMenu} />
          <MobileNavbar onDismiss={handleDismissMobileMenu} visible={mobileMenu} />
          
          {children}

          <Footer />
        </MainDiv>
      </MainDiv>

    </>
  )
}

export default MainLayout