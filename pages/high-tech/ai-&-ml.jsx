import Container from "../../components/utils/Container";
import CallToAction from "../../components/pageComponents/CallToAction";
import Typewriter from "react-typewriter-animate";
import { chatText } from "./chatText";
import "react-typewriter-animate/dist/Typewriter.css";
import { useState } from "react";

export default function BlockchainAndCrypto() {
    
    const [chatStep, setChatStep] = useState(0)
    const [start, setStart] = useState(false)

    const nextStep = (newStep) =>{
        setChatStep(prev =>{
            if (prev < newStep){
                console.log(`Next step is ${newStep}`)
                return newStep
            }
            return prev
        })
    }
    
    return (
    <Container>
      <h1 className="text-center h3 mt-4 mb-4">Artificial Intelligence &amp; Machine Learning</h1>
      
      <div className="d-flex row px-4">
        <div className="col">
          <p className="pe-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sem, pretium vel lacinia sit amet, laoreet iaculis lorem. Fusce laoreet ullamcorper urna, rhoncus condimentum diam venenatis vel. Sed hendrerit neque sit amet ipsum condimentum, vel laoreet erat fringilla. Vivamus laoreet mattis nunc, at laoreet justo varius id. Donec luctus maximus feugiat. Phasellus ligula urna, pharetra vel nibh ac, iaculis elementum dolor. Vivamus sollicitudin libero sapien, ut lacinia enim suscipit quis. Etiam in convallis libero. In condimentum velit et elit eleifend pulvinar. Nunc massa ipsum, efficitur auctor augue vel, maximus ultrices dui. In pellentesque mauris id nisl vestibulum, et accumsan metus aliquet. Fusce consectetur dapibus quam, eu gravida est mollis vel. Duis tempor, est nec condimentum malesuada, mi orci iaculis augue, a ultricies ligula arcu a nisl. Vestibulum euismod dictum ante vitae semper. Integer malesuada convallis quam sed blandit. Proin egestas augue et lectus tincidunt tincidunt.
          </p>
        </div>
        <div className='col-lg-6 col-12 bg-a3 rounded-3 d-flex justify-content-center' style={{minHeight:"200px"}}>
          <h5 className='text-theme-inv text-center my-auto'>Picture</h5>
        </div>
      </div>      

      <hr className="bg-brand opacity-100 my-4"/>

      <h1 className="text-center h3 ">Text AI</h1>

      <div className="px-4">
        <div className='col-lg-12 d-flex flex-column justify-content-start mb-4 text-start ' style={{minHeight:"200px"}}>
            
        { !start &&
            <button 
                className="btn border-theme text-theme mt-3"
                onClick={()=>setStart(true)}
            >
                Start Chat AI Example
            </button>
        }

        <Typewriter
          dataToRotate={[
            [{ type: "word", text: chatText[0] },
             {
                type: "action",
                action: "function",
                func: () => {
                    console.log(1)
                    nextStep(1)
                },
                wait: 1000
              }
            ]]}
            cursor = {{
                char :chatStep === 0 && start?"|":""
            }}
          maxTypeSpeed = {40}
          typeVariance = {10}
          containerClass = "mb-4"

          start = {start}
          loop = {false}
          timeBeforeDelete = {200000}
        /> 

        <Typewriter
            dataToRotate={[
                [{ type: "word", text: chatText[1] },
                {
                    type: "action",
                    action: "function",
                    func: () => {
                        console.log(2)
                        nextStep(2)
                    },
                    wait: 1000
                }
                ]]}
            start = {chatStep > 0}
            maxTypeSpeed = {40}
            typeVariance = {10}
            containerClass = "mb-4"
            loop = {1}
            timeBeforeDelete = {200000}
            cursor = {{
                char :chatStep === 1?"|":""
            }}

        /> 

        <Typewriter
            dataToRotate={[
                [{ type: "word", text: chatText[2] },
                {
                    type: "action",
                    action: "function",
                    func: () => {
                        console.log(3)
                        nextStep(3)
                    },
                    wait: 1000
                }
                ]]}
            containerClass = "mb-4"

            start = {chatStep > 1}
            maxTypeSpeed = {40}
            typeVariance = {10}
            timeBeforeDelete = {200000}
            cursor = {{
                char :chatStep === 2?"|":""
            }}

        /> 

        <Typewriter
            dataToRotate={[
                [{ type: "word", text: chatText[3] }
                ]]}
            start = {chatStep > 2}
            maxTypeSpeed = {40}
            typeVariance = {10}
            timeBeforeDelete = {20000}
            cursor = {{
                char :chatStep === 3?"|":""
            }}

        /> 

        </div>
        

        <div className='col-lg-6 col-12 bg-a1 rounded-3 d-flex justify-content-center mb-4' style={{minHeight:"200px"}}>
          <h5 className='text-theme-inv text-center my-auto'>Picture</h5>
        </div>
      </div>
      <hr className="bg-brand opacity-100 my-4"/>

       <CallToAction/>
    </Container>
  );
}