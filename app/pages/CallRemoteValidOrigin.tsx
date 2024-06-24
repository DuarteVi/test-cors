import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod } from "@/app/pages/utils";

const CallRemoteValidOrigin: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h2>{index}. Do request on remote API : allows all requests</h2>
      <p>In this section, my frontend call a server on the remote origin. The server define CORS to allowing for my origin and my methods</p>

      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.HEAD} url={url}></MakeACall>
      <MakeACall method={HttpMethod.POST} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
      <MakeACall method={HttpMethod.PUT} url={url}></MakeACall>
      <MakeACall method={HttpMethod.PATCH} url={url}></MakeACall>
      <MakeACall method={HttpMethod.OPTIONS} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteValidOrigin;