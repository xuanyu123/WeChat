//功能标签
let array3 = [
    {'img':'images/添加好友.svg','name':'新的朋友','classname':'class="box box1"'},
    {'img':'images/群聊1.svg','name':'群聊','classname':'class="box box2"'},
    {'img':'images/标签.svg','name':'标签','classname':'class="box box3"'},
    {'img':'images/公众号.svg','name':'公众号','classname':'class="box box3"'}
];
let module3 = document.querySelector('.module3');
for(let i = 0; i < array3.length; i++){
    let li =
        '<li>'+
            '<div '+array3[i].classname+'>'+
                '<div class="common_img">'+
                    '<img src="'+array3[i].img+'">'+
                '</div>'+
            '</div>'+
            '<div class="txt">'+
                '<p><b>'+array3[i].name+'</b></p>'+
            '</div>'+
        '</li>'
    module3.innerHTML = module3.innerHTML + li
}
//联系人
let array4=[
    { 'first':'A','list':[
            {'img':'images/mayun.jfif','name':'A1'},
            {'img':'images/1.jpg','name':'A2'},
            {'img':'images/2.png','name':'A3'},
            {'img':'images/mayun.jfif','name':'A4'},
            {'img':'images/1.jpg','name':'A5'},
            {'img':'images/2.png','name':'A6'}
        ]
    },
    { 'first':'B','list':[
            {'img':'images/wangjianlin.jfif','name':'B1'},
            {'img':'images/3.png','name':'B2'},
            {'img':'images/4.png','name':'B3'},
        ]
    },
    { 'first':'C','list':[
            {'img':'images/xijinping.jfif','name':'C1'},
            {'img':'images/5.png','name':'C2'},
            {'img':'images/6.jfif','name':'C3'}
        ]
    }
]
/*let communication = document.querySelector('.communication')
for ( let i = 0; i < array4.length; i++){
    let div1 = '<p>'+array4[i].first+'</p>'
    communication.innerHTML = communication.innerHTML + div1
    for (let j = 0; j < array4[i].list.length; j++){
        let div2 =
            '<div>'+
                    '<ul>'+
                        '<li>'+
                            '<div class="img">'+
                                '<img src="'+array4[i].list[j].img+'">'+
                            '</div>'+
                            '<div class="txt">'+
                                '<p><b>'+array4[i].list[j].name+'</b></p>'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+
            '</div>'
        communication.innerHTML = communication.innerHTML + div2
    }
}*/

$(function () {
    for ( let i = 0; i < array4.length; i++){
        let div1 = $('<p><a name ="'+array4[i].first+'">'+array4[i].first+'</a></p>');
        $('.communication').append(div1)
        for (let j = 0; j < array4[i].list.length; j++){
            let div2 =$(
                '<div>'+
                    '<ul>'+
                        '<li>'+
                            '<div class="img">'+
                                '<img src="'+array4[i].list[j].img+'">'+
                            '</div>'+
                            '<div class="txt">'+
                                '<p><b>'+array4[i].list[j].name+'</b></p>'+
                            '</div>'+
                        '</li>'+
                    '</ul>'+
                '</div>')
            $('.communication').append(div2)
        }
    }
})


//右侧导航栏
$(function () {
    for (let i = 65; i <= 90; i++){
        let c = String.fromCharCode(i);
        let li = $('<li><a href="#'+c+'">'+c+'</a></li>');
        $('.word_box>ul').append(li);
    }
    $('.word_box>ul').append($('<li><a href="#">#</a></li>'));
})