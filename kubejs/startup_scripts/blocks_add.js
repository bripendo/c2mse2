StartupEvents.registry('block', event => {
	
	let machine = (name, layer) => {
		let id = name.toLowerCase()
		event.create(`${id}_machine`)
			.model(`kubejs:block/${id}_machine`)
			.soundType('lantern')
			.hardness(3.0)
			.displayName(`${name} Machine`)
			.notSolid()
			.renderType(layer)
	}

	machine('Andesite', "solid")
	machine('Copper', "translucent")
	machine('Brass', "cutout")
	machine('Abstruse', "cutout")
	machine('Inductive', "cutout")
	machine('Integrated', "cutout")
	machine('Portable', "cutout")

	event.create(`black_psiblock`)
		.displayName(`Black Psiblock`)
		.hardness(3.0)
        .resistance(1)
		.requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
		.texture('up', `minecraft:block/black_concrete`)
		.texture('down', `minecraft:block/black_concrete`)
		.texture('north', `kubejs:block/black_psiblock_light`)
		.texture('south', `kubejs:block/black_psiblock_light`)
		.texture('east', `kubejs:block/black_psiblock_light`)
		.texture('west', `kubejs:block/black_psiblock_light`)

	event.create(`white_psiblock`)
		.displayName(`White Psiblock`)
		.hardness(3.0)
        .resistance(1)
		.requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock('minecraft:needs_iron_tool')
		.texture('up', `minecraft:block/white_concrete`)
		.texture('down', `minecraft:block/white_concrete`)
		.texture('north', `kubejs:block/white_psiblock_light`)
		.texture('south', `kubejs:block/white_psiblock_light`)
		.texture('east', `kubejs:block/white_psiblock_light`)
		.texture('west', `kubejs:block/white_psiblock_light`)

	event.create(`witherproof_block`)
		.displayName(`Witherproof Block`)
		.hardness(8.0)
		.resistance(1200)
		.requiresTool(true)
        .tagBlock('forge:obsidian')
        .tagBlock('minecraft:wither_immune')
        .tagBlock('minecraft:dragon_immune')
		.textureAll(`kubejs:block/witherproof_block`)

	event.create(`witherproof_bricks`)
		.displayName(`Witherproof Bricks`)
		.hardness(8.0)
		.resistance(1200)
		.requiresTool(true)
        .tagBlock('forge:obsidian')
        .tagBlock('minecraft:wither_immune')
        .tagBlock('minecraft:dragon_immune')
		.textureAll(`kubejs:block/witherproof_bricks`)

	event.create(`crushed_granite`)
		.displayName(`Crushed Granite`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/shovel")
		.soundType('sand')
		.textureAll(`kubejs:block/crushed_granite`)

	event.create(`crushed_diorite`)
		.displayName(`Crushed Diorite`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/shovel")
		.soundType('sand')
		.textureAll(`kubejs:block/crushed_diorite`)

	event.create(`crushed_andesite`)
		.displayName(`Crushed Andesite`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/shovel")
		.soundType('sand')
		.textureAll(`kubejs:block/crushed_andesite`)

	event.create(`crushed_sky_stone`)
		.displayName(`Crushed Sky Stone`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/shovel")
		.soundType('sand')
		.textureAll(`kubejs:block/crushed_sky_stone`)

	event.create(`inductive_casing`)
		.displayName(`Inductive Casing`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/pickaxe")
		.soundType('lantern')
		.texture('up', `kubejs:block/inductive_casing_top`)
		.texture('down', `kubejs:block/inductive_casing_top`)
		.texture('north', `kubejs:block/inductive_casing`)
		.texture('south', `kubejs:block/inductive_casing`)
		.texture('east', `kubejs:block/inductive_casing`)
		.texture('west', `kubejs:block/inductive_casing`)

	event.create(`fluix_casing`)
		.displayName(`Fluix Casing`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/pickaxe")
		.soundType('lantern')
		.textureAll(`kubejs:block/fluix_casing`)

	event.create(`abstruse_casing`)
		.displayName(`Abstruse Casing`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/pickaxe")
		.soundType('lantern')
		.texture('up', `kubejs:block/abstruse_casing_top`)
		.texture('down', `kubejs:block/abstruse_casing_bottom`)
		.texture('north', `kubejs:block/abstruse_casing`)
		.texture('south', `kubejs:block/abstruse_casing`)
		.texture('east', `kubejs:block/abstruse_casing`)
		.texture('west', `kubejs:block/abstruse_casing`)

	event.create(`portable_casing`)
		.displayName(`Portable Casing`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/pickaxe")
		.soundType('lantern')
		.textureAll(`kubejs:block/portable_casing`)

	event.create(`integrated_casing`)
		.displayName(`Integrated Casing`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/pickaxe")
		.soundType('lantern')
		.textureAll(`kubejs:block/integrated_casing`)

	event.create(`embedded_casing`)
		.displayName(`Embedded Casing`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/pickaxe")
		.soundType('lantern')
		.textureAll(`kubejs:block/embedded_casing`)
		
	event.create("electric_casing")
		.model(`kubejs:block/electric_casing`)
		.soundType('lantern')
		.hardness(3.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/pickaxe")
		.soundType('lantern')
		.displayName("Electric Casing")
		.notSolid()
		.renderType("cutout")

	event.create(`compressed_crafting_table`)
		.displayName(`Compressed Crafting Table`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/axe")
		.textureAll(`kubejs:block/compressed_crafting_table`)

	event.create(`double_compressed_crafting_table`)
		.displayName(`Double Compressed Crafting Table`)
		.hardness(1.0)
		.resistance(1)
		.requiresTool(false)
        .tagBlock("mineable/axe")
		.textureAll(`kubejs:block/double_compressed_crafting_table`)
});