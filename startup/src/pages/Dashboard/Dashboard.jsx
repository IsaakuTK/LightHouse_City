import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Footer, Header, Body } from "../../components/index";

export function Dashboard() {

  return (
    <main className=' justify-start items-center w-full h-full'>
      <Header />
      <Body />
      <Footer />
    </main>
  )
}