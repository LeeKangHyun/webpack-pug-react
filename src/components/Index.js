import React from 'react';

import Header from './common/Header';
import Main from './container/Main';
import Footer from './common/Footer';
require('../stylesheets/common.scss');

const Index = ({children}) => {
  return (
    <div>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </div>
  );
};

export default Index;
