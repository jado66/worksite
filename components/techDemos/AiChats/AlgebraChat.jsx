import Typewriter from "react-typewriter-animate";
import "react-typewriter-animate/dist/Typewriter.css";
import { useState } from "react";


const chatText = [
    `Can you teach me algebra?`,

    `Certainly! Algebra is a branch of mathematics that deals with the study of symbols and the rules for manipulating those symbols. It is a fundamental mathematical concept that is essential for solving equations and understanding more advanced mathematical concepts.`,
    `Here are some basic concepts in algebra:`,
    `1. Variables: In algebra, variables are symbols that represent unknown values. The most common variables are x and y.`,
    `2. Expressions: An expression is a combination of variables, numbers, and operators (such as +, -, ×, and ÷) that represents a value. For example, the expression "2x + 3" represents the value of 2 times x plus 3.`,
    `3. Equations: An equation is a statement that two expressions are equal. For example, the equation "2x + 3 = 7" states that the value of 2x plus 3 is equal to 7.`,
    `4. Inequalities: An inequality is a statement that two expressions are not equal. For example, the inequality "2x + 3 > 7" states that the value of 2x plus 3 is greater than 7.`,
    `5. Solving equations: To solve an equation, you need to find the value of the variable that makes the equation true. For example, to solve the equation "2x + 3 = 7," you would need to find the value of x that makes the left side of the equation equal to the right side. In this case, you would subtract 3 from both sides to get "2x = 4," and then divide both sides by 2 to get "x = 2."`,
    `I hope this gives you a good overview of algebra. Let me know if you have any specific questions or if you would like more information on a particular topic.`,

    `I'm not quite sure I understand expressions.`,

    `An expression is a combination of variables, numbers, and operators that represents a value. It is a way of representing a mathematical calculation using symbols. Here are some examples of expressions:`,
    `1. "2x + 3" is an expression that represents the value of 2 times x plus 3.`,
    `2. "x - y" is an expression that represents the value of x minus y.`,
    `3. "3x^2 + 2x - 1" is an expression that represents the value of 3 times x squared plus 2 times x minus 1.`,
    `4. "5 + 3x - 2y" is an expression that represents the value of 5 plus 3 times x minus 2 times y.`,
    `Expressions can be simplified by combining like terms and applying the order of operations. For example, the expression "2x + 3 + x - 4" can be simplified to "3x - 1."`,
    `I hope this helps clarify what expressions are. Let me know if you have any questions or if you would like more examples.`
]

export default function AlgebraChat (props) {
    
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
    
    return(
        <div className="px-sm-4">
            <div className='col-sm-12 d-flex flex-column justify-content-start mb-4 text-start ' style={{minHeight:"200px"}}>
                
                <h3 className="text-center">Bot teaches Algebra basics</h3>
                { 
                    !start &&
                        <button 
                            className="btn border-theme text-theme mt-3"
                            onClick={()=>setStart(true)}
                        >
                            Start Algebra Chat Example
                        </button>
                }

                {
                    start && 
                    <div className="d-flex flex-row py-2">
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
                                        containerClass = "mb-4 d-inline-block"
                                        
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
                    <div className="d-flex flex-row py-2">
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
                                        { type: "word", text: `<br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[4] },
                                        { type: "word", text: `<br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[5] },
                                        { type: "word", text: `<br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[6] },
                                        { type: "word", text: `<br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[7] },
                                        { type: "word", text: `<br/><br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[8] },
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
                                    <br/>
                                    <span>{chatText[4]}</span>
                                    <br/>
                                    <span>{chatText[5]}</span>
                                    <br/>
                                    <span>{chatText[6]}</span>
                                    <br/>
                                    <span>{chatText[7]}</span>
                                    <br/><br/>
                                    <span>{chatText[8]}</span>
                                </div>
                            }
                        </div>
                    </div>
                }

                {
                    start && chatStep > 1 &&
                    <div className="d-flex flex-row py-2">
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
                                    [{ type: "word", text: chatText[9] },
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
                                <span className="Typewriter-content py-2">{chatText[9]}</span>
                            }
                        </div>
                    </div>
                }

                {
                    start && chatStep > 2 &&
                    <div className="d-flex flex-row py-2">
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
                                        { type: "word", text: chatText[10] },
                                        { type: "word", text: `<br/><br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[11] },
                                        { type: "word", text: `<br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[12] },
                                        { type: "word", text: `<br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[13] },
                                        { type: "word", text: `<br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[14] },
                                        { type: "word", text: `<br/><br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[15] },
                                        { type: "word", text: `<br/><br/>`, override: { maxTypespeed: 0 } },
                                        { type: "word", text: chatText[16] },
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
                                    <span>{chatText[10]}</span>
                                    <br/><br/>
                                    <span>{chatText[11]}</span>
                                    <br/>
                                    <span>{chatText[12]}</span> 
                                    <br/>   
                                    <span>{chatText[13]}</span>
                                    <br/>
                                    <span>{chatText[14]}</span>
                                    <br/><br/>
                                    <span>{chatText[15]}</span> 
                                    <br/><br/>    
                                    <span>{chatText[16]}</span>                                                    
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}