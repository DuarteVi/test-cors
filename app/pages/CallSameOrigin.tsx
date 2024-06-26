import MakeACall from "@/app/pages/MakeACall";
import { CallSection, HttpMethod, URL } from "@/app/pages/utils";

const CallSameOrigin: React.FC<CallSection> = ({url}) => {

  return (
    <div>
      <h3>Do request on the same origin.</h3>
      <p>In this section, my frontend call a server on the same origin. The server do not define CORS in anyway. However, because it is the same origin, the request will be allowed</p>

      <h5>CORS defined on URL : {URL.SAME_ORIGIN}</h5>
      <pre style={{backgroundColor: '#eee', borderRadius: '3px', padding: '1em', width: 'min'}}>
              &#123;
              &#125;
      </pre>
      <MakeACall method={HttpMethod.GET} url={url}></MakeACall>
      <MakeACall method={HttpMethod.DELETE} url={url}></MakeACall>
    </div>
  );
};

export default CallSameOrigin;