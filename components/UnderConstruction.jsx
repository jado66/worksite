import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import LoadingComponent from '../components/utils/Loading';
import Subscribe from '../components/mail/Subscribe';
import Socials from '../components/utils/Socials';
import Image from 'next/image';
import { Merienda } from '@next/font/google'

const merienda = Merienda({subsets:['latin']})

export default function UnderConstruction(props) {
  
  const isDesktop = useMediaQuery('(min-width: 960px)'); 

  const rightColContent = <div className='pe-5 me-3 my-auto'>
    
      <div className='text-center '>
        <h1 className={'h4 text-warning mt-5 mb-2 text-center '+(merienda.className)}>- Hey, didn&apos;t see you there! -</h1>
        <br/>
        
        <br/>
        <p className={'h5 text-warning mb-2 '+(merienda.className)}>
          {
            props.page?
            "This page is under construction!"
            :
            "Our site is currently under construction!"
          } 
        </p>
        <br/>
        <p className={'h5 text-warning mb-2 '+(merienda.className)}>We should be up and running in no time!</p>
        <br/>
        
      </div>
      
    
    
      <div>
      <hr className='border border-warning border-2 opacity-100 mx-5 mb-5'/>
      </div>
    
    {
      !props.page && 
      <Subscribe 
        divClass = {"px-5"}
        textClass = {'text-warning '+(merienda.className)} 
        title = "You can be the first to know when the site goes live!"
        subtitle = "I'll send you an email to your inbox when the website is ready."
        placeholder = "Enter your email here"
        buttonText = "Sign Me Up"
      />
    
    }
    
    
      <div className='mt-auto pt-4 mb-3'>
        <Socials 
          ulClass = {"navbar-nav d-flex flex-row justify-content-evenly"}  
          aClass = {"text-warning fs-3 " }
        />
      </div>
    
      
      
    </div>


  const rightColContentMobile = <>
    
    <div className='text-center '>
      <h1 className={'fs-4 text-warning mt-5 mb-5 text-center '+(merienda.className)}>- Hey, didn&apos;t see you there! -</h1>
      
    
      
      <p className={'fs-6 text-warning mb-4 '+(merienda.className)}>
        {
          props.page?
          "This page is under construction!"
          :
          "This site is currently under construction!"
        } 
      </p>
      
      <p className={'fs-6 text-warning mb-5 '+(merienda.className)}>We should be up and running in no time!</p>
      
        
    </div>
        
    <Subscribe 
    // divClass = {"px-5"}
      textClass = {'text-warning '+(merienda.className)} 
      title = "You can be the first to know when the site goes live!"
      subtitle = "I'll send you an email to your inbox when the website is ready."
      placeholder = "Enter your email here"
      buttonText = "Sign Me Up"
    />  
    <Socials 
      ulClass = {"navbar-nav d-flex flex-row justify-content-evenly mt-5"}  
      aClass = {"text-warning fs-3"}
    />
  </>   


  if (isDesktop === null){
    return (<div className = "h-100 text-left row gx-0" style = {{backgroundColor:"#132941",width: '100%', height: '100%',position:"relative"}}>
        <LoadingComponent/>
      </div>)
  }

  if (isDesktop){
    return(
      <div className = "h-100 text-left row gx-0" style = {{backgroundColor:"#132941",width: '100%', height: '100%',position:"relative"}}>
            
        <div className='col-4 d-flex h-100'>
        
        <div className={' d-flex flex-grow-1'}>
          <div className=' h-100 flex-grow-1' style={{position:"relative"}}>
            
            <Image
                alt='Mountains'
                src='/uc.png'
                layout='fill'
                objectFit='contain'
                objectPosition='left bottom'
              />
              

              </div>
              
          </div>
          
        </div>
                
        <div className='col-7 text-left d-flex flex-column align-middle'>
          
          { rightColContent }
    
        </div>
          <div style={{position:"fixed", top:props.page?"10%":"0%",right:"0%", width:"500px", height:'200px'}}>
            <Image
              alt='building site gif'
              src='/workingProgress.gif'
              layout='fill'
              objectFit='contain'
              objectPosition='right top'  
            />
          </div>
        
         
      </div> 
    )
    
    
  }
  // Mobile
  return(
    <div className = {"flex-grow-1 text-center "} style = {{backgroundColor:"#132941",width: '100%', overflowY:"auto"}}> 
      <div className='row container justify-content-center mx-auto'> 
        { rightColContentMobile }
        <div className='mt-auto ' style={{height:"50vh"}} >
          <div className='h-100 flex-grow-1' style={{position:"relative"}}>                  
            <Image
              alt='Mountains'
              src='/uc.jpg'
              layout='fill'
              objectFit='contain'
              objectPosition='center bottom'
            />                   
          </div>
        </div> 
      </div>
    </div> 
  )
}