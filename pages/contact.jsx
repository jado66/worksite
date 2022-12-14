import EmailUs from "../components/mail/EmailUs";
import CallToAction from "../components/pageComponents/CallToAction";
import Container from "../components/utils/Container";
export default function Consulting() {
  return (
    <Container>
      <h1 className="text-center h3 mt-3 mb-3">Contact</h1>
  
      <div className="px-4 mb-5">
        <p>
          Suspendisse potenti. Vivamus congue placerat auctor. Fusce tristique, tortor non gravida faucibus, tortor turpis tempor leo, vel posuere sem justo eu nunc. Vestibulum imperdiet nisl vel magna imperdiet egestas. Aenean non tristique enim. Aliquam pellentesque pulvinar pulvinar. Fusce posuere semper feugiat. Mauris tempus, arcu id mollis pulvinar, velit lectus pulvinar ipsum, nec faucibus ex felis ac lorem. Etiam nunc orci, consectetur sit amet porta eu, pellentesque ut lorem. Curabitur scelerisque enim sed ex sollicitudin, in sollicitudin mauris laoreet. Aenean rutrum sem porta quam gravida, non rhoncus elit pulvinar. Praesent lobortis sem at cursus viverra. Integer neque purus, aliquam nec orci nec, elementum gravida lectus. Etiam sed tellus sed dui faucibus bibendum et vel erat. Donec at dignissim libero.

          Donec gravida, nisl sed pulvinar tincidunt, magna nisl accumsan lacus, eu molestie massa ex at ligula. Cras feugiat in odio at egestas. Nulla et iaculis arcu, at malesuada magna. Cras sed vulputate nulla. Vestibulum aliquet sit amet felis sit amet dictum. Sed elementum mauris sit amet sagittis cursus. Nulla ullamcorper ut lorem ullamcorper imperdiet. Curabitur in feugiat turpis, quis tempus risus. Sed feugiat sem vel urna porta, blandit aliquet lacus sodales. Nam sed est nunc. Nulla facilisi. Cras lectus eros, vulputate ut nunc vitae, volutpat pharetra dolor. Suspendisse potenti. Aenean rutrum finibus neque id pulvinar.
        </p>

        <div className='col bg-a1 rounded-3 d-flex justify-content-center mb-4' style={{minHeight:"200px"}}>
          <h5 className='text-theme-inv text-center my-auto'>Picture</h5>
        </div>

        <EmailUs
          title = {"Send Us An Message"}
          textClass = {"text-uppercase"}
          subtitle = {"We'll send you free tips and tricks to impress other bronies with."}
        />

        <h1 className="text-center h5 mt-4 mb-4">- OR -</h1>

        <CallToAction/>
      </div>
    </Container>        
  );
}
