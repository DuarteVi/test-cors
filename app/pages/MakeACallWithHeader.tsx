import axios from "axios";
import { useState } from "react";

interface MakeACallProps {
  method: string;
  url: string;
}

const MakeACallWithHeader: React.FC<MakeACallProps>  = ({method, url}) => {

    const [data, setData] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const handleClick = async () => {
        setLoading(true);
        setError(null);
        setData(null);
        try {
            const response = await axios({
                method,
                url,
                headers: {
                  'Content-Type': 'application/json',
                  'X-Custom-Header': 'valeur'
                }
            });
            setData(JSON.stringify(response.data));
        } catch (error) {
            setError('Something wrong: ' + error);
        } finally {
            setLoading(false);
        }
    };

  return (
    <div style={{ display: 'flex', alignItems: 'center'}}>
        <button onClick={handleClick} style={{ height: '4em', width: '8em', margin: '1em'}}>{method} with custom header</button>
        {loading && <p>loading...</p>}
        {error && <p>{error}</p>}
        {data && <p>Result: {data}</p>}
    </div>
  );
};

export default MakeACallWithHeader;