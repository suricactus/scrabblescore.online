import ReactGA from 'react-ga';
import React from 'react';
import GameSettings from '../GameSettings/GameSettings';
import ScoreKeeper from './ScoreKeeper';
import './App.css';
import { logEvent, getPersistedState, clearPersistedState } from '../../logic/util';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleGameStart = this.handleGameStart.bind(this);
    this.handleWindowSizeChange = this.handleWindowSizeChange.bind(this);
    this.handlePopState = this.handlePopState.bind(this);
    this.handleResetGame = this.handleResetGame.bind(this);
    /*
      DO NOT CHANGE INITIAL STATE:
      the initial rendering of the component and the static rendering must be the same
    */
    this.state = {
      playerNames: [],
      language: 'en',
      width: 10,
    };
  }

  static maybeResumeGame() {
    if (process.env.NODE_ENV === 'test')
      return false;

    const shouldResume = window.confirm('You have a game in progress.\nWould you like to resume it?');
    logEvent('game-resume', {didResume: shouldResume});

    return shouldResume;
  }

  componentDidMount() {
    /* 
     * pushState() allows to modifiy browser history entries;
     * popstate listens for changes in browser history,like back/front button click;
     * when history is changed, this.handlePopState function is being fired;
     * this.handlePopState changes state for ScrabbleScoreKeeper component;
     * ScrabbleScoreKeeper component rerenders, displaying correct state;
     */

    const { playerNames } = this.state;
    window.history.pushState({ playerNames: playerNames }, null) 
    window.addEventListener('popstate', this.handlePopState); 

    ReactGA.initialize('UA-144533310-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
    this.handleWindowSizeChange();

    const restoredState = getPersistedState();
    if (restoredState) {
      if (this.constructor.maybeResumeGame())
        this.setState({playerNames: restoredState.playerNames});
      else
        clearPersistedState();
    }
  }

  UNSAFE_componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
    window.removeEventListener('popstate', this.handlePopState);
  }

  handlePopState(event) {
   const stateObj = event.state;
   this.setState({playerNames: stateObj.playerNames})
  }

  handleWindowSizeChange() {
    this.setState({ width: window.innerWidth });
  }

  handleGameStart(playerNames, language) {
    logEvent('start-game', {'player-names': playerNames, 'language': language});
    window.history.pushState({ playerNames: playerNames }, null)
    this.setState({ playerNames, language });
  }

  handleResetGame() {
    this.setState({playerNames: []});
    clearPersistedState();
  }

  renderGame(isMobile) {
    const { playerNames, language } = this.state;
    return playerNames.length === 0
      ? <GameSettings onGameStart={this.handleGameStart} />
      : <ScoreKeeper
          onNewGame={this.handleResetGame}
          playerNames={playerNames}
          language={language}
          isMobile={isMobile}
        />;
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 815;
    return (
      <div className={`main ${isMobile ? 'mobile' : 'desktop'}`}>
        {this.renderGame(isMobile)}
      </div>
    );
  }
}

export default App;