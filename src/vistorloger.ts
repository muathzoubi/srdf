
let _ip:string;
  const setIp=(ip:string)=>{
  _ip   =ip! as string
  }
  export const getIp=()=>{
      return _ip
    }
  
export const getIpAdd = async() => {
      // Generate a visitor ID (or fetch from user session, if available)
      const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      fetch("https://api.ipgeolocation.io/ipgeo?apiKey=fbccb577872e478caf50ba7550c67df4", requestOptions as any)
        .then((response) => response.json())
        .then((result) => {
           setIp(result.ip as string)
        })
        return getIp()
  };


