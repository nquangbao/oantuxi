
// var root = Math.floor(Math.random() * 3);
// var imgPlay = document.querySelector('div.wrap');
// var btn = document.getElementsByTagName('button');
// var reset = document.querySelector('input');
// reset.onclick = () => {
//   location.reload();
// }
// console.log(root);
// var imgUser = document.getElementById('user');
// var imgRoot = document.getElementById('root');
// var tb = document.querySelector('h3');
// var result;
// var imgArr = ['images/rock.png' ,'images/paper.jpg' , 'images/scisssors.jpg'];
// var checkR = null;
// if(root === 0){checkR = 0;console.log('búa')}
// else if(root == 1){checkR = 1;console.log('bao')}
// else if(root ==2){checkR = 2;console.log('kéo')}
// for(i = 0; i < btn.length; i++){
//   var count = 0;
//   btn[i].onclick = function(){
//     count++;
//     console.log(count);
//     imgPlay.style.opacity = '1';
//     var typee = this.getAttribute("data-value");
//     console.log(typee)
//     btn[0].onclick = function () {
//       btn[1].disabled = 'true'
//       btn[2].disabled = 'true'
//     }
//     btn[1].onclick = function () {
//       btn[0].disabled = 'true'
//       btn[2].disabled = 'true'
//     }
//     btn[2].onclick = function () {
//       btn[1].disabled = 'true'
//       btn[0].disabled = 'true'
//     }
//     // var node  = se0.childNodes;

//   // for (var j = 0 ; j < node.length; j++) {
//   //     var txt = node[j].tagName
//   //     var img = node[j].getAttribute('src');
//   //     console.log(img);
//   // }
//   console.log(typee)
//   this.style.background = 'green';
//   if(!isNaN(typee)){
//     if(checkR == 0){
//       imgRoot.src = imgArr[0];
//       if(typee == '0'){
//         console.log('hòa nhau');
//         result = "Hòa Nhau";
//         tb.innerHTML = result;
//         imgUser.src = imgArr[0];
//       }
//       else if(typee == '1'){
//         imgUser.src = imgArr[1];
//         result = " máy chọn búa bạn đã thắng";
//         tb.innerHTML = result;
//         console.log(' máy chọn búa bạn đã thắng');
//       }
//       else if(typee == '2'){
//         imgUser.src = imgArr[2];
//         result = "máy chọn búa bạn đã thua";
//         console.log('máy chọn búa bạn đã thua');
//         tb.innerHTML = result;
//       }
//     }
//     else if(checkR == 1){
//       imgRoot.src = imgArr[1];
//       if(typee == '1'){
//         imgUser.src = imgArr[1];
//         console.log('hòa nhau');
//         result = "Hòa Nhau";
//         tb.innerHTML = result;
//       }
//       else if(typee == '0'){
//         imgUser.src = imgArr[0];
//         result = "máy chọn bao bạn đã thua"
//         console.log(' máy chọn bao bạn đã thua');
//         tb.innerHTML = result;
//       }
//       else if(typee == '2'){
//         imgUser.src = imgArr[2];
//         result = "máy chọn bao bạn đã thắng";
//         console.log('máy chọn bao bạn đã thắng');
//         tb.innerHTML = result;
//       }
//     }
//     else if(checkR == 2){
//       imgRoot.src = imgArr[2];
//       if(typee == '2'){
//         imgUser.src = imgArr[2];
//         console.log('hòa nhau');
//         result = "Hòa Nhau";
//         tb.innerHTML = result;
//       }
//       else if(typee == '0'){
//         imgUser.src = imgArr[0];
//         result = "máy chọn kéo bạn đã thắng";
//         console.log('máy chọn kéo bạn đã thắng' )
//         tb.innerHTML = result;
//       }
//       else if(typee == '1'){
//         imgUser.src = imgArr[1];
//         result = "máy chọn kéo bạn đã thua"
//         console.log('máy chọn kéo bạn đã thua');
//         tb.innerHTML = result;
//       }
//     }
//   }
// }
// }