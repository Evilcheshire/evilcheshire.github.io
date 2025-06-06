import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import ScrollToTop from './general/ScrollToTop';
import menuImg from '../assets/images/menu.jpg';

function Main() {
  return (
    <main>
      <section className="home-img">
        <h2>Ласкаво просимо до Селести!</h2>
        <p>Скуштуйте найкращі страви зі свіжих інгредієнтів, вишуканих смаків та майстерного приготування. 
          Наші кухарі готують кожну страву з пристрастю та креативністю, щоб подарувати вам незабутні враження</p>
        <span className="scroll-down">Розкрийте магію смаку нижче</span>
      </section>

      <section className="teal-bg">
        <div className="menu-text">
          <h3>Ознайомтеся з нашим меню</h3>
          <p>Відкрийте для себе різноманітність вишуканих страв: від соковитих морепродуктів і стейків преміум-класу до свіжих салатів і вишуканих десертів. 
            Кожна страва готується з інгредієнтів найвищої якості.</p>
          <Link to="./menu">Ознайомитися з меню</Link>
        </div>
        <img src={menuImg} alt="Menu" />
      </section>

      <section className="chefs-img">
        <h3>Знайомтеся з нашими кухарями</h3>
        <p>Наші шеф-кухарі світового класу привносять на кухню багаторічний досвід і творчість.
            Вони присвячують себе створенню страв, які задовольняють почуття та покращують ваш обідній досвід.</p>
            <Link to="./chefs">Познайомились з командою</Link>
      </section>

      <section className="celeste-bg">
        <h3>Дізнайтесь більше про нас</h3>
        <ul>
          <li><strong>Якісні інгредієнти:</strong> Ми використовуємо лише найсвіжіші та найякісніші інгредієнти.</li>
          <li><strong>Виняткове обслуговування:</strong> Наша команда прагне зробити кожен візит особливим.</li>
          <li><strong>Автентичність:</strong> Ми святкуємо традиційні смаки з сучасним поворотом.</li>
          <li><strong>Стійкість:</strong> Ми надаємо пріоритет екологічно чистим практикам та місцевим джерелам.</li>
          <li><strong>Тепла атмосфера:</strong> Гостинний простір, де кожен почувається як вдома.</li>
        </ul>
        <Link to="./about">Дізнатися більше</Link>
      </section>
    </main>
  );
}

export default Main;