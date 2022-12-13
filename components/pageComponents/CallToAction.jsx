export default function CallToAction(props){    
    return(
        <div className = {"text-center px-4 rounded-4 mx-4 d-flex flex-column mb-4 "+(props.divClass)}>
            <h4 className={"h-5 text-uppercase "+(props.textClass)}>
            { 
                props.title 
                ?
                props.title
                :
                "Schedule a discovery call"
            }
            </h4>
            <p className={"h6 mb-2 "+(props.textClass)}>
            { 
                props.subtitle 
                ?
                props.subtitle
                :
                "A 15-30 conversation to with one of our top engineers. At no cost, discuss your vision and your needs."
            }
            </p>
            <button className="text-uppercase btn border-theme text-theme btn-lg mx-5 mt-2  ">
                Get Started Today
            </button>  
        </div>
    )
}