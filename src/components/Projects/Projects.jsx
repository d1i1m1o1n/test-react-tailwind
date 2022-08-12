import React from 'react';
import './Projects.scss';
import projects from '../../images/projects.png';
import projects2x from '../../images/projects@2x.png';

const Projects = () => {
  return (
    <div className="projects">
      <img srcSet={`${projects} 1x, ${projects2x} 2x`}
           src={projects}
           className="mx-auto mb-4"
           alt="Проекты участников"
      />
      <div className="mb-20 text-center text-sm">Проекты учеников</div>

      <div className="flex flex-wrap justify-around">
        <div className="projects__note max-w-xs xl:-translate-x-[200%] xl:translate-y-28">
          <div className="projects__note-title">2 Командных проекта</div>
          <p className="mb-4">Симуляция комерческого проекта - получаете ТЗ и организовываете командную разработку. Прокачивая навыки для будущей работы.</p>
          <p>
            <span className="font-medium">Проекты на тему:</span>
            <br/>
            - JavaScript плагин "Контекстное меню"
            <br/>
            - Cайт на React, презентующий команду участников
          </p>
        </div>

        <div className="projects__note max-w-sm xl:translate-x-[83%] xl:translate-y-64">
          <div className="projects__note-title">Индивидуальные проекты</div>
          <p className="mb-4">
            Чтобы свободно чуствовать себя на позиции junior необходим опыт разработки.
            Вы создадите 3 проекта изучая материал от простого к сложному:
          </p>
          <p>
            1. Проект корзина с товарами для интернет-магазина
            <br/>
            2. Социальная сеть для поиска и знакомств
            <br/>
            3.Дипломный проект на выбранную вами тему:
            <br/>
            - Учет доходов и рассходов
            <br/>
            - Бронирование отелей
            <br/>
            - Интернет-магазин или схожий по сложности проект, которым вы выберети и утвердите с куратором
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;