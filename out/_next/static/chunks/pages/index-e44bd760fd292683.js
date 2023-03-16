(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(969)}])},969:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return h}});var t=a(5893),l=a(9008),i=a.n(l);a(5675),a(5297);var n=a(7294),d=a(5553),c=a(415),r=a(1664),o=a.n(r),m=a(1163);function h(){let[e,s]=(0,n.useState)([]),[a,l]=(0,n.useState)([]),[r,h]=(0,n.useState)("");(0,m.useRouter)();let x=e=>{let s=d.dF(e,"ether");return s};return(0,n.useEffect)(()=>{let e=new c.r("https://polygon-mumbai.g.alchemy.com/v2/KFGiZ9X78dt4jBe16IjpjVXbhlPzuSx8"),a=async()=>{let a=await e.getBlockNumber(),t=await e.getBlock(a);l(t.transactions);let i=[];for(let s=0;s<20;s++){let t=a-s,l=e.getBlock(t);i.push(l)}let n=await Promise.all(i);s(n)};a()},[]),console.log(e),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(i(),{children:[(0,t.jsx)("title",{children:"Create Next App"}),(0,t.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,t.jsxs)(t.Fragment,{children:["<",(0,t.jsxs)("div",{className:"wrapper",children:[(0,t.jsxs)("main",{id:"content",role:"main",children:[(0,t.jsx)("input",{type:"hidden",name:"hdnAgeText",id:"hdnAgeText",defaultValue:"Age"}),(0,t.jsx)("input",{type:"hidden",name:"hdnDateTimeText",id:"hdnDateTimeText",defaultValue:"Date Time (UTC)"}),(0,t.jsx)("input",{type:"hidden",name:"hdnAgeTitle",id:"hdnAgeTitle",defaultValue:"Click to show Age Format"}),(0,t.jsx)("input",{type:"hidden",name:"hdnDateTimeTitle",id:"hdnDateTimeTitle",defaultValue:"Click to show Datetime Format"}),(0,t.jsx)("input",{type:"hidden",name:"hdnGasPriceTitle",id:"hdnGasPriceTitle",defaultValue:"Gas Price in Gwei"}),(0,t.jsx)("input",{type:"hidden",name:"hdnTxnFeeTitle",id:"hdnTxnFeeTitle",defaultValue:"(Gas Price * Gas Used by Txns) in Matic"}),(0,t.jsx)("input",{type:"hidden",name:"hdnGasPriceText",id:"hdnGasPriceText",defaultValue:"Gas Price"}),(0,t.jsx)("input",{type:"hidden",name:"hdnTxnText",id:"hdnTxnText",defaultValue:"Txn Fee"}),(0,t.jsx)("section",{className:"bg-dark",style:{backgroundImage:"url(/images/svg/components/abstract-shapes-20.svg?v=3)"},children:(0,t.jsx)("div",{className:"container space-top-2 space-bottom-3",children:(0,t.jsxs)("div",{className:"row justify-content-between align-items-center mb-4",children:[(0,t.jsx)("div",{className:"col-md-12 col-lg-7",children:(0,t.jsxs)("div",{className:"pr-lg-4 pr-xll-5",children:[(0,t.jsx)("h1",{className:"h4 mb-3 text-white",children:"Frequency PoS Chain Testnet Explorer"}),(0,t.jsx)("form",{className:"mb-3",action:"/search",method:"GET",children:(0,t.jsxs)("div",{className:"input-group input-group-shadow",children:[(0,t.jsx)("div",{className:"input-group-prepend d-none d-md-block",children:(0,t.jsxs)("select",{name:"f",className:"custom-select custom-arrow-select input-group-text font-size-base filterby",children:[(0,t.jsx)("option",{selected:"",value:0,children:"All Filters"}),(0,t.jsx)("option",{value:1,children:"Addresses"}),(0,t.jsx)("option",{value:2,children:"Tokens"}),(0,t.jsx)("option",{value:3,children:"Name Tags"}),(0,t.jsx)("option",{value:4,children:"Labels"}),(0,t.jsx)("option",{value:5,children:"Websites"})]})}),(0,t.jsx)("input",{id:"txtSearchInput",type:"text",className:"form-control searchautocomplete ui-autocomplete-input list-unstyled py-3 mb-0",placeholder:"Search by Address / Txn Hash / Block / Token","aria-describedby":"button-header-search",name:"q",onkeyup:"handleSearchText(this);",autoComplete:"off"}),(0,t.jsx)("input",{type:"hidden",defaultValue:"",id:"hdnSearchText"}),(0,t.jsx)("input",{id:"hdnIsTestNet",defaultValue:"True",type:"hidden"}),(0,t.jsx)("div",{className:"input-group-append",children:(0,t.jsx)("button",{className:"btn btn-primary",type:"submit",children:(0,t.jsx)("i",{className:"fa fa-search"})})})]})})]})}),(0,t.jsx)("div",{className:"col-12 col-lg-5",children:(0,t.jsx)("div",{className:"d-none d-lg-block text-center pl-lg-4 pl-xll-5"})})]})})}),(0,t.jsx)("div",{className:"container space-bottom-1 mt-n5",children:(0,t.jsxs)("div",{className:"row mb-5",children:[(0,t.jsx)("div",{className:"col-lg-6 mb-4 mb-lg-0",children:(0,t.jsxs)("div",{className:"card h-100",children:[(0,t.jsx)("div",{className:"card-header",children:(0,t.jsx)("h2",{className:"card-header-title",children:"Latest Blocks"})}),(0,t.jsxs)("div",{className:"js-scrollbar card-body overflow-hidden mCustomScrollbar _mCS_1 mCS-autoHide",style:{height:400,position:"relative",overflow:"visible"},children:[(0,t.jsx)("div",{id:"mCSB_1",className:"mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside",style:{maxHeight:"none"},tabIndex:0,children:(0,t.jsx)("div",{id:"mCSB_1_container",className:"mCSB_container",style:{position:"relative",top:0,left:0},dir:"ltr",children:e.map((e,s)=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-sm-4",children:(0,t.jsxs)("div",{className:"media align-items-sm-center mr-4 mb-1 mb-sm-0",children:[(0,t.jsx)("div",{className:"d-none d-sm-flex mr-2",children:(0,t.jsx)("span",{className:"btn btn-icon btn-soft-secondary",children:(0,t.jsx)("span",{className:"btn-icon__inner text-dark",children:"Bk"})})}),(0,t.jsxs)("div",{className:"media-body",children:[(0,t.jsx)("span",{className:"d-inline-block d-sm-none",children:"Block"})," ",(0,t.jsx)(o(),{href:{pathname:"/blockdetails",query:e.number},children:e.number}),(0,t.jsxs)("span",{className:"d-sm-block small text-secondary ml-1 ml-sm-0 text-nowrap",children:[e.timestamp," ago"]})]})]})}),(0,t.jsx)("div",{className:"col-sm-8",children:(0,t.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,t.jsxs)("div",{className:"text-nowrap",children:[(0,t.jsxs)("span",{className:"d-block mb-1 mb-sm-0",children:["Validated By"," ",(0,t.jsxs)("a",{className:"hash-tag text-truncate",href:"/address/0xc275dc8be39f50d12f66b6a63629c39da5bae5bd",children:[e.miner.slice(0,35),"..."]})]}),(0,t.jsxs)("a",{href:"/txs?block=33142347","data-toggle":"tooltip",title:"","data-original-title":"Transactions in this Block",children:[e.transactions.length," txns"]})," ",(0,t.jsx)("span",{className:"small text-secondary",children:"in 2 secs"}),(0,t.jsx)("span",{className:"d-inline-block d-sm-none",children:(0,t.jsxs)("span",{className:"u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap","data-toggle":"tooltip",title:"","data-original-title":"Block Reward",children:[x(e.baseFeePerGas),"MATIC"]})})]}),(0,t.jsx)("div",{className:"d-none d-sm-block",children:(0,t.jsxs)("span",{className:"u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap","data-toggle":"tooltip",title:"","data-original-title":"Block Reward",children:[x(e.baseFeePerGas),"MATIC"]})})]})})]},s+1),(0,t.jsx)("hr",{className:"hr-space"})]}))})}),(0,t.jsx)("div",{id:"mCSB_1_scrollbar_vertical",className:"mCSB_scrollTools mCSB_1_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical",style:{display:"block"},children:(0,t.jsx)("div",{className:"mCSB_draggerContainer",children:(0,t.jsxs)("div",{id:"mCSB_1_dragger_vertical",className:"mCSB_dragger",style:{position:"absolute",minHeight:50,display:"block",height:213,maxHeight:366,top:0},children:[(0,t.jsx)("div",{className:"mCSB_dragger_bar",style:{lineHeight:50}}),(0,t.jsx)("div",{className:"mCSB_draggerRail"})]})})})]}),(0,t.jsx)("div",{className:"card-footer",children:(0,t.jsx)("a",{className:"btn btn-xs btn-block btn-soft-primary",href:"/blocks",children:"View all blocks"})})]})}),(0,t.jsx)("div",{className:"col-lg-6",children:(0,t.jsxs)("div",{className:"card h-100",children:[(0,t.jsx)("div",{className:"card-header",children:(0,t.jsx)("h2",{className:"card-header-title",children:"Latest Transactions"})}),(0,t.jsxs)("div",{className:"js-scrollbar card-body overflow-hidden mCustomScrollbar _mCS_2 mCS-autoHide",style:{height:400,position:"relative",overflow:"visible"},children:[(0,t.jsx)("div",{id:"mCSB_2",className:"mCustomScrollBox mCS-minimal-dark mCSB_vertical mCSB_outside",tabIndex:0,style:{maxHeight:"none"},children:(0,t.jsx)("div",{id:"mCSB_2_container",className:"mCSB_container",style:{position:"relative",top:0,left:0},dir:"ltr",children:a.map((e,s)=>(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-sm-4",children:(0,t.jsxs)("div",{className:"media align-items-sm-center mr-4 mb-1 mb-sm-0",children:[(0,t.jsx)("div",{className:"d-none d-sm-flex mr-2",children:(0,t.jsx)("span",{className:"btn btn-icon btn-soft-secondary rounded-circle",children:(0,t.jsx)("span",{className:"btn-icon__inner text-dark",children:"Tx"})})}),(0,t.jsxs)("div",{className:"media-body",children:[(0,t.jsx)("span",{className:"d-inline-block d-sm-none mr-1",children:"TX#"}),(0,t.jsxs)(o(),{className:"hash-tag hash-tag--xs hash-tag-xs-down--md text-truncate",href:{pathname:"/transactiondetails",query:e},children:[e.slice(0,55),".."]}),(0,t.jsx)("span",{className:"d-none d-sm-block small text-secondary",children:"14 secs ago"})]})]})}),(0,t.jsx)("div",{className:"col-sm-8",children:(0,t.jsxs)("div",{className:"d-sm-flex justify-content-between",children:[(0,t.jsxs)("div",{className:"text-nowrap mr-4 mb-1 mb-sm-0",children:[(0,t.jsxs)("span",{children:["From"," ",(0,t.jsx)("a",{className:"hash-tag text-truncate",href:"/address/0xe1234b420eef5ec2768851330d5a8b622e10bda3",children:"0xe1234b420eef5ec2768851330d5a8b622e10bda3"})]}),(0,t.jsxs)("span",{className:"d-sm-block",children:["To"," ",(0,t.jsx)("a",{href:"/address/0x0ca88c68e6cb0f762bbf2fc2aa6d65c811721f10",className:"hash-tag text-truncate",children:"0x0ca88c68e6cb0f762bbf2fc2aa6d65c811721f10"})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{className:"u-label u-label--xs u-label--badge-in u-label--secondary text-center text-nowrap","data-toggle":"tooltip",title:"","data-original-title":"Amount",children:"0 MATIC"})})]})})]},s+1),(0,t.jsx)("hr",{className:"hr-space"})]}))})}),(0,t.jsx)("div",{id:"mCSB_2_scrollbar_vertical",className:"mCSB_scrollTools mCSB_2_scrollbar mCS-minimal-dark mCSB_scrollTools_vertical",style:{display:"block"},children:(0,t.jsx)("div",{className:"mCSB_draggerContainer",children:(0,t.jsxs)("div",{id:"mCSB_2_dragger_vertical",className:"mCSB_dragger",style:{position:"absolute",minHeight:50,display:"block",height:213,maxHeight:366,top:0},children:[(0,t.jsx)("div",{className:"mCSB_dragger_bar",style:{lineHeight:50}}),(0,t.jsx)("div",{className:"mCSB_draggerRail"})]})})})]}),(0,t.jsx)("div",{className:"card-footer",children:(0,t.jsx)("a",{className:"btn btn-xs btn-block btn-soft-primary",href:"/txs",children:"View all transactions"})})]})})]})})]}),(0,t.jsx)("div",{id:"push"}),(0,t.jsx)("div",{className:"modal fade",tabIndex:-1,role:"dialog","aria-labelledby":"myModalLabel",id:"emailSubscribeModalBox","aria-hidden":"true",children:(0,t.jsx)("div",{className:"modal-dialog modal-sm",role:"document",children:(0,t.jsx)("div",{className:"modal-content",children:(0,t.jsxs)("div",{className:"modal-body",children:[(0,t.jsx)("button",{type:"button",className:"close close-md","data-dismiss":"modal","aria-label":"Close",children:(0,t.jsx)("span",{"aria-hidden":"true",children:"\xd7"})}),(0,t.jsx)("div",{className:"text-center py-5-alt px-4",children:(0,t.jsx)("div",{id:"emailSubscribeModalBoxText"})})]})})})})]}),(0,t.jsx)("footer",{className:"bg-dark py-4",style:{backgroundImage:"url(/images/svg/components/abstract-shapes-20.svg?v=3)"},children:(0,t.jsxs)("div",{className:"container",children:[(0,t.jsxs)("div",{className:"row justify-content-sm-between align-items-center",children:[(0,t.jsx)("div",{className:"col-sm-6 mb-3 mb-sm-0",children:(0,t.jsxs)("div",{className:"d-flex align-items-center",children:[(0,t.jsx)("img",{width:100,height:65,src:"tgps_white.png",alt:"Polygon Logo"}),(0,t.jsx)("span",{className:"h5 text-white mb-0 ml-3",children:"Powered by Frequency Chain"})]})}),(0,t.jsx)("div",{className:"col-sm-6 align-self-bottom",children:(0,t.jsxs)("div",{className:"d-flex justify-content-sm-end align-items-center mb-4",children:[(0,t.jsx)("span",{children:(0,t.jsxs)("button",{type:"button",className:"btn btn-xss btn-soft-light text-nowrap d-flex align-items-center mr-2",onclick:"addNetwork('web3');",children:[(0,t.jsx)("img",{className:"mr-1",width:65,height:65,src:"frec_green.png",alt:"Metamask"}),"Add Frequency Network"]})}),(0,t.jsxs)("a",{className:"btn btn-xss btn-soft-light mr-2",href:"/settings",children:[(0,t.jsx)("i",{className:"fa fa-cogs mr-1"}),"Preferences"]}),(0,t.jsx)("button",{id:"darkModaBtn",type:"button","data-toggle":"tooltip","data-title":"Day/Night Mode",className:"btn btn-sm btn-icon btn-soft-light","data-original-title":"",title:"",children:(0,t.jsx)("i",{id:"darkModaBtnIcon",className:"fa fa-moon"})})]})})]}),(0,t.jsx)("hr",{className:"opacity-md"}),(0,t.jsxs)("div",{className:"row justify-content-between align-items-center font-size-1",children:[(0,t.jsx)("div",{className:"col-md-6 mb-2 mb-md-0 d-flex",children:(0,t.jsxs)("p",{className:"mb-0 text-white",children:["FrequencyScan \xa9 2023 (FREq-TESTNET)",(0,t.jsx)("span",{className:"mx-1",children:"|"})," ⛏ Built by the same team behind"," ",(0,t.jsx)("a",{className:"text-primary",href:"https://etherscan.io/",target:"_blank",children:(0,t.jsx)("b",{children:"Etherscan"})})," ",(0,t.jsx)("span",{className:"mx-1",children:"|"})," ",(0,t.jsx)("a",{className:"text-white-70",href:"/address/0x71c7656ec7ab88b098defb751b7401b5f6d8976f",children:"Donate"})," ",(0,t.jsx)("i",{className:"fas fa-heart text-danger"})]})}),(0,t.jsx)("div",{className:"col-md-6 text-md-right",children:(0,t.jsxs)("ul",{className:"list-inline mb-0",children:[(0,t.jsx)("li",{className:"list-inline-item",children:(0,t.jsx)("a",{className:"unordered-list-text",rel:"nofollow noopener",target:"_blank",href:"/terms",children:"Terms of Service"})}),(0,t.jsx)("li",{className:"list-inline-item",children:(0,t.jsx)("a",{className:"unordered-list-text",rel:"nofollow noopener",target:"_blank",href:"https://polygonscan.freshstatus.io/",children:"Network Status"})}),(0,t.jsx)("li",{className:"list-inline-item",children:(0,t.jsx)("a",{className:"btn btn-sm btn-icon btn-soft-light btn-pill",href:"/contactus","data-toggle":"tooltip","data-placement":"top",title:"","data-original-title":"Contact Us",children:(0,t.jsx)("i",{className:"far fa-envelope btn-icon__inner"})})})]})})]})]})}),(0,t.jsx)("div",{id:"divcookie",className:"fixed-bottom w-md-75 w-xl-60 mx-md-auto mx-3",style:{display:"block"},children:(0,t.jsx)("div",{className:"alert alert-light border shadow p-3",role:"alert",children:(0,t.jsxs)("div",{className:"d-md-flex justify-content-center align-items-center",children:[(0,t.jsx)("span",{children:(0,t.jsxs)("p",{className:"text-dark mr-3 mb-2 mb-md-0",children:[(0,t.jsx)("i",{className:"far fa-cookie-bite text-secondary mr-1"}),"This website"," ",(0,t.jsx)("a",{href:"/terms#cookiestatement",target:"_blank",children:"uses cookies to improve your experience"}),". By continuing to use this website, you agree to its"," ",(0,t.jsx)("a",{href:"/terms",target:"_blank",children:"Terms"})," ","and ",(0,t.jsx)("a",{href:"/privacyPolicy",children:"Privacy Policy"}),"."]})}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{id:"btnCookie",className:"btn btn-sm btn-primary text-nowrap py-1","data-dismiss":"alert","aria-label":"Close",children:"Got It"})})]})})}),(0,t.jsx)("a",{className:"js-go-to u-go-to animated",href:"#","data-position":'{"bottom": 20, "right": 15 }',"data-type":"fixed","data-offset-top":400,"data-compensation":"#header","data-show-effect":"slideInUp","data-hide-effect":"slideOutDown",style:{display:"inline-block",position:"fixed",opacity:0,bottom:20,right:15},children:(0,t.jsx)("span",{className:"fa fa-arrow-up u-go-to__inner"})}),(0,t.jsx)("ul",{id:"ui-id-1",tabIndex:0,className:"ui-menu ui-widget ui-widget-content ui-autocomplete ui-front",style:{display:"none"}}),(0,t.jsx)("div",{role:"status","aria-live":"assertive","aria-relevant":"additions",className:"ui-helper-hidden-accessible"}),(0,t.jsx)("grammarly-desktop-integration",{"data-grammarly-shadow-root":"true"})]})]})}},6601:function(){}},function(e){e.O(0,[797,959,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);