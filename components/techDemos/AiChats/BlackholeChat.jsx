import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";
import { useState, useEffect } from "react";


const chatText = [
    `Can you explain why we can't see black holes?`,

    `Black holes are objects in space that are so dense and have such strong gravitational pull that nothing, not even light, can escape from them. Because light is the only way for us to see things, black holes are invisible to the naked eye and cannot be directly observed.`,

    `However, scientists can indirectly detect the presence of a black hole through its effects on nearby objects. For example, a black hole can be detected by the way it causes nearby stars to move in their orbits, or by the way it bends and distorts light as it passes near the black hole.`,

    `Additionally, black holes can emit radiation when matter falls into them, which can be detected by telescopes. This radiation is called Hawking radiation, named after the physicist Stephen Hawking who predicted its existence.`,

    `So while we cannot directly see black holes, we can infer their presence through their effects on the things around them.`,

    `Can you explain this to me as if I were in Kindergarten?`,
    `Sure! A black hole is a special kind of thing in space that is really, really heavy and has a really strong force that pulls things towards it. It's so heavy and has such a strong force that not even light, which is what helps us see things, can escape from it. That's why we can't see black holes.`,

    `But scientists can still find out that black holes are there by looking at how they affect other things around them. For example, if there is a black hole nearby, it can make stars move in a certain way or make light bend. Scientists can also see the heat and energy that comes out of black holes when things fall into them.`,

    `So even though we can't see black holes, we can still learn about them and know they are there!`
]

export default function BlackholeChat (props) {
    
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

    useEffect(()=>{

        setChatStep(0)
        setStart(false)
    }, [props.reset])
    
    return(
        <div className="border border-theme rounded-5">
            <div className='col-sm-12 d-flex flex-column justify-content-start mb-4 text-start ' style={{minHeight:"200px"}}>
                <h3 className="text-center mt-3">Bot explains a Black Hole</h3>

                { 
                    !start &&
                        <button 
                            className="btn border border-theme text-theme mt-3 mx-auto"
                            style={{width:"fit-content"}}
                            onClick={()=>setStart(true)}
                        >
                            Start Chat AI Example
                        </button>
                }

                {
                    start && 
                    <div className="d-flex px-sm-4 flex-row py-2">
                        <div className="col-sm-1 col-2">
                            <div className="border border-theme badge text-theme d-block ms-auto me-3" style={{width:"40px"}}>
                                JD
                            </div>
                        </div>
                        <div className="col-sm-11 col-10">
                            {
                                chatStep === 0 ?
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
                                        containerClass = " d-inline-block"
                                        
                                        start = {start}
                                        loop = {false}
                                    /> 
                                :
                                <span className="Typewriter-content py-2">{chatText[0]}</span>
                            }
                        </div>
                    </div>
                }

                {
                    start && chatStep > 0 &&
                    <div className="d-flex px-sm-4 flex-row py-2 bg-theme-shade">
                        <div className="col-sm-1 col-2">
                            <div className="border border-theme badge text-theme d-block ms-auto me-3" style={{width:"40px"}}>
                                Bot
                            </div>
                        </div>
                        <div className="col-sm-11 col-10">
                            {
                                chatStep === 1 ?
                                <Typewriter
                                    dataToRotate={[
                                    [
                                        { type: "word", text: chatText[1] },
                                        { type: "word", text: `<br/><br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[2] },
                                        { type: "word", text: `<br/><br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[3] },
                                        { type: "word", text: `<br/><br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[4] },
                                        {
                                            type: "action",
                                            action: "function",
                                            func: () => {
                                                console.log(2)
                                                nextStep(2)
                                            },
                                            wait: 1000
                                            }
                                        ]
                                    ]}
                                    cursor = {{
                                        char :chatStep === 1 && start?"|":""
                                    }}
                                    maxTypeSpeed = {40}
                                    typeVariance = {10}
                                    containerClass = "py-2"
                        
                                    start = {start}
                                    loop = {false}
                                /> 
                                :
                                <div className="Typewriter-content py-2">
                                    <span>{chatText[1]}</span>
                                    <br/><br/>
                                    <span>{chatText[2]}</span>
                                    <br/><br/>
                                    <span>{chatText[3]}</span>
                                    <br/><br/>
                                    <span>{chatText[4]}</span>
                                </div>
                            }
                        </div>
                    </div>
                }

                {
                    start && chatStep > 1 &&
                    <div className="d-flex px-sm-4  flex-row py-2">
                        <div className="col-sm-1 col-2">
                            <div className="border border-theme badge text-theme d-block ms-auto me-3" style={{width:"40px"}}>
                                JD
                            </div>
                        </div>
                        <div className="col-sm-11 col-10">
                            {
                                chatStep === 2 ?
                                <Typewriter
                                    dataToRotate={[
                                    [{ type: "word", text: chatText[5] },
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
                                    cursor = {{
                                        char :chatStep === 2 && start?"|":""
                                    }}
                                    maxTypeSpeed = {40}
                                    typeVariance = {10}
                                    containerClass = "py-2"
                        
                                    start = {start}
                                    loop = {false}
                                /> 
                                :
                                <span className="Typewriter-content py-2">{chatText[5]}</span>
                            }
                        </div>
                    </div>
                }

                {
                    start && chatStep > 2 &&
                    <div className="d-flex px-sm-4 bg-theme-shade flex-row py-2">
                        <div className="col-sm-1 col-2">
                            <div className="border border-theme badge text-theme d-block ms-auto me-3" style={{width:"40px"}}>
                                Bot
                            </div>
                        </div>
                        <div className="col-sm-11 col-10">
                            {
                                chatStep === 3 ?
                                <Typewriter
                                    dataToRotate={[
                                    [
                                        { type: "word", text: chatText[6] },
                                        { type: "word", text: `<br/><br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[7] },
                                        { type: "word", text: `<br/><br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[8] },
                                        {
                                            type: "action",
                                            action: "function",
                                            func: () => {
                                                console.log(4)
                                                nextStep(4)
                                            },
                                            wait: 1000
                                            }
                                        ]
                                    ]}
                                    cursor = {{
                                        char :chatStep === 3 && start?"|":""
                                    }}
                                    maxTypeSpeed = {40}
                                    typeVariance = {10}
                                    containerClass = "py-2"
                        
                                    start = {start}
                                    loop = {false}
                                /> 
                                :
                                <div className="Typewriter-content py-2">
                                    <span>{chatText[6]}</span>
                                    <br/><br/>
                                    <span>{chatText[7]}</span>
                                    <br/><br/>
                                    <span>{chatText[8]}</span>                       
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
    
            {
                start &&
                <button 
                    className="btn border border-theme text-theme mx-auto mb-4"
                    style={{width:"fit-content"}}
                    onClick={()=>{setStart(false);setChatStep(0)}}
                >
                    Reset
                </button>
            }
            
        </div>
    )
}