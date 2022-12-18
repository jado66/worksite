import React, { memo, useContext, useRef } from 'react';
import { Handle } from 'reactflow';
import ContentEditable from 'react-contenteditable'
import { FlowContext } from '../ReactFlow';

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
      />
      <div className='h-100 d-flex justify-content-center align-items-center border border-theme rounded'>
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
      />
    </>
  );
});