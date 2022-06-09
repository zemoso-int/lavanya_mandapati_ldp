import React from 'react';
import {
  HashRouter
} from "react-router-dom";
import Header from '../../my-app/src/components/Header/Header'
import {theme} from './components/Theme/Theme';
import {ThemeProvider } from '@material-ui/core/styles';

const App = () => {
  return (
    <HashRouter>
    <div>
    <ThemeProvider theme={theme}>
     <Header /> 
     </ThemeProvider> 
  </div> 
  </HashRouter> 
  
   
 
  );
};

export default App;