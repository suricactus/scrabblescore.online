import React from 'react';
import Tooltip from '../Tooltip/Tooltip';
import ModifierTile from './ModifierTile';
import { indexesOf } from '../../logic/util';

class WithModifierPopover extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.state = {
      modifiers: [],
      tooltipShown: false,
    };
  }

  handleClick(modifier, e) {
    const { modifiers } = this.state;
    const { onChange } = this.props;
    const modifiersCopy = modifiers.slice();

    const indexes = indexesOf(modifiersCopy, modifier);
    if (indexes.length > 0)
      modifiersCopy.splice(indexes[0], 1)
    else
      modifiersCopy.push(modifier)
    this.setState({ modifiers: modifiersCopy, tooltipShown: false });
    onChange(modifiersCopy);
    e.preventDefault();
    e.stopPropagation();
  }

  handleVisibilityChange(argument) {
    this.setState({ tooltipShown: argument });
  }

  render() {
    const { tooltipShown } = this.state;
    const { children } = this.props;
    return (
      <Tooltip
        onVisibilityChange={this.handleVisibilityChange}
        tooltipShown={tooltipShown}
        placement="bottom"
        trigger="click"
        portalContainer={document.getElementsByClassName('scrabble-input-box')[0]}
        tooltip={(
          <div>
            <ModifierTile modifier="double-letter" onClick={this.handleClick} />
            <ModifierTile modifier="double-word" onClick={this.handleClick} />
            <ModifierTile modifier="triple-letter" onClick={this.handleClick} />
            <ModifierTile modifier="triple-word" onClick={this.handleClick} />
            <ModifierTile modifier="blank" onClick={this.handleClick} />
          </div>
        )}
      >
        {children}
      </Tooltip>
    );
  }
}

export default WithModifierPopover;
