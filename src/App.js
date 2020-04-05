import React from 'react';
import { ThemeProvider as ThemeProviderStyled } from 'styled-components';
import { ThemeProvider, ThemeConsumer } from './context/theme-context';

import { Container } from './style';

function App() {
  return (
    <ThemeProvider>
      <ThemeConsumer>
        {({ state, actions }) => (

          <>
            <ThemeProviderStyled theme={state.theme}>
              <Container>
                <p> Hello!</p>
              </Container>
            </ThemeProviderStyled>
            <button onClick={() => actions.toggleTheme()}>Trocar tema</button>
          </>
        )}
      </ThemeConsumer>

    </ThemeProvider>
  );
}

export default App;
