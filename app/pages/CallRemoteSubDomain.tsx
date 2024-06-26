import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN } from "@/app/pages/utils";

const CallRemoteSubDomain: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. Allows my upper domain than mine</h3>
      <p>In this section, my frontend call a server on the remote origin. The server define CORS to accept a larger domain than mine.</p>

      <Code source={url} origin={ORIGIN.SUBDOMAIN} methods={"DELETE"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteSubDomain;