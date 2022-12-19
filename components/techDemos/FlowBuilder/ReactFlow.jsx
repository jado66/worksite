import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
import StepNode from './nodes/StepNode';
import StartNode from './nodes/StartNode'
import EndNode from './nodes/EndNode'
import LabelNode from './nodes/LabelNode';
import ReactFlow, {
    useNodesState,
    useEdgesState,
    useReactFlow,
    addEdge,
    MiniMap,
    ConnectionLineType,
    Background,
    ReactFlowProvider,
    useOnSelectionChange,
} from 'reactflow';
import CustomControls from './CustomControls';
import 'reactflow/dist/style.css';
import { ThemeProvider } from '../../utils/ThemeProvider';
import EdgeButton from './EdgeButton';
import FlowSideBar from './SideBar';
import KeyControls from './KeyControls';
import ConditionalWrapper from '../../utils/ConditionalWrapper';
import { FullScreen, useFullScreenHandle } from "react-full-screen";

const initialNodes = [
    {
        id: 'ewb-1',
        type: 'startNode',
        sourcePosition: 'right',
        data: { label: 'Start' }, 
        position: { x: 50, y: 0 },
        className: "bg-a1"
    },
    { 
        id: 'ewb-2', 
        type: 'stepNode',
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Step 1' }, 
        position: { x: 250, y: 0 } 
    },

    { 
        id: 'ewb-3', 
        type: 'endNode',
        targetPosition: 'left',
        data: { label: 'End' }, 
        position: { x: 750, y: 0 } 
    },
];

const initialEdges = [
  {
    id: 'edge-1-2',
    
    source: 'ewb-1',
    target: 'ewb-2',
    type: 'buttonedge',
  },
];

const deleteKeyCodes = ["Delete","Backspace"]

const defaultEdgeOptions = {
    type: 'smoothstep',
  };

let id = 0;
const getId = () => `dndnode_${id++}`;

const returnData = (type) =>{
    switch(type){
        case "startNode":
            return { label: `Start` }
        case "endNode":
            return { label: `End` }
        case "stepNode":
            return { label: `Step` }
        case "labelNode":
            return { label: `Label` }
        case "default":
        default:
            return { label: `New Step` }
        
    }
}

const onPaneClick = (event, type, reactFlowWrapper, reactFlowInstance, getId, returnData, setNodes, setDraggableNodeTouched) =>{
    
    if (!type){
        return
    }

    console.log(type)
    
    const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
    const position = reactFlowInstance.project({
        x: event.clientX - reactFlowBounds.left - 150/2,
        y: event.clientY - reactFlowBounds.top - 50/2,
    });

    const newNode = {
        id: getId(),
        type: type,
        position,
        sourcePosition: 'right',
        targetPosition: 'left',
        data: returnData(type),
    };

    console.log(JSON.stringify(newNode))

    setNodes((nds) => nds.concat(newNode));
    setDraggableNodeTouched(null)
}

export const FlowContext = createContext()

const edgeTypes = {
  buttonedge: EdgeButton,
};

const nodeTypes = {
    startNode: StartNode,
    endNode: EndNode,
    labelNode: LabelNode,
    stepNode: StepNode
}

const Flow = (props) => {
    const {theme} = useContext(ThemeProvider)
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [isNodeSelected, setNodeIsSelected] = useState(false)
    const [selectedNodes, setSelectedNodes] = useState([])
    const [fullscreen, setFullscreen] = useState(false)
    const [draggableNodeTouched, setDraggableNodeTouched] = useState(null)
    const { getIntersectingNodes } = useReactFlow();
    const reactFlowWrapper = useRef(null);

    const handle = useFullScreenHandle();
    
    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            setNodeIsSelected(nodes.length > 0) 
            setSelectedNodes(nodes)
        }
    })

    const unselect = useCallback((_, node) => {        
        setNodes((ns) =>
          ns.map((n) => ({
            ...n,
            selected: false
          }))
        );
      }, []);

    const handleDataChange = (nodeId, change) => {
        setNodes((ns) =>
            ns.map((n) => ({
            ...n,
            data: n.id === nodeId ? { label: change} : n.data,
            }))
        );
    };  

    const onNodeDrag = useCallback((_, node) => {
        const intersections = getIntersectingNodes(node).map((n) => n.id);
        
        setNodes((ns) =>
          ns.map((n) => ({
            ...n,
            className: intersections.includes(n.id) ? 'highlight' : '',
          }))
        );
      }, []);

    const onDragEnd = useCallback((_, node) => {
        const intersections = getIntersectingNodes(node).map((n) => n.id);
        
        setNodes((ns) =>
          ns.map((n) => ({
            ...n,
            data: {
                ...n.data,
                icon: "warning"
            },
            zIndex: intersections.includes(n.id) ? 1050 : 0,
          }))
        );
    }, []);

    const deleteSelected = () =>{
        const deleteArr = selectedNodes.map(n => n.id)

        setNodes((prev) => prev.filter((e) => !deleteArr.includes(e.id)));  
    }            

    const onDeleteEdge = (edge) => {
        setEdges((prev) =>  prev.filter((e) => e.id !== edge));  
    };  

    const onConnect = useCallback(
        (params) => setEdges((eds) => addEdge(
            { ...params, type: 'buttonedge', data: {onDelete: onDeleteEdge}, }, eds)),
    []);

    const onClick = (evt) => onPaneClick(evt, draggableNodeTouched, reactFlowWrapper, reactFlowInstance, getId, returnData, setNodes, setDraggableNodeTouched)

    const onDragOver = useCallback((event) => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        }, []);

    const onDrop = useCallback(
    (event) => {
        event.preventDefault();

        const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
        const type = event.dataTransfer.getData('application/reactflow');

        // check if the dropped element is valid
        if (typeof type === 'undefined' || !type) {
            return;
        }

        const position = reactFlowInstance.project({
            x: event.clientX - reactFlowBounds.left,
            y: event.clientY - reactFlowBounds.top,
            });
        const newNode = {
            id: getId(),
            type,
            position,
            sourcePosition: 'right',
            targetPosition: 'left',
            data: returnData(type),
        };

        setNodes((nds) => nds.concat(newNode));
    },
    [reactFlowInstance]
    );

    return(
        <FlowContext.Provider
            value={{
                onDeleteEdge:onDeleteEdge,
                handleDataChange,handleDataChange
            }}
        >
             <FullScreen handle={handle} className = {"h-100 position-relative w-100"}>
                <div className={'h-100 '+ props.className + (handle.active?" bg-theme":" border border-theme")} ref={reactFlowWrapper}>
                    <FlowSideBar 
                        draggableNodeTouched = {draggableNodeTouched}
                        setDraggableNodeTouched = {setDraggableNodeTouched}    
                    />
                    <ReactFlow
                        className=''
                        nodes={nodes}
                        edges={edges}
                        onInit={setReactFlowInstance}
                        onNodesChange={onNodesChange}
                        onPaneClick={onClick}
                        onEdgesChange={onEdgesChange}
                        onConnect={onConnect}
                        onNodeDrag={onNodeDrag}
                        onNodeDragStop = {onDragEnd}
                        connectionLineType={ConnectionLineType.SmoothStep}
                        snapToGrid={true}
                        snapGrid={[25,25]}
                        defaultEdgeOptions={defaultEdgeOptions}
                        edgeTypes={edgeTypes}
                        nodeTypes={nodeTypes}
                        multiSelectionKeyCode = {true ? 'ControlLeft' : 'Meta'}
                        deleteKeyCode = {deleteKeyCodes}
                        fitView
                        onDrop={onDrop}
                        onDragOver={onDragOver}
                        attributionPosition="top-right"
                    >

                    <KeyControls
                        unselect = {unselect}
                    />
                    
                    <CustomControls 
                        className='bg-theme text-theme '
                        hasSelected = {isNodeSelected}  
                        enterFullscreen = {handle.enter}
                        exitFullscreen = {handle.exit}
                        isFullscreen = {handle.active}
                        deleteSelected = {deleteSelected}  
                    />
                
                    <Background 
                        variant = {"lines"} 
                        color = {theme === "dark"?"#333333":"#cfcfcf"}
                        gap = {[25,25]}
                    />
                    </ReactFlow>
                </div>
            </FullScreen>           
        </FlowContext.Provider>
    )
   
}

const ReactFlowDemo = (props) => {
    

  return (
    <ReactFlowProvider>
        <Flow {...props}/>
    </ReactFlowProvider>
    
  );
};

export default ReactFlowDemo;
