import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import LoadingComponent from '../components/utils/Loading';
import Subscribe from '../components/mail/Subscribe';
import Socials from '../components/utils/Socials';
import Image from 'next/image';
import { Lexend_Deca } from '@next/font/google'

const merienda = Lexend_Deca({subsets:['latin']})

export default function UnderConstruction(props) {
    
  return(
    <div className = "h-100 text-left row gx-0" style = {{backgroundColor:"#0A0A0A",width: '100%', height: '100%',position:"relative"}}>
          <h1 className={'h4 text-brand text-center text-uppercase my-auto '+(merienda.className)}>This site is under development</h1>
    </div> 
  )
}