import { List, XSquareFill } from 'react-bootstrap-icons';
import { useState, useRef, useEffect } from 'react';
export default function FlowSideBar(props){
    const [showSideBar, setShowSideBar] = useState(true)
    const sideBar = useRef()

    const openSideBar = () =>{
        sideBar.current.style.width = "175px";

    }
    const closeSideBar = () =>{
        sideBar.current.style.width = "0px";
    }

    const onDragStart = (event, nodeType) => {
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    useEffect(()=>{

        if (sideBar && showSideBar){
            openSideBar()
        }
    },[showSideBar,sideBar])


    return(
        <>
            <div className='position-absolute top-0 end-0 ' style={{zIndex:2}}>
                
                <button 
                    className={'sidenav-button m-2 p-2 d-flex align-items-center btn border-theme bg-theme-inv opacity-75 text-theme-inv'}
                    
                    onClick={()=>{
                        setShowSideBar(true)
                    }
                }
                >
                    <List/>
                 </button>
            </div>
            {/* react-flow__node react-flow__node-default nopan selectable */}
            {
                showSideBar &&
                <div 
                id="mySidenav" 
                tabIndex={0}
                className="sidenav border-start bg-theme border-theme rounded-3" 
                style={{zIndex:3}} 
                ref={sideBar}
                onMouseLeave = {(()=>{setShowSideBar(true)})}
            >
                <div className='d-flex flex-row '>
                    <h2 className='h5 mb-0 pb-2 ms-3 mt-2 pt-1 flex-grow-1 text-center text-nowrap'>Add Nodes</h2>

                    <button 
                        className={'m-2 p-2 border-0 d-flex align-items-center text-theme bg-theme ms-auto '}
                        onClick={()=>{
                            setShowSideBar(false)
                        }}
                    >
                        <XSquareFill/>
                    </button>
                </div>
                
                <div className='react-flow__nodes '>
                    <hr className='mx-2 mt-0'/>
                    <div className="react-flow__node react-flow__node-input my-3 mx-auto react-flow-drag" style={{position:"static !important"}} onDragStart={(event) => onDragStart(event, 'input')} draggable>
                        Start
                    </div>

                    {/* New style  <div className="react-flow__node react-flow__node-default react-flow__node-type1 my-3 mx-auto" style={{position:"static !important"}} onDragStart={(event) => onDragStart(event, 'step')} draggable> */}
                    <div className="react-flow__node react-flow__node-default my-3 mx-auto react-flow-drag" style={{position:"static !important"}} onDragStart={(event) => onDragStart(event, 'step')} draggable>
                        New Step
                    </div>

                    {/* New style <div className="react-flow__node react-flow__node-default react-flow__node-type2 my-3 mx-auto" style={{position:"static !important"}} onDragStart={(event) => onDragStart(event, 'label')} draggable> */}
                    <div className="react-flow__node react-flow__node-default my-3 mx-auto react-flow-drag" style={{position:"static !important"}} onDragStart={(event) => onDragStart(event, 'label')} draggable>
                        New Label
                    </div>
                    <div className="react-flow__node react-flow__node-output my-3 mx-auto react-flow-drag" style={{position:"static !important"}} onDragStart={(event) => onDragStart(event, 'output')} draggable>
                        End
                    </div>
                </div>
                
                
                </div>
                }
        </>
    )
}