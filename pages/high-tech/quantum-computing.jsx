import Container from "../../components/utils/Container";
import CallToAction from "../../components/pageComponents/CallToAction";

export default function QCApps() {
  return (
    <Container>
      <h1 className="text-center h3 mt-4">Quantum Computing Applications</h1>
      <div className="px-4">
        <p>
          Suspendisse potenti. Vivamus congue placerat auctor. Fusce tristique, tortor non gravida faucibus, tortor turpis tempor leo, vel posuere sem justo eu nunc. Vestibulum imperdiet nisl vel magna imperdiet egestas. Aenean non tristique enim. Aliquam pellentesque pulvinar pulvinar. Fusce posuere semper feugiat. Mauris tempus, arcu id mollis pulvinar, velit lectus pulvinar ipsum, nec faucibus ex felis ac lorem. Etiam nunc orci, consectetur sit amet porta eu, pellentesque ut lorem. Curabitur scelerisque enim sed ex sollicitudin, in sollicitudin mauris laoreet. Aenean rutrum sem porta quam gravida, non rhoncus elit pulvinar. Praesent lobortis sem at cursus viverra. Integer neque purus, aliquam nec orci nec, elementum gravida lectus. Etiam sed tellus sed dui faucibus bibendum et vel erat. Donec at dignissim libero.

          Donec gravida, nisl sed pulvinar tincidunt, magna nisl accumsan lacus, eu molestie massa ex at ligula. Cras feugiat in odio at egestas. Nulla et iaculis arcu, at malesuada magna. Cras sed vulputate nulla. Vestibulum aliquet sit amet felis sit amet dictum. Sed elementum mauris sit amet sagittis cursus. Nulla ullamcorper ut lorem ullamcorper imperdiet. Curabitur in feugiat turpis, quis tempus risus. Sed feugiat sem vel urna porta, blandit aliquet lacus sodales. Nam sed est nunc. Nulla facilisi. Cras lectus eros, vulputate ut nunc vitae, volutpat pharetra dolor. Suspendisse potenti. Aenean rutrum finibus neque id pulvinar.
        </p>

        <div className='col border border-theme bg-theme-inv rounded-3 opacity-50 d-flex justify-content-center mb-4' style={{minHeight:"200px"}}>
          <h5 className='text-theme-inv text-center my-auto'>Picture</h5>
        </div>
      </div>
         

      <hr className="bg-brand opacity-100 my-4"/>

      <h1 className="text-center h3 mb-4  ">Another Section</h1>

      <div className="d-flex row px-4 mb-5">
        <div className="col">
          <p className="pe-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sem, pretium vel lacinia sit amet, laoreet iaculis lorem. Fusce laoreet ullamcorper urna, rhoncus condimentum diam venenatis vel. Sed hendrerit neque sit amet ipsum condimentum, vel laoreet erat fringilla. Vivamus laoreet mattis nunc, at laoreet justo varius id. Donec luctus maximus feugiat. Phasellus ligula urna, pharetra vel nibh ac, iaculis elementum dolor. Vivamus sollicitudin libero sapien, ut lacinia enim suscipit quis. Etiam in convallis libero. In condimentum velit et elit eleifend pulvinar. Nunc massa ipsum, efficitur auctor augue vel, maximus ultrices dui. In pellentesque mauris id nisl vestibulum, et accumsan metus aliquet. Fusce consectetur dapibus quam, eu gravida est mollis vel. Duis tempor, est nec condimentum malesuada, mi orci iaculis augue, a ultricies ligula arcu a nisl. Vestibulum euismod dictum ante vitae semper. Integer malesuada convallis quam sed blandit. Proin egestas augue et lectus tincidunt tincidunt.

          </p>
        </div>
        <div className='col-6 border border-theme bg-theme-inv rounded-3 opacity-50 d-flex justify-content-center' style={{minHeight:"200px"}}>
          <h5 className='text-theme-inv text-center my-auto'>Picture</h5>
        </div>
      </div> 
      <hr className="bg-brand opacity-100 my-4"/>

       <CallToAction/>  
    </Container>
  );
}