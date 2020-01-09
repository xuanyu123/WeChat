let menus = [
    {'img':'images/微信.svg','href':'chat.html','txt':'微信'},
    {'img':'images/通讯录.svg','href':'address.html','txt':'通讯录'},
    {'img':'images/发现.svg','href':'find.html','txt':'发现'},
    {'img':'images/我.svg','href':'me.html','txt':'我'}
]
let menu = document.querySelector('.menu')
for(let i = 0; i < menus.length; i++){
    let div = '<div>'+
        '<a href="'+menus[i].href+'" target="myframe">'+
            '<img alt="pic" height="200" width="" src="'+menus[i].img+'">'+
                '<p>'+menus[i].txt+'</p>'+
        '</a>'+
    '</div>'
    menu.innerHTML = menu.innerHTML + div
}