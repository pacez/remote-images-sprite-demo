远程图片拼接DEMO
----------------

原理： 利用node-images库。读取image server图片并根据参数进行拼接。

### 目前进展：

1.	完成了远程图片的读取及拼接功能。
2.	完成并发请求多张远程图片。

### 待完成：

1.	构建http服务，接收多图地址及坐标参数
2.	根据接受参数，实现多图并发请求，完成后，调用node-images进行图片拼接。
3.	将拼接后的图片，转换成base64编码，并返回对应的业务服务器。
4.	需要进行并发测试，思考拼接服务的缓存设计。

### 与初版构思差异

1.	需要提前计算拼接后图片尺寸。因为node-images拼接图片的原理是，先创建一个大的透明图片做为画布，再在这个画布上进行图片拼接。所以需要提前计算拼接后图片的大小。这个前端或者后端都可以计算

### 运行

\*注：由于node-images只支持读取本地图片，这里我们修改了该库源码，暂时我们上传了整个node_modules依赖库。

Step1: 下载示例代码:

```javascript
git clone https://github.com/pacez/remote-images-sprite-demo.git
```

Step2: 安装nodejs

step3: 修改index.js, 将输出目录改为你本地目录

```javascript
var output='/你本地某个目录/图片名称.jpg'
```

Step4: 进入代码根目录，运行node index.js，即可看到输出了一个拼接图片，实际应用场景我们不需要输出图片，转为base64码直接返回服务器即可。
