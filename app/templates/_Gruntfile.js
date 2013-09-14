// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    // load all grunt tasks
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    grunt.initConfig({
        yeoman: yeomanConfig,
        watch: {<% if (styleFormat === 'sass') { %>
            compass: {
                files: ['app/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass:server']
            },<% } if (styleFormat === 'less') { %>
            less: {
                files: 'app/styles',
                tasks: "less:dev"
            },<% } if (templateFormat === 'dust') { %>
            dust: {
                files: 'app/scripts/templates/*.dust',
                tasks: "dustjs"
            },<% } %>
            livereload: {
                files: [
                    'app/*.html',
                    '{.tmp,app}/styles/{,*/}*.css',
                    '{.tmp,app}/scripts/{,*/}*.js',
                    'app/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
                ],
                tasks: ['livereload']
            }
        },
        connect: {
            options: {
                port: 8888,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'app')
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, 'dist')
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                path: 'http://localhost:<%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [{
                    dot: true,
                    src: [
                        '.tmp',
                        'build/*',
                        '!build/.git*'
                    ]
                }]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                'app/scripts/{,*/}*.js',
                '!app/scripts/vendor/*',
                'test/spec/{,*/}*.js'
            ]
        },<% if (testFramework === 'mocha') { %>
        mocha: {
            all: {
                options: {
                    run: true,
                    urls: ['http://localhost:<%= connect.options.port %>/index.html']
                }
            }
        },<% } if (testFramework === 'jasmine') { %>
        jasmine: {
            all: {
                /*src: '',*/
                options: {
                    specs: 'test/spec/{,*/}*.js'
                }
            }
        },<% } if (styleFormat === 'sass') { %>
        compass: {
            options: {
                sassDir: 'app/styles',
                cssDir: '.tmp/styles',
                imagesDir: 'app/images',
                javascriptsDir: 'app/scripts',
                fontsDir: 'app/styles/fonts',
                importPath: 'app/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images',
                relativeAssets: false
            },
            dist: {},
            server: {
                options: {
                    debugInfo: true
                }
            }
        },<% } if (styleFormat === 'less') { %>
        less: {
            development: {
                options: {
                    paths: ["assets/css"]
                },
                files: {
                    "path/to/result.css": "path/to/source.less"
                }
            },
            production: {
                options: {
                    paths: ["assets/css"],
                    yuicompress: true
                },
                files: {
                    "path/to/result.css": "path/to/source.less"
                }
            }
        },<% } %>
        requirejs: {
            dist: {
                options: {
                    baseUrl: 'app/scripts',
                    optimize: 'none',
                    preserveLicenseComments: false,
                    useStrict: true,
                    wrap: true
                }
            }
        },
        rev: {
            dist: {
                files: {
                    src: [
                        'build/scripts/{,*/}*.js',
                        'build/styles/{,*/}*.css',
                        'build/images/{,*/}*.{png,jpg,jpeg,gif,webp}',
                        'build/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: 'app/index.html',
            options: {
                dest: 'build'
            }
        },
        usemin: {
            html: ['build/{,*/}*.html'],
            css: ['build/styles/{,*/}*.css'],
            options: {
                dirs: ['build']
            }
        },
        imagemin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/images',
                    src: '{,*/}*.{png,jpg,jpeg}',
                    dest: 'build/images'
                }]
            }
        },
        svgmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/images',
                    src: '{,*/}*.svg',
                    dest: 'build/images'
                }]
            }
        },
        cssmin: {
            dist: {
                files: {
                    'build/styles/main.css': [
                        '.tmp/styles/{,*/}*.css',
                        'app/styles/{,*/}*.css'
                    ]
                }
            }
        },
        htmlmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app',
                    src: '*.html',
                    dest: 'build'
                }]
            }
        },<% if (templateFormat === 'dust') { %>
        dustjs: {
            compile: {
                files: {
                   "app/scripts/templates/compiled.js": ["app/scripts/templates/*.dust"]
                }
            }
        },
        <% } %>
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: 'app',
                    dest: 'build',
                    src: [
                        '*.{ico,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/*'
                    ]
                }]
            }
        },
        concurrent: {
            server: [
                <% if (styleFormat === 'sass') { %>'compass:server'<% } %>
            ],
            test: [
                <% if (styleFormat === 'sass') { %>'compass'<% } %>
            ],
            dist: [<% if (styleFormat === 'sass') { %>
                'compass:dist',<% } %>
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        }
    });

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'concurrent:server',
            'livereload-start',
            'connect:livereload',
            'open',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'connect:test',<% if (testFramework === 'mocha') { %>
        'mocha'<% } if (testFramework === 'jasmine') { %>
        'jasmine'<% } %>
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'requirejs',
        'cssmin',
        'concat',
        'uglify',
        'copy',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'jshint',
        'test',
        'build'
    ]);
};
