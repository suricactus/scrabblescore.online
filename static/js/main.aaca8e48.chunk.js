(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){},25:function(e,t,n){e.exports=n(43)},30:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){},36:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),i=(n(30),n(4)),o=n(3),s=n(6),c=n(5),u=n(2),d=n(7),m=n(9),h=n(10),p=(n(33),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleChangeOfName=n.handleChangeOfName.bind(Object(u.a)(n)),n.handleChangeOfLanguage=n.handleChangeOfLanguage.bind(Object(u.a)(n)),n.handleGameStart=n.handleGameStart.bind(Object(u.a)(n)),n.state={numberOfPlayers:4,playerNames:["",""],language:"en"},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChangeOfName",value:function(e,t){var n=this.state.playerNames;(n=n.slice())[e]=t.target.value,this.setState({playerNames:n})}},{key:"handleChangeOfLanguage",value:function(e){this.setState({language:e.target.value})}},{key:"handleGameStart",value:function(e){var t=this.state,n=t.playerNames,a=t.language,r=this.props.onGameStart;e.preventDefault(),r(n.map(function(e,t){return e||"Player ".concat(t+1)}),a),m.a.event({category:"User",action:"Clicked Start Game"})}},{key:"render",value:function(){var e=this,t=this.state,n=t.language,a=t.numberOfPlayers,l=t.playerNames;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2 offset-sm-10"},r.a.createElement("select",{className:"custom-select",id:"language-select",value:n,onChange:this.handleChangeOfLanguage},r.a.createElement("option",{value:"en"},"English"),r.a.createElement("option",{value:"ru"},"Russian"),r.a.createElement("option",{value:"fr"},"French")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"logo"}),r.a.createElement("span",{className:"description"},r.a.createElement("p",null,"Hello and welcome to Scrabble Score Online. This is an easy-to-use tool that replaces pen-and-paper for keeping track of Scrabble scores."),r.a.createElement("p",null,"Simply fill in the players\u2019 names in order that they will take turns and press the \u201cSTART\u201d button."),r.a.createElement("p",null,"Relax and enjoy your game, now you don\u2019t need to do any math!")))),r.a.createElement("form",null,r.a.createElement("div",{className:"player-names-choice-container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},Object(h.a)(Array(a)).map(function(t,n){return r.a.createElement("input",{onChange:function(t){return e.handleChangeOfName(n,t)},id:"player-name-input-".concat(n),key:n,type:"text",className:l[n]&&l[n].length>0?"form-control player-name filled":"form-control player-name",placeholder:"Player ".concat(n+1)})}))))),r.a.createElement("div",{className:"start-btn-container"},r.a.createElement("button",{className:"btn start",type:"button",onClick:this.handleGameStart},"START"))))}}]),t}(r.a.Component)),g={en:{language:"English",scores:{a:1,e:1,i:1,o:1,u:1,l:1,n:1,r:1,s:1,t:1,d:2,g:2,b:3,c:3,m:3,p:3,f:4,h:4,v:4,w:4,y:4,k:5,j:8,x:8,q:10,z:10}},fr:{language:"French",scores:{e:1,a:1,i:1,n:1,o:1,r:1,s:1,t:1,u:1,l:1,d:2,m:2,g:2,b:3,c:3,p:3,f:4,h:4,v:4,j:8,q:8,k:10,w:10,x:10,y:10,z:10}},ru:{language:"Russian",scores:{"\u043e":1,"\u0430":1,"\u0435":1,"\u0438":1,"\u043d":1,"\u0440":1,"\u0441":1,"\u0442":1,"\u0432":1,"\u0434":2,"\u043a":2,"\u043b":2,"\u043f":2,"\u0443":2,"\u043c":2,"\u0431":3,"\u0433":3,"\u044c":3,"\u044f":3,"\u0451":3,"\u044b":4,"\u0439":4,"\u0437":5,"\u0436":5,"\u0445":5,"\u0446":5,"\u0447":5,"\u0448":8,"\u044d":8,"\u044e":8,"\u0444":10,"\u0449":10,"\u044a":10}}};function b(e,t,n){for(var a=e.slice(0,t);a.length<t;)a.push(n);return a}function f(e,t,n){var a=0;return e.split("").forEach(function(e,r){var l=g[n].scores[e.toLowerCase()];switch(t[r]){case"blank":l*=0;break;case"double-letter":l*=2;break;case"triple-letter":l*=3}a+=l}),t.forEach(function(e){switch(e){case"double-word":a*=2;break;case"triple-word":a*=3}}),a}var v=function(){function e(t,n){Object(i.a)(this,e),this.words=t,this.bingo=n}return Object(o.a)(e,[{key:"isEmpty",value:function(){return 0===this.words.length}},{key:"isPassed",value:function(e){return this.isEmpty()&&this!==e.getCurrentTurn()}},{key:"isComplete",value:function(e){return this!==e.getCurrentTurn()}},{key:"score",get:function(){for(var e=0,t=0;t<this.words.length;t++)e+=this.words[t].score;return this.bingo&&(e+=50),e}}],[{key:"empty",value:function(){return new e([],!1)}}]),e}(),y=function(){function e(t,n,a){Object(i.a)(this,e),this.currentPlayerIndex=n,this.playersTurns=t,this.leftOversTurnNumber=a}return Object(o.a)(e,[{key:"addWord",value:function(e){var t=this.getCurrentTurn(),n=new v([].concat(Object(h.a)(t.words),[e]),t.bingo);return this._setTurn(this.currentPlayerIndex,this.getCurrentTurnNumber(),n)}},{key:"endTurn",value:function(){var t=this;this.getCurrentTurn().isEmpty()&&(t=this._setTurn(this.currentPlayerIndex,this.getCurrentTurnNumber(),v.empty()));var n=(this.currentPlayerIndex+1)%this.playersTurns.length;return new e(this.isGameOver()&&this.getCurrentPlayer()===this.playersTurns[this.playersTurns.length-1]?t.playersTurns:t.playersTurns.map(function(e,t){return t===n?[].concat(Object(h.a)(e),[v.empty()]):e}),n,this.leftOversTurnNumber)}},{key:"setBingo",value:function(e){var t=new v(this.getCurrentTurn().words,e);return this._setTurn(this.currentPlayerIndex,this.getCurrentTurnNumber(),t)}},{key:"endGame",value:function(){return new e(this.playersTurns,this.currentPlayerIndex,this.getCurrentTurnNumber())}},{key:"isGameOver",value:function(){return null!==this.leftOversTurnNumber}},{key:"areLeftOversSubmitted",value:function(){return!(!this.isGameOver()||!this.playersTurns[this.playersTurns.length-1][this.leftOversTurnNumber]||0!==this.currentPlayerIndex)}},{key:"getReapers",value:function(){for(var e=[],t=0;t<this.playersTurns.length;t++)this.playersTurns[t][this.leftOversTurnNumber].isEmpty()&&e.push(t);return e}},{key:"getSumOfLeftovers",value:function(){for(var e=0,t=0;t<this.playersTurns.length;t++)e+=Math.abs(this.playersTurns[t][this.leftOversTurnNumber].score);return e}},{key:"distributeLeftOversToReapers",value:function(e,t){var n=this,a=this;return e.forEach(function(e){var r=new v([{value:"",modifiers:[],score:t}],!1);a=a._setTurn(e,n.leftOversTurnNumber,r)}),a}},{key:"getWinners",value:function(e){var t=this,n=this.playersTurns.map(function(n,a){return t.getTotalScore(a,e)});return function(e,t){for(var n=[],a=0;a<e.length;a++)e[a]===t&&n.push(a);return n}(n,Math.max.apply(Math,Object(h.a)(n)))}},{key:"_setTurn",value:function(t,n,a){var r=this.playersTurns[t].slice();return r[n]=a,new e(this.playersTurns.map(function(e,n){return n===t?r:e}),this.currentPlayerIndex,this.leftOversTurnNumber)}},{key:"getCurrentPlayer",value:function(){return this.playersTurns[this.currentPlayerIndex]}},{key:"getCurrentTurn",value:function(){return this.getCurrentPlayer().slice(-1)[0]}},{key:"getCurrentTurnNumber",value:function(){return this.playersTurns[0].length-1}},{key:"getCurrentPlayerIndex",value:function(){return this.currentPlayerIndex}},{key:"getRunningTotals",value:function(e){for(var t=this.playersTurns[e],n=[],a=0,r=0;r<t.length;r++)a+=t[r].score,n.push(a);return n}},{key:"getTotalScore",value:function(e,t){var n=this.getRunningTotals(e);return void 0!==t?n[t]:0===n.length?0:n[n.length-1]}}],[{key:"createNewGame",value:function(t){return new e(b([[v.empty()]],t,[]),0,null)}}]),e}();n(34);var E=function(e){var t=e.modifier,n=e.letter,a=e.score,l=e.onClick,i=null===t?"":t;return r.a.createElement("span",{className:"scrabble-letter ".concat(i),role:"button",onClick:l,onKeyDown:l},r.a.createElement("span",{className:"letter"},n.toUpperCase()),r.a.createElement("span",{className:"score"},a))},k=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.word,n=e.language,a=t.value.split("").map(function(e,a){return r.a.createElement(E,{key:a,letter:e,modifier:t.modifiers[a],score:f(e,[null],n)})});return r.a.createElement("div",null,a)}}]),t}(r.a.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderPassed",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,"PASS"))}},{key:"renderNormal",value:function(){var e=this.props,t=e.turn,n=e.language,a=t.words.map(function(e,a){return r.a.createElement("tr",{key:"row-word-".concat(a),className:"word-row"},r.a.createElement("td",{className:"word-cell"},r.a.createElement(k,{word:e,language:n})),0===a?r.a.createElement("td",{rowSpan:"".concat(t.bingo?t.words.length+1:t.words.length),className:"score-cell"},r.a.createElement("span",{className:"score-box"},t.score)):null)});return t.bingo&&a.push(r.a.createElement("tr",{key:"bingo",className:"table-row bingo-row"},r.a.createElement("td",{className:"bingo-cell"},r.a.createElement("span",{className:"bingo"},"BINGO!")))),a}},{key:"render",value:function(){var e=this.props,t=e.turn,n=e.game;return r.a.createElement("table",{className:"score-grid-cell"},r.a.createElement("tbody",null,t.isPassed(n)?this.renderPassed():this.renderNormal()))}}]),t}(r.a.Component);n(19);var N=function(e){var t=e.playerNames,n=e.game,a=e.language;return r.a.createElement("table",{className:"table table-bordered",align:"center"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"thead-rows"},r.a.createElement("th",{className:"move-header"},"Move"),t.map(function(e,t){return r.a.createElement("th",{key:t,className:"player-header"},e)}))),r.a.createElement("tbody",{className:"tbody-rows"},Object(h.a)(Array(n.getCurrentTurnNumber()+1)).map(function(e,t){return r.a.createElement("tr",{className:"turn-row",key:t},r.a.createElement("th",{className:"move-number"},t+1),n.playersTurns.map(function(e,l){return r.a.createElement("td",{key:l,className:(i=e[t],o=n.getCurrentTurn(),i===o?"player-turn active":"player-turn")},e[t]?r.a.createElement(O,{turn:e[t],language:a,game:n}):null);var i,o}))}),r.a.createElement("tr",{className:"total-score"},r.a.createElement("th",{className:"move"},"TOTAL"),t.map(function(e,t){return r.a.createElement("td",{key:t},n.getTotalScore(t))}))))};var C=function(e){var t=e.isMobile,n=e.game,a=e.playerNames;return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("span",{className:"call-player-to-action"},function(){var e=a[n.currentPlayerIndex];return{"mobile-ingame":"Submit a word or end turn","mobile-gameover":"Submit your leftovers","desktop-ingame":"".concat(e,", submit a word or end turn"),"desktop-gameover":"".concat(e,", submit your leftovers")}["".concat(t?"mobile":"desktop","-").concat(n.isGameOver()?"gameover":"ingame")]}()))},w=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"moveRowText",value:function(e){var t=this.props.game;return t.isGameOver()&&t.leftOversTurnNumber===e?"Leftovers Accounting":"Move ".concat(e+1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.playerNames,a=t.game,l=t.language,i=Object(h.a)(Array(n.length)).map(function(e,t){return a.getRunningTotals(t)});return r.a.createElement("table",{className:"table table-bordered"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"thead-rows"},r.a.createElement("th",{className:"playerNames",scope:"col"},"Names",r.a.createElement("br",null),"(Total)"),r.a.createElement("th",{className:"playerTurn",scope:"col"},"Player Turn"))),r.a.createElement("tbody",{key:"tbody",className:"tbody-rows"},a.getCurrentPlayer().map(function(t,o){return[r.a.createElement("tr",{key:"moverow".concat(o),className:"move-row"},r.a.createElement("td",{colSpan:"2"},e.moveRowText(o))),a.playersTurns.map(function(e,t){return e[o]?r.a.createElement("tr",{key:"move".concat(o,"_player").concat(t),className:"player-move-row"},r.a.createElement("td",{className:"player-name"},n[t],r.a.createElement("br",null),(s=e[o],a.areLeftOversSubmitted()||s.isComplete(a)?i[t][o]:null)),r.a.createElement("td",{className:"player-turn"},function(e,t){return e===a.getCurrentPlayer()&&e[t].isEmpty()&&!e[t].isPassed(a)&&!e[t].bingo}(e,o)?r.a.createElement(C,{game:a,playerNames:n,isMobile:!0}):r.a.createElement(O,{turn:e[o],language:l,game:a}))):null;var s})]})))}}]),t}(r.a.Component),T=n(15),j=n(24),S=n(23),W=(n(35),n(36),function(e){var t=e.children,n=e.tooltip,a=e.hideArrow,l=Object(j.a)(e,["children","tooltip","hideArrow"]);return r.a.createElement(S.a,Object.assign({},l,{tooltip:function(e){var t=e.arrowRef,l=e.tooltipRef,i=e.getArrowProps,o=e.getTooltipProps,s=e.placement;return r.a.createElement("div",o({ref:l,className:"tooltip-container"}),!a&&r.a.createElement("div",i({ref:t,className:"tooltip-arrow","data-placement":s})),n)}}),function(e){var n=e.getTriggerProps,a=e.triggerRef;return r.a.createElement("span",n({ref:a,className:"trigger"}),t)})}),U=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"tileText",value:function(){switch(this.props.modifier){case"double-letter":return"Double letter score";case"double-word":return"Double word score";case"triple-letter":return"Triple letter score";case"triple-word":return"Triple word score";case"blank":return"Blank tile";default:return null}}},{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.modifier;return r.a.createElement("span",{role:"button",onClick:function(e){return t(n,e)},onKeyDown:function(e){return t(n,e)},onTouchEnd:function(e){return t(n,e)},className:"modifier ".concat(n)},r.a.createElement("span",null,this.tileText()))}}]),t}(r.a.Component),G=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(u.a)(n)),n.handleVisibilityChange=n.handleVisibilityChange.bind(Object(u.a)(n)),n.state={modifier:null,tooltipShown:!1},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e,t){var n=this.state.modifier,a=this.props.onChange,r=e===n?null:e;this.setState({modifier:r,tooltipShown:!1}),a(r),t.preventDefault(),t.stopPropagation(),m.a.event({category:"User",action:"Clicked on Modifier"})}},{key:"handleVisibilityChange",value:function(e){this.setState({tooltipShown:e})}},{key:"render",value:function(){var e=this.state.tooltipShown,t=this.props.children;return r.a.createElement(W,{onVisibilityChange:this.handleVisibilityChange,tooltipShown:e,placement:"bottom",trigger:"click",portalContainer:document.getElementsByClassName("main")[0],tooltip:r.a.createElement("div",null,r.a.createElement(U,{modifier:"double-letter",onClick:this.handleClick}),r.a.createElement(U,{modifier:"double-word",onClick:this.handleClick}),r.a.createElement(U,{modifier:"triple-letter",onClick:this.handleClick}),r.a.createElement(U,{modifier:"triple-word",onClick:this.handleClick}),r.a.createElement(U,{modifier:"blank",onClick:this.handleClick}))},t)}}]),t}(r.a.Component),P=(n(41),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).textHiddenInput=r.a.createRef(),n.focus=n.focus.bind(Object(u.a)(n)),n.handleHiddenInputChange=n.handleHiddenInputChange.bind(Object(u.a)(n)),n.handleTileClick=n.handleTileClick.bind(Object(u.a)(n)),n.state={inFocus:!1},n}return Object(d.a)(t,e),Object(o.a)(t,null,[{key:"_clickOnElementByClass",value:function(e){var t=document.getElementsByClassName(e);0!==t.length&&t[0].click()}}]),Object(o.a)(t,[{key:"handleHiddenInputChange",value:function(e){var t=this.props,n=t.language,a=t.word,r=t.onChange,l=e.target.value.split("").map(function(e){return function(e,t){return e.toLowerCase()in g[t].scores}(e,n)?e:""}),i=b(a.modifiers,l.length,null);r({value:l.join(""),modifiers:i}),this.constructor._clickOnElementByClass("hidden-input")}},{key:"handleModifierChange",value:function(e,t){var n=this.props,a=n.word,r=n.onChange,l=a.modifiers.slice();l[e]=t,r({value:a.value,modifiers:l})}},{key:"handleTileClick",value:function(){this.focus()}},{key:"focus",value:function(){this.textHiddenInput.current.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.language,a=t.word,l=this.state.inFocus;return r.a.createElement("div",{role:"textbox",onClick:this.focus,onKeyDown:this.focus,className:"scrabble-input-box".concat(a.value.length>8?" large":"")},r.a.createElement("input",{ref:this.textHiddenInput,onChange:this.handleHiddenInputChange,value:a.value,className:"hidden-input",onBlur:function(){return e.setState({inFocus:!1})},onFocus:function(){return e.setState({inFocus:!0})},type:"text",maxLength:"15",autoComplete:"off",autoCapitalize:"off",spellCheck:"false",autoCorrect:"off"}),r.a.createElement("div",{className:l?"scrabble-tiles blinker":"scrabble-tiles"},a.value.split("").map(function(t,l){return r.a.createElement(G,{onChange:function(t){return e.handleModifierChange(l,t)},key:l},r.a.createElement(E,{onClick:e.handleTileClick,letter:t,score:f(t,[null],n),modifier:a.modifiers[l]}))})))}}]),t}(r.a.Component)),I={value:"",modifiers:[],score:0},x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleUndo=n.handleUndo.bind(Object(u.a)(n)),n.handleEndTurn=n.handleEndTurn.bind(Object(u.a)(n)),n.handleEndGame=n.handleEndGame.bind(Object(u.a)(n)),n.handleAddWord=n.handleAddWord.bind(Object(u.a)(n)),n.handleBingo=n.handleBingo.bind(Object(u.a)(n)),n._scrollInputToTheMiddle=n._scrollInputToTheMiddle.bind(Object(u.a)(n)),n.input=r.a.createRef(),n.state={currentWord:I},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"_scrollInputToTheMiddle",value:function(){var e=this.props,t=e.game,n=e.isMobile,a=document.getElementsByClassName("add-word"),r=t.playersTurns[0][0].words;n&&0!==a.length&&0!==r.length&&a[0].scrollIntoView({block:"center"})}},{key:"componentDidMount",value:function(){this.input.current&&this.input.current.focus()}},{key:"onSetGame",value:function(e){var t=this.props.onSetGame;t(e),this.resetCurrentWord()}},{key:"resetCurrentWord",value:function(){this.setState({currentWord:I}),this.input.current&&this.input.current.focus()}},{key:"handleChange",value:function(e){var t=this.props.language,n=Object(T.a)({},e,{score:f(e.value,e.modifiers,t)});this.setState({currentWord:n})}},{key:"handleUndo",value:function(){(0,this.props.onUndo)(),this.resetCurrentWord(),this._scrollInputToTheMiddle(),m.a.event({category:"User",action:"Clicked Undo"})}},{key:"handleAddWord",value:function(){var e=this.state.currentWord,t=this.props.game;this.onSetGame(t.addWord(e)),this._scrollInputToTheMiddle(),m.a.event({category:"User",action:"Clicked AddWord"})}},{key:"handleEndTurn",value:function(e){var t=this.state.currentWord,n=this.props.game;e.preventDefault(),n=0!==t.value.length?n.addWord(t):n,this.onSetGame(n.endTurn()),this._scrollInputToTheMiddle(),m.a.event({category:"User",action:"Clicked EndTurn"})}},{key:"handleBingo",value:function(){var e=this.props,t=e.game;(0,e.onSetGame)(t.setBingo(!t.getCurrentTurn().bingo)),this._scrollInputToTheMiddle(),m.a.event({category:"User",action:"Clicked Bingo"})}},{key:"handleEndGame",value:function(){var e=this.props,t=e.game;(0,e.onSetGame)(t.endGame()),this._scrollInputToTheMiddle(),m.a.event({category:"User",action:"Clicked End Game"})}},{key:"render",value:function(){var e=this.state.currentWord,t=this.props,n=t.game,a=t.language,l=t.undoDisabled,i=n.getCurrentTurn().isEmpty()&&""===e.value?"PASS":"END TURN",o=0!==n.currentPlayerIndex||""!==e.value||n.getCurrentTurn().score>0||1===n.playersTurns[n.getCurrentPlayerIndex()].length,s={ref:this.input,onChange:this.handleChange,word:e,language:a};return r.a.createElement("form",null,r.a.createElement(P,s),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"in-game-controls"},r.a.createElement("div",{className:"add-word-and-bingo-btns-container"},r.a.createElement("button",{onClick:this.handleAddWord,type:"button",className:"btn word-submit-button add-word",disabled:""===e.value},"+ ADD A WORD"),r.a.createElement("input",{onChange:this.handleBingo,type:"checkbox",id:"bingoToggle",checked:n.getCurrentTurn().bingo}),r.a.createElement("label",{className:"btn bingo",htmlFor:"bingoToggle"},r.a.createElement("div",{className:"bingo-toggle"},"BINGO"))),r.a.createElement("div",{className:"submit-btn-container"},r.a.createElement("button",{onClick:this.handleEndTurn,type:"submit",className:"btn pass-endturn-button"},i)),r.a.createElement("div",{className:"undo-and-end-game-btns-container"},r.a.createElement("button",{onClick:this.handleUndo,type:"button",className:"btn word-submit-button undo",disabled:l},"UNDO"),r.a.createElement("button",{onClick:this.handleEndGame,type:"button",className:"btn end-game",disabled:o},"END GAME")))),r.a.createElement("h3",null,"How to use Scrabble Score Online:"),r.a.createElement("ul",null,r.a.createElement("li",null,"To add Premium Square scores to your word, click on a tile that you typed in an input box. Choose desired option."),r.a.createElement("li",null,"Click ADD WORD to add word to your turn."),r.a.createElement("li",null,"Click END TURN, to finish your turn."),r.a.createElement("li",null,"Click BINGO if you played seven tiles on a turn."),r.a.createElement("li",null,"If you made a mistake, use unlimited UNDO."),r.a.createElement("li",null,"Click END GAME when you finished your game.")))}}]),t}(r.a.Component),M={value:"",modifiers:[],score:0},L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleUndo=n.handleUndo.bind(Object(u.a)(n)),n.handleLeftOvers=n.handleLeftOvers.bind(Object(u.a)(n)),n.input=r.a.createRef(),n.state={currentWord:M},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.input.current&&this.input.current.focus()}},{key:"resetCurrentWord",value:function(){this.setState({currentWord:M}),this.input.current&&this.input.current.focus()}},{key:"handleUndo",value:function(){(0,this.props.onUndo)(),this.resetCurrentWord(),m.a.event({category:"User",action:"Clicked Undo InGameOverControls"})}},{key:"handleChange",value:function(e){var t=this.props.language,n=Object(T.a)({},e,{score:-f(e.value,e.modifiers,t)});this.setState({currentWord:n})}},{key:"handleLeftOvers",value:function(e){var t=this.state.currentWord,n=this.props.onSetGame,a=this.props.game;e.preventDefault(),0!==t.value.length&&(a=a.addWord(t)),0===(a=a.endTurn()).currentPlayerIndex&&(a=a.distributeLeftOversToReapers(a.getReapers(),a.getSumOfLeftovers())),n(a),this.resetCurrentWord(),m.a.event({category:"User",action:"Clicked Submit LeftOvers"})}},{key:"render",value:function(){var e=this.state.currentWord,t=this.props,n=t.game,a=t.language,l=t.undoDisabled,i=e.value.length>0?"SUBMIT LEFTOVERS":"SUBMIT NO LEFTOVERS";return r.a.createElement("div",null,n.areLeftOversSubmitted()?r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"in-game-controls"},r.a.createElement("div",{className:"undo-and-end-game-btns-container"},r.a.createElement("button",{onClick:this.handleUndo,type:"button",className:"btn word-submit-button undo",disabled:l},"UNDO")))):r.a.createElement("form",{autoComplete:"off"},r.a.createElement(P,{ref:this.input,onChange:this.handleChange,word:e,language:a}),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"in-game-controls"},r.a.createElement("div",{className:"undo-and-end-game-btns-container"},r.a.createElement("button",{onClick:this.handleLeftOvers,type:"submit",className:"btn pass-endturn-button"},i)),r.a.createElement("div",{className:"submit-btn-container"},r.a.createElement("button",{onClick:this.handleUndo,type:"button",className:"btn word-submit-button undo",disabled:l},"UNDO"))))),r.a.createElement("h3",null,"How to use Scrabble Score Online:"),r.a.createElement("ul",null,r.a.createElement("li",null,"Unplayed Letters: When the game ends, each player's score is reduced by the sum of his or her unplayed letters. In addition, if a player has used all of his or her letters, the sum of the other players' unplayed letters is added to that player's score."),r.a.createElement("li",null,"Click SUBMIT NO LEFTOVERS if you finished your game without any tiles on your rack."),r.a.createElement("li",null,"Click SUBMIT LEFTOVERS to submit tiles that are left on your rack when you finished the game."),r.a.createElement("li",null,"If you made a mistake, use unlimited UNDO.")))}}]),t}(r.a.Component),D=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleUndo=n.handleUndo.bind(Object(u.a)(n)),n.handleSetGame=n.handleSetGame.bind(Object(u.a)(n)),n.renderWinner=n.renderWinner.bind(Object(u.a)(n)),n.beforeUnload=n.beforeUnload.bind(Object(u.a)(n));var a=n.props.playerNames;return n.state={game:y.createNewGame(a.length),games:[]},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",this.beforeUnload)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("beforeunload",this.beforeUnload)}},{key:"beforeUnload",value:function(e){var t=this.state,n=t.games,a=t.game;0===n.length||a.isGameOver()||(e.preventDefault(),e.returnValue="")}},{key:"handleSetGame",value:function(e){var t=this.state.game,n=this.state.games;n=[].concat(Object(h.a)(n.slice()),[t]),this.setState({games:n,game:e})}},{key:"handleUndo",value:function(){var e=this.state.games,t=e.slice(0,-1),n=e[e.length-1];this.setState({game:n,games:t})}},{key:"renderWinner",value:function(){var e=this.state.game,t=this.props.playerNames,n=e.leftOversTurnNumber-1,a=e.getWinners(),r=e.getWinners(n);return a.length>1?r.map(function(a){return r.length>1?"".concat(t[a],": ").concat(e.getTotalScore(a,n)," points"):"".concat(t[a]," won with ").concat(e.getTotalScore(a,n)," points!")}).join(", "):"".concat(t[Object(h.a)(e.getWinners())]," won with ").concat(e.getTotalScore(Object(h.a)(e.getWinners()))," points!")}},{key:"render",value:function(){var e=this.state,t=e.game,n=e.games,a=this.props,l=a.playerNames,i=a.language,o=a.isMobile,s={onSetGame:this.handleSetGame,onUndo:this.handleUndo,undoDisabled:0===n.length,isMobile:o,game:t,language:i};return r.a.createElement("div",{className:"score-keeper"},r.a.createElement("div",{className:"container"},r.a.createElement("img",{id:"logo",src:"logo.png",alt:"Scrabble score logo",width:"212px"}),r.a.createElement("h1",{className:"title"},"Scrabble Score Sheet"),o?r.a.createElement(w,{playerNames:l,game:t,language:i}):r.a.createElement(N,{playerNames:l,game:t,language:i}),t.areLeftOversSubmitted()?r.a.createElement("div",{className:"winner"},r.a.createElement("h1",null,this.renderWinner())):function(){if(!o)return r.a.createElement(C,{game:t,playerNames:l,isMobile:o})}(),t.isGameOver()?r.a.createElement(L,s):r.a.createElement(x,s)))}}]),t}(r.a.Component);D.defaultProps={playerNames:["Player 1","Player 2"],language:"en"};var R=D,A=(n(42),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleGameStart=n.handleGameStart.bind(Object(u.a)(n)),n.handleWindowSizeChange=n.handleWindowSizeChange.bind(Object(u.a)(n)),n.handlePopState=n.handlePopState.bind(Object(u.a)(n)),n.state={playerNames:[],language:"",width:10},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.playerNames;window.history.pushState({playerNames:e},null),window.addEventListener("popstate",this.handlePopState),m.a.initialize("UA-144533310-1"),m.a.pageview(window.location.pathname+window.location.search),this.handleWindowSizeChange()}},{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange),window.removeEventListener("popstate",this.handlePopState)}},{key:"handlePopState",value:function(e){var t=e.state;this.setState({playerNames:t.playerNames})}},{key:"handleWindowSizeChange",value:function(){this.setState({width:window.innerWidth})}},{key:"handleGameStart",value:function(e,t){window.history.pushState({playerNames:e},null),this.setState({playerNames:e,language:t})}},{key:"renderGame",value:function(e){var t=this.state,n=t.playerNames,a=t.language;return 0===n.length?r.a.createElement(p,{onGameStart:this.handleGameStart}):r.a.createElement(R,{playerNames:n,language:a,isMobile:e})}},{key:"render",value:function(){var e=this.state.width<=815;return r.a.createElement("div",{className:"main ".concat(e?"mobile":"desktop")},this.renderGame(e))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=document.getElementsByClassName("content")[0];B.hasChildNodes()?Object(l.hydrate)(r.a.createElement(A,null),B):Object(l.render)(r.a.createElement(A,null),B),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.aaca8e48.chunk.js.map