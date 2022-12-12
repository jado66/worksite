export default function Container(props){
    return(
        <div className="bg-dark text-light flex-grow-1">
            <div className="container text-brand">
                {props.children}
            </div>
        </div>
    )
}