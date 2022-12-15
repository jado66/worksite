import Container from "../../components/utils/Container";
import LangaugesTable from "../../components/pageComponents/LanguagesTable";
import ReactFlowDemo from "../../components/techDemos/ReactFlow";

export default function Demos() {
  return (
    <Container noFooter>
      <h1 className="h3 text-center mt-4">Demos and Unfinished Reusable Components</h1>
      <hr className="bg-brand opacity-100"/>
      <h2 className="h5 text-center mt-3">Programming Languages Table</h2>
      <hr className="bg-brand opacity-100 w-50 mx-auto"/>

      <div className="text-center">
        <LangaugesTable/>
      </div>
      

      <h2 className="h5 text-center my-3  ">Flow Chart Creator</h2>

      <div className="mb-4" style={{minHeight: '400px'}}>
        <ReactFlowDemo/>

      </div>


    </Container>
    
  );
}
