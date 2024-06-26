import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, ORIGIN, URL } from "@/app/pages/utils";

const CallRemoteValidMyOrigin: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. Allows my origin</h3>
      <p>In this section, my frontend call a server on the remote origin. The server define CORS to accept my origin </p>

      <Code source={URL.REMOTE_VALID_MY_ORIGIN} origin={ORIGIN.MY_ORIGIN} methods={"PUT"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteValidMyOrigin;