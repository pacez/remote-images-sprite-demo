var images=require('images');
var http = require("http");

var fs = require("fs");

var url ='http://img20.360buyimg.com/babel/s380x300_jfs/t18115/116/1772264751/61591/9fd58275/5ad7172eNc632d061.jpg!q90!cc_190x150';
var output='/Users/pacez/Desktop/2.jpg';
http.get(url, function(res){
    var imgData = "";
    res.setEncoding("binary");
    res.on("data", function(chunk){
        imgData+=chunk;
    });
    res.on("end", function(){
      images(400,400)
      .fill(255, 255, 255,100)
      .draw(images(new Buffer(imgData,'binary')),10,10)
      .draw(images(new Buffer(imgData,'binary')),100,100)
      .save(output)
    });
});
