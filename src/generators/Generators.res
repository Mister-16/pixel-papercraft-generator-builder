@val external process: 'a = "process"

let isDevEnvironment: bool = process["env"]["NODE_ENV"] == "development"

let character: array<Generator.generatorDef> = [
  MinecraftCharacterGenerator.generator,
  MinecraftActionFigureGenerator.generator,
  MinecraftUltimateBendableGenerator.generator,
  MinecraftCharacterMiniGenerator.generator,
]

let mobCharacter: array<Generator.generatorDef> = [
  MinecraftCreeperCharacterGenerator.generator,
  MinecraftCatCharacterGenerator.generator,
  MinecraftCowCharacterGenerator.generator,
  MinecraftEndermanCharacterGenerator.generator,
  MinecraftGolemCharacterGenerator.generator,
  MinecraftPigCharacterGenerator.generator,
  MinecraftSquidCharacterGenerator.generator,
  MinecraftVillagerCharacterGenerator.generator,
  MinecraftWolfCharacterGenerator.generator,
]

let mob: array<Generator.generatorDef> = [
  MinecraftCreeperGenerator.generator,
  MinecraftEndermanGenerator.generator,
  MinecraftGolemGenerator.generator,
  MinecraftHorseGenerator.generator,
  MinecraftPigGenerator.generator,
]

// Blocks, Items and Accessories
let utility: array<Generator.generatorDef> = [
  MinecraftBlockGenerator.generator,
  MinecraftCapeAndElytraGenerator.generator,
  MinecraftCharacterHeadsGenerator.generator,
]

let mod: array<Generator.generatorDef> = [DalekModDalekGenerator.generator]

let other: array<Generator.generatorDef> = []

let dev: array<Generator.generatorDef> = isDevEnvironment
  ? [MinecraftWitherGenerator.generator]
  : []

let test: array<Generator.generatorDef> = isDevEnvironment
  ? [ExampleGenerator.generator, TestingGenerator.generator]
  : []

let all = Belt.Array.concatMany([character, mobCharacter, mob, utility, mod, other, dev, test])
