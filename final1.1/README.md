# 项目介绍
    数据可视化
 
# 环境依赖
    Flask+VUE3+mysql+d3，配置python3.6的虚拟环境
 
# 目录结构描述
    ├── README.md           // 帮助文档
    
    ├── doob  // 前端VUE3文件

    │   ├── node_modules     // 依赖项

    │   ├── public

    │   ├── src

    │       ├── assets      //静态文件，包含字体，图像，scss样式

    │           ├── fonts

    │           ├── images

    │           └── scss

    │       ├── components      //VUE组件

    │           ├── common      //包含通用组件，页眉，页脚，布局

    │               ├── footer

    │               ├── header

    │               └── Layout.vue

    │           ├── d3Component      //包含d3可视化组件

    │           ├── elements      //包含可选页面组件

    │           ├── helpers      //一些常见功能静态方法

    │           ├── mixins      //数据源文件

    │           ├── router      //路由

    │           ├── views      //页面文件

    │           ├── App.vue

    │           └── main.js

    │   ├── .browserslistrc     //浏览器兼容性配置规则

    │   ├── .gitignore      //Git版本控制系统配置文件

    │   ├── babel.config.js     //配置Babel转译器

    │   ├── config.js       //配置信息

    │   ├── package-lock.json

    │   └── package.json

    ├── flask            // 后端Flask文件

    │   ├── venv        //虚拟环境

    │       ├── bin     //可执行文件

    │       ├── include     //头文件

    │       └── lib     //库文件

    │   ├── .gitignore

    │   ├── app.py

    │   └── pyvenv.cfg      //指定虚拟环境配置项
 
# 使用说明
### 前端
    进入doob文件夹路径下，使用npm run serve命令运行。默认使用8080端口。

### 后端
    修改app.py的数据库配置。
    进入venv文件夹路径下，使用. venv/bin/activate命令激活虚拟环境。
    如果在anaconda环境下，使用conda deactivate离开conda环境。
    最后使用python app.py命令在终端运行后端文件。
    运行使用5001端口，如遇端口占用可在app.py文件中的
    if __name__ == '__main__':
    app.run(port=5001)
    进行更改。

 
 
# 版本内容更新
###### v1.0.0（2023/6/15）: 
    1.基本的前端界面，搭建Flask+VUE3+mysql+d3项目，运行畅通。

 
 