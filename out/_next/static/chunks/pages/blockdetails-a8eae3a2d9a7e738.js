(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[563],{5553:function(e,t,a){"use strict";a.d(t,{dF:function(){return w},bM:function(){return N}});var s=a(6441),i=a(1581),l=a(8794),r=a(2593);let n=new i.Yd(l.i),o={},c=r.O$.from(0),d=r.O$.from(-1);function h(e,t,a,s){let l={fault:t,operation:a};return void 0!==s&&(l.value=s),n.throwError(e,i.Yd.errors.NUMERIC_FAULT,l)}let m="0";for(;m.length<256;)m+=m;function f(e){if("number"!=typeof e)try{e=r.O$.from(e).toNumber()}catch(e){}return"number"==typeof e&&e>=0&&e<=256&&!(e%1)?"1"+m.substring(0,e):n.throwArgumentError("invalid decimal size","decimals",e)}function g(e,t){null==t&&(t=0);let a=f(t);e=r.O$.from(e);let s=e.lt(c);s&&(e=e.mul(d));let i=e.mod(a).toString();for(;i.length<a.length-1;)i="0"+i;i=i.match(/^([0-9]*[1-9]|0)(0*)/)[1];let l=e.div(a).toString();return e=1===a.length?l:l+"."+i,s&&(e="-"+e),e}function x(e,t){null==t&&(t=0);let a=f(t);"string"==typeof e&&e.match(/^-?[0-9.]+$/)||n.throwArgumentError("invalid decimal value","value",e);let s="-"===e.substring(0,1);s&&(e=e.substring(1)),"."===e&&n.throwArgumentError("missing value","value",e);let i=e.split(".");i.length>2&&n.throwArgumentError("too many decimal points","value",e);let l=i[0],o=i[1];for(l||(l="0"),o||(o="0");"0"===o[o.length-1];)o=o.substring(0,o.length-1);for(o.length>a.length-1&&h("fractional component exceeds decimals","underflow","parseFixed"),""===o&&(o="0");o.length<a.length-1;)o+="0";let c=r.O$.from(l),m=r.O$.from(o),g=c.mul(a).add(m);return s&&(g=g.mul(d)),g}class u{constructor(e,t,a,s){e!==o&&n.throwError("cannot use FixedFormat constructor; use FixedFormat.from",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=a,this.decimals=s,this.name=(t?"":"u")+"fixed"+String(a)+"x"+String(s),this._multiplier=f(s),Object.freeze(this)}static from(e){if(e instanceof u)return e;"number"==typeof e&&(e=`fixed128x${e}`);let t=!0,a=128,s=18;if("string"==typeof e){if("fixed"===e);else if("ufixed"===e)t=!1;else{let i=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);i||n.throwArgumentError("invalid fixed format","format",e),t="u"!==i[1],a=parseInt(i[2]),s=parseInt(i[3])}}else if(e){let i=(t,a,s)=>null==e[t]?s:(typeof e[t]!==a&&n.throwArgumentError("invalid fixed format ("+t+" not "+a+")","format."+t,e[t]),e[t]);t=i("signed","boolean",t),a=i("width","number",a),s=i("decimals","number",s)}return a%8&&n.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",a),s>80&&n.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",s),new u(o,t,a,s)}}class b{constructor(e,t,a,s){e!==o&&n.throwError("cannot use FixedNumber constructor; use FixedNumber.from",i.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=s,this._hex=t,this._value=a,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&n.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);let t=x(this._value,this.format.decimals),a=x(e._value,e.format.decimals);return b.fromValue(t.add(a),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);let t=x(this._value,this.format.decimals),a=x(e._value,e.format.decimals);return b.fromValue(t.sub(a),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);let t=x(this._value,this.format.decimals),a=x(e._value,e.format.decimals);return b.fromValue(t.mul(a).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);let t=x(this._value,this.format.decimals),a=x(e._value,e.format.decimals);return b.fromValue(t.mul(this.format._multiplier).div(a),this.format.decimals,this.format)}floor(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=b.from(e[0],this.format),a=!e[1].match(/^(0*)$/);return this.isNegative()&&a&&(t=t.subUnsafe(p.toFormat(t.format))),t}ceiling(){let e=this.toString().split(".");1===e.length&&e.push("0");let t=b.from(e[0],this.format),a=!e[1].match(/^(0*)$/);return!this.isNegative()&&a&&(t=t.addUnsafe(p.toFormat(t.format))),t}round(e){null==e&&(e=0);let t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&n.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;let a=b.from("1"+m.substring(0,e),this.format),s=j.toFormat(this.format);return this.mulUnsafe(a).addUnsafe(s).floor().divUnsafe(a)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&n.throwArgumentError("invalid byte width","width",e);let t=r.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return(0,s.$m)(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return b.fromString(this._value,e)}static fromValue(e,t,a){return null!=a||null==t||(0,r.Zm)(t)||(a=t,t=null),null==t&&(t=0),null==a&&(a="fixed"),b.fromString(g(e,t),u.from(a))}static fromString(e,t){null==t&&(t="fixed");let a=u.from(t),i=x(e,a.decimals);!a.signed&&i.lt(c)&&h("unsigned value cannot be negative","overflow","value",e);let l=null;a.signed?l=i.toTwos(a.width).toHexString():(l=i.toHexString(),l=(0,s.$m)(l,a.width/8));let r=g(i,a.decimals);return new b(o,l,r,a)}static fromBytes(e,t){null==t&&(t="fixed");let a=u.from(t);if((0,s.lE)(e).length>a.width/8)throw Error("overflow");let i=r.O$.from(e);a.signed&&(i=i.fromTwos(a.width));let l=i.toTwos((a.signed?0:1)+a.width).toHexString(),n=g(i,a.decimals);return new b(o,l,n,a)}static from(e,t){if("string"==typeof e)return b.fromString(e,t);if((0,s._t)(e))return b.fromBytes(e,t);try{return b.fromValue(e,0,t)}catch(e){if(e.code!==i.Yd.errors.INVALID_ARGUMENT)throw e}return n.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!!(e&&e._isFixedNumber)}}let p=b.from(1),j=b.from("0.5");new i.Yd("units/5.7.0");let v=["wei","kwei","mwei","gwei","szabo","finney","ether"];function N(e,t){if("string"==typeof t){let e=v.indexOf(t);-1!==e&&(t=3*e)}return g(e,null!=t?t:18)}function w(e){return N(e,18)}},333:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blockdetails",function(){return a(3272)}])},3272:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return h}});var s=a(5893),i=a(7294),l=a(1664),r=a.n(l),n=a(1163),o=a(415),c=a(5553);function d(){return(0,s.jsx)("span",{id:"gasTargetChart","data-highcharts-chart":0,style:{overflow:"hidden"},children:(0,s.jsx)("div",{id:"highcharts-7mur81n-0",dir:"ltr",className:"highcharts-container ",style:{position:"relative",overflow:"hidden",width:80,height:40,textAlign:"left",lineHeight:"normal",zIndex:0,WebkitTapHighlightColor:"rgba(0, 0, 0, 0)",userSelect:"none",touchAction:"manipulation",outline:"none"},children:(0,s.jsxs)("svg",{version:"1.1",className:"highcharts-root",style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:12},xmlns:"http://www.w3.org/2000/svg",width:80,height:40,viewBox:"0 0 80 40",children:[(0,s.jsx)("desc",{children:"Created with Highcharts 9.1.2"}),(0,s.jsx)("defs",{children:(0,s.jsx)("clipPath",{id:"highcharts-7mur81n-2-",children:(0,s.jsx)("rect",{x:0,y:0,width:80,height:40,fill:"none"})})}),(0,s.jsx)("rect",{fill:"#ffffff",className:"highcharts-background",x:0,y:0,width:80,height:40,rx:0,ry:0}),(0,s.jsx)("rect",{fill:"none",className:"highcharts-plot-background",x:0,y:0,width:80,height:40}),(0,s.jsx)("g",{className:"highcharts-pane-group","data-z-index":0,children:(0,s.jsx)("path",{fill:"#EEE",d:"M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.98000000333334 L 51.9999940000005 27.988000002000007 A 12 12 0 0 0 28 28 Z",className:"highcharts-pane ",stroke:"#cccccc",strokeWidth:1})}),(0,s.jsxs)("g",{className:"highcharts-grid highcharts-yaxis-grid highcharts-radial-axis-grid","data-z-index":1,children:[(0,s.jsx)("path",{fill:"none",strokeDasharray:"none","data-z-index":1,className:"highcharts-grid-line",d:"M 28 27.999999999999996 L 20 27.999999999999996",opacity:1}),(0,s.jsx)("path",{fill:"none",strokeDasharray:"none","data-z-index":1,className:"highcharts-grid-line",d:"M 52 28.000000000000004 L 60 28.000000000000007",opacity:1})]}),(0,s.jsx)("rect",{fill:"none",className:"highcharts-plot-border","data-z-index":1,x:0,y:0,width:80,height:40}),(0,s.jsx)("g",{className:"highcharts-axis highcharts-yaxis highcharts-radial-axis","data-z-index":2,children:(0,s.jsx)("path",{fill:"none",className:"highcharts-axis-line","data-z-index":7,d:"M 20 27.999999999999996 A 20 20 0 0 1 59.999990000000835 27.980000003333334 M 40 28 A 0 0 0 0 0 40 28"})}),(0,s.jsxs)("g",{className:"highcharts-series-group","data-z-index":3,children:[(0,s.jsx)("g",{className:"highcharts-series highcharts-series-0 highcharts-solidgauge-series highcharts-tracker","data-z-index":"0.1",opacity:1,transform:"translate(0,0) scale(1 1)",clipPath:"url(#highcharts-7mur81n-2-)",children:(0,s.jsx)("path",{fill:"rgb(223,83,83)",d:"M 20 27.999999999999996 A 20 20 0 0 1 25.40694380142069 14.323644097015242 L 31.244166280852415 19.794186458209147 A 12 12 0 0 0 28 28 Z","sweep-flag":0,strokeLinecap:"round",strokeLinejoin:"round",className:"highcharts-point highcharts-color-0"})}),(0,s.jsx)("g",{className:"highcharts-markers highcharts-series-0 highcharts-solidgauge-series","data-z-index":"0.1",opacity:1,transform:"translate(0,0) scale(1 1)",clipPath:"none"})]}),(0,s.jsx)("text",{x:40,textAnchor:"middle",className:"highcharts-title","data-z-index":4,style:{color:"#333333",fontSize:18,fill:"#333333"},y:24}),(0,s.jsx)("text",{x:40,textAnchor:"middle",className:"highcharts-subtitle","data-z-index":4,style:{color:"#666666",fill:"#666666"},y:24}),(0,s.jsx)("text",{x:10,textAnchor:"start",className:"highcharts-caption","data-z-index":4,style:{color:"#666666",fill:"#666666"},y:37}),(0,s.jsxs)("g",{className:"highcharts-legend highcharts-no-tooltip","data-z-index":7,children:[(0,s.jsx)("rect",{fill:"none",className:"highcharts-legend-box",rx:0,ry:0,x:0,y:0,width:8,height:8,visibility:"hidden"}),(0,s.jsx)("g",{"data-z-index":1,children:(0,s.jsx)("g",{})})]}),(0,s.jsx)("g",{className:"highcharts-axis-labels highcharts-yaxis-labels highcharts-radial-axis-labels","data-z-index":7})]})})})}function h(){let[e,t]=(0,i.useState)([]),[a,l]=(0,i.useState)(""),[h,m]=(0,i.useState)(""),[f,g]=(0,i.useState)(""),[x,u]=(0,i.useState)(!1),b=(0,n.useRouter)(),{query:p}=b,j=Number(Object.keys(p)[0]),v=new o.r("https://polygon-mumbai.g.alchemy.com/v2/KFGiZ9X78dt4jBe16IjpjVXbhlPzuSx8");async function N(){u(!1);try{let e=await v.getBlock(j);console.log("BlockObject",e),t(e);let a=c.dF(e.gasLimit);l(a);let s=c.dF(e.gasUsed);m(s);let i=c.dF(e.difficulty);g(parseInt(i)),u(!0)}catch(e){console.log(e)}}return console.log("BLockNumber",j),(0,i.useEffect)(()=>{N()},[j]),(0,s.jsxs)("main",{id:"content",role:"main",children:[(0,s.jsx)("input",{type:"hidden",name:"hdnAgeText",id:"hdnAgeText",defaultValue:"Age"}),(0,s.jsx)("input",{type:"hidden",name:"hdnDateTimeText",id:"hdnDateTimeText",defaultValue:"Date Time (UTC)"}),(0,s.jsx)("input",{type:"hidden",name:"hdnAgeTitle",id:"hdnAgeTitle",defaultValue:"Click to show Age Format"}),(0,s.jsx)("input",{type:"hidden",name:"hdnDateTimeTitle",id:"hdnDateTimeTitle",defaultValue:"Click to show Datetime Format"}),(0,s.jsx)("input",{type:"hidden",name:"hdnGasPriceTitle",id:"hdnGasPriceTitle",defaultValue:"Gas Price in Gwei"}),(0,s.jsx)("input",{type:"hidden",name:"hdnTxnFeeTitle",id:"hdnTxnFeeTitle",defaultValue:"(Gas Price * Gas Used by Txns) in Matic"}),(0,s.jsx)("input",{type:"hidden",name:"hdnGasPriceText",id:"hdnGasPriceText",defaultValue:"Gas Price"}),(0,s.jsx)("input",{type:"hidden",name:"hdnTxnText",id:"hdnTxnText",defaultValue:"Txn Fee"}),(0,s.jsx)("div",{className:"container py-3",children:(0,s.jsx)("div",{className:"d-sm-flex align-items-center",children:(0,s.jsx)("div",{className:"mb-2 mb-sm-0",children:(0,s.jsxs)("h1",{className:"h4 mb-0",children:["Block"," ",(0,s.jsxs)("span",{className:"small text-secondary",children:["\xa0#",e.number]}),(0,s.jsx)("br",{})]})})})}),(0,s.jsx)("div",{className:"container space-bottom-2",children:(0,s.jsxs)("div",{className:"card",children:[(0,s.jsx)("div",{className:"card-header d-flex justify-content-between align-items-center p-0",children:(0,s.jsx)("ul",{className:"nav nav-custom nav-borderless nav_tabs1",id:"nav_tabs",role:"tablist",children:(0,s.jsx)("li",{className:"nav-item",children:(0,s.jsx)("a",{className:"nav-link active",href:"#overview","data-toggle":"tab",onclick:"javascript:updatehash('');",children:"Overview"})})})}),(0,s.jsx)("div",{className:"tab-content",children:(0,s.jsx)("div",{className:"tab-pane fade show active",id:"overview",role:"tabpanel","aria-labelledby":"home-tab",children:(0,s.jsxs)("div",{id:"ContentPlaceHolder1_maintable",className:"card-body",children:[(0,s.jsx)("div",{className:"ow align-items-center",children:(0,s.jsxs)("div",{className:"col-md-12 text-danger  font-weight-bold font-weight-sm-normal mb-1 mb-md-0",children:["[ This is a Frequency ",(0,s.jsx)("strong",{children:"Testnet"})," block only ]"]})})," ",(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center  mt-1",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"Also known as Block Number. The block height, which indicates the length of the blockchain, increases after the addition of the new block."}),"Block Height:"]}),(0,s.jsx)("div",{className:"col-md-9",children:(0,s.jsxs)("div",{className:"d-flex",children:[(0,s.jsx)("span",{className:"font-weight-sm-bold mr-2",children:e.number}),(0,s.jsx)(r(),{className:"btn btn-xs btn-icon btn-soft-info mr-1",href:{pathname:"/blockdetails",query:e.number-1},"data-toggle":"tooltip",title:"","data-original-title":"View previous block",children:(0,s.jsx)("i",{className:"fa fa-chevron-left btn-icon__inner"})}),(0,s.jsx)(r(),{className:"btn btn-xs btn-icon btn-soft-info mr-1",href:{pathname:"/blockdetails",query:e.number+1},"data-toggle":"tooltip",title:"","data-original-title":"View next block",children:(0,s.jsx)("i",{className:"fa fa-chevron-right btn-icon__inner"})})]})})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"The date and time at which a block is validated."}),"Timestamp:"]}),(0,s.jsxs)("div",{className:"col-md-9",children:[(0,s.jsx)("i",{className:"far fa-clock small mr-1"}),e.timestamp," ago"," "]})]}),(0,s.jsxs)("div",{id:"ContentPlaceHolder1_div_tx_fieldname",children:[(0,s.jsx)("hr",{className:"hr-space mb-2"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"The number of transactions in the block. Internal transaction is transactions as a result of contract execution that involves MATIC value."}),"Transactions:"]}),(0,s.jsxs)("div",{id:"ContentPlaceHolder1_div_tx_fieldvalue",className:"col-md-9",children:[(0,s.jsxs)("a",{className:"u-label u-label--value u-label--primary rounded my-1",href:"/txs?block=33177011","data-toggle":"tooltip",title:"","data-original-title":"Click to view Transactions",children:[x?e.transactions.length:"loading...."," ","transactions"]})," ","and"," ",(0,s.jsx)("a",{className:"u-label u-label--value u-label--primary rounded my-1",href:"/txsInternal?block=33177011","data-toggle":"tooltip",title:"","data-original-title":"Click to view Internal Transactions",children:"2 contract internal transactions"})," ","in this block"]})]})]}),(0,s.jsx)("hr",{className:"hr-space mt-2"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"Validator who successfully include the block onto the blockchain."}),"Validated by:"]}),(0,s.jsxs)("div",{className:"col-md-9",children:[(0,s.jsx)("a",{href:"/address/0xc275dc8be39f50d12f66b6a63629c39da5bae5bd",children:e.miner})," ","in 2 secs"]})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"For each block, the miner is rewarded with a finite amount of MATIC on top of the fees paid for all transactions in the block."}),"Block Reward:"]}),(0,s.jsxs)("div",{className:"col-md-9",children:["0",(0,s.jsx)("b",{children:"."}),"185425738175987472 MATIC"]})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center  d-none",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"An uncle block has a significantly lower reward than a normal block. Uncles reward is valid but rejected as it is not on the longest chain which is the working mechanism of the blockchain. Uncle block is important in Polygon as it secures the blockchain."}),"Uncles Reward:"]}),(0,s.jsx)("div",{className:"col-md-9",children:"0"})]}),(0,s.jsx)("hr",{className:"hr-space d-none"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"The amount of effort required to mine a new block. The difficulty algorithm may adjust according to time."}),"Difficulty:"]}),(0,s.jsx)("div",{className:"col-md-9",children:f})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"Total difficulty of the chain until this block."}),"Total Difficulty:"]}),(0,s.jsx)("div",{className:"col-md-9",children:"212,522,388"})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"The block size is actually determined by the block's gas limit."}),"Size:"]}),(0,s.jsx)("div",{className:"col-md-9",children:"1,451 bytes"})]}),(0,s.jsx)("hr",{className:"hr-space hr-gasTarget-top"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"The total gas used in the block and its percentage of gas filled in the block."}),"Gas Used:"]}),(0,s.jsxs)("div",{className:"col-md-9 d-flex align-items-center",children:[h,(0,s.jsxs)("div",{className:"d-flex align-items-center",children:[(0,s.jsx)(d,{}),(0,s.jsx)("span",{id:"gasTargetText",className:"text-danger",children:"-52% Gas Target"})]})]})]}),(0,s.jsx)("hr",{className:"hr-space hr-gasTarget-bottom"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"Total gas limit provided by all transactions in the block."}),"Gas Limit:"]}),(0,s.jsx)("div",{className:"col-md-9",children:"20,000,000"})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"Post-London Upgrade, this represents the minimum gasUsed multiplier required for a tx to be included in a block. "}),"Base Fee Per Gas:"]}),(0,s.jsxs)("div",{className:"col-md-9",children:["16 wei (0",(0,s.jsx)("b",{children:"."}),"000000016 Gwei)"]})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"Post-London Upgrade, this represents the part of the tx fee that is burnt:\xa0baseFeePerGas * gasUsed"}),"Burnt Fees:"]}),(0,s.jsxs)("div",{className:"col-md-9",children:["\uD83D\uDD25 0",(0,s.jsx)("b",{children:"."}),"000000000077102848 MATIC"]})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"Any data that can be included by the miner in the block."}),"Extra Data:"]}),(0,s.jsx)("div",{className:"col-md-9",children:(0,s.jsx)("textarea",{readOnly:"",spellCheck:"false",className:"form-control bg-light text-secondary text-monospace p-3",rows:6,id:"extraData",defaultValue:e.extraData})})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"collapse show",id:"collapsePanel",style:{},children:[(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"The hash of the block header of the current block."}),"Hash:"]}),(0,s.jsx)("div",{className:"col-md-9",children:e.hash})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"The hash of the block from which this block was generated, also known as its parent block."}),"Parent Hash:"]}),(0,s.jsx)("div",{className:"col-md-9",children:(0,s.jsx)("a",{href:"/block/0x45f76d5cb94c3ea2b5a0477f585df09bf9ad32d3fa49f75b1c29c21daf474149",children:e.parentHash})})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"The mechanism which Polygon Javascript RLP encodes an empty string."}),"Sha3Uncles:"]}),(0,s.jsx)("div",{className:"col-md-9",children:"0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"})]}),(0,s.jsx)("hr",{className:"hr-space"}),(0,s.jsxs)("div",{className:"row align-items-center",children:[(0,s.jsxs)("div",{className:"col-md-3 font-weight-bold font-weight-sm-normal mb-1 mb-md-0e",children:[(0,s.jsx)("i",{className:"fal fa-question-circle text-secondary mr-1","data-container":"body","data-toggle":"popover","data-placement":"top","data-original-title":"",title:"","data-content":"Block nonce is a value used during mining to demonstrate proof of work for a block."}),"Nonce:"]}),(0,s.jsx)("div",{className:"col-md-9",children:"0x0000000000000000"})]}),(0,s.jsx)("hr",{className:"hr-space"})]}),(0,s.jsx)("span",{id:"ContentPlaceHolder1_collapsedLink_span",children:(0,s.jsx)("a",{className:"d-block",id:"collapsedLink","data-toggle":"collapse",href:"#collapsePanel",role:"button","aria-expanded":"true","aria-controls":"collapsePanel",children:(0,s.jsxs)("span",{children:["Click to see ",(0,s.jsx)("span",{className:"card-arrow-more",children:"more"})," ",(0,s.jsx)("span",{className:"card-arrow-less",children:"less"}),(0,s.jsx)("span",{className:"card-btn-arrow card-btn-arrow--up ml-2",children:(0,s.jsx)("span",{className:"fas fa-arrow-up small"})})]})})})]})})})]})})]})}},6601:function(){}},function(e){e.O(0,[321,774,888,179],function(){return e(e.s=333)}),_N_E=e.O()}]);