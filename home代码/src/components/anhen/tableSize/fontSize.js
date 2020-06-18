function fontSize(res){
    let docEl = document.documentElement,
      clientWidth = window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth;
    if (!clientWidth) return;
    if(clientWidth<=1100){
      clientWidth =1100 
    }
    let fontSize = 50 * (clientWidth / 375)
    // console.log(fontSize)
    return res*fontSize
}
export {
    fontSize
}