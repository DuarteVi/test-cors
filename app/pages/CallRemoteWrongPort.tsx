import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemoteWrongPort: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. Allows my origin but with the wrong port</h3>
      <p>In this section, my frontend call a server on the remote origin. The server define CORS to accept my domain and my protocol but not my port.</p>

      <Code source={url} origin={ORIGIN.WRONG_PORT} methods={"DELETE"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteWrongPort;