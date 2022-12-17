import React, { memo } from 'react';
import { Handle } from 'reactflow';

/* eslint-disable react/display-name */
export default memo(({ data, isConnectable }) => {
  return (
    <>
      <Handle
        type="target"
        position="left"
        isConnectable={isConnectable}
      />
      <div>
        Start
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