import { useState } from "react"
import axios from "axios"
function Ping() {

    const [email, setEmail] = useState('')
    const [state, setState] = useState('idle')
    const [errorMsg, setErrorMsg] = useState(null)
  
    const ping = async (e) => {
      e.preventDefault()
  
      try {
        const response = await axios.post('/api/mail/ping')
        console.log(response)
        setState('Success')
        setEmail('')
      } catch (e) {
        console.log(e)
        setErrorMsg(JSON.stringify(e))
        setState('Error')
      }
    }
  
    return (
      <div>
        <button onClick={ping}>Ping Mailchimp</button>
      </div>
    )
  }
  
  export default Ping
  