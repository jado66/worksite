import Container from "../../components/utils/Container";
import CallToAction from "../../components/pageComponents/CallToAction";
import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";
import { useState } from "react";

const chatText = [
    `JD - Can you explain why we can't see black holes?`,

    `Bot - Black holes are objects in space that are so dense and have such strong gravitational pull that nothing, not even light, can escape from them. Because light is the only way for us to see things, black holes are invisible to the naked eye and cannot be directly observed.

However, scientists can indirectly detect the presence of a black hole through its effects on nearby objects. For example, a black hole can be detected by the way it causes nearby stars to move in their orbits, or by the way it bends and distorts light as it passes near the black hole.

Additionally, black holes can emit radiation when matter falls into them, which can be detected by telescopes. This radiation is called Hawking radiation, named after the physicist Stephen Hawking who predicted its existence.

So while we cannot directly see black holes, we can infer their presence through their effects on the things around them.`,

`JD - Can you explain this to me as if I were in Kindergarten?`,
`Bot - Sure! A black hole is a special kind of thing in space that is really, really heavy and has a really strong force that pulls things towards it. It's so heavy and has such a strong force that not even light, which is what helps us see things, can escape from it. That's why we can't see black holes.

But scientists can still find out that black holes are there by looking at how they affect other things around them. For example, if there is a black hole nearby, it can make stars move in a certain way or make light bend. Scientists can also see the heat and energy that comes out of black holes when things fall into them.

So even though we can't see black holes, we can still learn about them and know they are there!`
]

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