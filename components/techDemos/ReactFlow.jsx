import React, { createContext, useCallback, useContext, useRef, useState } from 'react';
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
import { ThemeProvider } from '../utils/ThemeProvider';
import EdgeButton from './EdgeButton';
import FlowSideBar from './SideBar';

const initialNodes = [
    {
        id: 'ewb-1',
        type: 'input',
        data: { label: 'Start' },
        sourcePosition: 'right',
        position: { x: 50, y: 0 },
        className: "bg-a1"
    },
    { 
        id: 'ewb-2', 
        sourcePosition: 'right',
        targetPosition: 'left',
        data: { label: 'Step 1' }, 
        position: { x: 250, y: 0 } 
    },

    { 
        id: 'ewb-3', 
        type: 'output',
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

const defaultEdgeOptions = {
    type: 'smoothstep',
  };

let id = 0;
const getId = () => `dndnode_${id++}`;

const returnData = (type) =>{
    switch(type){
        case "input":
            return { label: `Start` }
        case "output":
            return { label: `End` }
        case "step":
            return { label: `Step` }
        case "label":
            return { label: `Label` }
        case "default":
        default:
            return { label: `New Step` }
        
    }
}

export const FlowContext = createContext()

const edgeTypes = {
  buttonedge: EdgeButton,
};

const Flow = () => {
    const {theme} = useContext(ThemeProvider)
    const [reactFlowInstance, setReactFlowInstance] = useState(null);
    const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
    const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
    const [isNodeSelected, setNodeIsSelected] = useState(false)
    const [selectedNodes, setSelectedNodes] = useState([])
    const { getIntersectingNodes } = useReactFlow();
    const reactFlowWrapper = useRef(null);

    
    useOnSelectionChange({
        onChange: ({ nodes, edges }) => {
            setNodeIsSelected(nodes.length > 0) 
            setSelectedNodes(nodes)
        }
    })

   

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
            }}
        >
            <div className='h-100 position-relative border border-theme' ref={reactFlowWrapper}>
                <FlowSideBar/>
                <ReactFlow
                    className=''
                    nodes={nodes}
                    edges={edges}
                    onInit={setReactFlowInstance}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    onNodeDrag={onNodeDrag}
                    onNodeDragStop = {onDragEnd}
                    connectionLineType={ConnectionLineType.SmoothStep}
                    snapToGrid={true}
                    snapGrid={[25,25]}
                    defaultEdgeOptions={defaultEdgeOptions}
                    edgeTypes={edgeTypes}
                    fitView
                    onDrop={onDrop}
                    onDragOver={onDragOver}
                    attributionPosition="top-right"
                >
                
                <CustomControls 
                    className='bg-theme text-theme btn-border'
                    hasSelected = {isNodeSelected}  
                    deleteSelected = {deleteSelected}  
                />
            
                <Background 
                    variant = {"lines"} 
                    color = {theme === "dark"?"#333333":"#cfcfcf"}
                    gap = {[25,25]}
                />
                </ReactFlow>
            </div>
            
           
        </FlowContext.Provider>
    )
   
}

const ReactFlowDemo = () => {
    

  return (
    <ReactFlowProvider>
        <Flow/>
    </ReactFlowProvider>
    
  );
};

export default ReactFlowDemo;
