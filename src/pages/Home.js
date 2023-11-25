
import './home.scss'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";



const Home = () => {

    const [data,setData] = useState([]);

    useEffect(()=> {
        axios.get("/logInfo.json")
        .then((res) => {
            console.log(res.data)
            setData(res.data)
        })
        .catch(err => console.log(err))
    },[]);
   
    return (
        <main>
            <div className='heroHome'>
                <h1>Chez vous, partout et ailleurs</h1>
            </div>

            <div className="Gallery">

               {  <ul className="image-gallery">
                    {
                        data.map((appart,id) => (
                            <li key={id}>
                                <div className='imgWrap'>
                                <Link to={`/logement/${appart.id}`}><img className='imgCover' src={appart.cover} alt={appart.title} /></Link>
                                    <span className="overlay">{appart.title}</span>
                                </div>

                            </li>
                        ))
                    }
                </ul> }
            </div>

        </main>
    );
};

export default Home;