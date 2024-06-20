import MakeACall from "@/app/pages/MakeACall";

const CallMyself = () => {

  // const route = 'http://my-site:3000/data';

  return (
    <div>
      <h2>Do request on the same origin.</h2>
      <p>In this section, my frontend call a server on the same origin. The server do not define CORS in anyway. However, because it is the same origin, the request will be allowed</p>

      <MakeACall></MakeACall>
    </div>
  );
};

export default CallMyself;