// priority: 0

ServerEvents.recipes((event) => {
    removeRecipeByID(event, [
        "endportalrecipe:craftable_end_portal",
    ])

    //crafting table
	removeRecipeByID(event, [
		MC("crafting_table"),
	])
    event.shaped(MC("crafting_table"), [
        'FF ',
        'PP '
    ], {
        F: MC('flint'),
        P: MC('#planks'),
    })

    //furnace
	removeRecipeByID(event, [
        MC("furnace"),
	])
	donutCraftEmpty(event, MC("furnace"), Q("sturdy_stone"))
	
	//quartz from block
    event.shapeless(Item.of(MC('quartz'), 4), [MC('quartz_block')])
	
	//smithing table & stone cutter
	event.replaceInput({ id: MC("smithing_table") }, MC("iron_ingot"), F("#ingots/zinc"))
	event.replaceInput({ id: MC("stonecutter") }, MC("iron_ingot"), KJ("saw_blade"))

    //wet sponge
    event.shapeless(MC('wet_sponge'), [MC('sponge'), MC('water_bucket')])
    event.recipes.create.filling(MC('wet_sponge'), [MC('sponge'), Fluid.of(MC('water'), 1000)])
	customRecipes.ae2.transform.fluid(event, MC('wet_sponge'), [MC('sponge')])
	
	//concrete
	colours.forEach(color => {
		customRecipes.ae2.transform.fluid(event, MC(`${color}_concrete`), [MC(`${color}_concrete_powder`)])
	})

    //flint
    event.shapeless(MC('flint'), [Item.of(MC("gravel"), 3)])
	event.recipes.create.crushing([Item.of(MC('flint'), 2)], MC('gravel')).processingTime(processingTimesDefault.crushing)

    //hopper
    event.replaceInput({ id: MC("hopper") }, F("#chests/wooden"), WH("wooden_hopper"))
	
	//iron door
	event.stonecutting(MC("iron_door"), MI_D("#doors_iron"))
	
	//nether star
	event.shaped(MC("nether_star"), [
        ' A ',
        'A A',
        ' A '
    ], {
        A: KJ('ether_gem'),
    })

    //end portal
    event.recipes.create.mechanical_crafting(Item.of(MC("end_portal_frame"), 3), [
        'AABAA',
        'ECCCE',
        'ECDCE',
        'ECCCE',
        'EEEEE'
    ], {
        A: AE2('singularity'),
        B: MC("nether_star"),
        C: M("teleportation_core"),
        D: MC("ender_eye"),
        E: MC("end_stone")
    })
    event.recipes.extendedcrafting.shaped_table(Item.of(MC("end_portal_frame"), 3), [
        'AABAA',
        'ECCCE',
        'ECDCE',
        'ECCCE',
        'EEEEE'
    ], {
        A: AE2('singularity'),
        B: MC("nether_star"),
        C: M("teleportation_core"),
        D: MC("ender_eye"),
        E: MC("end_stone")
    })

    //ice
    event.shapeless(MC("ice"), [Item.of(AA("ice_shard"), 4)]).id(KJ(`${MC()}/ice_from_shard`))
    event.shapeless(Item.of(AA("ice_shard"), 4), [MC("ice")]).id(KJ(`${MC()}/shard_from_ice`))

    event.recipes.create.deploying(
        MC('farmland'), [ MC("dirt"), [
			MC("wooden_hoe"),
			MC("stone_hoe"),
			MC("iron_hoe"),
			MC("golden_hoe"),
			MC("diamond_hoe"),
			MC("netherite_hoe"),
		]]
    ).damageIngredient(1)

    //trident
    event.shaped(MC("trident"), [
        ' BB',
        ' AB',
        'A  '
    ], {
        A: F('#gems/diamond'),
        B: F("#rods/iron"),
    })

    //water mixing
	event.recipes.create.mixing([Fluid.of(MC("water"), 1000)], [MC("ice")])
	event.recipes.create.mixing([Fluid.of(MC("water"), 250)], [AA("ice_shard")])
	event.recipes.create.mixing([Fluid.of(MC("water"), 500)], [MC("snow_block")])
	event.recipes.create.mixing([Fluid.of(MC("water"), 125)], [MC("snow")])
	event.recipes.create.mixing([Fluid.of(MC("water"), 125)], [MC("snowball")])

    //bone from necrotic
    event.shapeless(MC("bone"), [KJ("necrotic_bone")])
	
	//ender pearl
	customRecipes.create.casting.table(event, MC("ender_pearl"), `90x ${KJ("ender")}`, "ball")
	event.shapeless(Item.of(MC('ender_pearl'), 9), F('#storage_blocks/ender_pearl'))
	
	//slab from planks
	woodTypes.minecraft.log.concat(woodTypes.minecraft.stem).concat(woodTypes.minecraft.block).forEach(wood => {
		event.recipes.create.cutting('2x ' + MC(wood) + '_slab', MC(wood) + '_planks').processingTime(150)
	})
	
	//shield
    removeRecipeByOutput(event, [
		MC("shield"),
    ])
	shapedSaveNBT(event, MC("shield"), [
		'BBB',
		'BAB',
		'BBB',
	], {
		A: MVS("leather_shield"),
		B: F("#ingots/iron"),
	})
})