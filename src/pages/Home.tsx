import React from 'react';
import Header from '../components/common/Header';
import { formatNumber } from '../utills/format';

const COUNT = 100;

const Home = () => {
  return (
    <>
    <Header></Header>
    <div>home body</div>
    <div>count : {formatNumber(COUNT)}</div>
    </>
  )
}

export default Home;