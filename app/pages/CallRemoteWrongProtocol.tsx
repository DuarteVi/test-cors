import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemoteWrongProtocol: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. Allows my origin but with the wrong protocol</h3>
      <p>In this section, my frontend call a server on the remote origin. The server define CORS to accept my domain and my port but not my protocol.</p>

      <Code source={url} origin={ORIGIN.WRONG_PROTOCOL} methods={"DELETE"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteWrongProtocol;