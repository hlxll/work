(function (doc, win) {

    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone","SymbianOS", "Windows Phone", "iPad"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    if(window.screen.width>=768){
         flag = true;
    }
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
    var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        console.log(flag)
        if(flag && clientWidth<=1100){
            clientWidth =1100 
        }
    docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
    console.log(docEl.style.fontSize)
        };
    
    if (!doc.addEventListener) return;
    
    win.addEventListener(resizeEvt, recalc, false);
    
    doc.addEventListener('DOMContentLoaded', recalc, false);
    
    })(document, window);