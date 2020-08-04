import React from 'react';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main';
import { Footer } from '../../components/Footer/Footer';

export const MainPage = () => (
  <div
    className="wrapper"
  >
    <Header />
    <Main />
    <Footer />
  </div>
);
