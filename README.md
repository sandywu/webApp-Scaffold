# webApp-Scaffold

> 依赖于`Grunt-Init` [http://gruntjs.com/project-scaffolding](http://gruntjs.com/project-scaffolding)

## Intro

脚手架是为在本地调试、日常开发、线上部署过程中提供一套灵活、高效、可配置的目录结构与构建系统+开发环境，方便组内进行交叉项目支持与任务切换，整个脚手架的功能与结构会随着业务与项目一起迭代优化。


## Directory

    ├── Gruntfile.js                # Grunfile
    ├── assets                      # 样式与切片文件
    │   ├── css                     # Sass 目录 依赖Compass
    │   │   ├── config.rb
    │   │   ├── sass                
    │   │   │   ├── app.scss        # App
    │   │   │   ├── function.scss   # 功能样式
    │   │   │   ├── global.scss     # 全局配置
    │   │   │   ├── mods            # Mods目录 模块相关
    │   │   │   └── tpls            # Tpls目录 模板相关
    │   │   └── stylesheets         # 编译目录
    │   ├── slice                   # 切片(未压缩)
    │   └── slice-min               # 切片(已压缩)
    ├── build                       # Gitlab部署目录
    ├── components                  # 项目级别的JS组件
    ├── demo                        # Demo目录
    │   ├── app.html                # App.html
    │   ├── index.html              # Demo 索引
    │   ├── mods                    # Mods目录
    │   │   └── mod.html
    │   ├── pages                   # Pages目录
    │   ├── proxy                   # Clam线上页面代理目录
    │   └── tpls                    # Tpls目录
    ├── jssrc                       # Js 源文件
    │   └── main.js
    ├── mocks                       # JS Mocks 目录
    ├── mockup                      # 视觉高保真 PSD、Sketch
    ├── ogg                         # 音频文件
    ├── package.json                # 项目Meta文件
    ├── readme.md                   # 项目概要与文档
    ├── resource                    # PRD，接口文档等存放目录
    └── src                         # Clam线上静态资源代理目录

## Usage

* 在`~/.grunt-init/`目录下新建目录，例如`webApp`
* Clone项目至该目录下
* 命令行执行`grunt-init webApp`
* 安装相关npm包