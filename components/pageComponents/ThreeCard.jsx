import Link from "next/link";

export default function ThreeCard(props){
    return(
    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center ">
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-theme">
          <div className="card-header py-3 border-theme">
            <h4 className="my-0 fw-normal">{props.title1}</h4>
          </div>
          <div className="card-body">
            {props.body1}
            <button type="button" className="w-100 btn btn-lg btn-border">Sign up for free</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-theme">
          <div className="card-header py-3 border-theme">
            <h4 className="my-0 fw-normal">{props.title2}</h4>
          </div>
          <div className="card-body">
            {props.body2}
            <Link className = "btn btn-lg btn-border w-100" href={"/schedule"}>
              Get started
            </Link>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm border-theme">
          <div className="card-header py-3 border-theme">
            <h4 className="my-0 fw-normal">{props.title3}</h4>
          </div>
          <div className="card-body">
            {props.body3}
            <button type="button" className="w-100 btn btn-lg btn-border">Contact us</button>
          </div>
        </div>
      </div>
    </div>
    )
}