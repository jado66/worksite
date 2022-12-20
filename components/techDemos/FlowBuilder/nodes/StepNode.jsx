import React, { memo, useContext, useRef } from 'react';
import { Handle } from 'reactflow';
import ContentEditable from 'react-contenteditable'
import { FlowContext } from '../ReactFlow';
import { Dash, Plus } from 'react-bootstrap-icons';

/* eslint-disable react/display-name */
export default memo(({ data, isConnectable, id }) => {
  const ref = useRef(null)
  const {handleDataChange} = useContext(FlowContext)

  const onChange = (evt) =>{
    handleDataChange(id, evt.target.value)
  }

  return (
    <>
      <Handle
        type="target"
        position="left"
        isConnectable={isConnectable}
      >
        <Dash className='flex-grow-1 h-100 text-theme hidden-lg pe-none hidden-lg'/>
      </Handle>
      <div className='h-100 d-flex justify-content-center align-items-center'>
        <ContentEditable
          innerRef={ref}
          html={data.label} // innerHTML of the editable div
          disabled={false}       // use true to disable editing
          onChange={(evt)=>onChange(evt)} // handle innerHTML change
          tagName='span' 
        />
      </div>
      <Handle
        type="source"
        position="right"
        id="a"
        isConnectable={isConnectable}
      >
        <Plus className='flex-grow-1 h-100 text-theme hidden-lg pe-none'/>
      </Handle>
    </>
  );
});