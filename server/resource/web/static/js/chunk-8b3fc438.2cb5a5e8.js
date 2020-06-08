(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8b3fc438","chunk-2d0e946f","chunk-2d0cf930","chunk-2d20e7a9"],{1388:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"search-term"},[a("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0,model:t.searchInfo}},[a("el-row",[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"市值"}},[a("el-input-number",{attrs:{placeholder:"最小",controls:!1},model:{value:t.searchInfo.marketCapitalMin,callback:function(e){t.$set(t.searchInfo,"marketCapitalMin",e)},expression:"searchInfo.marketCapitalMin"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:""}},[a("el-input-number",{attrs:{placeholder:"最大",controls:!1},model:{value:t.searchInfo.marketCapitalMax,callback:function(e){t.$set(t.searchInfo,"marketCapitalMax",e)},expression:"searchInfo.marketCapitalMax"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"股价"}},[a("el-input-number",{attrs:{placeholder:"最小",controls:!1},model:{value:t.searchInfo.currentMin,callback:function(e){t.$set(t.searchInfo,"currentMin",e)},expression:"searchInfo.currentMin"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:""}},[a("el-input-number",{attrs:{placeholder:"最大",controls:!1},model:{value:t.searchInfo.currentMax,callback:function(e){t.$set(t.searchInfo,"currentMax",e)},expression:"searchInfo.currentMax"}})],1)],1)],1),t._v(" "),a("el-row",[a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"涨幅"}},[a("el-input-number",{attrs:{placeholder:"最小",controls:!1},model:{value:t.searchInfo.percentMin,callback:function(e){t.$set(t.searchInfo,"percentMin",e)},expression:"searchInfo.percentMin"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:""}},[a("el-input-number",{attrs:{placeholder:"最大",controls:!1},model:{value:t.searchInfo.percentMax,callback:function(e){t.$set(t.searchInfo,"percentMax",e)},expression:"searchInfo.percentMax"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:"量比"}},[a("el-input-number",{attrs:{placeholder:"最小",controls:!1},model:{value:t.searchInfo.volume_ratio_min,callback:function(e){t.$set(t.searchInfo,"volume_ratio_min",e)},expression:"searchInfo.volume_ratio_min"}})],1)],1),t._v(" "),a("el-col",{attrs:{span:5}},[a("el-form-item",{attrs:{label:""}},[a("el-input-number",{attrs:{placeholder:"最大",controls:!1},model:{value:t.searchInfo.volume_ratio_max,callback:function(e){t.$set(t.searchInfo,"volume_ratio_max",e)},expression:"searchInfo.volume_ratio_max"}})],1)],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("查询")])],1)],1)],1),t._v(" "),a("el-table",{attrs:{data:t.tableData,border:"",stripe:"","default-sort":{prop:["f14","f12","f20","f2","f3","f10","f5","f6"],order:"descending"}}},[a("el-table-column",{attrs:{label:"名称","min-width":"50",prop:"f14"}}),t._v(" "),a("el-table-column",{attrs:{label:"编码","min-width":"50",prop:"f12"}}),t._v(" "),a("el-table-column",{attrs:{label:"市值","min-width":"70",prop:"f20",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"当前价","min-width":"70",prop:"f2",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"涨幅","min-width":"80",prop:"f3",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"量比","min-width":"80",prop:"f10",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"成交量","min-width":"120",prop:"f5",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:"成交额","min-width":"120",prop:"f6",sortable:""}}),t._v(" "),a("el-table-column",{attrs:{fixed:"right",label:"操作",width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small",type:"primary"},on:{click:function(a){return t.addStockMonitorDay(e.row)}}},[t._v("监控")])]}}])})],1)],1)},n=[],o=(a("96cf"),a("1da1")),l=a("8d9f"),i=a("63fc"),c=a("b016"),s={name:"Top",mixins:[c["default"]],data:function(){return{listApi:i["getTopList"],searchInfo:{marketCapitalMin:void 0,marketCapitalMax:void 0,percentMin:void 0,percentMax:void 0,volume_ratio_min:void 0,volume_ratio_max:void 0}}},methods:{onSubmit:function(){this.getTableData()},addStockMonitorDay:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(l["addMonitor"])({isDay:!0,code:e.f12});case 2:a=t.sent,0===a.code?this.$message({type:"success",message:"监控成功!"}):this.$message({type:"error",message:"监控失败!"});case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},created:function(){this.getTableData()}},u=s,f=(a("ffc4"),a("2877")),p=Object(f["a"])(u,r,n,!1,null,"25a7395c",null);e["default"]=p.exports},"63fc":function(t,e,a){"use strict";a.r(e),a.d(e,"getTopList",(function(){return n}));var r=a("b775"),n=function(t){return Object(r["default"])({url:"/stock/top/list",method:"post",data:t})}},"8d9f":function(t,e,a){"use strict";a.r(e),a.d(e,"getMonitorOne",(function(){return n})),a.d(e,"getMonitorList",(function(){return o})),a.d(e,"addMonitor",(function(){return l})),a.d(e,"delMonitor",(function(){return i})),a.d(e,"updateMonitor",(function(){return c}));var r=a("b775"),n=function(t){return Object(r["default"])({url:"/stock/monitor/one",method:"post",data:t})},o=function(t){return Object(r["default"])({url:"/stock/monitor/list",method:"post",data:t})},l=function(t){return Object(r["default"])({url:"/stock/monitor/add",method:"post",data:t})},i=function(t){return Object(r["default"])({url:"/stock/monitor/del",method:"post",data:t})},c=function(t){return Object(r["default"])({url:"/stock/monitor/update",method:"post",data:t})}},"9fce":function(t,e,a){},b016:function(t,e,a){"use strict";a.r(e);a("8e6e"),a("ac6a"),a("456d");var r=a("ade3"),n=(a("96cf"),a("1da1"));function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){Object(r["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}e["default"]={data:function(){return{page:1,total:10,pageSize:10,tableData:[],searchInfo:{}}},methods:{handleSizeChange:function(t){this.pageSize=t,this.getTableData()},handleCurrentChange:function(t){this.page=t,this.getTableData()},getTableData:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var e,a,r,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:this.page,a=n.length>1&&void 0!==n[1]?n[1]:this.pageSize,t.next=4,this.listApi(l({page:e,pageSize:a},this.searchInfo));case 4:r=t.sent,this.tableData=r.data.list,this.total=r.data.total,this.page=r.data.page,this.pageSize=r.data.pageSize;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}},ffc4:function(t,e,a){"use strict";var r=a("9fce"),n=a.n(r);n.a}}]);