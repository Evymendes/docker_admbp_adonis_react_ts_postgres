import { useEffect, useState } from 'react';


const useScript = (path: string, name: any) => {
  const [lib, setLib] = useState({})

  useEffect(() => {
    const script = document.createElement('script');


    script.src = path;
    script.type = 'text/javascript'
    script.async = true;
    script.onload = () => setLib({ [name]: window[name] })


    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [path])
  return lib
}

export default useScript;
