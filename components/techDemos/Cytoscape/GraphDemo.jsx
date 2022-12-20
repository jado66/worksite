import CytoWrapper from "./CytoWrapper"
import { useCallback, useEffect, useReducer, useState } from "react"
import FriendsDataManager from "./FriendsData";

const initialData = [
    {
        "name": "john",
        "friends": [
            "jim",
            "fred",
            "susan",
            "marco",
            "andrew" 
        ]
    },
    {
        "name": "jim",
        "friends": [
            "john",
            "fred",
        ]
    },
    {
        "name": "sally",
        "friends": [
            "fred",
            "mary",
            "susan"
        ]
    },
    {
        "name": "fred",
        "friends": [
            "john",
            "jim",
            "sally",
            "mary",
            "marco"
        ]
    },
    {
        "name": "mary",
        "friends": [
            "fred",
            "sally",
            "susan",
            "marco"
        ]
    },
    {
        "name": "susan",
        "friends": [
            "john",
            "sally",
            "mary",
            "marco"
        ]
    },
    {
        "name": "marco",
        "friends": [
            "john",
            "fred",
            "mary",
            "susan",
        ]
    },
    {
        "name": "andrew",
        "friends": [
            "john",
        ]
    }
]

const initialData2 = [
    {
        "name": "john",
        "friends": [
            "jim",
        ]
    },
    {
        "name": "jim",
        "friends": [
            "john",
        ]
    },
    {
        "name": "sally",
        "friends": [
                        
        ]
    }
  
]

function reducer(state, action){

    let newState = [...state]
    
    switch (action.type){
        case 'd':

            let friend1_index = -1;
            let friend2_index = -1;

            for (var i = 0; i < state.length; i++){
                if (state[i].name !== action.friend1 && state[i].name !== action.friend2){
                    continue
                } 
                else if (state[i].name === action.friend1){
                    friend1_index = i;
                }
                else{
                    friend2_index = i;
                }
            }

            const newFriends1 = [...state[friend1_index].friends.filter((el)=> el !== action.friend2)]
            const newFriends2 = [...state[friend2_index].friends.filter((el)=> el !== action.friend1)]

            newState[friend1_index].friends = newFriends1
            newState[friend2_index].friends = newFriends2

            break;
    }
    console.log("update")
    return newState
}


export default function GraphDemo(props){
    const [data, dispatch] = useReducer(reducer, initialData)

    const removeFriendFromList = (friend1, friend2) =>{
    

        dispatch({type: "d", friend1:friend1, friend2:friend2})
    }    

    useEffect(()=>{
        setCyData(dataToCyData(data))

    },[data])

    const dataToCyData = useCallback((data) => {        
        let nodes = []
        let ids = []
        let edges = []
        
        data.forEach(el => {
            nodes.push(
                { data: 
                    { 
                        id: el.name, 
                        label: el.name.charAt(0).toUpperCase() + el.name.slice(1),
                        classes: 'cyto-node'
                    } 
                }
            )
        
            for(var i = 0; i < el.friends.length; i++){
                let friend = el.friends[i]
                let namesList = [el.name,friend].sort()
                let newID = namesList[0]+"-"+namesList[1]

                if (ids.includes(newID)){
                    continue
                    }
                else{
                    ids.push(newID)
                    edges.push({ data: { source: namesList[0], target: namesList[1]}})
                }
            }
        });   
        
        return {
            nodes: nodes,
            edges: edges
        } 
      }, []);

      const [cyData, setCyData] = useState(dataToCyData(initialData2))

    return (
        <div className="mx-4 col-12 d-flex flex-grow-1 flex-lg-row flex-column border border-theme">
            <div className="col-lg-4 col-12">
                <h2 className="text-center mt-2">Data</h2>
                {/* {JSON.stringify(data,null,1)} */}
                <FriendsDataManager
                    data = {data}
                    removeFriendFromList = {removeFriendFromList}
                />  
            </div>
            <div className="col-lg-8 col-12 d-flex flex-grow-1 border-lg-start border-top border-theme" style={{minHeight:400}}>
               
                <CytoWrapper
                    data = {cyData}
                />
            </div>
        </div>
        
    )
}