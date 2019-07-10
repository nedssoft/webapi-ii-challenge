import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './Header/Header'
import Posts from './Posts/Posts'
import GlobalStyle from "./styled/GlobalStyles";
const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
function App() {
  return (
    <React.Fragment>
    <GlobalStyle />
    <AppWrapper>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Posts} />
        </Switch>
      </Router>
    </AppWrapper>
    </React.Fragment>
  );
}

export default App;
