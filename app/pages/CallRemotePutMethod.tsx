import Code from "@/app/pages/Code";
import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, URL } from "@/app/pages/utils";

const CallRemotePutMethod: React.FC<CallSection> = ({index, url}) => {

  return (
    <div>
      <h3>{index}. allows only method &quot;PUT&quot;</h3>
      <p>In this section, my frontend call a server on the remote origin. The server define CORS to accept any website but with only the &quot;PUT&quot; method.</p>

      <Code source={URL.REMOTE_PUT_METHOD} origin={"*"} methods={"PUT"}></Code>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.HEAD} url={url}></MakeACall>
      <MakeACall method={HttpMethod.POST} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
      <MakeACall method={HttpMethod.PUT} url={url}></MakeACall>
    </div>
  );
};

export default CallRemotePutMethod;