import { List, XSquareFill } from 'react-bootstrap-icons';
import { useState, useRef, useEffect } from 'react';
export default function  FlowSideBar(props){
    const [showSideBar, setShowSideBar] = useState(true)

    const sideBar = useRef()

    const onDragStart = (event, nodeType) => {
        props.setDraggableNodeTouched(null)
        event.dataTransfer.setData('application/reactflow', nodeType);
        event.dataTransfer.effectAllowed = 'move';
    };

    const handleOnClick = (evt, type) => {
        
        evt.stopPropagation();
        props.setDraggableNodeTouched(prev => {
            if (prev === type){
                // alert("same")
                return null
            }
            else{
                return type
            }
        })
    }

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
                className="sidenav border-lg-start border bg-theme border-theme rounded-3" 
                style={{zIndex:3}} 
                ref={sideBar}
                onClick = {(evt)=>handleOnClick(evt,null)}
                onMouseLeave = {(()=>{setShowSideBar(true)})}
            >
                <div 
                    className='d-flex flex-row '
                >
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
                <hr className='mx-2 my-0 mb-1 opacity-100'/>

                <div className='react-flow__nodes d-flex flex-lg-column flex-row overflow-auto '>
                    <div 
                        className={"react-flow__node react-flow__node-input my-lg-3 my-1 mx-lg-auto mx-2 fs-lg-5 fs-6 p-1 d-flex justify-content-center  react-flow-drag"+(props.draggableNodeTouched === "startNode"? " touched":"")} 
                        style={{position:"static !important"}} 
                        onDragStart={(event) => onDragStart(event, 'startNode')} 
                        onClick={(evt)=>handleOnClick(evt,'startNode')}
                        draggable
                    >
                       <span className={'align-self-center'+(props.draggableNodeTouched === "startNode"? " fw-bold":"")}>Start</span> 
                    </div>

                    {/* New style  <div className="react-flow__node react-flow__node-default react-flow__node-type1 my-lg-3 my-1 mx-lg-auto mx-2 fs-lg-5 fs-6 p-1 d-flex justify-content-center" style={{position:"static !important"}} onDragStart={(event) => onDragStart(event, 'step')} draggable> */}
                    <div 
                        className={"react-flow__node react-flow__node-stepNode border border-theme rounded my-lg-3 my-1 mx-lg-auto mx-2 fs-lg-5 fs-6 p-1 d-flex justify-content-center react-flow-drag"+(props.draggableNodeTouched === "stepNode"? " touched":"")} 
                        style={{position:"static !important"}} 
                        onClick={(evt)=>handleOnClick(evt,'stepNode')}
                        onDragStart={(event) => onDragStart(event, 'stepNode')} 
                        draggable
                    >
                        <span className={'align-self-center'+(props.draggableNodeTouched === "stepNode"? " fw-bold":"")}>New Step</span> 
                        
                    </div>

                    {/* New style <div className="react-flow__node react-flow__node-default react-flow__node-type2 my-lg-3 my-1 mx-lg-auto mx-2 fs-lg-5 fs-6 p-1 d-flex justify-content-center" style={{position:"static !important"}} onDragStart={(event) => onDragStart(event, 'label')} draggable> */}
                    <div 
                        className={"react-flow__node react-flow__node-labelNode border border-theme rounded my-lg-3 my-1 mx-lg-auto mx-2 fs-lg-5 fs-6 p-1 d-flex justify-content-center react-flow-drag"+(props.draggableNodeTouched === "labelNode"? " touched":"")} 
                        style={{position:"static !important"}} 
                        onDragStart={(event) => onDragStart(event, 'labelNode')} 
                        onClick={(evt)=>handleOnClick(evt,'labelNode')}
                        draggable
                    >
                        <span className={'align-self-center'+(props.draggableNodeTouched === "labelNode"? " fw-bold":"")}>New Label</span> 
                        
                    </div>
                    <div className={"react-flow__node react-flow__node-output border border-theme my-lg-3 my-1 mx-lg-auto mx-2 fs-lg-5 fs-6 p-1 d-flex justify-content-center react-flow-drag"+(props.draggableNodeTouched === "endNode"? " touched":"")} 
                        style={{position:"static !important"}} 
                        onDragStart={(event) => onDragStart(event, 'endNode')} 
                        onClick={(evt)=>handleOnClick(evt,'endNode')}
                        draggable
                    >
                        <span className={'align-self-center'+(props.draggableNodeTouched === "endNode"? " fw-bold":"")}>End</span> 
                        
                    </div>
                </div>
                
                
                </div>
                }
        </>
    )
}