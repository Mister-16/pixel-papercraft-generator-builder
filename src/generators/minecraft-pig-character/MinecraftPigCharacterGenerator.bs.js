// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Generator = require("../../builder/modules/Generator.bs.js");
var TextureMap = require("../TextureMap.bs.js");

function requireImage(id) {
  return require("./images/" + id + ".png");
}

function requireTexture(id) {
  return require("./textures/" + id + ".png");
}

var id = "minecraft-pig-character";

var name = "Minecraft Pig Character";

var thumbnail = {
  url: require("./thumbnail/thumbnail.jpeg")
};

var images = [
  {
    id: "Background",
    url: requireImage("Background")
  },
  {
    id: "Folds",
    url: requireImage("Folds")
  }
];

var textures = [{
    id: "Skin",
    url: requireTexture("Skin"),
    standardWidth: 64,
    standardHeight: 64
  }];

var steve = TextureMap.MinecraftCharacterLegacy.steve;

function script(param) {
  Generator.defineTextureInput("Skin", {
        standardWidth: 64,
        standardHeight: 64,
        choices: []
      });
  Generator.defineBooleanInput("Show Folds", true);
  var showFolds = Generator.getBooleanInputValue("Show Folds");
  Generator.drawImage("Background", [
        0,
        0
      ]);
  Generator.drawTextureLegacy("Skin", {
        x: 0,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 90,
        y: 206,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 154,
        y: 206,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 218,
        y: 206,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 282,
        y: 206,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 0,
        w: 8,
        h: 8
      }, {
        x: 154,
        y: 142,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 0,
        w: 8,
        h: 8
      }, {
        x: 154,
        y: 270,
        w: 64,
        h: 64
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 295,
        y: 531,
        w: 65,
        h: 128
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 16,
        w: 8,
        h: 4
      }, {
        x: 359,
        y: 451,
        w: 80,
        h: 64
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 295,
        y: 387,
        w: 64,
        h: 128
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 16,
        w: 8,
        h: 4
      }, {
        x: 167,
        y: 451,
        w: 80,
        h: 64
      }, "Horizontal", 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 32,
        y: 20,
        w: 8,
        h: 12
      }, {
        x: 295,
        y: 451,
        w: 80,
        h: 128
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 20,
        w: 8,
        h: 12
      }, {
        x: 295,
        y: 596,
        w: 80,
        h: 128
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 36,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 444,
        y: 149,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 44,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 380,
        y: 149,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 40,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 476,
        y: 149,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 32,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 412,
        y: 149,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 36,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 117,
        w: 32,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 40,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 197,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 44,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 444,
        y: 295,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 52,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 380,
        y: 295,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 48,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 476,
        y: 295,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 40,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 412,
        y: 295,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 44,
        y: 16,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 263,
        w: 32,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 48,
        y: 16,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 343,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 444,
        y: 442,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 380,
        y: 442,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 476,
        y: 442,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 412,
        y: 442,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 410,
        w: 32,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 490,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 444,
        y: 587,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 12,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 380,
        y: 587,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 476,
        y: 587,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 0,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 412,
        y: 587,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 16,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 555,
        w: 32,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 16,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 635,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 32,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 90,
        y: 206,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 40,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 154,
        y: 206,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 48,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 218,
        y: 206,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 56,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 282,
        y: 206,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 40,
        y: 0,
        w: 8,
        h: 8
      }, {
        x: 154,
        y: 142,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 48,
        y: 0,
        w: 8,
        h: 8
      }, {
        x: 154,
        y: 270,
        w: 64,
        h: 64
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 36,
        w: 4,
        h: 12
      }, {
        x: 295,
        y: 531,
        w: 65,
        h: 128
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 32,
        w: 8,
        h: 4
      }, {
        x: 359,
        y: 451,
        w: 80,
        h: 64
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 36,
        w: 4,
        h: 12
      }, {
        x: 295,
        y: 387,
        w: 64,
        h: 128
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 32,
        w: 8,
        h: 4
      }, {
        x: 167,
        y: 451,
        w: 80,
        h: 64
      }, "Horizontal", 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 32,
        y: 36,
        w: 8,
        h: 12
      }, {
        x: 295,
        y: 451,
        w: 80,
        h: 128
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 36,
        w: 8,
        h: 12
      }, {
        x: 295,
        y: 596,
        w: 80,
        h: 128
      }, undefined, 90.0, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 52,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 444,
        y: 149,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 60,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 380,
        y: 149,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 56,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 476,
        y: 149,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 48,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 412,
        y: 149,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 52,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 117,
        w: 32,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 56,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 197,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 44,
        y: 36,
        w: 4,
        h: 12
      }, {
        x: 444,
        y: 295,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 52,
        y: 36,
        w: 4,
        h: 12
      }, {
        x: 380,
        y: 295,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 48,
        y: 36,
        w: 4,
        h: 12
      }, {
        x: 476,
        y: 295,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 40,
        y: 36,
        w: 4,
        h: 12
      }, {
        x: 412,
        y: 295,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 44,
        y: 32,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 263,
        w: 32,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 48,
        y: 32,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 343,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 444,
        y: 442,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 12,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 380,
        y: 442,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 476,
        y: 442,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 0,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 412,
        y: 442,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 410,
        w: 32,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 490,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 36,
        w: 4,
        h: 12
      }, {
        x: 444,
        y: 587,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 12,
        y: 36,
        w: 4,
        h: 12
      }, {
        x: 380,
        y: 587,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 36,
        w: 4,
        h: 12
      }, {
        x: 476,
        y: 587,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 0,
        y: 36,
        w: 4,
        h: 12
      }, {
        x: 412,
        y: 587,
        w: 32,
        h: 48
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 32,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 555,
        w: 32,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 32,
        w: 4,
        h: 4
      }, {
        x: 444,
        y: 635,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  if (showFolds) {
    return Generator.drawImage("Folds", [
                0,
                0
              ]);
  }
  
}

var generator_thumbnail = thumbnail;

var generator = {
  id: id,
  name: name,
  thumbnail: generator_thumbnail,
  video: undefined,
  instructions: undefined,
  images: images,
  textures: textures,
  script: script
};

exports.requireImage = requireImage;
exports.requireTexture = requireTexture;
exports.id = id;
exports.name = name;
exports.thumbnail = thumbnail;
exports.images = images;
exports.textures = textures;
exports.steve = steve;
exports.script = script;
exports.generator = generator;
/* thumbnail Not a pure module */
