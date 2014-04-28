module.exports = function(grunt) {

    grunt.initConfig({
        
        pkg: grunt.file.readJSON('package.json'),
        name: 'project',
        srcPath: 'jssrc',
        proxyPath: 'src',
        demoPath: 'demo',
        compoPath: 'components',
        assetsPath: 'assets',
        libsPath: 'libs',        
        distPath: 'build',

        clean: ['<%= distPath%>/*', '<%= proxyPath%>/*'],
        
        imagemin: {
            png: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,
                    cwd: 'assets/slice/',
                    src: ['*.png'],
                    dest: 'assets/slice-min/',
                    ext: '.png'
                }]
            }
        },
        
        copy: {
            main: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['package.json'],
                    dest: '<%= distPath %>'
                }]
            },
            audio: {
                files: [{
                    expand: true,
                    cwd: './ogg',
                    src: ['*'],
                    dest: '<%= distPath %>'
                }]
            },
            
            font: {
                files: [{
                    expand: true,
                    cwd: '<%= assetsPath %>/font/',
                    src: ['*'],
                    dest: '<%= distPath %>'
                }]                
            },
            
            syncBuild: {
                files: [{
                    expand: true,
                    cwd: '<%= distPath %>/',
                    src: ['*.{css,js}'],
                    dest: '<%= proxyPath %>'
                }]                
            }
        },

        depconcat: {
            options: {
                separator: '\n'
            },         

            components: {
                src: ['<%= compoPath %>/**/*.js'],
                dest: '<%= distPath %>/compo.debug.js'
            },

            srcCombo: {
                src: ['<%= srcPath %>/*.js'],
                dest: '<%= distPath %>/srcCombo.debug.js'
            },

            cssCombo: {
                src: ['<%= assetsPath %>/css/stylesheets/app.css'],
                dest: '<%= distPath %>/app.debug.css'
            },
            
            jsCombo: {
                src: ['<%= distPath %>/compo.debug.js', '<%= distPath %>/srcCombo.debug.js'],
                dest: '<%= distPath %>/app.debug.js'                
            }
            
        },

        uglify: {
            main: {
                files: [{
                    expand: true,
                    cwd: '<%= distPath %>',
                    src: ['*.debug.js'],
                    dest: '<%= distPath %>',
                    ext: '.js'
                }]
            }
        },


        compass: {
            dist: {
                options: {
                    sassDir: '<%= assetsPath %>/css/sass/',
                    cssDir: '<%= assetsPath %>/css/stylesheets/',                    
                    config: '<%= assetsPath %>/css/config.rb'
                }
            }
        },

        cssmin: {
            options: {
                report: 'min'
            },

            main: {
                files: [{
                    expand: true,
                    cwd: '<%= distPath %>',
                    src: ['*.css'],
                    dest: '<%= distPath %>',
                    ext: '.css'
                }]
            }
        },

        watch: {

            combo: {
                files: ['package.json'],
                tasks: ['copy']
            },

            js: {
                files: ['<%= srcPath %>/*.js', '<%= compoPath %>/**/*.js'],
                tasks: ['clean',  'depconcat', 'uglify', 'cssmin', 'copy:syncBuild']
            },

            css: {
                files: ['<%= assetsPath %>/css/sass/**/*.scss'],
                tasks: ['clean', 'compass:dist', 'depconcat' ,'uglify','cssmin']
            },


            clean: {
                files: ['<%= distPath %>/*.{css,js}'],
                tasks: ['copy:syncBuild']
            },            
            
            
            livereload: {
                options: {
                    livereload: '<%= connect.options.livereload %>'
                },
                files: [
                    '<%= demoPath %>/**/*.html',
                    '<%= distPath %>/*.{css,js}'
                ]
            }
        },

        depcombo: {
            debug: {
                options: {
                    useDebug: true,
                    useDaily: true,
                    output: 'url'
                },
                dest: '<%= distPath%>/combo.debug.js'
            },

            main: {
                options: {
                    output: 'file'
                },
                dest: '<%= distPath%>/combo.js'
            }
        },
        
        connect: {
            options: {
                port: 9001,
                livereload: 35729,
                hostname: '0.0.0.0'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        ''
                    ]
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-depconcat');
    grunt.loadNpmTasks('grunt-depcombo');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-imagemin');      

    grunt.registerTask('dist', ['clean','depconcat', 'uglify', 'compass', 'cssmin','copy', 'imagemin']);
    grunt.registerTask('dev', ['connect:livereload', 'watch']);



    grunt.registerTask('default', ['dist']);

};
