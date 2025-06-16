import React from 'react'
import { Outlet } from "react-router-dom"
import Breadcrumb from "../components/Breadcrumb"
import Container from "react-bootstrap/Container"

const Fees = () => {
  return (
    <>
      <Container>
        <Breadcrumb />
      </Container>
      <Outlet />
    </>
  );
}

export default Fees;