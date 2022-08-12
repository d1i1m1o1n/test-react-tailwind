import React from 'react';
import Tabs from "../Tabs/Tabs";
import Tab from "../Tabs/Tab";
import codeIcon from "../../images/icons/code.svg";
import knowledgeIcon from "../../images/icons/knowledge.svg";
import fullstackIcon from "../../images/icons/fullstack.svg";
import atomIcon from "../../images/icons/atom.svg";
import nodejsIcon from "../../images/icons/nodejs.svg";

const WhatWillCourseGiveYou = () => {
  return (
    <div className="pt-32 pb-24 px-5 mb-20 bg-basic-black text-white rounded-[20px]">
      <h2 className="text-[54px] font-semibold mb-20 text-center">Что тебе даст прохождение курса?</h2>

      <Tabs className="flex gap-10 justify-center text-2xl font-semibold mb-24">
        <Tab label="SKILLS UPGRADE">
          <div className="flex justify-around flex-wrap xl:flex-nowrap gap-12">
            <div className="flex flex-col items-center max-w-md gap-7 text-center">
              <img src={codeIcon}/>
              <p>Научишься понимать терминологию, документацию и писать код на уровне востребованных  разработчиков</p>
            </div>
            <div className="flex flex-col items-center max-w-md gap-7 text-center">
              <img src={knowledgeIcon}/>
              <p>твои знания превратятся в систему, ты не просто изучишь технологии, но и поймешь как развиваться дальше</p>
            </div>
            <div className="flex flex-col items-center max-w-md gap-7 text-center">
              <img src={fullstackIcon}/>
              <p>Создашь Fullstack приложение, которое покажет что твои навыки выше чем у стандартного junior</p>
            </div>
          </div>
        </Tab>
        <Tab label="STRONG HARD SKILLS">
          <div className="flex justify-around flex-wrap xl:flex-nowrap gap-12">
            <div className="flex flex-col items-center max-w-md gap-7 text-center">
              <img src={atomIcon}/>
              <p>Создашь с помощью фреймворка React  визуальную часть приложения: элементы, анимация</p>
            </div>
            <div className="flex flex-col items-center max-w-md gap-7 text-center">
              <img src={nodejsIcon}/>
              <p>Изучишь NodeJS на достаточном уровне чтобы связывать frontend и backend</p>
            </div>
            <div className="flex flex-col items-center max-w-md gap-7 text-center">
              <img src={knowledgeIcon}/>
              <p>Овладеешь базой,  от которого можно отталкиваться и учить любую технологию на JavaScript</p>
            </div>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default WhatWillCourseGiveYou;