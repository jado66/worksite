import LanguagesData from './LanguageData.json'

export default function LangaugesTable(props){

  const DisplayData=LanguagesData.map(
    (info)=>{
        return(
            <tr key = {info.name+"_row"}>
                <td>{info.name}</td>
                <td>{info.platform.join(", ")}</td>
                <td>{info.scope.join(", ")}</td>
            </tr>
        )
      }
    )

    return(
      <div>
          <table class="table">
              <thead className='text-theme text-center'>
                  <tr>
                  <th>Name</th>
                  <th>Platform</th>
                  <th>Scope</th>
                  </tr>
              </thead>
              <tbody className='text-theme text-center'>

                  {DisplayData}
                  
              </tbody>
          </table>       
      </div>
    )
}