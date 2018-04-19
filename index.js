const fs = require("fs");
const images=require('images');
const http = require("http");

// 输出图片
const output='/Users/pacez/Desktop/sprite.png';

// 远程图片, 注意只支持http协议
const imgList=[
  'http://img20.360buyimg.com/babel/s380x300_jfs/t18115/116/1772264751/61591/9fd58275/5ad7172eNc632d061.jpg!q90!cc_190x150',
  'http://img20.360buyimg.com/babel/s380x300_jfs/t18715/78/1510873324/62323/af27753/5acb3a85Na3df0833.jpg!q90!cc_190x150',
  'http://img1.360buyimg.com/pop/s380x300_jfs/t16822/153/1323558748/48991/3b746909/5ac70356Nf7d24865.jpg!q90!cc_190x150'
];

// 获取到的图片列表
const imgWrapList=[];

// 图片请求队列
const imgReqQueue=imgList.map((item,i)=>{
    return new Promise((resolve, reject)=> {
      http.get(item, function(res){
          var imgData = "";
          res.setEncoding("binary");

          res.on("data", function(chunk){
              imgData+=chunk;
          });
          res.on("end", function(){
            try{
              // 将获取的图片注入imgWrapList
              imgWrapList.push(images(new Buffer(imgData,'binary')));
              resolve();
            }catch(e){
              reject();
            }
          });
      });
    });
});

Promise.all(imgReqQueue).then(()=>{
  // 设置背景画板尺寸
  var ca=images(190,450);
  // 遍历图片列表，拼接图片
  imgWrapList.map((item,i)=> {
    // 将图片设置为了190*150尺寸
    ca.draw(item.size(190,150),0,150*i);
  });
  ca.save(output)
});
