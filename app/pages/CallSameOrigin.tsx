import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod } from "@/app/pages/utils";

const CallSameOrigin: React.FC<CallSection> = ({url}) => {

  return (
    <div>
      <h2>Do request on the same origin.</h2>
      <p>In this section, my frontend call a server on the same origin. The server do not define CORS in anyway. However, because it is the same origin, the request will be allowed</p>

      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallSameOrigin;