import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, URL } from "@/app/pages/utils";

const CallRemoteNobodyOrigin: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. allows only &quot;other-website.com&quot;</h3>
      <p>In this section, my frontend call a server on the remote origin. The server define CORS to accept only "other-website.com" without any method.</p>
      <p>Take a look how the DELETE request is not even sent.</p>

      <Code source={URL.REMOTE_NOBODY_ORIGIN} origin={"other-website.com"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallRemoteNobodyOrigin;