import React from 'react';
import question from '../../images/icons/question.svg';

const How = () => {
  return (
    <>
      <h2 className="text-[54px] font-semibold mb-10 text-center">
        <img src={question} className="mr-8 inline relative -top-1" alt="question icon"/>
        Как именно ты станешь разработчиком
      </h2>
      <p className="text-2xl max-w-[970px] mx-auto mb-14 text-center">На курсе ты не просто изучаешь теоретический материал. в процессе изучения ты повторяете за действующим разработчиком, после чего <span className="font-semibold">закрепляешь знания на заданиях и проектах</span>.</p>
    </>
  );
};

export default How;