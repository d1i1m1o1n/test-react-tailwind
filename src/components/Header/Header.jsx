import React from 'react';
import './Header.scss';
import commandLine from '../../images/icons/command-line.svg';
import jsAnim from '../../images/javascript-anim.png';
import jsAnim2x from '../../images/javascript-anim@2x.png';

const Header = () => {
  return (
    <header className="pt-[99px] pb-[80px] xl:pl-[160px]">
      <div className="bg-secondary xl:rounded-l-[40px]">
        <div className="header__inner pt-16 pl-12 pb-24 pr-12 xl:pr-0 xl:pl-24 text-white">
          <div className="hidden xl:block bg-dots bg-dots--bl"/>
          <div className="flex">
            <div className="xl:w-1/2">
              <h1 className="text-[54px] font-semibold mb-10">
                Профессия<br/>
                Frontend — разработчик
              </h1>
              <p className="text-3xl font-semibold mb-6">
                Стань с нуля продвинутым Junior разработчиком за 7 месяцев с знанием технологий больше, чем у других кандидатов
              </p>
              <p className="text-lg mb-14">
                Начиная с основ изучишь JavaScript, разберешься с самыми популярными технологиями, научишься писать Frontend <span
                className="font-semibold">на фреймворке</span> и связывать его с Backend. <span className="font-semibold">Навыки после курса оцениваются от 100 т.р.</span>
              </p>
              <button type="button" className="bg-primary text-white px-10 py-7 rounded-full">Задать вопрос об обучении</button>
            </div>
            <div className="hidden xl:block relative w-1/2 -mb-24 flex items-end">

              <div className="z-10 absolute bottom-0 right-0 w-full h-[680px] overflow-hidden">
                <div className="bg-dots bg-dots--tl"/>
                <img src={jsAnim}
                     srcSet={`${jsAnim} 1x, ${jsAnim2x} 2x`}
                     width="928" height="680"
                     className="absolute left-0 bottom-0 max-w-none"
                     alt="screenshot"
                />
              </div>

              <div className="absolute left-10 -bottom-16 z-20 w-[400px]">
                <div className="absolute left-20 -top-12 rounded-3xl p-4 bg-secondary z-20">
                  <img src={commandLine} alt="command line icon"/>
                </div>
                <div className="header__tooltip">
                  <span className="text-primary">Обучение</span> для тех, <span className="opacity-30">кто готов учиться 10 часов в неделю</span>, <span className="text-primary">чтобы получить результат</span>. Мы даем <span className="opacity-30">необходимые навыки</span> на продвинутом уровне, <span className="opacity-30">убирая все лишнее</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;