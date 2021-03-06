import React from 'react';
import Game from '../../logic/game';
import ScoreGrid from '../ScoreGrid/ScoreGrid';
import ScoreGridMobile from '../ScoreGrid/ScoreGridMobile';
import CallPlayerToAction from './CallPlayerToAction';
import InGameControls from './InGameControls';
import InGameOverControls from './InGameOverControls';
import { getPersistedState, persistState } from '../../logic/util';

class ScoreKeeper extends React.Component {
  constructor(props) {
    super(props);
    this.handleUndo = this.handleUndo.bind(this);
    this.handleSetGame = this.handleSetGame.bind(this);
    this.renderWinner = this.renderWinner.bind(this);

    const { playerNames } = this.props;
    const restoredState = getPersistedState();
    this.state = restoredState
      ? {
          game: Game.fromPlain(restoredState.game),
          games: restoredState.games.map(Game.fromPlain),
        }
      : {
          game: Game.createNewGame(playerNames.length),
          games: [],
        };
  }

  handleSetGame(currentGame) {
    const { game, games } = this.state;
    const { playerNames } = this.props;
    const newState = {game: currentGame, games: [...games.slice(), game]};
    this.setState(newState);
    persistState({'playerNames': playerNames, ...newState});
  }

  handleUndo() {
    const { games } = this.state;
    const { playerNames } = this.props;
    const previousGames = games.slice(0, -1);
    const game = games[games.length - 1];
    const newState = { game, games: previousGames };
    this.setState(newState);
    persistState({'playerNames': playerNames, ...newState});
  }

  renderWinner() {
    const { game } = this.state;
    const { playerNames } = this.props;
    const turnBeforeLeftOvers = game.leftOversTurnNumber - 1;
    const winners = game.getWinners();
    if (winners.length > 1) {
      const winnersTie = game.getWinners(turnBeforeLeftOvers);
      return winnersTie.map(winnerIndex => (winnersTie.length > 1
        ? `${playerNames[winnerIndex]}: ${game.getTotalScore(winnerIndex, turnBeforeLeftOvers)} points`
        : `${playerNames[winnerIndex]} won with ${game.getTotalScore(winnerIndex, turnBeforeLeftOvers)} points!`)).join(', ');
    }
    return `${playerNames[winners[0]]} won with ${game.getTotalScore(winners[0])} points!`;
  }

  render() {
    const { game, games } = this.state;
    const { playerNames, language, isMobile, onNewGame } = this.props;

    const controlProps = {
      onSetGame: this.handleSetGame,
      onUndo: this.handleUndo,
      undoDisabled: games.length === 0,
      onNewGame,
      isMobile,
      game,
      language,
    };

    const toDisplayCallPlayerToAction = () => {
      if (!isMobile) {
        return  <CallPlayerToAction game={game} playerNames={playerNames} isMobile={isMobile}/>
      }
    };

    return (
      <div className="score-keeper">
        <div className="container">
          <a id="small-logo" href="/">
            <img src="logo.png" alt="Scrabble score logo"/>
          </a>
          <h1 className="title">Scrabble Score Sheet</h1>
          {isMobile
            ? <ScoreGridMobile playerNames={playerNames} game={game} language={language} />
            : <ScoreGrid playerNames={playerNames} game={game} language={language} />
          }
          {!game.areLeftOversSubmitted()
            ? toDisplayCallPlayerToAction()
            : (
              <div className="winner">
                <h1>{this.renderWinner()}</h1>
              </div>
            )
              }
          {!game.isGameOver()
            ? <InGameControls {...controlProps} />
            : <InGameOverControls {...controlProps} />
              }
          <h3>How to use Scrabble Score Online:</h3>
        <ul>
          <li>To submit a word, type the word in the input box (the white rectangle above the buttons) then click END TURN</li>
          <li>When scoring a word with a tile on a prime square (e.g., double-word), click on the coresponding tile in the input box
              then choose a coresponding option from the window..</li>
          <li>If you made a mistake, you may use unlimited UNDO.</li>

          <li>
            When forming more than one word, press ADD WORD after entering each word in the input box.
          </li>
          <li>
            When a player used all seven tiles in a single turn, click BINGO.
            This adds a 50 points bonus.
          </li>
          <li>
          When using a BLANK tile, click on the coresponding tile and mark it as such.
          </li>
          <li>
            When all the players finished their last turn, click END GAME.
            Players will be then asked to enter their leftover tiles.
            Players with leftover tiles get their leftover points deducted from their score.
            Players with no leftovers collect the leftover points of all other players.
          </li>
          <li>
            To start a new game, click on the logo at the top of the page.
          </li>
        </ul>
        </div>
      </div>
    );
  }
}

export default ScoreKeeper;
