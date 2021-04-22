import React from 'react';
import HomeTemplate from '../templates/homeTemplate';
import Sections from '../UI/organisms/sections';

const Home = () => {
  return (
    <>
      <HomeTemplate content={<Sections />} />
      <Sections />
    </>
  )
}

export default Home
