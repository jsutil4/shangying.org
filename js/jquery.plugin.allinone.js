/*  */ 
 
 
/*  */ 
/**
 * SWFObject v1.5: Flash Player detection and embed - http://blog.deconcept.com/swfobject/
 *
 * SWFObject is (c) 2007 Geoff Stearns and is released under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;
if(typeof jwplayer=="undefined"){var jwplayer=function(b){if(jwplayer.api){return jwplayer.api.selectPlayer(b)}};var $jw=jwplayer;jwplayer.version="5.8.2011 (Licensed version)";jwplayer.vid=document.createElement("video");jwplayer.audio=document.createElement("audio");jwplayer.source=document.createElement("source");(function(c){c.utils=function(){};c.utils.typeOf=function(a){var b=typeof a;if(b==="object"){if(a){if(a instanceof Array){b="array"}}else{b="null"}}return b};c.utils.extend=function(){var f=c.utils.extend["arguments"];if(f.length>1){for(var a=1;a<f.length;a++){for(var b in f[a]){f[0][b]=f[a][b]}}return f[0]}return null};c.utils.clone=function(a){var h;var g=c.utils.clone["arguments"];if(g.length==1){switch(c.utils.typeOf(g[0])){case"object":h={};for(var b in g[0]){h[b]=c.utils.clone(g[0][b])}break;case"array":h=[];for(var b in g[0]){h[b]=c.utils.clone(g[0][b])}break;default:return g[0];break}}return h};c.utils.extension=function(a){if(!a){return""}a=a.substring(a.lastIndexOf("/")+1,a.length);a=a.split("?")[0];if(a.lastIndexOf(".")>-1){return a.substr(a.lastIndexOf(".")+1,a.length).toLowerCase()}return};c.utils.html=function(b,a){b.innerHTML=a};c.utils.wrap=function(b,a){if(b.parentNode){b.parentNode.replaceChild(a,b)}a.appendChild(b)};c.utils.ajax=function(a,b,k){var h;if(window.XMLHttpRequest){h=new XMLHttpRequest()}else{h=new ActiveXObject("Microsoft.XMLHTTP")}h.onreadystatechange=function(){if(h.readyState===4){if(h.status===200){if(b){if(!c.utils.exists(h.responseXML)){try{if(window.DOMParser){var f=(new DOMParser()).parseFromString(h.responseText,"text/xml");if(f){h=c.utils.extend({},h,{responseXML:f})}}else{f=new ActiveXObject("Microsoft.XMLDOM");f.async="false";f.loadXML(h.responseText);h=c.utils.extend({},h,{responseXML:f})}}catch(e){if(k){k(a)}}}b(h)}}else{if(k){k(a)}}}};try{h.open("GET",a,true);h.send(null)}catch(j){if(k){k(a)}}return h};c.utils.load=function(b,a,f){b.onreadystatechange=function(){if(b.readyState===4){if(b.status===200){if(a){a()}}else{if(f){f()}}}}};c.utils.find=function(a,b){return a.getElementsByTagName(b)};c.utils.append=function(b,a){b.appendChild(a)};c.utils.isIE=function(){return((!+"\v1")||(typeof window.ActiveXObject!="undefined"))};c.utils.userAgentMatch=function(a){var b=navigator.userAgent.toLowerCase();return(b.match(a)!==null)};c.utils.isIOS=function(){return c.utils.userAgentMatch(/iP(hone|ad|od)/i)};c.utils.isIPad=function(){return c.utils.userAgentMatch(/iPad/i)};c.utils.isIPod=function(){return c.utils.userAgentMatch(/iP(hone|od)/i)};c.utils.isAndroid=function(){return c.utils.userAgentMatch(/android/i)};c.utils.isLegacyAndroid=function(){return c.utils.userAgentMatch(/android 2.[012]/i)};c.utils.isBlackberry=function(){return c.utils.userAgentMatch(/blackberry/i)};c.utils.isMobile=function(){return c.utils.isIOS()};c.utils.getFirstPlaylistItemFromConfig=function(f){var b={};var a;if(f.playlist&&f.playlist.length){a=f.playlist[0]}else{a=f}b.file=a.file;b.levels=a.levels;b.streamer=a.streamer;b.playlistfile=a.playlistfile;b.provider=a.provider;if(!b.provider){if(b.file&&(b.file.toLowerCase().indexOf("youtube.com")>-1||b.file.toLowerCase().indexOf("youtu.be")>-1)){b.provider="youtube"}if(b.streamer&&b.streamer.toLowerCase().indexOf("rtmp://")==0){b.provider="rtmp"}if(a.type){b.provider=a.type.toLowerCase()}}if(b.provider=="audio"){b.provider="sound"}return b};c.utils.getOuterHTML=function(b){if(b.outerHTML){return b.outerHTML}else{try{return new XMLSerializer().serializeToString(b)}catch(a){return""}}};c.utils.setOuterHTML=function(b,h){if(b.outerHTML){b.outerHTML=h}else{var a=document.createElement("div");a.innerHTML=h;var k=document.createRange();k.selectNodeContents(a);var j=k.extractContents();b.parentNode.insertBefore(j,b);b.parentNode.removeChild(b)}};c.utils.hasFlash=function(){if(typeof navigator.plugins!="undefined"&&typeof navigator.plugins["Shockwave Flash"]!="undefined"){return true}if(typeof window.ActiveXObject!="undefined"){try{new ActiveXObject("ShockwaveFlash.ShockwaveFlash");return true}catch(a){}}return false};c.utils.getPluginName=function(a){if(a.lastIndexOf("/")>=0){a=a.substring(a.lastIndexOf("/")+1,a.length)}if(a.lastIndexOf("-")>=0){a=a.substring(0,a.lastIndexOf("-"))}if(a.lastIndexOf(".swf")>=0){a=a.substring(0,a.lastIndexOf(".swf"))}if(a.lastIndexOf(".js")>=0){a=a.substring(0,a.lastIndexOf(".js"))}return a};c.utils.getPluginVersion=function(a){if(a.lastIndexOf("-")>=0){if(a.lastIndexOf(".js")>=0){return a.substring(a.lastIndexOf("-")+1,a.lastIndexOf(".js"))}else{if(a.lastIndexOf(".swf")>=0){return a.substring(a.lastIndexOf("-")+1,a.lastIndexOf(".swf"))}else{return a.substring(a.lastIndexOf("-")+1)}}}return""};c.utils.getAbsolutePath=function(b,l){if(!c.utils.exists(l)){l=document.location.href}if(!c.utils.exists(b)){return undefined}if(d(b)){return b}var a=l.substring(0,l.indexOf("://")+3);var m=l.substring(a.length,l.indexOf("/",a.length+1));var p;if(b.indexOf("/")===0){p=b.split("/")}else{var o=l.split("?")[0];o=o.substring(a.length+m.length+1,o.lastIndexOf("/"));p=o.split("/").concat(b.split("/"))}var q=[];for(var n=0;n<p.length;n++){if(!p[n]||!c.utils.exists(p[n])||p[n]=="."){continue}else{if(p[n]==".."){q.pop()}else{q.push(p[n])}}}return a+m+"/"+q.join("/")};function d(b){if(!c.utils.exists(b)){return}var a=b.indexOf("://");var f=b.indexOf("?");return(a>0&&(f<0||(f>a)))}c.utils.pluginPathType={ABSOLUTE:"ABSOLUTE",RELATIVE:"RELATIVE",CDN:"CDN"};c.utils.getPluginPathType=function(g){if(typeof g!="string"){return}g=g.split("?")[0];var b=g.indexOf("://");if(b>0){return c.utils.pluginPathType.ABSOLUTE}var h=g.indexOf("/");var a=c.utils.extension(g);if(b<0&&h<0&&(!a||!isNaN(a))){return c.utils.pluginPathType.CDN}return c.utils.pluginPathType.RELATIVE};c.utils.mapEmpty=function(b){for(var a in b){return false}return true};c.utils.mapLength=function(b){var f=0;for(var a in b){f++}return f};c.utils.log=function(a,b){if(typeof console!="undefined"&&typeof console.log!="undefined"){if(b){console.log(a,b)}else{console.log(a)}}};c.utils.css=function(j,a,k){if(c.utils.exists(j)){for(var h in a){try{if(typeof a[h]==="undefined"){continue}else{if(typeof a[h]=="number"&&!(h=="zIndex"||h=="opacity")){if(isNaN(a[h])){continue}if(h.match(/color/i)){a[h]="#"+c.utils.strings.pad(a[h].toString(16),6)}else{a[h]=Math.ceil(a[h])+"px"}}}j.style[h]=a[h]}catch(b){}}}};c.utils.isYouTube=function(a){return(a.indexOf("youtube.com")>-1||a.indexOf("youtu.be")>-1)};c.utils.transform=function(k,l,m,b,a){if(!c.utils.exists(l)){l=1}if(!c.utils.exists(m)){m=1}if(!c.utils.exists(b)){b=0}if(!c.utils.exists(a)){a=0}if(l==1&&m==1&&b==0&&a==0){k.style.webkitTransform="";k.style.MozTransform="";k.style.OTransform=""}else{var j="scale("+l+","+m+") translate("+b+"px,"+a+"px)";k.style.webkitTransform=j;k.style.MozTransform=j;k.style.OTransform=j}};c.utils.stretch=function(u,a,b,x,r,w){if(typeof b=="undefined"||typeof x=="undefined"||typeof r=="undefined"||typeof w=="undefined"){return}var z=b/r;var y=x/w;var s=0;var t=0;var A={};if(a.parentElement){a.parentElement.style.overflow="hidden"}c.utils.transform(a);switch(u.toUpperCase()){case c.utils.stretching.NONE:A.width=r;A.height=w;A.top=(x-A.height)/2;A.left=(b-A.width)/2;break;case c.utils.stretching.UNIFORM:if(z>y){A.width=r*y;A.height=w*y}else{A.width=r*z;A.height=w*z}A.top=(x-A.height)/2;A.left=(b-A.width)/2;break;case c.utils.stretching.FILL:if(z>y){A.width=r*z;A.height=w*z}else{A.width=r*y;A.height=w*y}A.top=(x-A.height)/2;A.left=(b-A.width)/2;break;case c.utils.stretching.EXACTFIT:A.width=r;A.height=w;var q=Math.round((r/2)*(1-1/z));var v=Math.round((w/2)*(1-1/y));c.utils.transform(a,z,y,q,v);A.top=A.left=0;break;default:break}c.utils.css(a,A)};c.utils.stretching={NONE:"NONE",FILL:"FILL",UNIFORM:"UNIFORM",EXACTFIT:"EXACTFIT"};c.utils.deepReplaceKeyName=function(a,k,m){switch(c.utils.typeOf(a)){case"array":for(var b=0;b<a.length;b++){a[b]=c.utils.deepReplaceKeyName(a[b],k,m)}break;case"object":for(var j in a){var l=j.replace(new RegExp(k,"g"),m);a[l]=c.utils.deepReplaceKeyName(a[j],k,m);if(j!=l){delete a[j]}}break}return a};c.utils.isInArray=function(a,b){if(!(a)||!(a instanceof Array)){return false}for(var f=0;f<a.length;f++){if(b===a[f]){return true}}return false};c.utils.exists=function(a){switch(typeof(a)){case"string":return(a.length>0);break;case"object":return(a!==null);case"undefined":return false}return true};c.utils.empty=function(a){if(typeof a.hasChildNodes=="function"){while(a.hasChildNodes()){a.removeChild(a.firstChild)}}};c.utils.parseDimension=function(a){if(typeof a=="string"){if(a===""){return 0}else{if(a.lastIndexOf("%")>-1){return a}else{return parseInt(a.replace("px",""),10)}}}return a};c.utils.getDimensions=function(a){if(a&&a.style){return{x:c.utils.parseDimension(a.style.left),y:c.utils.parseDimension(a.style.top),width:c.utils.parseDimension(a.style.width),height:c.utils.parseDimension(a.style.height)}}else{return{}}};c.utils.getElementWidth=function(a){if(!a){return null}else{if(a==document.body){return c.utils.parentNode(a).clientWidth}else{if(a.clientWidth>0){return a.clientWidth}else{if(a.style){return c.utils.parseDimension(a.style.width)}else{return null}}}}};c.utils.getElementHeight=function(a){if(!a){return null}else{if(a==document.body){return c.utils.parentNode(a).clientHeight}else{if(a.clientHeight>0){return a.clientHeight}else{if(a.style){return c.utils.parseDimension(a.style.height)}else{return null}}}}};c.utils.timeFormat=function(a){str="00:00";if(a>0){str=Math.floor(a/60)<10?"0"+Math.floor(a/60)+":":Math.floor(a/60)+":";str+=Math.floor(a%60)<10?"0"+Math.floor(a%60):Math.floor(a%60)}return str};c.utils.useNativeFullscreen=function(){return(navigator&&navigator.vendor&&navigator.vendor.indexOf("Apple")==0)};c.utils.parentNode=function(a){if(!a){return docuemnt.body}else{if(a.parentNode){return a.parentNode}else{if(a.parentElement){return a.parentElement}else{return a}}}};c.utils.getBoundingClientRect=function(a){if(typeof a.getBoundingClientRect=="function"){return a.getBoundingClientRect()}else{return{left:a.offsetLeft+document.body.scrollLeft,top:a.offsetTop+document.body.scrollTop,width:a.offsetWidth,height:a.offsetHeight}}}})(jwplayer);(function(b){b.events=function(){};b.events.COMPLETE="COMPLETE";b.events.ERROR="ERROR"})(jwplayer);(function(jwplayer){jwplayer.events.eventdispatcher=function(debug){var _debug=debug;var _listeners;var _globallisteners;this.resetEventListeners=function(){_listeners={};_globallisteners=[]};this.resetEventListeners();this.addEventListener=function(type,listener,count){try{if(!jwplayer.utils.exists(_listeners[type])){_listeners[type]=[]}if(typeof(listener)=="string"){eval("listener = "+listener)}_listeners[type].push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeEventListener=function(type,listener){if(!_listeners[type]){return}try{for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){if(_listeners[type][listenerIndex].listener.toString()==listener.toString()){_listeners[type].splice(listenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.addGlobalListener=function(listener,count){try{if(typeof(listener)=="string"){eval("listener = "+listener)}_globallisteners.push({listener:listener,count:count})}catch(err){jwplayer.utils.log("error",err)}return false};this.removeGlobalListener=function(listener){if(!_globallisteners[type]){return}try{for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){if(_globallisteners[globalListenerIndex].listener.toString()==listener.toString()){_globallisteners.splice(globalListenerIndex,1);break}}}catch(err){jwplayer.utils.log("error",err)}return false};this.sendEvent=function(type,data){if(!jwplayer.utils.exists(data)){data={}}if(_debug){jwplayer.utils.log(type,data)}if(typeof _listeners[type]!="undefined"){for(var listenerIndex=0;listenerIndex<_listeners[type].length;listenerIndex++){try{_listeners[type][listenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: "+err.toString(),_listeners[type][listenerIndex].listener)}if(_listeners[type][listenerIndex]){if(_listeners[type][listenerIndex].count===1){delete _listeners[type][listenerIndex]}else{if(_listeners[type][listenerIndex].count>0){_listeners[type][listenerIndex].count=_listeners[type][listenerIndex].count-1}}}}}for(var globalListenerIndex=0;globalListenerIndex<_globallisteners.length;globalListenerIndex++){try{_globallisteners[globalListenerIndex].listener(data)}catch(err){jwplayer.utils.log("There was an error while handling a listener: "+err.toString(),_globallisteners[globalListenerIndex].listener)}if(_globallisteners[globalListenerIndex]){if(_globallisteners[globalListenerIndex].count===1){delete _globallisteners[globalListenerIndex]}else{if(_globallisteners[globalListenerIndex].count>0){_globallisteners[globalListenerIndex].count=_globallisteners[globalListenerIndex].count-1}}}}}}})(jwplayer);(function(d){var c={};d.utils.animations=function(){};d.utils.animations.transform=function(b,a){b.style.webkitTransform=a;b.style.MozTransform=a;b.style.OTransform=a;b.style.msTransform=a};d.utils.animations.transformOrigin=function(b,a){b.style.webkitTransformOrigin=a;b.style.MozTransformOrigin=a;b.style.OTransformOrigin=a;b.style.msTransformOrigin=a};d.utils.animations.rotate=function(b,a){d.utils.animations.transform(b,["rotate(",a,"deg)"].join(""))};d.utils.cancelAnimation=function(a){delete c[a.id]};d.utils.fadeTo=function(a,r,s,o,p,t){if(c[a.id]!=t&&d.utils.exists(t)){return}if(a.style.opacity==r){return}var u=new Date().getTime();if(t>u){setTimeout(function(){d.utils.fadeTo(a,r,s,o,0,t)},t-u)}if(a.style.display=="none"){a.style.display="block"}if(!d.utils.exists(o)){o=a.style.opacity===""?1:a.style.opacity}if(a.style.opacity==r&&a.style.opacity!==""&&d.utils.exists(t)){if(r===0){a.style.display="none"}return}if(!d.utils.exists(t)){t=u;c[a.id]=t}if(!d.utils.exists(p)){p=0}var n=(s>0)?((u-t)/(s*1000)):0;n=n>1?1:n;var b=r-o;var q=o+(n*b);if(q>1){q=1}else{if(q<0){q=0}}a.style.opacity=q;if(p>0){c[a.id]=t+p*1000;d.utils.fadeTo(a,r,s,o,0,c[a.id]);return}setTimeout(function(){d.utils.fadeTo(a,r,s,o,0,t)},10)}})(jwplayer);(function(b){b.utils.arrays=function(){};b.utils.arrays.indexOf=function(f,e){for(var a=0;a<f.length;a++){if(f[a]==e){return a}}return -1};b.utils.arrays.remove=function(f,e){var a=b.utils.arrays.indexOf(f,e);if(a>-1){f.splice(a,1)}}})(jwplayer);(function(b){b.utils.extensionmap={"3gp":{html5:"video/3gpp",flash:"video"},"3gpp":{html5:"video/3gpp"},"3g2":{html5:"video/3gpp2",flash:"video"},"3gpp2":{html5:"video/3gpp2"},flv:{flash:"video"},f4a:{html5:"audio/mp4"},f4b:{html5:"audio/mp4",flash:"video"},f4v:{html5:"video/mp4",flash:"video"},mov:{html5:"video/quicktime",flash:"video"},m4a:{html5:"audio/mp4",flash:"video"},m4b:{html5:"audio/mp4"},m4p:{html5:"audio/mp4"},m4v:{html5:"video/mp4",flash:"video"},mp4:{html5:"video/mp4",flash:"video"},rbs:{flash:"sound"},aac:{html5:"audio/aac",flash:"video"},mp3:{html5:"audio/mp3",flash:"sound"},ogg:{html5:"audio/ogg"},oga:{html5:"audio/ogg"},ogv:{html5:"video/ogg"},webm:{html5:"video/webm"},m3u8:{html5:"audio/x-mpegurl"},gif:{flash:"image"},jpeg:{flash:"image"},jpg:{flash:"image"},swf:{flash:"image"},png:{flash:"image"},wav:{html5:"audio/x-wav"}}})(jwplayer);(function(o){o.utils.mediaparser=function(){};var m={element:{width:"width",height:"height",id:"id","class":"className",name:"name"},media:{src:"file",preload:"preload",autoplay:"autostart",loop:"repeat",controls:"controls"},source:{src:"file",type:"type",media:"media","data-jw-width":"width","data-jw-bitrate":"bitrate"},video:{poster:"image"}};var n={};o.utils.mediaparser.parseMedia=function(a){return p(a)};function q(a,b){if(!o.utils.exists(b)){b=m[a]}else{o.utils.extend(b,m[a])}return b}function p(f,d){if(n[f.tagName.toLowerCase()]&&!o.utils.exists(d)){return n[f.tagName.toLowerCase()](f)}else{d=q("element",d);var e={};for(var c in d){if(c!="length"){var a=f.getAttribute(c);if(o.utils.exists(a)){e[d[c]]=a}}}var b=f.style["#background-color"];if(b&&!(b=="transparent"||b=="rgba(0, 0, 0, 0)")){e.screencolor=b}return e}}function l(f,c){c=q("media",c);var b=[];var d=o.utils.selectors("source",f);for(var a in d){if(!isNaN(a)){b.push(k(d[a]))}}var e=p(f,c);if(o.utils.exists(e.file)){b[0]={file:e.file}}e.levels=b;return e}function k(a,b){b=q("source",b);var c=p(a,b);c.width=c.width?c.width:0;c.bitrate=c.bitrate?c.bitrate:0;return c}function j(a,b){b=q("video",b);var c=l(a,b);return c}n.media=l;n.audio=l;n.source=k;n.video=j})(jwplayer);(function(b){b.utils.loaderstatus={NEW:"NEW",LOADING:"LOADING",ERROR:"ERROR",COMPLETE:"COMPLETE"};b.utils.scriptloader=function(f){var e=b.utils.loaderstatus.NEW;var a=new b.events.eventdispatcher();b.utils.extend(this,a);this.load=function(){if(e==b.utils.loaderstatus.NEW){e=b.utils.loaderstatus.LOADING;var c=document.createElement("script");c.onload=function(d){e=b.utils.loaderstatus.COMPLETE;a.sendEvent(b.events.COMPLETE)};c.onerror=function(d){e=b.utils.loaderstatus.ERROR;a.sendEvent(b.events.ERROR)};c.onreadystatechange=function(){if(c.readyState=="loaded"||c.readyState=="complete"){e=b.utils.loaderstatus.COMPLETE;a.sendEvent(b.events.COMPLETE)}};document.getElementsByTagName("head")[0].appendChild(c);c.src=f}};this.getStatus=function(){return e}}})(jwplayer);(function(b){b.utils.selectors=function(a,f){if(!b.utils.exists(f)){f=document}a=b.utils.strings.trim(a);var h=a.charAt(0);if(h=="#"){return f.getElementById(a.substr(1))}else{if(h=="."){if(f.getElementsByClassName){return f.getElementsByClassName(a.substr(1))}else{return b.utils.selectors.getElementsByTagAndClass("*",a.substr(1))}}else{if(a.indexOf(".")>0){var g=a.split(".");return b.utils.selectors.getElementsByTagAndClass(g[0],g[1])}else{return f.getElementsByTagName(a)}}}return null};b.utils.selectors.getElementsByTagAndClass=function(o,l,m){var k=[];if(!b.utils.exists(m)){m=document}var n=m.getElementsByTagName(o);for(var p=0;p<n.length;p++){if(b.utils.exists(n[p].className)){var q=n[p].className.split(" ");for(var a=0;a<q.length;a++){if(q[a]==l){k.push(n[p])}}}}return k}})(jwplayer);(function(b){b.utils.strings=function(){};b.utils.strings.trim=function(a){return a.replace(/^\s*/,"").replace(/\s*$/,"")};b.utils.strings.pad=function(f,e,a){if(!a){a="0"}while(f.length<e){f=a+f}return f};b.utils.strings.serialize=function(a){if(a==null){return null}else{if(a=="true"){return true}else{if(a=="false"){return false}else{if(isNaN(Number(a))||a.length>5||a.length==0){return a}else{return Number(a)}}}}};b.utils.strings.seconds=function(e){e=e.replace(",",".");var a=e.split(":");var f=0;if(e.substr(-1)=="s"){f=Number(e.substr(0,e.length-1))}else{if(e.substr(-1)=="m"){f=Number(e.substr(0,e.length-1))*60}else{if(e.substr(-1)=="h"){f=Number(e.substr(0,e.length-1))*3600}else{if(a.length>1){f=Number(a[a.length-1]);f+=Number(a[a.length-2])*60;if(a.length==3){f+=Number(a[a.length-3])*3600}}else{f=Number(e)}}}}return f};b.utils.strings.xmlAttribute=function(a,f){for(var e=0;e<a.attributes.length;e++){if(a.attributes[e].name&&a.attributes[e].name.toLowerCase()==f.toLowerCase()){return a.attributes[e].value.toString()}}return""};b.utils.strings.jsonToString=function(l){var j=j||{};if(j&&j.stringify){return j.stringify(l)}var o=typeof(l);if(o!="object"||l===null){if(o=="string"){l='"'+l.replace(/"/g,'\\"')+'"'}else{return String(l)}}else{var k=[],a=(l&&l.constructor==Array);for(var n in l){var m=l[n];switch(typeof(m)){case"string":m='"'+m.replace(/"/g,'\\"')+'"';break;case"object":if(b.utils.exists(m)){m=b.utils.strings.jsonToString(m)}break}if(a){if(typeof(m)!="function"){k.push(String(m))}}else{if(typeof(m)!="function"){k.push('"'+n+'":'+String(m))}}}if(a){return"["+String(k)+"]"}else{return"{"+String(k)+"}"}}}})(jwplayer);(function(k){var j=new RegExp(/^(#|0x)[0-9a-fA-F]{3,6}/);k.utils.typechecker=function(a,b){b=!k.utils.exists(b)?f(a):b;return h(a,b)};function f(b){var a=["true","false","t","f"];if(a.toString().indexOf(b.toLowerCase().replace(" ",""))>=0){return"boolean"}else{if(j.test(b)){return"color"}else{if(!isNaN(parseInt(b,10))&&parseInt(b,10).toString().length==b.length){return"integer"}else{if(!isNaN(parseFloat(b))&&parseFloat(b).toString().length==b.length){return"float"}}}}return"string"}function h(a,b){if(!k.utils.exists(b)){return a}switch(b){case"color":if(a.length>0){return g(a)}return null;case"integer":return parseInt(a,10);case"float":return parseFloat(a);case"boolean":if(a.toLowerCase()=="true"){return true}else{if(a=="1"){return true}}return false}return a}function g(a){switch(a.toLowerCase()){case"blue":return parseInt("0000FF",16);case"green":return parseInt("00FF00",16);case"red":return parseInt("FF0000",16);case"cyan":return parseInt("00FFFF",16);case"magenta":return parseInt("FF00FF",16);case"yellow":return parseInt("FFFF00",16);case"black":return parseInt("000000",16);case"white":return parseInt("FFFFFF",16);default:a=a.replace(/(#|0x)?([0-9A-F]{3,6})$/gi,"$2");if(a.length==3){a=a.charAt(0)+a.charAt(0)+a.charAt(1)+a.charAt(1)+a.charAt(2)+a.charAt(2)}return parseInt(a,16)}return parseInt("000000",16)}})(jwplayer);(function(b){b.utils.parsers=function(){};b.utils.parsers.localName=function(a){if(!a){return""}else{if(a.localName){return a.localName}else{if(a.baseName){return a.baseName}else{return""}}}};b.utils.parsers.textContent=function(a){if(!a){return""}else{if(a.textContent){return a.textContent}else{if(a.text){return a.text}else{return""}}}}})(jwplayer);(function(b){b.utils.parsers.jwparser=function(){};b.utils.parsers.jwparser.PREFIX="jwplayer";b.utils.parsers.jwparser.parseEntry=function(f,e){for(var a=0;a<f.childNodes.length;a++){if(f.childNodes[a].prefix==b.utils.parsers.jwparser.PREFIX){e[b.utils.parsers.localName(f.childNodes[a])]=b.utils.strings.serialize(b.utils.parsers.textContent(f.childNodes[a]))}if(!e.file&&String(e.link).toLowerCase().indexOf("youtube")>-1){e.file=e.link}}return e};b.utils.parsers.jwparser.getProvider=function(d){if(d.type){return d.type}else{if(d.file.indexOf("youtube.com/w")>-1||d.file.indexOf("youtube.com/v")>-1||d.file.indexOf("youtu.be/")>-1){return"youtube"}else{if(d.streamer&&d.streamer.indexOf("rtmp")==0){return"rtmp"}else{if(d.streamer&&d.streamer.indexOf("http")==0){return"http"}else{var a=b.utils.strings.extension(d.file);if(extensions.hasOwnProperty(a)){return extensions[a]}}}}}return""}})(jwplayer);(function(b){b.utils.parsers.mediaparser=function(){};b.utils.parsers.mediaparser.PREFIX="media";b.utils.parsers.mediaparser.parseGroup=function(j,g){var h=false;for(var k=0;k<j.childNodes.length;k++){if(j.childNodes[k].prefix==b.utils.parsers.mediaparser.PREFIX){if(!b.utils.parsers.localName(j.childNodes[k])){continue}switch(b.utils.parsers.localName(j.childNodes[k]).toLowerCase()){case"content":if(!h){g.file=b.utils.strings.xmlAttribute(j.childNodes[k],"url")}if(b.utils.strings.xmlAttribute(j.childNodes[k],"duration")){g.duration=b.utils.strings.seconds(b.utils.strings.xmlAttribute(j.childNodes[k],"duration"))}if(b.utils.strings.xmlAttribute(j.childNodes[k],"start")){g.start=b.utils.strings.seconds(b.utils.strings.xmlAttribute(j.childNodes[k],"start"))}if(j.childNodes[k].childNodes&&j.childNodes[k].childNodes.length>0){g=b.utils.parsers.mediaparser.parseGroup(j.childNodes[k],g)}if(b.utils.strings.xmlAttribute(j.childNodes[k],"width")||b.utils.strings.xmlAttribute(j.childNodes[k],"bitrate")||b.utils.strings.xmlAttribute(j.childNodes[k],"url")){if(!g.levels){g.levels=[]}g.levels.push({width:b.utils.strings.xmlAttribute(j.childNodes[k],"width"),bitrate:b.utils.strings.xmlAttribute(j.childNodes[k],"bitrate"),file:b.utils.strings.xmlAttribute(j.childNodes[k],"url")})}break;case"title":g.title=b.utils.parsers.textContent(j.childNodes[k]);break;case"description":g.description=b.utils.parsers.textContent(j.childNodes[k]);break;case"keywords":g.tags=b.utils.parsers.textContent(j.childNodes[k]);break;case"thumbnail":g.image=b.utils.strings.xmlAttribute(j.childNodes[k],"url");break;case"credit":g.author=b.utils.parsers.textContent(j.childNodes[k]);break;case"player":var a=j.childNodes[k].url;if(a.indexOf("youtube.com")>=0||a.indexOf("youtu.be")>=0){h=true;g.file=b.utils.strings.xmlAttribute(j.childNodes[k],"url")}break;case"group":b.utils.parsers.mediaparser.parseGroup(j.childNodes[k],g);break}}}return g}})(jwplayer);(function(c){c.utils.parsers.rssparser=function(){};c.utils.parsers.rssparser.parse=function(a){var h=[];for(var b=0;b<a.childNodes.length;b++){if(c.utils.parsers.localName(a.childNodes[b]).toLowerCase()=="channel"){for(var g=0;g<a.childNodes[b].childNodes.length;g++){if(c.utils.parsers.localName(a.childNodes[b].childNodes[g]).toLowerCase()=="item"){h.push(d(a.childNodes[b].childNodes[g]))}}}}return h};function d(b){var a={};for(var f=0;f<b.childNodes.length;f++){if(!c.utils.parsers.localName(b.childNodes[f])){continue}switch(c.utils.parsers.localName(b.childNodes[f]).toLowerCase()){case"enclosure":a.file=c.utils.strings.xmlAttribute(b.childNodes[f],"url");break;case"title":a.title=c.utils.parsers.textContent(b.childNodes[f]);break;case"pubdate":a.date=c.utils.parsers.textContent(b.childNodes[f]);break;case"description":a.description=c.utils.parsers.textContent(b.childNodes[f]);break;case"link":a.link=c.utils.parsers.textContent(b.childNodes[f]);break;case"category":if(a.tags){a.tags+=c.utils.parsers.textContent(b.childNodes[f])}else{a.tags=c.utils.parsers.textContent(b.childNodes[f])}break}}a=c.utils.parsers.mediaparser.parseGroup(b,a);a=c.utils.parsers.jwparser.parseEntry(b,a);return new c.html5.playlistitem(a)}})(jwplayer);(function(e){var f={};var d={};e.plugins=function(){};e.plugins.loadPlugins=function(a,b){d[a]=new e.plugins.pluginloader(new e.plugins.model(f),b);return d[a]};e.plugins.registerPlugin=function(a,c,j){var k=e.utils.getPluginName(a);if(f[k]){f[k].registerPlugin(a,c,j)}else{e.utils.log("A plugin ("+a+") was registered with the player that was not loaded. Please check your configuration.");for(var b in d){d[b].pluginFailed()}}}})(jwplayer);(function(b){b.plugins.model=function(a){this.addPlugin=function(f){var e=b.utils.getPluginName(f);if(!a[e]){a[e]=new b.plugins.plugin(f)}return a[e]}}})(jwplayer);(function(b){b.plugins.pluginmodes={FLASH:"FLASH",JAVASCRIPT:"JAVASCRIPT",HYBRID:"HYBRID"};b.plugins.plugin=function(u){var s="http://lp.longtailvideo.com";var n=b.utils.loaderstatus.NEW;var m;var o;var a;var t=new b.events.eventdispatcher();b.utils.extend(this,t);function r(){switch(b.utils.getPluginPathType(u)){case b.utils.pluginPathType.ABSOLUTE:return u;case b.utils.pluginPathType.RELATIVE:return b.utils.getAbsolutePath(u,window.location.href);case b.utils.pluginPathType.CDN:var d=b.utils.getPluginName(u);var e=b.utils.getPluginVersion(u);var c=(window.location.href.indexOf("https://")==0)?s.replace("http://","https://secure"):s;return c+"/"+b.version.split(".")[0]+"/"+d+"/"+d+(e!==""?("-"+e):"")+".js"}}function p(c){a=setTimeout(function(){n=b.utils.loaderstatus.COMPLETE;t.sendEvent(b.events.COMPLETE)},1000)}function q(c){n=b.utils.loaderstatus.ERROR;t.sendEvent(b.events.ERROR)}this.load=function(){if(n==b.utils.loaderstatus.NEW){if(u.lastIndexOf(".swf")>0){m=u;n=b.utils.loaderstatus.COMPLETE;t.sendEvent(b.events.COMPLETE);return}n=b.utils.loaderstatus.LOADING;var c=new b.utils.scriptloader(r());c.addEventListener(b.events.COMPLETE,p);c.addEventListener(b.events.ERROR,q);c.load()}};this.registerPlugin=function(d,e,c){if(a){clearTimeout(a);a=undefined}if(e&&c){m=c;o=e}else{if(typeof e=="string"){m=e}else{if(typeof e=="function"){o=e}else{if(!e&&!c){m=d}}}}n=b.utils.loaderstatus.COMPLETE;t.sendEvent(b.events.COMPLETE)};this.getStatus=function(){return n};this.getPluginName=function(){return b.utils.getPluginName(u)};this.getFlashPath=function(){if(m){switch(b.utils.getPluginPathType(m)){case b.utils.pluginPathType.ABSOLUTE:return m;case b.utils.pluginPathType.RELATIVE:if(u.lastIndexOf(".swf")>0){return b.utils.getAbsolutePath(m,window.location.href)}return b.utils.getAbsolutePath(m,r());case b.utils.pluginPathType.CDN:if(m.indexOf("-")>-1){return m+"h"}return m+"-h"}}return null};this.getJS=function(){return o};this.getPluginmode=function(){if(typeof m!="undefined"&&typeof o!="undefined"){return b.plugins.pluginmodes.HYBRID}else{if(typeof m!="undefined"){return b.plugins.pluginmodes.FLASH}else{if(typeof o!="undefined"){return b.plugins.pluginmodes.JAVASCRIPT}}}};this.getNewInstance=function(e,c,d){return new o(e,c,d)};this.getURL=function(){return u}}})(jwplayer);(function(b){b.plugins.pluginloader=function(m,p){var n={};var a=b.utils.loaderstatus.NEW;var q=false;var s=false;var r=new b.events.eventdispatcher();b.utils.extend(this,r);function o(){if(!s){s=true;a=b.utils.loaderstatus.COMPLETE;r.sendEvent(b.events.COMPLETE)}}function l(){if(!s){var c=0;for(plugin in n){var d=n[plugin].getStatus();if(d==b.utils.loaderstatus.LOADING||d==b.utils.loaderstatus.NEW){c++}}if(c==0){o()}}}this.setupPlugins=function(k,d,e){var c={length:0,plugins:{}};var h={length:0,plugins:{}};for(var j in n){var g=n[j].getPluginName();if(n[j].getFlashPath()){c.plugins[n[j].getFlashPath()]=d.plugins[j];c.plugins[n[j].getFlashPath()].pluginmode=n[j].getPluginmode();c.length++}if(n[j].getJS()){var f=document.createElement("div");f.id=k.id+"_"+g;f.style.position="absolute";f.style.zIndex=h.length+10;h.plugins[g]=n[j].getNewInstance(k,d.plugins[j],f);h.length++;if(typeof h.plugins[g].resize!="undefined"){k.onReady(e(h.plugins[g],f,true));k.onResize(e(h.plugins[g],f))}}}k.plugins=h.plugins;return c};this.load=function(){a=b.utils.loaderstatus.LOADING;q=true;for(var c in p){if(b.utils.exists(c)){n[c]=m.addPlugin(c);n[c].addEventListener(b.events.COMPLETE,l);n[c].addEventListener(b.events.ERROR,l)}}for(c in n){n[c].load()}q=false;l()};this.pluginFailed=function(){o()};this.getStatus=function(){return a}}})(jwplayer);(function(c){var d=[];c.api=function(E){this.container=E;this.id=E.id;var v={};var G={};var b={};var F=[];var A=undefined;var x=false;var z=[];var t=c.utils.getOuterHTML(E);var a={};var y={};this.getBuffer=function(){return this.callInternal("jwGetBuffer")};this.getContainer=function(){return this.container};function D(e,f){return function(k,j,h,g){if(e.renderingMode=="flash"||e.renderingMode=="html5"){var l;if(j){y[k]=j;l="jwplayer('"+e.id+"').callback('"+k+"')"}else{if(!j&&y[k]){delete y[k]}}A.jwDockSetButton(k,l,h,g)}return f}}this.getPlugin=function(g){var e=this;var f={};if(g=="dock"){return c.utils.extend(f,{setButton:D(e,f),show:function(){e.callInternal("jwDockShow");return f},hide:function(){e.callInternal("jwDockHide");return f},onShow:function(h){e.componentListener("dock",c.api.events.JWPLAYER_COMPONENT_SHOW,h);return f},onHide:function(h){e.componentListener("dock",c.api.events.JWPLAYER_COMPONENT_HIDE,h);return f}})}else{if(g=="controlbar"){return c.utils.extend(f,{show:function(){e.callInternal("jwControlbarShow");return f},hide:function(){e.callInternal("jwControlbarHide");return f},onShow:function(h){e.componentListener("controlbar",c.api.events.JWPLAYER_COMPONENT_SHOW,h);return f},onHide:function(h){e.componentListener("controlbar",c.api.events.JWPLAYER_COMPONENT_HIDE,h);return f}})}else{if(g=="display"){return c.utils.extend(f,{show:function(){e.callInternal("jwDisplayShow");return f},hide:function(){e.callInternal("jwDisplayHide");return f},onShow:function(h){e.componentListener("display",c.api.events.JWPLAYER_COMPONENT_SHOW,h);return f},onHide:function(h){e.componentListener("display",c.api.events.JWPLAYER_COMPONENT_HIDE,h);return f}})}else{return this.plugins[g]}}}};this.callback=function(e){if(y[e]){return y[e]()}};this.getDuration=function(){return this.callInternal("jwGetDuration")};this.getFullscreen=function(){return this.callInternal("jwGetFullscreen")};this.getHeight=function(){return this.callInternal("jwGetHeight")};this.getLockState=function(){return this.callInternal("jwGetLockState")};this.getMeta=function(){return this.getItemMeta()};this.getMute=function(){return this.callInternal("jwGetMute")};this.getPlaylist=function(){var e=this.callInternal("jwGetPlaylist");if(this.renderingMode=="flash"){c.utils.deepReplaceKeyName(e,"__dot__",".")}for(var f=0;f<e.length;f++){if(!c.utils.exists(e[f].index)){e[f].index=f}}return e};this.getPlaylistItem=function(e){if(!c.utils.exists(e)){e=this.getCurrentItem()}return this.getPlaylist()[e]};this.getPosition=function(){return this.callInternal("jwGetPosition")};this.getRenderingMode=function(){return this.renderingMode};this.getState=function(){return this.callInternal("jwGetState")};this.getVolume=function(){return this.callInternal("jwGetVolume")};this.getWidth=function(){return this.callInternal("jwGetWidth")};this.setFullscreen=function(e){if(!c.utils.exists(e)){this.callInternal("jwSetFullscreen",!this.callInternal("jwGetFullscreen"))}else{this.callInternal("jwSetFullscreen",e)}return this};this.setMute=function(e){if(!c.utils.exists(e)){this.callInternal("jwSetMute",!this.callInternal("jwGetMute"))}else{this.callInternal("jwSetMute",e)}return this};this.lock=function(){return this};this.unlock=function(){return this};this.load=function(e){this.callInternal("jwLoad",e);return this};this.playlistItem=function(e){this.callInternal("jwPlaylistItem",e);return this};this.playlistPrev=function(){this.callInternal("jwPlaylistPrev");return this};this.playlistNext=function(){this.callInternal("jwPlaylistNext");return this};this.resize=function(f,g){if(this.renderingMode=="html5"){A.jwResize(f,g)}else{this.container.width=f;this.container.height=g;var e=document.getElementById(this.id+"_wrapper");if(e){e.style.width=f+"px";e.style.height=g+"px"}}return this};this.play=function(e){if(typeof e=="undefined"){e=this.getState();if(e==c.api.events.state.PLAYING||e==c.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPlay",e)}return this};this.pause=function(e){if(typeof e=="undefined"){e=this.getState();if(e==c.api.events.state.PLAYING||e==c.api.events.state.BUFFERING){this.callInternal("jwPause")}else{this.callInternal("jwPlay")}}else{this.callInternal("jwPause",e)}return this};this.stop=function(){this.callInternal("jwStop");return this};this.seek=function(e){this.callInternal("jwSeek",e);return this};this.setVolume=function(e){this.callInternal("jwSetVolume",e);return this};this.onBufferChange=function(e){return this.eventListener(c.api.events.JWPLAYER_MEDIA_BUFFER,e)};this.onBufferFull=function(e){return this.eventListener(c.api.events.JWPLAYER_MEDIA_BUFFER_FULL,e)};this.onError=function(e){return this.eventListener(c.api.events.JWPLAYER_ERROR,e)};this.onFullscreen=function(e){return this.eventListener(c.api.events.JWPLAYER_FULLSCREEN,e)};this.onMeta=function(e){return this.eventListener(c.api.events.JWPLAYER_MEDIA_META,e)};this.onMute=function(e){return this.eventListener(c.api.events.JWPLAYER_MEDIA_MUTE,e)};this.onPlaylist=function(e){return this.eventListener(c.api.events.JWPLAYER_PLAYLIST_LOADED,e)};this.onPlaylistItem=function(e){return this.eventListener(c.api.events.JWPLAYER_PLAYLIST_ITEM,e)};this.onReady=function(e){return this.eventListener(c.api.events.API_READY,e)};this.onResize=function(e){return this.eventListener(c.api.events.JWPLAYER_RESIZE,e)};this.onComplete=function(e){return this.eventListener(c.api.events.JWPLAYER_MEDIA_COMPLETE,e)};this.onSeek=function(e){return this.eventListener(c.api.events.JWPLAYER_MEDIA_SEEK,e)};this.onTime=function(e){return this.eventListener(c.api.events.JWPLAYER_MEDIA_TIME,e)};this.onVolume=function(e){return this.eventListener(c.api.events.JWPLAYER_MEDIA_VOLUME,e)};this.onBuffer=function(e){return this.stateListener(c.api.events.state.BUFFERING,e)};this.onPause=function(e){return this.stateListener(c.api.events.state.PAUSED,e)};this.onPlay=function(e){return this.stateListener(c.api.events.state.PLAYING,e)};this.onIdle=function(e){return this.stateListener(c.api.events.state.IDLE,e)};this.remove=function(){v={};z=[];if(c.utils.getOuterHTML(this.container)!=t){c.api.destroyPlayer(this.id,t)}};this.setup=function(f){if(c.embed){var g=this.id;this.remove();var e=c(g);e.config=f;return new c.embed(e)}return this};this.registerPlugin=function(e,f,g){c.plugins.registerPlugin(e,f,g)};this.setPlayer=function(f,e){A=f;this.renderingMode=e};this.stateListener=function(f,e){if(!G[f]){G[f]=[];this.eventListener(c.api.events.JWPLAYER_PLAYER_STATE,B(f))}G[f].push(e);return this};this.detachMedia=function(){if(this.renderingMode=="html5"){return this.callInternal("jwDetachMedia")}};this.attachMedia=function(){if(this.renderingMode=="html5"){return this.callInternal("jwAttachMedia")}};function B(e){return function(h){var j=h.newstate,f=h.oldstate;if(j==e){var g=G[j];if(g){for(var k=0;k<g.length;k++){if(typeof g[k]=="function"){g[k].call(this,{oldstate:f,newstate:j})}}}}}}this.componentListener=function(g,f,e){if(!b[g]){b[g]={}}if(!b[g][f]){b[g][f]=[];this.eventListener(f,w(g,f))}b[g][f].push(e);return this};function w(f,e){return function(h){if(f==h.component){var j=b[f][e];if(j){for(var g=0;g<j.length;g++){if(typeof j[g]=="function"){j[g].call(this,h)}}}}}}this.addInternalListener=function(f,e){f.jwAddEventListener(e,'function(dat) { jwplayer("'+this.id+'").dispatchEvent("'+e+'", dat); }')};this.eventListener=function(f,e){if(!v[f]){v[f]=[];if(A&&x){this.addInternalListener(A,f)}}v[f].push(e);return this};this.dispatchEvent=function(e){if(v[e]){var f=C(e,arguments[1]);for(var g=0;g<v[e].length;g++){if(typeof v[e][g]=="function"){v[e][g].call(this,f)}}}};function C(g,j){var e=c.utils.extend({},j);if(g==c.api.events.JWPLAYER_FULLSCREEN&&!e.fullscreen){e.fullscreen=e.message=="true"?true:false;delete e.message}else{if(typeof e.data=="object"){e=c.utils.extend(e,e.data);delete e.data}}var h=["position","duration","offset"];for(var f in h){if(e[h[f]]){e[h[f]]=Math.round(e[h[f]]*1000)/1000}}return e}this.callInternal=function(e,f){if(x){if(typeof A!="undefined"&&typeof A[e]=="function"){if(c.utils.exists(f)){return(A[e])(f)}else{return(A[e])()}}return null}else{z.push({method:e,parameters:f})}};this.playerReady=function(e){x=true;if(!A){this.setPlayer(document.getElementById(e.id))}this.container=document.getElementById(this.id);for(var g in v){this.addInternalListener(A,g)}this.eventListener(c.api.events.JWPLAYER_PLAYLIST_ITEM,function(h){a={}});this.eventListener(c.api.events.JWPLAYER_MEDIA_META,function(h){c.utils.extend(a,h.metadata)});this.dispatchEvent(c.api.events.API_READY);while(z.length>0){var f=z.shift();this.callInternal(f.method,f.parameters)}};this.getItemMeta=function(){return a};this.getCurrentItem=function(){return this.callInternal("jwGetPlaylistIndex")};function u(g,e,f){var j=[];if(!e){e=0}if(!f){f=g.length-1}for(var h=e;h<=f;h++){j.push(g[h])}return j}return this};c.api.selectPlayer=function(b){var f;if(!c.utils.exists(b)){b=0}if(b.nodeType){f=b}else{if(typeof b=="string"){f=document.getElementById(b)}}if(f){var a=c.api.playerById(f.id);if(a){return a}else{return c.api.addPlayer(new c.api(f))}}else{if(typeof b=="number"){return c.getPlayers()[b]}}return null};c.api.events={API_READY:"jwplayerAPIReady",JWPLAYER_READY:"jwplayerReady",JWPLAYER_FULLSCREEN:"jwplayerFullscreen",JWPLAYER_RESIZE:"jwplayerResize",JWPLAYER_ERROR:"jwplayerError",JWPLAYER_COMPONENT_SHOW:"jwplayerComponentShow",JWPLAYER_COMPONENT_HIDE:"jwplayerComponentHide",JWPLAYER_MEDIA_BUFFER:"jwplayerMediaBuffer",JWPLAYER_MEDIA_BUFFER_FULL:"jwplayerMediaBufferFull",JWPLAYER_MEDIA_ERROR:"jwplayerMediaError",JWPLAYER_MEDIA_LOADED:"jwplayerMediaLoaded",JWPLAYER_MEDIA_COMPLETE:"jwplayerMediaComplete",JWPLAYER_MEDIA_SEEK:"jwplayerMediaSeek",JWPLAYER_MEDIA_TIME:"jwplayerMediaTime",JWPLAYER_MEDIA_VOLUME:"jwplayerMediaVolume",JWPLAYER_MEDIA_META:"jwplayerMediaMeta",JWPLAYER_MEDIA_MUTE:"jwplayerMediaMute",JWPLAYER_PLAYER_STATE:"jwplayerPlayerState",JWPLAYER_PLAYLIST_LOADED:"jwplayerPlaylistLoaded",JWPLAYER_PLAYLIST_ITEM:"jwplayerPlaylistItem"};c.api.events.state={BUFFERING:"BUFFERING",IDLE:"IDLE",PAUSED:"PAUSED",PLAYING:"PLAYING"};c.api.playerById=function(a){for(var b=0;b<d.length;b++){if(d[b].id==a){return d[b]}}return null};c.api.addPlayer=function(b){for(var a=0;a<d.length;a++){if(d[a]==b){return b}}d.push(b);return b};c.api.destroyPlayer=function(k,n){var l=-1;for(var a=0;a<d.length;a++){if(d[a].id==k){l=a;continue}}if(l>=0){var o=document.getElementById(d[l].id);if(document.getElementById(d[l].id+"_wrapper")){o=document.getElementById(d[l].id+"_wrapper")}if(o){if(n){c.utils.setOuterHTML(o,n)}else{var b=document.createElement("div");var m=o.id;if(o.id.indexOf("_wrapper")==o.id.length-8){newID=o.id.substring(0,o.id.length-8)}b.setAttribute("id",m);o.parentNode.replaceChild(b,o)}}d.splice(l,1)}return null};c.getPlayers=function(){return d.slice(0)}})(jwplayer);var _userPlayerReady=(typeof playerReady=="function")?playerReady:undefined;playerReady=function(c){var d=jwplayer.api.playerById(c.id);if(d){d.playerReady(c)}else{jwplayer.api.selectPlayer(c.id).playerReady(c)}if(_userPlayerReady){_userPlayerReady.call(this,c)}};(function(e){var f=e.utils;e.embed=function(c){var a={width:400,height:300,components:{controlbar:{position:"over"}}};var l=f.mediaparser.parseMedia(c.container);var m=new e.embed.config(f.extend(a,l,c.config),this);var b=e.plugins.loadPlugins(c.id,m.plugins);function o(j,g){for(var h in g){if(typeof j[h]=="function"){(j[h]).call(j,g[h])}}}function n(){if(b.getStatus()==f.loaderstatus.COMPLETE){for(var u=0;u<m.modes.length;u++){if(m.modes[u].type&&e.embed[m.modes[u].type]){var j=m.modes[u].config;var x=m;if(j){x=f.extend(f.clone(m),j);var y=["file","levels","playlist"];for(var v=0;v<y.length;v++){var h=y[v];if(f.exists(j[h])){for(var w=0;w<y.length;w++){if(w!=v){var k=y[w];if(f.exists(x[k])&&!f.exists(j[k])){delete x[k]}}}}}}var g=new e.embed[m.modes[u].type](document.getElementById(c.id),m.modes[u],x,b,c);if(g.supportsConfig()){g.embed();o(c,m.events);return c}}}f.log("No suitable players found");new e.embed.logo(f.extend({hide:true},m.components.logo),"none",c.id)}}b.addEventListener(e.events.COMPLETE,n);b.addEventListener(e.events.ERROR,n);b.load();return c};function d(){if(!document.body){return setTimeout(d,15)}var c=f.selectors.getElementsByTagAndClass("video","jwplayer");for(var b=0;b<c.length;b++){var a=c[b];if(a.id==""){a.id="jwplayer_"+Math.round(Math.random()*100000)}e(a.id).setup({})}}d()})(jwplayer);(function(o){function l(){return[{type:"flash",src:"/jwplayer/player.swf"},{type:"html5"},{type:"download"}]}var s={players:"modes",autoplay:"autostart"};function r(d){var a=d.toLowerCase();var b=["left","right","top","bottom"];for(var c=0;c<b.length;c++){if(a==b[c]){return true}}return false}function q(a){var b=false;b=(a instanceof Array)||(typeof a=="object"&&!a.position&&!a.size);return b}function k(a){if(typeof a=="string"){if(parseInt(a).toString()==a||a.toLowerCase().indexOf("px")>-1){return parseInt(a)}}return a}var m=["playlist","dock","controlbar","logo","display"];function n(c){var e={};switch(o.utils.typeOf(c.plugins)){case"object":for(var a in c.plugins){e[o.utils.getPluginName(a)]=a}break;case"string":var d=c.plugins.split(",");for(var b=0;b<d.length;b++){e[o.utils.getPluginName(d[b])]=d[b]}break}return e}function p(e,f,a,c){if(o.utils.typeOf(e[f])!="object"){e[f]={}}var b=e[f][a];if(o.utils.typeOf(b)!="object"){e[f][a]=b={}}if(c){if(f=="plugins"){var d=o.utils.getPluginName(a);b[c]=e[d+"."+c];delete e[d+"."+c]}else{b[c]=e[a+"."+c];delete e[a+"."+c]}}}o.embed.deserialize=function(b){var a=n(b);for(var c in a){p(b,"plugins",a[c])}for(var d in b){if(d.indexOf(".")>-1){var e=d.split(".");var f=e[0];var d=e[1];if(o.utils.isInArray(m,f)){p(b,"components",f,d)}else{if(a[f]){p(b,"plugins",a[f],d)}}}}return b};o.embed.config=function(h,j){var v=o.utils.extend({},h);var a;if(q(v.playlist)){a=v.playlist;delete v.playlist}v=o.embed.deserialize(v);v.height=k(v.height);v.width=k(v.width);if(typeof v.plugins=="string"){var g=v.plugins.split(",");if(typeof v.plugins!="object"){v.plugins={}}for(var c=0;c<g.length;c++){var b=o.utils.getPluginName(g[c]);if(typeof v[b]=="object"){v.plugins[g[c]]=v[b];delete v[b]}else{v.plugins[g[c]]={}}}}for(var w=0;w<m.length;w++){var d=m[w];if(o.utils.exists(v[d])){if(typeof v[d]!="object"){if(!v.components[d]){v.components[d]={}}if(d=="logo"){v.components[d].file=v[d]}else{v.components[d].position=v[d]}delete v[d]}else{if(!v.components[d]){v.components[d]={}}o.utils.extend(v.components[d],v[d]);delete v[d]}}if(typeof v[d+"size"]!="undefined"){if(!v.components[d]){v.components[d]={}}v.components[d].size=v[d+"size"];delete v[d+"size"]}}if(typeof v.icons!="undefined"){if(!v.components.display){v.components.display={}}v.components.display.icons=v.icons;delete v.icons}for(var e in s){if(v[e]){if(!v[s[e]]){v[s[e]]=v[e]}delete v[e]}}var f;if(v.flashplayer&&!v.modes){f=l();f[0].src=v.flashplayer;delete v.flashplayer}else{if(v.modes){if(typeof v.modes=="string"){f=l();f[0].src=v.modes}else{if(v.modes instanceof Array){f=v.modes}else{if(typeof v.modes=="object"&&v.modes.type){f=[v.modes]}}}delete v.modes}else{f=l()}}v.modes=f;if(a){v.playlist=a}return v}})(jwplayer);(function(b){b.embed.download=function(m,h,a,l,j){this.embed=function(){var x=b.utils.extend({},a);var d={};var y=a.width?a.width:480;if(typeof y!="number"){y=parseInt(y,10)}var v=a.height?a.height:320;if(typeof v!="number"){v=parseInt(v,10)}var A,f,g;var C={};if(a.playlist&&a.playlist.length){C.file=a.playlist[0].file;f=a.playlist[0].image;C.levels=a.playlist[0].levels}else{C.file=a.file;f=a.image;C.levels=a.levels}if(C.file){A=C.file}else{if(C.levels&&C.levels.length){A=C.levels[0].file}}g=A?"pointer":"auto";var w={display:{style:{cursor:g,width:y,height:v,backgroundColor:"#000",position:"relative",textDecoration:"none",border:"none",display:"block"}},display_icon:{style:{cursor:g,position:"absolute",display:A?"block":"none",top:0,left:0,border:0,margin:0,padding:0,zIndex:3,width:50,height:50,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAALdJREFUeNrs18ENgjAYhmFouDOCcQJGcARHgE10BDcgTOIosAGwQOuPwaQeuFRi2p/3Sb6EC5L3QCxZBgAAAOCorLW1zMn65TrlkH4NcV7QNcUQt7Gn7KIhxA+qNIR81spOGkL8oFJDyLJRdosqKDDkK+iX5+d7huzwM40xptMQMkjIOeRGo+VkEVvIPfTGIpKASfYIfT9iCHkHrBEzf4gcUQ56aEzuGK/mw0rHpy4AAACAf3kJMACBxjAQNRckhwAAAABJRU5ErkJggg==)"}},display_iconBackground:{style:{cursor:g,position:"absolute",display:A?"block":"none",top:((v-50)/2),left:((y-50)/2),border:0,width:50,height:50,margin:0,padding:0,zIndex:2,backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAEpJREFUeNrszwENADAIA7DhX8ENoBMZ5KR10EryckCJiIiIiIiIiIiIiIiIiIiIiIh8GmkRERERERERERERERERERERERGRHSPAAPlXH1phYpYaAAAAAElFTkSuQmCC)"}},display_image:{style:{width:y,height:v,display:f?"block":"none",position:"absolute",cursor:g,left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1,border:"none"}}};var z=function(p,n,q){var o=document.createElement(p);if(q){o.id=q}else{o.id=m.id+"_jwplayer_"+n}b.utils.css(o,w[n].style);return o};d.display=z("a","display",m.id);if(A){d.display.setAttribute("href",b.utils.getAbsolutePath(A))}d.display_image=z("img","display_image");d.display_image.setAttribute("alt","Click to download...");if(f){d.display_image.setAttribute("src",b.utils.getAbsolutePath(f))}if(true){d.display_icon=z("div","display_icon");d.display_iconBackground=z("div","display_iconBackground");d.display.appendChild(d.display_image);d.display_iconBackground.appendChild(d.display_icon);d.display.appendChild(d.display_iconBackground)}_css=b.utils.css;_hide=function(n){_css(n,{display:"none"})};function c(n){_imageWidth=d.display_image.naturalWidth;_imageHeight=d.display_image.naturalHeight;B()}function B(){b.utils.stretch(b.utils.stretching.UNIFORM,d.display_image,y,v,_imageWidth,_imageHeight)}d.display_image.onerror=function(n){_hide(d.display_image)};d.display_image.onload=c;m.parentNode.replaceChild(d.display,m);var e=(a.plugins&&a.plugins.logo)?a.plugins.logo:{};d.display.appendChild(new b.embed.logo(a.components.logo,"download",m.id));j.container=document.getElementById(j.id);j.setPlayer(d.display,"download")};this.supportsConfig=function(){if(a){var c=b.utils.getFirstPlaylistItemFromConfig(a);if(typeof c.file=="undefined"&&typeof c.levels=="undefined"){return true}else{if(c.file){return k(c.file,c.provider,c.playlistfile)}else{if(c.levels&&c.levels.length){for(var d=0;d<c.levels.length;d++){if(c.levels[d].file&&k(c.levels[d].file,c.provider,c.playlistfile)){return true}}}}}}else{return true}};function k(f,d,g){if(g){return false}var e=["image","sound","youtube","http"];if(d&&(e.toString().indexOf(d)>-1)){return true}if(!d||(d&&d=="video")){var c=b.utils.extension(f);if(c&&b.utils.extensionmap[c]){return true}}return false}}})(jwplayer);(function(b){b.embed.flash=function(s,r,n,t,p){function a(e,f,d){var c=document.createElement("param");c.setAttribute("name",f);c.setAttribute("value",d);e.appendChild(c)}function o(d,c,e){return function(h){if(e){document.getElementById(p.id+"_wrapper").appendChild(c)}var f=document.getElementById(p.id).getPluginConfig("display");d.resize(f.width,f.height);var g={left:f.x,top:f.y};b.utils.css(c,g)}}function u(e){if(!e){return{}}var c={};for(var f in e){var g=e[f];for(var d in g){c[f+"."+d]=g[d]}}return c}function q(e,f){if(e[f]){var c=e[f];for(var g in c){var h=c[g];if(typeof h=="string"){if(!e[g]){e[g]=h}}else{for(var d in h){if(!e[g+"."+d]){e[g+"."+d]=h[d]}}}}delete e[f]}}function w(f){if(!f){return{}}var c={},d=[];for(var j in f){var g=b.utils.getPluginName(j);var h=f[j];d.push(j);for(var e in h){c[g+"."+e]=h[e]}}c.plugins=d.join(",");return c}function v(c){var e=c.netstreambasepath?"":"netstreambasepath="+encodeURIComponent(window.location.href.split("#")[0])+"&";for(var d in c){if(typeof(c[d])=="object"){e+=d+"="+encodeURIComponent("[[JSON]]"+b.utils.strings.jsonToString(c[d]))+"&"}else{e+=d+"="+encodeURIComponent(c[d])+"&"}}return e.substring(0,e.length-1)}this.embed=function(){n.id=p.id;var h;var d=b.utils.extend({},n);var g=d.width;var k=d.height;if(s.id+"_wrapper"==s.parentNode.id){h=document.getElementById(s.id+"_wrapper")}else{h=document.createElement("div");h.id=s.id+"_wrapper";b.utils.wrap(s,h);b.utils.css(h,{position:"relative",width:g,height:k})}var f=t.setupPlugins(p,d,o);if(f.length>0){b.utils.extend(d,w(f.plugins))}else{delete d.plugins}var c=["height","width","modes","events"];for(var m=0;m<c.length;m++){delete d[c[m]]}var e="opaque";if(d.wmode){e=d.wmode}q(d,"components");q(d,"providers");if(typeof d["dock.position"]!="undefined"){if(d["dock.position"].toString().toLowerCase()=="false"){d.dock=d["dock.position"];delete d["dock.position"]}}var j="#000000";var z;if(b.utils.isIE()){var l='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" bgcolor="'+j+'" width="100%" height="100%" id="'+s.id+'" name="'+s.id+'" tabindex=0"">';l+='<param name="movie" value="'+r.src+'">';l+='<param name="allowfullscreen" value="true">';l+='<param name="allowscriptaccess" value="always">';l+='<param name="seamlesstabbing" value="true">';l+='<param name="wmode" value="'+e+'">';l+='<param name="flashvars" value="'+v(d)+'">';l+="</object>";b.utils.setOuterHTML(s,l);z=document.getElementById(s.id)}else{var A=document.createElement("object");A.setAttribute("type","application/x-shockwave-flash");A.setAttribute("data",r.src);A.setAttribute("width","100%");A.setAttribute("height","100%");A.setAttribute("bgcolor","#000000");A.setAttribute("id",s.id);A.setAttribute("name",s.id);A.setAttribute("tabindex",0);a(A,"allowfullscreen","true");a(A,"allowscriptaccess","always");a(A,"seamlesstabbing","true");a(A,"wmode",e);a(A,"flashvars",v(d));s.parentNode.replaceChild(A,s);z=A}p.container=z;p.setPlayer(z,"flash")};this.supportsConfig=function(){if(b.utils.hasFlash()){if(n){var c=b.utils.getFirstPlaylistItemFromConfig(n);if(typeof c.file=="undefined"&&typeof c.levels=="undefined"){return true}else{if(c.file){return flashCanPlay(c.file,c.provider)}else{if(c.levels&&c.levels.length){for(var d=0;d<c.levels.length;d++){if(c.levels[d].file&&flashCanPlay(c.levels[d].file,c.provider)){return true}}}}}}else{return true}}return false};flashCanPlay=function(f,d){var e=["video","http","sound","image"];if(d&&(e.toString().indexOf(d<0))){return true}var c=b.utils.extension(f);if(!c){return true}if(b.utils.exists(b.utils.extensionmap[c])&&!b.utils.exists(b.utils.extensionmap[c].flash)){return false}return true}}})(jwplayer);(function(b){b.embed.html5=function(m,h,a,l,j){function k(d,c,e){return function(g){var f=document.getElementById(m.id+"_displayarea");if(e){f.appendChild(c)}d.resize(f.clientWidth,f.clientHeight);c.left=f.style.left;c.top=f.style.top}}this.embed=function(){if(b.html5){l.setupPlugins(j,a,k);m.innerHTML="";var e=b.utils.extend({screencolor:"0x000000"},a);var f=["plugins","modes","events"];for(var d=0;d<f.length;d++){delete e[f[d]]}if(e.levels&&!e.sources){e.sources=a.levels}if(e.skin&&e.skin.toLowerCase().indexOf(".zip")>0){e.skin=e.skin.replace(/\.zip/i,".xml")}var c=new (b.html5(m)).setup(e);j.container=document.getElementById(j.id);j.setPlayer(c,"html5")}else{return null}};this.supportsConfig=function(){if(!!b.vid.canPlayType){if(a){var c=b.utils.getFirstPlaylistItemFromConfig(a);if(typeof c.file=="undefined"&&typeof c.levels=="undefined"){return true}else{if(c.file){return html5CanPlay(b.vid,c.file,c.provider,c.playlistfile)}else{if(c.levels&&c.levels.length){for(var d=0;d<c.levels.length;d++){if(c.levels[d].file&&html5CanPlay(b.vid,c.levels[d].file,c.provider,c.playlistfile)){return true}}}}}}else{return true}}return false};html5CanPlay=function(e,f,d,g){if(g){return false}if(d&&d=="youtube"){return true}if(d&&d!="video"&&d!="http"&&d!="sound"){return false}var c=b.utils.extension(f);if(!b.utils.exists(c)||!b.utils.exists(b.utils.extensionmap[c])){return true}if(!b.utils.exists(b.utils.extensionmap[c].html5)){return false}if(b.utils.isLegacyAndroid()&&c.match(/m4v|mp4/)){return true}return browserCanPlay(e,b.utils.extensionmap[c].html5)};browserCanPlay=function(c,d){if(!d){return true}if(c.canPlayType(d)){return true}else{if(d=="audio/mp3"&&navigator.userAgent.match(/safari/i)){return c.canPlayType("audio/mpeg")}else{return false}}}}})(jwplayer);(function(b){b.embed.logo=function(s,t,A){var v={prefix:"http://l.longtailvideo.com/"+t+"/",file:"",link:"",margin:8,out:0.5,over:1,timeout:5,hide:false,position:"bottom-left"};_css=b.utils.css;var C;var w;u();function u(){q();B();y()}function q(){if(v.prefix){var c=b.version.split(/\W/).splice(0,2).join("/");if(v.prefix.indexOf(c)<0){v.prefix+=c+"/"}}w=b.utils.extend({},v,s)}function a(){var c={border:"none",textDecoration:"none",position:"absolute",cursor:"pointer",zIndex:10};c.display=w.hide?"none":"block";var d=w.position.toLowerCase().split("-");for(var e in d){c[d[e]]=w.margin}return c}function B(){C=document.createElement("img");C.id=A+"_jwplayer_logo";C.style.display="none";C.onload=function(c){_css(C,a());z()};if(!w.file){return}if(w.file.indexOf("http://")===0){C.src=w.file}else{C.src=w.prefix+w.file}}if(!w.file){return}function y(){if(w.link){C.onmouseover=x;C.onmouseout=z;C.onclick=r}else{this.mouseEnabled=false}}function r(c){if(typeof c!="undefined"){c.preventDefault();c.stopPropagation()}if(w.link){window.open(w.link,"_blank")}return}function z(c){if(w.link){C.style.opacity=w.out}return}function x(c){if(w.hide){C.style.opacity=w.over}return}return C}})(jwplayer);(function(b){b.html5=function(a){var d=a;this.setup=function(c){b.utils.extend(this,new b.html5.api(d,c));return this};return this}})(jwplayer);(function(e){var f=e.utils;var d=f.css;e.html5.view=function(R,T,ah){var J=R;var aa=T;var b=ah;var c;var ag;var L;var P;var I;var X;var O;var V=false;var U,Y;function W(){c=document.createElement("div");c.id=aa.id;c.className=aa.className;_videowrapper=document.createElement("div");_videowrapper.id=c.id+"_video_wrapper";aa.id=c.id+"_video";d(c,{position:"relative",height:b.height,width:b.width,padding:0,backgroundColor:g(),zIndex:0});function g(){if(J.skin.getComponentSettings("display")&&J.skin.getComponentSettings("display").backgroundcolor){return J.skin.getComponentSettings("display").backgroundcolor}return parseInt("000000",16)}d(aa,{width:"100%",height:"100%",top:0,left:0,zIndex:1,margin:"auto",display:"block"});d(_videowrapper,{overflow:"hidden",position:"absolute",top:0,left:0,bottom:0,right:0});f.wrap(aa,c);f.wrap(aa,_videowrapper);P=document.createElement("div");P.id=c.id+"_displayarea";c.appendChild(P)}function ad(){for(var h=0;h<b.plugins.order.length;h++){var g=b.plugins.order[h];if(f.exists(b.plugins.object[g].getDisplayElement)){b.plugins.object[g].height=f.parseDimension(b.plugins.object[g].getDisplayElement().style.height);b.plugins.object[g].width=f.parseDimension(b.plugins.object[g].getDisplayElement().style.width);b.plugins.config[g].currentPosition=b.plugins.config[g].position}}K()}function ab(g){d(P,{display:(b.getMedia()&&b.getMedia().hasChrome()&&g.newstate!=e.api.events.state.IDLE)?"none":"block"})}function K(j){var g=b.getMedia()?b.getMedia().getDisplayElement():null;if(f.exists(g)){if(O!=g){if(O&&O.parentNode){O.parentNode.replaceChild(g,O)}O=g}for(var k=0;k<b.plugins.order.length;k++){var h=b.plugins.order[k];if(f.exists(b.plugins.object[h].getDisplayElement)){b.plugins.config[h].currentPosition=b.plugins.config[h].position}}}ae(b.width,b.height)}this.setup=function(){if(b&&b.getMedia()){aa=b.getMedia().getDisplayElement()}W();ad();J.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE,ab);J.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_LOADED,K);J.jwAddEventListener(e.api.events.JWPLAYER_MEDIA_META,function(){a()});var g;if(f.exists(window.onresize)){g=window.onresize}window.onresize=function(k){if(f.exists(g)){try{g(k)}catch(h){}}if(J.jwGetFullscreen()){if(!S()){var j=f.getBoundingClientRect(document.body);b.width=Math.abs(j.left)+Math.abs(j.right);b.height=window.innerHeight;ae(b.width,b.height)}}else{ae(b.width,b.height)}}};function af(g){switch(g.keyCode){case 27:if(J.jwGetFullscreen()){J.jwSetFullscreen(false)}break;case 32:if(J.jwGetState()!=e.api.events.state.IDLE&&J.jwGetState()!=e.api.events.state.PAUSED){J.jwPause()}else{J.jwPlay()}break}}function ae(g,k){if(c.style.display=="none"){return}var h=[].concat(b.plugins.order);h.reverse();I=h.length+2;if(S()){try{if(b.fullscreen&&!b.getMedia().getDisplayElement().webkitDisplayingFullscreen){b.fullscreen=false}}catch(m){}}if(!b.fullscreen){ag=g;L=k;if(typeof g=="string"&&g.indexOf("%")>0){ag=f.getElementWidth(f.parentNode(c))*parseInt(g.replace("%"),"")/100}else{ag=g}if(typeof k=="string"&&k.indexOf("%")>0){L=f.getElementHeight(f.parentNode(c))*parseInt(k.replace("%"),"")/100}else{L=k}d(P,{top:0,bottom:0,left:0,right:0,width:ag,height:L,position:"absolute"});d(c,{height:L,width:ag});var j=Z(N,h);if(j.length>0){I+=j.length;var l=j.indexOf("playlist"),n=j.indexOf("controlbar");if(l>=0&&n>=0){j[l]=j.splice(n,1,j[l])[0]}Z(ac,j,true)}U=f.getElementWidth(P);Y=f.getElementHeight(P)}else{if(!S()){Z(M,h,true)}}a()}function Z(h,m,l){var k=[];for(var n=0;n<m.length;n++){var j=m[n];if(f.exists(b.plugins.object[j].getDisplayElement)){if(b.plugins.config[j].currentPosition!=e.html5.view.positions.NONE){var p=h(j,I--);if(!p){k.push(j)}else{var o=p.width;var g=p.height;if(l){delete p.width;delete p.height}d(b.plugins.object[j].getDisplayElement(),p);b.plugins.object[j].resize(o,g)}}else{d(b.plugins.object[j].getDisplayElement(),{display:"none"})}}}return k}function N(h,g){if(f.exists(b.plugins.object[h].getDisplayElement)){if(b.plugins.config[h].position&&Q(b.plugins.config[h].position)){if(!f.exists(b.plugins.object[h].getDisplayElement().parentNode)){c.appendChild(b.plugins.object[h].getDisplayElement())}var j=ai(h);j.zIndex=g;return j}}return false}function ac(h,g){if(!f.exists(b.plugins.object[h].getDisplayElement().parentNode)){P.appendChild(b.plugins.object[h].getDisplayElement())}return{position:"absolute",width:(f.getElementWidth(P)-f.parseDimension(P.style.left)-f.parseDimension(P.style.right)),height:(f.getElementHeight(P)-f.parseDimension(P.style.top)-f.parseDimension(P.style.bottom)),zIndex:g}}function M(h,g){return{position:"fixed",width:b.width,height:b.height,zIndex:g}}function a(){if(!f.exists(b.getMedia())){return}P.style.position="absolute";var g=b.getMedia().getDisplayElement();if(g&&g.tagName.toLowerCase()=="video"){g.style.position="absolute";if(g.parentNode){g.parentNode.style.left=P.style.left;g.parentNode.style.top=P.style.top}if(b.fullscreen&&J.jwGetStretching()==e.utils.stretching.EXACTFIT&&!f.isMobile()){var j=document.createElement("div");f.stretch(e.utils.stretching.UNIFORM,j,f.getElementWidth(P),f.getElementHeight(P),U,Y);f.stretch(e.utils.stretching.EXACTFIT,g,f.parseDimension(j.style.width),f.parseDimension(j.style.height),g.videoWidth?g.videoWidth:400,g.videoHeight?g.videoHeight:300);d(g,{left:j.style.left,top:j.style.top})}else{f.stretch(J.jwGetStretching(),g,f.getElementWidth(P),f.getElementHeight(P),g.videoWidth?g.videoWidth:400,g.videoHeight?g.videoHeight:300)}}else{var h=b.plugins.object.display.getDisplayElement();if(h){b.getMedia().resize(f.parseDimension(h.style.width),f.parseDimension(h.style.height))}else{b.getMedia().resize(f.parseDimension(P.style.width),f.parseDimension(P.style.height))}}}function ai(h){var g={position:"absolute",margin:0,padding:0,top:null};var j=b.plugins.config[h].currentPosition.toLowerCase();switch(j.toUpperCase()){case e.html5.view.positions.TOP:g.top=f.parseDimension(P.style.top);g.left=f.parseDimension(P.style.left);g.width=f.getElementWidth(P)-f.parseDimension(P.style.left)-f.parseDimension(P.style.right);g.height=b.plugins.object[h].height;P.style[j]=f.parseDimension(P.style[j])+b.plugins.object[h].height+"px";P.style.height=f.getElementHeight(P)-g.height+"px";break;case e.html5.view.positions.RIGHT:g.top=f.parseDimension(P.style.top);g.right=f.parseDimension(P.style.right);g.width=b.plugins.object[h].width;g.height=f.getElementHeight(P)-f.parseDimension(P.style.top)-f.parseDimension(P.style.bottom);P.style.width=f.getElementWidth(P)-g.width+"px";break;case e.html5.view.positions.BOTTOM:g.bottom=f.parseDimension(P.style.bottom);g.left=f.parseDimension(P.style.left);g.width=f.getElementWidth(P)-f.parseDimension(P.style.left)-f.parseDimension(P.style.right);g.height=b.plugins.object[h].height;P.style.height=f.getElementHeight(P)-g.height+"px";break;case e.html5.view.positions.LEFT:g.top=f.parseDimension(P.style.top);g.left=f.parseDimension(P.style.left);g.width=b.plugins.object[h].width;g.height=f.getElementHeight(P)-f.parseDimension(P.style.top)-f.parseDimension(P.style.bottom);P.style[j]=f.parseDimension(P.style[j])+b.plugins.object[h].width+"px";P.style.width=f.getElementWidth(P)-g.width+"px";break;default:break}return g}this.resize=ae;this.fullscreen=function(g){var l;try{l=b.getMedia().getDisplayElement()}catch(m){}if(S()&&l&&l.webkitSupportsFullscreen){if(g&&!l.webkitDisplayingFullscreen){try{f.transform(l);l.webkitEnterFullscreen()}catch(h){}}else{if(!g){a();if(l.webkitDisplayingFullscreen){try{l.webkitExitFullscreen()}catch(h){}}}}V=false}else{if(g){document.onkeydown=af;clearInterval(X);var j=f.getBoundingClientRect(document.body);b.width=Math.abs(j.left)+Math.abs(j.right);b.height=window.innerHeight;var k={position:"fixed",width:"100%",height:"100%",top:0,left:0,zIndex:2147483000};d(c,k);k.zIndex=1;if(b.getMedia()&&b.getMedia().getDisplayElement()){d(b.getMedia().getDisplayElement(),k)}k.zIndex=2;d(P,k);V=true}else{document.onkeydown="";b.width=ag;b.height=L;d(c,{position:"relative",height:b.height,width:b.width,zIndex:0});V=false}ae(b.width,b.height)}};function Q(g){return([e.html5.view.positions.TOP,e.html5.view.positions.RIGHT,e.html5.view.positions.BOTTOM,e.html5.view.positions.LEFT].toString().indexOf(g.toUpperCase())>-1)}function S(){if(J.jwGetState()!=e.api.events.state.IDLE&&!V&&(b.getMedia()&&b.getMedia().getDisplayElement()&&b.getMedia().getDisplayElement().webkitSupportsFullscreen)&&f.useNativeFullscreen()){return true}return false}};e.html5.view.positions={TOP:"TOP",RIGHT:"RIGHT",BOTTOM:"BOTTOM",LEFT:"LEFT",OVER:"OVER",NONE:"NONE"}})(jwplayer);(function(d){var c={backgroundcolor:"",margin:10,font:"Arial,sans-serif",fontsize:10,fontcolor:parseInt("000000",16),fontstyle:"normal",fontweight:"bold",buttoncolor:parseInt("ffffff",16),position:d.html5.view.positions.BOTTOM,idlehide:false,hideplaylistcontrols:false,layout:{left:{position:"left",elements:[{name:"play",type:"button"},{name:"divider",type:"divider"},{name:"prev",type:"button"},{name:"divider",type:"divider"},{name:"next",type:"button"},{name:"divider",type:"divider"},{name:"elapsed",type:"text"}]},center:{position:"center",elements:[{name:"time",type:"slider"}]},right:{position:"right",elements:[{name:"duration",type:"text"},{name:"blank",type:"button"},{name:"divider",type:"divider"},{name:"mute",type:"button"},{name:"volume",type:"slider"},{name:"divider",type:"divider"},{name:"fullscreen",type:"button"}]}}};_utils=d.utils;_css=_utils.css;_hide=function(a){_css(a,{display:"none"})};_show=function(a){_css(a,{display:"block"})};d.html5.controlbar=function(ba,am){window.controlbar=this;var bb=ba;var aP=_utils.extend({},c,bb.skin.getComponentSettings("controlbar"),am);if(aP.position==d.html5.view.positions.NONE||typeof d.html5.view.positions[aP.position]=="undefined"){return}if(_utils.mapLength(bb.skin.getComponentLayout("controlbar"))>0){aP.layout=bb.skin.getComponentLayout("controlbar")}var aM;var au;var aO;var aN;var a0="none";var be;var bc;var aL;var bf;var bg;var aX;var at={};var a6=false;var bj={};var aU;var bd=false;var a7;var bi;var ap=false;var aJ=false;var aH;var a=new d.html5.eventdispatcher();_utils.extend(this,a);function aB(){if(!aU){aU=bb.skin.getSkinElement("controlbar","background");if(!aU){aU={width:0,height:0,src:null}}}return aU}function aw(){aO=0;aN=0;au=0;if(!a6){var e={height:aB().height,backgroundColor:aP.backgroundcolor};aM=document.createElement("div");aM.id=bb.id+"_jwplayer_controlbar";_css(aM,e)}var f=(bb.skin.getSkinElement("controlbar","capLeft"));var g=(bb.skin.getSkinElement("controlbar","capRight"));if(f){aY("capLeft","left",false,aM)}aT("background",aM,{position:"absolute",height:aB().height,left:(f?f.width:0),zIndex:0},"img");if(aB().src){at.background.src=aB().src}aT("elements",aM,{position:"relative",height:aB().height,zIndex:1});if(g){aY("capRight","right",false,aM)}}this.getDisplayElement=function(){return aM};this.resize=function(e,g){ar();_utils.cancelAnimation(aM);bg=e;aX=g;if(aJ!=bb.jwGetFullscreen()){aJ=bb.jwGetFullscreen();bi=undefined}var f=aZ();aC({id:bb.id,duration:aL,position:bc});a1({id:bb.id,bufferPercent:bf});return f};this.show=function(){if(bd){bd=false;_show(aM);ao()}};this.hide=function(){if(!bd){bd=true;_hide(aM);aR()}};function a5(){var f=["timeSlider","volumeSlider","timeSliderRail","volumeSliderRail"];for(var e in f){var g=f[e];if(typeof at[g]!="undefined"){bj[g]=_utils.getBoundingClientRect(at[g])}}}var bh;function b(e){if(bd){return}clearTimeout(a7);if(aP.position==d.html5.view.positions.OVER||bb.jwGetFullscreen()){switch(bb.jwGetState()){case d.api.events.state.PAUSED:case d.api.events.state.IDLE:if(aM&&aM.style.opacity<1&&(!aP.idlehide||_utils.exists(e))){bh=false;setTimeout(function(){if(!bh){an()}},100)}if(aP.idlehide){a7=setTimeout(function(){aV()},2000)}break;default:bh=true;if(e){an()}a7=setTimeout(function(){aV()},2000);break}}else{an()}}function aV(){if(!bd){aR();if(aM.style.opacity==1){_utils.cancelAnimation(aM);_utils.fadeTo(aM,0,0.1,1,0)}}}function an(){if(!bd){ao();if(aM.style.opacity==0){_utils.cancelAnimation(aM);_utils.fadeTo(aM,1,0.1,0,0)}}}function aF(e){return function(){if(ap&&bi!=e){bi=e;a.sendEvent(e,{component:"controlbar",boundingRect:av()})}}}var ao=aF(d.api.events.JWPLAYER_COMPONENT_SHOW);var aR=aF(d.api.events.JWPLAYER_COMPONENT_HIDE);function av(){if(aP.position==d.html5.view.positions.OVER||bb.jwGetFullscreen()){return _utils.getDimensions(aM)}else{return{x:0,y:0,width:0,height:0}}}function aT(e,f,g,j){var h;if(!a6){if(!j){j="div"}h=document.createElement(j);at[e]=h;h.id=aM.id+"_"+e;f.appendChild(h)}else{h=document.getElementById(aM.id+"_"+e)}if(_utils.exists(g)){_css(h,g)}return h}function ax(){if(bb.jwGetHeight()<=40){aP.layout=_utils.clone(aP.layout);for(var e=0;e<aP.layout.left.elements.length;e++){if(aP.layout.left.elements[e].name=="fullscreen"){aP.layout.left.elements.splice(e,1)}}for(e=0;e<aP.layout.right.elements.length;e++){if(aP.layout.right.elements[e].name=="fullscreen"){aP.layout.right.elements.splice(e,1)}}a8()}aA(aP.layout.left);aA(aP.layout.center);aA(aP.layout.right)}function aA(f,j){var e=f.position=="right"?"right":"left";var g=_utils.extend([],f.elements);if(_utils.exists(j)){g.reverse()}var f=aT(f.position+"Group",at.elements,{"float":"left",styleFloat:"left",cssFloat:"left",height:"100%"});for(var h=0;h<g.length;h++){aQ(g[h],e,f)}}function az(){return au++}function aQ(k,h,f){var l,n,m,o,e;if(!f){f=at.elements}if(k.type=="divider"){aY("divider"+az(),h,true,f,undefined,k.width,k.element);return}switch(k.name){case"play":aY("playButton",h,false,f);aY("pauseButton",h,true,f);aq("playButton","jwPlay");aq("pauseButton","jwPause");break;case"prev":aY("prevButton",h,true,f);aq("prevButton","jwPlaylistPrev");break;case"stop":aY("stopButton",h,true,f);aq("stopButton","jwStop");break;case"next":aY("nextButton",h,true,f);aq("nextButton","jwPlaylistNext");break;case"elapsed":aY("elapsedText",h,true,f);break;case"time":n=!_utils.exists(bb.skin.getSkinElement("controlbar","timeSliderCapLeft"))?0:bb.skin.getSkinElement("controlbar","timeSliderCapLeft").width;m=!_utils.exists(bb.skin.getSkinElement("controlbar","timeSliderCapRight"))?0:bb.skin.getSkinElement("controlbar","timeSliderCapRight").width;l=h=="left"?n:m;e={height:aB().height,position:"relative","float":"left",styleFloat:"left",cssFloat:"left"};var j=aT("timeSlider",f,e);aY("timeSliderCapLeft",h,true,j,"relative");aY("timeSliderRail",h,false,j,"relative");aY("timeSliderBuffer",h,false,j,"absolute");aY("timeSliderProgress",h,false,j,"absolute");aY("timeSliderThumb",h,false,j,"absolute");aY("timeSliderCapRight",h,true,j,"relative");aW("time");break;case"fullscreen":aY("fullscreenButton",h,false,f);aY("normalscreenButton",h,true,f);aq("fullscreenButton","jwSetFullscreen",true);aq("normalscreenButton","jwSetFullscreen",false);break;case"volume":n=!_utils.exists(bb.skin.getSkinElement("controlbar","volumeSliderCapLeft"))?0:bb.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;m=!_utils.exists(bb.skin.getSkinElement("controlbar","volumeSliderCapRight"))?0:bb.skin.getSkinElement("controlbar","volumeSliderCapRight").width;l=h=="left"?n:m;o=bb.skin.getSkinElement("controlbar","volumeSliderRail").width+n+m;e={height:aB().height,position:"relative",width:o,"float":"left",styleFloat:"left",cssFloat:"left"};var g=aT("volumeSlider",f,e);aY("volumeSliderCapLeft",h,false,g,"relative");aY("volumeSliderRail",h,false,g,"relative");aY("volumeSliderProgress",h,false,g,"absolute");aY("volumeSliderThumb",h,false,g,"absolute");aY("volumeSliderCapRight",h,false,g,"relative");aW("volume");break;case"mute":aY("muteButton",h,false,f);aY("unmuteButton",h,true,f);aq("muteButton","jwSetMute",true);aq("unmuteButton","jwSetMute",false);break;case"duration":aY("durationText",h,true,f);break}}function aY(m,j,o,f,l,p,n){if(_utils.exists(bb.skin.getSkinElement("controlbar",m))||m.indexOf("Text")>0||m.indexOf("divider")===0){var k={height:"100%",position:l?l:"relative",display:"block","float":"left",styleFloat:"left",cssFloat:"left"};if((m.indexOf("next")===0||m.indexOf("prev")===0)&&(bb.jwGetPlaylist().length<2||aP.hideplaylistcontrols)){o=false;k.display="none"}var e;if(m.indexOf("Text")>0){m.innerhtml="00:00";k.font=aP.fontsize+"px/"+(aB().height+1)+"px "+aP.font;k.color=aP.fontcolor;k.textAlign="center";k.fontWeight=aP.fontweight;k.fontStyle=aP.fontstyle;k.cursor="default";e=14+3*aP.fontsize}else{if(m.indexOf("divider")===0){if(p){if(!isNaN(parseInt(p))){e=parseInt(p)}}else{if(n){var h=bb.skin.getSkinElement("controlbar",n);if(h){k.background="url("+h.src+") repeat-x center left";e=h.width}}else{k.background="url("+bb.skin.getSkinElement("controlbar","divider").src+") repeat-x center left";e=bb.skin.getSkinElement("controlbar","divider").width}}}else{k.background="url("+bb.skin.getSkinElement("controlbar",m).src+") repeat-x center left";e=bb.skin.getSkinElement("controlbar",m).width}}if(j=="left"){if(o){aO+=e}}else{if(j=="right"){if(o){aN+=e}}}if(_utils.typeOf(f)=="undefined"){f=at.elements}k.width=e;if(a6){_css(at[m],k)}else{var g=aT(m,f,k);if(_utils.exists(bb.skin.getSkinElement("controlbar",m+"Over"))){g.onmouseover=function(q){g.style.backgroundImage=["url(",bb.skin.getSkinElement("controlbar",m+"Over").src,")"].join("")};g.onmouseout=function(q){g.style.backgroundImage=["url(",bb.skin.getSkinElement("controlbar",m).src,")"].join("")}}if(m.indexOf("divider")==0){g.setAttribute("class","divider")}}}}function aK(){bb.jwAddEventListener(d.api.events.JWPLAYER_PLAYLIST_LOADED,aS);bb.jwAddEventListener(d.api.events.JWPLAYER_PLAYLIST_ITEM,a3);bb.jwAddEventListener(d.api.events.JWPLAYER_MEDIA_BUFFER,a1);bb.jwAddEventListener(d.api.events.JWPLAYER_PLAYER_STATE,a4);bb.jwAddEventListener(d.api.events.JWPLAYER_MEDIA_TIME,aC);bb.jwAddEventListener(d.api.events.JWPLAYER_MEDIA_MUTE,aD);bb.jwAddEventListener(d.api.events.JWPLAYER_MEDIA_VOLUME,a9);bb.jwAddEventListener(d.api.events.JWPLAYER_MEDIA_COMPLETE,ay)}function aS(){if(!aP.hideplaylistcontrols){if(bb.jwGetPlaylist().length>1){_show(at.nextButton);_show(at.prevButton)}else{_hide(at.nextButton);_hide(at.prevButton)}aZ();aI()}}function a3(e){aL=bb.jwGetPlaylist()[e.index].duration;aC({id:bb.id,duration:aL,position:0});a1({id:bb.id,bufferProgress:0})}function aI(){aC({id:bb.id,duration:bb.jwGetDuration(),position:0});a1({id:bb.id,bufferProgress:0});aD({id:bb.id,mute:bb.jwGetMute()});a4({id:bb.id,newstate:d.api.events.state.IDLE});a9({id:bb.id,volume:bb.jwGetVolume()})}function aq(f,e,g){if(a6){return}if(_utils.exists(bb.skin.getSkinElement("controlbar",f))){var h=at[f];if(_utils.exists(h)){_css(h,{cursor:"pointer"});if(e=="fullscreen"){h.onmouseup=function(j){j.stopPropagation();bb.jwSetFullscreen(!bb.jwGetFullscreen())}}else{h.onmouseup=function(j){j.stopPropagation();if(_utils.exists(g)){bb[e](g)}else{bb[e]()}}}}}}function aW(f){if(a6){return}var e=at[f+"Slider"];_css(at.elements,{cursor:"pointer"});_css(e,{cursor:"pointer"});e.onmousedown=function(g){a0=f};e.onmouseup=function(g){g.stopPropagation();aE(g.pageX)};e.onmousemove=function(h){if(a0=="time"){be=true;var g=h.pageX-bj[f+"Slider"].left-window.pageXOffset;_css(at[a0+"SliderThumb"],{left:g})}}}function aE(g){be=false;var h;if(a0=="time"){h=g-bj.timeSliderRail.left+window.pageXOffset;var e=h/bj.timeSliderRail.width*aL;if(e<0){e=0}else{if(e>aL){e=aL-3}}if(bb.jwGetState()==d.api.events.state.PAUSED||bb.jwGetState()==d.api.events.state.IDLE){bb.jwPlay()}bb.jwSeek(e)}else{if(a0=="volume"){h=g-bj.volumeSliderRail.left-window.pageXOffset;var f=Math.round(h/bj.volumeSliderRail.width*100);if(f<0){f=0}else{if(f>100){f=100}}if(bb.jwGetMute()){bb.jwSetMute(false)}bb.jwSetVolume(f)}}a0="none"}function a1(g){if(_utils.exists(g.bufferPercent)){bf=g.bufferPercent}if(bj.timeSliderRail){var e=bb.skin.getSkinElement("controlbar","timeSliderCapLeft");var f=bj.timeSliderRail.width;var h=isNaN(Math.round(f*bf/100))?0:Math.round(f*bf/100);_css(at.timeSliderBuffer,{width:h,left:e?e.width:0})}}function aD(e){if(e.mute){_hide(at.muteButton);_show(at.unmuteButton);_hide(at.volumeSliderProgress)}else{_show(at.muteButton);_hide(at.unmuteButton);_show(at.volumeSliderProgress)}}function a4(e){if(e.newstate==d.api.events.state.BUFFERING||e.newstate==d.api.events.state.PLAYING){_show(at.pauseButton);_hide(at.playButton)}else{_hide(at.pauseButton);_show(at.playButton)}b();if(e.newstate==d.api.events.state.IDLE){_hide(at.timeSliderBuffer);_hide(at.timeSliderProgress);_hide(at.timeSliderThumb);aC({id:bb.id,duration:bb.jwGetDuration(),position:0})}else{_show(at.timeSliderBuffer);if(e.newstate!=d.api.events.state.BUFFERING){_show(at.timeSliderProgress);_show(at.timeSliderThumb)}}}function ay(e){a1({bufferPercent:0});aC(_utils.extend(e,{position:0,duration:aL}))}function aC(g){if(_utils.exists(g.position)){bc=g.position}if(_utils.exists(g.duration)){aL=g.duration}var j=(bc===aL===0)?0:bc/aL;var e=bj.timeSliderRail;if(e){var k=isNaN(Math.round(e.width*j))?0:Math.round(e.width*j);var f=bb.skin.getSkinElement("controlbar","timeSliderCapLeft");var h=k+(f?f.width:0);if(at.timeSliderProgress){_css(at.timeSliderProgress,{width:k,left:f?f.width:0});if(!be){if(at.timeSliderThumb){at.timeSliderThumb.style.left=h+"px"}}}}if(at.durationText){at.durationText.innerHTML=_utils.timeFormat(aL)}if(at.elapsedText){at.elapsedText.innerHTML=_utils.timeFormat(bc)}}function a8(){var k=at.elements.childNodes;var e,g;for(var h=0;h<k.length;h++){var f=k[h].childNodes;for(var j in f){if(isNaN(parseInt(j,10))){continue}if(f[j].id.indexOf(aM.id+"_divider")===0&&g&&g.id.indexOf(aM.id+"_divider")===0&&f[j].style.backgroundImage==g.style.backgroundImage){f[j].style.display="none"}else{if(f[j].id.indexOf(aM.id+"_divider")===0&&e&&e.style.display!="none"){f[j].style.display="block"}}if(f[j].style.display!="none"){g=f[j]}e=f[j]}}}function aG(){if(bb.jwGetFullscreen()){_show(at.normalscreenButton);_hide(at.fullscreenButton)}else{_hide(at.normalscreenButton);_show(at.fullscreenButton)}if(bb.jwGetState()==d.api.events.state.BUFFERING||bb.jwGetState()==d.api.events.state.PLAYING){_show(at.pauseButton);_hide(at.playButton)}else{_hide(at.pauseButton);_show(at.playButton)}if(bb.jwGetMute()==true){_hide(at.muteButton);_show(at.unmuteButton)}else{_show(at.muteButton);_hide(at.unmuteButton)}}function aZ(){a8();aG();var m={width:bg};var e={"float":"left",styleFloat:"left",cssFloat:"left"};if(aP.position==d.html5.view.positions.OVER||bb.jwGetFullscreen()){m.left=aP.margin;m.width-=2*aP.margin;m.top=aX-aB().height-aP.margin;m.height=aB().height}var k=bb.skin.getSkinElement("controlbar","capLeft");var g=bb.skin.getSkinElement("controlbar","capRight");e.width=m.width-(k?k.width:0)-(g?g.width:0);var l=_utils.getBoundingClientRect(at.leftGroup).width;var h=_utils.getBoundingClientRect(at.rightGroup).width;var j=e.width-l-h;var n=j;var o=bb.skin.getSkinElement("controlbar","timeSliderCapLeft");var f=bb.skin.getSkinElement("controlbar","timeSliderCapRight");if(_utils.exists(o)){n-=o.width}if(_utils.exists(f)){n-=f.width}at.timeSlider.style.width=j+"px";at.timeSliderRail.style.width=n+"px";_css(aM,m);_css(at.elements,e);_css(at.background,e);a5();return m}function a9(f){if(_utils.exists(at.volumeSliderRail)){var j=isNaN(f.volume/100)?1:f.volume/100;var h=_utils.parseDimension(at.volumeSliderRail.style.width);var l=isNaN(Math.round(h*j))?0:Math.round(h*j);var e=_utils.parseDimension(at.volumeSliderRail.style.right);var k=(!_utils.exists(bb.skin.getSkinElement("controlbar","volumeSliderCapLeft")))?0:bb.skin.getSkinElement("controlbar","volumeSliderCapLeft").width;_css(at.volumeSliderProgress,{width:l,left:k});if(at.volumeSliderThumb){var g=(l-Math.round(_utils.parseDimension(at.volumeSliderThumb.style.width)/2));g=Math.min(Math.max(g,0),h-_utils.parseDimension(at.volumeSliderThumb.style.width));_css(at.volumeSliderThumb,{left:g})}if(_utils.exists(at.volumeSliderCapLeft)){_css(at.volumeSliderCapLeft,{left:0})}}}function ar(){aH=document.getElementById(bb.id);aH.addEventListener("mousemove",b)}function a2(){aw();ax();a5();a6=true;aK();aP.idlehide=(aP.idlehide.toString().toLowerCase()=="true");if(aP.position==d.html5.view.positions.OVER&&aP.idlehide){aM.style.opacity=0;ap=true}else{aM.style.opacity=1;setTimeout((function(){ap=true;ao()}),1)}ar();aI()}a2();return this}})(jwplayer);(function(d){var e=["width","height","state","playlist","item","position","buffer","duration","volume","mute","fullscreen"];var f=d.utils;d.html5.controller=function(ap,U,ay,aw){var aq=ap;var at=ay;var av=aw;var af=U;var S=true;var Y=-1;var ad=f.exists(at.config.debug)&&(at.config.debug.toString().toLowerCase()=="console");var R=new d.html5.eventdispatcher(af.id,ad);f.extend(this,R);var ab=[];var an=false;function T(g){if(an){R.sendEvent(g.type,g)}else{ab.push(g)}}function al(j){if(!an){an=true;R.sendEvent(d.api.events.JWPLAYER_READY,j);if(d.utils.exists(window.playerReady)){playerReady(j)}if(d.utils.exists(window[ay.config.playerReady])){window[ay.config.playerReady](j)}while(ab.length>0){var g=ab.shift();R.sendEvent(g.type,g)}if(ay.config.autostart&&!d.utils.isIOS()){Q()}while(ag.length>0){var h=ag.shift();ac(h.method,h.arguments)}}}at.addGlobalListener(T);at.addEventListener(d.api.events.JWPLAYER_MEDIA_BUFFER_FULL,function(){at.getMedia().play()});at.addEventListener(d.api.events.JWPLAYER_MEDIA_TIME,function(g){if(g.position>=at.playlist[at.item].start&&Y>=0){at.playlist[at.item].start=Y;Y=-1}});at.addEventListener(d.api.events.JWPLAYER_MEDIA_COMPLETE,function(g){setTimeout(aa,25)});at.addEventListener(d.api.events.JWPLAYER_PLAYLIST_LOADED,Q);at.addEventListener(d.api.events.JWPLAYER_FULLSCREEN,ao);function Z(){try{ai(at.item);if(at.playlist[at.item].levels[0].file.length>0){if(S||at.state==d.api.events.state.IDLE){at.getMedia().load(at.playlist[at.item]);S=false}else{if(at.state==d.api.events.state.PAUSED){at.getMedia().play()}}}return true}catch(g){R.sendEvent(d.api.events.JWPLAYER_ERROR,g)}return false}function az(){try{if(at.playlist[at.item].levels[0].file.length>0){switch(at.state){case d.api.events.state.PLAYING:case d.api.events.state.BUFFERING:if(at.getMedia()){at.getMedia().pause()}break}}return true}catch(g){R.sendEvent(d.api.events.JWPLAYER_ERROR,g)}return false}function ae(h){try{if(at.playlist[at.item].levels[0].file.length>0){if(typeof h!="number"){h=parseFloat(h)}switch(at.state){case d.api.events.state.IDLE:if(Y<0){Y=at.playlist[at.item].start;at.playlist[at.item].start=h}Z();break;case d.api.events.state.PLAYING:case d.api.events.state.PAUSED:case d.api.events.state.BUFFERING:at.seek(h);break}}return true}catch(g){R.sendEvent(d.api.events.JWPLAYER_ERROR,g)}return false}function ah(h){if(!f.exists(h)){h=true}try{if(at.getMedia()){at.getMedia().stop(h)}return true}catch(g){R.sendEvent(d.api.events.JWPLAYER_ERROR,g)}return false}function au(){try{if(at.playlist[at.item].levels[0].file.length>0){if(at.config.shuffle){ai(a())}else{if(at.item+1==at.playlist.length){ai(0)}else{ai(at.item+1)}}}if(at.state!=d.api.events.state.IDLE){var g=at.state;at.state=d.api.events.state.IDLE;R.sendEvent(d.api.events.JWPLAYER_PLAYER_STATE,{oldstate:g,newstate:d.api.events.state.IDLE})}Z();return true}catch(h){R.sendEvent(d.api.events.JWPLAYER_ERROR,h)}return false}function W(){try{if(at.playlist[at.item].levels[0].file.length>0){if(at.config.shuffle){ai(a())}else{if(at.item===0){ai(at.playlist.length-1)}else{ai(at.item-1)}}}if(at.state!=d.api.events.state.IDLE){var g=at.state;at.state=d.api.events.state.IDLE;R.sendEvent(d.api.events.JWPLAYER_PLAYER_STATE,{oldstate:g,newstate:d.api.events.state.IDLE})}Z();return true}catch(h){R.sendEvent(d.api.events.JWPLAYER_ERROR,h)}return false}function a(){var g=null;if(at.playlist.length>1){while(!f.exists(g)){g=Math.floor(Math.random()*at.playlist.length);if(g==at.item){g=null}}}else{g=0}return g}function X(h){if(!at.playlist||!at.playlist[h]){return false}try{if(at.playlist[h].levels[0].file.length>0){var g=at.state;if(g!==d.api.events.state.IDLE){if(at.playlist[at.item].provider==at.playlist[h].provider){ah(false)}else{ah()}}ai(h);Z()}return true}catch(j){R.sendEvent(d.api.events.JWPLAYER_ERROR,j)}return false}function ai(g){if(!at.playlist[g]){return}at.setActiveMediaProvider(at.playlist[g]);if(at.item!=g){at.item=g;S=true;R.sendEvent(d.api.events.JWPLAYER_PLAYLIST_ITEM,{index:g})}}function ax(h){try{ai(at.item);var g=at.getMedia();switch(typeof(h)){case"number":g.volume(h);break;case"string":g.volume(parseInt(h,10));break}return true}catch(j){R.sendEvent(d.api.events.JWPLAYER_ERROR,j)}return false}function am(h){try{ai(at.item);var g=at.getMedia();if(typeof h=="undefined"){g.mute(!at.mute)}else{if(h.toString().toLowerCase()=="true"){g.mute(true)}else{g.mute(false)}}return true}catch(j){R.sendEvent(d.api.events.JWPLAYER_ERROR,j)}return false}function V(h,j){try{at.width=h;at.height=j;av.resize(h,j);R.sendEvent(d.api.events.JWPLAYER_RESIZE,{width:at.width,height:at.height});return true}catch(g){R.sendEvent(d.api.events.JWPLAYER_ERROR,g)}return false}function aj(g){try{if(typeof g=="undefined"){g=!at.fullscreen}if(g!=at.fullscreen){if(g.toString().toLowerCase()=="true"){at.fullscreen=true;av.fullscreen(true);R.sendEvent(d.api.events.JWPLAYER_FULLSCREEN,{fullscreen:true})}else{at.fullscreen=false;av.fullscreen(false);R.sendEvent(d.api.events.JWPLAYER_FULLSCREEN,{fullscreen:false})}R.sendEvent(d.api.events.JWPLAYER_RESIZE,{width:at.width,height:at.height})}return true}catch(h){R.sendEvent(d.api.events.JWPLAYER_ERROR,h)}return false}function b(h){try{ah();at.loadPlaylist(h);if(at.playlist[at.item].provider){ai(at.item);if(at.config.autostart.toString().toLowerCase()=="true"){Z()}return true}else{return false}}catch(g){R.sendEvent(d.api.events.JWPLAYER_ERROR,g)}return false}function Q(g){ai(at.playlist[at.item]);if(at.config.autostart.toString().toLowerCase()=="true"){Z()}}function ao(g){aj(g.fullscreen)}function ak(){try{return at.getMedia().detachMedia()}catch(g){return null}}function ar(){try{return at.getMedia().attachMedia()}catch(g){return null}}d.html5.controller.repeatoptions={LIST:"LIST",ALWAYS:"ALWAYS",SINGLE:"SINGLE",NONE:"NONE"};function aa(){switch(at.config.repeat.toUpperCase()){case d.html5.controller.repeatoptions.SINGLE:Z();break;case d.html5.controller.repeatoptions.ALWAYS:if(at.item==at.playlist.length-1&&!at.config.shuffle){X(0)}else{au()}break;case d.html5.controller.repeatoptions.LIST:if(at.item==at.playlist.length-1&&!at.config.shuffle){ah();ai(0)}else{au()}break;default:ah();break}}var ag=[];function c(g){return function(){if(an){ac(g,arguments)}else{ag.push({method:g,arguments:arguments})}}}function ac(g,h){var j=[];for(i=0;i<h.length;i++){j.push(h[i])}g.apply(this,j)}this.play=c(Z);this.pause=c(az);this.seek=c(ae);this.stop=c(ah);this.next=c(au);this.prev=c(W);this.item=c(X);this.setVolume=c(ax);this.setMute=c(am);this.resize=c(V);this.setFullscreen=c(aj);this.load=c(b);this.playerReady=al;this.detachMedia=ak;this.attachMedia=ar}})(jwplayer);(function(b){b.html5.defaultSkin=function(){this.text='<?xml version="1.0" ?><skin author="LongTail Video" name="Five" version="1.1"><components><component name="controlbar"><settings><setting name="margin" value="20"/><setting name="fontsize" value="11"/><setting name="fontcolor" value="0x000000"/></settings><layout><group position="left"><button name="play"/><divider name="divider"/><button name="prev"/><divider name="divider"/><button name="next"/><divider name="divider"/><text name="elapsed"/></group><group position="center"><slider name="time"/></group><group position="right"><text name="duration"/><divider name="divider"/><button name="blank"/><divider name="divider"/><button name="mute"/><slider name="volume"/><divider name="divider"/><button name="fullscreen"/></group></layout><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAIAAABvFaqvAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAElJREFUOI3t1LERACAMQlFgGvcfxNIhHMK4gsUvUviOmgtNsiAZkBSEKxKEnCYkkQrJn/YwbUNiSDDYRZaQRDaShv+oX9GBZEIuK+8hXVLs+/YAAAAASUVORK5CYII="/><element name="blankButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="capLeft" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="capRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAYAAAA7zJfaAAAAQElEQVQIWz3LsRGAMADDQJ0XB5bMINABZ9GENGrszxhjT2WLSqxEJG2JQrTMdV2q5LpOAvyRaVmsi7WdeZ/7+AAaOTq7BVrfOQAAAABJRU5ErkJggg=="/><element name="divider" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAYCAIAAAC0rgCNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAADhJREFUCB0FwcENgEAAw7Aq+893g8APUILNOQcbFRktVGqUVFRkWNz3xTa2sUaLNUosKlRUvvf5AdbWOTtzmzyWAAAAAElFTkSuQmCC"/><element name="playButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAANUlEQVR42u2RsQkAAAjD/NTTPaW6dXLrINJA1kBpGPMAjDWmOgp1HFQXx+b1KOefO4oxY57R73YnVYCQUCQAAAAASUVORK5CYII="/><element name="pauseButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAIUlEQVQ4jWNgGAWjYOiD/0gYG3/U0FFDB4Oho2AUDAYAAEwiL9HrpdMVAAAAAElFTkSuQmCC"/><element name="prevButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQklEQVQ4y2NgGAWjYOiD/1AMA/JAfB5NjCJD/YH4PRaLyDa0H4lNNUP/DxlD59PCUBCIp3ZEwYA+NZLUKBgFgwEAAN+HLX9sB8u8AAAAAElFTkSuQmCC"/><element name="nextButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAAQElEQVQ4y2NgGAWjYOiD/0B8Hojl0cT+U2ooCL8HYn9qGwrD/bQw9P+QMXQ+tSMqnpoRBUpS+tRMUqNgFAwGAADxZy1/mHvFnAAAAABJRU5ErkJggg=="/><element name="timeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAOElEQVRIDe3BwQkAIRADwAhhw/nU/kWwUK+KPITMABFh19Y+F0acY8CJvX9wYpXgRElwolSIiMf9ZWEDhtwurFsAAAAASUVORK5CYII="/><element name="timeSliderBuffer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAN0lEQVRIDe3BwQkAMQwDMBcc55mRe9zi7RR+FCwBEWG39vcfGHFm4MTuhhMlwYlVBSdKhYh43AW/LQMKm1spzwAAAABJRU5ErkJggg=="/><element name="timeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAIElEQVRIiWNgGAWjYBTQBfynMR61YCRYMApGwSigMQAAiVWPcbq6UkIAAAAASUVORK5CYII="/><element name="timeSliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAYCAYAAAA/OUfnAAAAO0lEQVQYlWP4//8/Awwz0JgDBP/BeN6Cxf/hnI2btiI4u/fsQ3AOHjqK4Jw4eQbBOX/hEoKDYjSd/AMA4cS4mfLsorgAAAAASUVORK5CYII="/><element name="muteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAJklEQVQ4y2NgGAUjDcwH4v/kaPxPikZkxcNVI9mBQ5XoGAWDFwAAsKAXKQQmfbUAAAAASUVORK5CYII="/><element name="unmuteButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAYCAYAAADKx8xXAAAAMklEQVQ4y2NgGAWDHPyntub5xBr6Hwv/Pzk2/yfVG/8psRFE25Oq8T+tQnsIaB4FVAcAi2YVysVY52AAAAAASUVORK5CYII="/><element name="volumeSliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAACmpqampqbBXAu8AAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderProgress" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYAgMAAACdGdVrAAAACVBMVEUAAAAAAAAAAACDY+nAAAAAAnRSTlMAgJsrThgAAAArSURBVAhbY2AgErBAyA4I2QEhOyBkB4TsYOhAoaCCUCUwDTDtMMNgRuMHAFB5FoGH5T0UAAAAAElFTkSuQmCC"/><element name="volumeSliderCapRight" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAYCAYAAAAyJzegAAAAFElEQVQYV2P8//8/AzpgHBUc7oIAGZdH0RjKN8EAAAAASUVORK5CYII="/><element name="fullscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAQklEQVRIiWNgGAWjYMiD/0iYFDmSLbDHImdPLQtgBpEiR7Zl2NijAA5oEkT/0Whi5UiyAJ8BVMsHNMtoo2AUDAIAAGdcIN3IDNXoAAAAAElFTkSuQmCC"/><element name="normalscreenButton" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAP0lEQVRIx2NgGAWjYMiD/1RSQ5QB/wmIUWzJfzx8qhj+n4DYCAY0DyJ7PBbYU8sHMEvwiZFtODXUjIJRMJgBACpWIN2ZxdPTAAAAAElFTkSuQmCC"/></elements></component><component name="display"><elements><element name="background" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/><element name="playIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAiUlEQVR42u3XSw2AMBREURwgAQlIQAISKgUpSEFKJeCg5b0E0kWBTVcD9ySTsL0Jn9IBAAAA+K2UUrBlW/Rr5ZDoIeeuoFkxJD9ss03aIXXQqB9SttoG7ZA6qNcOKdttiwcJh9RB+iFl4SshkRBuLR72+9cvH0SOKI2HRo7x/Fi1/uoCAAAAwLsD8ki99IlO2dQAAAAASUVORK5CYII="/><element name="muteIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAVUlEQVR42u3WMQrAIAxAUW/g/SdvGmvpoOBeSHgPsjj5QTANAACARCJilIhYM0tEvJM+Ik3Id9E957kQIb+F3OdCPC0hPkQriqWx9hp/x/QGAABQyAPLB22VGrpLDgAAAABJRU5ErkJggg=="/><element name="errorIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAA/0lEQVR42u2U0QmEMBAF7cASLMESUoIlpARLSCkpwRJSgiWkhOvAXD4WsgRkyaG5DbyB+Yvg8KITAAAAAAAYk+u61mwk15EjPtlEfihmqIiZR1Qx80ghjgdUuiHXGHSVsoag0x6x8DUoyjD5KovmEJ9NTDMRPIT0mtdIUkjlonuNohO+Ha99DTmkuGgKCTcvebAzx82ZoCWC3/3aIMWSRucaxcjORSFY4xpFdjYJGp1rFGcyCYZ/RVh6AUnfcNZ2zih3/mGj1jVCdiNDwyrq1rA/xMdeEXvDVdnYc1vDc3uPkDObXrlaxbNHSOohQhr/WOeLEWfWTgAAAAAAADzNF9sHJ7PJ57MlAAAAAElFTkSuQmCC"/><element name="bufferIcon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAACBklEQVR42u3Zv0sCYRzH8USTzOsHHEWGkC1HgaDgkktGDjUYtDQ01RDSljQ1BLU02+rk1NTm2NLq4Nx/0L/h9fnCd3j4cnZe1/U8xiO8h3uurufF0/3COd/3/0UWYiEWYiEWYiGJQ+J8xuPxKhXjEMZANinjIZhkGuVRNioE4wVURo4JkHm0xKWmhRAc1bh1EyCUw5BcBIjHiApKa4CErko6DEJwuRo6IRKzyJD8FJAyI3Zp2zRImiBcRhlfo5RtlxCcE3CcDNpGrhYIT2IhAJKilO0VRmzJ32fAMTpBTS0QMfGwlcuKMRftE0DJ0wCJdcOsCkBdXP3Mh9CEFUBTPS9mDZJBG6io4aqVzMdCokCw9H3kT6j/C/9iDdSeUMNC7DkyyxAs/Rk6Qss8FPWRZgdVtUH4DjxEn1zxh+/zj1wHlf4MQhNGrwqA6sY40U8JonRJwEQh+AO3AvCG6gHv4U7IY4krxkroWoAOkoQMGfCBrgIm+YBGqPENpIJ66CJg3x66Y0gnSUidAEEnNr9jjLiWMn5DiWP0OC/oAsCgkq43xBdGDMQr7YASP/vEkHvdl1+JOCcEV5sC4hGEOzTlPuKgd0b0xD4JkRcOgnRRTjdErkYhAsQVq6IdUuPJtmk7BCL3t/h88cx91pKQkI/pkDx6pmYTIjEoxiHsN1YWYiEWYiEWknhflZ5IErA5nr8AAAAASUVORK5CYII="/></elements></component><component name="dock"><settings><setting name="fontcolor" value="0xffffff"/></settings><elements><element name="button" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyAQMAAAAk8RryAAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlOZpuml+rYAAAASSURBVBhXY2AYJuA/GBwY6jQAyDyoK8QcL4QAAAAASUVORK5CYII="/></elements></component><component name="playlist"><settings><setting name="backgroundcolor" value="0xe8e8e8"/></settings><elements><element name="item" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAIAAAC1nk4lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHBJREFUaN7t2MENwCAMBEEe9N8wSKYC/D8YV7CyJoRkVtVImxkZPQInMxoP0XiIxkM0HsGbjjSNBx544IEHHnjggUe/6UQeey0PIh7XTftGxKPj4eXCtLsHHh+ZxkO0Iw8PR55Ni8ZD9Hu/EAoP0dc5RRg9qeRjVF8AAAAASUVORK5CYII="/><element name="sliderCapTop" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/><element name="sliderRail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAKElEQVQ4y2P4//8/Az68bNmy/+iYkB6GUUNHDR01dNTQUUNHDaXcUABUDOKhcxnsSwAAAABJRU5ErkJggg=="/><element name="sliderThumb" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAABiS3YzAAAAJUlEQVQ4T2P4//8/Ay4MBP9xYbz6Rg0dNXTU0FFDRw0dNZRyQwHH4NBa7GJsXAAAAABJRU5ErkJggg=="/><element name="sliderCapBottom" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAHCAYAAADnCQYGAAAAFUlEQVQokWP8//8/A7UB46ihI9hQAKt6FPPXhVGHAAAAAElFTkSuQmCC"/></elements></component></components></skin>';this.xml=null;if(window.DOMParser){parser=new DOMParser();this.xml=parser.parseFromString(this.text,"text/xml")}else{this.xml=new ActiveXObject("Microsoft.XMLDOM");this.xml.async="false";this.xml.loadXML(this.text)}return this}})(jwplayer);(function(b){_utils=b.utils;_css=_utils.css;_hide=function(a){_css(a,{display:"none"})};_show=function(a){_css(a,{display:"block"})};b.html5.display=function(aB,ad){var aC={icons:true,showmute:false};var a=_utils.extend({},aC,ad);var aD=aB;var T={};var aG;var aq;var an;var V;var at;var ab;var aj;var aa=!_utils.exists(aD.skin.getComponentSettings("display").bufferrotation)?15:parseInt(aD.skin.getComponentSettings("display").bufferrotation,10);var av=!_utils.exists(aD.skin.getComponentSettings("display").bufferinterval)?100:parseInt(aD.skin.getComponentSettings("display").bufferinterval,10);var ak=-1;var ar="";var Z=true;var aH;var aE=false;var ay=false;var ao,X;var ac=new b.html5.eventdispatcher();_utils.extend(this,ac);var ag={display:{style:{cursor:"pointer",top:0,left:0,overflow:"hidden"},click:az},display_icon:{style:{cursor:"pointer",position:"absolute",top:((aD.skin.getSkinElement("display","background").height-aD.skin.getSkinElement("display","playIcon").height)/2),left:((aD.skin.getSkinElement("display","background").width-aD.skin.getSkinElement("display","playIcon").width)/2),border:0,margin:0,padding:0,zIndex:3,display:"none"}},display_iconBackground:{style:{cursor:"pointer",position:"absolute",top:((aq-aD.skin.getSkinElement("display","background").height)/2),left:((aG-aD.skin.getSkinElement("display","background").width)/2),border:0,backgroundImage:(["url(",aD.skin.getSkinElement("display","background").src,")"]).join(""),width:aD.skin.getSkinElement("display","background").width,height:aD.skin.getSkinElement("display","background").height,margin:0,padding:0,zIndex:2,display:"none"}},display_image:{style:{display:"none",width:aG,height:aq,position:"absolute",cursor:"pointer",left:0,top:0,margin:0,padding:0,textDecoration:"none",zIndex:1}},display_text:{style:{zIndex:4,position:"relative",opacity:0.8,backgroundColor:parseInt("000000",16),color:parseInt("ffffff",16),textAlign:"center",fontFamily:"Arial,sans-serif",padding:"0 5px",fontSize:14}}};aD.jwAddEventListener(b.api.events.JWPLAYER_PLAYER_STATE,ax);aD.jwAddEventListener(b.api.events.JWPLAYER_MEDIA_MUTE,ax);aD.jwAddEventListener(b.api.events.JWPLAYER_PLAYLIST_ITEM,ax);aD.jwAddEventListener(b.api.events.JWPLAYER_ERROR,aw);Y();function Y(){T.display=ah("div","display");T.display_text=ah("div","display_text");T.display.appendChild(T.display_text);T.display_image=ah("img","display_image");T.display_image.onerror=function(c){_hide(T.display_image)};T.display_image.onload=al;T.display_icon=ah("div","display_icon");T.display_iconBackground=ah("div","display_iconBackground");T.display.appendChild(T.display_image);T.display_iconBackground.appendChild(T.display_icon);T.display.appendChild(T.display_iconBackground);aF();setTimeout((function(){ay=true;if(a.icons.toString()=="true"){ae()}}),1)}this.getDisplayElement=function(){return T.display};this.resize=function(c,d){_css(T.display,{width:c,height:d});_css(T.display_text,{width:(c-10),top:((d-_utils.getBoundingClientRect(T.display_text).height)/2)});_css(T.display_iconBackground,{top:((d-aD.skin.getSkinElement("display","background").height)/2),left:((c-aD.skin.getSkinElement("display","background").width)/2)});if(aG!=c||aq!=d){aG=c;aq=d;aH=undefined;ae()}if(!aD.jwGetFullscreen()){ao=c;X=d}aI();ax({})};this.show=function(){if(aE){aE=false;au(aD.jwGetState())}};this.hide=function(){if(!aE){ai();aE=true}};function al(c){an=T.display_image.naturalWidth;V=T.display_image.naturalHeight;aI()}function aI(){if(aD.jwGetFullscreen()&&aD.jwGetStretching()==b.utils.stretching.EXACTFIT){var c=document.createElement("div");_utils.stretch(b.utils.stretching.UNIFORM,c,aG,aq,ao,X);_utils.stretch(b.utils.stretching.EXACTFIT,T.display_image,_utils.parseDimension(c.style.width),_utils.parseDimension(c.style.height),an,V);_css(T.display_image,{left:c.style.left,top:c.style.top})}else{_utils.stretch(aD.jwGetStretching(),T.display_image,aG,aq,an,V)}}function ah(e,c){var d=document.createElement(e);d.id=aD.id+"_jwplayer_"+c;_css(d,ag[c].style);return d}function aF(){for(var c in T){if(_utils.exists(ag[c].click)){T[c].onclick=ag[c].click}}}function az(c){if(typeof c.preventDefault!="undefined"){c.preventDefault()}else{c.returnValue=false}if(aD.jwGetState()!=b.api.events.state.PLAYING){aD.jwPlay()}else{aD.jwPause()}}function U(c){if(aj){ai();return}T.display_icon.style.backgroundImage=(["url(",aD.skin.getSkinElement("display",c).src,")"]).join("");_css(T.display_icon,{width:aD.skin.getSkinElement("display",c).width,height:aD.skin.getSkinElement("display",c).height,top:(aD.skin.getSkinElement("display","background").height-aD.skin.getSkinElement("display",c).height)/2,left:(aD.skin.getSkinElement("display","background").width-aD.skin.getSkinElement("display",c).width)/2});aJ();if(_utils.exists(aD.skin.getSkinElement("display",c+"Over"))){T.display_icon.onmouseover=function(d){T.display_icon.style.backgroundImage=["url(",aD.skin.getSkinElement("display",c+"Over").src,")"].join("")};T.display_icon.onmouseout=function(d){T.display_icon.style.backgroundImage=["url(",aD.skin.getSkinElement("display",c).src,")"].join("")}}else{T.display_icon.onmouseover=null;T.display_icon.onmouseout=null}}function ai(){if(a.icons.toString()=="true"){_hide(T.display_icon);_hide(T.display_iconBackground);W()}}function aJ(){if(!aE&&a.icons.toString()=="true"){_show(T.display_icon);_show(T.display_iconBackground);ae()}}function aw(c){aj=true;ai();T.display_text.innerHTML=c.message;_show(T.display_text);T.display_text.style.top=((aq-_utils.getBoundingClientRect(T.display_text).height)/2)+"px"}function af(){T.display_image.style.display="none"}function ax(d){if((d.type==b.api.events.JWPLAYER_PLAYER_STATE||d.type==b.api.events.JWPLAYER_PLAYLIST_ITEM)&&aj){aj=false;_hide(T.display_text)}var c=aD.jwGetState();if(c==ar){return}ar=c;if(ak>=0){clearTimeout(ak)}if(Z||aD.jwGetState()==b.api.events.state.PLAYING||aD.jwGetState()==b.api.events.state.PAUSED){au(aD.jwGetState())}else{ak=setTimeout(aA(aD.jwGetState()),500)}}function aA(c){return(function(){au(c)})}function au(c){if(_utils.exists(ab)){clearInterval(ab);ab=null;_utils.animations.rotate(T.display_icon,0)}switch(c){case b.api.events.state.BUFFERING:if(_utils.isMobile()){af();ai()}else{if(aD.jwGetPlaylist()[aD.jwGetItem()].provider=="sound"){ap()}at=0;ab=setInterval(function(){at+=aa;_utils.animations.rotate(T.display_icon,at%360)},av);U("bufferIcon");Z=true}break;case b.api.events.state.PAUSED:if(!_utils.isMobile()){if(aD.jwGetPlaylist()[aD.jwGetItem()].provider!="sound"){_css(T.display_image,{background:"transparent no-repeat center center"})}U("playIcon");Z=true}break;case b.api.events.state.IDLE:if(aD.jwGetPlaylist()[aD.jwGetItem()]&&aD.jwGetPlaylist()[aD.jwGetItem()].image){ap()}else{af()}U("playIcon");Z=true;break;default:if(aD.jwGetPlaylist()[aD.jwGetItem()]&&aD.jwGetPlaylist()[aD.jwGetItem()].provider=="sound"){if(_utils.isMobile()){af();Z=false}else{ap()}}else{af();Z=false}if(aD.jwGetMute()&&a.showmute){U("muteIcon")}else{ai()}break}ak=-1}function ap(){if(aD.jwGetPlaylist()[aD.jwGetItem()]&&aD.jwGetPlaylist()[aD.jwGetItem()].image){_css(T.display_image,{display:"block"});T.display_image.src=_utils.getAbsolutePath(aD.jwGetPlaylist()[aD.jwGetItem()].image)}}function am(c){return function(){if(!ay){return}if(!aE&&aH!=c){aH=c;ac.sendEvent(c,{component:"display",boundingRect:_utils.getDimensions(T.display_iconBackground)})}}}var ae=am(b.api.events.JWPLAYER_COMPONENT_SHOW);var W=am(b.api.events.JWPLAYER_COMPONENT_HIDE);return this}})(jwplayer);(function(e){var f=e.utils;var d=f.css;e.html5.dock=function(H,P){function G(){return{align:e.html5.view.positions.RIGHT}}var W=f.extend({},G(),P);if(W.align=="FALSE"){return}var aa={};var a=[];var Z;var L;var ac=false;var Q=false;var ab={x:0,y:0,width:0,height:0};var b;var V;var c;var X=new e.html5.eventdispatcher();f.extend(this,X);var R=document.createElement("div");R.id=H.id+"_jwplayer_dock";R.style.opacity=1;U();H.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE,T);this.getDisplayElement=function(){return R};this.setButton=function(g,k,j,h){if(!k&&aa[g]){f.arrays.remove(a,g);R.removeChild(aa[g].div);delete aa[g]}else{if(k){if(!aa[g]){aa[g]={}}aa[g].handler=k;aa[g].outGraphic=j;aa[g].overGraphic=h;if(!aa[g].div){a.push(g);aa[g].div=document.createElement("div");aa[g].div.style.position="relative";R.appendChild(aa[g].div);aa[g].div.appendChild(document.createElement("img"));aa[g].div.childNodes[0].style.position="absolute";aa[g].div.childNodes[0].style.left=0;aa[g].div.childNodes[0].style.top=0;aa[g].div.childNodes[0].style.zIndex=10;aa[g].div.childNodes[0].style.cursor="pointer";aa[g].div.appendChild(document.createElement("img"));aa[g].div.childNodes[1].style.position="absolute";aa[g].div.childNodes[1].style.left=0;aa[g].div.childNodes[1].style.top=0;if(H.skin.getSkinElement("dock","button")){aa[g].div.childNodes[1].src=H.skin.getSkinElement("dock","button").src}aa[g].div.childNodes[1].style.zIndex=9;aa[g].div.childNodes[1].style.cursor="pointer";aa[g].div.onmouseover=function(){if(aa[g].overGraphic){aa[g].div.childNodes[0].src=aa[g].overGraphic}if(H.skin.getSkinElement("dock","buttonOver")){aa[g].div.childNodes[1].src=H.skin.getSkinElement("dock","buttonOver").src}};aa[g].div.onmouseout=function(){if(aa[g].outGraphic){aa[g].div.childNodes[0].src=aa[g].outGraphic}if(H.skin.getSkinElement("dock","button")){aa[g].div.childNodes[1].src=H.skin.getSkinElement("dock","button").src}};if(H.skin.getSkinElement("dock","button")){aa[g].div.childNodes[1].src=H.skin.getSkinElement("dock","button").src}}if(aa[g].outGraphic){aa[g].div.childNodes[0].src=aa[g].outGraphic}else{if(aa[g].overGraphic){aa[g].div.childNodes[0].src=aa[g].overGraphic}}if(k){aa[g].div.onclick=function(l){l.preventDefault();e(H.id).callback(g);if(aa[g].overGraphic){aa[g].div.childNodes[0].src=aa[g].overGraphic}if(H.skin.getSkinElement("dock","button")){aa[g].div.childNodes[1].src=H.skin.getSkinElement("dock","button").src}}}}}Y(Z,L)};function N(g){}function Y(u,h){U();if(a.length>0){var t=10;var j=t;var m=-1;var l=H.skin.getSkinElement("dock","button").height;var n=H.skin.getSkinElement("dock","button").width;var p=u-n-t;var k,q;if(W.align==e.html5.view.positions.LEFT){m=1;p=t}for(var s=0;s<a.length;s++){var g=Math.floor(j/h);if((j+l+t)>((g+1)*h)){j=((g+1)*h)+t;g=Math.floor(j/h)}var r=aa[a[s]].div;r.style.top=(j%h)+"px";r.style.left=(p+(H.skin.getSkinElement("dock","button").width+t)*g*m)+"px";var o={x:f.parseDimension(r.style.left),y:f.parseDimension(r.style.top),width:n,height:l};if(!k||(o.x<=k.x&&o.y<=k.y)){k=o}if(!q||(o.x>=q.x&&o.y>=q.y)){q=o}j+=H.skin.getSkinElement("dock","button").height+t}ab={x:k.x,y:k.y,width:q.x-k.x+q.width,height:k.y-q.y+q.height}}if(Q!=H.jwGetFullscreen()||Z!=u||L!=h){Z=u;L=h;Q=H.jwGetFullscreen();b=undefined;setTimeout(O,1)}}function ae(g){return function(){if(!ac&&b!=g&&a.length>0){b=g;X.sendEvent(g,{component:"dock",boundingRect:ab})}}}function T(g){if(f.isMobile()){if(g.newstate==e.api.events.state.IDLE){I()}else{ad()}}else{S()}}function S(g){if(ac){return}clearTimeout(c);if(P.position==e.html5.view.positions.OVER||H.jwGetFullscreen()){switch(H.jwGetState()){case e.api.events.state.PAUSED:case e.api.events.state.IDLE:if(R&&R.style.opacity<1&&(!P.idlehide||f.exists(g))){M()}if(P.idlehide){c=setTimeout(function(){K()},2000)}break;default:if(f.exists(g)){M()}c=setTimeout(function(){K()},2000);break}}else{M()}}var O=ae(e.api.events.JWPLAYER_COMPONENT_SHOW);var J=ae(e.api.events.JWPLAYER_COMPONENT_HIDE);this.resize=Y;var I=function(){d(R,{display:"block"});if(ac){ac=false;O()}};var ad=function(){d(R,{display:"none"});if(!ac){J();ac=true}};function K(){if(!ac){J();if(R.style.opacity==1){f.cancelAnimation(R);f.fadeTo(R,0,0.1,1,0)}}}function M(){if(!ac){O();if(R.style.opacity==0){f.cancelAnimation(R);f.fadeTo(R,1,0.1,0,0)}}}function U(){V=document.getElementById(H.id);V.addEventListener("mousemove",S)}this.hide=ad;this.show=I;return this}})(jwplayer);(function(b){b.html5.eventdispatcher=function(e,a){var f=new b.events.eventdispatcher(a);b.utils.extend(this,f);this.sendEvent=function(d,c){if(!b.utils.exists(c)){c={}}b.utils.extend(c,{id:e,version:b.version,type:d});f.sendEvent(d,c)}}})(jwplayer);(function(d){var c={prefix:"",file:"",link:"",margin:8,out:0.5,over:1,timeout:5,hide:true,position:"bottom-left"};_css=d.utils.css;d.html5.logo=function(A,w){var x=A;var a;var J;var b;var F=false;G();function G(){z();x.jwAddEventListener(d.api.events.JWPLAYER_PLAYER_STATE,E);K();C()}function z(){if(c.prefix){var f=A.version.split(/\W/).splice(0,2).join("/");if(c.prefix.indexOf(f)<0){c.prefix+=f+"/"}}if(w.position==d.html5.view.positions.OVER){w.position=c.position}try{if(window.location.href.indexOf("https")==0){c.prefix=c.prefix.replace("http://l.longtailvideo.com","https://securel.longtailvideo.com")}}catch(e){}J=d.utils.extend({},c,w)}function K(){b=document.createElement("img");b.id=x.id+"_jwplayer_logo";b.style.display="none";b.onload=function(e){_css(b,D());y()};if(!J.file){return}if(J.file.indexOf("/")>=0){b.src=J.file}else{b.src=J.prefix+J.file}}if(!J.file){return}this.resize=function(e,f){};this.getDisplayElement=function(){return b};function C(){if(J.link){b.onmouseover=H;b.onmouseout=y;b.onclick=v}else{this.mouseEnabled=false}}function v(e){if(typeof e!="undefined"){e.stopPropagation()}if(!F){return}x.jwPause();x.jwSetFullscreen(false);if(J.link){window.open(J.link,"_top")}return}function y(e){if(J.link&&F){b.style.opacity=J.out}return}function H(e){if(F){b.style.opacity=J.over}return}function D(){var e={textDecoration:"none",position:"absolute",cursor:"pointer"};e.display=(J.hide.toString()=="true"&&!F)?"none":"block";var f=J.position.toLowerCase().split("-");for(var g in f){e[f[g]]=J.margin}return e}function B(){if(J.hide.toString()=="true"){b.style.display="block";b.style.opacity=0;d.utils.fadeTo(b,J.out,0.1,parseFloat(b.style.opacity));a=setTimeout(function(){I()},J.timeout*1000)}F=true}function I(){F=false;if(J.hide.toString()=="true"){d.utils.fadeTo(b,0,0.1,parseFloat(b.style.opacity))}}function E(e){if(e.newstate==d.api.events.state.BUFFERING){clearTimeout(a);B()}}return this}})(jwplayer);(function(f){var j={ended:f.api.events.state.IDLE,playing:f.api.events.state.PLAYING,pause:f.api.events.state.PAUSED,buffering:f.api.events.state.BUFFERING};var h=f.utils;var k=h.css;var g=h.isMobile();f.html5.mediavideo=function(al,T){var V={abort:ae,canplay:ai,canplaythrough:ai,durationchange:b,emptied:ae,ended:ai,error:O,loadeddata:b,loadedmetadata:b,loadstart:ai,pause:ai,play:ae,playing:ai,progress:e,ratechange:ae,seeked:ai,seeking:ai,stalled:ai,suspend:ai,timeupdate:P,volumechange:W,waiting:ai,canshowcurrentframe:ae,dataunavailable:ae,empty:ae,load:Y,loadedfirstframe:ae,webkitfullscreenchange:ak};var aj=new f.html5.eventdispatcher();h.extend(this,aj);var ad=al,ah=T,ag,S,U,af,an,a=false,aa=false,R,ab,Z;ac();this.load=function(n,m){if(typeof m=="undefined"){m=true}if(!aa){return}af=n;h.empty(ag);Z=0;if(n.levels&&n.levels.length>0){if(n.levels.length==1){ag.src=n.levels[0].file}else{ao(n.levels);if(ag.src){ag.removeAttribute("src")}for(var o=0;o<n.levels.length;o++){var l=ag.ownerDocument.createElement("source");l.src=n.levels[o].file;ag.appendChild(l);Z++}}}else{ag.src=n.file}if(g){if(n.image){ag.poster=n.image}ag.style.display="block";setTimeout(function(){ag.setAttribute("controls","controls")},100)}R=ab=U=false;ad.buffer=0;if(!h.exists(n.start)){n.start=0}ad.duration=n.duration;aj.sendEvent(f.api.events.JWPLAYER_MEDIA_LOADED);if((!g&&n.levels.length==1)||!a){ag.load()}a=false;if(m){N(f.api.events.state.BUFFERING);aj.sendEvent(f.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:0});this.play()}};this.play=function(){if(!aa){return}if(S!=f.api.events.state.PLAYING){Q();if(ab){N(f.api.events.state.PLAYING)}else{N(f.api.events.state.BUFFERING)}ag.play()}};this.pause=function(){if(!aa){return}ag.pause();N(f.api.events.state.PAUSED)};this.seek=function(l){if(!aa){return}if(!(ad.duration<=0||isNaN(ad.duration))&&!(ad.position<=0||isNaN(ad.position))){ag.currentTime=l;ag.play()}};_stop=this.stop=function(n){if(!aa){return}if(!h.exists(n)){n=true}am();if(n){ag.style.display="none";ab=false;var m=navigator.userAgent;if(m.match(/chrome/i)){ag.src=undefined}else{if(m.match(/safari/i)||m.match(/firefox/i)){ag.removeAttribute("src")}else{ag.src=""}}ag.removeAttribute("controls");ag.removeAttribute("poster");h.empty(ag);ag.load();a=true;if(ag.webkitSupportsFullscreen){try{ag.webkitExitFullscreen()}catch(l){}}}N(f.api.events.state.IDLE)};this.fullscreen=function(l){if(l===true){this.resize("100%","100%")}else{this.resize(ad.config.width,ad.config.height)}};this.resize=function(l,m){};this.volume=function(l){if(!g){ag.volume=l/100}};this.mute=function(l){if(!g){ag.muted=l}};this.getDisplayElement=function(){return ag};this.hasChrome=function(){return g};this.detachMedia=function(){aa=false;return this.getDisplayElement()};this.attachMedia=function(){aa=true};function X(l,m){return function(n){if(aa&&h.exists(n.target.parentNode)){m(n)}}}function ac(){ag=document.createElement("video");S=f.api.events.state.IDLE;for(var l in V){ag.addEventListener(l,X(l,V[l]),true)}aa=true;ag.setAttribute("x-webkit-airplay","allow");if(ah.parentNode){ah.parentNode.replaceChild(ag,ah)}if(!ag.id){ag.id=ah.id}ag.volume=ad.volume/100}function N(m){if(m==f.api.events.state.PAUSED&&S==f.api.events.state.IDLE){return}if(S!=m){var l=S;ad.state=S=m;aj.sendEvent(f.api.events.JWPLAYER_PLAYER_STATE,{oldstate:l,newstate:m})}}function ae(l){}function W(m){var l=Math.round(ag.volume*100);if(l!=ad.volume){ad.volume=l;aj.sendEvent(f.api.events.JWPLAYER_MEDIA_VOLUME,{volume:ad.volume})}if(ag.muted!=ad.mute){ad.mute=ag.muted;aj.sendEvent(f.api.events.JWPLAYER_MEDIA_MUTE,{mute:ad.mute})}}function e(l){var m;if(h.exists(l)&&l.lengthComputable&&l.total){m=l.loaded/l.total*100}else{if(h.exists(ag.buffered)&&(ag.buffered.length>0)){var n=ag.buffered.length-1;if(n>=0){m=ag.buffered.end(n)/ag.duration*100}}}if(ab===false&&S==f.api.events.state.BUFFERING){aj.sendEvent(f.api.events.JWPLAYER_MEDIA_BUFFER_FULL);ab=true}if(!R){if(m==100){R=true}if(h.exists(m)&&(m>ad.buffer)){ad.buffer=Math.round(m);aj.sendEvent(f.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:Math.round(m)})}}}function P(l){if(h.exists(l)&&h.exists(l.target)){if(!isNaN(l.target.duration)&&(isNaN(ad.duration)||ad.duration<1)){if(l.target.duration==Infinity){ad.duration=0}else{ad.duration=Math.round(l.target.duration*10)/10}}if(!U&&ag.readyState>0){ag.style.display="block";N(f.api.events.state.PLAYING)}if(S==f.api.events.state.PLAYING){if(!U&&ag.readyState>0){U=true;try{if(ag.currentTime<af.start){ag.currentTime=af.start}}catch(m){}ag.volume=ad.volume/100;ag.muted=ad.mute}ad.position=ad.duration>0?(Math.round(l.target.currentTime*10)/10):0;aj.sendEvent(f.api.events.JWPLAYER_MEDIA_TIME,{position:ad.position,duration:ad.duration});if(ad.position>=ad.duration&&(ad.position>0||ad.duration>0)){c()}}}e(l)}function Y(l){}function ai(l){if(j[l.type]){if(l.type=="ended"){c()}else{N(j[l.type])}}}function b(m){var n=Math.round(m.target.duration*10)/10;var l={height:m.target.videoHeight,width:m.target.videoWidth,duration:n};if((ad.duration<n||isNaN(ad.duration))&&m.target.duration!=Infinity){ad.duration=n}aj.sendEvent(f.api.events.JWPLAYER_MEDIA_META,{metadata:l})}function O(l){if(S==f.api.events.state.IDLE){return}var m="There was an error: ";if((l.target.error&&l.target.tagName.toLowerCase()=="video")||l.target.parentNode.error&&l.target.parentNode.tagName.toLowerCase()=="video"){var n=!h.exists(l.target.error)?l.target.parentNode.error:l.target.error;switch(n.code){case n.MEDIA_ERR_ABORTED:m="You aborted the video playback: ";break;case n.MEDIA_ERR_NETWORK:m="A network error caused the video download to fail part-way: ";break;case n.MEDIA_ERR_DECODE:m="The video playback was aborted due to a corruption problem or because the video used features your browser did not support: ";break;case n.MEDIA_ERR_SRC_NOT_SUPPORTED:m="The video could not be loaded, either because the server or network failed or because the format is not supported: ";break;default:m="An unknown error occurred: ";break}}else{if(l.target.tagName.toLowerCase()=="source"){Z--;if(Z>0){return}m="The video could not be loaded, either because the server or network failed or because the format is not supported: "}else{h.log("An unknown error occurred.  Continuing...");return}}_stop(false);m+=d();_error=true;aj.sendEvent(f.api.events.JWPLAYER_ERROR,{message:m});return}function d(){var m="";for(var n in af.levels){var o=af.levels[n];var l=ah.ownerDocument.createElement("source");m+=f.utils.getAbsolutePath(o.file);if(n<(af.levels.length-1)){m+=", "}}return m}function Q(){if(!h.exists(an)){an=setInterval(function(){e()},100)}}function am(){clearInterval(an);an=null}function c(){if(S!=f.api.events.state.IDLE){_stop(false);aj.sendEvent(f.api.events.JWPLAYER_MEDIA_COMPLETE)}}function ak(l){if(h.exists(ag.webkitDisplayingFullscreen)){if(ad.fullscreen&&!ag.webkitDisplayingFullscreen){aj.sendEvent(f.api.events.JWPLAYER_FULLSCREEN,{fullscreen:false})}}}function ao(m){if(m.length>0&&h.isIOS()){if(h.extension(m[0].file)!="mp4"){var o=-1;for(var n=1;n<m.length;n++){if(h.extension(m[n].file)=="mp4"){o=n;break}}if(o>-1){var l=m.splice(o,1)[0];m.unshift(l)}}}}}})(jwplayer);(function(e){var f={ended:e.api.events.state.IDLE,playing:e.api.events.state.PLAYING,pause:e.api.events.state.PAUSED,buffering:e.api.events.state.BUFFERING};var d=e.utils.css;e.html5.mediayoutube=function(r,v){var u=new e.html5.eventdispatcher();e.utils.extend(this,u);var p=r;var s=document.getElementById(v.id);var t=e.api.events.state.IDLE;var b,c;function q(h){if(t!=h){var g=t;p.state=h;t=h;u.sendEvent(e.api.events.JWPLAYER_PLAYER_STATE,{oldstate:g,newstate:h})}}this.getDisplayElement=this.detachMedia=function(){return s};this.attachMedia=function(){};this.play=function(){if(t==e.api.events.state.IDLE){u.sendEvent(e.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:100});u.sendEvent(e.api.events.JWPLAYER_MEDIA_BUFFER_FULL);q(e.api.events.state.PLAYING)}else{if(t==e.api.events.state.PAUSED){q(e.api.events.state.PLAYING)}}};this.pause=function(){q(e.api.events.state.PAUSED)};this.seek=function(g){};this.stop=function(g){if(!_utils.exists(g)){g=true}p.position=0;q(e.api.events.state.IDLE);if(g){d(s,{display:"none"})}};this.volume=function(g){p.volume=g;u.sendEvent(e.api.events.JWPLAYER_MEDIA_VOLUME,{volume:Math.round(g)})};this.mute=function(g){s.muted=g;p.mute=g;u.sendEvent(e.api.events.JWPLAYER_MEDIA_MUTE,{mute:g})};this.resize=function(g,h){if(g*h>0&&b){b.width=c.width=g;b.height=c.height=h}};this.fullscreen=function(g){if(g===true){this.resize("100%","100%")}else{this.resize(p.config.width,p.config.height)}};this.load=function(g){a(g);d(b,{display:"block"});q(e.api.events.state.BUFFERING);u.sendEvent(e.api.events.JWPLAYER_MEDIA_BUFFER,{bufferPercent:0});u.sendEvent(e.api.events.JWPLAYER_MEDIA_LOADED);this.play()};this.hasChrome=function(){return(t!=e.api.events.state.IDLE)};function a(g){var k=g.levels[0].file;k=["http://www.youtube.com/v/",w(k),"&amp;hl=en_US&amp;fs=1&autoplay=1"].join("");b=document.createElement("object");b.id=s.id;b.style.position="absolute";var h={movie:k,allowfullscreen:"true",allowscriptaccess:"always"};for(var n in h){var j=document.createElement("param");j.name=n;j.value=h[n];b.appendChild(j)}c=document.createElement("embed");b.appendChild(c);var m={src:k,type:"application/x-shockwave-flash",allowfullscreen:"true",allowscriptaccess:"always",width:b.width,height:b.height};for(var l in m){c.setAttribute(l,m[l])}b.appendChild(c);b.style.zIndex=2147483000;if(s!=b&&s.parentNode){s.parentNode.replaceChild(b,s)}s=b}function w(j){var k=j.split(/\?|\#\!/);var g="";for(var h=0;h<k.length;h++){if(k[h].substr(0,2)=="v="){g=k[h].substr(2)}}if(g==""){if(j.indexOf("/v/")>=0){g=j.substr(j.indexOf("/v/")+3)}else{if(j.indexOf("youtu.be")>=0){g=j.substr(j.indexOf("youtu.be/")+9)}else{g=j}}}if(g.indexOf("?")>-1){g=g.substr(0,g.indexOf("?"))}if(g.indexOf("&")>-1){g=g.substr(0,g.indexOf("&"))}return g}this.embed=c;return this}})(jwplayer);(function(jwplayer){var _configurableStateVariables=["width","height","start","duration","volume","mute","fullscreen","item","plugins","stretching"];jwplayer.html5.model=function(api,container,options){var _api=api;var _container=container;var _model={id:_container.id,playlist:[],state:jwplayer.api.events.state.IDLE,position:0,buffer:0,config:{width:480,height:320,item:-1,skin:undefined,file:undefined,image:undefined,start:0,duration:0,bufferlength:5,volume:90,mute:false,fullscreen:false,repeat:"",stretching:jwplayer.utils.stretching.UNIFORM,autostart:false,debug:undefined,screencolor:undefined}};var _media;var _eventDispatcher=new jwplayer.html5.eventdispatcher();var _components=["display","logo","controlbar","playlist","dock"];jwplayer.utils.extend(_model,_eventDispatcher);for(var option in options){if(typeof options[option]=="string"){var type=/color$/.test(option)?"color":null;options[option]=jwplayer.utils.typechecker(options[option],type)}var config=_model.config;var path=option.split(".");for(var edge in path){if(edge==path.length-1){config[path[edge]]=options[option]}else{if(!jwplayer.utils.exists(config[path[edge]])){config[path[edge]]={}}config=config[path[edge]]}}}for(var index in _configurableStateVariables){var configurableStateVariable=_configurableStateVariables[index];_model[configurableStateVariable]=_model.config[configurableStateVariable]}var pluginorder=_components.concat([]);if(jwplayer.utils.exists(_model.plugins)){if(typeof _model.plugins=="string"){var userplugins=_model.plugins.split(",");for(var userplugin in userplugins){if(typeof userplugins[userplugin]=="string"){pluginorder.push(userplugins[userplugin].replace(/^\s+|\s+$/g,""))}}}}if(jwplayer.utils.isMobile()){pluginorder=["display","logo","dock","playlist"];if(!jwplayer.utils.exists(_model.config.repeat)){_model.config.repeat="list"}}else{if(_model.config.chromeless){pluginorder=["logo","dock","playlist"];if(!jwplayer.utils.exists(_model.config.repeat)){_model.config.repeat="list"}}}_model.plugins={order:pluginorder,config:{},object:{}};if(typeof _model.config.components!="undefined"){for(var component in _model.config.components){_model.plugins.config[component]=_model.config.components[component]}}var playlistVisible=false;for(var pluginIndex in _model.plugins.order){var pluginName=_model.plugins.order[pluginIndex];var pluginConfig=!jwplayer.utils.exists(_model.plugins.config[pluginName])?{}:_model.plugins.config[pluginName];_model.plugins.config[pluginName]=!jwplayer.utils.exists(_model.plugins.config[pluginName])?pluginConfig:jwplayer.utils.extend(_model.plugins.config[pluginName],pluginConfig);if(!jwplayer.utils.exists(_model.plugins.config[pluginName].position)){if(pluginName=="playlist"){_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.NONE}else{_model.plugins.config[pluginName].position=jwplayer.html5.view.positions.OVER}}else{if(pluginName=="playlist"){playlistVisible=true}_model.plugins.config[pluginName].position=_model.plugins.config[pluginName].position.toString().toUpperCase()}}if(_model.plugins.config.controlbar&&playlistVisible){_model.plugins.config.controlbar.hideplaylistcontrols=true}if(typeof _model.plugins.config.dock!="undefined"){if(typeof _model.plugins.config.dock!="object"){var position=_model.plugins.config.dock.toString().toUpperCase();_model.plugins.config.dock={position:position}}if(typeof _model.plugins.config.dock.position!="undefined"){_model.plugins.config.dock.align=_model.plugins.config.dock.position;_model.plugins.config.dock.position=jwplayer.html5.view.positions.OVER}if(typeof _model.plugins.config.dock.idlehide=="undefined"){try{_model.plugins.config.dock.idlehide=_model.plugins.config.controlbar.idlehide}catch(e){}}}function _loadExternal(playlistfile){var loader=new jwplayer.html5.playlistloader();loader.addEventListener(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,function(evt){_model.playlist=new jwplayer.html5.playlist(evt);_loadComplete(true)});loader.addEventListener(jwplayer.api.events.JWPLAYER_ERROR,function(evt){_model.playlist=new jwplayer.html5.playlist({playlist:[]});_loadComplete(false)});loader.load(playlistfile)}function _loadComplete(){if(_model.config.shuffle){_model.item=_getShuffleItem()}else{if(_model.config.item>=_model.playlist.length){_model.config.item=_model.playlist.length-1}else{if(_model.config.item<0){_model.config.item=0}}_model.item=_model.config.item}_model.position=0;_model.duration=_model.playlist.length>0?_model.playlist[_model.item].duration:0;_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:_model.playlist});_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_PLAYLIST_ITEM,{index:_model.item})}_model.loadPlaylist=function(arg){var input;if(typeof arg=="string"){if(arg.indexOf("[")==0||arg.indexOf("{")=="0"){try{input=eval(arg)}catch(err){input=arg}}else{input=arg}}else{input=arg}var config;switch(jwplayer.utils.typeOf(input)){case"object":config=input;break;case"array":config={playlist:input};break;default:config={file:input};break}_model.playlist=new jwplayer.html5.playlist(config);_model.item=_model.config.item>=0?_model.config.item:0;if(!_model.playlist[_model.item].provider){_loadExternal(_model.playlist[_model.item].file)}else{_loadComplete()}};function _getShuffleItem(){var result=null;if(_model.playlist.length>1){while(!jwplayer.utils.exists(result)){result=Math.floor(Math.random()*_model.playlist.length);if(result==_model.item){result=null}}}else{result=0}return result}function forward(evt){if(evt.type==jwplayer.api.events.JWPLAYER_MEDIA_LOADED){_container=_media.getDisplayElement()}_eventDispatcher.sendEvent(evt.type,evt)}var _mediaProviders={};_model.setActiveMediaProvider=function(playlistItem){if(playlistItem.provider=="audio"){playlistItem.provider="sound"}var provider=playlistItem.provider;var current=_media?_media.getDisplayElement():null;if(provider=="sound"||provider=="http"||provider==""){provider="video"}if(!jwplayer.utils.exists(_mediaProviders[provider])){switch(provider){case"video":_media=new jwplayer.html5.mediavideo(_model,current?current:_container);break;case"youtube":_media=new jwplayer.html5.mediayoutube(_model,current?current:_container);break}if(!jwplayer.utils.exists(_media)){return false}_media.addGlobalListener(forward);_mediaProviders[provider]=_media}else{if(_media!=_mediaProviders[provider]){if(_media){_media.stop()}_media=_mediaProviders[provider]}}return true};_model.getMedia=function(){return _media};_model.seek=function(pos){_eventDispatcher.sendEvent(jwplayer.api.events.JWPLAYER_MEDIA_SEEK,{position:_model.position,offset:pos});return _media.seek(pos)};_model.setupPlugins=function(){if(!jwplayer.utils.exists(_model.plugins)||!jwplayer.utils.exists(_model.plugins.order)||_model.plugins.order.length==0){jwplayer.utils.log("No plugins to set up");return _model}for(var i=0;i<_model.plugins.order.length;i++){try{var pluginName=_model.plugins.order[i];if(jwplayer.utils.exists(jwplayer.html5[pluginName])){if(pluginName=="playlist"){_model.plugins.object[pluginName]=new jwplayer.html5.playlistcomponent(_api,_model.plugins.config[pluginName])}else{_model.plugins.object[pluginName]=new jwplayer.html5[pluginName](_api,_model.plugins.config[pluginName])}}else{_model.plugins.order.splice(plugin,plugin+1)}if(typeof _model.plugins.object[pluginName].addGlobalListener=="function"){_model.plugins.object[pluginName].addGlobalListener(forward)}}catch(err){jwplayer.utils.log("Could not setup "+pluginName)}}};return _model}})(jwplayer);(function(b){b.html5.playlist=function(a){var e=[];if(a.playlist&&a.playlist instanceof Array&&a.playlist.length>0){for(var f in a.playlist){if(!isNaN(parseInt(f))){e.push(new b.html5.playlistitem(a.playlist[f]))}}}else{e.push(new b.html5.playlistitem(a))}return e}})(jwplayer);(function(e){var f={size:180,position:e.html5.view.positions.NONE,itemheight:60,thumbs:true,fontcolor:"#000000",overcolor:"",activecolor:"",backgroundcolor:"#f8f8f8",font:"_sans",fontsize:"",fontstyle:"",fontweight:""};var d={_sans:"Arial, Helvetica, sans-serif",_serif:"Times, Times New Roman, serif",_typewriter:"Courier New, Courier, monospace"};_utils=e.utils;_css=_utils.css;_hide=function(a){_css(a,{display:"none"})};_show=function(a){_css(a,{display:"block"})};e.html5.playlistcomponent=function(J,K){var D=J;var X=e.utils.extend({},f,D.skin.getComponentSettings("playlist"),K);if(X.position==e.html5.view.positions.NONE||typeof e.html5.view.positions[X.position]=="undefined"){return}var c;var R;var I;var Y;var V;var W;var S=-1;var U={background:undefined,item:undefined,itemOver:undefined,itemImage:undefined,itemActive:undefined};this.getDisplayElement=function(){return c};this.resize=function(g,j){R=g;I=j;if(D.jwGetFullscreen()){_hide(c)}else{var h={display:"block",width:R,height:I};_css(c,h)}};this.show=function(){_show(c)};this.hide=function(){_hide(c)};function T(){c=document.createElement("div");c.id=D.id+"_jwplayer_playlistcomponent";c.style.overflow="hidden";switch(X.position){case e.html5.view.positions.RIGHT:case e.html5.view.positions.LEFT:c.style.width=X.size+"px";break;case e.html5.view.positions.TOP:case e.html5.view.positions.BOTTOM:c.style.height=X.size+"px";break}M();if(U.item){X.itemheight=U.item.height}c.style.backgroundColor="#C6C6C6";D.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_LOADED,H);D.jwAddEventListener(e.api.events.JWPLAYER_PLAYLIST_ITEM,F);D.jwAddEventListener(e.api.events.JWPLAYER_PLAYER_STATE,Q)}function N(){var g=document.createElement("ul");_css(g,{width:c.style.width,minWidth:c.style.width,height:c.style.height,backgroundColor:X.backgroundcolor,backgroundImage:U.background?"url("+U.background.src+")":"",color:X.fontcolor,listStyle:"none",margin:0,padding:0,fontFamily:d[X.font]?d[X.font]:d._sans,fontSize:(X.fontsize?X.fontsize:11)+"px",fontStyle:X.fontstyle,fontWeight:X.fontweight,overflowY:"auto"});return g}function b(g){return function(){var k=W.getElementsByClassName("item")[g];var j=X.fontcolor;var h=U.item?"url("+U.item.src+")":"";if(g==D.jwGetPlaylistIndex()){if(X.activecolor!==""){j=X.activecolor}if(U.itemActive){h="url("+U.itemActive.src+")"}}_css(k,{color:X.overcolor!==""?X.overcolor:j,backgroundImage:U.itemOver?"url("+U.itemOver.src+")":h})}}function O(g){return function(){var k=W.getElementsByClassName("item")[g];var j=X.fontcolor;var h=U.item?"url("+U.item.src+")":"";if(g==D.jwGetPlaylistIndex()){if(X.activecolor!==""){j=X.activecolor}if(U.itemActive){h="url("+U.itemActive.src+")"}}_css(k,{color:j,backgroundImage:h})}}function L(p){var h=Y[p];var j=document.createElement("li");j.className="item";_css(j,{height:X.itemheight,display:"block",cursor:"pointer",backgroundImage:U.item?"url("+U.item.src+")":"",backgroundSize:"100% "+X.itemheight+"px"});j.onmouseover=b(p);j.onmouseout=O(p);var o=document.createElement("div");var s=new Image();var n=0;var m=0;var l=0;if(E()&&(h.image||h["playlist.image"]||U.itemImage)){s.className="image";if(U.itemImage){n=(X.itemheight-U.itemImage.height)/2;m=U.itemImage.width;l=U.itemImage.height}else{m=X.itemheight*4/3;l=X.itemheight}_css(o,{height:l,width:m,"float":"left",styleFloat:"left",cssFloat:"left",margin:"0 5px 0 0",background:"black",overflow:"hidden",margin:n+"px",position:"relative"});_css(s,{position:"relative"});o.appendChild(s);s.onload=function(){e.utils.stretch(e.utils.stretching.FILL,s,m,l,this.naturalWidth,this.naturalHeight)};if(h["playlist.image"]){s.src=h["playlist.image"]}else{if(h.image){s.src=h.image}else{if(U.itemImage){s.src=U.itemImage.src}}}j.appendChild(o)}var t=R-m-n*2;if(I<X.itemheight*Y.length){t-=15}var g=document.createElement("div");_css(g,{position:"relative",height:"100%",overflow:"hidden"});var r=document.createElement("span");if(h.duration>0){r.className="duration";_css(r,{fontSize:(X.fontsize?X.fontsize:11)+"px",fontWeight:(X.fontweight?X.fontweight:"bold"),width:"40px",height:X.fontsize?X.fontsize+10:20,lineHeight:24,"float":"right",styleFloat:"right",cssFloat:"right"});r.innerHTML=_utils.timeFormat(h.duration);g.appendChild(r)}var k=document.createElement("span");k.className="title";_css(k,{padding:"5px 5px 0 "+(n?0:"5px"),height:X.fontsize?X.fontsize+10:20,lineHeight:X.fontsize?X.fontsize+10:20,overflow:"hidden","float":"left",styleFloat:"left",cssFloat:"left",width:((h.duration>0)?t-50:t)-10+"px",fontSize:(X.fontsize?X.fontsize:13)+"px",fontWeight:(X.fontweight?X.fontweight:"bold")});k.innerHTML=h?h.title:"";g.appendChild(k);if(h.description){var q=document.createElement("span");q.className="description";_css(q,{display:"block","float":"left",styleFloat:"left",cssFloat:"left",margin:0,paddingLeft:k.style.paddingLeft,paddingRight:k.style.paddingRight,lineHeight:(X.fontsize?X.fontsize+4:16)+"px",overflow:"hidden",position:"relative"});q.innerHTML=h.description;g.appendChild(q)}j.appendChild(g);return j}function H(j){c.innerHTML="";Y=D.jwGetPlaylist();if(!Y){return}items=[];W=N();for(var h=0;h<Y.length;h++){var k=L(h);k.onclick=a(h);W.appendChild(k);items.push(k)}S=D.jwGetPlaylistIndex();O(S)();c.appendChild(W);if(_utils.isIOS()&&window.iScroll){W.style.height=X.itemheight*Y.length+"px";var g=new iScroll(c.id)}}function a(g){return function(){D.jwPlaylistItem(g);D.jwPlay(true)}}function P(){W.scrollTop=D.jwGetPlaylistIndex()*X.itemheight}function E(){return X.thumbs.toString().toLowerCase()=="true"}function F(g){if(S>=0){O(S)();S=g.index}O(g.index)();P()}function Q(){if(X.position==e.html5.view.positions.OVER){switch(D.jwGetState()){case e.api.events.state.IDLE:_show(c);break;default:_hide(c);break}}}function M(){for(var g in U){U[g]=G(g)}}function G(g){return D.skin.getSkinElement("playlist",g)}T();return this}})(jwplayer);(function(c){c.html5.playlistitem=function(b){var a={author:"",date:"",description:"",image:"",link:"",mediaid:"",tags:"",title:"",provider:"",file:"",streamer:"",duration:-1,start:0,currentLevel:-1,levels:[]};var f=c.utils.extend({},a,b);if(f.type){f.provider=f.type;delete f.type}if(f.levels.length===0){f.levels[0]=new c.html5.playlistitemlevel(f)}if(!f.provider){f.provider=d(f.levels[0])}else{f.provider=f.provider.toLowerCase()}return f};function d(b){if(c.utils.isYouTube(b.file)){return"youtube"}else{var a=c.utils.extension(b.file);var h;if(a&&c.utils.extensionmap[a]){if(a=="m3u8"){return"video"}h=c.utils.extensionmap[a].html5}else{if(b.type){h=b.type}}if(h){var g=h.split("/")[0];if(g=="audio"){return"sound"}else{if(g=="video"){return g}}}}return""}})(jwplayer);(function(b){b.html5.playlistitemlevel=function(a){var e={file:"",streamer:"",bitrate:0,width:0};for(var f in e){if(b.utils.exists(a[f])){e[f]=a[f]}}return e}})(jwplayer);(function(b){b.html5.playlistloader=function(){var f=new b.html5.eventdispatcher();b.utils.extend(this,f);this.load=function(c){b.utils.ajax(c,e,a)};function e(d){var j=[];try{var j=b.utils.parsers.rssparser.parse(d.responseXML.firstChild);f.sendEvent(b.api.events.JWPLAYER_PLAYLIST_LOADED,{playlist:new b.html5.playlist({playlist:j})})}catch(c){a("Could not parse the playlist")}}function a(c){f.sendEvent(b.api.events.JWPLAYER_ERROR,{message:c?c:"Could not load playlist an unknown reason."})}}})(jwplayer);(function(b){b.html5.skin=function(){var a={};var d=false;this.load=function(f,c){new b.html5.skinloader(f,function(e){d=true;a=e;c()},function(){new b.html5.skinloader("",function(e){d=true;a=e;c()})})};this.getSkinElement=function(h,g){if(d){try{return a[h].elements[g]}catch(c){b.utils.log("No such skin component / element: ",[h,g])}}return null};this.getComponentSettings=function(c){if(d){return a[c].settings}return null};this.getComponentLayout=function(c){if(d){return a[c].layout}return null}}})(jwplayer);(function(b){b.html5.skinloader=function(D,u,z){var v={};var G=u;var y=z;var E=true;var A;var w=D;var I=false;function x(){if(typeof w!="string"||w===""){F(b.html5.defaultSkin().xml)}else{b.utils.ajax(b.utils.getAbsolutePath(w),function(d){try{if(b.utils.exists(d.responseXML)){F(d.responseXML);return}}catch(c){B()}F(b.html5.defaultSkin().xml)},function(c){F(b.html5.defaultSkin().xml)})}}function F(m){var U=m.getElementsByTagName("component");if(U.length===0){return}for(var p=0;p<U.length;p++){var W=U[p].getAttribute("name");var X={settings:{},elements:{},layout:{}};v[W]=X;var s=U[p].getElementsByTagName("elements")[0].getElementsByTagName("element");for(var S=0;S<s.length;S++){H(s[S],W)}var k=U[p].getElementsByTagName("settings")[0];if(k&&k.childNodes.length>0){var j=k.getElementsByTagName("setting");for(var d=0;d<j.length;d++){var c=j[d].getAttribute("name");var n=j[d].getAttribute("value");var o=/color$/.test(c)?"color":null;v[W].settings[c]=b.utils.typechecker(n,o)}}var h=U[p].getElementsByTagName("layout")[0];if(h&&h.childNodes.length>0){var g=h.getElementsByTagName("group");for(var q=0;q<g.length;q++){var Y=g[q];v[W].layout[Y.getAttribute("position")]={elements:[]};for(var e=0;e<Y.attributes.length;e++){var V=Y.attributes[e];v[W].layout[Y.getAttribute("position")][V.name]=V.value}var f=Y.getElementsByTagName("*");for(var r=0;r<f.length;r++){var T=f[r];v[W].layout[Y.getAttribute("position")].elements.push({type:T.tagName});for(var R=0;R<T.attributes.length;R++){var l=T.attributes[R];v[W].layout[Y.getAttribute("position")].elements[r][l.name]=l.value}if(!b.utils.exists(v[W].layout[Y.getAttribute("position")].elements[r].name)){v[W].layout[Y.getAttribute("position")].elements[r].name=T.tagName}}}}E=false;a()}}function a(){clearInterval(A);if(!I){A=setInterval(function(){t()},100)}}function H(k,d){var e=new Image();var h=k.getAttribute("name");var f=k.getAttribute("src");var c;if(f.indexOf("data:image/png;base64,")===0){c=f}else{var g=b.utils.getAbsolutePath(w);var j=g.substr(0,g.lastIndexOf("/"));c=[j,d,f].join("/")}v[d].elements[h]={height:0,width:0,src:"",ready:false,image:e};e.onload=function(l){C(e,h,d)};e.onerror=function(l){I=true;a();y()};e.src=c}function B(){for(var f in v){var d=v[f];for(var g in d.elements){var c=d.elements[g];var e=c.image;e.onload=null;e.onerror=null;delete c.image;delete d.elements[g]}delete v[f]}}function t(){for(var d in v){if(d!="properties"){for(var c in v[d].elements){if(!v[d].elements[c].ready){return}}}}if(E===false){clearInterval(A);G(v)}}function C(e,c,d){if(v[d]&&v[d].elements[c]){v[d].elements[c].height=e.height;v[d].elements[c].width=e.width;v[d].elements[c].src=e.src;v[d].elements[c].ready=true;a()}else{b.utils.log("Loaded an image for a missing element: "+d+"."+c)}}x()}})(jwplayer);(function(b){b.html5.api=function(x,a){var o={};var u=document.createElement("div");x.parentNode.replaceChild(u,x);u.id=x.id;o.version=b.version;o.id=u.id;var p=new b.html5.model(o,u,a);var r=new b.html5.view(o,u,p);var q=new b.html5.controller(o,u,p,r);o.skin=new b.html5.skin();o.jwPlay=function(c){if(typeof c=="undefined"){v()}else{if(c.toString().toLowerCase()=="true"){q.play()}else{q.pause()}}};o.jwPause=function(c){if(typeof c=="undefined"){v()}else{if(c.toString().toLowerCase()=="true"){q.pause()}else{q.play()}}};function v(){if(p.state==b.api.events.state.PLAYING||p.state==b.api.events.state.BUFFERING){q.pause()}else{q.play()}}o.jwStop=q.stop;o.jwSeek=q.seek;o.jwPlaylistItem=q.item;o.jwPlaylistNext=q.next;o.jwPlaylistPrev=q.prev;o.jwResize=q.resize;o.jwLoad=q.load;o.jwDetachMedia=q.detachMedia;o.jwAttachMedia=q.attachMedia;function s(c){return function(){return p[c]}}function w(e,c,d){return function(){var f=p.plugins.object[e];if(f&&f[c]&&typeof f[c]=="function"){f[c].apply(f,d)}}}o.jwGetItem=s("item");o.jwGetPosition=s("position");o.jwGetDuration=s("duration");o.jwGetBuffer=s("buffer");o.jwGetWidth=s("width");o.jwGetHeight=s("height");o.jwGetFullscreen=s("fullscreen");o.jwSetFullscreen=q.setFullscreen;o.jwGetVolume=s("volume");o.jwSetVolume=q.setVolume;o.jwGetMute=s("mute");o.jwSetMute=q.setMute;o.jwGetStretching=function(){return p.stretching.toUpperCase()};o.jwGetState=s("state");o.jwGetVersion=function(){return o.version};o.jwGetPlaylist=function(){return p.playlist};o.jwGetPlaylistIndex=o.jwGetItem;o.jwAddEventListener=q.addEventListener;o.jwRemoveEventListener=q.removeEventListener;o.jwSendEvent=q.sendEvent;o.jwDockSetButton=function(c,f,e,d){if(p.plugins.object.dock&&p.plugins.object.dock.setButton){p.plugins.object.dock.setButton(c,f,e,d)}};o.jwControlbarShow=w("controlbar","show");o.jwControlbarHide=w("controlbar","hide");o.jwDockShow=w("dock","show");o.jwDockHide=w("dock","hide");o.jwDisplayShow=w("display","show");o.jwDisplayHide=w("display","hide");o.jwGetLevel=function(){};o.jwGetBandwidth=function(){};o.jwGetLockState=function(){};o.jwLock=function(){};o.jwUnlock=function(){};function y(){if(p.config.playlistfile){p.addEventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED,t);p.loadPlaylist(p.config.playlistfile)}else{if(typeof p.config.playlist=="string"){p.addEventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED,t);p.loadPlaylist(p.config.playlist)}else{p.loadPlaylist(p.config);setTimeout(t,25)}}}function t(c){p.removeEventListener(b.api.events.JWPLAYER_PLAYLIST_LOADED,t);p.setupPlugins();r.setup();var c={id:o.id,version:o.version};q.playerReady(c)}if(p.config.chromeless&&!b.utils.isIOS()){y()}else{o.skin.load(p.config.skin,y)}return o}})(jwplayer)};
/*
 * jQuery Tools 1.2.1 - The missing UI library for the Web
 * 
 * [tabs, tabs.slideshow, tooltip, tooltip.slide, tooltip.dynamic, scrollable, scrollable.autoscroll, scrollable.navigator, overlay, toolbox.flashembed, toolbox.history, toolbox.expose, toolbox.mousewheel]
 * 
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 * 
 * http://flowplayer.org/tools/
 * 
 * jquery.event.wheel.js - rev 1 
 * Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
 * Liscensed under the MIT License (MIT-LICENSE.txt)
 * http://www.opensource.org/licenses/mit-license.php
 * Created: 2008-07-01 | Updated: 2008-07-14
 * 
 * -----
 * 
 * File generated: Thu May 13 11:04:05 GMT 2010
 */
(function(c){function p(d,a,b){var e=this,l=d.add(this),h=d.find(b.tabs),j=a.jquery?a:d.children(a),i;h.length||(h=d.children());j.length||(j=d.parent().find(a));j.length||(j=c(a));c.extend(this,{click:function(f,g){var k=h.eq(f);if(typeof f=="string"&&f.replace("#","")){k=h.filter("[href*="+f.replace("#","")+"]");f=Math.max(h.index(k),0)}if(b.rotate){var n=h.length-1;if(f<0)return e.click(n,g);if(f>n)return e.click(0,g)}if(!k.length){if(i>=0)return e;f=b.initialIndex;k=h.eq(f)}if(f===i)return e;
g=g||c.Event();g.type="onBeforeClick";l.trigger(g,[f]);if(!g.isDefaultPrevented()){o[b.effect].call(e,f,function(){g.type="onClick";l.trigger(g,[f])});i=f;h.removeClass(b.current);k.addClass(b.current);return e}},getConf:function(){return b},getTabs:function(){return h},getPanes:function(){return j},getCurrentPane:function(){return j.eq(i)},getCurrentTab:function(){return h.eq(i)},getIndex:function(){return i},next:function(){return e.click(i+1)},prev:function(){return e.click(i-1)}});c.each("onBeforeClick,onClick".split(","),
function(f,g){c.isFunction(b[g])&&c(e).bind(g,b[g]);e[g]=function(k){c(e).bind(g,k);return e}});if(b.history&&c.fn.history){c.tools.history.init(h);b.event="history"}h.each(function(f){c(this).bind(b.event,function(g){e.click(f,g);return g.preventDefault()})});j.find("a[href^=#]").click(function(f){e.click(c(this).attr("href"),f)});if(location.hash)e.click(location.hash);else if(b.initialIndex===0||b.initialIndex>0)e.click(b.initialIndex)}c.tools=c.tools||{version:"1.2.1"};c.tools.tabs={conf:{tabs:"a",
current:"current",onBeforeClick:null,onClick:null,effect:"default",initialIndex:0,event:"click",rotate:false,history:false},addEffect:function(d,a){o[d]=a}};var o={"default":function(d,a){this.getPanes().hide().eq(d).show();a.call()},fade:function(d,a){var b=this.getConf(),e=b.fadeOutSpeed,l=this.getPanes();e?l.fadeOut(e):l.hide();l.eq(d).fadeIn(b.fadeInSpeed,a)},slide:function(d,a){this.getPanes().slideUp(200);this.getPanes().eq(d).slideDown(400,a)},ajax:function(d,a){this.getPanes().eq(0).load(this.getTabs().eq(d).attr("href"),
a)}},m;c.tools.tabs.addEffect("horizontal",function(d,a){m||(m=this.getPanes().eq(0).width());this.getCurrentPane().animate({width:0},function(){c(this).hide()});this.getPanes().eq(d).animate({width:m},function(){c(this).show();a.call()})});c.fn.tabs=function(d,a){var b=this.data("tabs");if(b)return b;if(c.isFunction(a))a={onBeforeClick:a};a=c.extend({},c.tools.tabs.conf,a);this.each(function(){b=new p(c(this),d,a);c(this).data("tabs",b)});return a.api?b:this}})(jQuery);
(function(d){function r(g,a){function p(f){var e=d(f);return e.length<2?e:g.parent().find(f)}var c=this,j=g.add(this),b=g.data("tabs"),h,l,m,n=false,o=p(a.next).click(function(){b.next()}),k=p(a.prev).click(function(){b.prev()});d.extend(c,{getTabs:function(){return b},getConf:function(){return a},play:function(){if(!h){var f=d.Event("onBeforePlay");j.trigger(f);if(f.isDefaultPrevented())return c;n=false;h=setInterval(b.next,a.interval);j.trigger("onPlay");b.next()}},pause:function(){if(!h)return c;
var f=d.Event("onBeforePause");j.trigger(f);if(f.isDefaultPrevented())return c;h=clearInterval(h);m=clearInterval(m);j.trigger("onPause")},stop:function(){c.pause();n=true}});d.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","),function(f,e){d.isFunction(a[e])&&c.bind(e,a[e]);c[e]=function(s){return c.bind(e,s)}});if(a.autopause){var t=b.getTabs().add(o).add(k).add(b.getPanes());t.hover(function(){c.pause();l=clearInterval(l)},function(){n||(l=setTimeout(c.play,a.interval))})}if(a.autoplay)m=
setTimeout(c.play,a.interval);else c.stop();a.clickable&&b.getPanes().click(function(){b.next()});if(!b.getConf().rotate){var i=a.disabledClass;b.getIndex()||k.addClass(i);b.onBeforeClick(function(f,e){if(e){k.removeClass(i);e==b.getTabs().length-1?o.addClass(i):o.removeClass(i)}else k.addClass(i)})}}var q;q=d.tools.tabs.slideshow={conf:{next:".forward",prev:".backward",disabledClass:"disabled",autoplay:false,autopause:true,interval:3E3,clickable:true,api:false}};d.fn.slideshow=function(g){var a=
this.data("slideshow");if(a)return a;g=d.extend({},q.conf,g);this.each(function(){a=new r(d(this),g);d(this).data("slideshow",a)});return g.api?a:this}})(jQuery);
(function(f){function p(a,b,c){var h=c.relative?a.position().top:a.offset().top,e=c.relative?a.position().left:a.offset().left,i=c.position[0];h-=b.outerHeight()-c.offset[0];e+=a.outerWidth()+c.offset[1];var j=b.outerHeight()+a.outerHeight();if(i=="center")h+=j/2;if(i=="bottom")h+=j;i=c.position[1];a=b.outerWidth()+a.outerWidth();if(i=="center")e-=a/2;if(i=="left")e-=a;return{top:h,left:e}}function t(a,b){var c=this,h=a.add(c),e,i=0,j=0,m=a.attr("title"),q=n[b.effect],k,r=a.is(":input"),u=r&&a.is(":checkbox, :radio, select, :button"),
s=a.attr("type"),l=b.events[s]||b.events[r?u?"widget":"input":"def"];if(!q)throw'Nonexistent effect "'+b.effect+'"';l=l.split(/,\s*/);if(l.length!=2)throw"Tooltip: bad events configuration for "+s;a.bind(l[0],function(d){if(b.predelay){clearTimeout(i);j=setTimeout(function(){c.show(d)},b.predelay)}else c.show(d)}).bind(l[1],function(d){if(b.delay){clearTimeout(j);i=setTimeout(function(){c.hide(d)},b.delay)}else c.hide(d)});if(m&&b.cancelDefault){a.removeAttr("title");a.data("title",m)}f.extend(c,
{show:function(d){if(!e){if(m)e=f(b.layout).addClass(b.tipClass).appendTo(document.body).hide().append(m);else if(b.tip)e=f(b.tip).eq(0);else{e=a.next();e.length||(e=a.parent().next())}if(!e.length)throw"Cannot find tooltip for "+a;}if(c.isShown())return c;e.stop(true,true);var g=p(a,e,b);d=d||f.Event();d.type="onBeforeShow";h.trigger(d,[g]);if(d.isDefaultPrevented())return c;g=p(a,e,b);e.css({position:"absolute",top:g.top,left:g.left});k=true;q[0].call(c,function(){d.type="onShow";k="full";h.trigger(d)});
g=b.events.tooltip.split(/,\s*/);e.bind(g[0],function(){clearTimeout(i);clearTimeout(j)});g[1]&&!a.is("input:not(:checkbox, :radio), textarea")&&e.bind(g[1],function(o){o.relatedTarget!=a[0]&&a.trigger(l[1].split(" ")[0])});return c},hide:function(d){if(!e||!c.isShown())return c;d=d||f.Event();d.type="onBeforeHide";h.trigger(d);if(!d.isDefaultPrevented()){k=false;n[b.effect][1].call(c,function(){d.type="onHide";k=false;h.trigger(d)});return c}},isShown:function(d){return d?k=="full":k},getConf:function(){return b},
getTip:function(){return e},getTrigger:function(){return a}});f.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","),function(d,g){f.isFunction(b[g])&&f(c).bind(g,b[g]);c[g]=function(o){f(c).bind(g,o);return c}})}f.tools=f.tools||{version:"1.2.1"};f.tools.tooltip={conf:{effect:"toggle",fadeOutSpeed:"fast",predelay:0,delay:30,opacity:1,tip:0,position:["top","center"],offset:[0,0],relative:false,cancelDefault:true,events:{def:"mouseenter,mouseleave",input:"focus,blur",widget:"focus mouseenter,blur mouseleave",
tooltip:"mouseenter,mouseleave"},layout:"<div/>",tipClass:"tooltip"},addEffect:function(a,b,c){n[a]=[b,c]}};var n={toggle:[function(a){var b=this.getConf(),c=this.getTip();b=b.opacity;b<1&&c.css({opacity:b});c.show();a.call()},function(a){this.getTip().hide();a.call()}],fade:[function(a){this.getTip().fadeIn(this.getConf().fadeInSpeed,a)},function(a){this.getTip().fadeOut(this.getConf().fadeOutSpeed,a)}]};f.fn.tooltip=function(a){var b=this.data("tooltip");if(b)return b;a=f.extend(true,{},f.tools.tooltip.conf,
a);if(typeof a.position=="string")a.position=a.position.split(/,?\s/);this.each(function(){b=new t(f(this),a);f(this).data("tooltip",b)});return a.api?b:this}})(jQuery);
(function(d){var i=d.tools.tooltip;d.extend(i.conf,{direction:"up",bounce:false,slideOffset:10,slideInSpeed:200,slideOutSpeed:200,slideFade:!d.browser.msie});var e={up:["-","top"],down:["+","top"],left:["-","left"],right:["+","left"]};i.addEffect("slide",function(g){var a=this.getConf(),f=this.getTip(),b=a.slideFade?{opacity:a.opacity}:{},c=e[a.direction]||e.up;b[c[1]]=c[0]+"="+a.slideOffset;a.slideFade&&f.css({opacity:0});f.show().animate(b,a.slideInSpeed,g)},function(g){var a=this.getConf(),f=a.slideOffset,
b=a.slideFade?{opacity:0}:{},c=e[a.direction]||e.up,h=""+c[0];if(a.bounce)h=h=="+"?"-":"+";b[c[1]]=h+"="+f;this.getTip().animate(b,a.slideOutSpeed,function(){d(this).hide();g.call()})})})(jQuery);
(function(g){function j(a){var c=g(window),d=c.width()+c.scrollLeft(),h=c.height()+c.scrollTop();return[a.offset().top<=c.scrollTop(),d<=a.offset().left+a.width(),h<=a.offset().top+a.height(),c.scrollLeft()>=a.offset().left]}function k(a){for(var c=a.length;c--;)if(a[c])return false;return true}var i=g.tools.tooltip;i.dynamic={conf:{classNames:"top right bottom left"}};g.fn.dynamic=function(a){if(typeof a=="number")a={speed:a};a=g.extend({},i.dynamic.conf,a);var c=a.classNames.split(/\s/),d;this.each(function(){var h=
g(this).tooltip().onBeforeShow(function(e,f){e=this.getTip();var b=this.getConf();d||(d=[b.position[0],b.position[1],b.offset[0],b.offset[1],g.extend({},b)]);g.extend(b,d[4]);b.position=[d[0],d[1]];b.offset=[d[2],d[3]];e.css({visibility:"hidden",position:"absolute",top:f.top,left:f.left}).show();f=j(e);if(!k(f)){if(f[2]){g.extend(b,a.top);b.position[0]="top";e.addClass(c[0])}if(f[3]){g.extend(b,a.right);b.position[1]="right";e.addClass(c[1])}if(f[0]){g.extend(b,a.bottom);b.position[0]="bottom";e.addClass(c[2])}if(f[1]){g.extend(b,
a.left);b.position[1]="left";e.addClass(c[3])}if(f[0]||f[2])b.offset[0]*=-1;if(f[1]||f[3])b.offset[1]*=-1}e.css({visibility:"visible"}).hide()});h.onBeforeShow(function(){var e=this.getConf();this.getTip();setTimeout(function(){e.position=[d[0],d[1]];e.offset=[d[2],d[3]]},0)});h.onHide(function(){var e=this.getTip();e.removeClass(a.classNames)});ret=h});return a.api?ret:this}})(jQuery);
(function(e){function n(f,c){var a=e(c);return a.length<2?a:f.parent().find(c)}function t(f,c){var a=this,k=f.add(a),g=f.children(),l=0,m=c.vertical;j||(j=a);if(g.length>1)g=e(c.items,f);e.extend(a,{getConf:function(){return c},getIndex:function(){return l},getSize:function(){return a.getItems().size()},getNaviButtons:function(){return o.add(p)},getRoot:function(){return f},getItemWrap:function(){return g},getItems:function(){return g.children(c.item).not("."+c.clonedClass)},move:function(b,d){return a.seekTo(l+
b,d)},next:function(b){return a.move(1,b)},prev:function(b){return a.move(-1,b)},begin:function(b){return a.seekTo(0,b)},end:function(b){return a.seekTo(a.getSize()-1,b)},focus:function(){return j=a},addItem:function(b){b=e(b);if(c.circular){e(".cloned:last").before(b);e(".cloned:first").replaceWith(b.clone().addClass(c.clonedClass))}else g.append(b);k.trigger("onAddItem",[b]);return a},seekTo:function(b,d,h){if(!c.circular&&b<0||b>a.getSize())return a;var i=b;if(b.jquery)b=a.getItems().index(b);
else i=a.getItems().eq(b);var q=e.Event("onBeforeSeek");if(!h){k.trigger(q,[b,d]);if(q.isDefaultPrevented()||!i.length)return a}i=m?{top:-i.position().top}:{left:-i.position().left};l=b;j=a;g.animate(i,d,c.easing,h||function(){k.trigger("onSeek",[b])});return a}});e.each(["onBeforeSeek","onSeek","onAddItem"],function(b,d){e.isFunction(c[d])&&e(a).bind(d,c[d]);a[d]=function(h){e(a).bind(d,h);return a}});if(c.circular){var r=a.getItems().slice(-1).clone().prependTo(g),s=a.getItems().eq(1).clone().appendTo(g);
r.add(s).addClass(c.clonedClass);a.onBeforeSeek(function(b,d,h){if(!b.isDefaultPrevented())if(d==-1){a.seekTo(r,h,function(){a.end(0)});return b.preventDefault()}else d==a.getSize()&&a.seekTo(s,h,function(){a.begin(0)})});a.seekTo(0,0)}var o=n(f,c.prev).click(function(){a.prev()}),p=n(f,c.next).click(function(){a.next()});!c.circular&&a.getSize()>1&&a.onBeforeSeek(function(b,d){o.toggleClass(c.disabledClass,d<=0);p.toggleClass(c.disabledClass,d>=a.getSize()-1)});c.mousewheel&&e.fn.mousewheel&&f.mousewheel(function(b,
d){if(c.mousewheel){a.move(d<0?1:-1,c.wheelSpeed||50);return false}});c.keyboard&&e(document).bind("keydown.scrollable",function(b){if(!(!c.keyboard||b.altKey||b.ctrlKey||e(b.target).is(":input")))if(!(c.keyboard!="static"&&j!=a)){var d=b.keyCode;if(m&&(d==38||d==40)){a.move(d==38?-1:1);return b.preventDefault()}if(!m&&(d==37||d==39)){a.move(d==37?-1:1);return b.preventDefault()}}});e(a).trigger("onBeforeSeek",[c.initialIndex])}e.tools=e.tools||{version:"1.2.1"};e.tools.scrollable={conf:{activeClass:"active",
circular:false,clonedClass:"cloned",disabledClass:"disabled",easing:"swing",initialIndex:0,item:null,items:".items",keyboard:true,mousewheel:false,next:".next",prev:".prev",speed:400,vertical:false,wheelSpeed:0}};var j;e.fn.scrollable=function(f){var c=this.data("scrollable");if(c)return c;f=e.extend({},e.tools.scrollable.conf,f);this.each(function(){c=new t(e(this),f);e(this).data("scrollable",c)});return f.api?c:this}})(jQuery);
(function(c){var g=c.tools.scrollable;g.autoscroll={conf:{autoplay:true,interval:3E3,autopause:true}};c.fn.autoscroll=function(d){if(typeof d=="number")d={interval:d};var b=c.extend({},g.autoscroll.conf,d),h;this.each(function(){var a=c(this).data("scrollable");if(a)h=a;var e,i,f=true;a.play=function(){if(!e){f=false;e=setInterval(function(){a.next()},b.interval);a.next()}};a.pause=function(){e=clearInterval(e)};a.stop=function(){a.pause();f=true};b.autopause&&a.getRoot().add(a.getNaviButtons()).hover(function(){a.pause();
clearInterval(i)},function(){f||(i=setTimeout(a.play,b.interval))});b.autoplay&&setTimeout(a.play,b.interval)});return b.api?h:this}})(jQuery);
(function(d){function p(c,g){var h=d(g);return h.length<2?h:c.parent().find(g)}var m=d.tools.scrollable;m.navigator={conf:{navi:".navi",naviItem:null,activeClass:"active",indexed:false,idPrefix:null,history:false}};d.fn.navigator=function(c){if(typeof c=="string")c={navi:c};c=d.extend({},m.navigator.conf,c);var g;this.each(function(){function h(a,b,i){e.seekTo(b);if(j){if(location.hash)location.hash=a.attr("href").replace("#","")}else return i.preventDefault()}function f(){return k.find(c.naviItem||
"> *")}function n(a){var b=d("<"+(c.naviItem||"a")+"/>").click(function(i){h(d(this),a,i)}).attr("href","#"+a);a===0&&b.addClass(l);c.indexed&&b.text(a+1);c.idPrefix&&b.attr("id",c.idPrefix+a);return b.appendTo(k)}function o(a,b){a=f().eq(b.replace("#",""));a.length||(a=f().filter("[href="+b+"]"));a.click()}var e=d(this).data("scrollable"),k=p(e.getRoot(),c.navi),q=e.getNaviButtons(),l=c.activeClass,j=c.history&&d.fn.history;if(e)g=e;e.getNaviButtons=function(){return q.add(k)};f().length?f().each(function(a){d(this).click(function(b){h(d(this),
a,b)})}):d.each(e.getItems(),function(a){n(a)});e.onBeforeSeek(function(a,b){var i=f().eq(b);!a.isDefaultPrevented()&&i.length&&f().removeClass(l).eq(b).addClass(l)});e.onAddItem(function(a,b){b=n(e.getItems().index(b));j&&b.history(o)});j&&f().history(o)});return c.api?g:this}})(jQuery);
(function(a){function t(d,b){var c=this,i=d.add(c),o=a(window),k,f,m,g=a.tools.expose&&(b.mask||b.expose),n=Math.random().toString().slice(10);if(g){if(typeof g=="string")g={color:g};g.closeOnClick=g.closeOnEsc=false}var p=b.target||d.attr("rel");f=p?a(p):d;if(!f.length)throw"Could not find Overlay: "+p;d&&d.index(f)==-1&&d.click(function(e){c.load(e);return e.preventDefault()});a.extend(c,{load:function(e){if(c.isOpened())return c;var h=q[b.effect];if(!h)throw'Overlay: cannot find effect : "'+b.effect+
'"';b.oneInstance&&a.each(s,function(){this.close(e)});e=e||a.Event();e.type="onBeforeLoad";i.trigger(e);if(e.isDefaultPrevented())return c;m=true;g&&a(f).expose(g);var j=b.top,r=b.left,u=f.outerWidth({margin:true}),v=f.outerHeight({margin:true});if(typeof j=="string")j=j=="center"?Math.max((o.height()-v)/2,0):parseInt(j,10)/100*o.height();if(r=="center")r=Math.max((o.width()-u)/2,0);h[0].call(c,{top:j,left:r},function(){if(m){e.type="onLoad";i.trigger(e)}});g&&b.closeOnClick&&a.mask.getMask().one("click",
c.close);b.closeOnClick&&a(document).bind("click."+n,function(l){a(l.target).parents(f).length||c.close(l)});b.closeOnEsc&&a(document).bind("keydown."+n,function(l){l.keyCode==27&&c.close(l)});return c},close:function(e){if(!c.isOpened())return c;e=e||a.Event();e.type="onBeforeClose";i.trigger(e);if(!e.isDefaultPrevented()){m=false;q[b.effect][1].call(c,function(){e.type="onClose";i.trigger(e)});a(document).unbind("click."+n).unbind("keydown."+n);g&&a.mask.close();return c}},getOverlay:function(){return f},
getTrigger:function(){return d},getClosers:function(){return k},isOpened:function(){return m},getConf:function(){return b}});a.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","),function(e,h){a.isFunction(b[h])&&a(c).bind(h,b[h]);c[h]=function(j){a(c).bind(h,j);return c}});k=f.find(b.close||".close");if(!k.length&&!b.close){k=a('<div class="close"></div>');f.prepend(k)}k.click(function(e){c.close(e)});b.load&&c.load()}a.tools=a.tools||{version:"1.2.1"};a.tools.overlay={addEffect:function(d,
b,c){q[d]=[b,c]},conf:{close:null,closeOnClick:true,closeOnEsc:true,closeSpeed:"fast",effect:"default",fixed:!a.browser.msie||a.browser.version>6,left:"center",load:false,mask:null,oneInstance:true,speed:"normal",target:null,top:"10%"}};var s=[],q={};a.tools.overlay.addEffect("default",function(d,b){var c=this.getConf(),i=a(window);if(!c.fixed){d.top+=i.scrollTop();d.left+=i.scrollLeft()}d.position=c.fixed?"fixed":"absolute";this.getOverlay().css(d).fadeIn(c.speed,b)},function(d){this.getOverlay().fadeOut(this.getConf().closeSpeed,
d)});a.fn.overlay=function(d){var b=this.data("overlay");if(b)return b;if(a.isFunction(d))d={onBeforeLoad:d};d=a.extend(true,{},a.tools.overlay.conf,d);this.each(function(){b=new t(a(this),d);s.push(b);a(this).data("overlay",b)});return d.api?b:this}})(jQuery);
(function(){function f(a,b){if(b)for(key in b)if(b.hasOwnProperty(key))a[key]=b[key];return a}function l(a,b){var c=[];for(var d in a)if(a.hasOwnProperty(d))c[d]=b(a[d]);return c}function m(a,b,c){if(e.isSupported(b.version))a.innerHTML=e.getHTML(b,c);else if(b.expressInstall&&e.isSupported([6,65]))a.innerHTML=e.getHTML(f(b,{src:b.expressInstall}),{MMredirectURL:location.href,MMplayerType:"PlugIn",MMdoctitle:document.title});else{if(!a.innerHTML.replace(/\s/g,"")){a.innerHTML="<h2>Flash version "+
b.version+" or greater is required</h2><h3>"+(g[0]>0?"Your version is "+g:"You have no flash plugin installed")+"</h3>"+(a.tagName=="A"?"<p>Click here to download latest version</p>":"<p>Download latest version from <a href='"+k+"'>here</a></p>");if(a.tagName=="A")a.onclick=function(){location.href=k}}if(b.onFail){var d=b.onFail.call(this);if(typeof d=="string")a.innerHTML=d}}if(h)window[b.id]=document.getElementById(b.id);f(this,{getRoot:function(){return a},getOptions:function(){return b},getConf:function(){return c},
getApi:function(){return a.firstChild}})}var h=document.all,k="http://www.adobe.com/go/getflashplayer",n=typeof jQuery=="function",o=/(\d+)[^\d]+(\d+)[^\d]*(\d*)/,i={width:"100%",height:"100%",id:"_"+(""+Math.random()).slice(9),allowfullscreen:true,allowscriptaccess:"always",quality:"high",version:[3,0],onFail:null,expressInstall:null,w3c:false,cachebusting:false};window.attachEvent&&window.attachEvent("onbeforeunload",function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}});
window.flashembed=function(a,b,c){if(typeof a=="string")a=document.getElementById(a.replace("#",""));if(a){if(typeof b=="string")b={src:b};return new m(a,f(f({},i),b),c)}};var e=f(window.flashembed,{conf:i,getVersion:function(){var a;try{a=navigator.plugins["Shockwave Flash"].description.slice(16)}catch(b){try{var c=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");a=c&&c.GetVariable("$version")}catch(d){}}return(a=o.exec(a))?[a[1],a[3]]:[0,0]},asString:function(a){if(a===null||a===undefined)return null;
var b=typeof a;if(b=="object"&&a.push)b="array";switch(b){case "string":a=a.replace(new RegExp('(["\\\\])',"g"),"\\$1");a=a.replace(/^\s?(\d+\.?\d+)%/,"$1pct");return'"'+a+'"';case "array":return"["+l(a,function(d){return e.asString(d)}).join(",")+"]";case "function":return'"function()"';case "object":b=[];for(var c in a)a.hasOwnProperty(c)&&b.push('"'+c+'":'+e.asString(a[c]));return"{"+b.join(",")+"}"}return String(a).replace(/\s/g," ").replace(/\'/g,'"')},getHTML:function(a,b){a=f({},a);var c='<object width="'+
a.width+'" height="'+a.height+'" id="'+a.id+'"" name="'+a.id+'"';if(a.cachebusting)a.src+=(a.src.indexOf("?")!=-1?"&":"?")+Math.random();c+=a.w3c||!h?' data="'+a.src+'" type="application/x-shockwave-flash"':' classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"';c+=">";if(a.w3c||h)c+='<param name="movie" value="'+a.src+'" />';a.width=a.height=a.id=a.w3c=a.src=null;a.onFail=a.version=a.expressInstall=null;for(var d in a)if(a[d])c+='<param name="'+d+'" value="'+a[d]+'" />';a="";if(b){for(var j in b)if(b[j]){d=
b[j];a+=j+"="+(/function|object/.test(typeof d)?e.asString(d):d)+"&"}a=a.slice(0,-1);c+='<param name="flashvars" value=\''+a+"' />"}c+="</object>";return c},isSupported:function(a){return g[0]>a[0]||g[0]==a[0]&&g[1]>=a[1]}}),g=e.getVersion();if(n){jQuery.tools=jQuery.tools||{version:"1.2.1"};jQuery.tools.flashembed={conf:i};jQuery.fn.flashembed=function(a,b){return this.each(function(){$(this).data("flashembed",flashembed(this,a,b))})}}})();
(function(b){function h(c){if(c){var a=d.contentWindow.document;a.open().close();a.location.hash=c}}var g,d,f,i;b.tools=b.tools||{version:"1.2.1"};b.tools.history={init:function(c){if(!i){if(b.browser.msie&&b.browser.version<"8"){if(!d){d=b("<iframe/>").attr("src","javascript:false;").hide().get(0);b("body").append(d);setInterval(function(){var a=d.contentWindow.document;a=a.location.hash;g!==a&&b.event.trigger("hash",a)},100);h(location.hash||"#")}}else setInterval(function(){var a=location.hash;
a!==g&&b.event.trigger("hash",a)},100);f=!f?c:f.add(c);c.click(function(a){var e=b(this).attr("href");d&&h(e);if(e.slice(0,1)!="#"){location.href="#"+e;return a.preventDefault()}});i=true}}};b(window).bind("hash",function(c,a){a?f.filter(function(){var e=b(this).attr("href");return e==a||e==a.replace("#","")}).trigger("history",[a]):f.eq(0).trigger("history",[a]);g=a});b.fn.history=function(c){b.tools.history.init(this);return this.bind("history",c)}})(jQuery);
(function(b){function l(){if(b.browser.msie){var a=b(document).height(),d=b(window).height();return[window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,a-d<20?d:a]}return[b(window).width(),b(document).height()]}function i(a){if(a)return a.call(b.mask)}b.tools=b.tools||{version:"1.2.1"};var m;m=b.tools.expose={conf:{maskId:"exposeMask",loadSpeed:"slow",closeSpeed:"fast",closeOnClick:true,closeOnEsc:true,zIndex:9998,opacity:0.8,startOpacity:0,color:"#fff",onLoad:null,
onClose:null}};var c,j,f,g,k;b.mask={load:function(a,d){if(f)return this;if(typeof a=="string")a={color:a};a=a||g;g=a=b.extend(b.extend({},m.conf),a);c=b("#"+a.maskId);if(!c.length){c=b("<div/>").attr("id",a.maskId);b("body").append(c)}var h=l();c.css({position:"absolute",top:0,left:0,width:h[0],height:h[1],display:"none",opacity:a.startOpacity,zIndex:a.zIndex});h=c.css("backgroundColor");if(!h||h=="transparent"||h=="rgba(0, 0, 0, 0)")c.css("backgroundColor",a.color);if(i(a.onBeforeLoad)===false)return this;
a.closeOnEsc&&b(document).bind("keydown.mask",function(e){e.keyCode==27&&b.mask.close(e)});a.closeOnClick&&c.bind("click.mask",function(e){b.mask.close(e)});b(window).bind("resize.mask",function(){b.mask.fit()});if(d&&d.length){k=d.eq(0).css("zIndex");b.each(d,function(){var e=b(this);/relative|absolute|fixed/i.test(e.css("position"))||e.css("position","relative")});j=d.css({zIndex:Math.max(a.zIndex+1,k=="auto"?0:k)})}c.css({display:"block"}).fadeTo(a.loadSpeed,a.opacity,function(){b.mask.fit();i(a.onLoad)});
f=true;return this},close:function(){if(f){if(i(g.onBeforeClose)===false)return this;c.fadeOut(g.closeSpeed,function(){i(g.onClose);j&&j.css({zIndex:k})});b(document).unbind("keydown.mask");c.unbind("click.mask");b(window).unbind("resize.mask");f=false}return this},fit:function(){if(f){var a=l();c.css({width:a[0],height:a[1]})}},getMask:function(){return c},isLoaded:function(){return f},getConf:function(){return g},getExposed:function(){return j}};b.fn.mask=function(a){b.mask.load(a);return this};
b.fn.expose=function(a){b.mask.load(a,this);return this}})(jQuery);
(function(b){function c(a){switch(a.type){case "mousemove":return b.extend(a.data,{clientX:a.clientX,clientY:a.clientY,pageX:a.pageX,pageY:a.pageY});case "DOMMouseScroll":b.extend(a,a.data);a.delta=-a.detail/3;break;case "mousewheel":a.delta=a.wheelDelta/120;break}a.type="wheel";return b.event.handle.call(this,a,a.delta)}b.fn.mousewheel=function(a){return this[a?"bind":"trigger"]("wheel",a)};b.event.special.wheel={setup:function(){b.event.add(this,d,c,{})},teardown:function(){b.event.remove(this,
d,c)}};var d=!b.browser.mozilla?"mousewheel":"DOMMouseScroll"+(b.browser.version<"1.9"?" mousemove":"")})(jQuery);

if(typeof console === 'undefined') {
	console = { log: function() { } };
}

$(document).ready(function() {	

	defaultColor = $('input.hint').css('color');

	$('input.hint').css('color', '#666666');

	$('input.hint').focus(function() {
		if(this.value == this.defaultValue) {
			this.value = '';
			$(this).css('color',defaultColor);
		}
	}).blur(function() {
		if(!this.value.length) {
			this.value = this.defaultValue;
			$(this).css('color','#666666');
		}
	});

	$('form').submit(function() {		
		$('input.hint').each(function() {
			if(this.value == this.defaultValue) {
				this.value = '';
			}
		});
	});
	
	// As a hint is being displayed inside the input, hide the input's label. 
	$('input.hint').parent().find('label').hide();
});

/*
 * jQuery Text Overflow v0.7
 *
 * Licensed under the new BSD License.
 * Copyright 2009-2010, Bram Stein
 * All rights reserved.
 */
(function(c){var b=document.documentElement.style,d=("textOverflow" in b||"OTextOverflow" in b),a=function(f,i){var h=0,e=[],g=function(j){var l=0,k;if(h>i){return}for(l=0;l<j.length;l+=1){if(j[l].nodeType===1){k=j[l].cloneNode(false);e[e.length-1].appendChild(k);e.push(k);g(j[l].childNodes);e.pop()}else{if(j[l].nodeType===3){if(h+j[l].length<i){e[e.length-1].appendChild(j[l].cloneNode(false))}else{k=j[l].cloneNode(false);k.textContent=c.trim(k.textContent.substring(0,i-h));e[e.length-1].appendChild(k)}h+=j[l].length}else{e.appendChild(j[l].cloneNode(false))}}}};e.push(f.cloneNode(false));g(f.childNodes);return c(e.pop().childNodes)};c.extend(c.fn,{textOverflow:function(g,e){var f=g||"&#x2026;";if(!d){return this.each(function(){var l=c(this),m=l.clone(),p=l.clone(),k=l.text(),h=l.width(),n=0,o=0,j=k.length,i=function(){if(h!==l.width()){l.replaceWith(p);l=p;p=l.clone();l.textOverflow(g,false);h=l.width()}};l.after(m.hide().css({position:"absolute",width:"auto",overflow:"visible","max-width":"inherit"}));if(m.width()>h){while(n<j){o=Math.floor(n+((j-n)/2));m.empty().append(a(p.get(0),o)).append(f);if(m.width()<h){n=o+1}else{j=o}}if(n<k.length){l.empty().append(a(p.get(0),n-1)).append(f)}}m.remove();if(e){setInterval(i,200)}})}else{return this}}})})(jQuery);
$(document).ready(function(){
	
	//text-overflow for firefox
	$(".project_list .caption1, .explore .grid .caption1, .products_list .caption1, .exhibitions_list .caption1, .search_results .caption1, .feed .caption1").textOverflow();
	$(".neighbors li a").textOverflow();
	$('.projects.view .page_header .contributor_summary').textOverflow();
	
	$('.page_header .description, .about .description').each(function(){
		$(this).children('p:first').addClass("first");
	});
});
$(document).ready(function(event){
	$('#session a').eq(0).click(function(event){ 
		event.preventDefault();   
		$('#session_links').slideToggle('fast');
	});
});
$(document).ready(function(){
	$('#banner .search_box').click(function() {
		$(this).addClass('active');
	});
});
 
 
 /*  */ 
 
 
/*  */ 
/*!
 * jQuery Cycle Plugin (with Transition Definitions)
 * Examples and documentation at: http://jquery.malsup.com/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version: 2.9993 (26-MAY-2011)
 * Dual licensed under the MIT and GPL licenses.
 * http://jquery.malsup.com/license.html
 * Requires: jQuery v1.3.2 or later
 */
;(function($) {

var ver = '2.9992';

// if $.support is not defined (pre jQuery 1.3) add what I need
if ($.support == undefined) {
	$.support = {
		opacity: !($.browser.msie)
	};
}

function debug(s) {
	$.fn.cycle.debug && log(s);
}		
function log() {
	window.console && console.log && console.log('[cycle] ' + Array.prototype.join.call(arguments,' '));
}
$.expr[':'].paused = function(el) {
	return el.cyclePause;
}


// the options arg can be...
//   a number  - indicates an immediate transition should occur to the given slide index
//   a string  - 'pause', 'resume', 'toggle', 'next', 'prev', 'stop', 'destroy' or the name of a transition effect (ie, 'fade', 'zoom', etc)
//   an object - properties to control the slideshow
//
// the arg2 arg can be...
//   the name of an fx (only used in conjunction with a numeric value for 'options')
//   the value true (only used in first arg == 'resume') and indicates
//	 that the resume should occur immediately (not wait for next timeout)

$.fn.cycle = function(options, arg2) {
	var o = { s: this.selector, c: this.context };

	// in 1.3+ we can fix mistakes with the ready state
	if (this.length === 0 && options != 'stop') {
		if (!$.isReady && o.s) {
			log('DOM not ready, queuing slideshow');
			$(function() {
				$(o.s,o.c).cycle(options,arg2);
			});
			return this;
		}
		// is your DOM ready?  http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
		log('terminating; zero elements found by selector' + ($.isReady ? '' : ' (DOM not ready)'));
		return this;
	}

	// iterate the matched nodeset
	return this.each(function() {
		var opts = handleArguments(this, options, arg2);
		if (opts === false)
			return;

		opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
		
		// stop existing slideshow for this container (if there is one)
		if (this.cycleTimeout)
			clearTimeout(this.cycleTimeout);
		this.cycleTimeout = this.cyclePause = 0;

		var $cont = $(this);
		var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
		var els = $slides.get();

		var opts2 = buildOptions($cont, $slides, els, opts, o);
		if (opts2 === false)
			return;

		if (els.length < 2) {
			log('terminating; too few slides: ' + els.length);
			return;
		}

		var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.backwards);

		// if it's an auto slideshow, kick it off
		if (startTime) {
			startTime += (opts2.delay || 0);
			if (startTime < 10)
				startTime = 10;
			debug('first timeout: ' + startTime);
			this.cycleTimeout = setTimeout(function(){go(els,opts2,0,!opts.backwards)}, startTime);
		}
	});
};

function triggerPause(cont, byHover, onPager) {
	var opts = $(cont).data('cycle.opts');
	var paused = !!cont.cyclePause;
	if (paused && opts.paused)
		opts.paused(cont, opts, byHover, onPager);
	else if (!paused && opts.resumed)
		opts.resumed(cont, opts, byHover, onPager);
}

// process the args that were passed to the plugin fn
function handleArguments(cont, options, arg2) {
	if (cont.cycleStop == undefined)
		cont.cycleStop = 0;
	if (options === undefined || options === null)
		options = {};
	if (options.constructor == String) {
		switch(options) {
		case 'destroy':
		case 'stop':
			var opts = $(cont).data('cycle.opts');
			if (!opts)
				return false;
			cont.cycleStop++; // callbacks look for change
			if (cont.cycleTimeout)
				clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
			opts.elements && $(opts.elements).stop();
			$(cont).removeData('cycle.opts');
			if (options == 'destroy')
				destroy(opts);
			return false;
		case 'toggle':
			cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
			checkInstantResume(cont.cyclePause, arg2, cont);
			triggerPause(cont);
			return false;
		case 'pause':
			cont.cyclePause = 1;
			triggerPause(cont);
			return false;
		case 'resume':
			cont.cyclePause = 0;
			checkInstantResume(false, arg2, cont);
			triggerPause(cont);
			return false;
		case 'prev':
		case 'next':
			var opts = $(cont).data('cycle.opts');
			if (!opts) {
				log('options not found, "prev/next" ignored');
				return false;
			}
			$.fn.cycle[options](opts);
			return false;
		default:
			options = { fx: options };
		};
		return options;
	}
	else if (options.constructor == Number) {
		// go to the requested slide
		var num = options;
		options = $(cont).data('cycle.opts');
		if (!options) {
			log('options not found, can not advance slide');
			return false;
		}
		if (num < 0 || num >= options.elements.length) {
			log('invalid slide index: ' + num);
			return false;
		}
		options.nextSlide = num;
		if (cont.cycleTimeout) {
			clearTimeout(cont.cycleTimeout);
			cont.cycleTimeout = 0;
		}
		if (typeof arg2 == 'string')
			options.oneTimeFx = arg2;
		go(options.elements, options, 1, num >= options.currSlide);
		return false;
	}
	return options;
	
	function checkInstantResume(isPaused, arg2, cont) {
		if (!isPaused && arg2 === true) { // resume now!
			var options = $(cont).data('cycle.opts');
			if (!options) {
				log('options not found, can not resume');
				return false;
			}
			if (cont.cycleTimeout) {
				clearTimeout(cont.cycleTimeout);
				cont.cycleTimeout = 0;
			}
			go(options.elements, options, 1, !options.backwards);
		}
	}
};

function removeFilter(el, opts) {
	if (!$.support.opacity && opts.cleartype && el.style.filter) {
		try { el.style.removeAttribute('filter'); }
		catch(smother) {} // handle old opera versions
	}
};

// unbind event handlers
function destroy(opts) {
	if (opts.next)
		$(opts.next).unbind(opts.prevNextEvent);
	if (opts.prev)
		$(opts.prev).unbind(opts.prevNextEvent);
	
	if (opts.pager || opts.pagerAnchorBuilder)
		$.each(opts.pagerAnchors || [], function() {
			this.unbind().remove();
		});
	opts.pagerAnchors = null;
	if (opts.destroy) // callback
		opts.destroy(opts);
};

// one-time initialization
function buildOptions($cont, $slides, els, options, o) {
	// support metadata plugin (v1.0 and v2.0)
	var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
	var meta = $.isFunction($cont.data) ? $cont.data(opts.metaAttr) : null;
	if (meta)
		opts = $.extend(opts, meta);
	if (opts.autostop)
		opts.countdown = opts.autostopCount || els.length;

	var cont = $cont[0];
	$cont.data('cycle.opts', opts);
	opts.$cont = $cont;
	opts.stopCount = cont.cycleStop;
	opts.elements = els;
	opts.before = opts.before ? [opts.before] : [];
	opts.after = opts.after ? [opts.after] : [];

	// push some after callbacks
	if (!$.support.opacity && opts.cleartype)
		opts.after.push(function() { removeFilter(this, opts); });
	if (opts.continuous)
		opts.after.push(function() { go(els,opts,0,!opts.backwards); });

	saveOriginalOpts(opts);

	// clearType corrections
	if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
		clearTypeFix($slides);

	// container requires non-static position so that slides can be position within
	if ($cont.css('position') == 'static')
		$cont.css('position', 'relative');
	if (opts.width)
		$cont.width(opts.width);
	if (opts.height && opts.height != 'auto')
		$cont.height(opts.height);

	if (opts.startingSlide)
		opts.startingSlide = parseInt(opts.startingSlide,10);
	else if (opts.backwards)
		opts.startingSlide = els.length - 1;

	// if random, mix up the slide array
	if (opts.random) {
		opts.randomMap = [];
		for (var i = 0; i < els.length; i++)
			opts.randomMap.push(i);
		opts.randomMap.sort(function(a,b) {return Math.random() - 0.5;});
		opts.randomIndex = 1;
		opts.startingSlide = opts.randomMap[1];
	}
	else if (opts.startingSlide >= els.length)
		opts.startingSlide = 0; // catch bogus input
	opts.currSlide = opts.startingSlide || 0;
	var first = opts.startingSlide;

	// set position and zIndex on all the slides
	$slides.css({position: 'absolute', top:0, left:0}).hide().each(function(i) {
		var z;
		if (opts.backwards)
			z = first ? i <= first ? els.length + (i-first) : first-i : els.length-i;
		else
			z = first ? i >= first ? els.length - (i-first) : first-i : els.length-i;
		$(this).css('z-index', z)
	});

	// make sure first slide is visible
	$(els[first]).css('opacity',1).show(); // opacity bit needed to handle restart use case
	removeFilter(els[first], opts);

	// stretch slides
	if (opts.fit) {
		if (!opts.aspect) {
	        if (opts.width)
	            $slides.width(opts.width);
	        if (opts.height && opts.height != 'auto')
	            $slides.height(opts.height);
		} else {
			$slides.each(function(){
				var $slide = $(this);
				var ratio = (opts.aspect === true) ? $slide.width()/$slide.height() : opts.aspect;
				if( opts.width && $slide.width() != opts.width ) {
					$slide.width( opts.width );
					$slide.height( opts.width / ratio );
				}

				if( opts.height && $slide.height() < opts.height ) {
					$slide.height( opts.height );
					$slide.width( opts.height * ratio );
				}
			});
		}
	}

	if (opts.center && ((!opts.fit) || opts.aspect)) {
		$slides.each(function(){
			var $slide = $(this);
			$slide.css({
				"margin-left": opts.width ?
					((opts.width - $slide.width()) / 2) + "px" :
					0,
				"margin-top": opts.height ?
					((opts.height - $slide.height()) / 2) + "px" :
					0
			});
		});
	}

	if (opts.center && !opts.fit && !opts.slideResize) {
	  	$slides.each(function(){
	    	var $slide = $(this);
	    	$slide.css({
	      		"margin-left": opts.width ? ((opts.width - $slide.width()) / 2) + "px" : 0,
	      		"margin-top": opts.height ? ((opts.height - $slide.height()) / 2) + "px" : 0
	    	});
	  	});
	}
		
	// stretch container
	var reshape = opts.containerResize && !$cont.innerHeight();
	if (reshape) { // do this only if container has no size http://tinyurl.com/da2oa9
		var maxw = 0, maxh = 0;
		for(var j=0; j < els.length; j++) {
			var $e = $(els[j]), e = $e[0], w = $e.outerWidth(), h = $e.outerHeight();
			if (!w) w = e.offsetWidth || e.width || $e.attr('width');
			if (!h) h = e.offsetHeight || e.height || $e.attr('height');
			maxw = w > maxw ? w : maxw;
			maxh = h > maxh ? h : maxh;
		}
		if (maxw > 0 && maxh > 0)
			$cont.css({width:maxw+'px',height:maxh+'px'});
	}

	var pauseFlag = false;  // https://github.com/malsup/cycle/issues/44
	if (opts.pause)
		$cont.hover(
			function(){
				pauseFlag = true;
				this.cyclePause++;
				triggerPause(cont, true);
			},
			function(){
				pauseFlag && this.cyclePause--;
				triggerPause(cont, true);
			}
		);

	if (supportMultiTransitions(opts) === false)
		return false;

	// apparently a lot of people use image slideshows without height/width attributes on the images.
	// Cycle 2.50+ requires the sizing info for every slide; this block tries to deal with that.
	var requeue = false;
	options.requeueAttempts = options.requeueAttempts || 0;
	$slides.each(function() {
		// try to get height/width of each slide
		var $el = $(this);
		this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr('height') || 0);
		this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr('width') || 0);

		if ( $el.is('img') ) {
			// sigh..  sniffing, hacking, shrugging...  this crappy hack tries to account for what browsers do when
			// an image is being downloaded and the markup did not include sizing info (height/width attributes);
			// there seems to be some "default" sizes used in this situation
			var loadingIE	= ($.browser.msie  && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
			var loadingFF	= ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
			var loadingOp	= ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
			var loadingOther = (this.cycleH == 0 && this.cycleW == 0 && !this.complete);
			// don't requeue for images that are still loading but have a valid size
			if (loadingIE || loadingFF || loadingOp || loadingOther) {
				if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) { // track retry count so we don't loop forever
					log(options.requeueAttempts,' - img slide not loaded, requeuing slideshow: ', this.src, this.cycleW, this.cycleH);
					setTimeout(function() {$(o.s,o.c).cycle(options)}, opts.requeueTimeout);
					requeue = true;
					return false; // break each loop
				}
				else {
					log('could not determine size of image: '+this.src, this.cycleW, this.cycleH);
				}
			}
		}
		return true;
	});

	if (requeue)
		return false;

	opts.cssBefore = opts.cssBefore || {};
	opts.cssAfter = opts.cssAfter || {};
	opts.cssFirst = opts.cssFirst || {};
	opts.animIn = opts.animIn || {};
	opts.animOut = opts.animOut || {};

	$slides.not(':eq('+first+')').css(opts.cssBefore);
	$($slides[first]).css(opts.cssFirst);

	if (opts.timeout) {
		opts.timeout = parseInt(opts.timeout,10);
		// ensure that timeout and speed settings are sane
		if (opts.speed.constructor == String)
			opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed,10);
		if (!opts.sync)
			opts.speed = opts.speed / 2;
		
		var buffer = opts.fx == 'none' ? 0 : opts.fx == 'shuffle' ? 500 : 250;
		while((opts.timeout - opts.speed) < buffer) // sanitize timeout
			opts.timeout += opts.speed;
	}
	if (opts.easing)
		opts.easeIn = opts.easeOut = opts.easing;
	if (!opts.speedIn)
		opts.speedIn = opts.speed;
	if (!opts.speedOut)
		opts.speedOut = opts.speed;

	opts.slideCount = els.length;
	opts.currSlide = opts.lastSlide = first;
	if (opts.random) {
		if (++opts.randomIndex == els.length)
			opts.randomIndex = 0;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.backwards)
		opts.nextSlide = opts.startingSlide == 0 ? (els.length-1) : opts.startingSlide-1;
	else
		opts.nextSlide = opts.startingSlide >= (els.length-1) ? 0 : opts.startingSlide+1;

	// run transition init fn
	if (!opts.multiFx) {
		var init = $.fn.cycle.transitions[opts.fx];
		if ($.isFunction(init))
			init($cont, $slides, opts);
		else if (opts.fx != 'custom' && !opts.multiFx) {
			log('unknown transition: ' + opts.fx,'; slideshow terminating');
			return false;
		}
	}

	// fire artificial events
	var e0 = $slides[first];
	if (!opts.skipInitializationCallbacks) {
		if (opts.before.length)
			opts.before[0].apply(e0, [e0, e0, opts, true]);
		if (opts.after.length)
			opts.after[0].apply(e0, [e0, e0, opts, true]);
	}
	if (opts.next)
		$(opts.next).bind(opts.prevNextEvent,function(){return advance(opts,1)});
	if (opts.prev)
		$(opts.prev).bind(opts.prevNextEvent,function(){return advance(opts,0)});
	if (opts.pager || opts.pagerAnchorBuilder)
		buildPager(els,opts);
	if (opts.keyboardNav)
        keyboardNav(opts);
	exposeAddSlide(opts, els);

	return opts;
};

//Add keyboard navigation
function keyboardNav(opts) {
    $(document).keydown(function(e) {
        key = e.which;
        if (key == 37) {
            return advance(opts, opts.rev ? 1: -1)
        } else if (key == 39) {
            return advance(opts, opts.rev ? -1: 1)
        }
    })
}

// save off original opts so we can restore after clearing state
function saveOriginalOpts(opts) {
	opts.original = { before: [], after: [] };
	opts.original.cssBefore = $.extend({}, opts.cssBefore);
	opts.original.cssAfter  = $.extend({}, opts.cssAfter);
	opts.original.animIn	= $.extend({}, opts.animIn);
	opts.original.animOut   = $.extend({}, opts.animOut);
	$.each(opts.before, function() { opts.original.before.push(this); });
	$.each(opts.after,  function() { opts.original.after.push(this); });
};

function supportMultiTransitions(opts) {
	var i, tx, txs = $.fn.cycle.transitions;
	// look for multiple effects
	if (opts.fx.indexOf(',') > 0) {
		opts.multiFx = true;
		opts.fxs = opts.fx.replace(/\s*/g,'').split(',');
		// discard any bogus effect names
		for (i=0; i < opts.fxs.length; i++) {
			var fx = opts.fxs[i];
			tx = txs[fx];
			if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
				log('discarding unknown transition: ',fx);
				opts.fxs.splice(i,1);
				i--;
			}
		}
		// if we have an empty list then we threw everything away!
		if (!opts.fxs.length) {
			log('No valid transitions named; slideshow terminating.');
			return false;
		}
	}
	else if (opts.fx == 'all') {  // auto-gen the list of transitions
		opts.multiFx = true;
		opts.fxs = [];
		for (p in txs) {
			tx = txs[p];
			if (txs.hasOwnProperty(p) && $.isFunction(tx))
				opts.fxs.push(p);
		}
	}
	if (opts.multiFx && opts.randomizeEffects) {
		// munge the fxs array to make effect selection random
		var r1 = Math.floor(Math.random() * 20) + 30;
		for (i = 0; i < r1; i++) {
			var r2 = Math.floor(Math.random() * opts.fxs.length);
			opts.fxs.push(opts.fxs.splice(r2,1)[0]);
		}
		debug('randomized fx sequence: ',opts.fxs);
	}
	return true;
};

// provide a mechanism for adding slides after the slideshow has started
function exposeAddSlide(opts, els) {
	opts.addSlide = function(newSlide, prepend) {
		var $s = $(newSlide), s = $s[0];
		if (!opts.autostopCount)
			opts.countdown++;
		els[prepend?'unshift':'push'](s);
		if (opts.els)
			opts.els[prepend?'unshift':'push'](s); // shuffle needs this
		opts.slideCount = els.length;

		$s.css('position','absolute');
		$s[prepend?'prependTo':'appendTo'](opts.$cont);

		if (prepend) {
			opts.currSlide++;
			opts.nextSlide++;
		}

		if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg)
			clearTypeFix($s);

		if (opts.fit && opts.width)
			$s.width(opts.width);
		if (opts.fit && opts.height && opts.height != 'auto')
			$s.height(opts.height);
		s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
		s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();

		$s.css(opts.cssBefore);

		if (opts.pager || opts.pagerAnchorBuilder)
			$.fn.cycle.createPagerAnchor(els.length-1, s, $(opts.pager), els, opts);

		if ($.isFunction(opts.onAddSlide))
			opts.onAddSlide($s);
		else
			$s.hide(); // default behavior
	};
}

// reset internal state; we do this on every pass in order to support multiple effects
$.fn.cycle.resetState = function(opts, fx) {
	fx = fx || opts.fx;
	opts.before = []; opts.after = [];
	opts.cssBefore = $.extend({}, opts.original.cssBefore);
	opts.cssAfter  = $.extend({}, opts.original.cssAfter);
	opts.animIn	= $.extend({}, opts.original.animIn);
	opts.animOut   = $.extend({}, opts.original.animOut);
	opts.fxFn = null;
	$.each(opts.original.before, function() { opts.before.push(this); });
	$.each(opts.original.after,  function() { opts.after.push(this); });

	// re-init
	var init = $.fn.cycle.transitions[fx];
	if ($.isFunction(init))
		init(opts.$cont, $(opts.elements), opts);
};

// this is the main engine fn, it handles the timeouts, callbacks and slide index mgmt
function go(els, opts, manual, fwd) {
	// opts.busy is true if we're in the middle of an animation
	if (manual && opts.busy && opts.manualTrump) {
		// let manual transitions requests trump active ones
		debug('manualTrump in go(), stopping active transition');
		$(els).stop(true,true);
		opts.busy = 0;
	}
	// don't begin another timeout-based transition if there is one active
	if (opts.busy) {
		debug('transition active, ignoring new tx request');
		return;
	}

	var p = opts.$cont[0], curr = els[opts.currSlide], next = els[opts.nextSlide];

	// stop cycling if we have an outstanding stop request
	if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual)
		return;

	// check to see if we should stop cycling based on autostop options
	if (!manual && !p.cyclePause && !opts.bounce &&
		((opts.autostop && (--opts.countdown <= 0)) ||
		(opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
		if (opts.end)
			opts.end(opts);
		return;
	}

	// if slideshow is paused, only transition on a manual trigger
	var changed = false;
	if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
		changed = true;
		var fx = opts.fx;
		// keep trying to get the slide size if we don't have it yet
		curr.cycleH = curr.cycleH || $(curr).height();
		curr.cycleW = curr.cycleW || $(curr).width();
		next.cycleH = next.cycleH || $(next).height();
		next.cycleW = next.cycleW || $(next).width();

		// support multiple transition types
		if (opts.multiFx) {
			if (fwd && (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length))
				opts.lastFx = 0;
			else if (!fwd && (opts.lastFx == undefined || --opts.lastFx < 0))
				opts.lastFx = opts.fxs.length - 1;
			fx = opts.fxs[opts.lastFx];
		}

		// one-time fx overrides apply to:  $('div').cycle(3,'zoom');
		if (opts.oneTimeFx) {
			fx = opts.oneTimeFx;
			opts.oneTimeFx = null;
		}

		$.fn.cycle.resetState(opts, fx);

		// run the before callbacks
		if (opts.before.length)
			$.each(opts.before, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});

		// stage the after callacks
		var after = function() {
			opts.busy = 0;
			$.each(opts.after, function(i,o) {
				if (p.cycleStop != opts.stopCount) return;
				o.apply(next, [curr, next, opts, fwd]);
			});
		};

		debug('tx firing('+fx+'); currSlide: ' + opts.currSlide + '; nextSlide: ' + opts.nextSlide);
		
		// get ready to perform the transition
		opts.busy = 1;
		if (opts.fxFn) // fx function provided?
			opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else if ($.isFunction($.fn.cycle[opts.fx])) // fx plugin ?
			$.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
		else
			$.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
	}

	if (changed || opts.nextSlide == opts.currSlide) {
		// calculate the next slide
		opts.lastSlide = opts.currSlide;
		if (opts.random) {
			opts.currSlide = opts.nextSlide;
			if (++opts.randomIndex == els.length)
				opts.randomIndex = 0;
			opts.nextSlide = opts.randomMap[opts.randomIndex];
			if (opts.nextSlide == opts.currSlide)
				opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
		}
		else if (opts.backwards) {
			var roll = (opts.nextSlide - 1) < 0;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = 1;
				opts.currSlide = 0;
			}
			else {
				opts.nextSlide = roll ? (els.length-1) : opts.nextSlide-1;
				opts.currSlide = roll ? 0 : opts.nextSlide+1;
			}
		}
		else { // sequence
			var roll = (opts.nextSlide + 1) == els.length;
			if (roll && opts.bounce) {
				opts.backwards = !opts.backwards;
				opts.nextSlide = els.length-2;
				opts.currSlide = els.length-1;
			}
			else {
				opts.nextSlide = roll ? 0 : opts.nextSlide+1;
				opts.currSlide = roll ? els.length-1 : opts.nextSlide-1;
			}
		}
	}
	if (changed && opts.pager)
		opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
	
	// stage the next transition
	var ms = 0;
	if (opts.timeout && !opts.continuous)
		ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
	else if (opts.continuous && p.cyclePause) // continuous shows work off an after callback, not this timer logic
		ms = 10;
	if (ms > 0)
		p.cycleTimeout = setTimeout(function(){ go(els, opts, 0, !opts.backwards) }, ms);
};

// invoked after transition
$.fn.cycle.updateActivePagerLink = function(pager, currSlide, clsName) {
   $(pager).each(function() {
       $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
   });
};

// calculate timeout value for current transition
function getTimeout(curr, next, opts, fwd) {
	if (opts.timeoutFn) {
		// call user provided calc fn
		var t = opts.timeoutFn.call(curr,curr,next,opts,fwd);
		while (opts.fx != 'none' && (t - opts.speed) < 250) // sanitize timeout
			t += opts.speed;
		debug('calculated timeout: ' + t + '; speed: ' + opts.speed);
		if (t !== false)
			return t;
	}
	return opts.timeout;
};

// expose next/prev function, caller must pass in state
$.fn.cycle.next = function(opts) { advance(opts,1); };
$.fn.cycle.prev = function(opts) { advance(opts,0);};

// advance slide forward or back
function advance(opts, moveForward) {
	var val = moveForward ? 1 : -1;
	var els = opts.elements;
	var p = opts.$cont[0], timeout = p.cycleTimeout;
	if (timeout) {
		clearTimeout(timeout);
		p.cycleTimeout = 0;
	}
	if (opts.random && val < 0) {
		// move back to the previously display slide
		opts.randomIndex--;
		if (--opts.randomIndex == -2)
			opts.randomIndex = els.length-2;
		else if (opts.randomIndex == -1)
			opts.randomIndex = els.length-1;
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else if (opts.random) {
		opts.nextSlide = opts.randomMap[opts.randomIndex];
	}
	else {
		opts.nextSlide = opts.currSlide + val;
		if (opts.nextSlide < 0) {
			if (opts.nowrap) return false;
			opts.nextSlide = els.length - 1;
		}
		else if (opts.nextSlide >= els.length) {
			if (opts.nowrap) return false;
			opts.nextSlide = 0;
		}
	}

	var cb = opts.onPrevNextEvent || opts.prevNextClick; // prevNextClick is deprecated
	if ($.isFunction(cb))
		cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
	go(els, opts, 1, moveForward);
	return false;
};

function buildPager(els, opts) {
	var $p = $(opts.pager);
	$.each(els, function(i,o) {
		$.fn.cycle.createPagerAnchor(i,o,$p,els,opts);
	});
	opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
};

$.fn.cycle.createPagerAnchor = function(i, el, $p, els, opts) {
	var a;
	if ($.isFunction(opts.pagerAnchorBuilder)) {
		a = opts.pagerAnchorBuilder(i,el);
		debug('pagerAnchorBuilder('+i+', el) returned: ' + a);
	}
	else
		a = '<a href="#">'+(i+1)+'</a>';
		
	if (!a)
		return;
	var $a = $(a);
	// don't reparent if anchor is in the dom
	if ($a.parents('body').length === 0) {
		var arr = [];
		if ($p.length > 1) {
			$p.each(function() {
				var $clone = $a.clone(true);
				$(this).append($clone);
				arr.push($clone[0]);
			});
			$a = $(arr);
		}
		else {
			$a.appendTo($p);
		}
	}

	opts.pagerAnchors =  opts.pagerAnchors || [];
	opts.pagerAnchors.push($a);
	$a.bind(opts.pagerEvent, function(e) {
		e.preventDefault();
		opts.nextSlide = i;
		var p = opts.$cont[0], timeout = p.cycleTimeout;
		if (timeout) {
			clearTimeout(timeout);
			p.cycleTimeout = 0;
		}
		var cb = opts.onPagerEvent || opts.pagerClick; // pagerClick is deprecated
		if ($.isFunction(cb))
			cb(opts.nextSlide, els[opts.nextSlide]);
		go(els,opts,1,opts.currSlide < i); // trigger the trans
//		return false; // <== allow bubble
	});
	
	if ( ! /^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble)
		$a.bind('click.cycle', function(){return false;}); // suppress click
	
	var pauseFlag = false; // https://github.com/malsup/cycle/issues/44
	if (opts.pauseOnPagerHover) {
		$a.hover(
			function() { 
				pauseFlag = true;
				opts.$cont[0].cyclePause++; 
				triggerPause(cont,true,true);
			}, function() { 
				pauseFlag && opts.$cont[0].cyclePause--; 
				triggerPause(cont,true,true);
			} 
		);
	}
};

// helper fn to calculate the number of slides between the current and the next
$.fn.cycle.hopsFromLast = function(opts, fwd) {
	var hops, l = opts.lastSlide, c = opts.currSlide;
	if (fwd)
		hops = c > l ? c - l : opts.slideCount - l;
	else
		hops = c < l ? l - c : l + opts.slideCount - c;
	return hops;
};

// fix clearType problems in ie6 by setting an explicit bg color
// (otherwise text slides look horrible during a fade transition)
function clearTypeFix($slides) {
	debug('applying clearType background-color hack');
	function hex(s) {
		s = parseInt(s,10).toString(16);
		return s.length < 2 ? '0'+s : s;
	};
	function getBg(e) {
		for ( ; e && e.nodeName.toLowerCase() != 'html'; e = e.parentNode) {
			var v = $.css(e,'background-color');
			if (v && v.indexOf('rgb') >= 0 ) {
				var rgb = v.match(/\d+/g);
				return '#'+ hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
			}
			if (v && v != 'transparent')
				return v;
		}
		return '#ffffff';
	};
	$slides.each(function() { $(this).css('background-color', getBg(this)); });
};

// reset common props before the next transition
$.fn.cycle.commonReset = function(curr,next,opts,w,h,rev) {
	$(opts.elements).not(curr).hide();
	if (typeof opts.cssBefore.opacity == 'undefined')
		opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	if (opts.slideResize && w !== false && next.cycleW > 0)
		opts.cssBefore.width = next.cycleW;
	if (opts.slideResize && h !== false && next.cycleH > 0)
		opts.cssBefore.height = next.cycleH;
	opts.cssAfter = opts.cssAfter || {};
	opts.cssAfter.display = 'none';
	$(curr).css('zIndex',opts.slideCount + (rev === true ? 1 : 0));
	$(next).css('zIndex',opts.slideCount + (rev === true ? 0 : 1));
};

// the actual fn for effecting a transition
$.fn.cycle.custom = function(curr, next, opts, cb, fwd, speedOverride) {
	var $l = $(curr), $n = $(next);
	var speedIn = opts.speedIn, speedOut = opts.speedOut, easeIn = opts.easeIn, easeOut = opts.easeOut;
	$n.css(opts.cssBefore);
	if (speedOverride) {
		if (typeof speedOverride == 'number')
			speedIn = speedOut = speedOverride;
		else
			speedIn = speedOut = 1;
		easeIn = easeOut = null;
	}
	var fn = function() {
		$n.animate(opts.animIn, speedIn, easeIn, function() {
			cb();
		});
	};
	$l.animate(opts.animOut, speedOut, easeOut, function() {
		$l.css(opts.cssAfter);
		if (!opts.sync) 
			fn();
	});
	if (opts.sync) fn();
};

// transition definitions - only fade is defined here, transition pack defines the rest
$.fn.cycle.transitions = {
	fade: function($cont, $slides, opts) {
		$slides.not(':eq('+opts.currSlide+')').css('opacity',0);
		opts.before.push(function(curr,next,opts) {
			$.fn.cycle.commonReset(curr,next,opts);
			opts.cssBefore.opacity = 0;
		});
		opts.animIn	   = { opacity: 1 };
		opts.animOut   = { opacity: 0 };
		opts.cssBefore = { top: 0, left: 0 };
	}
};

$.fn.cycle.ver = function() { return ver; };

// override these globally if you like (they are all optional)
$.fn.cycle.defaults = {
	activePagerClass: 'activeSlide', // class name used for the active pager link
	after:		   null,  // transition callback (scope set to element that was shown):  function(currSlideElement, nextSlideElement, options, forwardFlag)
	allowPagerClickBubble: false, // allows or prevents click event on pager anchors from bubbling
	animIn:		   null,  // properties that define how the slide animates in
	animOut:	   null,  // properties that define how the slide animates out
	aspect:		   false,  // preserve aspect ratio during fit resizing, cropping if necessary (must be used with fit option)
	autostop:	   0,	  // true to end slideshow after X transitions (where X == slide count)
	autostopCount: 0,	  // number of transitions (optionally used with autostop to define X)
	backwards:     false, // true to start slideshow at last slide and move backwards through the stack
	before:		   null,  // transition callback (scope set to element to be shown):	 function(currSlideElement, nextSlideElement, options, forwardFlag)
	center: 	   null,  // set to true to have cycle add top/left margin to each slide (use with width and height options)
	cleartype:	   !$.support.opacity,  // true if clearType corrections should be applied (for IE)
	cleartypeNoBg: false, // set to true to disable extra cleartype fixing (leave false to force background color setting on slides)
	containerResize: 1,	  // resize container to fit largest slide
	continuous:	   0,	  // true to start next transition immediately after current one completes
	cssAfter:	   null,  // properties that defined the state of the slide after transitioning out
	cssBefore:	   null,  // properties that define the initial state of the slide before transitioning in
	delay:		   0,	  // additional delay (in ms) for first transition (hint: can be negative)
	easeIn:		   null,  // easing for "in" transition
	easeOut:	   null,  // easing for "out" transition
	easing:		   null,  // easing method for both in and out transitions
	end:		   null,  // callback invoked when the slideshow terminates (use with autostop or nowrap options): function(options)
	fastOnEvent:   0,	  // force fast transitions when triggered manually (via pager or prev/next); value == time in ms
	fit:		   0,	  // force slides to fit container
	fx:			  'fade', // name of transition effect (or comma separated names, ex: 'fade,scrollUp,shuffle')
	fxFn:		   null,  // function used to control the transition: function(currSlideElement, nextSlideElement, options, afterCalback, forwardFlag)
	height:		  'auto', // container height (if the 'fit' option is true, the slides will be set to this height as well)
	manualTrump:   true,  // causes manual transition to stop an active transition instead of being ignored
	metaAttr:     'cycle',// data- attribute that holds the option data for the slideshow
	next:		   null,  // element, jQuery object, or jQuery selector string for the element to use as event trigger for next slide
	nowrap:		   0,	  // true to prevent slideshow from wrapping
	onPagerEvent:  null,  // callback fn for pager events: function(zeroBasedSlideIndex, slideElement)
	onPrevNextEvent: null,// callback fn for prev/next events: function(isNext, zeroBasedSlideIndex, slideElement)
	pager:		   null,  // element, jQuery object, or jQuery selector string for the element to use as pager container
	pagerAnchorBuilder: null, // callback fn for building anchor links:  function(index, DOMelement)
	pagerEvent:	  'click.cycle', // name of event which drives the pager navigation
	pause:		   0,	  // true to enable "pause on hover"
	pauseOnPagerHover: 0, // true to pause when hovering over pager link
	prev:		   null,  // element, jQuery object, or jQuery selector string for the element to use as event trigger for previous slide
	prevNextEvent:'click.cycle',// event which drives the manual transition to the previous or next slide
	random:		   0,	  // true for random, false for sequence (not applicable to shuffle fx)
	randomizeEffects: 1,  // valid when multiple effects are used; true to make the effect sequence random
	requeueOnImageNotLoaded: true, // requeue the slideshow if any image slides are not yet loaded
	requeueTimeout: 250,  // ms delay for requeue
	rev:		   0,	  // causes animations to transition in reverse (for effects that support it such as scrollHorz/scrollVert/shuffle)
	shuffle:	   null,  // coords for shuffle animation, ex: { top:15, left: 200 }
	skipInitializationCallbacks: false, // set to true to disable the first before/after callback that occurs prior to any transition
	slideExpr:	   null,  // expression for selecting slides (if something other than all children is required)
	slideResize:   1,     // force slide width/height to fixed size before every transition
	speed:		   1000,  // speed of the transition (any valid fx speed value)
	speedIn:	   null,  // speed of the 'in' transition
	speedOut:	   null,  // speed of the 'out' transition
	startingSlide: 0,	  // zero-based index of the first slide to be displayed
	sync:		   1,	  // true if in/out transitions should occur simultaneously
	timeout:	   4000,  // milliseconds between slide transitions (0 to disable auto advance)
	timeoutFn:     null,  // callback for determining per-slide timeout value:  function(currSlideElement, nextSlideElement, options, forwardFlag)
	updateActivePagerLink: null, // callback fn invoked to update the active pager link (adds/removes activePagerClass style)
	width:         null,   // container width (if the 'fit' option is true, the slides will be set to this width as well)
	keyboardNav: false
};

})(jQuery);


/*!
 * jQuery Cycle Plugin Transition Definitions
 * This script is a plugin for the jQuery Cycle Plugin
 * Examples and documentation at: http://malsup.com/jquery/cycle/
 * Copyright (c) 2007-2010 M. Alsup
 * Version:	 2.73
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {

//
// These functions define slide initialization and properties for the named
// transitions. To save file size feel free to remove any of these that you
// don't need.
//
$.fn.cycle.transitions.none = function($cont, $slides, opts) {
	opts.fxFn = function(curr,next,opts,after){
		$(next).show();
		$(curr).hide();
		after();
	};
};

// not a cross-fade, fadeout only fades out the top slide
$.fn.cycle.transitions.fadeout = function($cont, $slides, opts) {
	$slides.not(':eq('+opts.currSlide+')').css({ display: 'block', 'opacity': 1 });
	opts.before.push(function(curr,next,opts,w,h,rev) {
		$(curr).css('zIndex',opts.slideCount + (!rev === true ? 1 : 0));
		$(next).css('zIndex',opts.slideCount + (!rev === true ? 0 : 1));
	});
	opts.animIn.opacity = 1;
	opts.animOut.opacity = 0;
	opts.cssBefore.opacity = 1;
	opts.cssBefore.display = 'block';
	opts.cssAfter.zIndex = 0;
};

// scrollUp/Down/Left/Right
$.fn.cycle.transitions.scrollUp = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.cssFirst.top = 0;
	opts.animIn.top = 0;
	opts.animOut.top = -h;
};
$.fn.cycle.transitions.scrollDown = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var h = $cont.height();
	opts.cssFirst.top = 0;
	opts.cssBefore.top = -h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
$.fn.cycle.transitions.scrollLeft = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = 0-w;
};
$.fn.cycle.transitions.scrollRight = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push($.fn.cycle.commonReset);
	var w = $cont.width();
	opts.cssFirst.left = 0;
	opts.cssBefore.left = -w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
$.fn.cycle.transitions.scrollHorz = function($cont, $slides, opts) {
	$cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.left = fwd ? (next.cycleW-1) : (1-next.cycleW);
		opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
	});
	opts.cssFirst.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = 0;
};
$.fn.cycle.transitions.scrollVert = function($cont, $slides, opts) {
	$cont.css('overflow','hidden');
	opts.before.push(function(curr, next, opts, fwd) {
		if (opts.rev)
			fwd = !fwd;
		$.fn.cycle.commonReset(curr,next,opts);
		opts.cssBefore.top = fwd ? (1-next.cycleH) : (next.cycleH-1);
		opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.left = 0;
};

// slideX/slideY
$.fn.cycle.transitions.slideX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.width = 'show';
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.slideY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$(opts.elements).not(curr).hide();
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animIn.height = 'show';
	opts.animOut.height = 0;
};

// shuffle
$.fn.cycle.transitions.shuffle = function($cont, $slides, opts) {
	var i, w = $cont.css('overflow', 'visible').width();
	$slides.css({left: 0, top: 0});
	opts.before.push(function(curr,next,opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
	});
	// only adjust speed once!
	if (!opts.speedAdjusted) {
		opts.speed = opts.speed / 2; // shuffle has 2 transitions
		opts.speedAdjusted = true;
	}
	opts.random = 0;
	opts.shuffle = opts.shuffle || {left:-w, top:15};
	opts.els = [];
	for (i=0; i < $slides.length; i++)
		opts.els.push($slides[i]);

	for (i=0; i < opts.currSlide; i++)
		opts.els.push(opts.els.shift());

	// custom transition fn (hat tip to Benjamin Sterling for this bit of sweetness!)
	opts.fxFn = function(curr, next, opts, cb, fwd) {
		if (opts.rev)
			fwd = !fwd;
		var $el = fwd ? $(curr) : $(next);
		$(next).css(opts.cssBefore);
		var count = opts.slideCount;
		$el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function() {
			var hops = $.fn.cycle.hopsFromLast(opts, fwd);
			for (var k=0; k < hops; k++)
				fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
			if (fwd) {
				for (var i=0, len=opts.els.length; i < len; i++)
					$(opts.els[i]).css('z-index', len-i+count);
			}
			else {
				var z = $(curr).css('z-index');
				$el.css('z-index', parseInt(z,10)+1+count);
			}
			$el.animate({left:0, top:0}, opts.speedOut, opts.easeOut, function() {
				$(fwd ? this : curr).hide();
				if (cb) cb();
			});
		});
	};
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
};

// turnUp/Down/Left/Right
$.fn.cycle.transitions.turnUp = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = next.cycleH;
		opts.animIn.height = next.cycleH;
		opts.animOut.width = next.cycleW;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.height = 0;
	opts.animIn.top = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnDown = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssFirst.top = 0;
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.height = 0;
	opts.animOut.height = 0;
};
$.fn.cycle.transitions.turnLeft = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = next.cycleW;
		opts.animIn.width = next.cycleW;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};
$.fn.cycle.transitions.turnRight = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.animIn.width = next.cycleW;
		opts.animOut.left = curr.cycleW;
	});
	$.extend(opts.cssBefore, { top: 0, left: 0, width: 0 });
	opts.animIn.left = 0;
	opts.animOut.width = 0;
};

// zoom
$.fn.cycle.transitions.zoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.cssBefore.left = next.cycleW/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
		$.extend(opts.animOut, { width: 0, height: 0, top: curr.cycleH/2, left: curr.cycleW/2 });
	});
	opts.cssFirst.top = 0;
	opts.cssFirst.left = 0;
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
};

// fadeZoom
$.fn.cycle.transitions.fadeZoom = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,false);
		opts.cssBefore.left = next.cycleW/2;
		opts.cssBefore.top = next.cycleH/2;
		$.extend(opts.animIn, { top: 0, left: 0, width: next.cycleW, height: next.cycleH });
	});
	opts.cssBefore.width = 0;
	opts.cssBefore.height = 0;
	opts.animOut.opacity = 0;
};

// blindX
$.fn.cycle.transitions.blindX = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.width = next.cycleW;
		opts.animOut.left   = curr.cycleW;
	});
	opts.cssBefore.left = w;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
	opts.animOut.left = w;
};
// blindY
$.fn.cycle.transitions.blindY = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = 0;
	opts.animIn.top = 0;
	opts.animOut.top = h;
};
// blindZ
$.fn.cycle.transitions.blindZ = function($cont, $slides, opts) {
	var h = $cont.css('overflow','hidden').height();
	var w = $cont.width();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		opts.animIn.height = next.cycleH;
		opts.animOut.top   = curr.cycleH;
	});
	opts.cssBefore.top = h;
	opts.cssBefore.left = w;
	opts.animIn.top = 0;
	opts.animIn.left = 0;
	opts.animOut.top = h;
	opts.animOut.left = w;
};

// growX - grow horizontally from centered 0 width
$.fn.cycle.transitions.growX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true);
		opts.cssBefore.left = this.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// growY - grow vertically from centered 0 height
$.fn.cycle.transitions.growY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false);
		opts.cssBefore.top = this.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = this.cycleH;
		opts.animOut.top = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// curtainX - squeeze in both edges horizontally
$.fn.cycle.transitions.curtainX = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,false,true,true);
		opts.cssBefore.left = next.cycleW/2;
		opts.animIn.left = 0;
		opts.animIn.width = this.cycleW;
		opts.animOut.left = curr.cycleW/2;
		opts.animOut.width = 0;
	});
	opts.cssBefore.top = 0;
	opts.cssBefore.width = 0;
};
// curtainY - squeeze in both edges vertically
$.fn.cycle.transitions.curtainY = function($cont, $slides, opts) {
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,false,true);
		opts.cssBefore.top = next.cycleH/2;
		opts.animIn.top = 0;
		opts.animIn.height = next.cycleH;
		opts.animOut.top = curr.cycleH/2;
		opts.animOut.height = 0;
	});
	opts.cssBefore.height = 0;
	opts.cssBefore.left = 0;
};

// cover - curr slide covered by next slide
$.fn.cycle.transitions.cover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts);
		if (d == 'right')
			opts.cssBefore.left = -w;
		else if (d == 'up')
			opts.cssBefore.top = h;
		else if (d == 'down')
			opts.cssBefore.top = -h;
		else
			opts.cssBefore.left = w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// uncover - curr slide moves off next slide
$.fn.cycle.transitions.uncover = function($cont, $slides, opts) {
	var d = opts.direction || 'left';
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		if (d == 'right')
			opts.animOut.left = w;
		else if (d == 'up')
			opts.animOut.top = -h;
		else if (d == 'down')
			opts.animOut.top = h;
		else
			opts.animOut.left = -w;
	});
	opts.animIn.left = 0;
	opts.animIn.top = 0;
	opts.cssBefore.top = 0;
	opts.cssBefore.left = 0;
};

// toss - move top slide and fade away
$.fn.cycle.transitions.toss = function($cont, $slides, opts) {
	var w = $cont.css('overflow','visible').width();
	var h = $cont.height();
	opts.before.push(function(curr, next, opts) {
		$.fn.cycle.commonReset(curr,next,opts,true,true,true);
		// provide default toss settings if animOut not provided
		if (!opts.animOut.left && !opts.animOut.top)
			$.extend(opts.animOut, { left: w*2, top: -h/2, opacity: 0 });
		else
			opts.animOut.opacity = 0;
	});
	opts.cssBefore.left = 0;
	opts.cssBefore.top = 0;
	opts.animIn.left = 0;
};

// wipe - clip animation
$.fn.cycle.transitions.wipe = function($cont, $slides, opts) {
	var w = $cont.css('overflow','hidden').width();
	var h = $cont.height();
	opts.cssBefore = opts.cssBefore || {};
	var clip;
	if (opts.clip) {
		if (/l2r/.test(opts.clip))
			clip = 'rect(0px 0px '+h+'px 0px)';
		else if (/r2l/.test(opts.clip))
			clip = 'rect(0px '+w+'px '+h+'px '+w+'px)';
		else if (/t2b/.test(opts.clip))
			clip = 'rect(0px '+w+'px 0px 0px)';
		else if (/b2t/.test(opts.clip))
			clip = 'rect('+h+'px '+w+'px '+h+'px 0px)';
		else if (/zoom/.test(opts.clip)) {
			var top = parseInt(h/2,10);
			var left = parseInt(w/2,10);
			clip = 'rect('+top+'px '+left+'px '+top+'px '+left+'px)';
		}
	}

	opts.cssBefore.clip = opts.cssBefore.clip || clip || 'rect(0px 0px 0px 0px)';

	var d = opts.cssBefore.clip.match(/(\d+)/g);
	var t = parseInt(d[0],10), r = parseInt(d[1],10), b = parseInt(d[2],10), l = parseInt(d[3],10);

	opts.before.push(function(curr, next, opts) {
		if (curr == next) return;
		var $curr = $(curr), $next = $(next);
		$.fn.cycle.commonReset(curr,next,opts,true,true,false);
		opts.cssAfter.display = 'block';

		var step = 1, count = parseInt((opts.speedIn / 13),10) - 1;
		(function f() {
			var tt = t ? t - parseInt(step * (t/count),10) : 0;
			var ll = l ? l - parseInt(step * (l/count),10) : 0;
			var bb = b < h ? b + parseInt(step * ((h-b)/count || 1),10) : h;
			var rr = r < w ? r + parseInt(step * ((w-r)/count || 1),10) : w;
			$next.css({ clip: 'rect('+tt+'px '+rr+'px '+bb+'px '+ll+'px)' });
			(step++ <= count) ? setTimeout(f, 13) : $curr.css('display', 'none');
		})();
	});
	$.extend(opts.cssBefore, { display: 'block', opacity: 1, top: 0, left: 0 });
	opts.animIn	   = { left: 0 };
	opts.animOut   = { left: 0 };
};

})(jQuery);
/*
* jQuery Hotkeys Plugin
* Copyright 2010, John Resig
* Dual licensed under the MIT or GPL Version 2 licenses.
*
* Based upon the plugin by Tzury Bar Yochay:
* http://github.com/tzuryby/hotkeys
*
* Original idea by:
* Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

(function(jQuery){

jQuery.hotkeys = {
version: "0.8",

specialKeys: {
8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del",
96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/",
112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8",
120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"
},

shiftNums: {
"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&",
"8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<",
".": ">", "/": "?", "\\": "|"
}
};

function keyHandler( handleObj ) {
// Only care when a possible input has been specified
if ( typeof handleObj.data !== "string" ) {
return;
}

var origHandler = handleObj.handler,
keys = handleObj.data.toLowerCase().split(" ");

handleObj.handler = function( event ) {
// Don't fire in text-accepting inputs that we didn't directly bind to
if ( this !== event.target && (/textarea|select/i.test( event.target.nodeName ) ||
event.target.type === "text") ) {
return;
}

// Keypress represents characters, not special keys
var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[ event.which ],
character = String.fromCharCode( event.which ).toLowerCase(),
key, modif = "", possible = {};

// check combinations (alt|ctrl|shift+anything)
if ( event.altKey && special !== "alt" ) {
modif += "alt+";
}

if ( event.ctrlKey && special !== "ctrl" ) {
modif += "ctrl+";
}

// TODO: Need to make sure this works consistently across platforms
if ( event.metaKey && !event.ctrlKey && special !== "meta" ) {
modif += "meta+";
}

if ( event.shiftKey && special !== "shift" ) {
modif += "shift+";
}

if ( special ) {
possible[ modif + special ] = true;

} else {
possible[ modif + character ] = true;
possible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true;

// "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
if ( modif === "shift+" ) {
possible[ jQuery.hotkeys.shiftNums[ character ] ] = true;
}
}

for ( var i = 0, l = keys.length; i < l; i++ ) {
if ( possible[ keys[i] ] ) {
return origHandler.apply( this, arguments );
}
}
};
}

jQuery.each([ "keydown", "keyup", "keypress" ], function() {
jQuery.event.special[ this ] = { add: keyHandler };
});

})( jQuery );
/*!
 * jQuery UI 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function(c,j){function k(a,b){var d=a.nodeName.toLowerCase();if("area"===d){b=a.parentNode;d=b.name;if(!a.href||!d||b.nodeName.toLowerCase()!=="map")return false;a=c("img[usemap=#"+d+"]")[0];return!!a&&l(a)}return(/input|select|textarea|button|object/.test(d)?!a.disabled:"a"==d?a.href||b:b)&&l(a)}function l(a){return!c(a).parents().andSelf().filter(function(){return c.curCSS(this,"visibility")==="hidden"||c.expr.filters.hidden(this)}).length}c.ui=c.ui||{};if(!c.ui.version){c.extend(c.ui,{version:"1.8.14",
keyCode:{ALT:18,BACKSPACE:8,CAPS_LOCK:20,COMMA:188,COMMAND:91,COMMAND_LEFT:91,COMMAND_RIGHT:93,CONTROL:17,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,INSERT:45,LEFT:37,MENU:93,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SHIFT:16,SPACE:32,TAB:9,UP:38,WINDOWS:91}});c.fn.extend({_focus:c.fn.focus,focus:function(a,b){return typeof a==="number"?this.each(function(){var d=this;setTimeout(function(){c(d).focus();
b&&b.call(d)},a)}):this._focus.apply(this,arguments)},scrollParent:function(){var a;a=c.browser.msie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(c.curCSS(this,"position",1))&&/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(c.curCSS(this,"overflow",1)+c.curCSS(this,
"overflow-y",1)+c.curCSS(this,"overflow-x",1))}).eq(0);return/fixed/.test(this.css("position"))||!a.length?c(document):a},zIndex:function(a){if(a!==j)return this.css("zIndex",a);if(this.length){a=c(this[0]);for(var b;a.length&&a[0]!==document;){b=a.css("position");if(b==="absolute"||b==="relative"||b==="fixed"){b=parseInt(a.css("zIndex"),10);if(!isNaN(b)&&b!==0)return b}a=a.parent()}}return 0},disableSelection:function(){return this.bind((c.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",
function(a){a.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}});c.each(["Width","Height"],function(a,b){function d(f,g,m,n){c.each(e,function(){g-=parseFloat(c.curCSS(f,"padding"+this,true))||0;if(m)g-=parseFloat(c.curCSS(f,"border"+this+"Width",true))||0;if(n)g-=parseFloat(c.curCSS(f,"margin"+this,true))||0});return g}var e=b==="Width"?["Left","Right"]:["Top","Bottom"],h=b.toLowerCase(),i={innerWidth:c.fn.innerWidth,innerHeight:c.fn.innerHeight,outerWidth:c.fn.outerWidth,
outerHeight:c.fn.outerHeight};c.fn["inner"+b]=function(f){if(f===j)return i["inner"+b].call(this);return this.each(function(){c(this).css(h,d(this,f)+"px")})};c.fn["outer"+b]=function(f,g){if(typeof f!=="number")return i["outer"+b].call(this,f);return this.each(function(){c(this).css(h,d(this,f,true,g)+"px")})}});c.extend(c.expr[":"],{data:function(a,b,d){return!!c.data(a,d[3])},focusable:function(a){return k(a,!isNaN(c.attr(a,"tabindex")))},tabbable:function(a){var b=c.attr(a,"tabindex"),d=isNaN(b);
return(d||b>=0)&&k(a,!d)}});c(function(){var a=document.body,b=a.appendChild(b=document.createElement("div"));c.extend(b.style,{minHeight:"100px",height:"auto",padding:0,borderWidth:0});c.support.minHeight=b.offsetHeight===100;c.support.selectstart="onselectstart"in b;a.removeChild(b).style.display="none"});c.extend(c.ui,{plugin:{add:function(a,b,d){a=c.ui[a].prototype;for(var e in d){a.plugins[e]=a.plugins[e]||[];a.plugins[e].push([b,d[e]])}},call:function(a,b,d){if((b=a.plugins[b])&&a.element[0].parentNode)for(var e=
0;e<b.length;e++)a.options[b[e][0]]&&b[e][1].apply(a.element,d)}},contains:function(a,b){return document.compareDocumentPosition?a.compareDocumentPosition(b)&16:a!==b&&a.contains(b)},hasScroll:function(a,b){if(c(a).css("overflow")==="hidden")return false;b=b&&b==="left"?"scrollLeft":"scrollTop";var d=false;if(a[b]>0)return true;a[b]=1;d=a[b]>0;a[b]=0;return d},isOverAxis:function(a,b,d){return a>b&&a<b+d},isOver:function(a,b,d,e,h,i){return c.ui.isOverAxis(a,d,h)&&c.ui.isOverAxis(b,e,i)}})}})(jQuery);
;/*!
 * jQuery UI Widget 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function(b,j){if(b.cleanData){var k=b.cleanData;b.cleanData=function(a){for(var c=0,d;(d=a[c])!=null;c++)b(d).triggerHandler("remove");k(a)}}else{var l=b.fn.remove;b.fn.remove=function(a,c){return this.each(function(){if(!c)if(!a||b.filter(a,[this]).length)b("*",this).add([this]).each(function(){b(this).triggerHandler("remove")});return l.call(b(this),a,c)})}}b.widget=function(a,c,d){var e=a.split(".")[0],f;a=a.split(".")[1];f=e+"-"+a;if(!d){d=c;c=b.Widget}b.expr[":"][f]=function(h){return!!b.data(h,
a)};b[e]=b[e]||{};b[e][a]=function(h,g){arguments.length&&this._createWidget(h,g)};c=new c;c.options=b.extend(true,{},c.options);b[e][a].prototype=b.extend(true,c,{namespace:e,widgetName:a,widgetEventPrefix:b[e][a].prototype.widgetEventPrefix||a,widgetBaseClass:f},d);b.widget.bridge(a,b[e][a])};b.widget.bridge=function(a,c){b.fn[a]=function(d){var e=typeof d==="string",f=Array.prototype.slice.call(arguments,1),h=this;d=!e&&f.length?b.extend.apply(null,[true,d].concat(f)):d;if(e&&d.charAt(0)==="_")return h;
e?this.each(function(){var g=b.data(this,a),i=g&&b.isFunction(g[d])?g[d].apply(g,f):g;if(i!==g&&i!==j){h=i;return false}}):this.each(function(){var g=b.data(this,a);g?g.option(d||{})._init():b.data(this,a,new c(d,this))});return h}};b.Widget=function(a,c){arguments.length&&this._createWidget(a,c)};b.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",options:{disabled:false},_createWidget:function(a,c){b.data(c,this.widgetName,this);this.element=b(c);this.options=b.extend(true,{},this.options,
this._getCreateOptions(),a);var d=this;this.element.bind("remove."+this.widgetName,function(){d.destroy()});this._create();this._trigger("create");this._init()},_getCreateOptions:function(){return b.metadata&&b.metadata.get(this.element[0])[this.widgetName]},_create:function(){},_init:function(){},destroy:function(){this.element.unbind("."+this.widgetName).removeData(this.widgetName);this.widget().unbind("."+this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass+"-disabled ui-state-disabled")},
widget:function(){return this.element},option:function(a,c){var d=a;if(arguments.length===0)return b.extend({},this.options);if(typeof a==="string"){if(c===j)return this.options[a];d={};d[a]=c}this._setOptions(d);return this},_setOptions:function(a){var c=this;b.each(a,function(d,e){c._setOption(d,e)});return this},_setOption:function(a,c){this.options[a]=c;if(a==="disabled")this.widget()[c?"addClass":"removeClass"](this.widgetBaseClass+"-disabled ui-state-disabled").attr("aria-disabled",c);return this},
enable:function(){return this._setOption("disabled",false)},disable:function(){return this._setOption("disabled",true)},_trigger:function(a,c,d){var e=this.options[a];c=b.Event(c);c.type=(a===this.widgetEventPrefix?a:this.widgetEventPrefix+a).toLowerCase();d=d||{};if(c.originalEvent){a=b.event.props.length;for(var f;a;){f=b.event.props[--a];c[f]=c.originalEvent[f]}}this.element.trigger(c,d);return!(b.isFunction(e)&&e.call(this.element[0],c,d)===false||c.isDefaultPrevented())}}})(jQuery);
;/*!
 * jQuery UI Mouse 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function(b){var d=false;b(document).mousedown(function(){d=false});b.widget("ui.mouse",{options:{cancel:":input,option",distance:1,delay:0},_mouseInit:function(){var a=this;this.element.bind("mousedown."+this.widgetName,function(c){return a._mouseDown(c)}).bind("click."+this.widgetName,function(c){if(true===b.data(c.target,a.widgetName+".preventClickEvent")){b.removeData(c.target,a.widgetName+".preventClickEvent");c.stopImmediatePropagation();return false}});this.started=false},_mouseDestroy:function(){this.element.unbind("."+
this.widgetName)},_mouseDown:function(a){if(!d){this._mouseStarted&&this._mouseUp(a);this._mouseDownEvent=a;var c=this,f=a.which==1,g=typeof this.options.cancel=="string"?b(a.target).closest(this.options.cancel).length:false;if(!f||g||!this._mouseCapture(a))return true;this.mouseDelayMet=!this.options.delay;if(!this.mouseDelayMet)this._mouseDelayTimer=setTimeout(function(){c.mouseDelayMet=true},this.options.delay);if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a)){this._mouseStarted=this._mouseStart(a)!==
false;if(!this._mouseStarted){a.preventDefault();return true}}true===b.data(a.target,this.widgetName+".preventClickEvent")&&b.removeData(a.target,this.widgetName+".preventClickEvent");this._mouseMoveDelegate=function(e){return c._mouseMove(e)};this._mouseUpDelegate=function(e){return c._mouseUp(e)};b(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate);a.preventDefault();return d=true}},_mouseMove:function(a){if(b.browser.msie&&
!(document.documentMode>=9)&&!a.button)return this._mouseUp(a);if(this._mouseStarted){this._mouseDrag(a);return a.preventDefault()}if(this._mouseDistanceMet(a)&&this._mouseDelayMet(a))(this._mouseStarted=this._mouseStart(this._mouseDownEvent,a)!==false)?this._mouseDrag(a):this._mouseUp(a);return!this._mouseStarted},_mouseUp:function(a){b(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate);if(this._mouseStarted){this._mouseStarted=
false;a.target==this._mouseDownEvent.target&&b.data(a.target,this.widgetName+".preventClickEvent",true);this._mouseStop(a)}return false},_mouseDistanceMet:function(a){return Math.max(Math.abs(this._mouseDownEvent.pageX-a.pageX),Math.abs(this._mouseDownEvent.pageY-a.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return true}})})(jQuery);
;/*
 * jQuery UI Draggable 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.draggable",d.ui.mouse,{widgetEventPrefix:"drag",options:{addClasses:true,appendTo:"parent",axis:false,connectToSortable:false,containment:false,cursor:"auto",cursorAt:false,grid:false,handle:false,helper:"original",iframeFix:false,opacity:false,refreshPositions:false,revert:false,revertDuration:500,scope:"default",scroll:true,scrollSensitivity:20,scrollSpeed:20,snap:false,snapMode:"both",snapTolerance:20,stack:false,zIndex:false},_create:function(){if(this.options.helper==
"original"&&!/^(?:r|a|f)/.test(this.element.css("position")))this.element[0].style.position="relative";this.options.addClasses&&this.element.addClass("ui-draggable");this.options.disabled&&this.element.addClass("ui-draggable-disabled");this._mouseInit()},destroy:function(){if(this.element.data("draggable")){this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");this._mouseDestroy();return this}},_mouseCapture:function(a){var b=
this.options;if(this.helper||b.disabled||d(a.target).is(".ui-resizable-handle"))return false;this.handle=this._getHandle(a);if(!this.handle)return false;d(b.iframeFix===true?"iframe":b.iframeFix).each(function(){d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({width:this.offsetWidth+"px",height:this.offsetHeight+"px",position:"absolute",opacity:"0.001",zIndex:1E3}).css(d(this).offset()).appendTo("body")});return true},_mouseStart:function(a){var b=this.options;this.helper=
this._createHelper(a);this._cacheHelperProportions();if(d.ui.ddmanager)d.ui.ddmanager.current=this;this._cacheMargins();this.cssPosition=this.helper.css("position");this.scrollParent=this.helper.scrollParent();this.offset=this.positionAbs=this.element.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};d.extend(this.offset,{click:{left:a.pageX-this.offset.left,top:a.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});
this.originalPosition=this.position=this._generatePosition(a);this.originalPageX=a.pageX;this.originalPageY=a.pageY;b.cursorAt&&this._adjustOffsetFromHelper(b.cursorAt);b.containment&&this._setContainment();if(this._trigger("start",a)===false){this._clear();return false}this._cacheHelperProportions();d.ui.ddmanager&&!b.dropBehaviour&&d.ui.ddmanager.prepareOffsets(this,a);this.helper.addClass("ui-draggable-dragging");this._mouseDrag(a,true);d.ui.ddmanager&&d.ui.ddmanager.dragStart(this,a);return true},
_mouseDrag:function(a,b){this.position=this._generatePosition(a);this.positionAbs=this._convertPositionTo("absolute");if(!b){b=this._uiHash();if(this._trigger("drag",a,b)===false){this._mouseUp({});return false}this.position=b.position}if(!this.options.axis||this.options.axis!="y")this.helper[0].style.left=this.position.left+"px";if(!this.options.axis||this.options.axis!="x")this.helper[0].style.top=this.position.top+"px";d.ui.ddmanager&&d.ui.ddmanager.drag(this,a);return false},_mouseStop:function(a){var b=
false;if(d.ui.ddmanager&&!this.options.dropBehaviour)b=d.ui.ddmanager.drop(this,a);if(this.dropped){b=this.dropped;this.dropped=false}if((!this.element[0]||!this.element[0].parentNode)&&this.options.helper=="original")return false;if(this.options.revert=="invalid"&&!b||this.options.revert=="valid"&&b||this.options.revert===true||d.isFunction(this.options.revert)&&this.options.revert.call(this.element,b)){var c=this;d(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,
10),function(){c._trigger("stop",a)!==false&&c._clear()})}else this._trigger("stop",a)!==false&&this._clear();return false},_mouseUp:function(a){this.options.iframeFix===true&&d("div.ui-draggable-iframeFix").each(function(){this.parentNode.removeChild(this)});d.ui.ddmanager&&d.ui.ddmanager.dragStop(this,a);return d.ui.mouse.prototype._mouseUp.call(this,a)},cancel:function(){this.helper.is(".ui-draggable-dragging")?this._mouseUp({}):this._clear();return this},_getHandle:function(a){var b=!this.options.handle||
!d(this.options.handle,this.element).length?true:false;d(this.options.handle,this.element).find("*").andSelf().each(function(){if(this==a.target)b=true});return b},_createHelper:function(a){var b=this.options;a=d.isFunction(b.helper)?d(b.helper.apply(this.element[0],[a])):b.helper=="clone"?this.element.clone().removeAttr("id"):this.element;a.parents("body").length||a.appendTo(b.appendTo=="parent"?this.element[0].parentNode:b.appendTo);a[0]!=this.element[0]&&!/(fixed|absolute)/.test(a.css("position"))&&
a.css("position","absolute");return a},_adjustOffsetFromHelper:function(a){if(typeof a=="string")a=a.split(" ");if(d.isArray(a))a={left:+a[0],top:+a[1]||0};if("left"in a)this.offset.click.left=a.left+this.margins.left;if("right"in a)this.offset.click.left=this.helperProportions.width-a.right+this.margins.left;if("top"in a)this.offset.click.top=a.top+this.margins.top;if("bottom"in a)this.offset.click.top=this.helperProportions.height-a.bottom+this.margins.top},_getParentOffset:function(){this.offsetParent=
this.helper.offsetParent();var a=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0])){a.left+=this.scrollParent.scrollLeft();a.top+=this.scrollParent.scrollTop()}if(this.offsetParent[0]==document.body||this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&d.browser.msie)a={top:0,left:0};return{top:a.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:a.left+(parseInt(this.offsetParent.css("borderLeftWidth"),
10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var a=this.element.position();return{top:a.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:a.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),
10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var a=this.options;if(a.containment=="parent")a.containment=this.helper[0].parentNode;if(a.containment=="document"||a.containment=="window")this.containment=[a.containment=="document"?0:d(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,a.containment=="document"?0:d(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,
(a.containment=="document"?0:d(window).scrollLeft())+d(a.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a.containment=="document"?0:d(window).scrollTop())+(d(a.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top];if(!/^(document|window|parent)$/.test(a.containment)&&a.containment.constructor!=Array){a=d(a.containment);var b=a[0];if(b){a.offset();var c=d(b).css("overflow")!=
"hidden";this.containment=[(parseInt(d(b).css("borderLeftWidth"),10)||0)+(parseInt(d(b).css("paddingLeft"),10)||0),(parseInt(d(b).css("borderTopWidth"),10)||0)+(parseInt(d(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(d(b).css("borderLeftWidth"),10)||0)-(parseInt(d(b).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(d(b).css("borderTopWidth"),
10)||0)-(parseInt(d(b).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom];this.relative_container=a}}else if(a.containment.constructor==Array)this.containment=a.containment},_convertPositionTo:function(a,b){if(!b)b=this.position;a=a=="absolute"?1:-1;var c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName);return{top:b.top+
this.offset.relative.top*a+this.offset.parent.top*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop())*a),left:b.left+this.offset.relative.left*a+this.offset.parent.left*a-(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:(this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())*a)}},_generatePosition:function(a){var b=this.options,c=this.cssPosition=="absolute"&&
!(this.scrollParent[0]!=document&&d.ui.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,f=/(html|body)/i.test(c[0].tagName),e=a.pageX,h=a.pageY;if(this.originalPosition){var g;if(this.containment){if(this.relative_container){g=this.relative_container.offset();g=[this.containment[0]+g.left,this.containment[1]+g.top,this.containment[2]+g.left,this.containment[3]+g.top]}else g=this.containment;if(a.pageX-this.offset.click.left<g[0])e=g[0]+this.offset.click.left;
if(a.pageY-this.offset.click.top<g[1])h=g[1]+this.offset.click.top;if(a.pageX-this.offset.click.left>g[2])e=g[2]+this.offset.click.left;if(a.pageY-this.offset.click.top>g[3])h=g[3]+this.offset.click.top}if(b.grid){h=b.grid[1]?this.originalPageY+Math.round((h-this.originalPageY)/b.grid[1])*b.grid[1]:this.originalPageY;h=g?!(h-this.offset.click.top<g[1]||h-this.offset.click.top>g[3])?h:!(h-this.offset.click.top<g[1])?h-b.grid[1]:h+b.grid[1]:h;e=b.grid[0]?this.originalPageX+Math.round((e-this.originalPageX)/
b.grid[0])*b.grid[0]:this.originalPageX;e=g?!(e-this.offset.click.left<g[0]||e-this.offset.click.left>g[2])?e:!(e-this.offset.click.left<g[0])?e-b.grid[0]:e+b.grid[0]:e}}return{top:h-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+(d.browser.safari&&d.browser.version<526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollTop():f?0:c.scrollTop()),left:e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+(d.browser.safari&&d.browser.version<
526&&this.cssPosition=="fixed"?0:this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():f?0:c.scrollLeft())}},_clear:function(){this.helper.removeClass("ui-draggable-dragging");this.helper[0]!=this.element[0]&&!this.cancelHelperRemoval&&this.helper.remove();this.helper=null;this.cancelHelperRemoval=false},_trigger:function(a,b,c){c=c||this._uiHash();d.ui.plugin.call(this,a,[b,c]);if(a=="drag")this.positionAbs=this._convertPositionTo("absolute");return d.Widget.prototype._trigger.call(this,a,b,
c)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}});d.extend(d.ui.draggable,{version:"1.8.14"});d.ui.plugin.add("draggable","connectToSortable",{start:function(a,b){var c=d(this).data("draggable"),f=c.options,e=d.extend({},b,{item:c.element});c.sortables=[];d(f.connectToSortable).each(function(){var h=d.data(this,"sortable");if(h&&!h.options.disabled){c.sortables.push({instance:h,shouldRevert:h.options.revert});
h.refreshPositions();h._trigger("activate",a,e)}})},stop:function(a,b){var c=d(this).data("draggable"),f=d.extend({},b,{item:c.element});d.each(c.sortables,function(){if(this.instance.isOver){this.instance.isOver=0;c.cancelHelperRemoval=true;this.instance.cancelHelperRemoval=false;if(this.shouldRevert)this.instance.options.revert=true;this.instance._mouseStop(a);this.instance.options.helper=this.instance.options._helper;c.options.helper=="original"&&this.instance.currentItem.css({top:"auto",left:"auto"})}else{this.instance.cancelHelperRemoval=
false;this.instance._trigger("deactivate",a,f)}})},drag:function(a,b){var c=d(this).data("draggable"),f=this;d.each(c.sortables,function(){this.instance.positionAbs=c.positionAbs;this.instance.helperProportions=c.helperProportions;this.instance.offset.click=c.offset.click;if(this.instance._intersectsWith(this.instance.containerCache)){if(!this.instance.isOver){this.instance.isOver=1;this.instance.currentItem=d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item",true);
this.instance.options._helper=this.instance.options.helper;this.instance.options.helper=function(){return b.helper[0]};a.target=this.instance.currentItem[0];this.instance._mouseCapture(a,true);this.instance._mouseStart(a,true,true);this.instance.offset.click.top=c.offset.click.top;this.instance.offset.click.left=c.offset.click.left;this.instance.offset.parent.left-=c.offset.parent.left-this.instance.offset.parent.left;this.instance.offset.parent.top-=c.offset.parent.top-this.instance.offset.parent.top;
c._trigger("toSortable",a);c.dropped=this.instance.element;c.currentItem=c.element;this.instance.fromOutside=c}this.instance.currentItem&&this.instance._mouseDrag(a)}else if(this.instance.isOver){this.instance.isOver=0;this.instance.cancelHelperRemoval=true;this.instance.options.revert=false;this.instance._trigger("out",a,this.instance._uiHash(this.instance));this.instance._mouseStop(a,true);this.instance.options.helper=this.instance.options._helper;this.instance.currentItem.remove();this.instance.placeholder&&
this.instance.placeholder.remove();c._trigger("fromSortable",a);c.dropped=false}})}});d.ui.plugin.add("draggable","cursor",{start:function(){var a=d("body"),b=d(this).data("draggable").options;if(a.css("cursor"))b._cursor=a.css("cursor");a.css("cursor",b.cursor)},stop:function(){var a=d(this).data("draggable").options;a._cursor&&d("body").css("cursor",a._cursor)}});d.ui.plugin.add("draggable","opacity",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("opacity"))b._opacity=
a.css("opacity");a.css("opacity",b.opacity)},stop:function(a,b){a=d(this).data("draggable").options;a._opacity&&d(b.helper).css("opacity",a._opacity)}});d.ui.plugin.add("draggable","scroll",{start:function(){var a=d(this).data("draggable");if(a.scrollParent[0]!=document&&a.scrollParent[0].tagName!="HTML")a.overflowOffset=a.scrollParent.offset()},drag:function(a){var b=d(this).data("draggable"),c=b.options,f=false;if(b.scrollParent[0]!=document&&b.scrollParent[0].tagName!="HTML"){if(!c.axis||c.axis!=
"x")if(b.overflowOffset.top+b.scrollParent[0].offsetHeight-a.pageY<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop+c.scrollSpeed;else if(a.pageY-b.overflowOffset.top<c.scrollSensitivity)b.scrollParent[0].scrollTop=f=b.scrollParent[0].scrollTop-c.scrollSpeed;if(!c.axis||c.axis!="y")if(b.overflowOffset.left+b.scrollParent[0].offsetWidth-a.pageX<c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft+c.scrollSpeed;else if(a.pageX-b.overflowOffset.left<
c.scrollSensitivity)b.scrollParent[0].scrollLeft=f=b.scrollParent[0].scrollLeft-c.scrollSpeed}else{if(!c.axis||c.axis!="x")if(a.pageY-d(document).scrollTop()<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()-c.scrollSpeed);else if(d(window).height()-(a.pageY-d(document).scrollTop())<c.scrollSensitivity)f=d(document).scrollTop(d(document).scrollTop()+c.scrollSpeed);if(!c.axis||c.axis!="y")if(a.pageX-d(document).scrollLeft()<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()-
c.scrollSpeed);else if(d(window).width()-(a.pageX-d(document).scrollLeft())<c.scrollSensitivity)f=d(document).scrollLeft(d(document).scrollLeft()+c.scrollSpeed)}f!==false&&d.ui.ddmanager&&!c.dropBehaviour&&d.ui.ddmanager.prepareOffsets(b,a)}});d.ui.plugin.add("draggable","snap",{start:function(){var a=d(this).data("draggable"),b=a.options;a.snapElements=[];d(b.snap.constructor!=String?b.snap.items||":data(draggable)":b.snap).each(function(){var c=d(this),f=c.offset();this!=a.element[0]&&a.snapElements.push({item:this,
width:c.outerWidth(),height:c.outerHeight(),top:f.top,left:f.left})})},drag:function(a,b){for(var c=d(this).data("draggable"),f=c.options,e=f.snapTolerance,h=b.offset.left,g=h+c.helperProportions.width,n=b.offset.top,o=n+c.helperProportions.height,i=c.snapElements.length-1;i>=0;i--){var j=c.snapElements[i].left,l=j+c.snapElements[i].width,k=c.snapElements[i].top,m=k+c.snapElements[i].height;if(j-e<h&&h<l+e&&k-e<n&&n<m+e||j-e<h&&h<l+e&&k-e<o&&o<m+e||j-e<g&&g<l+e&&k-e<n&&n<m+e||j-e<g&&g<l+e&&k-e<o&&
o<m+e){if(f.snapMode!="inner"){var p=Math.abs(k-o)<=e,q=Math.abs(m-n)<=e,r=Math.abs(j-g)<=e,s=Math.abs(l-h)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k-c.helperProportions.height,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j-c.helperProportions.width}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l}).left-c.margins.left}var t=
p||q||r||s;if(f.snapMode!="outer"){p=Math.abs(k-n)<=e;q=Math.abs(m-o)<=e;r=Math.abs(j-h)<=e;s=Math.abs(l-g)<=e;if(p)b.position.top=c._convertPositionTo("relative",{top:k,left:0}).top-c.margins.top;if(q)b.position.top=c._convertPositionTo("relative",{top:m-c.helperProportions.height,left:0}).top-c.margins.top;if(r)b.position.left=c._convertPositionTo("relative",{top:0,left:j}).left-c.margins.left;if(s)b.position.left=c._convertPositionTo("relative",{top:0,left:l-c.helperProportions.width}).left-c.margins.left}if(!c.snapElements[i].snapping&&
(p||q||r||s||t))c.options.snap.snap&&c.options.snap.snap.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=p||q||r||s||t}else{c.snapElements[i].snapping&&c.options.snap.release&&c.options.snap.release.call(c.element,a,d.extend(c._uiHash(),{snapItem:c.snapElements[i].item}));c.snapElements[i].snapping=false}}}});d.ui.plugin.add("draggable","stack",{start:function(){var a=d(this).data("draggable").options;a=d.makeArray(d(a.stack)).sort(function(c,f){return(parseInt(d(c).css("zIndex"),
10)||0)-(parseInt(d(f).css("zIndex"),10)||0)});if(a.length){var b=parseInt(a[0].style.zIndex)||0;d(a).each(function(c){this.style.zIndex=b+c});this[0].style.zIndex=b+a.length}}});d.ui.plugin.add("draggable","zIndex",{start:function(a,b){a=d(b.helper);b=d(this).data("draggable").options;if(a.css("zIndex"))b._zIndex=a.css("zIndex");a.css("zIndex",b.zIndex)},stop:function(a,b){a=d(this).data("draggable").options;a._zIndex&&d(b.helper).css("zIndex",a._zIndex)}})})(jQuery);
;/*
 * jQuery UI Droppable 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function(d){d.widget("ui.droppable",{widgetEventPrefix:"drop",options:{accept:"*",activeClass:false,addClasses:true,greedy:false,hoverClass:false,scope:"default",tolerance:"intersect"},_create:function(){var a=this.options,b=a.accept;this.isover=0;this.isout=1;this.accept=d.isFunction(b)?b:function(c){return c.is(b)};this.proportions={width:this.element[0].offsetWidth,height:this.element[0].offsetHeight};d.ui.ddmanager.droppables[a.scope]=d.ui.ddmanager.droppables[a.scope]||[];d.ui.ddmanager.droppables[a.scope].push(this);
a.addClasses&&this.element.addClass("ui-droppable")},destroy:function(){for(var a=d.ui.ddmanager.droppables[this.options.scope],b=0;b<a.length;b++)a[b]==this&&a.splice(b,1);this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");return this},_setOption:function(a,b){if(a=="accept")this.accept=d.isFunction(b)?b:function(c){return c.is(b)};d.Widget.prototype._setOption.apply(this,arguments)},_activate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&
this.element.addClass(this.options.activeClass);b&&this._trigger("activate",a,this.ui(b))},_deactivate:function(a){var b=d.ui.ddmanager.current;this.options.activeClass&&this.element.removeClass(this.options.activeClass);b&&this._trigger("deactivate",a,this.ui(b))},_over:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.addClass(this.options.hoverClass);
this._trigger("over",a,this.ui(b))}},_out:function(a){var b=d.ui.ddmanager.current;if(!(!b||(b.currentItem||b.element)[0]==this.element[0]))if(this.accept.call(this.element[0],b.currentItem||b.element)){this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("out",a,this.ui(b))}},_drop:function(a,b){var c=b||d.ui.ddmanager.current;if(!c||(c.currentItem||c.element)[0]==this.element[0])return false;var e=false;this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function(){var g=
d.data(this,"droppable");if(g.options.greedy&&!g.options.disabled&&g.options.scope==c.options.scope&&g.accept.call(g.element[0],c.currentItem||c.element)&&d.ui.intersect(c,d.extend(g,{offset:g.element.offset()}),g.options.tolerance)){e=true;return false}});if(e)return false;if(this.accept.call(this.element[0],c.currentItem||c.element)){this.options.activeClass&&this.element.removeClass(this.options.activeClass);this.options.hoverClass&&this.element.removeClass(this.options.hoverClass);this._trigger("drop",
a,this.ui(c));return this.element}return false},ui:function(a){return{draggable:a.currentItem||a.element,helper:a.helper,position:a.position,offset:a.positionAbs}}});d.extend(d.ui.droppable,{version:"1.8.14"});d.ui.intersect=function(a,b,c){if(!b.offset)return false;var e=(a.positionAbs||a.position.absolute).left,g=e+a.helperProportions.width,f=(a.positionAbs||a.position.absolute).top,h=f+a.helperProportions.height,i=b.offset.left,k=i+b.proportions.width,j=b.offset.top,l=j+b.proportions.height;
switch(c){case "fit":return i<=e&&g<=k&&j<=f&&h<=l;case "intersect":return i<e+a.helperProportions.width/2&&g-a.helperProportions.width/2<k&&j<f+a.helperProportions.height/2&&h-a.helperProportions.height/2<l;case "pointer":return d.ui.isOver((a.positionAbs||a.position.absolute).top+(a.clickOffset||a.offset.click).top,(a.positionAbs||a.position.absolute).left+(a.clickOffset||a.offset.click).left,j,i,b.proportions.height,b.proportions.width);case "touch":return(f>=j&&f<=l||h>=j&&h<=l||f<j&&h>l)&&(e>=
i&&e<=k||g>=i&&g<=k||e<i&&g>k);default:return false}};d.ui.ddmanager={current:null,droppables:{"default":[]},prepareOffsets:function(a,b){var c=d.ui.ddmanager.droppables[a.options.scope]||[],e=b?b.type:null,g=(a.currentItem||a.element).find(":data(droppable)").andSelf(),f=0;a:for(;f<c.length;f++)if(!(c[f].options.disabled||a&&!c[f].accept.call(c[f].element[0],a.currentItem||a.element))){for(var h=0;h<g.length;h++)if(g[h]==c[f].element[0]){c[f].proportions.height=0;continue a}c[f].visible=c[f].element.css("display")!=
"none";if(c[f].visible){e=="mousedown"&&c[f]._activate.call(c[f],b);c[f].offset=c[f].element.offset();c[f].proportions={width:c[f].element[0].offsetWidth,height:c[f].element[0].offsetHeight}}}},drop:function(a,b){var c=false;d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(this.options){if(!this.options.disabled&&this.visible&&d.ui.intersect(a,this,this.options.tolerance))c=c||this._drop.call(this,b);if(!this.options.disabled&&this.visible&&this.accept.call(this.element[0],a.currentItem||
a.element)){this.isout=1;this.isover=0;this._deactivate.call(this,b)}}});return c},dragStart:function(a,b){a.element.parentsUntil("body").bind("scroll.droppable",function(){a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)})},drag:function(a,b){a.options.refreshPositions&&d.ui.ddmanager.prepareOffsets(a,b);d.each(d.ui.ddmanager.droppables[a.options.scope]||[],function(){if(!(this.options.disabled||this.greedyChild||!this.visible)){var c=d.ui.intersect(a,this,this.options.tolerance);if(c=
!c&&this.isover==1?"isout":c&&this.isover==0?"isover":null){var e;if(this.options.greedy){var g=this.element.parents(":data(droppable):eq(0)");if(g.length){e=d.data(g[0],"droppable");e.greedyChild=c=="isover"?1:0}}if(e&&c=="isover"){e.isover=0;e.isout=1;e._out.call(e,b)}this[c]=1;this[c=="isout"?"isover":"isout"]=0;this[c=="isover"?"_over":"_out"].call(this,b);if(e&&c=="isout"){e.isout=0;e.isover=1;e._over.call(e,b)}}}})},dragStop:function(a,b){a.element.parentsUntil("body").unbind("scroll.droppable");
a.options.refreshPositions||d.ui.ddmanager.prepareOffsets(a,b)}}})(jQuery);
;/*
 * jQuery UI Slider 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function(d){d.widget("ui.slider",d.ui.mouse,{widgetEventPrefix:"slide",options:{animate:false,distance:0,max:100,min:0,orientation:"horizontal",range:false,step:1,value:0,values:null},_create:function(){var b=this,a=this.options,c=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),f=a.values&&a.values.length||1,e=[];this._mouseSliding=this._keySliding=false;this._animateOff=true;this._handleIndex=null;this._detectOrientation();this._mouseInit();this.element.addClass("ui-slider ui-slider-"+
this.orientation+" ui-widget ui-widget-content ui-corner-all"+(a.disabled?" ui-slider-disabled ui-disabled":""));this.range=d([]);if(a.range){if(a.range===true){if(!a.values)a.values=[this._valueMin(),this._valueMin()];if(a.values.length&&a.values.length!==2)a.values=[a.values[0],a.values[0]]}this.range=d("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header"+(a.range==="min"||a.range==="max"?" ui-slider-range-"+a.range:""))}for(var j=c.length;j<f;j+=1)e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
this.handles=c.add(d(e.join("")).appendTo(b.element));this.handle=this.handles.eq(0);this.handles.add(this.range).filter("a").click(function(g){g.preventDefault()}).hover(function(){a.disabled||d(this).addClass("ui-state-hover")},function(){d(this).removeClass("ui-state-hover")}).focus(function(){if(a.disabled)d(this).blur();else{d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");d(this).addClass("ui-state-focus")}}).blur(function(){d(this).removeClass("ui-state-focus")});this.handles.each(function(g){d(this).data("index.ui-slider-handle",
g)});this.handles.keydown(function(g){var k=true,l=d(this).data("index.ui-slider-handle"),i,h,m;if(!b.options.disabled){switch(g.keyCode){case d.ui.keyCode.HOME:case d.ui.keyCode.END:case d.ui.keyCode.PAGE_UP:case d.ui.keyCode.PAGE_DOWN:case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:k=false;if(!b._keySliding){b._keySliding=true;d(this).addClass("ui-state-active");i=b._start(g,l);if(i===false)return}break}m=b.options.step;i=b.options.values&&b.options.values.length?
(h=b.values(l)):(h=b.value());switch(g.keyCode){case d.ui.keyCode.HOME:h=b._valueMin();break;case d.ui.keyCode.END:h=b._valueMax();break;case d.ui.keyCode.PAGE_UP:h=b._trimAlignValue(i+(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.PAGE_DOWN:h=b._trimAlignValue(i-(b._valueMax()-b._valueMin())/5);break;case d.ui.keyCode.UP:case d.ui.keyCode.RIGHT:if(i===b._valueMax())return;h=b._trimAlignValue(i+m);break;case d.ui.keyCode.DOWN:case d.ui.keyCode.LEFT:if(i===b._valueMin())return;h=b._trimAlignValue(i-
m);break}b._slide(g,l,h);return k}}).keyup(function(g){var k=d(this).data("index.ui-slider-handle");if(b._keySliding){b._keySliding=false;b._stop(g,k);b._change(g,k);d(this).removeClass("ui-state-active")}});this._refreshValue();this._animateOff=false},destroy:function(){this.handles.remove();this.range.remove();this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");this._mouseDestroy();
return this},_mouseCapture:function(b){var a=this.options,c,f,e,j,g;if(a.disabled)return false;this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()};this.elementOffset=this.element.offset();c=this._normValueFromMouse({x:b.pageX,y:b.pageY});f=this._valueMax()-this._valueMin()+1;j=this;this.handles.each(function(k){var l=Math.abs(c-j.values(k));if(f>l){f=l;e=d(this);g=k}});if(a.range===true&&this.values(1)===a.min){g+=1;e=d(this.handles[g])}if(this._start(b,g)===false)return false;
this._mouseSliding=true;j._handleIndex=g;e.addClass("ui-state-active").focus();a=e.offset();this._clickOffset=!d(b.target).parents().andSelf().is(".ui-slider-handle")?{left:0,top:0}:{left:b.pageX-a.left-e.width()/2,top:b.pageY-a.top-e.height()/2-(parseInt(e.css("borderTopWidth"),10)||0)-(parseInt(e.css("borderBottomWidth"),10)||0)+(parseInt(e.css("marginTop"),10)||0)};this.handles.hasClass("ui-state-hover")||this._slide(b,g,c);return this._animateOff=true},_mouseStart:function(){return true},_mouseDrag:function(b){var a=
this._normValueFromMouse({x:b.pageX,y:b.pageY});this._slide(b,this._handleIndex,a);return false},_mouseStop:function(b){this.handles.removeClass("ui-state-active");this._mouseSliding=false;this._stop(b,this._handleIndex);this._change(b,this._handleIndex);this._clickOffset=this._handleIndex=null;return this._animateOff=false},_detectOrientation:function(){this.orientation=this.options.orientation==="vertical"?"vertical":"horizontal"},_normValueFromMouse:function(b){var a;if(this.orientation==="horizontal"){a=
this.elementSize.width;b=b.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)}else{a=this.elementSize.height;b=b.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)}a=b/a;if(a>1)a=1;if(a<0)a=0;if(this.orientation==="vertical")a=1-a;b=this._valueMax()-this._valueMin();return this._trimAlignValue(this._valueMin()+a*b)},_start:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);
c.values=this.values()}return this._trigger("start",b,c)},_slide:function(b,a,c){var f;if(this.options.values&&this.options.values.length){f=this.values(a?0:1);if(this.options.values.length===2&&this.options.range===true&&(a===0&&c>f||a===1&&c<f))c=f;if(c!==this.values(a)){f=this.values();f[a]=c;b=this._trigger("slide",b,{handle:this.handles[a],value:c,values:f});this.values(a?0:1);b!==false&&this.values(a,c,true)}}else if(c!==this.value()){b=this._trigger("slide",b,{handle:this.handles[a],value:c});
b!==false&&this.value(c)}},_stop:function(b,a){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("stop",b,c)},_change:function(b,a){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[a],value:this.value()};if(this.options.values&&this.options.values.length){c.value=this.values(a);c.values=this.values()}this._trigger("change",b,c)}},value:function(b){if(arguments.length){this.options.value=
this._trimAlignValue(b);this._refreshValue();this._change(null,0)}else return this._value()},values:function(b,a){var c,f,e;if(arguments.length>1){this.options.values[b]=this._trimAlignValue(a);this._refreshValue();this._change(null,b)}else if(arguments.length)if(d.isArray(arguments[0])){c=this.options.values;f=arguments[0];for(e=0;e<c.length;e+=1){c[e]=this._trimAlignValue(f[e]);this._change(null,e)}this._refreshValue()}else return this.options.values&&this.options.values.length?this._values(b):
this.value();else return this._values()},_setOption:function(b,a){var c,f=0;if(d.isArray(this.options.values))f=this.options.values.length;d.Widget.prototype._setOption.apply(this,arguments);switch(b){case "disabled":if(a){this.handles.filter(".ui-state-focus").blur();this.handles.removeClass("ui-state-hover");this.handles.attr("disabled","disabled");this.element.addClass("ui-disabled")}else{this.handles.removeAttr("disabled");this.element.removeClass("ui-disabled")}break;case "orientation":this._detectOrientation();
this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation);this._refreshValue();break;case "value":this._animateOff=true;this._refreshValue();this._change(null,0);this._animateOff=false;break;case "values":this._animateOff=true;this._refreshValue();for(c=0;c<f;c+=1)this._change(null,c);this._animateOff=false;break}},_value:function(){var b=this.options.value;return b=this._trimAlignValue(b)},_values:function(b){var a,c;if(arguments.length){a=this.options.values[b];
return a=this._trimAlignValue(a)}else{a=this.options.values.slice();for(c=0;c<a.length;c+=1)a[c]=this._trimAlignValue(a[c]);return a}},_trimAlignValue:function(b){if(b<=this._valueMin())return this._valueMin();if(b>=this._valueMax())return this._valueMax();var a=this.options.step>0?this.options.step:1,c=(b-this._valueMin())%a;alignValue=b-c;if(Math.abs(c)*2>=a)alignValue+=c>0?a:-a;return parseFloat(alignValue.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},
_refreshValue:function(){var b=this.options.range,a=this.options,c=this,f=!this._animateOff?a.animate:false,e,j={},g,k,l,i;if(this.options.values&&this.options.values.length)this.handles.each(function(h){e=(c.values(h)-c._valueMin())/(c._valueMax()-c._valueMin())*100;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";d(this).stop(1,1)[f?"animate":"css"](j,a.animate);if(c.options.range===true)if(c.orientation==="horizontal"){if(h===0)c.range.stop(1,1)[f?"animate":"css"]({left:e+"%"},a.animate);
if(h===1)c.range[f?"animate":"css"]({width:e-g+"%"},{queue:false,duration:a.animate})}else{if(h===0)c.range.stop(1,1)[f?"animate":"css"]({bottom:e+"%"},a.animate);if(h===1)c.range[f?"animate":"css"]({height:e-g+"%"},{queue:false,duration:a.animate})}g=e});else{k=this.value();l=this._valueMin();i=this._valueMax();e=i!==l?(k-l)/(i-l)*100:0;j[c.orientation==="horizontal"?"left":"bottom"]=e+"%";this.handle.stop(1,1)[f?"animate":"css"](j,a.animate);if(b==="min"&&this.orientation==="horizontal")this.range.stop(1,
1)[f?"animate":"css"]({width:e+"%"},a.animate);if(b==="max"&&this.orientation==="horizontal")this.range[f?"animate":"css"]({width:100-e+"%"},{queue:false,duration:a.animate});if(b==="min"&&this.orientation==="vertical")this.range.stop(1,1)[f?"animate":"css"]({height:e+"%"},a.animate);if(b==="max"&&this.orientation==="vertical")this.range[f?"animate":"css"]({height:100-e+"%"},{queue:false,duration:a.animate})}}});d.extend(d.ui.slider,{version:"1.8.14"})})(jQuery);
;/*
 * jQuery UI Effects 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects||function(f,j){function m(c){var a;if(c&&c.constructor==Array&&c.length==3)return c;if(a=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))return[parseInt(a[1],10),parseInt(a[2],10),parseInt(a[3],10)];if(a=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))return[parseFloat(a[1])*2.55,parseFloat(a[2])*2.55,parseFloat(a[3])*2.55];if(a=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))return[parseInt(a[1],
16),parseInt(a[2],16),parseInt(a[3],16)];if(a=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)];if(/rgba\(0, 0, 0, 0\)/.exec(c))return n.transparent;return n[f.trim(c).toLowerCase()]}function s(c,a){var b;do{b=f.curCSS(c,a);if(b!=""&&b!="transparent"||f.nodeName(c,"body"))break;a="backgroundColor"}while(c=c.parentNode);return m(b)}function o(){var c=document.defaultView?document.defaultView.getComputedStyle(this,null):this.currentStyle,
a={},b,d;if(c&&c.length&&c[0]&&c[c[0]])for(var e=c.length;e--;){b=c[e];if(typeof c[b]=="string"){d=b.replace(/\-(\w)/g,function(g,h){return h.toUpperCase()});a[d]=c[b]}}else for(b in c)if(typeof c[b]==="string")a[b]=c[b];return a}function p(c){var a,b;for(a in c){b=c[a];if(b==null||f.isFunction(b)||a in t||/scrollbar/.test(a)||!/color/i.test(a)&&isNaN(parseFloat(b)))delete c[a]}return c}function u(c,a){var b={_:0},d;for(d in a)if(c[d]!=a[d])b[d]=a[d];return b}function k(c,a,b,d){if(typeof c=="object"){d=
a;b=null;a=c;c=a.effect}if(f.isFunction(a)){d=a;b=null;a={}}if(typeof a=="number"||f.fx.speeds[a]){d=b;b=a;a={}}if(f.isFunction(b)){d=b;b=null}a=a||{};b=b||a.duration;b=f.fx.off?0:typeof b=="number"?b:b in f.fx.speeds?f.fx.speeds[b]:f.fx.speeds._default;d=d||a.complete;return[c,a,b,d]}function l(c){if(!c||typeof c==="number"||f.fx.speeds[c])return true;if(typeof c==="string"&&!f.effects[c])return true;return false}f.effects={};f.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor",
"borderTopColor","borderColor","color","outlineColor"],function(c,a){f.fx.step[a]=function(b){if(!b.colorInit){b.start=s(b.elem,a);b.end=m(b.end);b.colorInit=true}b.elem.style[a]="rgb("+Math.max(Math.min(parseInt(b.pos*(b.end[0]-b.start[0])+b.start[0],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[1]-b.start[1])+b.start[1],10),255),0)+","+Math.max(Math.min(parseInt(b.pos*(b.end[2]-b.start[2])+b.start[2],10),255),0)+")"}});var n={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,
0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,
211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]},q=["add","remove","toggle"],t={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};f.effects.animateClass=function(c,a,b,
d){if(f.isFunction(b)){d=b;b=null}return this.queue(function(){var e=f(this),g=e.attr("style")||" ",h=p(o.call(this)),r,v=e.attr("class");f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});r=p(o.call(this));e.attr("class",v);e.animate(u(h,r),{queue:false,duration:a,easing:b,complete:function(){f.each(q,function(w,i){c[i]&&e[i+"Class"](c[i])});if(typeof e.attr("style")=="object"){e.attr("style").cssText="";e.attr("style").cssText=g}else e.attr("style",g);d&&d.apply(this,arguments);f.dequeue(this)}})})};
f.fn.extend({_addClass:f.fn.addClass,addClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{add:c},a,b,d]):this._addClass(c)},_removeClass:f.fn.removeClass,removeClass:function(c,a,b,d){return a?f.effects.animateClass.apply(this,[{remove:c},a,b,d]):this._removeClass(c)},_toggleClass:f.fn.toggleClass,toggleClass:function(c,a,b,d,e){return typeof a=="boolean"||a===j?b?f.effects.animateClass.apply(this,[a?{add:c}:{remove:c},b,d,e]):this._toggleClass(c,a):f.effects.animateClass.apply(this,
[{toggle:c},a,b,d])},switchClass:function(c,a,b,d,e){return f.effects.animateClass.apply(this,[{add:a,remove:c},b,d,e])}});f.extend(f.effects,{version:"1.8.14",save:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.data("ec.storage."+a[b],c[0].style[a[b]])},restore:function(c,a){for(var b=0;b<a.length;b++)a[b]!==null&&c.css(a[b],c.data("ec.storage."+a[b]))},setMode:function(c,a){if(a=="toggle")a=c.is(":hidden")?"show":"hide";return a},getBaseline:function(c,a){var b;switch(c[0]){case "top":b=
0;break;case "middle":b=0.5;break;case "bottom":b=1;break;default:b=c[0]/a.height}switch(c[1]){case "left":c=0;break;case "center":c=0.5;break;case "right":c=1;break;default:c=c[1]/a.width}return{x:c,y:b}},createWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent();var a={width:c.outerWidth(true),height:c.outerHeight(true),"float":c.css("float")},b=f("<div></div>").addClass("ui-effects-wrapper").css({fontSize:"100%",background:"transparent",border:"none",margin:0,padding:0});
c.wrap(b);b=c.parent();if(c.css("position")=="static"){b.css({position:"relative"});c.css({position:"relative"})}else{f.extend(a,{position:c.css("position"),zIndex:c.css("z-index")});f.each(["top","left","bottom","right"],function(d,e){a[e]=c.css(e);if(isNaN(parseInt(a[e],10)))a[e]="auto"});c.css({position:"relative",top:0,left:0,right:"auto",bottom:"auto"})}return b.css(a).show()},removeWrapper:function(c){if(c.parent().is(".ui-effects-wrapper"))return c.parent().replaceWith(c);return c},setTransition:function(c,
a,b,d){d=d||{};f.each(a,function(e,g){unit=c.cssUnit(g);if(unit[0]>0)d[g]=unit[0]*b+unit[1]});return d}});f.fn.extend({effect:function(c){var a=k.apply(this,arguments),b={options:a[1],duration:a[2],callback:a[3]};a=b.options.mode;var d=f.effects[c];if(f.fx.off||!d)return a?this[a](b.duration,b.callback):this.each(function(){b.callback&&b.callback.call(this)});return d.call(this,b)},_show:f.fn.show,show:function(c){if(l(c))return this._show.apply(this,arguments);else{var a=k.apply(this,arguments);
a[1].mode="show";return this.effect.apply(this,a)}},_hide:f.fn.hide,hide:function(c){if(l(c))return this._hide.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="hide";return this.effect.apply(this,a)}},__toggle:f.fn.toggle,toggle:function(c){if(l(c)||typeof c==="boolean"||f.isFunction(c))return this.__toggle.apply(this,arguments);else{var a=k.apply(this,arguments);a[1].mode="toggle";return this.effect.apply(this,a)}},cssUnit:function(c){var a=this.css(c),b=[];f.each(["em","px","%",
"pt"],function(d,e){if(a.indexOf(e)>0)b=[parseFloat(a),e]});return b}});f.easing.jswing=f.easing.swing;f.extend(f.easing,{def:"easeOutQuad",swing:function(c,a,b,d,e){return f.easing[f.easing.def](c,a,b,d,e)},easeInQuad:function(c,a,b,d,e){return d*(a/=e)*a+b},easeOutQuad:function(c,a,b,d,e){return-d*(a/=e)*(a-2)+b},easeInOutQuad:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a+b;return-d/2*(--a*(a-2)-1)+b},easeInCubic:function(c,a,b,d,e){return d*(a/=e)*a*a+b},easeOutCubic:function(c,a,b,d,e){return d*
((a=a/e-1)*a*a+1)+b},easeInOutCubic:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a+b;return d/2*((a-=2)*a*a+2)+b},easeInQuart:function(c,a,b,d,e){return d*(a/=e)*a*a*a+b},easeOutQuart:function(c,a,b,d,e){return-d*((a=a/e-1)*a*a*a-1)+b},easeInOutQuart:function(c,a,b,d,e){if((a/=e/2)<1)return d/2*a*a*a*a+b;return-d/2*((a-=2)*a*a*a-2)+b},easeInQuint:function(c,a,b,d,e){return d*(a/=e)*a*a*a*a+b},easeOutQuint:function(c,a,b,d,e){return d*((a=a/e-1)*a*a*a*a+1)+b},easeInOutQuint:function(c,a,b,d,e){if((a/=
e/2)<1)return d/2*a*a*a*a*a+b;return d/2*((a-=2)*a*a*a*a+2)+b},easeInSine:function(c,a,b,d,e){return-d*Math.cos(a/e*(Math.PI/2))+d+b},easeOutSine:function(c,a,b,d,e){return d*Math.sin(a/e*(Math.PI/2))+b},easeInOutSine:function(c,a,b,d,e){return-d/2*(Math.cos(Math.PI*a/e)-1)+b},easeInExpo:function(c,a,b,d,e){return a==0?b:d*Math.pow(2,10*(a/e-1))+b},easeOutExpo:function(c,a,b,d,e){return a==e?b+d:d*(-Math.pow(2,-10*a/e)+1)+b},easeInOutExpo:function(c,a,b,d,e){if(a==0)return b;if(a==e)return b+d;if((a/=
e/2)<1)return d/2*Math.pow(2,10*(a-1))+b;return d/2*(-Math.pow(2,-10*--a)+2)+b},easeInCirc:function(c,a,b,d,e){return-d*(Math.sqrt(1-(a/=e)*a)-1)+b},easeOutCirc:function(c,a,b,d,e){return d*Math.sqrt(1-(a=a/e-1)*a)+b},easeInOutCirc:function(c,a,b,d,e){if((a/=e/2)<1)return-d/2*(Math.sqrt(1-a*a)-1)+b;return d/2*(Math.sqrt(1-(a-=2)*a)+1)+b},easeInElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/
h);return-(h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g))+b},easeOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e)==1)return b+d;g||(g=e*0.3);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);return h*Math.pow(2,-10*a)*Math.sin((a*e-c)*2*Math.PI/g)+d+b},easeInOutElastic:function(c,a,b,d,e){c=1.70158;var g=0,h=d;if(a==0)return b;if((a/=e/2)==2)return b+d;g||(g=e*0.3*1.5);if(h<Math.abs(d)){h=d;c=g/4}else c=g/(2*Math.PI)*Math.asin(d/h);if(a<1)return-0.5*
h*Math.pow(2,10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)+b;return h*Math.pow(2,-10*(a-=1))*Math.sin((a*e-c)*2*Math.PI/g)*0.5+d+b},easeInBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*(a/=e)*a*((g+1)*a-g)+b},easeOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;return d*((a=a/e-1)*a*((g+1)*a+g)+1)+b},easeInOutBack:function(c,a,b,d,e,g){if(g==j)g=1.70158;if((a/=e/2)<1)return d/2*a*a*(((g*=1.525)+1)*a-g)+b;return d/2*((a-=2)*a*(((g*=1.525)+1)*a+g)+2)+b},easeInBounce:function(c,a,b,d,e){return d-f.easing.easeOutBounce(c,
e-a,0,d,e)+b},easeOutBounce:function(c,a,b,d,e){return(a/=e)<1/2.75?d*7.5625*a*a+b:a<2/2.75?d*(7.5625*(a-=1.5/2.75)*a+0.75)+b:a<2.5/2.75?d*(7.5625*(a-=2.25/2.75)*a+0.9375)+b:d*(7.5625*(a-=2.625/2.75)*a+0.984375)+b},easeInOutBounce:function(c,a,b,d,e){if(a<e/2)return f.easing.easeInBounce(c,a*2,0,d,e)*0.5+b;return f.easing.easeOutBounce(c,a*2-e,0,d,e)*0.5+d*0.5+b}})}(jQuery);
;/*
 * jQuery UI Effects Blind 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.blind=function(c){return this.queue(function(){var a=b(this),g=["position","top","bottom","left","right"],f=b.effects.setMode(a,c.options.mode||"hide"),d=c.options.direction||"vertical";b.effects.save(a,g);a.show();var e=b.effects.createWrapper(a).css({overflow:"hidden"}),h=d=="vertical"?"height":"width";d=d=="vertical"?e.height():e.width();f=="show"&&e.css(h,0);var i={};i[h]=f=="show"?d:0;e.animate(i,c.duration,c.options.easing,function(){f=="hide"&&a.hide();b.effects.restore(a,
g);b.effects.removeWrapper(a);c.callback&&c.callback.apply(a[0],arguments);a.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Bounce 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.bounce=function(b){return this.queue(function(){var a=e(this),l=["position","top","bottom","left","right"],h=e.effects.setMode(a,b.options.mode||"effect"),d=b.options.direction||"up",c=b.options.distance||20,m=b.options.times||5,i=b.duration||250;/show|hide/.test(h)&&l.push("opacity");e.effects.save(a,l);a.show();e.effects.createWrapper(a);var f=d=="up"||d=="down"?"top":"left";d=d=="up"||d=="left"?"pos":"neg";c=b.options.distance||(f=="top"?a.outerHeight({margin:true})/3:a.outerWidth({margin:true})/
3);if(h=="show")a.css("opacity",0).css(f,d=="pos"?-c:c);if(h=="hide")c/=m*2;h!="hide"&&m--;if(h=="show"){var g={opacity:1};g[f]=(d=="pos"?"+=":"-=")+c;a.animate(g,i/2,b.options.easing);c/=2;m--}for(g=0;g<m;g++){var j={},k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing);c=h=="hide"?c*2:c/2}if(h=="hide"){g={opacity:0};g[f]=(d=="pos"?"-=":"+=")+c;a.animate(g,i/2,b.options.easing,function(){a.hide();e.effects.restore(a,l);e.effects.removeWrapper(a);
b.callback&&b.callback.apply(this,arguments)})}else{j={};k={};j[f]=(d=="pos"?"-=":"+=")+c;k[f]=(d=="pos"?"+=":"-=")+c;a.animate(j,i/2,b.options.easing).animate(k,i/2,b.options.easing,function(){e.effects.restore(a,l);e.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments)})}a.queue("fx",function(){a.dequeue()});a.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Clip 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.clip=function(e){return this.queue(function(){var a=b(this),i=["position","top","bottom","left","right","height","width"],f=b.effects.setMode(a,e.options.mode||"hide"),c=e.options.direction||"vertical";b.effects.save(a,i);a.show();var d=b.effects.createWrapper(a).css({overflow:"hidden"});d=a[0].tagName=="IMG"?d:a;var g={size:c=="vertical"?"height":"width",position:c=="vertical"?"top":"left"};c=c=="vertical"?d.height():d.width();if(f=="show"){d.css(g.size,0);d.css(g.position,
c/2)}var h={};h[g.size]=f=="show"?c:0;h[g.position]=f=="show"?0:c/2;d.animate(h,{queue:false,duration:e.duration,easing:e.options.easing,complete:function(){f=="hide"&&a.hide();b.effects.restore(a,i);b.effects.removeWrapper(a);e.callback&&e.callback.apply(a[0],arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Drop 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.drop=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right","opacity"],e=c.effects.setMode(a,d.options.mode||"hide"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a);var f=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var g=d.options.distance||(f=="top"?a.outerHeight({margin:true})/2:a.outerWidth({margin:true})/2);if(e=="show")a.css("opacity",0).css(f,b=="pos"?-g:g);var i={opacity:e==
"show"?1:0};i[f]=(e=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+g;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){e=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Explode 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(j){j.effects.explode=function(a){return this.queue(function(){var c=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3,d=a.options.pieces?Math.round(Math.sqrt(a.options.pieces)):3;a.options.mode=a.options.mode=="toggle"?j(this).is(":visible")?"hide":"show":a.options.mode;var b=j(this).show().css("visibility","hidden"),g=b.offset();g.top-=parseInt(b.css("marginTop"),10)||0;g.left-=parseInt(b.css("marginLeft"),10)||0;for(var h=b.outerWidth(true),i=b.outerHeight(true),e=0;e<c;e++)for(var f=
0;f<d;f++)b.clone().appendTo("body").wrap("<div></div>").css({position:"absolute",visibility:"visible",left:-f*(h/d),top:-e*(i/c)}).parent().addClass("ui-effects-explode").css({position:"absolute",overflow:"hidden",width:h/d,height:i/c,left:g.left+f*(h/d)+(a.options.mode=="show"?(f-Math.floor(d/2))*(h/d):0),top:g.top+e*(i/c)+(a.options.mode=="show"?(e-Math.floor(c/2))*(i/c):0),opacity:a.options.mode=="show"?0:1}).animate({left:g.left+f*(h/d)+(a.options.mode=="show"?0:(f-Math.floor(d/2))*(h/d)),top:g.top+
e*(i/c)+(a.options.mode=="show"?0:(e-Math.floor(c/2))*(i/c)),opacity:a.options.mode=="show"?1:0},a.duration||500);setTimeout(function(){a.options.mode=="show"?b.css({visibility:"visible"}):b.css({visibility:"visible"}).hide();a.callback&&a.callback.apply(b[0]);b.dequeue();j("div.ui-effects-explode").remove()},a.duration||500)})}})(jQuery);
;/*
 * jQuery UI Effects Fade 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.fade=function(a){return this.queue(function(){var c=b(this),d=b.effects.setMode(c,a.options.mode||"hide");c.animate({opacity:d},{queue:false,duration:a.duration,easing:a.options.easing,complete:function(){a.callback&&a.callback.apply(this,arguments);c.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Fold 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.fold=function(a){return this.queue(function(){var b=c(this),j=["position","top","bottom","left","right"],d=c.effects.setMode(b,a.options.mode||"hide"),g=a.options.size||15,h=!!a.options.horizFirst,k=a.duration?a.duration/2:c.fx.speeds._default/2;c.effects.save(b,j);b.show();var e=c.effects.createWrapper(b).css({overflow:"hidden"}),f=d=="show"!=h,l=f?["width","height"]:["height","width"];f=f?[e.width(),e.height()]:[e.height(),e.width()];var i=/([0-9]+)%/.exec(g);if(i)g=parseInt(i[1],
10)/100*f[d=="hide"?0:1];if(d=="show")e.css(h?{height:0,width:g}:{height:g,width:0});h={};i={};h[l[0]]=d=="show"?f[0]:g;i[l[1]]=d=="show"?f[1]:0;e.animate(h,k,a.options.easing).animate(i,k,a.options.easing,function(){d=="hide"&&b.hide();c.effects.restore(b,j);c.effects.removeWrapper(b);a.callback&&a.callback.apply(b[0],arguments);b.dequeue()})})}})(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(b){b.effects.highlight=function(c){return this.queue(function(){var a=b(this),e=["backgroundImage","backgroundColor","opacity"],d=b.effects.setMode(a,c.options.mode||"show"),f={backgroundColor:a.css("backgroundColor")};if(d=="hide")f.opacity=0;b.effects.save(a,e);a.show().css({backgroundImage:"none",backgroundColor:c.options.color||"#ffff99"}).animate(f,{queue:false,duration:c.duration,easing:c.options.easing,complete:function(){d=="hide"&&a.hide();b.effects.restore(a,e);d=="show"&&!b.support.opacity&&
this.style.removeAttribute("filter");c.callback&&c.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Pulsate 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.pulsate=function(a){return this.queue(function(){var b=d(this),c=d.effects.setMode(b,a.options.mode||"show");times=(a.options.times||5)*2-1;duration=a.duration?a.duration/2:d.fx.speeds._default/2;isVisible=b.is(":visible");animateTo=0;if(!isVisible){b.css("opacity",0).show();animateTo=1}if(c=="hide"&&isVisible||c=="show"&&!isVisible)times--;for(c=0;c<times;c++){b.animate({opacity:animateTo},duration,a.options.easing);animateTo=(animateTo+1)%2}b.animate({opacity:animateTo},duration,
a.options.easing,function(){animateTo==0&&b.hide();a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()}).dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Scale 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.puff=function(b){return this.queue(function(){var a=c(this),e=c.effects.setMode(a,b.options.mode||"hide"),g=parseInt(b.options.percent,10)||150,h=g/100,i={height:a.height(),width:a.width()};c.extend(b.options,{fade:true,mode:e,percent:e=="hide"?g:100,from:e=="hide"?i:{height:i.height*h,width:i.width*h}});a.effect("scale",b.options,b.duration,b.callback);a.dequeue()})};c.effects.scale=function(b){return this.queue(function(){var a=c(this),e=c.extend(true,{},b.options),g=c.effects.setMode(a,
b.options.mode||"effect"),h=parseInt(b.options.percent,10)||(parseInt(b.options.percent,10)==0?0:g=="hide"?0:100),i=b.options.direction||"both",f=b.options.origin;if(g!="effect"){e.origin=f||["middle","center"];e.restore=true}f={height:a.height(),width:a.width()};a.from=b.options.from||(g=="show"?{height:0,width:0}:f);h={y:i!="horizontal"?h/100:1,x:i!="vertical"?h/100:1};a.to={height:f.height*h.y,width:f.width*h.x};if(b.options.fade){if(g=="show"){a.from.opacity=0;a.to.opacity=1}if(g=="hide"){a.from.opacity=
1;a.to.opacity=0}}e.from=a.from;e.to=a.to;e.mode=g;a.effect("size",e,b.duration,b.callback);a.dequeue()})};c.effects.size=function(b){return this.queue(function(){var a=c(this),e=["position","top","bottom","left","right","width","height","overflow","opacity"],g=["position","top","bottom","left","right","overflow","opacity"],h=["width","height","overflow"],i=["fontSize"],f=["borderTopWidth","borderBottomWidth","paddingTop","paddingBottom"],k=["borderLeftWidth","borderRightWidth","paddingLeft","paddingRight"],
p=c.effects.setMode(a,b.options.mode||"effect"),n=b.options.restore||false,m=b.options.scale||"both",l=b.options.origin,j={height:a.height(),width:a.width()};a.from=b.options.from||j;a.to=b.options.to||j;if(l){l=c.effects.getBaseline(l,j);a.from.top=(j.height-a.from.height)*l.y;a.from.left=(j.width-a.from.width)*l.x;a.to.top=(j.height-a.to.height)*l.y;a.to.left=(j.width-a.to.width)*l.x}var d={from:{y:a.from.height/j.height,x:a.from.width/j.width},to:{y:a.to.height/j.height,x:a.to.width/j.width}};
if(m=="box"||m=="both"){if(d.from.y!=d.to.y){e=e.concat(f);a.from=c.effects.setTransition(a,f,d.from.y,a.from);a.to=c.effects.setTransition(a,f,d.to.y,a.to)}if(d.from.x!=d.to.x){e=e.concat(k);a.from=c.effects.setTransition(a,k,d.from.x,a.from);a.to=c.effects.setTransition(a,k,d.to.x,a.to)}}if(m=="content"||m=="both")if(d.from.y!=d.to.y){e=e.concat(i);a.from=c.effects.setTransition(a,i,d.from.y,a.from);a.to=c.effects.setTransition(a,i,d.to.y,a.to)}c.effects.save(a,n?e:g);a.show();c.effects.createWrapper(a);
a.css("overflow","hidden").css(a.from);if(m=="content"||m=="both"){f=f.concat(["marginTop","marginBottom"]).concat(i);k=k.concat(["marginLeft","marginRight"]);h=e.concat(f).concat(k);a.find("*[width]").each(function(){child=c(this);n&&c.effects.save(child,h);var o={height:child.height(),width:child.width()};child.from={height:o.height*d.from.y,width:o.width*d.from.x};child.to={height:o.height*d.to.y,width:o.width*d.to.x};if(d.from.y!=d.to.y){child.from=c.effects.setTransition(child,f,d.from.y,child.from);
child.to=c.effects.setTransition(child,f,d.to.y,child.to)}if(d.from.x!=d.to.x){child.from=c.effects.setTransition(child,k,d.from.x,child.from);child.to=c.effects.setTransition(child,k,d.to.x,child.to)}child.css(child.from);child.animate(child.to,b.duration,b.options.easing,function(){n&&c.effects.restore(child,h)})})}a.animate(a.to,{queue:false,duration:b.duration,easing:b.options.easing,complete:function(){a.to.opacity===0&&a.css("opacity",a.from.opacity);p=="hide"&&a.hide();c.effects.restore(a,
n?e:g);c.effects.removeWrapper(a);b.callback&&b.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Shake 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(d){d.effects.shake=function(a){return this.queue(function(){var b=d(this),j=["position","top","bottom","left","right"];d.effects.setMode(b,a.options.mode||"effect");var c=a.options.direction||"left",e=a.options.distance||20,l=a.options.times||3,f=a.duration||a.options.duration||140;d.effects.save(b,j);b.show();d.effects.createWrapper(b);var g=c=="up"||c=="down"?"top":"left",h=c=="up"||c=="left"?"pos":"neg";c={};var i={},k={};c[g]=(h=="pos"?"-=":"+=")+e;i[g]=(h=="pos"?"+=":"-=")+e*2;k[g]=
(h=="pos"?"-=":"+=")+e*2;b.animate(c,f,a.options.easing);for(e=1;e<l;e++)b.animate(i,f,a.options.easing).animate(k,f,a.options.easing);b.animate(i,f,a.options.easing).animate(c,f/2,a.options.easing,function(){d.effects.restore(b,j);d.effects.removeWrapper(b);a.callback&&a.callback.apply(this,arguments)});b.queue("fx",function(){b.dequeue()});b.dequeue()})}})(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(c){c.effects.slide=function(d){return this.queue(function(){var a=c(this),h=["position","top","bottom","left","right"],f=c.effects.setMode(a,d.options.mode||"show"),b=d.options.direction||"left";c.effects.save(a,h);a.show();c.effects.createWrapper(a).css({overflow:"hidden"});var g=b=="up"||b=="down"?"top":"left";b=b=="up"||b=="left"?"pos":"neg";var e=d.options.distance||(g=="top"?a.outerHeight({margin:true}):a.outerWidth({margin:true}));if(f=="show")a.css(g,b=="pos"?isNaN(e)?"-"+e:-e:e);
var i={};i[g]=(f=="show"?b=="pos"?"+=":"-=":b=="pos"?"-=":"+=")+e;a.animate(i,{queue:false,duration:d.duration,easing:d.options.easing,complete:function(){f=="hide"&&a.hide();c.effects.restore(a,h);c.effects.removeWrapper(a);d.callback&&d.callback.apply(this,arguments);a.dequeue()}})})}})(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.14
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function(e){e.effects.transfer=function(a){return this.queue(function(){var b=e(this),c=e(a.options.to),d=c.offset();c={top:d.top,left:d.left,height:c.innerHeight(),width:c.innerWidth()};d=b.offset();var f=e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({top:d.top,left:d.left,height:b.innerHeight(),width:b.innerWidth(),position:"absolute"}).animate(c,a.duration,a.options.easing,function(){f.remove();a.callback&&a.callback.apply(b[0],arguments);
b.dequeue()})})}})(jQuery);
;

 /*  */ 
 
 
/*  */ 
/**
 * Cookie plugin
 *
 * Copyright (c) 2006 Klaus Hartl (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */

/**
 * Create a cookie with the given name and value and other optional parameters.
 *
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Set the value of a cookie.
 * @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
 * @desc Create a cookie with all available options.
 * @example $.cookie('the_cookie', 'the_value');
 * @desc Create a session cookie.
 * @example $.cookie('the_cookie', null);
 * @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
 *       used when the cookie was set.
 *
 * @param String name The name of the cookie.
 * @param String value The value of the cookie.
 * @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
 * @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
 *                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
 *                             If set to null or omitted, the cookie will be a session cookie and will not be retained
 *                             when the the browser exits.
 * @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
 * @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
 * @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
 *                        require a secure protocol (like HTTPS).
 * @type undefined
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */

/**
 * Get the value of a cookie with the given name.
 *
 * @example $.cookie('the_cookie');
 * @desc Get the value of a cookie.
 *
 * @param String name The name of the cookie.
 * @return The value of the cookie.
 * @type String
 *
 * @name $.cookie
 * @cat Plugins/Cookie
 * @author Klaus Hartl/klaus.hartl@stilbuero.de
 */
jQuery.cookie = function(name, value, options) {
    if (typeof value != 'undefined') { // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else { // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
};

/*
 * jScrollPane - v2.0.0beta11 - 2011-07-04
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2010 Kelvin Luck
 * Dual licensed under the MIT and GPL licenses.
 */
(function(b,a,c){b.fn.jScrollPane=function(e){function d(D,O){var az,Q=this,Y,ak,v,am,T,Z,y,q,aA,aF,av,i,I,h,j,aa,U,aq,X,t,A,ar,af,an,G,l,au,ay,x,aw,aI,f,L,aj=true,P=true,aH=false,k=false,ap=D.clone(false,false).empty(),ac=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";aI=D.css("paddingTop")+" "+D.css("paddingRight")+" "+D.css("paddingBottom")+" "+D.css("paddingLeft");f=(parseInt(D.css("paddingLeft"),10)||0)+(parseInt(D.css("paddingRight"),10)||0);function at(aR){var aM,aO,aN,aK,aJ,aQ,aP=false,aL=false;az=aR;if(Y===c){aJ=D.scrollTop();aQ=D.scrollLeft();D.css({overflow:"hidden",padding:0});ak=D.innerWidth()+f;v=D.innerHeight();D.width(ak);Y=b('<div class="jspPane" />').css("padding",aI).append(D.children());am=b('<div class="jspContainer" />').css({width:ak+"px",height:v+"px"}).append(Y).appendTo(D)}else{D.css("width","");aP=az.stickToBottom&&K();aL=az.stickToRight&&B();aK=D.innerWidth()+f!=ak||D.outerHeight()!=v;if(aK){ak=D.innerWidth()+f;v=D.innerHeight();am.css({width:ak+"px",height:v+"px"})}if(!aK&&L==T&&Y.outerHeight()==Z){D.width(ak);return}L=T;Y.css("width","");D.width(ak);am.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}Y.css("overflow","auto");if(aR.contentWidth){T=aR.contentWidth}else{T=Y[0].scrollWidth}Z=Y[0].scrollHeight;Y.css("overflow","");y=T/ak;q=Z/v;aA=q>1;aF=y>1;if(!(aF||aA)){D.removeClass("jspScrollable");Y.css({top:0,width:am.width()-f});n();E();R();w();ai()}else{D.addClass("jspScrollable");aM=az.maintainPosition&&(I||aa);if(aM){aO=aD();aN=aB()}aG();z();F();if(aM){N(aL?(T-ak):aO,false);M(aP?(Z-v):aN,false)}J();ag();ao();if(az.enableKeyboardNavigation){S()}if(az.clickOnTrack){p()}C();if(az.hijackInternalLinks){m()}}if(az.autoReinitialise&&!aw){aw=setInterval(function(){at(az)},az.autoReinitialiseDelay)}else{if(!az.autoReinitialise&&aw){clearInterval(aw)}}aJ&&D.scrollTop(0)&&M(aJ,false);aQ&&D.scrollLeft(0)&&N(aQ,false);D.trigger("jsp-initialised",[aF||aA])}function aG(){if(aA){am.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),b('<div class="jspCap jspCapBottom" />')));U=am.find(">.jspVerticalBar");aq=U.find(">.jspTrack");av=aq.find(">.jspDrag");if(az.showArrows){ar=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",aE(0,-1)).bind("click.jsp",aC);af=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",aE(0,1)).bind("click.jsp",aC);if(az.arrowScrollOnHover){ar.bind("mouseover.jsp",aE(0,-1,ar));af.bind("mouseover.jsp",aE(0,1,af))}al(aq,az.verticalArrowPositions,ar,af)}t=v;am.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){t-=b(this).outerHeight()});av.hover(function(){av.addClass("jspHover")},function(){av.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);av.addClass("jspActive");var s=aJ.pageY-av.position().top;b("html").bind("mousemove.jsp",function(aK){V(aK.pageY-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});o()}}function o(){aq.height(t+"px");I=0;X=az.verticalGutter+aq.outerWidth();Y.width(ak-X-f);try{if(U.position().left===0){Y.css("margin-left",X+"px")}}catch(s){}}function z(){if(aF){am.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />')));an=am.find(">.jspHorizontalBar");G=an.find(">.jspTrack");h=G.find(">.jspDrag");if(az.showArrows){ay=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",aE(-1,0)).bind("click.jsp",aC);x=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",aE(1,0)).bind("click.jsp",aC);
if(az.arrowScrollOnHover){ay.bind("mouseover.jsp",aE(-1,0,ay));x.bind("mouseover.jsp",aE(1,0,x))}al(G,az.horizontalArrowPositions,ay,x)}h.hover(function(){h.addClass("jspHover")},function(){h.removeClass("jspHover")}).bind("mousedown.jsp",function(aJ){b("html").bind("dragstart.jsp selectstart.jsp",aC);h.addClass("jspActive");var s=aJ.pageX-h.position().left;b("html").bind("mousemove.jsp",function(aK){W(aK.pageX-s,false)}).bind("mouseup.jsp mouseleave.jsp",ax);return false});l=am.innerWidth();ah()}}function ah(){am.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){l-=b(this).outerWidth()});G.width(l+"px");aa=0}function F(){if(aF&&aA){var aJ=G.outerHeight(),s=aq.outerWidth();t-=aJ;b(an).find(">.jspCap:visible,>.jspArrow").each(function(){l+=b(this).outerWidth()});l-=s;v-=s;ak-=aJ;G.parent().append(b('<div class="jspCorner" />').css("width",aJ+"px"));o();ah()}if(aF){Y.width((am.outerWidth()-f)+"px")}Z=Y.outerHeight();q=Z/v;if(aF){au=Math.ceil(1/y*l);if(au>az.horizontalDragMaxWidth){au=az.horizontalDragMaxWidth}else{if(au<az.horizontalDragMinWidth){au=az.horizontalDragMinWidth}}h.width(au+"px");j=l-au;ae(aa)}if(aA){A=Math.ceil(1/q*t);if(A>az.verticalDragMaxHeight){A=az.verticalDragMaxHeight}else{if(A<az.verticalDragMinHeight){A=az.verticalDragMinHeight}}av.height(A+"px");i=t-A;ad(I)}}function al(aK,aM,aJ,s){var aO="before",aL="after",aN;if(aM=="os"){aM=/Mac/.test(navigator.platform)?"after":"split"}if(aM==aO){aL=aM}else{if(aM==aL){aO=aM;aN=aJ;aJ=s;s=aN}}aK[aO](aJ)[aL](s)}function aE(aJ,s,aK){return function(){H(aJ,s,this,aK);this.blur();return false}}function H(aM,aL,aP,aO){aP=b(aP).addClass("jspActive");var aN,aK,aJ=true,s=function(){if(aM!==0){Q.scrollByX(aM*az.arrowButtonSpeed)}if(aL!==0){Q.scrollByY(aL*az.arrowButtonSpeed)}aK=setTimeout(s,aJ?az.initialDelay:az.arrowRepeatFreq);aJ=false};s();aN=aO?"mouseout.jsp":"mouseup.jsp";aO=aO||b("html");aO.bind(aN,function(){aP.removeClass("jspActive");aK&&clearTimeout(aK);aK=null;aO.unbind(aN)})}function p(){w();if(aA){aq.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageY-aP.top-I,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageY-aS.top-A/2,aQ=v*az.scrollPagePercent,aR=i*aQ/(Z-v);if(aN<0){if(I-aR>aT){Q.scrollByY(-aQ)}else{V(aT)}}else{if(aN>0){if(I+aR<aT){Q.scrollByY(aQ)}else{V(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}if(aF){G.bind("mousedown.jsp",function(aO){if(aO.originalTarget===c||aO.originalTarget==aO.currentTarget){var aM=b(this),aP=aM.offset(),aN=aO.pageX-aP.left-aa,aK,aJ=true,s=function(){var aS=aM.offset(),aT=aO.pageX-aS.left-au/2,aQ=ak*az.scrollPagePercent,aR=j*aQ/(T-ak);if(aN<0){if(aa-aR>aT){Q.scrollByX(-aQ)}else{W(aT)}}else{if(aN>0){if(aa+aR<aT){Q.scrollByX(aQ)}else{W(aT)}}else{aL();return}}aK=setTimeout(s,aJ?az.initialDelay:az.trackClickRepeatFreq);aJ=false},aL=function(){aK&&clearTimeout(aK);aK=null;b(document).unbind("mouseup.jsp",aL)};s();b(document).bind("mouseup.jsp",aL);return false}})}}function w(){if(G){G.unbind("mousedown.jsp")}if(aq){aq.unbind("mousedown.jsp")}}function ax(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");if(av){av.removeClass("jspActive")}if(h){h.removeClass("jspActive")}}function V(s,aJ){if(!aA){return}if(s<0){s=0}else{if(s>i){s=i}}if(aJ===c){aJ=az.animateScroll}if(aJ){Q.animate(av,"top",s,ad)}else{av.css("top",s);ad(s)}}function ad(aJ){if(aJ===c){aJ=av.position().top}am.scrollTop(0);I=aJ;var aM=I===0,aK=I==i,aL=aJ/i,s=-aL*(Z-v);if(aj!=aM||aH!=aK){aj=aM;aH=aK;D.trigger("jsp-arrow-change",[aj,aH,P,k])}u(aM,aK);Y.css("top",s);D.trigger("jsp-scroll-y",[-s,aM,aK]).trigger("scroll")}function W(aJ,s){if(!aF){return}if(aJ<0){aJ=0}else{if(aJ>j){aJ=j}}if(s===c){s=az.animateScroll}if(s){Q.animate(h,"left",aJ,ae)
}else{h.css("left",aJ);ae(aJ)}}function ae(aJ){if(aJ===c){aJ=h.position().left}am.scrollTop(0);aa=aJ;var aM=aa===0,aL=aa==j,aK=aJ/j,s=-aK*(T-ak);if(P!=aM||k!=aL){P=aM;k=aL;D.trigger("jsp-arrow-change",[aj,aH,P,k])}r(aM,aL);Y.css("left",s);D.trigger("jsp-scroll-x",[-s,aM,aL]).trigger("scroll")}function u(aJ,s){if(az.showArrows){ar[aJ?"addClass":"removeClass"]("jspDisabled");af[s?"addClass":"removeClass"]("jspDisabled")}}function r(aJ,s){if(az.showArrows){ay[aJ?"addClass":"removeClass"]("jspDisabled");x[s?"addClass":"removeClass"]("jspDisabled")}}function M(s,aJ){var aK=s/(Z-v);V(aK*i,aJ)}function N(aJ,s){var aK=aJ/(T-ak);W(aK*j,s)}function ab(aW,aR,aK){var aO,aL,aM,s=0,aV=0,aJ,aQ,aP,aT,aS,aU;try{aO=b(aW)}catch(aN){return}aL=aO.outerHeight();aM=aO.outerWidth();am.scrollTop(0);am.scrollLeft(0);while(!aO.is(".jspPane")){s+=aO.position().top;aV+=aO.position().left;aO=aO.offsetParent();if(/^body|html$/i.test(aO[0].nodeName)){return}}aJ=aB();aP=aJ+v;if(s<aJ||aR){aS=s-az.verticalGutter}else{if(s+aL>aP){aS=s-v+aL+az.verticalGutter}}if(aS){M(aS,aK)}aQ=aD();aT=aQ+ak;if(aV<aQ||aR){aU=aV-az.horizontalGutter}else{if(aV+aM>aT){aU=aV-ak+aM+az.horizontalGutter}}if(aU){N(aU,aK)}}function aD(){return -Y.position().left}function aB(){return -Y.position().top}function K(){var s=Z-v;return(s>20)&&(s-aB()<10)}function B(){var s=T-ak;return(s>20)&&(s-aD()<10)}function ag(){am.unbind(ac).bind(ac,function(aM,aN,aL,aJ){var aK=aa,s=I;Q.scrollBy(aL*az.mouseWheelSpeed,-aJ*az.mouseWheelSpeed,false);return aK==aa&&s==I})}function n(){am.unbind(ac)}function aC(){return false}function J(){Y.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(s){ab(s.target,false)})}function E(){Y.find(":input,a").unbind("focus.jsp")}function S(){var s,aJ,aL=[];aF&&aL.push(an[0]);aA&&aL.push(U[0]);Y.focus(function(){D.focus()});D.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(aO){if(aO.target!==this&&!(aL.length&&b(aO.target).closest(aL).length)){return}var aN=aa,aM=I;switch(aO.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:s=aO.keyCode;aK();break;case 35:M(Z-v);s=null;break;case 36:M(0);s=null;break}aJ=aO.keyCode==s&&aN!=aa||aM!=I;return !aJ}).bind("keypress.jsp",function(aM){if(aM.keyCode==s){aK()}return !aJ});if(az.hideFocus){D.css("outline","none");if("hideFocus" in am[0]){D.attr("hideFocus",true)}}else{D.css("outline","");if("hideFocus" in am[0]){D.attr("hideFocus",false)}}function aK(){var aN=aa,aM=I;switch(s){case 40:Q.scrollByY(az.keyboardSpeed,false);break;case 38:Q.scrollByY(-az.keyboardSpeed,false);break;case 34:case 32:Q.scrollByY(v*az.scrollPagePercent,false);break;case 33:Q.scrollByY(-v*az.scrollPagePercent,false);break;case 39:Q.scrollByX(az.keyboardSpeed,false);break;case 37:Q.scrollByX(-az.keyboardSpeed,false);break}aJ=aN!=aa||aM!=I;return aJ}}function R(){D.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp")}function C(){if(location.hash&&location.hash.length>1){var aL,aJ,aK=escape(location.hash);try{aL=b(aK)}catch(s){return}if(aL.length&&Y.find(aK)){if(am.scrollTop()===0){aJ=setInterval(function(){if(am.scrollTop()>0){ab(aK,true);b(document).scrollTop(am.position().top);clearInterval(aJ)}},50)}else{ab(aK,true);b(document).scrollTop(am.position().top)}}}}function ai(){b("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")}function m(){ai();b("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack",function(){var s=this.href.split("#"),aJ;if(s.length>1){aJ=s[1];if(aJ.length>0&&Y.find("#"+aJ).length>0){ab("#"+aJ,true);return false}}})}function ao(){var aK,aJ,aM,aL,aN,s=false;am.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(aO){var aP=aO.originalEvent.touches[0];aK=aD();aJ=aB();aM=aP.pageX;aL=aP.pageY;aN=false;s=true}).bind("touchmove.jsp",function(aR){if(!s){return}var aQ=aR.originalEvent.touches[0],aP=aa,aO=I;Q.scrollTo(aK+aM-aQ.pageX,aJ+aL-aQ.pageY);aN=aN||Math.abs(aM-aQ.pageX)>5||Math.abs(aL-aQ.pageY)>5;
return aP==aa&&aO==I}).bind("touchend.jsp",function(aO){s=false}).bind("click.jsp-touchclick",function(aO){if(aN){aN=false;return false}})}function g(){var s=aB(),aJ=aD();D.removeClass("jspScrollable").unbind(".jsp");D.replaceWith(ap.append(Y.children()));ap.scrollTop(s);ap.scrollLeft(aJ)}b.extend(Q,{reinitialise:function(aJ){aJ=b.extend({},az,aJ);at(aJ)},scrollToElement:function(aK,aJ,s){ab(aK,aJ,s)},scrollTo:function(aK,s,aJ){N(aK,aJ);M(s,aJ)},scrollToX:function(aJ,s){N(aJ,s)},scrollToY:function(s,aJ){M(s,aJ)},scrollToPercentX:function(aJ,s){N(aJ*(T-ak),s)},scrollToPercentY:function(aJ,s){M(aJ*(Z-v),s)},scrollBy:function(aJ,s,aK){Q.scrollByX(aJ,aK);Q.scrollByY(s,aK)},scrollByX:function(s,aK){var aJ=aD()+Math[s<0?"floor":"ceil"](s),aL=aJ/(T-ak);W(aL*j,aK)},scrollByY:function(s,aK){var aJ=aB()+Math[s<0?"floor":"ceil"](s),aL=aJ/(Z-v);V(aL*i,aK)},positionDragX:function(s,aJ){W(s,aJ)},positionDragY:function(aJ,s){V(aJ,s)},animate:function(aJ,aM,s,aL){var aK={};aK[aM]=s;aJ.animate(aK,{duration:az.animateDuration,easing:az.animateEase,queue:false,step:aL})},getContentPositionX:function(){return aD()},getContentPositionY:function(){return aB()},getContentWidth:function(){return T},getContentHeight:function(){return Z},getPercentScrolledX:function(){return aD()/(T-ak)},getPercentScrolledY:function(){return aB()/(Z-v)},getIsScrollableH:function(){return aF},getIsScrollableV:function(){return aA},getContentPane:function(){return Y},scrollToBottom:function(s){V(i,s)},hijackInternalLinks:function(){m()},destroy:function(){g()}});at(O)}e=b.extend({},b.fn.jScrollPane.defaults,e);b.each(["mouseWheelSpeed","arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){e[this]=e[this]||e.speed});return this.each(function(){var f=b(this),g=f.data("jsp");if(g){g.reinitialise(e)}else{g=new d(f,e);f.data("jsp",g)}})};b.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:c,animateScroll:false,animateDuration:300,animateEase:"linear",hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:0,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:0.8}})(jQuery,this);

 

 

