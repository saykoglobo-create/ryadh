var version="10.0";(function(undefined)
{var topcmm={loadComplete:false,extensions:{},listeners:{},init:function()
{var _this=this;this.addLoadCallback(function()
{_this.loadComplete=true;});return this;},removeSpecificListener:function(type,listener)
{var lowerType=type.toLowerCase();if(this.listeners[lowerType]!==undefined)
{for(var i=0;i<this.listeners[lowerType].length;++i)
{if(this.listeners[lowerType][i].toString()==listener.toString())
{this.listeners[lowerType].splice(i,1);return;}}}},addListener:function(type,listener)
{var lowerType=type.toLowerCase();if(this.listeners[lowerType]===undefined)
{this.listeners[lowerType]=[listener];}
else
{for(var i=0;i<this.listeners[lowerType].length;++i)
{if(this.listeners[lowerType][i].toString()==listener.toString())
{this.listeners[lowerType][i]=listener;return;}}
this.listeners[lowerType].push(listener);}},removeListeners:function(type)
{var lowerType=type.toLowerCase();if(this.listeners[lowerType]!==undefined)
{delete this.listeners[lowerType];}},fireEvent:function(type,arg)
{var lowerType=type.toLowerCase();if(this.listeners[lowerType]!==undefined)
{for(var i=0;i<this.listeners[lowerType].length;++i)
{this.listeners[lowerType][i](arg);}}},addLoadCallback:function(callback)
{if(this.loadComplete)
{callback();}
else
{this.addListener("loadComplete",callback);}},trackEvent:function(category,action)
{if(typeof enable_google_analytics==="undefined"||enable_google_analytics==true)
{window._gaq=window._gaq||[];window._gaq.push(['_trackEvent',category, action]);
            }
        }
    };
window.topcmm=topcmm.init();})();var Topcmm={desktopHtml:'<div class="drdchati-all-mainr-div drdchati-all-universalglobal-font-div"><div class="drdchati-all-mainr-div-outline" id="drdchati-all-mainr-div-outline"><div class="drdchati-all-mainr-div-interior" id="drdchati-all-mainr-div-interior"><div class="drdchati-loading-container" id="drdchati-loading-container" style="display:none;"><div class="drdchati-loading-loading-logo" align="center"><img id="drdchati-loading-loading-img-url"></div><div class="drdchati-loading-background"><div class="drdchati-loading-loading-img-text">Version By Drdchati.Com</div><div class="drdchati-loading-loading-img" id="drdchati-loading-loading-img"><img src="img/common/drdchati-loading-img.gif" border="0"/></div><div class="drdchati-loading-loading-text"><span class="drdchati-loading-loading-text-loading" id="drdchati-loading-loading-text-loading">Loading ...</span></div></div><div class="drdchati-loading-copyright-text"><span class="drdchati-loading-loading-text-loading" id="drdchati-loading-copyright-text"></span></div></div></div></div><div style="position: absolute; left: -10000px; top: -10000px;"><div id="div_flashchat"></div></div>',mobileHtml:'<iframe class="top-container" src="http://www.drdchati.com/wp-content/themes/yc/radio/ss.html" name="NameCod" width="100%" height="42" frameborder="no" marginwidth="0" marginheight="0" align="center" allow="autoplay"></iframe><div id="drdchati-all-mainr-div-body" style="position: absolute;"><div id="drdchati-all-mainr-div-interior" class="drdchati-all-mainr-div-container"><div id="drdchati-loading-container" class="drdchati-welcome-page drdchati-min-height"><div class="drdchati-welcome-logo-area"><div class="drdchati-welcome-logo-area-interior"><div class="drdchati-welcome-logo-area-interior-table"><div class="drdchati-welcome-logo"></div></div></div></div><div class="drdchati-welcome-area" id="drdchati-welcome-area"><div class="drdchati-welcome-text-area"><span></span></div><div class="drdchati-welcome-powered-by"><span>Www.Drdchati.Com</span></div></div><div class="drdchati-welcome-light-background"></div></div></div></div><div id="drdchati-mask-double-loading" class="ui-loader ui-corner-all ui-body-a ui-loader-default"><span class="ui-icon ui-icon-loading"></span></div><div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: -100px; opacity: 0.6; background-color: rgb(0, 0, 0); z-index: 340; display: none;" id="drdchati-mask-model"></div><div style="position: absolute; left: 0px; top: 84px; right: 0px; opacity: 0.8; background-color: rgb(0, 0, 0); z-index: 3400; height: 40px; display: none;" id="drdchati-private-tip-model"><span id="drdchati-private-chat-tip-message" style="color: #FFFFFF; " class="drdchati-private-chat-tip"></span></div>',loadHtml:"",isForMobile:false,loadForMobile:function()
{window.onload=function()
{Topcmm.onLoadForMobile();}
loadHtml=this.mobileHtml;document.title="Ø¯Ø±Ø¯Ø´ØªÙŠ";TopcmmUtil.includeCss("mobile/local/all/drdchati-all.css");TopcmmUtil.includeCss("mobile/local/none/drdchati-none.css");TopcmmUtil.includeAppleTouchIcon("mobile/img/57.png","");TopcmmUtil.includeAppleTouchIcon("mobile/img/114.png","114x114");TopcmmUtil.includeAppleTouchIcon("mobile/img/72.png","72x72");TopcmmUtil.includeMobileMetaTag("viewport","width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0");TopcmmUtil.includeMobileMetaTag("apple-mobile-web-app-capable","yes");TopcmmIncludeJs.includeJs(["mobile/local/full/croll.js"]);},loadForDesktop:function()
{loadHtml=this.desktopHtml;TopcmmUtil.includeCss("local/drdchati-all/drdchati-all.css");TopcmmUtil.includeCss("local/drdchati-all/drdchati-none/drdchati-none.css");TopcmmUtil.includeCssWithId("local/drdchati-face/drdchati-face.css","layout-color");},onLoadForMobile:function()
{setTimeout(function()
{window.scrollTo(0,1)},1000);},loadForDesktopAfterJsInvoked:function()
{var flashvars={};var params={};var attributes={id:"topcmm_flashchat",name:"topcmm_flashchat",allowScriptAccess:"always",bgColor:"ffcc00",align:"middle"};swfobject.embedSWF("interop.swf","div_flashchat","1","1","9.0.0","expressInstall.swf",flashvars,params,attributes);},init:function()
{document.getElementById("drdchati-preloading-background").parentNode.removeChild(document.getElementById("drdchati-preloading-background"));var userAgent=navigator.userAgent.toLowerCase();var url=location.href;var paraString="";if(url.indexOf("?")!=-1)
{paraString=url.substring(url.indexOf("?"),url.length);}
if(null!=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(BlackBerry)|(webOS)/i))
{if(top!==self)
{top.location.href=location.href;}
else
{this.isForMobile=true;Topcmm.loadForMobile();}}
else
{Topcmm.loadForDesktop();}
document.write(loadHtml);if(this.isForMobile)
{document.body.className="drdchati-viewport drdchati-all-universalglobal-font-div drdchati-page";}
if("undefined"==typeof enable_google_analytics||true==enable_google_analytics)
{var _gaq=_gaq||[];_gaq.push(['_setAccount','UA-1907790-18']);_gaq.push(['_trackPageview']);(function()
{var ga=document.createElement('script');ga.type='text/javascript';ga.async=true;ga.src=('https:'==document.location.protocol?'https://ssl':'http://www')
+'.google-analytics.com/ga.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(ga,s);})();}}}
var TopcmmUtil={includeCss:function(sCSSFileName)
{this.includeCssWithId(sCSSFileName,"");},includeCssWithId:function(sCSSFileName,id)
{var sobj=document.createElement('link');sobj.rel="stylesheet";sobj.type="text/css";if(""!=id)
{sobj.id=id;}
sobj.href=sCSSFileName;var headobj=document.getElementsByTagName('head')[0];headobj.appendChild(sobj);},includeAppleTouchIcon:function(iconFileName,size)
{var sobj=document.createElement('link');sobj.rel="apple-touch-icon";if(""!=size)
{sobj.setAttribute("sizes",size)}
sobj.href=iconFileName;var headobj=document.getElementsByTagName('head')[0];headobj.appendChild(sobj);},includeMobileMetaTag:function(name,content)
{var sobj=document.createElement("meta");sobj.name=name;sobj.content=content;var headobj=document.getElementsByTagName('head')[0];headobj.appendChild(sobj);}};var TopcmmIncludeJs={jslist:"",sobj:"",functioname:null,isCallBack:false,includeJs:function(jslist)
{if(jslist.length>0)
{TopcmmIncludeJs.setJsList(jslist);TopcmmIncludeJs.includeWriteJs();}},includeWriteJs:function()
{TopcmmIncludeJs.sobj=document.createElement('script');TopcmmIncludeJs.sobj.type="text/javascript";TopcmmIncludeJs.sobj.src=TopcmmIncludeJs.jslist[TopcmmIncludeJs.jslist.length-1];var headobj=document.getElementsByTagName('head')[0];headobj.appendChild(TopcmmIncludeJs.sobj);TopcmmIncludeJs.sobj.onreadystatechange=TopcmmIncludeJs.ready;TopcmmIncludeJs.sobj.onerror=TopcmmIncludeJs.sobj.onload=TopcmmIncludeJs.callback;},ready:function()
{if(TopcmmIncludeJs.sobj.readyState=='loaded'||TopcmmIncludeJs.sobj.readyState=='complete')
{TopcmmIncludeJs.callback();}},callback:function()
{TopcmmIncludeJs.jslist.pop();if(TopcmmIncludeJs.jslist.length>0)
{TopcmmIncludeJs.includeWriteJs(TopcmmIncludeJs.jslist);}
else
{if(TopcmmIncludeJs.functioname!=null&&TopcmmIncludeJs.isCallBack==false)
{TopcmmIncludeJs.isCallBack=true;eval(TopcmmIncludeJs.functioname+"()");}}},setJsList:function(jslist)
{TopcmmIncludeJs.jslist=jslist.reverse();},setFunctionName:function(functioname)
{TopcmmIncludeJs.functioname=functioname;}};