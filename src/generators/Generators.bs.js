// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Belt_Array = require("rescript/lib/js/belt_Array.js");
var DemoGenerator = require("./demo/DemoGenerator.bs.js");
var ExampleGenerator = require("./example/ExampleGenerator.bs.js");
var MinecraftPigGenerator = require("./minecraft-pig/MinecraftPigGenerator.bs.js");
var DalekModDalekGenerator = require("./dalekmod-dalek/DalekModDalekGenerator.bs.js");
var MinecraftBlockGenerator = require("./minecraft-block/MinecraftBlockGenerator.bs.js");
var MinecraftGolemGenerator = require("./minecraft-golem/MinecraftGolemGenerator.bs.js");
var MinecraftHorseGenerator = require("./minecraft-horse/MinecraftHorseGenerator.bs.js");
var MinecraftWitherGenerator = require("./minecraft-wither/MinecraftWitherGenerator.bs.js");
var MinecraftCreeperGenerator = require("./minecraft-creeper/MinecraftCreeperGenerator.bs.js");
var MinecraftEndermanGenerator = require("./minecraft-enderman/MinecraftEndermanGenerator.bs.js");
var MinecraftCharacterGenerator = require("./minecraft-character/MinecraftCharacterGenerator.bs.js");
var MinecraftActionFigureGenerator = require("./minecraft-action-figure/MinecraftActionFigureGenerator.bs.js");
var MinecraftCatCharacterGenerator = require("./minecraft-cat-character/MinecraftCatCharacterGenerator.bs.js");
var MinecraftCowCharacterGenerator = require("./minecraft-cow-character/MinecraftCowCharacterGenerator.bs.js");
var MinecraftPigCharacterGenerator = require("./minecraft-pig-character/MinecraftPigCharacterGenerator.bs.js");
var MinecraftCapeAndElytraGenerator = require("./minecraft-cape-and-elytra/MinecraftCapeAndElytraGenerator.bs.js");
var MinecraftCharacterMiniGenerator = require("./minecraft-character-mini/MinecraftCharacterMiniGenerator.bs.js");
var MinecraftWolfCharacterGenerator = require("./minecraft-wolf-character/MinecraftWolfCharacterGenerator.bs.js");
var MinecraftCharacterHeadsGenerator = require("./minecraft-character-heads/MinecraftCharacterHeadsGenerator.bs.js");
var MinecraftGolemCharacterGenerator = require("./minecraft-golem-character/MinecraftGolemCharacterGenerator.bs.js");
var MinecraftSquidCharacterGenerator = require("./minecraft-squid-character/MinecraftSquidCharacterGenerator.bs.js");
var MinecraftCreeperCharacterGenerator = require("./minecraft-creeper-character/MinecraftCreeperCharacterGenerator.bs.js");
var MinecraftUltimateBendableGenerator = require("./minecraft-ultimate-bendable/MinecraftUltimateBendableGenerator.bs.js");
var MinecraftEndermanCharacterGenerator = require("./minecraft-enderman-character/MinecraftEndermanCharacterGenerator.bs.js");
var MinecraftVillagerCharacterGenerator = require("./minecraft-villager-character/MinecraftVillagerCharacterGenerator.bs.js");

var isDev = process.env.NODE_ENV === "development";

var character = [
  MinecraftCharacterGenerator.generator,
  MinecraftActionFigureGenerator.generator,
  MinecraftUltimateBendableGenerator.generator,
  MinecraftCharacterMiniGenerator.generator
];

var mobCharacter = [
  MinecraftCreeperCharacterGenerator.generator,
  MinecraftCatCharacterGenerator.generator,
  MinecraftCowCharacterGenerator.generator,
  MinecraftEndermanCharacterGenerator.generator,
  MinecraftGolemCharacterGenerator.generator,
  MinecraftPigCharacterGenerator.generator,
  MinecraftSquidCharacterGenerator.generator,
  MinecraftVillagerCharacterGenerator.generator,
  MinecraftWolfCharacterGenerator.generator,
  MinecraftWitherGenerator.generator
];

var mob = [
  MinecraftCreeperGenerator.generator,
  MinecraftEndermanGenerator.generator,
  MinecraftGolemGenerator.generator,
  MinecraftHorseGenerator.generator,
  MinecraftPigGenerator.generator
];

var utility = [
  MinecraftBlockGenerator.generator,
  MinecraftCapeAndElytraGenerator.generator,
  MinecraftCharacterHeadsGenerator.generator
];

var mod = [DalekModDalekGenerator.generator];

var other = [];

var dev = isDev ? [
    ExampleGenerator.generator,
    DemoGenerator.generator
  ] : [];

var all = Belt_Array.concatMany([
      character,
      mobCharacter,
      mob,
      utility,
      mod,
      other,
      dev
    ]);

exports.isDev = isDev;
exports.character = character;
exports.mobCharacter = mobCharacter;
exports.mob = mob;
exports.utility = utility;
exports.mod = mod;
exports.other = other;
exports.dev = dev;
exports.all = all;
/* isDev Not a pure module */
