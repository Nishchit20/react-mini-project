import React, { useEffect, useState } from 'react';
import axios from 'axios';
export const Testax = ()=>{
    const [data, setData] = useState([])
    useEffect(() => {
      fetchdata()
    }, [])
    const fetchdata = async () => {
      
      const response = await axios.get("https://localhost:7009/api/Cards");
      setData(response.data)
  
      console.log(response.data);
  
    }

    return (
        <>
                {data.map((x)=>(
                    <div className="col-md-3 col-sm-4 col-xs-12 card me-2">
 
                    <img src={x.imgsrc} alt="" className="mt-2"/>

                    <div className="caption">
                        <h4 className="cap_head">{x.head}</h4>

                        <p className="cap_para">{x.para}</p>
                        <a href="#" className="fa fa-arrow-circle-o-right icon"></a>
                </div>
            </div>
                ))}
           
        </>
    );
}