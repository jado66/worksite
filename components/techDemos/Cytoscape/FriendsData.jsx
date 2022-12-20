import { XCircle} from 'react-bootstrap-icons'

export default function FriendsDataManager(props){
    return(
        <div className={"d-flex flex-column "+props.className}>            
            {/* {JSON.stringify(props.data)} */}
            <div className='flex-row d-flex border-bottom border-theme'>
                <div className="col-4 border-end p-2">
                    <h3 className="h5 text-center">Users</h3>
                </div>

                <div className="col-8 text-start p-2">
                    <h3 className="h5 text-center">Friends</h3>
                </div>
            </div>
            <div>
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

        <div className='flex-row d-flex'>
            <div className="col-4 border-end pt-2">
                <span className="h5 text-center text-capitalize ms-4">{props.user}</span>
            </div>

            <div className="col-8 text-start mt-2">
                <div className="scroll-hide text-nowrap" style={{overflowX:"auto", height:30}}> 
                {
                    props.friends.map((friend)=>{
                        return(
                            <div 
                                key = {props.user+"-"+friend} 
        
                                    className="col d-inline-block fs-6 ms-1 badge rounded-pill bg-primary py-1  "
                                style={{float:"none"}}
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
        </div>
        


        
            
            
    )
}

