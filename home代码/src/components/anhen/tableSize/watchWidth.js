function getWidth(doc, win, that) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      if(clientWidth<=1100){
        clientWidth =1100 
    }
      docEl.style.fontSize = 50 * (clientWidth / 375) + 'px';
    //   console.log(docEl.style.fontSize)
      that.watchData = docEl.style.fontSize
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
}
export {
    getWidth
}