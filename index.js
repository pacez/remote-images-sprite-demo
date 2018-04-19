var fs = require("fs");
var images=require('images');
var http = require("http");


// 远程图片
var url ='http://img20.360buyimg.com/babel/s380x300_jfs/t18115/116/1772264751/61591/9fd58275/5ad7172eNc632d061.jpg!q90!cc_190x150';
// 输出图片
var output='/Users/pacez/Desktop/2.png';

http.get(url, function(res){
    var imgData = "";
    res.setEncoding("binary");

    res.on("data", function(chunk){
        imgData+=chunk;
    });
    
    res.on("end", function(){
      images(400,400) // 创建透明画布
      .draw(images(new Buffer(imgData,'binary')),10,10) // 画出第一张图
      .draw(images(new Buffer(imgData,'binary')),100,100) // 画出第二张图
      .save(output) // 输出拼接的图片
    });
});
