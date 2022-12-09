import { useState } from "react"
import axios from "axios"

function Subscribe(props) {

    const [email, setEmail] = useState('')
    const [state, setState] = useState('idle')
    const [errorMsg, setErrorMsg] = useState(null)
  
    const subscribe = async (e) => {
      e.preventDefault()
      setState('Loading')
  
      try {
        const response = await axios.post('/api/mail/subscribe', { email })
        // console.log(response)
        setState('Success')
        setEmail('')
      } catch (e) {
        console.log(e)
        setErrorMsg(JSON.stringify(e))
        setState('Error')
      }
    }
  
    return (
      <div className = {" text-center border p-4 border-3 border-brand rounded-4 "+(props.divClass)}>
        <h4 className={"h-5 "+(props.textClass)}>
          { 
            props.title 
            ?
            props.title
            :
            "Subscribe to the newsletter"
          }
        </h4>
        <p className={"h6 "+(props.textClass)}>
          { 
            props.subtitle 
            ?
            props.subtitle
            :
            "Get to notified on quality articles about frontend development and more sent to your inbox. I'll send you an email once a month, no spam."
          }
          
        </p>
        <form onSubmit={subscribe}>
          <div>
            <div className={"input-group mb-3 mt-4 form-white "+(props.divClass)}>
              <input 
                required
                id="email-input"
                name="email"
                type="email"
                placeholder={props.placeholder?props.placeholder:"What's your email address"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={(props.textClass)+" form-control "} 
                aria-label="Recipient's email" 
              />
              <button 
                className={(props.textClass)+" btn btn-brand border-rad text-dark "}
                type="button" 
                id="button-addon2"
                disabled={state === 'Loading'}
                onClick={subscribe}
              >
                {props.buttonText?props.buttonText:"Subscribe"}
              </button>
            </div>
            
            
          </div>
          {state === 'Error' && (
            <div className="error-state">{errorMsg}</div>
          )}
          {state === 'Success' && (
            <div>Awesome, you&apos;ve been subscribed!</div>
          )}
        </form>
      </div>
    )
  }
  
  export default Subscribe
  