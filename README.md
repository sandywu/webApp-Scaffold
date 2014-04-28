# webApp-Scaffold

> 依赖于`Grunt-Init` [http://gruntjs.com/project-scaffolding](http://gruntjs.com/project-scaffolding)

## Intro

脚手架是为在本地调试、日常开发、线上部署过程中提供一套灵活、高效、可配置的目录结构与构建系统+开发环境，方便组进行交叉项目支持与任务切换，整个脚手架的功能与结构会随着业务与项目一起迭代优化。


## Directory

    ├── Gruntfile.js
    ├── assetsll
    │   ├── css
    │   │   ├── config.rb
    │   │   ├── sass
    │   │   │   ├── app.scss
    │   │   │   ├── function.scss
    │   │   │   ├── global.scss
    │   │   │   ├── mods
    │   │   │   └── tpls
    │   │   └── stylesheets
    │   ├── slice
    │   └── slice-min
    ├── build
    ├── components
    ├── demo
    │   ├── app.html
    │   ├── index.html
    │   ├── mods
    │   │   └── mod.html
    │   ├── pages
    │   ├── proxy
    │   └── tpls
    ├── jssrc
    │   └── main.js
    ├── mocks
    ├── mockup
    ├── ogg
    ├── package.json
    ├── readme.md
    ├── resource
    └── src

## Usage

* 在`~/.grunt-init/`目录下新建目录，例如`webApp`
* Clone项目至该目录下
* 命令行执行`grunt-init webApp`
* 安装相关npm包