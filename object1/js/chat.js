let array = [
    {'img':'images/mayun.jfif','name':'马云','message':'诚信绝对不是一种销售，更不是一种高深空洞的理念','time':'下午1:50'},
    {'img':'images/wangjianlin.jfif','name':'王健林','message':'先整他一个亿','time':'下午2:50'},
    {'img':'images/xijinping.jfif','name':'习大大','message':'青年要好好学习','time':'下午2:55'}
]
let message = document.querySelector('.message')
for ( let i = 0; i < array.length; i++) {
    let div =
        '<li>' +
            '<div class="img">' +
                '<img src="' + array[i].img + '">' +
            '</div>' +
            '<div class="txt">' +
                '<p><b>'+array[i].name+'</b></p>' +
                '<p>'+array[i].message+'</p>' +
                '<div class="date">'+array[i].time+'</div>' +
            '</div>' +
        '</li>'
    message.innerHTML = message.innerHTML + div
}