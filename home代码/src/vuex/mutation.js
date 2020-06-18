export default{
  
set_token(state,data){                             //state中的全部数据
  state.token = data;
  window.sessionStorage.setItem('token',data);     //临时存储--刷新保留--窗口关闭消失
},
set_name(state,data){
  state.name = data;
}
// SET_MOBLIE(state) {
//         var docEl = document.documentElement,
//         resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
//         recalc = function () {
//           var clientWidth = docEl.clientWidth;
//           if (!clientWidth) return;
//           docEl.style.fontSize = 50 * (clientWidth / 375);
//           state.ClientWidth = docEl.style.fontSize;
//           console.log('改动')
//         };
//         if (!document.addEventListener) return;
//         window.addEventListener(resizeEvt, recalc, false);
//         document.addEventListener('DOMContentLoaded', recalc, false);
// }
}