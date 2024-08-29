import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { Header, Body } from "../../components/index";
import { Card } from "../../components/Card/Card";

export function Dashboard() {

  return (
    <main className="flex flex-col min-h-screen">
      <Header />
      <Body />
    </main>
  )
}