"use client"
import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import {styled} from '@mui/material'

export const Header = () => {
    const Navbar = styled(AppBar)`
    background:black;
    
    `
  return (
   <>
   <Navbar position='static'>
    <Toolbar>
        <h4>CodeEditor</h4>
    </Toolbar>
    </Navbar>
   
   </>
  )
}
