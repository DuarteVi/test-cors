import MakeACall from "@/app/pages/MakeACall";
import { HttpMethod } from "@/app/pages/utils";

const CallRemoteValidOrigin = ({url}) => {

  return (
    <div>
      <h2>Do request on remote API : allows all requests</h2>
      <p>In this section, my frontend call a server on the remote origin. The server define CORS to allowing for my origin and my methods</p>

      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteValidOrigin;