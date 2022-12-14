import Container from "../components/utils/Container";
export default function Schedule() {
  return (
    <Container>
      <h1 className="text-center h3 mt-4 mb-4">Schedule A Discovery Call</h1>
  
      <div className="d-flex row px-4 mb-5">
        <div className='col-6 border border-theme bg-theme-inv rounded-3 opacity-50 d-flex flex-column justify-content-center' style={{minHeight:"200px"}}>
          <h5 className='text-theme-inv text-center '>Calendar Hooked Up To Google Calendar</h5>
          <h6 className='text-theme-inv text-center '>- We'll use Google APIs to pull events on the calendar</h6>
          <h6 className='text-theme-inv text-center '>- And those events will show up as available slots</h6>
          <h6 className='text-theme-inv text-center '>- Next.js will send an email when a call is scheduled</h6>
          <h6 className='text-theme-inv text-center '>- Maybe, we need to accept it. </h6>
        </div>
        <div className="col">
          <p className="pe-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus est sem, pretium vel lacinia sit amet, laoreet iaculis lorem. Fusce laoreet ullamcorper urna, rhoncus condimentum diam venenatis vel. Sed hendrerit neque sit amet ipsum condimentum, vel laoreet erat fringilla. Vivamus laoreet mattis nunc, at laoreet justo varius id. Donec luctus maximus feugiat. Phasellus ligula urna, pharetra vel nibh ac, iaculis elementum dolor. Vivamus sollicitudin libero sapien, ut lacinia enim suscipit quis. Etiam in convallis libero. In condimentum velit et elit eleifend pulvinar. Nunc massa ipsum, efficitur auctor augue vel, maximus ultrices dui. In pellentesque mauris id nisl vestibulum, et accumsan metus aliquet. Fusce consectetur dapibus quam, eu gravida est mollis vel. Duis tempor, est nec condimentum malesuada, mi orci iaculis augue, a ultricies ligula arcu a nisl. Vestibulum euismod dictum ante vitae semper. Integer malesuada convallis quam sed blandit. Proin egestas augue et lectus tincidunt tincidunt.
          </p>
        </div>
      </div>
    </Container>        
  );
}
