webpackJsonp([1],{MvGc:function(e,t){Array.prototype.removeByValue=function(e){for(var t=0;t<this.length;t++)this[t]===e&&this.splice(t,1)}},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("7+uW"),l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]},r=a("VU/8")({name:"App"},l,!1,null,null,null).exports,s=a("/ocq"),o={data:function(){return{loading:!1,symbolStr:"",symbolList:[],errList:[],searchMode:"1",geneType:"1",maxNumber:10,dataList:[],dataCount:0,perpage:10,pageno:1,activeNames:["1"]}},watch:{symbolList:function(){this.symbolStr=this.symbolList.join("\n")}},methods:{removeErr:function(e){this.symbolList.removeByValue(e),this.errList.removeByValue(e)},checkInput:function(){var e=this;this.symbolStr&&this.$http.post("/api/checkGeneSymbol",{searchMode:this.searchMode,geneType:this.geneType,symbolStr:this.symbolStr}).then(function(t){console.log(t);var a=t.data;0===a.errcode&&(e.symbolList=a.data.symbolList,e.errList=a.data.errList)})},search:function(){var e=this;this.loading=!0,this.$http.post("/api/getProbeList",{searchMode:this.searchMode,geneType:this.geneType,symbolStr:this.symbolStr,perpage:this.perpage,pageno:this.pageno}).then(function(t){var a=t.data;e.loading=!1,0===a.errcode&&(e.dataList=a.data.dataList,e.dataCount=a.data.dataCount)}).catch(function(){e.loading=!1})},handleSizeChange:function(e){this.perpage=e},handleCurrentChange:function(e){this.pageno=e,this.search()}}},i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"probe"},[a("el-form",{attrs:{"label-width":"120px"}},[a("el-form-item",{attrs:{label:"Search Mode"}},[a("el-select",{staticClass:"mode-select",attrs:{placeholder:"Choose Search Mode"},model:{value:e.searchMode,callback:function(t){e.searchMode=t},expression:"searchMode"}},[a("el-option",{attrs:{label:"Search by Gene Symbol",value:"1"}}),e._v(" "),a("el-option",{attrs:{label:"Search by Transcript ID",value:"2"}})],1),e._v(" "),a("el-radio",{attrs:{label:"1"},model:{value:e.geneType,callback:function(t){e.geneType=t},expression:"geneType"}},[e._v("Coding genes")]),e._v(" "),a("el-radio",{attrs:{label:"2"},model:{value:e.geneType,callback:function(t){e.geneType=t},expression:"geneType"}},[e._v("LncRNAs")])],1),e._v(" "),a("el-form-item",{attrs:{label:"Return Number"}},[a("el-input-number",{attrs:{min:1,max:20,label:"描述文字"},model:{value:e.maxNumber,callback:function(t){e.maxNumber=t},expression:"maxNumber"}}),e._v(" "),"1"===e.searchMode?a("span",{staticClass:"unit-label"},[e._v("Per Gene")]):a("span",{staticClass:"unit-label"},[e._v("Per Transcript")])],1),e._v(" "),a("el-form-item",{attrs:{label:"Gene Symbol"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:7},placeholder:"Enter Gene Symbols"},on:{change:e.checkInput},model:{value:e.symbolStr,callback:function(t){e.symbolStr=t},expression:"symbolStr"}}),e._v(" "),e.errList.length?a("el-tag",{staticClass:"title-tag",attrs:{type:"danger"}},[e._v("Invalid Gene Symbols:")]):a("el-tag",{staticClass:"title-tag",attrs:{type:"success"}},[e._v("All Gene Symbol Is Valid!")]),e._v(" "),e._l(e.errList,function(t,n){return a("el-tag",{key:n,staticClass:"symbol-tag",attrs:{closable:"",type:"warning"},on:{close:function(a){e.removeErr(t)}}},[e._v(e._s(t))])})],2),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.search}},[e._v("Search")])],1)],1),e._v(" "),a("el-table",{attrs:{data:e.dataList,"empty-text":"Empty!"}},[a("el-table-column",{attrs:{type:"index"}}),e._v(" "),a("el-table-column",{attrs:{label:"Gene Symbol",prop:"geneName"}}),e._v(" "),a("el-table-column",{attrs:{label:"Transcript ID",prop:"tranName"}}),e._v(" "),a("el-table-column",{attrs:{label:"Donor",prop:"donor"}}),e._v(" "),a("el-table-column",{attrs:{label:"Acceptor",prop:"acceptor"}}),e._v(" "),a("el-table-column",{attrs:{label:"Data Source",prop:"tranName"}})],1),e._v(" "),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.pageno,"page-sizes":[10,20,30,40],"page-size":e.perpage,layout:"total, sizes, prev, pager, next, jumper",total:e.dataCount},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]};var c=a("VU/8")(o,i,!1,function(e){a("vEvT")},"data-v-41ce9108",null).exports;n.default.use(s.a);var p=new s.a({routes:[{path:"/",component:c}]}),u=a("zL8q"),m=a.n(u),d=(a("tvR6"),a("mtWM")),h=a.n(d);a("MvGc");n.default.use(m.a),a("hKoQ").polyfill(),n.default.prototype.$http=h.a,n.default.config.productionTip=!1,new n.default({el:"#app",router:p,components:{App:r},template:"<App/>"})},tvR6:function(e,t){},vEvT:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.2541f130030109970a3e.js.map