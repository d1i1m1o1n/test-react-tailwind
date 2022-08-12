import React from 'react';

const Statistics = () => {
  return (
    <ul className="flex flex-wrap xl:flex-nowrap gap-14 justify-center mb-36">
      <li className="flex items-center gap-4 max-w-[400px]">
        <span className="text-4xl mr-1 text-[#E0E6E9]">•</span>
        <span className="text-primary text-7xl font-semibold">293</span>
        HD видеоурока длительностью 3 - 15 минут
      </li>
      <li className="flex items-center gap-4 max-w-[400px]">
        <span className="text-4xl mr-1 text-[#E0E6E9]">•</span>
        <span className="text-primary text-7xl font-semibold">6</span>
        Мероприятий на курсе (Хакатоны, мастер классы, разборы и т.д.)
      </li>
      <li className="flex items-center gap-4 max-w-[400px]">
        <span className="text-4xl mr-1 text-[#E0E6E9]">•</span>
        <span className="text-primary text-7xl font-semibold">193</span>
        заданий и тестов для закрепления
      </li>
    </ul>
  );
};

export default Statistics;