(function(t){function e(e){for(var n,r,o=e[0],l=e[1],c=e[2],h=0,d=[];h<o.length;h++)r=o[h],s[r]&&d.push(s[r][0]),s[r]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],n=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(n=!1)}n&&(a.splice(e--,1),t=r(r.s=i[0]))}return t}var n={},s={app:0},a=[];function r(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=n,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)r.d(i,n,function(e){return t[e]}.bind(null,n));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"00df":function(t,e,i){"use strict";var n=i("98c5"),s=i.n(n);s.a},"034f":function(t,e,i){"use strict";var n=i("c21b"),s=i.n(n);s.a},1922:function(t,e,i){"use strict";var n=i("c715"),s=i.n(n);s.a},"1a5c":function(t,e,i){"use strict";var n=i("9813"),s=i.n(n);s.a},"2ff7":function(t,e,i){"use strict";var n=i("9c9b"),s=i.n(n);s.a},"380d":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return TreeState});var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("7f7f"),core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__),_Users_jianchen_opensource_jsontreetable_node_modules_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("c665"),_Users_jianchen_opensource_jsontreetable_node_modules_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("aa9a"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("cadf"),core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("551c"),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_4__),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("097d"),core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_5__),lodash__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("2ef0"),lodash__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__),_History__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("e58a"),_Tree__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("b983"),o,TreeState=function(){function TreeState(t,e){Object(_Users_jianchen_opensource_jsontreetable_node_modules_babel_runtime_helpers_builtin_es6_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["a"])(this,TreeState),this.tree=TreeState.buildTree(t,e),this.history=new _History__WEBPACK_IMPORTED_MODULE_7__["a"],this.selected=null,this.initialNode=null,this.tree&&this.select(this.tree.root,!0)}return Object(_Users_jianchen_opensource_jsontreetable_node_modules_babel_runtime_helpers_builtin_es6_createClass__WEBPACK_IMPORTED_MODULE_2__["a"])(TreeState,[{key:"select",value:function(t,e){null!=this.tree&&(lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isString(t)&&(t=this.tree.root.getByPath(t),!t)||(e&&(this.initialNode=t),this.selected!==t&&(this.selected=t,this.history.append(t))))}},{key:"isRootSelected",value:function(){return null!=this.tree&&this.selected===this.tree.root}},{key:"isInitialNodeSelected",value:function(){return null!=this.tree&&this.selected===this.initialNode}},{key:"canBack",value:function(){return this.history.canBack()}},{key:"canForward",value:function(){return this.history.canForward()}},{key:"back",value:function(){this.selected=this.history.back()}},{key:"forward",value:function(){this.selected=this.history.forward()}}],[{key:"buildTree",value:function(t,e){if(!t||"Tree"===t.constructor.name)return t;var i=lodash__WEBPACK_IMPORTED_MODULE_6___default.a.isString(t)?TreeState.parseJson(t):t;return i?new _Tree__WEBPACK_IMPORTED_MODULE_8__["b"](i,e):null}},{key:"parseJson",value:function parseJson(jsonStr){try{return JSON.parse(jsonStr)}catch(e){try{return eval("o=".concat(jsonStr)),o}catch(t){return console.error(t),null}}}}]),TreeState}()},"3a3d":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("cadf"),i("551c"),i("097d");var n=i("2b0e"),s=i("358c"),a=i("9f7b"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"components-container",attrs:{id:"app"}},[i("div",{staticClass:"inputline"},[t._v("Select JSON data:\n    "),i("b-form-select",{staticClass:"mb-3",staticStyle:{width:"auto"},attrs:{options:t.jsonTypeNames},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}})],1),t.selected?i("json-tree-table",{attrs:{data:t.jsonData,"inital-path":"activityHistory"}}):t._e(),i("hr"),i("div",[t._v("Json Table")]),i("json-table",{attrs:{"table-data":t.tstateTable,options:t.jsonTableOptions}})],1)},o=[],l=i("c93e"),c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticStyle:{width:"100%"}},[t._e()],1),i("split-panel",{ref:"splitPanel",attrs:{orientation:"vertical","show-border":!0,"init-position":400}},[i("div",{staticStyle:{overflow:"auto",display:"flex","flex-grow":"1"},attrs:{slot:"panel1"},slot:"panel1"},[i("split-panel",{ref:"splitPanelLeft",attrs:{orientation:"vertical","show-border":!0,"init-position":100}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.jsonStr,expression:"jsonStr"}],staticStyle:{width:"100%",height:"auto","flex-grow":"1",overflow:"auto"},attrs:{slot:"panel1"},domProps:{value:t.jsonStr},on:{input:function(e){e.target.composing||(t.jsonStr=e.target.value)}},slot:"panel1"}),i("div",{attrs:{slot:"panel2"},slot:"panel2"},[t.tstate.tree?i("tree-view",{attrs:{"json-tree":t.tstate.tree,options:{maxDepth:2,rootObjectKey:"root"}},on:{nodeClicked:t.nodeClicked}}):i("div",[t._v("No Data")])],1)])],1),i("div",{attrs:{slot:"panel2"},slot:"panel2"},[t.tstate.tree?i("div",[i("json-table",{attrs:{"table-data":t.tstate},on:{nodeClicked:t.nodeClicked}})],1):i("div",[t._v("No Data")])])])],1)},u=[],h=i("2ef0"),d=i.n(h),_=i("380d"),p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("tree-view-item",{staticClass:"item-root",attrs:{data:t.tree.root,"max-depth":t.allOptions.maxDepth,"current-depth":0},on:{nodeClicked:t.nodeClicked}})],1)},f=[],b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"item"},[t.data.isSimpleType()?i("div",[i("span",{staticClass:"key"},[t._v(t._s(t.data.key)+": ")]),i("span",{staticClass:"value"},[t._v(t._s(t.data.obj))])]):i("div",{staticClass:"leaf"},[i("div",{staticClass:"node",on:{click:function(e){e.stopPropagation(),t.toggleOpen()}}},[i("span",{staticClass:"key key-with-chevron",class:{opened:t.isOpen()}},[i("a",{attrs:{href:"#/"},on:{click:function(e){e.stopPropagation(),t.$emit("nodeClicked",t.data)}}},[t._v(t._s(t.data.key))])]),i("span",{staticClass:"hint"},[t._v(t._s(t.data.typeSizeLabel))])]),t._l(t.data.children,function(e,n){return[i("keep-alive",{key:n},[t.isOpen()?i("tree-view-item",{key:n,attrs:{"max-depth":t.maxDepth,"current-depth":t.currentDepth+1,data:e},on:{nodeClicked:t.nodeClicked}}):t._e()],1)]})],2)])},v=[],m=(i("c5f6"),i("b983")),y={name:"tree-view-item",props:{data:m["a"],maxDepth:Number,currentDepth:Number,modifiable:Boolean},data:function(){return{open:this.currentDepth<this.maxDepth}},methods:{isOpen:function(){return this.open},toggleOpen:function(){this.open=!this.open},nodeClicked:function(t){this.$emit("nodeClicked",t)}}},O=y,g=(i("b501"),i("2877")),j=Object(g["a"])(O,b,v,!1,null,"1b544ee5",null);j.options.__file="TreeViewItem.vue";var k=j.exports,P={components:{TreeViewItem:k},name:"tree-view",props:{data:[String,Object],jsonTree:m["b"],options:Object},methods:{nodeClicked:function(t){this.$emit("nodeClicked",t)}},computed:{allOptions:function(){return d.a.extend({},{rootObjectKey:"root",maxDepth:4,modifiable:!1},this.options||{})},tree:function(){return null!=this.jsonTree?this.jsonTree:new m["b"](this.data,this.allOptions.rootObjectKey)}}},w=P,S=(i("8a2e"),Object(g["a"])(w,p,f,!1,null,"615a88ea",null));S.options.__file="TreeView.vue";var T=S.exports,C=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("datatable",t._b({},"datatable",t.tableOpt,!1),[i("div",{staticStyle:{display:"flex"}},[i("b-btn",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],attrs:{size:"sm",variant:"outline-secondary",pressed:t.isExpanded,title:"expand"},on:{"update:pressed":function(e){t.isExpanded=e}}},[i("i",{staticClass:"fa fa-arrows-h"})]),t._v("  \n      "),i("b-button-group",{staticClass:"mx-1"},[t.tstate.canBack()?i("b-btn",{attrs:{size:"sm",title:"back"},on:{click:function(e){t.tstate.back()}}},[i("i",{staticClass:"fa fa-arrow-left"})]):t._e(),t.tstate.canForward()?i("b-btn",{attrs:{size:"sm",title:"forward"},on:{click:function(e){t.tstate.forward()}}},[i("i",{staticClass:"fa fa-arrow-right"})]):t._e()],1),t.tstate.isRootSelected()?t._e():i("json-path",{attrs:{"tree-node":t.selected},on:{nodeClicked:t.nodeClicked}})],1)])],1)},E=[],x=(i("7f7f"),i("7514"),i("a322")),D=(i("ac6a"),i("456d"),i("55dd"),i("6762"),i("2fdb"),{filter:function(t,e,i){var n=e;return t.forEach(function(t){var e=t.field,s=i[t.field];s&&(d.a.isArray(s)?n=n.filter(function(t){return s.includes(t[e])}):d.a.isString(s)?n=n.filter(function(t){return t[e]&&"".concat(t[e]).toLowerCase().includes(s.toLowerCase())}):console.log("Unknown query: ".concat(JSON.stringify(s))))}),i.sort&&(n=d.a.orderBy(n,i.sort,i.order)),n.slice(i.offset,i.offset+i.limit)}}),M=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"filter-header"},[t._v("\n"+t._s(t.title)+"\n  "),i("b-button",{staticStyle:{padding:"0px"},attrs:{tabindex:"0",size:"sm",variant:"link",id:t.filterBtnId}},[i("i",{staticClass:"m-2 fa fa-filter",class:{"text-muted":!t.keyword},staticStyle:{margin:"1px !important"}})]),i("b-popover",{attrs:{target:t.filterBtnId,triggers:"click blur",placement:"bottom"},on:{show:t.onShowPopover}},[i("div",{staticClass:"input-group input-group-sm"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],ref:"input",staticClass:"form-control",attrs:{type:"search",placeholder:"Search "+t.field+"..."},domProps:{value:t.keyword},on:{keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.search(e):null},input:function(e){e.target.composing||(t.keyword=e.target.value)}}}),i("span",{staticClass:"input-group-btn"},[i("button",{staticClass:"btn btn-default fa fa-search",on:{click:t.search}})])])])],1)},A=[],B=(i("386d"),{props:["field","title","query"],data:function(){return{keyword:""}},watch:{keyword:function(t){""===t&&this.search()}},methods:{search:function(){var t=this.query;this.$set(t,this.field,this.keyword),t.offset=0,this.$root.$emit("bv::hide::popover")},onShowPopover:function(){var t=this;n["a"].nextTick(function(){return t.$refs.input.focus({preventScroll:!0})})}},computed:{filterBtnId:function(){return"filterbtn-".concat(this.field)}}}),L=B,R=(i("a604"),Object(g["a"])(L,M,A,!1,null,null,null));R.options.__file="th-Filter.vue";var $=R.exports,z=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.html?i("div",{domProps:{innerHTML:t._s(t.html)}}):null===t.strVal?i("div",[i("tree-view-item",{staticClass:"tree-view-item-root",staticStyle:{"margin-left":"0!important"},attrs:{data:t.value,"max-depth":0,"current-depth":0},on:{nodeClicked:t.nodeClicked}})],1):i("div",[t._v("\n    "+t._s(t.strVal)+"\n  ")])])},I=[],N={components:{TreeViewItem:k},props:["field","value","row","xprops","columns"],methods:{nodeClicked:function(t){this.xprops.tstate.select(t)}},computed:{strVal:function(){return this.value?this.value.isObject()?null:this.value.obj:""},html:function(){var t=d.a.find(this.columns,{field:this.field});return t&&t.html&&t.html(this.value,this.row)}}},W=N,K=(i("2ff7"),Object(g["a"])(W,z,I,!1,null,null,null));K.options.__file="td-Value.vue";var H=K.exports,U=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.row["@value"].isObject()?i("div",[i("a",{attrs:{href:"#/"},on:{click:function(e){e.stopPropagation(),t.nodeClicked(t.row["@value"])}}},[t._v(t._s(this.value))])]):i("div",[t._v(t._s(this.value))])])},q=[],J={props:["value","row","xprops"],methods:{nodeClicked:function(t){this.xprops.tstate.select(t)}}},V=J,F=Object(g["a"])(V,U,q,!1,null,null,null);F.options.__file="td-Key1.vue";var G=F.exports,X=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ol",{staticClass:"breadcrumb"},[t._l(t.items,function(e){return t.items?i("li",{key:e.text,class:["breadcrumb-item",e.active?"active":null]},[e.active?i("span",{domProps:{innerHTML:t._s(e.text)}}):i("b-link",{attrs:{to:e.to||e.href||e.link},domProps:{innerHTML:t._s(e.text)},on:{click:function(i){t.onclick(e)}}})],1):t._e()}),t._t("default")],2)},Y=[],Q={props:["treeNode"],methods:{onclick:function(t){this.$emit("nodeClicked",t.node)}},computed:{items:function(){var t=[];if(!this.treeNode)return null;t.unshift({text:this.treeNode.key,active:!0});for(var e=this.treeNode.parent;null!==e;e=e.parent)t.unshift({text:e.key,href:"",node:e});return t}}},Z=Q,tt=(i("1922"),Object(g["a"])(Z,X,Y,!1,null,null,null));tt.options.__file="JsonPath.vue";var et=tt.exports,it="@value",nt="#",st="@key",at={name:"json-table",props:{tableData:{TreeState:_["a"],Tree:m["b"],Object:Object,String:String},options:Object},components:{thFilter:$,JsonPath:et},data:function(){return{tableOpt:{tblClass:"table-bordered",pageSizeOptions:[20,50,100,200],columns:[],data:[],rawData:[],total:0,query:{limit:100},xprops:{tstate:this.tstate}},defTableOpt:null,tstate:null,isExpanded:!1}},methods:{rebuildTable:function(t){this.defTableOpt||(this.defTableOpt=this.tableOpt),this.defTableOpt.columns=[],this.tableOpt=Object(l["a"])({},this.defTableOpt,this.applyCustomOpts&&this.options),this.buildTable(t),this.queryData(),this.tableOpt.xprops.tstate=this.tstate},buildTable:function(t){if(this.tableOpt.rawData=[],t){var e=t.isArray(),i=e?nt:st;this.addColumn(i,0);for(var n=Object.keys(t.children),s=0;s<n.length;s++){var a,r=n[s],o=t.children[r],l=(a={},Object(x["a"])(a,i,e?Number(r):r),Object(x["a"])(a,it,o),a);if(this.tableOpt.rawData.push(l),this.isExpanded&&o&&!o.isLeaf())for(var c=Object.keys(o.children),u=0;u<c.length;u++){var h=c[u];this.addColumn(h),l[h]=o.children[h]}else this.addColumn(it,1)}}},addColumn:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.tableOpt.columns.length,i=0===e,n=this.tableOpt.columns,s=n.find(function(e){return e.field===t});s||(s={field:t,visible:i||!(this.applyCustomOpts&&this.options.columns)},n.splice(e,0,s)),s.processed||(s.title=s.title||t,s.sortable=!0,s.thComp=s.thComp||$,s.tdComp=s.tdComp||i?G:H,s.processed=!0,i&&(s.thClass="jsontable-min",s.tdClass="jsontable-min"))},defaultExpand:function(t){if(!t)return!1;for(var e={},i=0,n=Object.keys(t.children),s=0;s<n.length;s++){var a=n[s],r=t.children[a];if(r&&!r.isLeaf())for(var o=Object.keys(r.children),l=0;l<o.length;l++){var c=o[l];e[c]=null,i++}}var u=Object.keys(e).length*Object.keys(t.children).length;return 4*i>u},nodeClicked:function(t){this.tstate.select(t)},queryData:function(){var t=this.tableOpt;t.data=D.filter(t.columns,t.rawData,t.query),t.total=t.data.length}},watch:{query:{deep:!0,handler:function(){this.queryData()}},isExpanded:function(){this.rebuildTable(this.selected)},tableData:{immediate:!0,handler:function(t){this.tstate=t&&"TreeState"===t.constructor.name?t:new _["a"](t)}},selected:{immediate:!0,handler:function(t){this.isExpanded=this.defaultExpand(t),this.rebuildTable(t)}},options:function(){this.rebuildTable(this.selected)}},computed:{selected:function(){return this.tstate&&this.tstate.selected},applyCustomOpts:function(){return this.tstate.isInitialNodeSelected()&&this.isExpanded&&this.options},query:function(){return this.tableOpt.query}}},rt=at,ot=(i("00df"),Object(g["a"])(rt,C,E,!1,null,null,null));ot.options.__file="JsonTable.vue";var lt=ot.exports,ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"split-panel",class:{"split-panel--unselectable":t.isResizing},style:t.containerStyle,on:{mousemove:t.resizing,mouseup:t.stopResize}},[i("div",{staticClass:"split-panel__panel-container",style:t.panel1Style},[t._t("panel1")],2),i("div",{staticClass:"split-panel__panel-container",style:t.panel2Style},[t._t("panel2")],2),i("div",{staticClass:"split-panel__size-handle",style:t.handleStyle,on:{mousedown:t.startResize}})])},ut=[],ht={created:function(){this.$root.$on("splitter-size-changed",this.sizeChanged)},data:function(){return{containerWidth:0,containerHeight:0,SplitPosition:this.initPosition,handlePosition:1,isResizing:!1,startPos:0,diff:0,timeout:null}},computed:{containerStyle:function(){var t={};return this.width&&(t.width=this.width+"px"),this.height&&(t.height=this.height+"px"),this.showBorder&&(t.border="1px solid grey"),"horizontal"===this.orientation&&(t["flex-direction"]="column"),t},panel1Style:function(){var t={},e=this.showBorder?1:0;return"vertical"===this.orientation?(t.width=this.SplitPosition>0&&this.containerWidth>0?this.SplitPosition-e+"px":"50%",t.height="auto"):(t.width="auto",t.height=this.SplitPosition>0&&this.containerHeight>0?this.SplitPosition-e+"px":"50%"),t},panel2Style:function(){var t={flex:1};return this.orientation,t},handleStyle:function(){var t;return t=this.isResizing?this.handlePosition:this.SplitPosition,"vertical"===this.orientation?{width:"5px",height:"100%",top:"0",left:t+"px","border-left":"1px solid grey",cursor:"col-resize"}:{width:"100%",height:"2px",left:"0",top:t+"px","border-top":"1px solid grey",cursor:"row-resize"}}},props:{orientation:{type:String,default:"vertical"},initPosition:{type:Number},showBorder:{type:Boolean,default:!0},width:{type:Number},height:{type:Number}},methods:{validateSettings:function(){"vertical"===this.orientation?this.containerWidth&&(this.SplitPosition?this.SplitPosition>this.containerWidth-10&&(this.SplitPosition=this.containerWidth-10):this.SplitPosition=this.containerWidth/2):this.containerHeight&&(this.SplitPosition?this.SplitPosition>this.containerHeight-10&&(this.SplitPosition=this.containerHeight-10):this.SplitPosition=this.containerHeight/2)},setSize:function(){this.containerWidth=this.$el.offsetWidth,this.containerHeight=this.$el.offsetHeight,this.validateSettings(),this.handlePosition=this.SplitPosition},isParent:function(t){if(t===this.$root)return!0;var e=this.$parent;while(e!==this.$root){if(e===t)return!0;e=e.$parent}return!1},sizeChanged:function(t){var e=this;this.isParent(t)&&(this.setSize(),this.$nextTick(function(){e.$root.$emit("splitter-size-changed",e)}))},startResize:function(t){this.isResizing=!0,"vertical"===this.orientation?this.startPos=t.clientX:this.startPos=t.clientY,this.diff=0},resizing:function(t){var e;console.log("resizing..."),this.isResizing&&("vertical"===this.orientation?(e=this.SplitPosition+(t.clientX-this.startPos),e>10&&e<this.containerWidth-10&&(this.diff=t.clientX-this.startPos,this.handlePosition=this.SplitPosition+this.diff)):(e=this.SplitPosition+(t.clientY-this.startPos),e>10&&e<this.containerHeight-10&&(this.diff=t.clientY-this.startPos,this.handlePosition=this.SplitPosition+this.diff)),console.log("resizing: newPos=".concat(e,", handlePosition=").concat(this.handlePosition)))},stopResize:function(){var t=this;this.isResizing&&(this.SplitPosition+=this.diff,this.handlePosition=this.SplitPosition,this.isResizing=!1,this.$nextTick(function(){t.$root.$emit("splitter-size-changed",t)}))}}},dt=ht,_t=(i("a0d3"),Object(g["a"])(dt,ct,ut,!1,null,"5eb089c0",null));_t.options.__file="SplitPanel.vue";var pt=_t.exports,ft={name:"app",components:{TreeView:T,JsonTable:lt,SplitPanel:pt},props:{data:[Object,Array,String],options:Object,initalPath:String},data:function(){return{showSource:!1,showTree:!0,showTable:!0,selectedNode:null,jsonStr:null,tstate:null}},mounted:function(){this.$refs.splitPanel.sizeChanged(this),this.$refs.splitPanelLeft.sizeChanged(this)},watch:{data:{immediate:!0,handler:function(t){this.jsonStr=d.a.isString(t)?t:this.jsonStr=JSON.stringify(t,null,"  ")}},jsonStr:{immediate:!0,handler:function(t){this.tstate=new _["a"](t,this.rootObjectKey),this.initalPath&&this.tstate.select(this.initalPath,!0)}}},methods:{nodeClicked:function(t){this.tstate.select(t)}}},bt=ft,vt=(i("1a5c"),Object(g["a"])(bt,c,u,!1,null,null,null));vt.options.__file="JsonTreeTable.vue";var mt=vt.exports,yt={jsonTypeNames:["sampleJSON","sampleArray","jsonStr"],jsonTypes:{jsonStr:'\n    {\n      refundAmtMoney:"USD 15.32",\n      activityHistory:[\n      {\n        $type:"ActivityHist",\n        creationDate:"2014/10/02 10:20:37",\n        lastModifiedDate:"2014/10/02 10:20:37",\n        runtimeContext:"t=118",\n        partitionKey:0,\n        activityType:"1-buyerCreateCancel",\n      },\n      {\n        $type:"ActivityHistBoImpl",\n        creationDate:"2014/10/02 11:15:13",\n        lastModifiedDate:"2014/10/02 11:15:13",\n        runtimeContext:"m=t=148",\n        partitionKey:0,\n        activityType:"6-sellerApprove",\n      }]\n    }\n    ',sampleJSON:{testArray:["Just a Test String","in a Test Array",0,1,!0,!1],component:"vue-json-tree-view",descripton:"A JSON Tree View built in Vue.js",tags:[{name:"vue.js"},{name:"JSON"}],steps:["HTML Template","Root Component","View Component",{"Transformation Logic":["Transform Objects","Transform Arrays","Transform Values"]},"Animate","Allow Options","Blog about it..."],obj:{key1:"val1",key2:"val2"}},sampleArray:[{col1:"value11",col2:"value12"},{col1:"value21",col3:"value23"},"value",{col1:"value31",col2:"value32",col3:"value33"},["abc","def",{a:1,b:2}]]}},Ot={name:"app",components:{JsonTreeTable:mt,JsonTable:lt},data:function(){return Object(l["a"])({selected:yt.jsonTypeNames[0]},yt,{jsonTableOptions:{Pagination:!1,columns:[{field:"activityType"},{field:"partitionKey"},{field:"creationDate",html:function(t,e){return'<a href="http://abc.com/'.concat(e.runtimeContext.obj,'">').concat(t.obj,"</a>")}}]}})},computed:{jsonData:function(){return this.jsonTypes[this.selected]},tstateTable:function(){var t=new _["a"](this.jsonTypes.jsonStr);return t.select(t.tree.root.getByPath("/activityHistory"),!0),t}}},gt=Ot,jt=(i("034f"),Object(g["a"])(gt,r,o,!1,null,null,null));jt.options.__file="App.vue";var kt=jt.exports;n["a"].config.productionTip=!1,n["a"].use(s["a"]),n["a"].use(a["a"]),n["a"].component("tree-view-item",k),n["a"].config.performance=!0,new n["a"]({render:function(t){return t(kt)}}).$mount("#app")},"8a2e":function(t,e,i){"use strict";var n=i("b9ae"),s=i.n(n);s.a},"8b3c":function(t,e,i){},9813:function(t,e,i){},"98c5":function(t,e,i){},"9c9b":function(t,e,i){},a0d3:function(t,e,i){"use strict";var n=i("8b3c"),s=i.n(n);s.a},a604:function(t,e,i){"use strict";var n=i("3a3d"),s=i.n(n);s.a},b501:function(t,e,i){"use strict";var n=i("f695"),s=i.n(n);s.a},b983:function(t,e,i){"use strict";i.d(e,"b",function(){return c}),i.d(e,"a",function(){return u});i("ac4d"),i("8a81"),i("55dd"),i("28a5"),i("ac6a"),i("456d"),i("6b54");var n=i("a322"),s=i("c665"),a=i("aa9a"),r=(i("cadf"),i("551c"),i("097d"),i("2ef0")),o=i.n(r),l=function(){function t(){Object(s["a"])(this,t)}return Object(a["a"])(t,null,[{key:"getSimpleTypeName",value:function(t){var e=t.indexOf("<");e>0&&(t=t.substr(0,e));var i=t.lastIndexOf(".");return i<0?t:t.substring(e+1,i)}}]),t}(),c=function(){function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root";Object(s["a"])(this,t),this.obj=e,this.hashMap={},this.tagType=t.TAG_TYPE,this.tagHash=t.TAG_HASH,this.tagHashPrefix=t.TAG_HASH_PREFIX,this.root=new u(this,null,i,e)}return Object(a["a"])(t,[{key:"toString",value:function(){return"root:".concat(this.root.toString())}}]),t}();Object(n["a"])(c,"TAG_TYPE","$type"),Object(n["a"])(c,"TAG_HASH","$hash"),Object(n["a"])(c,"TAG_HASH_PREFIX","$hash:");var u=function(){function t(e,i,n,a){Object(s["a"])(this,t),this.tree=e,this.parent=i,this.key=n,this.obj=a,this._children=null,this.hash&&(this.tree.hashMap[this.hash]=this)}return Object(a["a"])(t,[{key:"getChildValue",value:function(t){return this.obj&&this.obj[t]}},{key:"toString",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=o.a.isObject(this.obj)?"(".concat(this.typeSizeLabel,")"):"",i="".concat(t).concat(this.key).concat(e,": ").concat(this.obj,"\n"),n=Object.keys(this.children),s=0;s<n.length;s++){var a=n[s];i+=this.children[a].toString("".concat(t,"  "))}return i}},{key:"isLeaf",value:function(){return o.a.isEmpty(this.children)}},{key:"isArray",value:function(){return o.a.isArray(this.obj)}},{key:"isObject",value:function(){return o.a.isObject(this.obj)}},{key:"isSimpleType",value:function(){return!this.isArray()&&!this.isObject()}},{key:"getByPath",value:function(t){if(o.a.isString(t)&&(t=t.split("/")),0===t.length)return this;var e=null;return e=".."===t[0]?this.parent:""===t[0]?this.tree.root:"."===t[0]?this:this.children[t[0]],t.shift(),e?e.getByPath(t):null}},{key:"hash",get:function(){return this.getChildValue(this.tree.tagHash)}},{key:"typeSizeLabel",get:function(){var t=o.a.isArray(this.obj)?"[".concat(this.obj.length,"]"):"{".concat(Object.keys(this.obj).length,"}"),e=this.typeLabel;return this.hash&&(e+="@".concat(this.hash)),e.length>0&&(t+=" <".concat(e,">")),t}},{key:"typeLabel",get:function(){var t=null;return this.type&&(t=this.type),t?l.getSimpleTypeName(t):""}},{key:"type",get:function(){return this.getChildValue(this.tree.tagType)}},{key:"size",get:function(){return o.a.size(this.children)}},{key:"children",get:function(){if(null==this._children){this._children={};var e=o.a.isArray(this.obj),i=o.a.isObject(this.obj);if(!i)return this._children;var n=this.obj?Object.keys(this.obj):[];!e&&this.tree.sorted&&n.sort();var s=!0,a=!1,r=void 0;try{for(var l,c=n[Symbol.iterator]();!(s=(l=c.next()).done);s=!0){var u=l.value,h=this.obj[u];null!==h&&u!==this.tree.tagType&&u!==this.tree.tagHash&&(this.children[u]=new t(this.tree,this,u,h,this))}}catch(t){a=!0,r=t}finally{try{s||null==c.return||c.return()}finally{if(a)throw r}}}return this._children}}]),t}();Object.defineProperty(u.prototype,"typeSizeLabel",{enumerable:!0}),Object.defineProperty(u.prototype,"children",{enumerable:!0})},b9ae:function(t,e,i){},c21b:function(t,e,i){},c715:function(t,e,i){},e58a:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=i("c665"),s=i("aa9a"),a=function(){function t(){Object(n["a"])(this,t),this.items=[],this.pos=-1}return Object(s["a"])(t,[{key:"canBack",value:function(){return this.pos>0}},{key:"back",value:function(){return this.canBack()?this.items[--this.pos]:null}},{key:"canForward",value:function(){return this.pos<this.items.length-1}},{key:"forward",value:function(){return this.canForward()?this.items[++this.pos]:null}},{key:"append",value:function(t){this.items.length=++this.pos,this.items.push(t)}}]),t}()},f695:function(t,e,i){}});
//# sourceMappingURL=app.108bf0c0.js.map