(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(4),i=n.n(s),o=n(7),r=n(5),c=n(6),l=n(9),a=n(8),u=n(1),b=n.n(u),j=n(3),d=n.n(j),h=n(0),f=function(t){var e=t.goods;return Object(h.jsx)(h.Fragment,{children:e.map((function(t){return Object(h.jsx)("li",{children:t},t)}))})},O=(n(15),["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"]),v=function(t){Object(l.a)(n,t);var e=Object(a.a)(n);function n(){var t;Object(r.a)(this,n);for(var s=arguments.length,i=new Array(s),c=0;c<s;c++)i[c]=arguments[c];return(t=e.call.apply(e,[this].concat(i))).state={isStart:!1,isVisible:!1,listOfGoods:[].concat(O),visibleListOfGoods:[].concat(O),value:0},t.startButtonHandler=function(){return t.setState({isStart:!0,isVisible:!0})},t.reverseList=function(){return t.setState((function(t){return{visibleListOfGoods:t.visibleListOfGoods.reverse()}}))},t.alfabetSortList=function(){return t.setState((function(t){return{listOfGoods:t.visibleListOfGoods.sort((function(t,e){return t.localeCompare(e)}))}}))},t.sortListByLength=function(){return t.setState((function(t){return{listOfGoods:t.visibleListOfGoods.sort((function(t,e){return t.length-e.length}))}}))},t.filterLength=function(){t.setState((function(t){return{visibleListOfGoods:Object(o.a)(t.listOfGoods).filter((function(e){return e.length>=t.value}))}}))},t.resetList=function(){t.setState((function(){return{value:0,visibleListOfGoods:[].concat(O)}}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.isStart,s=e.isVisible,i=e.visibleListOfGoods;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("button",{type:"button",className:d()("button",{hidden:n}),onClick:this.startButtonHandler,children:"Start"}),Object(h.jsxs)("div",{className:d()("content",{hidden:!s}),children:[Object(h.jsxs)("div",{className:"buttons",children:[Object(h.jsx)("button",{type:"button",className:"button",onClick:this.reverseList,children:"Reverse"}),Object(h.jsx)("button",{type:"button",className:"button",onClick:this.alfabetSortList,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:"button",onClick:this.sortListByLength,children:"Sort by length"}),Object(h.jsx)("button",{type:"button",className:"button",onClick:this.resetList,children:"Reset"}),Object(h.jsxs)("select",{value:this.state.value,onChange:function(e){return t.setState({value:+e.target.value})},children:[Object(h.jsx)("option",{value:"1",children:"1"}),Object(h.jsx)("option",{value:"2",children:"2"}),Object(h.jsx)("option",{value:"3",children:"3"}),Object(h.jsx)("option",{value:"4",children:"4"}),Object(h.jsx)("option",{value:"5",children:"5"}),Object(h.jsx)("option",{value:"6",children:"6"}),Object(h.jsx)("option",{value:"7",children:"7"}),Object(h.jsx)("option",{value:"8",children:"8"}),Object(h.jsx)("option",{value:"9",children:"9"}),Object(h.jsx)("option",{value:"10",children:"10"})]})]}),Object(h.jsx)("ul",{className:"listOfGoods",children:Object(h.jsx)(f,{goods:i.filter((function(e){return e.length>=t.state.value}))})})]})]})}}]),n}(b.a.Component),p=v;i.a.render(Object(h.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.10a63617.chunk.js.map