//rarities: cosmic, uncommon, common, advanced, rare, epic, pity, simple, supreme

StartupEvents.registry('item', event => {
	
    event.create('ether_gem')
        .displayName('Ether Gem')
        .rarity('epic')
		.glow(true);

    event.create('the_ultimate_dust')
        .displayName('The Ultimate Dust')
        .rarity('epic');

    event.create('the_ultimate_matter')
        .displayName('The Ultimate Matter')
        .rarity('epic');
	
	event.create('ultimate_salad')
		.glow(true)
		.rarity("epic")
		.displayName('Ultimate Salad')
		.food(food => {
			food
				.hunger(400)
				.saturation(0.5)
				.removeEffect('poison')
				.effect('speed', 300, 0, 1)
				.effect('regeneration', 300, 1, 1)
				.effect('resistance', 3000, 1, 1)
				.effect('fire_resistance', 3000, 1, 1)
				.effect('absorption', 3000, 3, 1)
		})
	
	event.create('cosmic_meatballs')
		.glow(true)
		.rarity("epic")
		.displayName('Cosmic Meatballs')
		.food(food => {
			food
				.hunger(400)
				.saturation(0.5)
				.effect('speed', 300, 0, 1)
				.effect('regeneration', 300, 1, 1)
				.effect('resistance', 3000, 1, 1)
				.effect('fire_resistance', 3000, 1, 1)
				.effect('absorption', 3000, 3, 1)
		})
	
	event.create('ultimate_stew')
		.glow(true)
		.rarity("epic")
		.displayName('Ultimate Stew')
		.food(food => {
			food
				.hunger(800)
				.saturation(1)
				.effect('speed', 600, 0, 1)
				.effect('regeneration', 600, 1, 1)
				.effect('resistance', 6000, 1, 1)
				.effect('fire_resistance', 6000, 1, 1)
				.effect('absorption', 6000, 3, 1)
				.fastToEat()
		})
	
	const waferCaps = ["1k", "4k", "16k", "64k", "256k", "1M", "4M", "16M", "64M", "256M"]
	waferCaps.forEach(cap => {
		event.create(`wafer_component_${cap.toLowerCase()}`).displayName(`${cap} ME Storage Component Wafer`)
	})
	
	const coreWaferCaps = ["1k", "4k", "16k", "64k", "256k"]
	coreWaferCaps.forEach(cap => {
		event.create(`core_${cap.toLowerCase()}_wafer`).displayName(`${cap} ME Energy Storage Component Wafer`)
	})

    event.create('algal_blend').displayName('Algal Blend')
    event.create('coke').displayName('Coke')
    event.create('algal_brick').displayName('Algal Brick')
	event.create('drill_head').displayName('Drill Head')
	event.create('saw_blade').displayName('Saw Blade')
	event.create('sand_ball').displayName('Ball of Sand')
	event.create('rough_sand').displayName('Sand Chunks')
	event.create('purified_sand').displayName('Purified Sand')
	event.create('silicon_compound').displayName('Silicon Compound')
	event.create('incomplete_coke_chunk', 'create:sequenced_assembly').displayName('Cut Coke')
	event.create('coke_chunk').displayName('Coke Chunks')
	event.create('nourished_coke').displayName('Nourished Coke')
	event.create('polished_coke').displayName('Polished Coke')
	event.create('blank_upgrade').displayName('Blank Pipe Upgrade')
	event.create('radiant_sheet').displayName('Radiant Sheet').rarity("uncommon").glow(true)
	event.create('ender_star_fragment').displayName('Ender Star Fragment').rarity("uncommon").glow(true)
	event.create('flux_star_fragment').displayName('Flux Star Fragment').rarity("uncommon").glow(true)
	event.create('universe_piece').displayName('Piece of Universe').glow(true).rarity("epic")
	event.create('the_ultimate_shard').displayName('The Ultimate Shard').glow(true).rarity("epic")
	//event.create('the_ultimate_dna').displayName('The Ultimate DNA').glow(true).rarity("epic")
	
	event.create('pipe_module_utility').displayName('Utility Pipe Module')
	event.create('pipe_module_tier_1').displayName('Tier 1 Pipe Module')
	event.create('pipe_module_tier_2').displayName('Tier 2 Pipe Module')
	event.create('pipe_module_tier_3').displayName('Tier 3 Pipe Module')
	
	let crystalTypes = ['Quartz', 'Certus', 'Fluix']
	crystalTypes.forEach(e => {
		let id = e.toLowerCase()
		event.create(`${id}_seed`).texture("kubejs:item/crystal_seed_" + id).displayName(`${e} Seed`)
		event.create(`${id}_seed_tiny`).texture("kubejs:item/crystal_seed_" + id + "2").displayName(`Tiny ${e} Crystal`)
		event.create(`${id}_seed_small`).texture("kubejs:item/crystal_seed_" + id + "3").displayName(`Small ${e} Crystal`)
		event.create(`${id}_growing`, "create:sequenced_assembly").texture("kubejs:item/crystal_seed_" + id + "3").displayName(`Growing ${e} Crystal`)
	});

	let processors = ["Calculation", "Logic", "Engineering", "Energy", "Accumulation", "Quantum"]
	processors.forEach(name => {
		let e = name.toLowerCase()
		event.create(`broken_${e}_processor`).displayName(`Broken ${name} Processor`)
		event.create(`broken_${e}_processor_wafer`).displayName(`Broken ${name} Processor Wafer`)
	})

	event.create('dye_entangled_singularity').maxStackSize(16).displayName('Chromatic Singularity').rarity("rare")
	event.create('radiant_coil').glow(true).displayName('Radiant Induction Coil').rarity("uncommon")
	event.create('circuit_scrap').displayName('Circuit Scrap').rarity("common")
	event.create('missingno').texture("kubejs:item/missingno").glow(true).rarity("epic").displayName('∄')
	
	//numbers
	let number = (name) => {
		let id = name.toLowerCase().split(" ").join("_")
		event.create(id).glow(true).rarity("epic").displayName(name)
	}

	number('Zero')
	number('One')
	number('Two')
	number('Three')
	number('Four')
	number('Five')
	number('Six')
	number('Seven')
	number('Eight')
	number('Nine')
	number('Plus')
	number('Minus')
	number('Multiply')
	number('Divide')
	number('Factorial')
	number('Power')
	number('Remainder')
	number('Square Root')
	number('Greater Than')
	number('Less Than')
	number('Greater Or Equal')
	number('Less Or Equal')
	number('Equal')
	number('Equality')
	number('Non Equality')
	number('True')
	number('False')
	event.create('three_cast').displayName('Integer Cast (3)').unstackable()
	event.create('eight_cast').displayName('Integer Cast (8)').unstackable()
	event.create('plus_cast').displayName('Operator Cast (+)').unstackable()
	event.create('minus_cast').displayName('Operator Cast (-)').unstackable()
	event.create('multiply_cast').displayName('Operator Cast (x)').unstackable()
	event.create('divide_cast').displayName('Operator Cast (/)').unstackable()
	event.create('factorial_cast').displayName('Operator Cast (!)').unstackable()
	event.create('power_cast').displayName('Operator Cast (^)').unstackable()
	event.create('remainder_cast').displayName('Operator Cast (%)').unstackable()
	event.create('square_root_cast').displayName('Operator Cast (√)').unstackable()
	event.create('equal_cast').displayName('Operator Cast (=)').unstackable()
	event.create('computation_matrix').parentModel("kubejs:item/computation_matrix").displayName('Computation Matrix').rarity('advanced')

    event.create('silicon_press_wafer').displayName('Inscriber Silicon Press Wafer').rarity("rare")
    event.create('calculation_processor_press_wafer').displayName('Inscriber Calculation Press Wafer').rarity("rare")
    event.create('engineering_processor_press_wafer').displayName('Inscriber Engineering Press Wafer').rarity("rare")
    event.create('logic_processor_press_wafer').displayName('Inscriber Logic Press Wafer').rarity("rare")
    event.create('energy_processor_press_wafer').displayName('Inscriber Energy Press Wafer').rarity("rare")
    event.create('accumulation_processor_press_wafer').displayName('Inscriber Accumulation Press Wafer').rarity("rare")
    event.create('quantum_processor_press_wafer').displayName('Inscriber Quantum Press Wafer').rarity("rare")

    event.create('printed_silicon_wafer').displayName('Printed Silicon Wafer').rarity("rare")
	event.create('printed_calculation_processor_wafer').displayName('Printed Calculation Circuit Wafer').rarity("rare")
	event.create('printed_engineering_processor_wafer').displayName('Printed Engineering Circuit Wafer').rarity("rare")
	event.create('printed_logic_processor_wafer').displayName('Printed Logic Circuit Wafer').rarity("rare")
	event.create('printed_energy_processor_wafer').displayName('Printed Energy Circuit Wafer').rarity("rare")
	event.create('printed_accumulation_processor_wafer').displayName('Printed Accumulation Circuit Wafer').rarity("rare")
	event.create('printed_quantum_processor_wafer').displayName('Printed Quantum Circuit Wafer').rarity("rare")

    event.create('calculation_processor_wafer').displayName('Calculation Processor Wafer').rarity("rare")
    event.create('engineering_processor_wafer').displayName('Engineering Processor Wafer').rarity("rare")
    event.create('logic_processor_wafer').displayName('Logic Processor Wafer').rarity("rare")
    event.create('energy_processor_wafer').displayName('Energy Processor Wafer').rarity("rare")
    event.create('accumulation_processor_wafer').displayName('Accumulation Processor Wafer').rarity("rare")
    event.create('quantum_processor_wafer').displayName('Quantum Processor Wafer').rarity("rare")


	event.create('ball_cast').displayName('Ball Cast').unstackable()
	
	//tools
	//saw
	event.create('flint_saw').displayName('Flint Saw').maxDamage(32)
	event.create('iron_saw').displayName('Iron Saw').maxDamage(128)
	event.create('diamond_saw').displayName('Diamond Saw').maxDamage(512)
	event.create('unstable_saw').displayName('Unstable Saw').glow(true).rarity("epic").maxDamage(32000).texture("kubejs:item/diamond_saw")
	
	//screwdriver
	event.create('industrial_screwdriver').parentModel("kubejs:item/industrial_screwdriver").maxDamage(1024).displayName('Industrial Screwdriver').rarity('uncommon')
	event.create('unstable_screwdriver').parentModel("kubejs:item/industrial_screwdriver").maxDamage(128000).displayName('Unstable Screwdriver').rarity("epic").glow(true)
	
	//chromatic resonator
	event.create('chromatic_resonator').displayName('Chromatic Resonator').maxDamage(512)
	event.create('unstable_chromatic_resonator').displayName('Unstable Chromatic Resonator').glow(true).rarity("epic").maxDamage(512000).texture("kubejs:item/chromatic_resonator")
	
	//calculator
	event.create('calculator').displayName('Broken Calculator')
	event.create('charged_calculator').displayName('Fibonacci Calculator').maxDamage(1024)
	event.create('unstable_charged_calculator').displayName('Unstable Fibonacci Calculator').glow(true).rarity("epic").maxDamage(1024000).texture("kubejs:item/charged_calculator")
	
	//mechanisms
	let mechanism = (name, glow) => {
		let id = name.toLowerCase()
		glow = glow == true
		event.create(`${id}_mechanism`).glow(glow).displayName(`${name} Mechanism`)
		event.create(`incomplete_${id}_mechanism`, 'create:sequenced_assembly').displayName(`Incomplete ${name} Mechanism`)
	}
	
	mechanism("Kinetic")
	mechanism("Sealed")
	mechanism("Inductive", true)
	mechanism("Calculation", true)
	mechanism("Abstruse", true)
	mechanism("Integrated", true)
	mechanism("Embedded", true)
	mechanism("Portable", true)
	mechanism("Electric", true)
	
	//summoning doll
	event.create('summoning_doll').displayName('Summoning Doll').rarity("uncommon")
	
	//preserved explosion
	event.create('preserved_explosion').displayName('Preserved Explosion').rarity("epic")
	
	//The Ultimate Pearl
	event.create('the_ultimate_pearl').displayName('The Ultimate Pearl').rarity("epic")
	
	//The Ultimate Pearl
	event.create('the_ultimate_star').displayName('The Ultimate Star').rarity("epic")
	
	//Neutronium
	event.create('pileof_neutrons').displayName('Pile of Neutrons').rarity("epic")
	event.create('neutronium_nugget').displayName('Neutronium Nugget').rarity("epic")
	event.create('neutronium_ingot').displayName('Neutronium Ingot').rarity("epic")
	
	//Diamond Lattice
	event.create('diamond_lattice').displayName('Diamond Lattice').rarity("uncommon")
	
	//Crystal Matrix Ingot
	event.create('crystal_matrix_ingot').displayName('Crystal Matrix Ingot').rarity("uncommon")
});