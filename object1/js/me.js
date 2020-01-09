let array1 = [
    {'img1':'images/微信支付.svg','name':'支付','img2':'images/右箭头.svg'},
    {'img1':'images/收藏.svg','name':'收藏','img2':'images/右箭头.svg'},
    {'img1':'images/相册.svg','name':'相册','img2':'images/右箭头.svg'},
    {'img1':'images/卡包.svg','name':'卡包','img2':'images/右箭头.svg'},
    {'img1':'images/表情.svg','name':'表情','img2':'images/右箭头.svg'},
    {'img1':'images/设置.svg','name':'设置','img2':'images/右箭头.svg'},
]
let module = document.querySelector('.module')
for ( let i = 0; i < array1.length; i++) {
    let div =
        '<li>' +
            '<div class="img">' +
                '<img src="'+array1[i].img1+'">' +
            '</div>' +
            '<div class="txt">' +
                '<p>'+array1[i].name+'</p>' +
            '</div>' +
            '<div>' +
                '<img class="txt_right" src="'+array1[i].img2+'">' +
            '</div>' +
        '</li>'
    module.innerHTML = module.innerHTML + div
}