(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,n){},23:function(e,t,n){e.exports=n(42)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(11),s=n.n(l),i=(n(28),n(3)),o=n(4),c=n(6),u=n(5),d=n(7),h=n(1),m=n(9),b=(n(29),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChangeOfName=n.handleChangeOfName.bind(Object(h.a)(Object(h.a)(n))),n.handleChangeOfLanguage=n.handleChangeOfLanguage.bind(Object(h.a)(Object(h.a)(n))),n.handleGameStart=n.handleGameStart.bind(Object(h.a)(Object(h.a)(n))),n.state={numberOfPlayers:4,playerNames:["",""],language:"en"},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleChangeOfName",value:function(e,t){var n=this.state.playerNames;(n=n.slice())[e]=t.target.value,this.setState({playerNames:n})}},{key:"handleChangeOfLanguage",value:function(e){this.setState({language:e.target.value})}},{key:"handleGameStart",value:function(e){var t=this.state,n=t.playerNames,a=t.language,r=this.props.onGameStart;e.preventDefault(),r(n.map(function(e,t){return e||"Player ".concat(t+1)}),a)}},{key:"render",value:function(){var e=this,t=this.state,n=t.language,a=t.numberOfPlayers,l=t.playerNames;return r.a.createElement("div",{className:"game-settings"},r.a.createElement("select",{className:"custom-select",id:"language-select",value:n,onChange:this.handleChangeOfLanguage},r.a.createElement("option",{value:"en"},"English"),r.a.createElement("option",{value:"ru"},"Russian"),r.a.createElement("option",{value:"fr"},"French")),r.a.createElement("div",{className:"LoGo"}),r.a.createElement("span",{className:"description"},r.a.createElement("p",null,"Hello and welcome to Scrabble Score Online. This is an easy-to-use tool that replaces pen-and-paper for keeping track of Scrabble scores."),r.a.createElement("p",null,"Simply fill in the players\u2019 names in order that they will take turns and press the \u201cSTART\u201d button."),r.a.createElement("p",null,"Relax and enjoy your game, now you don\u2019t need to do any math!")),r.a.createElement("form",null,r.a.createElement("div",{className:"player-names-choice-container"},Object(m.a)(Array(a)).map(function(t,n){return r.a.createElement("input",{onChange:function(t){return e.handleChangeOfName(n,t)},id:"player-name-input-".concat(n),key:n,type:"text",className:l[n]&&l[n].length>0?"form-control player-name filled":"form-control player-name",placeholder:"Player ".concat(n+1)})})),r.a.createElement("div",{className:"start-btn-container"},r.a.createElement("button",{onClick:this.handleGameStart,className:"btn start"},"START"))))}}]),t}(r.a.Component)),p={en:{language:"English",scores:{a:1,e:1,i:1,o:1,u:1,l:1,n:1,r:1,s:1,t:1,d:2,g:2,b:3,c:3,m:3,p:3,f:4,h:4,v:4,w:4,y:4,k:5,j:8,x:8,q:10,z:10}},fr:{language:"French",scores:{e:1,a:1,i:1,n:1,o:1,r:1,s:1,t:1,u:1,l:1,d:2,m:2,g:2,b:3,c:3,p:3,f:4,h:4,v:4,j:8,q:8,k:10,w:10,x:10,y:10,z:10}},ru:{language:"Russian",scores:{"\u043e":1,"\u0430":1,"\u0435":1,"\u0438":1,"\u043d":1,"\u0440":1,"\u0441":1,"\u0442":1,"\u0432":1,"\u0434":2,"\u043a":2,"\u043b":2,"\u043f":2,"\u0443":2,"\u043c":2,"\u0431":3,"\u0433":3,"\u044c":3,"\u044f":3,"\u0451":3,"\u044b":4,"\u0439":4,"\u0437":5,"\u0436":5,"\u0445":5,"\u0446":5,"\u0447":5,"\u0448":8,"\u044d":8,"\u044e":8,"\u0444":10,"\u0449":10,"\u044a":10}}};function g(e,t,n){for(var a=e.slice(0,t);a.length<t;)a.push(n);return a}function f(e,t,n){var a=0;return e.split("").forEach(function(e,r){var l=p[n].scores[e.toLowerCase()];switch(t[r]){case"blank":l*=0;break;case"double-letter":l*=2;break;case"triple-letter":l*=3}a+=l}),t.forEach(function(e){switch(e){case"double-word":a*=2;break;case"triple-word":a*=3}}),a}var v=function(){function e(t,n){Object(i.a)(this,e),this.words=t,this.bingo=n}return Object(o.a)(e,[{key:"isEmpty",value:function(){return 0===this.words.length}},{key:"isPassed",value:function(e){return this.isEmpty()&&this!==e.getCurrentTurn()}},{key:"score",get:function(){for(var e=0,t=0;t<this.words.length;t++)e+=this.words[t].score;return this.bingo&&(e+=50),e}}],[{key:"empty",value:function(){return new e([],!1)}}]),e}(),y=function(){function e(t,n,a){Object(i.a)(this,e),this.currentPlayerIndex=n,this.playersTurns=t,this.leftOversTurnNumber=a}return Object(o.a)(e,[{key:"addWord",value:function(e){var t=this.getCurrentTurn(),n=new v([].concat(Object(m.a)(t.words),[e]),t.bingo);return this._setTurn(this.currentPlayerIndex,this.getCurrentTurnNumber(),n)}},{key:"endTurn",value:function(){var t=this;this.getCurrentTurn().isEmpty()&&(t=this._setTurn(this.currentPlayerIndex,this.getCurrentTurnNumber(),v.empty()));var n=(this.currentPlayerIndex+1)%this.playersTurns.length;return new e(this.isGameOver()&&this.getCurrentPlayer()===this.playersTurns[this.playersTurns.length-1]?t.playersTurns:t.playersTurns.map(function(e,t){return t===n?[].concat(Object(m.a)(e),[v.empty()]):e}),n,this.leftOversTurnNumber)}},{key:"setBingo",value:function(e){var t=new v(this.getCurrentTurn().words,e);return this._setTurn(this.currentPlayerIndex,this.getCurrentTurnNumber(),t)}},{key:"endGame",value:function(){return new e(this.playersTurns,this.currentPlayerIndex,this.getCurrentTurnNumber())}},{key:"isGameOver",value:function(){return null!==this.leftOversTurnNumber}},{key:"areLeftOversSubmitted",value:function(){return!(!this.isGameOver()||!this.playersTurns[this.playersTurns.length-1][this.leftOversTurnNumber]||0!==this.currentPlayerIndex)}},{key:"getReapers",value:function(){for(var e=[],t=0;t<this.playersTurns.length;t++)this.playersTurns[t][this.leftOversTurnNumber].isEmpty()&&e.push(t);return e}},{key:"getSumOfLeftovers",value:function(){for(var e=0,t=0;t<this.playersTurns.length;t++)e+=Math.abs(this.playersTurns[t][this.leftOversTurnNumber].score);return e}},{key:"distributeLeftOversToReapers",value:function(e,t){var n=this,a=this;return e.forEach(function(e){var r=new v([{value:"",modifiers:[],score:t}],!1);a=a._setTurn(e,n.leftOversTurnNumber,r)}),a}},{key:"getWinners",value:function(e){var t=this,n=this.playersTurns.map(function(n,a){return t.getTotalScore(a,e)});return function(e,t){for(var n=[],a=0;a<e.length;a++)e[a]===t&&n.push(a);return n}(n,Math.max.apply(Math,Object(m.a)(n)))}},{key:"_setTurn",value:function(t,n,a){var r=this.playersTurns[t].slice();return r[n]=a,new e(this.playersTurns.map(function(e,n){return n===t?r:e}),this.currentPlayerIndex,this.leftOversTurnNumber)}},{key:"getCurrentPlayer",value:function(){return this.playersTurns[this.currentPlayerIndex]}},{key:"getCurrentTurn",value:function(){return this.getCurrentPlayer().slice(-1)[0]}},{key:"getCurrentTurnNumber",value:function(){return this.playersTurns[0].length-1}},{key:"getCurrentPlayerIndex",value:function(){return this.currentPlayerIndex}},{key:"getRunningTotals",value:function(e){for(var t=this.playersTurns[e],n=[],a=0,r=0;r<t.length;r++)a+=t[r].score,n.push(a);return n}},{key:"getTotalScore",value:function(e,t){var n=this.getRunningTotals(e);return void 0!==t?n[t]:0===n.length?0:n[n.length-1]}}],[{key:"createNewGame",value:function(t){return new e(g([[v.empty()]],t,[]),0,null)}}]),e}();n(30);var O=function(e){var t=e.modifier,n=e.letter,a=e.score,l=e.onClick,s=null===t?"":t;return r.a.createElement("span",{className:"scrabble-letter ".concat(s),onClick:l},r.a.createElement("span",{className:"letter"},n.toUpperCase()),r.a.createElement("span",{className:"score"},a))},E=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.word,n=e.language,a=t.value.split("").map(function(e,a){return r.a.createElement(O,{key:a,letter:e,modifier:t.modifiers[a],score:f(e,[null],n)})});return r.a.createElement("div",null,a)}}]),t}(r.a.Component),k=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"renderPassed",value:function(){return r.a.createElement("tr",null,r.a.createElement("td",null,"PASS".split("").map(function(e,t){return r.a.createElement("span",{key:t,className:"score-box"},e)})))}},{key:"renderNormal",value:function(){var e=this.props,t=e.turn,n=e.language,a=t.words.map(function(e,a){return r.a.createElement("tr",{key:"row-word-".concat(a),className:"word-row"},r.a.createElement("td",{className:"word-cell"},r.a.createElement(E,{word:e,language:n})),0===a?r.a.createElement("td",{rowSpan:"".concat(t.bingo?t.words.length+1:t.words.length),className:"score-cell"},r.a.createElement("span",{className:t.score>=50?"score-box high":"score-box"},t.score)):null)});return t.bingo&&a.push(r.a.createElement("tr",{key:"bingo"},r.a.createElement("td",null,"BINGO"),r.a.createElement("td",null,r.a.createElement("span",{className:"score-box high"},50)))),a}},{key:"render",value:function(){var e=this.props,t=e.turn,n=e.game;return r.a.createElement("table",{className:"score-grid-cell"},r.a.createElement("tbody",null,t.isPassed(n)?this.renderPassed():this.renderNormal()))}}]),t}(r.a.Component),j=(n(17),function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"activePlayerClass",value:function(e,t){return e===t?"player-header current":"player-header"}},{key:"render",value:function(){var e=this,t=this.props,n=t.playerNames,a=t.game,l=t.language;return r.a.createElement("table",{className:"table table-bordered",align:"center"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"thead-rows"},r.a.createElement("th",{className:"move-cell"},"Move"),n.map(function(t,n){return r.a.createElement("th",{key:n,className:e.activePlayerClass(n,a.currentPlayerIndex)},t)}))),r.a.createElement("tbody",{className:"tbody-rows"},Object(m.a)(Array(a.getCurrentTurnNumber()+1)).map(function(e,t){return r.a.createElement("tr",{className:"move-row",key:t},r.a.createElement("th",{className:"move"},t+1),a.playersTurns.map(function(e,n){return r.a.createElement("td",{key:n},e[t]?r.a.createElement(k,{turn:e[t],language:l,game:a}):null)}))}),r.a.createElement("tr",{className:"total-score"},r.a.createElement("th",{className:"move"},"TOTAL"),n.map(function(e,t){return r.a.createElement("td",{key:t},a.getTotalScore(t))}))))}}]),t}(r.a.Component)),C=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.game,n=e.playerNames,a=e.isMobile?"Submit ".concat(t.isGameOver()?"your leftovers":"a word"):"".concat(n[t.currentPlayerIndex],", submit ").concat(t.isGameOver()?"your leftovers":"a word");return r.a.createElement("span",{className:"call-player-to-action"},a)}}]),t}(r.a.Component),N=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.playerNames,n=e.game,a=e.language,l=Object(m.a)(Array(t.length)).map(function(e,t){return n.getRunningTotals(t)}),s=function(e,t){return e===n.getCurrentPlayer()&&e[t].isEmpty()&&!e[t].isPassed(n)};return r.a.createElement("table",{className:"table table-bordered",align:"center"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"thead-rows"},r.a.createElement("th",{className:"playerNames"},"Names",r.a.createElement("br",null),"(Total)"),r.a.createElement("th",{className:"playerTurn"},"Player Turn"))),r.a.createElement("tbody",{key:"tbody",className:"tbody-rows"},n.getCurrentPlayer().map(function(e,i){return[r.a.createElement("tr",{key:"moverow".concat(i),className:"move-row"},r.a.createElement("td",{colSpan:"2"},"Move ".concat(i+1))),n.playersTurns.map(function(e,o){return e[i]?r.a.createElement("tr",{key:"move".concat(i,"_player").concat(o)},r.a.createElement("td",null,t[o],r.a.createElement("br",null),s(e,i)?null:l[o][i]),r.a.createElement("td",null,s(e,i)?r.a.createElement(C,{game:n,playerNames:t,isMobile:!0}):r.a.createElement(k,{turn:e[i],language:a,game:n}))):null})]})))}}]),t}(r.a.Component),T=n(13),w=n(22),S=n(21),G=(n(31),n(32),function(e){var t=e.children,n=e.tooltip,a=e.hideArrow,l=Object(w.a)(e,["children","tooltip","hideArrow"]);return r.a.createElement(S.a,Object.assign({},l,{tooltip:function(e){var t=e.arrowRef,l=e.tooltipRef,s=e.getArrowProps,i=e.getTooltipProps,o=e.placement;return r.a.createElement("div",i({ref:l,className:"tooltip-container"}),!a&&r.a.createElement("div",s({ref:t,className:"tooltip-arrow","data-placement":o})),n)}}),function(e){var n=e.getTriggerProps,a=e.triggerRef;return r.a.createElement("span",n({ref:a,className:"trigger"}),t)})}),W=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"tileText",value:function(){switch(this.props.modifier){case"double-letter":return"Double letter score";case"double-word":return"Double word score";case"triple-letter":return"Triple letter score";case"triple-word":return"Triple word score";case"blank":return"Blank tile";default:return null}}},{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.modifier;return r.a.createElement("span",{role:"button",onClick:function(e){return t(n,e)},onTouchEnd:function(e){return t(n,e)},className:"modifier ".concat(n)},r.a.createElement("span",null,this.tileText()))}}]),t}(r.a.Component),P=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(h.a)(Object(h.a)(n))),n.handleVisibilityChange=n.handleVisibilityChange.bind(Object(h.a)(Object(h.a)(n))),n.state={modifier:null,tooltipShown:!1},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e,t){var n=this.state.modifier,a=this.props.onChange,r=e===n?null:e;this.setState({modifier:r,tooltipShown:!1}),a(r),t.preventDefault(),t.stopPropagation()}},{key:"handleVisibilityChange",value:function(e){this.setState({tooltipShown:e})}},{key:"render",value:function(){var e=this.state.tooltipShown,t=this.props.children;return r.a.createElement(G,{onVisibilityChange:this.handleVisibilityChange,tooltipShown:e,placement:"bottom",trigger:"click",portalContainer:document.getElementsByClassName("main")[0],tooltip:r.a.createElement("div",null,r.a.createElement(W,{modifier:"double-letter",onClick:this.handleClick}),r.a.createElement(W,{modifier:"double-word",onClick:this.handleClick}),r.a.createElement(W,{modifier:"triple-letter",onClick:this.handleClick}),r.a.createElement(W,{modifier:"triple-word",onClick:this.handleClick}),r.a.createElement(W,{modifier:"blank",onClick:this.handleClick}))},t)}}]),t}(r.a.Component),x=(n(40),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).textHiddenInput=r.a.createRef(),n.focus=n.focus.bind(Object(h.a)(Object(h.a)(n))),n.handleHiddenInputChange=n.handleHiddenInputChange.bind(Object(h.a)(Object(h.a)(n))),n.handleTileClick=n.handleTileClick.bind(Object(h.a)(Object(h.a)(n))),n._clickOnElementByClass=n._clickOnElementByClass.bind(Object(h.a)(Object(h.a)(n))),n.state={inFocus:!1},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"_clickOnElementByClass",value:function(e){var t=document.getElementsByClassName(e);0!==t.length&&t[0].click()}},{key:"handleHiddenInputChange",value:function(e){var t=this.props,n=t.language,a=t.word,r=t.onChange,l=e.target.value.split("").map(function(e){return function(e,t){return e.toLowerCase()in p[t].scores}(e,n)?e:""}),s=g(a.modifiers,l.length,null);r({value:l.join(""),modifiers:s}),this._clickOnElementByClass("hidden-input")}},{key:"handleModifierChange",value:function(e,t){var n=this.props,a=n.word,r=n.onChange,l=a.modifiers.slice();l[e]=t,r({value:a.value,modifiers:l})}},{key:"handleTileClick",value:function(){this.focus()}},{key:"focus",value:function(){this.textHiddenInput.current.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.language,a=t.word,l=this.state.inFocus;return r.a.createElement("div",{role:"textbox",onClick:this.focus,className:"scrabble-input-box".concat(a.value.length>8?" large":"")},r.a.createElement("input",{ref:this.textHiddenInput,onChange:this.handleHiddenInputChange,value:a.value,className:"hidden-input",onBlur:function(){return e.setState({inFocus:!1})},onFocus:function(){return e.setState({inFocus:!0})},type:"text",maxLength:"15",autoComplete:"off",autoCapitalize:"off",spellCheck:"false",autoCorrect:"off"}),r.a.createElement("div",{className:l?"scrabble-tiles blinker":"scrabble-tiles"},a.value.split("").map(function(t,l){return r.a.createElement(P,{onChange:function(t){return e.handleModifierChange(l,t)},key:l},r.a.createElement(O,{onClick:e.handleTileClick,letter:t,score:f(t,[null],n),modifier:a.modifiers[l]}))})))}}]),t}(r.a.Component));var I=function(e){var t=e.score;return r.a.createElement("div",{className:"current-score"},t)},M={value:"",modifiers:[],score:0},L=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.handleUndo=n.handleUndo.bind(Object(h.a)(Object(h.a)(n))),n.handleEndTurn=n.handleEndTurn.bind(Object(h.a)(Object(h.a)(n))),n.handleEndGame=n.handleEndGame.bind(Object(h.a)(Object(h.a)(n))),n.handleAddWord=n.handleAddWord.bind(Object(h.a)(Object(h.a)(n))),n.handleBingo=n.handleBingo.bind(Object(h.a)(Object(h.a)(n))),n._scrollInputToTheMiddle=n._scrollInputToTheMiddle.bind(Object(h.a)(Object(h.a)(n))),n.input=r.a.createRef(),n.state={currentWord:M},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"_scrollInputToTheMiddle",value:function(){var e=document.getElementsByClassName("add-word");0!==e.length&&e[0].scrollIntoView({block:"center"})}},{key:"componentDidMount",value:function(){this.input.current.focus()}},{key:"onSetGame",value:function(e){var t=this.props.onSetGame;t(e),this.resetCurrentWord()}},{key:"resetCurrentWord",value:function(){this.setState({currentWord:M}),this.input.current.focus()}},{key:"handleChange",value:function(e){var t=this.props.language,n=Object(T.a)({},e,{score:f(e.value,e.modifiers,t)});this.setState({currentWord:n})}},{key:"handleUndo",value:function(){(0,this.props.onUndo)(),this.resetCurrentWord(),this._scrollInputToTheMiddle()}},{key:"handleAddWord",value:function(){var e=this.state.currentWord,t=this.props.game;this.onSetGame(t.addWord(e)),this._scrollInputToTheMiddle()}},{key:"handleEndTurn",value:function(e){var t=this.state.currentWord,n=this.props.game;e.preventDefault(),n=0!==t.value.length?n.addWord(t):n,this.onSetGame(n.endTurn()),this._scrollInputToTheMiddle()}},{key:"handleBingo",value:function(){var e=this.props,t=e.game;(0,e.onSetGame)(t.setBingo(!t.getCurrentTurn().bingo)),this._scrollInputToTheMiddle()}},{key:"handleEndGame",value:function(){var e=this.props,t=e.game;(0,e.onSetGame)(t.endGame()),this._scrollInputToTheMiddle()}},{key:"render",value:function(){var e=this.state.currentWord,t=this.props,n=t.game,a=t.language,l=t.undoDisabled,s=t.isMobile,i=n.getCurrentTurn().isEmpty()&&""===e.value?"PASS":"END TURN",o=0!==n.currentPlayerIndex||""!==e.value||n.getCurrentTurn().score>0||1===n.playersTurns[n.getCurrentPlayerIndex()].length,c={ref:this.input,onChange:this.handleChange,word:e,language:a};return r.a.createElement("form",{autoComplete:"off"},r.a.createElement(x,c),s?null:r.a.createElement(I,{score:e.score}),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"in-game-controls"},r.a.createElement("div",{className:"add-word-and-bingo-btns-container"},r.a.createElement("button",{onClick:this.handleAddWord,type:"button",className:"btn word-submit-button add-word",disabled:""===e.value},"+ ADD A WORD"),r.a.createElement("div",{className:"custom-control custom-switch"},r.a.createElement("input",{onChange:this.handleBingo,type:"checkbox",className:"custom-control-input",id:"bingoToggle",checked:n.getCurrentTurn().bingo}),r.a.createElement("label",{className:"custom-control-label",htmlFor:"bingoToggle"},"BINGO"))),r.a.createElement("div",{className:"submit-btn-container"},r.a.createElement("button",{onClick:this.handleEndTurn,type:"submit",className:"btn pass-endturn-button"},i)),r.a.createElement("div",{className:"undo-and-end-game-btns-container"},r.a.createElement("button",{onClick:this.handleUndo,type:"button",className:"btn word-submit-button undo",disabled:l},"UNDO"),r.a.createElement("button",{onClick:this.handleEndGame,type:"button",className:"btn end-game",disabled:o},"END GAME")))))}}]),t}(r.a.Component),U={value:"",modifiers:[],score:0},R=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(h.a)(Object(h.a)(n))),n.handleUndo=n.handleUndo.bind(Object(h.a)(Object(h.a)(n))),n.handleLeftOvers=n.handleLeftOvers.bind(Object(h.a)(Object(h.a)(n))),n.input=r.a.createRef(),n.state={currentWord:U},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.input.current.focus()}},{key:"resetCurrentWord",value:function(){this.setState({currentWord:U})}},{key:"handleUndo",value:function(){(0,this.props.onUndo)(),this.resetCurrentWord()}},{key:"handleChange",value:function(e){var t=this.props.language,n=Object(T.a)({},e,{score:-f(e.value,e.modifiers,t)});this.setState({currentWord:n})}},{key:"handleLeftOvers",value:function(e){var t=this.state.currentWord,n=this.props,a=n.game,r=n.onSetGame;e.preventDefault(),0!==t.value.length&&(a=a.addWord(t)),0===(a=a.endTurn()).currentPlayerIndex&&(a=a.distributeLeftOversToReapers(a.getReapers(),a.getSumOfLeftovers())),r(a),this.resetCurrentWord()}},{key:"render",value:function(){var e=this.state.currentWord,t=this.props,n=t.game,a=t.language,l=t.undoDisabled,s=t.isMobile,i=e.value.length>0?"SUBMIT LEFTOVERS":"SUBMIT NO LEFTOVERS";return r.a.createElement("div",null,n.areLeftOversSubmitted()?r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleUndo,type:"button",className:"btn btn-info word-submit-button",disabled:l},"UNDO")):r.a.createElement("form",{autoComplete:"off"},r.a.createElement(x,{ref:this.input,onChange:this.handleChange,word:e,language:a}),s?null:r.a.createElement(I,{score:e.score}),r.a.createElement("div",{class:"ingameover-buttons"},r.a.createElement("button",{onClick:this.handleUndo,type:"button",className:"btn btn-info word-submit-button",disabled:l},"UNDO"),r.a.createElement("button",{onClick:this.handleLeftOvers,type:"submit",className:"btn btn-danger end-game"},i))))}}]),t}(r.a.Component),B=function(e){function t(e){var n;Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleUndo=n.handleUndo.bind(Object(h.a)(Object(h.a)(n))),n.handleSetGame=n.handleSetGame.bind(Object(h.a)(Object(h.a)(n))),n.renderTieGame=n.renderTieGame.bind(Object(h.a)(Object(h.a)(n)));var a=n.props.playerNames;return n.state={game:y.createNewGame(a.length),games:[]},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("beforeunload",function(e){e.preventDefault(),e.returnValue="You will lose this page if you quit."})}},{key:"handleSetGame",value:function(e){var t=this.state,n=t.game,a=t.games;a=[].concat(Object(m.a)(a.slice()),[n]),this.setState({games:a,game:e})}},{key:"handleUndo",value:function(){var e=this.state.games,t=e.slice(0,-1),n=e[e.length-1];this.setState({game:n,games:t})}},{key:"renderTieGame",value:function(){var e=this.state.game,t=this.props.playerNames,n=e.leftOversTurnNumber-1,a=e.getWinners(n);return a.map(function(r){return a.length>1?"".concat(t[r],": ").concat(e.getTotalScore(r,n)):"".concat(t[r]," WON")}).join(", ")}},{key:"render",value:function(){var e=this.state,t=e.game,n=e.games,a=this.props,l=a.playerNames,s=a.language,i=a.isMobile,o={onSetGame:this.handleSetGame,onUndo:this.handleUndo,undoDisabled:0===n.length,isMobile:i,game:t,language:s};return r.a.createElement("div",{className:"score-keeper"},i?r.a.createElement(N,{playerNames:l,game:t,language:s}):r.a.createElement(j,{playerNames:l,game:t,language:s}),r.a.createElement("div",null,t.areLeftOversSubmitted()?r.a.createElement("div",{className:"winner"},t.getWinners().length>1?r.a.createElement("h1",null,this.renderTieGame()):r.a.createElement("h1",null,"".concat(l[Object(m.a)(t.getWinners())]," WON"))):i?null:r.a.createElement(C,{game:t,playerNames:l,isMobile:i}),t.isGameOver()?r.a.createElement(R,o):r.a.createElement(L,o)))}}]),t}(r.a.Component);B.defaultProps={playerNames:["Player 1","Player 2"],language:"en"};var D=B,A=(n(41),function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleGameStart=n.handleGameStart.bind(Object(h.a)(Object(h.a)(n))),n.handleWindowSizeChange=n.handleWindowSizeChange.bind(Object(h.a)(Object(h.a)(n))),n.state={playerNames:[],language:"",width:window.innerWidth},n}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"handleWindowSizeChange",value:function(){this.setState({width:window.innerWidth})}},{key:"handleGameStart",value:function(e,t){this.setState({playerNames:e,language:t})}},{key:"renderGame",value:function(){var e=this.state,t=e.playerNames,n=e.language,a=e.width<=815;return 0===t.length?r.a.createElement(b,{onGameStart:this.handleGameStart}):r.a.createElement(D,{playerNames:t,language:n,isMobile:a})}},{key:"render",value:function(){var e=this.state.width<=815;return r.a.createElement("div",{className:"main "+(e?"mobile":"desktop")},this.renderGame())}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(A,null),document.getElementsByClassName("content")[0]),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[23,1,2]]]);
//# sourceMappingURL=main.e5a0820b.chunk.js.map