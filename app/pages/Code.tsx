
interface CodeProps {
    source: string;
    origin: string;
    methods?: string;
  }

const Code: React.FC<CodeProps> = ({source, origin, methods}) => {
  
    if (methods) {
        return (
            <div>
              <h5>CORS defined on URL : {source}</h5>
              <pre style={{backgroundColor: '#eee', borderRadius: '3px', padding: '1em', width: 'min'}}>
                &#123;<br/>
                &nbsp;&nbsp;headers: 	&#91;<br/>
          
                &nbsp;&nbsp;&nbsp;&nbsp;&#123; key: &quot;Access-Control-Allow-Origin&quot;, value: &quot;{origin}&quot; &#125;,<br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&#123; key: &quot;Access-Control-Allow-Methods&quot;, value: &quot;{methods}&quot; &#125;<br/>
                
          
                &nbsp;&nbsp;&#93;<br/>
                &#125;
              </pre>
            </div>
          );
    } else {
        return (
          <div>
            <h5>CORS defined on URL : {source}</h5>
            <pre style={{backgroundColor: '#eee', borderRadius: '3px', padding: '1em', width: 'min'}}>
              &#123;<br/>
              &nbsp;&nbsp;headers: 	&#91;<br/>
        
              &nbsp;&nbsp;&nbsp;&nbsp;&#123; key: &quot;Access-Control-Allow-Origin&quot;, value: &quot;{origin}&quot; &#125;<br/>
        
              &nbsp;&nbsp;&#93;<br/>
              &#125;
            </pre>
          </div>
          );
    }
  
};

export default Code;