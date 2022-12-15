import { Controls, ControlButton, useReactFlow, useStore, useStoreApi } from 'reactflow';
import 'reactflow/dist/style.css';
import { Fullscreen, ZoomIn, ZoomOut, Lock, Unlock, Trash } from 'react-bootstrap-icons';
import { useState, useEffect } from 'react';

const isInteractiveSelector = (s) => s.nodesDraggable && s.nodesConnectable && s.elementsSelectable;

export default function CustomControls(props) {
    const store = useStoreApi();
    const [isVisible, setIsVisible] = useState(false);
    const isInteractive = useStore(isInteractiveSelector);
    const [isLockHover, setLockHover] = useState(false)

    const { zoomIn, zoomOut, fitView } = useReactFlow();
    useEffect(() => {
        setIsVisible(true);
    }, []);
    if (!isVisible) {
        return null;
    }
    const onZoomInHandler = () => {
        zoomIn();
        // onZoomIn?.();
    };
    const onZoomOutHandler = () => {
        zoomOut();
        // onZoomOut?.();
    };
    const onFitViewHandler = () => {
        fitView({});
        // onFitView?.();
    };
    const onToggleInteractivity = () => {
        store.setState({
            nodesDraggable: !isInteractive,
            nodesConnectable: !isInteractive,
            elementsSelectable: !isInteractive,
        });
        setLockHover(false)
        // onInteractiveChange?.(!isInteractive);
    };
  
  
    return (
    <Controls
        tabIndex={1}
        showFitView = {false}
        showZoom = {false}
        showInteractive = {false}
        className={props.className}
    >
        <ControlButton 
                onClick={onZoomInHandler}
                className ={"btn rounded-0"}
            >
            <ZoomIn/>
        </ControlButton>
        <ControlButton 
                onClick={onZoomOutHandler}
                className ={"btn rounded-0"}
            >
            <ZoomOut/>
        </ControlButton>
        <ControlButton 
            onClick={onFitViewHandler}
            className ={"btn rounded-0"}
        >
            <Fullscreen/>
        </ControlButton>
        <ControlButton 
            onClick={onToggleInteractivity}
            className ={"btn rounded-0"}
            onMouseEnter = {()=>setLockHover(true)}
            onMouseLeave = {()=>setLockHover(false)}
        >
            { isInteractive ? 
                isLockHover ? <Lock/> : <Unlock/>
                :
                isLockHover ? <Unlock/> : <Lock/>
            }
        </ControlButton>
        <ControlButton 
            onClick={props.deleteSelected}
            className ={"btn rounded-0"}
            disabled = {!props.hasSelected}
        >
            <Trash/>
        </ControlButton>
    </Controls>
  );
}

