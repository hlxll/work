export default{
  
set_token(state,data){                             //state中的全部数据
  state.token = data;
  window.sessionStorage.setItem('token',data);     //临时存储--刷新保留--窗口关闭消失
},
set_name(state,data){
  state.name = data;
}
}