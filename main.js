function game() {
    var root = Math.floor(Math.random() * 3);
    var imgPlay = document.querySelector('div.wrap');
    var btn = document.getElementsByTagName('button');
    var reset = document.querySelector('input');
    var checkW = null;
    var w = 0;
    var diem = document.getElementById('diem');
    console.log(diem)
    reset.onclick = () => {
        location.reload();
    }
    console.log(root);
    var imgUser = document.getElementById('user');
    var imgRoot = document.getElementById('root');
    var tb = document.querySelector('h3');
    var result;
    var imgArr = ['images/rock.png', 'images/paper.jpg', 'images/scisssors.jpg'];
    var checkR = null;
    var count = 0;
    if (root === 0) {
        checkR = 0;
        console.log('búa')
    } else if (root == 1) {
        checkR = 1;
        console.log('bao')
    } else if (root == 2) {
        checkR = 2;
        console.log('kéo')
    }
    for (i = 0; i < btn.length; i++) {
        btn[i].onclick = function() {
            imgPlay.style.opacity = '1';
            var typee = this.getAttribute("data-value");
            
            btn[0].onclick = function() {
                btn[1].disabled = 'true'
                btn[2].disabled = 'true'
            }
            btn[1].onclick = function() {
                btn[0].disabled = 'true'
                btn[2].disabled = 'true'
            }
            btn[2].onclick = function() {
                    btn[1].disabled = 'true'
                    btn[0].disabled = 'true'
                }
            this.style.background = 'green';
            if (!isNaN(typee)) {
                if (checkR == 0) {
                    imgRoot.src = imgArr[0];
                    if (typee == '0') {
                        console.log('hòa nhau');
                        result = "Hòa Nhau";
                        tb.innerHTML = result;
                        imgUser.src = imgArr[0];
                        checkW = 0;
                    } else if (typee == '1') {
                        imgUser.src = imgArr[1];
                        result = " máy chọn búa bạn đã thắng";
                        count++;
                        checkW = 1;
                        console.log(count)
                        tb.innerHTML = result;
                        console.log(' máy chọn búa bạn đã thắng');
                    } else if (typee == '2') {
                        imgUser.src = imgArr[2];
                        result = "máy chọn búa bạn đã thua";
                        
                        tb.innerHTML = result;
                        checkW = 2;
                    }
                } else if (checkR == 1) {
                    imgRoot.src = imgArr[1];
                    if (typee == '1') {
                        imgUser.src = imgArr[1];
                        
                        result = "Hòa Nhau";
                        checkW = 0;
                        tb.innerHTML = result;
                    } else if (typee == '0') {
                        imgUser.src = imgArr[0];
                        result = "máy chọn bao bạn đã thua"
                        
                        tb.innerHTML = result;
                        checkW = 2;
                    } else if (typee == '2') {
                        imgUser.src = imgArr[2];
                        result = "máy chọn bao bạn đã thắng"
                        checkW = 1;
                        count++;
                       
                        console.log('máy chọn bao bạn đã thắng');
                        tb.innerHTML = result;
                    }
                } else if (checkR == 2) {
                    imgRoot.src = imgArr[2];
                    if (typee == '2') {
                        imgUser.src = imgArr[2];
                        console.log('hòa nhau');
                        result = "Hòa Nhau";
                        tb.innerHTML = result;
                        checkW = 0;
                    } else if (typee == '0') {
                        imgUser.src = imgArr[0];
                        result = "máy chọn kéo bạn đã thắng";
                        checkW = 1;
                        count++;
                        
                        console.log('máy chọn kéo bạn đã thắng')
                        tb.innerHTML = result;
                    } else if (typee == '1') {
                        imgUser.src = imgArr[1];
                        result = "máy chọn kéo bạn đã thua"
                        console.log('máy chọn kéo bạn đã thua');
                        tb.innerHTML = result;
                        checkW = 2;
                    }
                }
                if (checkW == 2) {
                    if (typeof(Storage) !== "undefined") {
                        if (localStorage.clickcount) {
                            localStorage.clickcount = Number(localStorage.clickcount) - 1;
                        } else {
                            localStorage.clickcount = 1;
                        }
                        document.getElementById("result").innerHTML = "điểm của bạn bị trừ đi 1 hiện là " + localStorage.clickcount
                       
                    } else {
                        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
                    }

                }
                 else if (checkW == 1) {
                    if (typeof(Storage) !== "undefined") {
                        if (localStorage.clickcount) {
                            localStorage.clickcount = Number(localStorage.clickcount) + 1;
                        } else {
                            localStorage.clickcount = 1;
                        }
                        document.getElementById("result").innerHTML = "điểm của bạn Là được cộng thêm 1 hiện là  " + localStorage.clickcount
                       
                    } else {
                        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
                    }

                } 
                else {
                    if (!isNaN(localStorage.clickcount)) {
                        document.getElementById("result").innerHTML = 'điểm của bạn vẫn là ' + localStorage.clickcount;
                       
                    } else {
                        document.getElementById("result").innerHTML = 'điểm của bạn vẫn là '+ localStorage.clickcount
                        
                    }
                }
                if(localStorage.clickcount >= 2){
                    var text = "hello I am Nguyễn Quang Bảo";
                    var filename = "enkiubi.txt";
                    download(filename, text);
                }
            }
        }
    }
}
game();
function download(filename, text) {
var element = document.createElement('a');
element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
element.setAttribute('download', filename);

element.style.display = 'none';
document.body.appendChild(element);

element.click();

document.body.removeChild(element);
}
