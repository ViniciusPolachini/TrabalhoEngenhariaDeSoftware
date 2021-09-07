import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Home from './pages/Home/index';

import ParecerCPP from './pages/PainelCPP/Parecer/index';

import PerfilAluno from './pages/PainelAluno/Perfil/index';
import RelatorioAluno from './pages/PainelAluno/Relatorio/index';

import ParecerOrientador from './pages/PainelOrientador/Parecer/index';


export default function Routes(){
    return (
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/CPP/Parecer" exact component={ParecerCPP} />
            <Route path="/Orientador/Parecer" exact component={ParecerOrientador} />
            <Route path="/Aluno/Perfil" exact component={PerfilAluno} />
            <Route path="/Aluno/Relatorio" exact component={RelatorioAluno} />
          </Switch>
        </BrowserRouter>
      );
}