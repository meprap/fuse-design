import gulp from 'gulp';
import rename from 'gulp-rename';
import cleanCSS from 'gulp-clean-css';

// import autoprefixer from 'gulp-autoprefixer';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';

import plumber from 'gulp-plumber';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import bs from 'browser-sync';

import purgecss from 'gulp-purgecss';
import safelist from './safelist';

import replace from 'gulp-replace';


import gulpif from 'gulp-if';

const htmlpath = 'dev/**/*.html';
const paths = {
    styles: {
        src: 'dev/scss/*.scss',
        dest: 'dist/css/',
    },
    moduleStyles: {
        src: 'dev/scss/styles/*.scss',
        dest: 'dist/css/styles/',
    },
};
var versionConfig = {
    value: '%MDS%',
    append: {
        key: 'v',
        to: ['css', 'js'],
    },
};

function modules() {
    return (
        gulp
            .src(paths.moduleStyles.src)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(postcss([autoprefixer({ overrideBrowserslist: ['last 2 versions', 'iOS 8'] })]))
            // .pipe(
            //   autoprefixer({
            //       browsers: ["last 2 versions"],
            //       cascade: false,
            //   })
            // )
            .pipe(
                gulpif(
                    process.env.NODE_ENV === 'production',
                    purgecss({
                        content: [htmlpath],
                        safelist: {
                            standard: safelist,
                            variables: [/__lpform_+(\w{1})\w*/]
                        }
                    })
                )
            )
            .pipe(
                rename({
                    suffix: '.min',
                })
            )
            .pipe(sourcemaps.write('./maps'))
            .pipe(gulp.dest(paths.moduleStyles.dest))
            .pipe(bs.stream())
    );
}
function styles() {
    return (
        gulp
            .src(paths.styles.src)
            .pipe(plumber())
            .pipe(sourcemaps.init())
            .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
            .pipe(cleanCSS())
            .pipe(postcss([autoprefixer({ overrideBrowserslist: ['last 2 versions', 'iOS 8'] })]))
            // .pipe(
            //   autoprefixer({
            //       browsers: ["last 2 versions"],
            //       cascade: false,
            //   })
            // )
            .pipe( 
                gulpif(
                    process.env.NODE_ENV === 'production',
                    purgecss({
                        content: [htmlpath],
                        safelist: safelist
                    })
                )
            )
            .pipe(
                rename({
                    suffix: '.min',
                })
            )
            // .pipe(sourcemaps.write('./maps'))
            .pipe(replace('url("../../images', 'url("../images'))
            .pipe(replace('url(../../images', 'url(../images'))
            .pipe(replace('url("../../fonts', 'url("../fonts'))
            .pipe(replace('url(../../fonts', 'url(../fonts'))
            .pipe(gulp.dest(paths.styles.dest))
            .pipe(bs.stream())
    );
}
module.exports = { modules, styles };
