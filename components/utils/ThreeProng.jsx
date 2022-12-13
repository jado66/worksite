export default function ThreeProng(props){
        
    return(
        <div className={"row g-4 py-2 row-cols-1"+(props.smallColumn?"":" row-cols-lg-3")}>
            <div className="col d-flex align-items-start">
                <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    {props.icon1}
                </div>
                <div>
                    <h3 className="fs-3">{props.title1}</h3>
                    <p>{props.subtitle1}</p>
                    { props.btnText1 && 
                        <a href="#" className="btn btn-border">
                            {props.btnText1}
                        </a>}
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="icon-square  d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    {props.icon2}
                </div>
                <div>
                   
                    <h3 className="fs-3 ">{props.title2}</h3>
                    <p>{props.subtitle2}</p>
                    { props.btnText2 && 
                        <a href="#" className="btn btn-border">
                            {props.btnText2}
                        </a>}
                </div>
            </div>
            <div className="col d-flex align-items-start">
                <div className="icon-square d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3">
                    {props.icon3}
                </div>
                <div>
                    <h3 className="fs-3">{props.title3}</h3>
                    <p>{props.subtitle3}</p>
                    { props.btnText3 && 
                        <a href="#" className="btn btn-border">
                            {props.btnText3}
                        </a>}
                </div>
            </div>
        </div>
    )
}