import React, { useContext } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import LoadingComponent from '../components/utils/Loading';
import Subscribe from '../components/mail/Subscribe';
import Socials from '../components/utils/Socials';
import Image from 'next/image';
import { Lexend_Deca } from '@next/font/google'
import { ThemeProvider } from './utils/ThemeProvider';

const merienda = Lexend_Deca({subsets:['latin']})

export default function UnderConstruction(props) {
    
  const {fg, bg} = useContext(ThemeProvider)

  

  return(
    <div className = {"h-100 text-left row gx-0 bg-"+bg} style = {{width: '100%', height: '100%',position:"relative"}}>
      <h1 className={'h4 text-center text-uppercase my-auto text-'+fg+" "+(merienda.className)}>This {props.pageName?props.pageName+" page":"site"} is under development</h1>
    </div> 
  )
}