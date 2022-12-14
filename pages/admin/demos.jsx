import Container from "../../components/utils/Container";
import LangaugesTable from "../../components/pageComponents/LanguagesTable";

export default function Demos() {
  return (
    <Container noFooter>
      <h1 className="h3 text-center mt-4">Demos</h1>
      <hr className="bg-brand opacity-100"/>
      <LangaugesTable/>

    </Container>
    
  );
}
