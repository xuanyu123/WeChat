let array2 = [
    {'img1':'images/朋友圈.svg','name':'朋友圈','img2':'images/右箭头.svg'},
    {'img1':'images/扫一扫.svg','name':'扫一扫','img2':'images/右箭头.svg'},
    {'img1':'images/看一看.svg','name':'看一看','img2':'images/右箭头.svg'},
    {'img1':'images/搜一搜.svg','name':'搜一搜','img2':'images/右箭头.svg'},
    {'img1':'images/小程序.svg','name':'小程序','img2':'images/右箭头.svg'},
]
let module2 = document.querySelector('.module2')
for (let i = 0; i < array2.length; i++) {
    let div =
        '<li>' +
            '<div class="img">' +
            '<img src="'+array2[i].img1+'">' +
            '</div>' +
            '<div class="txt">' +
            '<p><b>'+array2[i].name+'</b></p>' +
            '</div>' +
            '<div>' +
            '<img class="right" src="'+array2[i].img2+'">' +
            '</div>' +
        '</li>'
    module2.innerHTML = module2.innerHTML + div
}