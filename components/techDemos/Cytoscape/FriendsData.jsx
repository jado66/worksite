import { XCircle} from 'react-bootstrap-icons'

export default function FriendsDataManager(props){
    return(
        <div className={"d-flex flex-row "+props.className}>            
            {/* {JSON.stringify(props.data)} */}
            <div className=" flex-column d-flex border-end p-2">
                <h3 className="h5 text-center">Users</h3>
                {
                    props.data.map((el)=>{
                        return(
                            <span 
                                key = {el.name+"span"} 
                                className="fs-6 text-capitalize my-1"
                                style={{height:"30px"}}
                            >
                                {el.name}
                            </span>
                        )
                    })
                }
            </div>

            <div className=" flex-column d-flex flex-grow-1 text-start p-2 scroll-auto">
                <h3 className="h5 text-center">Friends</h3>
                {
                    props.data.map((el)=>{
                        return(
                            <FriendGroup
                                key = {el.name+"friends"}
                                user = {el.name}
                                friends = {el.friends}
                                removeFriendFromList = {props.removeFriendFromList}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const FriendGroup = (props) => {
    
    const onDeleteClick = (evt,friend) => {
        evt.preventDefault()
        // alert("Delete");
        props.removeFriendFromList(props.user,friend)
    }
    return(
            <div className="my-1" style={{height:"30px"}}>
                <div className="flex-row overflow-auto scroll-hide text-nowrap d-flex col-">
                {
                    props.friends.map((friend)=>{
                        return(
                            <div 
                                key = {props.user+"-"+friend} 
                                className="fs-6 ms-1 badge rounded-pill bg-primary py-1  "
                            >
                                <span>
                                    {friend.charAt(0).toUpperCase() + friend.slice(1)}
                                </span>
                                <span 
                                    className='ms-1 p-0 border-0'
                                    // onClick={()=>alert('hi')}
                                    onClick={(evt)=>onDeleteClick(evt,friend)}
                                >
                                    <XCircle/>
                                </span>
                                
                            </div>)
                    })
                }
                </div>
            
            </div>
            
    )
}