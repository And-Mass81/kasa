import React from 'react';
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import  Slider from '../componets/public/Slider';
import  InfoLogement from '../componets/public/InfoLogement';
import axios from 'axios';





const Logement = () => {  

    const [singleLogement, setSingleLogement] = useState();
    const params = useParams(); // get route /:id
    const navigate = useNavigate(); // redirect to 404 with state
    const[load, setLoad]= useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get("/logInfo.json"); // await becouse you need to waith for the request 
            const single = res.data.find(({id}) => id === params.id); // i can pass to params the id with single
            console.log(single);
            res.data.map(() => setSingleLogement(single));
            if (single === undefined) {
                navigate("/404", { state: { message: "Oups! La page que vous demandez n'existe pas." } });
            }
           
            setLoad(false);// httml sync return
         
            
        };
        fetchData();
    }, []) ; // just run once , if i put a parametre it will run as meny times as the parametre change

    
    if(load){
        return  <div> loading...</div>
    }

    return (

       
        <div>
            {<Slider slideData={singleLogement.pictures} /> }
            {<InfoLogement
                infoTitle={singleLogement.title}
                infoLocation={singleLogement.location}
                infoTags={singleLogement.tags}
                infoHostName={singleLogement.host.name}
                infoHostPic={singleLogement.host.picture}
                infoDescript={singleLogement.description}
                InfoEquip ={singleLogement.equipments} 
                rateDataInfo ={singleLogement.rating} 
            />}
            

        </div>
       
    );
    };

export default Logement;

