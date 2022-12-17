import ReactFlow from 'reactflow';
import { useEffect } from 'react';
import { useKeyPress } from 'reactflow';

export default function KeyControls(props) {
  const deletePressed = useKeyPress('escape');
//   const cmdAndSPressed = useKeyPress(['Meta+s', 'Strg+s']);

  useEffect(() => {
    props.unselect()
  }, [deletePressed]);

//   useEffect(() => {
//     console.log('cmd and s pressed', cmdAndSPressed);
//   }, [cmdAndSPressed]);

  return null ;
}