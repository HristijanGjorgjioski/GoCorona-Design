import React from 'react'
import { Container, Wrapper } from './app.styles'

import Main from './Main/Main'
import Sidebar from './SideBar/Sidebar'

const App = () => {
  return (
    <Container>
      <Wrapper>
        <Sidebar />
        <Main />
      </Wrapper>
    </Container>
  );
};

export default App;
