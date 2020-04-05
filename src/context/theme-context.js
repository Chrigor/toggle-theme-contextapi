import React, { Component } from 'react'
import Themes from './theme/index';

const { Provider, Consumer } = React.createContext();

export const ThemeConsumer = Consumer

export class ThemeProvider extends Component {
  state = {
    theme: Themes.dark
  }

  toggleTheme = () => {
    this.setState({ theme: this.state.theme === Themes.dark ? Themes.light : Themes.dark });
    console.log(this.state);
  }

  render() {
    return (
      <Provider value={{
        state: this.state,
        actions: {
            toggleTheme: this.toggleTheme,
        },
      }}>
        {this.props.children}
      </Provider>
    )
  }
}