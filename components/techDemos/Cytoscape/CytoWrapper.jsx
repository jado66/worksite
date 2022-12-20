import cytoscape from "cytoscape"
import {memo, useEffect, useRef, useState} from 'react'
import * as util from 'util'

let conf = {
    boxSelectionEnabled: false,
    autounselectify: true,
    zoomingEndabled: true,
    style: [
        {
            selector: 'node',
            style: {
                'content':'data(data.task)',
                'text-opacity':0.5,
                'text-valign':'center',
                'text-halign':'right'
            }
        },
        {
            selector: 'edge',
            style: {
                'width':2,
                'curve-style':'bezier',
            }
        }
    ]
}

function CytoWrapper(props){

    const [cy, setCy] = useState()
    const cyRef = useRef(null)

    const loadCytoscape = (elements) => {

        const newCy = cytoscape({
            container: document.getElementById('cy'),
            boxSelectionEnabled: false,
            autounselectify: true,
            style: cytoscape.stylesheet()
                .selector('node')
                .css({
                    'height':80,
                    'width':80,
                    'background-fit':'cover',
                    'border-color':'#FFFFFF',
                    'border-width': 3,
                    'border-opacity': 0.5,
                    'content':'data(label)',
                    'text-valign':'center'
                })
                .selector('edge')
                .css({
                    'width':6,
                    'line-color': "#ffaaaa",
                    'curve-style':'bezier'
                }),

            elements: {
                nodes: elements.nodes? elements.nodes:[],
                edges: elements.edges? elements.edges:[]
            },
            layout: {
                name: 'circle',
                directed: false,
                padding: 10
            }
        });

        newCy.panningEnabled( false );
        newCy.userPanningEnabled( false );
        newCy.zoomingEnabled( false );
        newCy.userZoomingEnabled( false );


        setCy(newCy)
    }

    useEffect(()=>{
        conf.container = cyRef;
        conf.elements = props.data;

        loadCytoscape({
            
            nodes: [
                { data: { id: "john", label: "John" } },
                { data: { id: "jim" , label: "Jim"} },
                { data: { id: "sally", label: "Sally" } }
            ],
            edges: [
                { data: { source: 'john', target: 'jim'}},                
            ]
        })


        return () => {
            if (cy){
                cy.destroy()
            }
        }
    },[])

    useEffect(()=>{
        if (cy){
            cy.destroy()
            console.log("destroy")
        }
        // console.log(JSON.stringify(props.data, null, 4))
        loadCytoscape(props.data)

    },[props.data])

    return <div className="flex-grow-1 text-start" id = "cy"/>
}

export default memo(CytoWrapper)