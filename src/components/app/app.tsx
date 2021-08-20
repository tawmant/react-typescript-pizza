import React from "react";
import AppHeader from '../app-header/app-header';
import './_app.scss';
import { Route } from 'react-router';
import Card from '../card/card';

const App: React.FC = () => {
  return (
    <div className="app__wrapper container">
      <div className="app__container">
        <AppHeader />
        <div className="app__content container">
          <Route exact path="/" component={Card} />
        </div>
      </div>
    </div>
  );
};

export default App;
