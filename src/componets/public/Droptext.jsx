import React, {useState} from 'react';
import DroptextItem from "./DroptextItem";
import './Droptext.scss'

const Droptext  = () => {
      
    return (
        <div className='mainWrap'>
           
           <DroptextItem title="FIabilité" text="this is the text of FIabilité Tempora, sint? Temporibus sint illum ipsum aperiam saepe ratione sapiente cupiditate, illum ipsum aperiam saepe ratione sapiente cupiditatepossimus quisquam praesentium ea! " />
           <DroptextItem title="Respect" text="this is the text of Respect Tempora, sint? Temporibus sint illum ipsum aperiam saepe ratione sapiente cupiditate, illum ipsum aperiam saepe ratione sapiente cupiditatepossimus quisquam praesentium ea! " />
           <DroptextItem title="FIabilité" text="this is the text of Service Tempora, sint? Temporibus sint illum ipsum aperiam saepe ratione sapiente cupiditate, illum ipsum aperiam saepe ratione sapiente cupiditatepossimus quisquam praesentium ea! " />
           <DroptextItem title="Sécurité" text="this is the text of Sécurité Tempora, sint? Temporibus sint illum ipsum aperiam saepe ratione sapiente cupiditate, illum ipsum aperiam saepe ratione sapiente cupiditatepossimus quisquam praesentium ea! " />
           
        </div>
    );
};

export default Droptext;