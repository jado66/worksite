import Subscribe from "../components/mail/Subscribe";
import UnderConstruction from "../components/UnderConstruction";
import Container from "../components/utils/Container";
export default function Consulting() {
  return (
    <Container>
      <div className="text-center mt-4 fs-4 mb-4">
        Hi, we would love your money. Want to learn how to give us your money?

        </div>
        
        <div className="container py-4">
            <div className="px-5 mx-5" >
            <Subscribe
                title = {"Subscribe to our monthly newsletter "}
                textClass = {"text-uppercase"}
                subtitle = {"We'll send you free tips and tricks to impress other bronies with."}
            />
            </div>
            
        </div>
    </Container>        
  );
}
