import React from 'react';
import DroptextItem from "./DroptextItem";
import  RateStar from './RateStar';
import "./infoLogement.scss";

const InfoLogement = ({infoTitle,infoLocation,infoTags,infoHostName,infoHostPic,infoDescript,InfoEquip,rateDataInfo}) => {
    return (
        <div className='mainLogementWrap'>
            <div className='LogeInfoWrap'>
                <div className='titleLogeWrap'>
                    <div className='titleLocation'>
                        <h1>{infoTitle}</h1>
                        <p>{infoLocation}</p>
                        <ul className='tagList'>
                            {infoTags.map((item, idx) => {
                                return (
                                    <li className='singleTag'key={idx}>{item}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className='userWrap'>
                    <div className='imgTexWrap'>
                        <p>{infoHostName}</p>
                        <img src={infoHostPic} alt="" />
                    </div>
                    <RateStar rateData={rateDataInfo} />
                </div>
            </div>
            <div className='droptextWrap'>
                <div className='singleDroptext'>
                    <DroptextItem title="Description" text={infoDescript} />
                </div>
                <div className='singleDroptext'>
                    <DroptextItem title="Équipements" text=
                        {InfoEquip.map((item, idx) => {
                            return (
                                <li className='singEquipements' key={idx}>{item}</li>
                            )
                        })} />
                </div>
            </div>
        </div>
       

    );
};

export default InfoLogement;