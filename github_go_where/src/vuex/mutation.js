export default{
  
set_token(state,data){                             //state中的全部数据
        state.token = data;
        window.sessionStorage.setItem('token',data);     //临时存储--刷新保留--窗口关闭消失
      },
      set_user(state,data){
        state.user = data;
        window.sessionStorage.setItem('user',data);
      },
      set_userImage(state,data){
        state.userImage = data;
        window.sessionStorage.setItem('userImage',data);
      }
}