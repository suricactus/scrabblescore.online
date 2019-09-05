(window.webpackJsonpscrabble_react=window.webpackJsonpscrabble_react||[]).push([[0],{23:function(e,t,n){},31:function(e,t,n){e.exports=n(54)},36:function(e,t,n){},39:function(e,t,n){},47:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(14),o=(n(36),n(3)),i=n(2),s=n(6),c=n(5),u=n(1),m=n(7),d=n(22),h=n(9),p=(n(39),n(19)),g={en:{language:"English",scores:{a:1,e:1,i:1,o:1,u:1,l:1,n:1,r:1,s:1,t:1,d:2,g:2,b:3,c:3,m:3,p:3,f:4,h:4,v:4,w:4,y:4,k:5,j:8,x:8,q:10,z:10}},fr:{language:"French",scores:{e:1,a:1,i:1,n:1,o:1,r:1,s:1,t:1,u:1,l:1,d:2,m:2,g:2,b:3,c:3,p:3,f:4,h:4,v:4,j:8,q:8,k:10,w:10,x:10,y:10,z:10}},ru:{language:"Russian",scores:{"\u043e":1,"\u0430":1,"\u0435":1,"\u0438":1,"\u043d":1,"\u0440":1,"\u0441":1,"\u0442":1,"\u0432":1,"\u0434":2,"\u043a":2,"\u043b":2,"\u043f":2,"\u0443":2,"\u043c":2,"\u0431":3,"\u0433":3,"\u044c":3,"\u044f":3,"\u0451":3,"\u044b":4,"\u0439":4,"\u0437":5,"\u0436":5,"\u0445":5,"\u0446":5,"\u0447":5,"\u0448":8,"\u044d":8,"\u044e":8,"\u0444":10,"\u0449":10,"\u044a":10}}};function b(e,t,n){for(var a=e.slice(0,t);a.length<t;)a.push(n);return a}function f(e,t){return 0===e.length?[t]:e[0]===t?[]:[t]}function v(e,t,n){var a=0;return e.split("").forEach(function(e,r){for(var l=g[n].scores[e.toLowerCase()],o=0;o<t[r].length;o++)switch(t[r][o]){case"blank":l*=0;break;case"double-letter":l*=2;break;case"triple-letter":l*=3}a+=l}),t.forEach(function(e){for(var t=0;t<e.length;t++)switch(e[t]){case"double-word":a*=2;break;case"triple-word":a*=3}}),a}function y(){return"ReactSnap"===navigator.userAgent}function E(e,t){if(!y())try{p.a.getInstance().logEvent(e,t)}catch(n){console.log("Something went wrong when logging an event. ".concat(n,"."))}}function w(){document.getElementsByTagName("body")[0].scrollIntoView(!0)}function O(){document.getElementsByClassName("add-word")[0].scrollIntoView({block:"center"})}var N=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleChangeOfName=n.handleChangeOfName.bind(Object(u.a)(n)),n.handleChangeOfLanguage=n.handleChangeOfLanguage.bind(Object(u.a)(n)),n.handleGameStart=n.handleGameStart.bind(Object(u.a)(n)),n.state={numberOfPlayers:4,playerNames:["",""],language:"en",isTagDisabled:!0},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.setState({isTagDisabled:y()})}},{key:"handleChangeOfName",value:function(e,t){var n=this.state.playerNames;(n=n.slice())[e]=t.target.value,this.setState({playerNames:n})}},{key:"handleChangeOfLanguage",value:function(e){this.setState({language:e.target.value})}},{key:"handleGameStart",value:function(e){var t=this.state,n=t.playerNames,a=t.language,r=this.props.onGameStart;e.preventDefault(),r(n.map(function(e,t){return e||"Player ".concat(t+1)}),a),E("start-game",{playerNames:n,language:a})}},{key:"render",value:function(){var e=this,t=this.state,n=t.language,a=t.numberOfPlayers,l=t.playerNames,o=t.isTagDisabled;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-2 offset-sm-10"},r.a.createElement("select",{className:"custom-select",id:"language-select",value:n,onChange:this.handleChangeOfLanguage},r.a.createElement("option",{value:"en"},"English"),r.a.createElement("option",{value:"ru"},"Russian"),r.a.createElement("option",{value:"fr"},"French")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"logo"}),r.a.createElement("span",{className:"description"},r.a.createElement("p",null,"Hello and welcome to Scrabble Score Online. This is an easy-to-use scrabble score calculator that replaces pen-and-paper for keeping track of Scrabble scores. Enjoy the game with your friends and family while this scrabble score sheet will do math for you."),r.a.createElement("p",null,"Simply fill in the players\u2019 names in order that they will take turns and press the \u201cSTART\u201d button."),r.a.createElement("p",null,"Relax and enjoy your game, now you don\u2019t need to do any math!")))),r.a.createElement("form",null,r.a.createElement("div",{className:"player-names-choice-container"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12"},Object(h.a)(Array(a)).map(function(t,n){return r.a.createElement("input",{onChange:function(t){return e.handleChangeOfName(n,t)},id:"player-name-input-".concat(n),key:n,type:"text",className:l[n]&&l[n].length>0?"form-control player-name filled":"form-control player-name",placeholder:"Player ".concat(n+1),disabled:o})}))))),r.a.createElement("div",{className:"start-btn-container"},r.a.createElement("button",{className:"btn start",type:"button",onClick:this.handleGameStart,disabled:o},"START"))))}}]),t}(r.a.Component),k=function(){function e(t,n){Object(o.a)(this,e),this.words=t,this.bingo=n}return Object(i.a)(e,[{key:"isEmpty",value:function(){return 0===this.words.length}},{key:"isPassed",value:function(e){return this.isEmpty()&&this!==e.getCurrentTurn()}},{key:"isComplete",value:function(e){return this!==e.getCurrentTurn()}},{key:"score",get:function(){for(var e=0,t=0;t<this.words.length;t++)e+=this.words[t].score;return this.bingo&&(e+=50),e}}],[{key:"empty",value:function(){return new e([],!1)}},{key:"fromPlain",value:function(t){return new e(t.words,t.bingo)}}]),e}(),C=function(){function e(t,n,a){Object(o.a)(this,e),this.currentPlayerIndex=n,this.playersTurns=t,this.leftOversTurnNumber=a}return Object(i.a)(e,[{key:"addWord",value:function(e){var t=this.getCurrentTurn(),n=new k([].concat(Object(h.a)(t.words),[e]),t.bingo);return this._setTurn(this.currentPlayerIndex,this.getCurrentTurnNumber(),n)}},{key:"endTurn",value:function(){var t=this;this.getCurrentTurn().isEmpty()&&(t=this._setTurn(this.currentPlayerIndex,this.getCurrentTurnNumber(),k.empty()));var n=(this.currentPlayerIndex+1)%this.playersTurns.length;return new e(this.isGameOver()&&this.getCurrentPlayer()===this.playersTurns[this.playersTurns.length-1]?t.playersTurns:t.playersTurns.map(function(e,t){return t===n?[].concat(Object(h.a)(e),[k.empty()]):e}),n,this.leftOversTurnNumber)}},{key:"setBingo",value:function(e){var t=new k(this.getCurrentTurn().words,e);return this._setTurn(this.currentPlayerIndex,this.getCurrentTurnNumber(),t)}},{key:"endGame",value:function(){return new e(this.playersTurns,this.currentPlayerIndex,this.getCurrentTurnNumber())}},{key:"isGameOver",value:function(){return null!==this.leftOversTurnNumber}},{key:"areLeftOversSubmitted",value:function(){return!(!this.isGameOver()||!this.playersTurns[this.playersTurns.length-1][this.leftOversTurnNumber]||0!==this.currentPlayerIndex)}},{key:"isMoveInGameOver",value:function(e){return this.isGameOver()&&this.leftOversTurnNumber===e}},{key:"getReapers",value:function(){for(var e=[],t=0;t<this.playersTurns.length;t++)this.playersTurns[t][this.leftOversTurnNumber].isEmpty()&&e.push(t);return e}},{key:"getSumOfLeftovers",value:function(){for(var e=0,t=0;t<this.playersTurns.length;t++)e+=Math.abs(this.playersTurns[t][this.leftOversTurnNumber].score);return e}},{key:"distributeLeftOversToReapers",value:function(e,t){var n=this,a=this;return e.forEach(function(e){var r=new k([{value:"",modifiers:[],score:t}],!1);a=a._setTurn(e,n.leftOversTurnNumber,r)}),a}},{key:"getWinners",value:function(e){var t=this,n=this.playersTurns.map(function(n,a){return t.getTotalScore(a,e)});return function(e,t){for(var n=[],a=0;a<e.length;a++)e[a]===t&&n.push(a);return n}(n,Math.max.apply(Math,Object(h.a)(n)))}},{key:"_setTurn",value:function(t,n,a){var r=this.playersTurns[t].slice();return r[n]=a,new e(this.playersTurns.map(function(e,n){return n===t?r:e}),this.currentPlayerIndex,this.leftOversTurnNumber)}},{key:"getCurrentPlayer",value:function(){return this.playersTurns[this.currentPlayerIndex]}},{key:"getCurrentTurn",value:function(){return this.getCurrentPlayer().slice(-1)[0]}},{key:"getCurrentTurnNumber",value:function(){return this.playersTurns[0].length-1}},{key:"getCurrentPlayerIndex",value:function(){return this.currentPlayerIndex}},{key:"getRunningTotals",value:function(e){for(var t=this.playersTurns[e],n=[],a=0,r=0;r<t.length;r++)a+=t[r].score,n.push(a);return n}},{key:"getTotalScore",value:function(e,t){var n=this.getRunningTotals(e);return void 0!==t?n[t]:0===n.length?0:n[n.length-1]}}],[{key:"createNewGame",value:function(t){return new e(b([[k.empty()]],t,[]),0,null)}},{key:"fromPlain",value:function(t){return new e(t.playersTurns.map(function(e){return e.map(function(e){return k.fromPlain(e)})}),t.currentPlayerIndex,t.leftOversTurnNumber)}}]),e}();n(47);var S=function(e){var t=e.modifier,n=e.letter,a=e.score,l=e.onClick,o=t===[]?"":t.join(" ");return r.a.createElement("span",{className:"scrabble-letter ".concat(o),role:"button",onClick:l,onKeyDown:l},0!==t.length?r.a.createElement("span",{className:"tile-modifier"}):null,r.a.createElement("span",{className:"letter"},n.toUpperCase()),r.a.createElement("span",{className:"score"},a))},j=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.word,n=e.language,a=t.value.split("").map(function(e,a){return r.a.createElement(S,{key:a,letter:e,modifier:t.modifiers[a],score:v(e,[[]],n)})});return r.a.createElement("div",null,a)}}]),t}(r.a.Component),T=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"renderPassed",value:function(){var e=this.props,t=e.game,n=e.move;return r.a.createElement("tr",null,r.a.createElement("td",null,t.isMoveInGameOver(n)?"NO LEFTOVERS":"PASS"))}},{key:"renderNormal",value:function(){var e=this.props,t=e.turn,n=e.language,a=t.words.map(function(e,a){return r.a.createElement("tr",{key:"row-word-".concat(a),className:"word-row"},r.a.createElement("td",{className:"word-cell"},r.a.createElement(j,{word:e,language:n})),0===a?r.a.createElement("td",{rowSpan:"".concat(t.bingo?t.words.length+1:t.words.length),className:"score-cell"},r.a.createElement("span",{className:"score-box"},t.score)):null)});return t.bingo&&a.push(r.a.createElement("tr",{key:"bingo"},r.a.createElement("td",{colSpan:"2"},"BINGO!"))),a}},{key:"render",value:function(){var e=this.props,t=e.turn,n=e.game;return r.a.createElement("table",{className:"score-grid-cell"},r.a.createElement("tbody",null,t.isPassed(n)?this.renderPassed():this.renderNormal()))}}]),t}(r.a.Component);n(23);var P=function(e){var t=e.playerNames,n=e.game,a=e.language;return r.a.createElement("table",{className:"table table-bordered score-grid-table",align:"center"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"thead-rows"},r.a.createElement("th",{className:"move-header"},"Move"),t.map(function(e,t){return r.a.createElement("th",{key:t,className:"player-header"},e)}))),r.a.createElement("tbody",{className:"tbody-rows"},Object(h.a)(Array(n.getCurrentTurnNumber()+1)).map(function(e,t){return r.a.createElement("tr",{className:"turn-row",key:t},r.a.createElement("th",{className:"move-number"},t+1),n.playersTurns.map(function(e,l){return r.a.createElement("td",{key:l,className:(o=e[t],i=n.getCurrentTurn(),o===i?"player-turn active":"player-turn")},e[t]?r.a.createElement(T,{turn:e[t],move:t,language:a,game:n}):null);var o,i}))}),r.a.createElement("tr",{className:"total-score"},r.a.createElement("th",{className:"move"},"TOTAL"),t.map(function(e,t){return r.a.createElement("td",{key:t},n.getTotalScore(t))}))))};var W=function(e){var t=e.isMobile,n=e.game,a=e.playerNames;return r.a.createElement("div",{className:"row justify-content-center"},r.a.createElement("span",{className:"call-player-to-action"},function(){var e=a[n.currentPlayerIndex];return{"mobile-ingame":"Submit a word or end turn","mobile-gameover":"Submit your leftovers","desktop-ingame":"".concat(e,", submit a word or end turn"),"desktop-gameover":"".concat(e,", submit your leftovers")}["".concat(t?"mobile":"desktop","-").concat(n.isGameOver()?"gameover":"ingame")]}()))},G=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"moveRowText",value:function(e){return this.props.game.isMoveInGameOver(e)?"Leftovers Accounting":"Move ".concat(e+1)}},{key:"render",value:function(){var e=this,t=this.props,n=t.playerNames,a=t.game,l=t.language,o=Object(h.a)(Array(n.length)).map(function(e,t){return a.getRunningTotals(t)});return r.a.createElement("table",{className:"table table-bordered score-grid-table"},r.a.createElement("thead",null,r.a.createElement("tr",{className:"thead-rows"},r.a.createElement("th",{className:"playerNames",scope:"col"},"Names",r.a.createElement("br",null),"(Total)"),r.a.createElement("th",{className:"playerTurn",scope:"col"},"Player Turn"))),r.a.createElement("tbody",{key:"tbody",className:"tbody-rows"},a.getCurrentPlayer().map(function(t,i){return[r.a.createElement("tr",{key:"moverow".concat(i),className:"move-row"},r.a.createElement("td",{colSpan:"2"},e.moveRowText(i))),a.playersTurns.map(function(e,t){return e[i]?r.a.createElement("tr",{key:"move".concat(i,"_player").concat(t),className:"player-move-row"},r.a.createElement("td",{className:"player-name"},n[t],r.a.createElement("br",null),(s=e[i],a.areLeftOversSubmitted()||s.isComplete(a)?o[t][i]:null)),r.a.createElement("td",{className:"player-turn"},function(e,t){return e===a.getCurrentPlayer()&&e[t].isEmpty()&&!e[t].isPassed(a)&&!e[t].bingo}(e,i)?r.a.createElement("table",{className:"score-grid-cell"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement(W,{game:a,playerNames:n,isMobile:!0}))))):r.a.createElement(T,{turn:e[i],language:l,game:a}))):null;var s})]})))}}]),t}(r.a.Component),I=n(15),D=n(30),x=n(29),L=(n(48),n(49),function(e){var t=e.children,n=e.tooltip,a=e.hideArrow,l=Object(D.a)(e,["children","tooltip","hideArrow"]);return r.a.createElement(x.a,Object.assign({},l,{tooltip:function(e){var t=e.arrowRef,l=e.tooltipRef,o=e.getArrowProps,i=e.getTooltipProps,s=e.placement;return r.a.createElement("div",i({ref:l,className:"tooltip-container"}),!a&&r.a.createElement("div",o({ref:t,className:"tooltip-arrow","data-placement":s})),n)}}),function(e){var n=e.getTriggerProps,a=e.triggerRef;return r.a.createElement("span",n({ref:a,className:"trigger"}),t)})}),R=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"tileText",value:function(){switch(this.props.modifier){case"double-letter":return"Double letter score";case"double-word":return"Double word score";case"triple-letter":return"Triple letter score";case"triple-word":return"Triple word score";case"blank":return"Blank tile";default:return null}}},{key:"render",value:function(){var e=this.props,t=e.onClick,n=e.modifier;return r.a.createElement("span",{role:"button",onClick:function(e){return t(n,e)},onKeyDown:function(e){return t(n,e)},onTouchEnd:function(e){return t(n,e)},className:"modifier ".concat(n)},this.tileText())}}]),t}(r.a.Component),U=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(u.a)(n)),n.handleVisibilityChange=n.handleVisibilityChange.bind(Object(u.a)(n)),n.state={modifiers:[],tooltipShown:!1},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(e,t){var n=this.state.modifiers,a=this.props.onChange,r=function(e,t){var n=e.filter(function(e){return"blank"===e}),a=e.filter(function(e){return"blank"!==e});return"blank"===t?n=f(n,t):a=f(a,t),[].concat(Object(h.a)(n),Object(h.a)(a))}(n,e);this.setState({modifiers:r,tooltipShown:!1}),a(r),t.preventDefault(),t.stopPropagation()}},{key:"handleVisibilityChange",value:function(e){this.setState({tooltipShown:e})}},{key:"render",value:function(){var e=this.state.tooltipShown,t=this.props.children;return r.a.createElement(L,{onVisibilityChange:this.handleVisibilityChange,tooltipShown:e,placement:"bottom",trigger:"click",portalContainer:document.getElementsByClassName("scrabble-input-box")[0],tooltip:r.a.createElement("div",null,r.a.createElement(R,{modifier:"double-letter",onClick:this.handleClick}),r.a.createElement(R,{modifier:"double-word",onClick:this.handleClick}),r.a.createElement(R,{modifier:"triple-letter",onClick:this.handleClick}),r.a.createElement(R,{modifier:"triple-word",onClick:this.handleClick}),r.a.createElement(R,{modifier:"blank",onClick:this.handleClick}))},t)}}]),t}(r.a.Component),M=(n(52),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).textHiddenInput=r.a.createRef(),n.focus=n.focus.bind(Object(u.a)(n)),n.handleHiddenInputChange=n.handleHiddenInputChange.bind(Object(u.a)(n)),n.handleTileClick=n.handleTileClick.bind(Object(u.a)(n)),n.state={inFocus:!1},n}return Object(m.a)(t,e),Object(i.a)(t,null,[{key:"_clickOnElementByClass",value:function(e){var t=document.getElementsByClassName(e);0!==t.length&&t[0].click()}}]),Object(i.a)(t,[{key:"handleHiddenInputChange",value:function(e){var t=this.props,n=t.language,a=t.word,r=t.onChange,l=e.target.value.substring(0,15).split("").map(function(e){return function(e,t){return e.toLowerCase()in g[t].scores}(e,n)?e:""}),o=b(a.modifiers,l.length,[]);r({value:l.join(""),modifiers:o}),this.constructor._clickOnElementByClass("hidden-input")}},{key:"handleModifierChange",value:function(e,t){var n=this.props,a=n.word,r=n.onChange,l=a.modifiers.slice();l[e]=t,r({value:a.value,modifiers:l}),E("modifier-added",{value:a.value,modifiers:l})}},{key:"handleTileClick",value:function(){this.focus()}},{key:"focus",value:function(){this.textHiddenInput.current.focus()}},{key:"render",value:function(){var e=this,t=this.props,n=t.language,a=t.word,l=this.state.inFocus;return r.a.createElement("div",{role:"textbox",onClick:this.focus,onKeyDown:this.focus,className:"scrabble-input-box".concat(a.value.length>8?" large":"")},r.a.createElement("input",{ref:this.textHiddenInput,onChange:this.handleHiddenInputChange,onKeyDown:function(e){return function(e){37!==e.keyCode&&38!==e.keyCode&&39!==e.keyCode&&40!==e.keyCode||e.preventDefault()}(e)},value:a.value,className:"hidden-input",onBlur:function(){return e.setState({inFocus:!1})},onFocus:function(){return e.setState({inFocus:!0})},type:"text",maxLength:"15",autoComplete:"off",autoCapitalize:"off",spellCheck:"false",autoCorrect:"off"}),r.a.createElement("div",{className:l?"scrabble-tiles blinker":"scrabble-tiles"},a.value.split("").map(function(t,l){return r.a.createElement(U,{onChange:function(t){return e.handleModifierChange(l,t)},key:l},r.a.createElement(S,{onClick:e.handleTileClick,letter:t,score:v(t,[[]],n),modifier:a.modifiers[l]}))})))}}]),t}(r.a.Component));function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var B={value:"",modifiers:[],score:0},_=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleUndo=n.handleUndo.bind(Object(u.a)(n)),n.handleEndTurn=n.handleEndTurn.bind(Object(u.a)(n)),n.handleEndGame=n.handleEndGame.bind(Object(u.a)(n)),n.handleAddWord=n.handleAddWord.bind(Object(u.a)(n)),n.handleBingo=n.handleBingo.bind(Object(u.a)(n)),n._scroll=n._scroll.bind(Object(u.a)(n)),n.input=r.a.createRef(),n.state={currentWord:B},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"_scroll",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"middle",t=this.props.isMobile;t&&("middle"===e?O():w())}},{key:"componentDidMount",value:function(){this.input.current&&this.input.current.focus(),this._scroll("top")}},{key:"onSetGame",value:function(e){var t=this.props.onSetGame;t(e),this.resetCurrentWord()}},{key:"resetCurrentWord",value:function(){this.setState({currentWord:B}),this.input.current&&this.input.current.focus()}},{key:"handleChange",value:function(e){var t=this.props.language,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach(function(t){Object(I.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{score:v(e.value,e.modifiers,t)});this.setState({currentWord:n})}},{key:"handleUndo",value:function(){(0,this.props.onUndo)(),this.resetCurrentWord(),E("undo")}},{key:"handleAddWord",value:function(){var e=this.state.currentWord,t=this.props.game;this.onSetGame(t.addWord(e)),this._scroll(),E("add-word",{word:e})}},{key:"handleEndTurn",value:function(e){var t=this.state.currentWord,n=this.props.game;0!==t.value.length&&(n=n.addWord(t)),this.onSetGame(n.endTurn()),this._scroll(),E("end-turn",0!==t.value.length?{word:t}:{})}},{key:"handleBingo",value:function(){var e=this.props,t=e.game;(0,e.onSetGame)(t.setBingo(!t.getCurrentTurn().bingo)),this._scroll(),E("toggle-bingo")}},{key:"handleEndGame",value:function(){var e=this.props,t=e.game;(0,e.onSetGame)(t.endGame()),this._scroll(),E("end-game",{"num-of-turns":t.playersTurns.length,"game-turns":t.playersTurns.map(function(e){return{turns:e}})})}},{key:"render",value:function(){var e=this.state.currentWord,t=this.props,n=t.game,a=t.language,l=t.undoDisabled,o=n.getCurrentTurn().isEmpty()&&""===e.value,i=o?"PASS":"END TURN",s=0!==n.currentPlayerIndex||""!==e.value||n.getCurrentTurn().score>0||1===n.playersTurns[n.getCurrentPlayerIndex()].length,c=![].concat(Object(h.a)(n.getCurrentTurn().words),[e]).some(function(e){return e.value.length>=7}),u=e.modifiers.some(function(e){return 0!==e.length}),m=0===n.getCurrentTurnNumber()&&0===n.getCurrentPlayerIndex()&&!u&&""!==e.value,d=0===n.getCurrentTurnNumber()&&0===n.getCurrentPlayerIndex(),p=!u&&!o&&d,g={ref:this.input,onChange:this.handleChange,word:e,language:a};return r.a.createElement("form",{className:d?"first-turn":null,onSubmit:function(e){return e.preventDefault()}},r.a.createElement(M,g),r.a.createElement("div",{className:"instruction-message ".concat(m?"":"hide")},"Click on the tile that is on the double word prime square"),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:this.handleEndTurn,type:"submit",className:"btn pass-endturn-button",disabled:p},i))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:this.handleAddWord,type:"button",className:"btn word-submit-button add-word",disabled:""===e.value||d},"+ ADD A WORD")),r.a.createElement("div",{className:"col"},r.a.createElement("input",{onChange:this.handleBingo,type:"checkbox",id:"bingoToggle",checked:n.getCurrentTurn().bingo,disabled:c}),r.a.createElement("label",{className:"btn bingo ".concat(c?"disabled":""),htmlFor:"bingoToggle"},"BINGO"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:this.handleUndo,type:"button",className:"btn word-submit-button undo",disabled:l},"UNDO")),r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:this.handleEndGame,type:"button",className:"btn end-game",disabled:s},"END GAME")))))}}]),t}(r.a.Component);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}var F={value:"",modifiers:[],score:0},K=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(u.a)(n)),n.handleUndo=n.handleUndo.bind(Object(u.a)(n)),n.handleLeftOvers=n.handleLeftOvers.bind(Object(u.a)(n)),n.input=r.a.createRef(),n.state={currentWord:F},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.input.current&&this.input.current.focus()}},{key:"resetCurrentWord",value:function(){this.setState({currentWord:F}),this.input.current&&this.input.current.focus()}},{key:"handleUndo",value:function(){(0,this.props.onUndo)(),this.resetCurrentWord(),E("undo")}},{key:"handleChange",value:function(e){var t=this.props.language,n=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(n,!0).forEach(function(t){Object(I.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},e,{score:-v(e.value,e.modifiers,t)});this.setState({currentWord:n})}},{key:"handleLeftOvers",value:function(e){var t=this.state.currentWord,n=this.props.onSetGame,a=this.props.game;e.preventDefault(),0!==t.value.length&&(a=a.addWord(t)),0===(a=a.endTurn()).currentPlayerIndex&&(a=a.distributeLeftOversToReapers(a.getReapers(),a.getSumOfLeftovers())),n(a),this.resetCurrentWord(),E("submit-leftovers",0!==t.value.length?{leftovers:t}:{})}},{key:"render",value:function(){var e=this.state.currentWord,t=this.props,n=t.game,a=t.language,l=t.undoDisabled,o=e.value.length>0?"SUBMIT LEFTOVERS":"SUBMIT NO LEFTOVERS";return r.a.createElement("div",null,n.areLeftOversSubmitted()?r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:this.handleUndo,type:"button",className:"btn word-submit-button undo",disabled:l},"UNDO"),r.a.createElement("a",{href:"/",className:"btn word-submit-button new-game"},"NEW GAME")))):r.a.createElement("form",{autoComplete:"off"},r.a.createElement(M,{ref:this.input,onChange:this.handleChange,word:e,language:a}),r.a.createElement("div",{className:"buttons"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:this.handleLeftOvers,type:"submit",className:"btn pass-endturn-button"},o))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},r.a.createElement("button",{onClick:this.handleUndo,type:"button",className:"btn word-submit-button undo",disabled:l},"UNDO"))))))}}]),t}(r.a.Component),V=function(e){function t(e){var n;Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleUndo=n.handleUndo.bind(Object(u.a)(n)),n.handleSetGame=n.handleSetGame.bind(Object(u.a)(n)),n.renderWinner=n.renderWinner.bind(Object(u.a)(n));var a=n.props.playerNames,r=JSON.parse(window.localStorage.getItem("ScoreKeeperState"));return n.state=r?{game:C.fromPlain(r.game),games:r.games.map(C.fromPlain)}:{game:C.createNewGame(a.length),games:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleSetGame",value:function(e){var t=this.state,n=t.game,a=t.games,r={game:e,games:[].concat(Object(h.a)(a.slice()),[n])};this.setState(r),window.localStorage.setItem("ScoreKeeperState",JSON.stringify(r))}},{key:"handleUndo",value:function(){var e=this.state.games,t=e.slice(0,-1),n=e[e.length-1];this.setState({game:n,games:t})}},{key:"renderWinner",value:function(){var e=this.state.game,t=this.props.playerNames,n=e.leftOversTurnNumber-1,a=e.getWinners();if(a.length>1){var r=e.getWinners(n);return r.map(function(a){return r.length>1?"".concat(t[a],": ").concat(e.getTotalScore(a,n)," points"):"".concat(t[a]," won with ").concat(e.getTotalScore(a,n)," points!")}).join(", ")}return"".concat(t[a[0]]," won with ").concat(e.getTotalScore(a[0])," points!")}},{key:"render",value:function(){var e=this.state,t=e.game,n=e.games,a=this.props,l=a.playerNames,o=a.language,i=a.isMobile,s={onSetGame:this.handleSetGame,onUndo:this.handleUndo,undoDisabled:0===n.length,isMobile:i,game:t,language:o};return r.a.createElement("div",{className:"score-keeper"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{id:"small-logo",href:"/"},r.a.createElement("img",{src:"logo.png",alt:"Scrabble score logo"})),r.a.createElement("h1",{className:"title"},"Scrabble Score Sheet"),i?r.a.createElement(G,{playerNames:l,game:t,language:o}):r.a.createElement(P,{playerNames:l,game:t,language:o}),t.areLeftOversSubmitted()?r.a.createElement("div",{className:"winner"},r.a.createElement("h1",null,this.renderWinner())):function(){if(!i)return r.a.createElement(W,{game:t,playerNames:l,isMobile:i})}(),t.isGameOver()?r.a.createElement(K,s):r.a.createElement(_,s),r.a.createElement("h3",null,"How to use Scrabble Score Online:"),r.a.createElement("ul",null,r.a.createElement("li",null,"To submit a word, type the word in the input box (the white rectangle above the buttons) then click END TURN"),r.a.createElement("li",null,"When scoring a word with a tile on a prime square (e.g., double-word), click on the coresponding tile in the input box then choose a coresponding option from the window.."),r.a.createElement("li",null,"If you made a mistake, you may use unlimited UNDO."),r.a.createElement("li",null,"When forming more than one word, press ADD WORD after entering each word in the input box."),r.a.createElement("li",null,"When a player used all seven tiles in a single turn, click BINGO. This adds a 50 points bonus."),r.a.createElement("li",null,"When using a BLANK tile, click on the coresponding tile and mark it as such."),r.a.createElement("li",null,"When all the players finished their last turn, click END GAME. Players will be then asked to enter their leftover tiles. Players with leftover tiles get their leftover points deducted from their score. Players with no leftovers collect the leftover points of all other players."))))}}]),t}(r.a.Component),H=(n(53),function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(c.a)(t).call(this,e))).handleGameStart=n.handleGameStart.bind(Object(u.a)(n)),n.handleWindowSizeChange=n.handleWindowSizeChange.bind(Object(u.a)(n)),n.handlePopState=n.handlePopState.bind(Object(u.a)(n)),n.state={playerNames:[],language:"en",width:10},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.state.playerNames;window.history.pushState({playerNames:e},null),window.addEventListener("popstate",this.handlePopState),d.a.initialize("UA-144533310-1"),d.a.pageview(window.location.pathname+window.location.search),this.handleWindowSizeChange(),this.constructor.maybeResetLocalStorage();var t=JSON.parse(window.localStorage.getItem("ScrabbleScoreKeeperState"));t&&this.setState({playerNames:t.playerNames})}},{key:"UNSAFE_componentWillMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange),window.removeEventListener("popstate",this.handlePopState)}},{key:"handlePopState",value:function(e){var t=e.state;this.setState({playerNames:t.playerNames})}},{key:"handleWindowSizeChange",value:function(){this.setState({width:window.innerWidth})}},{key:"handleGameStart",value:function(e,t){E("start-game",{"player-names":e,language:t}),window.history.pushState({playerNames:e},null),this.setState({playerNames:e,language:t}),window.localStorage.setItem("ScrabbleScoreKeeperState",JSON.stringify({playerNames:e}))}},{key:"renderGame",value:function(e){var t=this.state,n=t.playerNames,a=t.language;return 0===n.length?r.a.createElement(N,{onGameStart:this.handleGameStart}):r.a.createElement(V,{playerNames:n,language:a,isMobile:e})}},{key:"render",value:function(){var e=this.state.width<=815;return r.a.createElement("div",{className:"main ".concat(e?"mobile":"desktop")},this.renderGame(e))}}],[{key:"maybeResetLocalStorage",value:function(){window.localStorage.getItem("ScrabbleScoreKeeperState")&&(window.confirm("You have a game in progress.\nWould you like to resume it?")?E("game-resume"):(window.localStorage.removeItem("ScrabbleScoreKeeperState"),window.localStorage.removeItem("ScoreKeeperState")))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));p.a.getInstance().init("908142045794995ec39e6025a04bfdb4");var J=document.getElementsByClassName("content")[0];J.hasChildNodes()?Object(l.hydrate)(r.a.createElement(H,null),J):Object(l.render)(r.a.createElement(H,null),J),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[31,1,2]]]);
//# sourceMappingURL=main.85255059.chunk.js.map