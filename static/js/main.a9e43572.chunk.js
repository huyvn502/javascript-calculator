(this["webpackJsonpjavascript-calculator"]=this["webpackJsonpjavascript-calculator"]||[]).push([[0],[,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";var C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(1),C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_DisplayCalculation__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(10),_DisplayKeyboard__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(11),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__),CalculatorApp=function(_Component){Object(C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(CalculatorApp,_Component);var _super=Object(C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(CalculatorApp);function CalculatorApp(e){var t;return Object(C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,CalculatorApp),(t=_super.call(this,e)).state={operand:"0",expression:""},t.updateOperand=t.updateOperand.bind(Object(C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.updateExpression=t.updateExpression.bind(Object(C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.clearCalculation=t.clearCalculation.bind(Object(C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.isOperator=t.isOperator.bind(Object(C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.addOperator=t.addOperator.bind(Object(C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t.calculatingExpression=t.calculatingExpression.bind(Object(C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(t)),t}return Object(C_Users_vonha_Programing_Learning_ReactApp_javascript_calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(CalculatorApp,[{key:"updateExpression",value:function(e){this.setState((function(t){return{expression:t.expression+e}}))}},{key:"updateOperand",value:function(e){var t=this;if((!this.state.operand.includes(".")||"."!==e)&&("0"!==this.state.operand||0!==e)){if("0"===this.state.operand||this.isOperator(this.state.operand))return this.setState({operand:e.toString()}),void this.updateExpression(e);this.setState((function(a){return{operand:t.state.operand+e}})),this.updateExpression(e)}}},{key:"isOperator",value:function(e){return!!["+","-","*","/"].includes(e)}},{key:"addOperator",value:function(e){var t=this;this.setState({operand:e});var a=this.state.expression.length;if(this.isOperator(this.state.expression[a-1]))if("-"!==e)this.setState((function(_){return t.isOperator(t.state.expression[a-1])&&t.isOperator(t.state.expression[a-2])?{expression:_.expression.slice(0,a-2)+e}:{expression:_.expression.slice(0,a-1)+e}}));else{if(this.isOperator(this.state.expression[a-1])&&this.isOperator(this.state.expression[a-2]))return;this.updateExpression(e)}else this.updateExpression(e)}},{key:"calculatingExpression",value:function calculatingExpression(){var mainExpression=this.state.expression.replace(/--/g,"+");this.setState((function(state){return{expression:eval(mainExpression),operand:eval(mainExpression)}}))}},{key:"clearCalculation",value:function(){this.setState({expression:"",operand:"0"})}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{id:"calculator-container",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DisplayCalculation__WEBPACK_IMPORTED_MODULE_6__.a,{expression:this.state.expression,operand:this.state.operand}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DisplayKeyboard__WEBPACK_IMPORTED_MODULE_7__.a,{updateOperand:this.updateOperand,clearCalculation:this.clearCalculation,addOperator:this.addOperator,calculatingExpression:this.calculatingExpression})]})}}]),CalculatorApp}(react__WEBPACK_IMPORTED_MODULE_5__.Component);__webpack_exports__.a=CalculatorApp},function(e,t,a){"use strict";var _=a(3),n=a(4),r=a(6),s=a(5),i=a(2),o=a(0),l=function(e){Object(r.a)(a,e);var t=Object(s.a)(a);function a(){return Object(_.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"render",value:function(){return Object(o.jsxs)("div",{id:"monitor-calculator",children:[Object(o.jsx)("h5",{children:this.props.expression}),Object(o.jsx)("h2",{id:"display",children:this.props.operand})]})}}]),a}(i.Component);t.a=l},function(e,t,a){"use strict";var _=a(3),n=a(4),r=a(1),s=a(6),i=a(5),o=a(2),l=a(0),c=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(_.a)(this,a),(n=t.call(this,e)).clearButtonHandle=n.clearButtonHandle.bind(Object(r.a)(n)),n.zeroButtonHandle=n.zeroButtonHandle.bind(Object(r.a)(n)),n.oneButtonHandle=n.oneButtonHandle.bind(Object(r.a)(n)),n.twoButtonHandle=n.twoButtonHandle.bind(Object(r.a)(n)),n.threeButtonHandle=n.threeButtonHandle.bind(Object(r.a)(n)),n.fourButtonHandle=n.fourButtonHandle.bind(Object(r.a)(n)),n.fiveButtonHandle=n.fiveButtonHandle.bind(Object(r.a)(n)),n.sixButtonHandle=n.sixButtonHandle.bind(Object(r.a)(n)),n.sevenButtonHandle=n.sevenButtonHandle.bind(Object(r.a)(n)),n.eightButtonHandle=n.eightButtonHandle.bind(Object(r.a)(n)),n.nineButtonHandle=n.nineButtonHandle.bind(Object(r.a)(n)),n.decimalButtonHandle=n.decimalButtonHandle.bind(Object(r.a)(n)),n.multiplyClick=n.multiplyClick.bind(Object(r.a)(n)),n.divideClick=n.divideClick.bind(Object(r.a)(n)),n.subtractClick=n.subtractClick.bind(Object(r.a)(n)),n.addClick=n.addClick.bind(Object(r.a)(n)),n.equalsPress=n.equalsPress.bind(Object(r.a)(n)),n}return Object(n.a)(a,[{key:"clearButtonHandle",value:function(){this.props.clearCalculation()}},{key:"zeroButtonHandle",value:function(){this.props.updateOperand(0)}},{key:"oneButtonHandle",value:function(){this.props.updateOperand(1)}},{key:"twoButtonHandle",value:function(){this.props.updateOperand(2)}},{key:"threeButtonHandle",value:function(){this.props.updateOperand(3)}},{key:"fourButtonHandle",value:function(){this.props.updateOperand(4)}},{key:"fiveButtonHandle",value:function(){this.props.updateOperand(5)}},{key:"sixButtonHandle",value:function(){this.props.updateOperand(6)}},{key:"sevenButtonHandle",value:function(){this.props.updateOperand(7)}},{key:"eightButtonHandle",value:function(){this.props.updateOperand(8)}},{key:"nineButtonHandle",value:function(){this.props.updateOperand(9)}},{key:"decimalButtonHandle",value:function(){this.props.updateOperand(".")}},{key:"multiplyClick",value:function(){this.props.addOperator("*")}},{key:"divideClick",value:function(){this.props.addOperator("/")}},{key:"subtractClick",value:function(){this.props.addOperator("-")}},{key:"addClick",value:function(){this.props.addOperator("+")}},{key:"equalsPress",value:function(){this.props.calculatingExpression()}},{key:"render",value:function(){return Object(l.jsxs)("div",{id:"keyboard-container",children:[Object(l.jsx)("button",{id:"clear",onClick:this.clearButtonHandle,children:"C"}),Object(l.jsx)("button",{id:"divide",className:"yellow-key",onClick:this.divideClick,children:"/"}),Object(l.jsx)("button",{id:"multiply",className:"yellow-key",onClick:this.multiplyClick,children:"x"}),Object(l.jsx)("button",{id:"seven",className:"normal-key",onClick:this.sevenButtonHandle,children:"7"}),Object(l.jsx)("button",{id:"eight",className:"normal-key",onClick:this.eightButtonHandle,children:"8"}),Object(l.jsx)("button",{id:"nine",className:"normal-key",onClick:this.nineButtonHandle,children:"9"}),Object(l.jsx)("button",{id:"subtract",className:"purple-key",onClick:this.subtractClick,children:"-"}),Object(l.jsx)("button",{id:"four",className:"normal-key",onClick:this.fourButtonHandle,children:"4"}),Object(l.jsx)("button",{id:"five",className:"normal-key",onClick:this.fiveButtonHandle,children:"5"}),Object(l.jsx)("button",{id:"six",className:"normal-key",onClick:this.sixButtonHandle,children:"6"}),Object(l.jsx)("button",{id:"add",className:"purple-key",onClick:this.addClick,children:"+"}),Object(l.jsx)("button",{id:"one",className:"normal-key",onClick:this.oneButtonHandle,children:"1"}),Object(l.jsx)("button",{id:"two",className:"normal-key",onClick:this.twoButtonHandle,children:"2"}),Object(l.jsx)("button",{id:"three",className:"normal-key",onClick:this.threeButtonHandle,children:"3"}),Object(l.jsx)("button",{id:"equals",className:"purple-key",onClick:this.equalsPress,children:"="}),Object(l.jsx)("button",{id:"zero",className:"normal-key",onClick:this.zeroButtonHandle,children:"0"}),Object(l.jsx)("button",{id:"decimal",className:"normal-key",onClick:this.decimalButtonHandle,children:"."})]})}}]),a}(o.Component);t.a=c},,,,,function(e,t,a){},,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var _=a(2),n=a.n(_),r=a(8),s=a.n(r),i=(a(16),a(9)),o=(a(18),a(0));var l=function(){return Object(o.jsx)(i.a,{})},c=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,20)).then((function(t){var a=t.getCLS,_=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),_(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(l,{})}),document.getElementById("root")),c()}],[[19,1,2]]]);
//# sourceMappingURL=main.a9e43572.chunk.js.map