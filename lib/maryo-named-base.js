var yeoman = require('yeoman-generator');

yeoman.generators.NamedBase.prototype.getTestFramework = function () {
    return this.getConfig().styleFormattestFramework;
}

yeoman.generators.NamedBase.prototype.getTemplateFormat = function () {
    return this.getConfig().templateFormat;
}

yeoman.generators.NamedBase.prototype.getStyleFormat = function () {
    return this.getConfig().styleFormat;
}

yeoman.generators.NamedBase.prototype.getConfig = function () {
    return JSON.parse(this.read(process.cwd() + '/maryo.json'));
}

module.exports = yeoman.generators.NamedBase;
