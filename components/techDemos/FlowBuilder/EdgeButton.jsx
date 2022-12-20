import React, { useContext, useState } from 'react';
import { getSmoothStepPath } from 'reactflow';
import { XCircle } from 'react-bootstrap-icons';
import { FlowContext } from './ReactFlow';
const foreignObjectSize = 40;



export default function EdgeButton({
  id,
  sourceX,
  sourceY,
  selected,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
}) {
    const [showButton, setShowButton] = useState(false)
    const [edgePath, labelX, labelY] = getSmoothStepPath({
        sourceX,
        sourceY,
        sourcePosition,
        targetX,
        targetY,
        targetPosition,
    });

    const {onDeleteEdge} = useContext(FlowContext)

    const onEdgeClick = (evt) => {
        evt.stopPropagation();
        onDeleteEdge(id)
      };

  return (
    <>
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
        <foreignObject
            width={foreignObjectSize}
            height={foreignObjectSize}
            x={labelX - foreignObjectSize / 2}
            y={labelY - foreignObjectSize / 2}
            className={"d-flex "}
            requiredExtensions="http://www.w3.org/1999/xhtml"
            onMouseEnter={()=>setShowButton(true)} 
            onMouseLeave={()=>setShowButton(false)}
        >
            
            <div className='text-theme h-100 p-2 d-flex align-items-center' style={{visibility:showButton || selected?"":"hidden"}}>
                <div 
                    onClick={onEdgeClick}
                    className='h-100 flex-grow-1 d-flex align-items-center justify-content-center'
                >
                    <XCircle className='bg-theme'/>
                </div>
                
            </div>
            
      </foreignObject>
    </>
  );
}
