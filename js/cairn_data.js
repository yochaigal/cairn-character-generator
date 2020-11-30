gen_data['character'] = [
  'You are {name} {surname}, a(n) {background}.<br>Your physique is {physique}, with {skin} skin, {hair} hair, and a {face} face.<br>You speak in a {speech} manner and wear {clothing} clothing.<br>{vice} yet {virtue}, you are regarded as {reputation}, having experienced the misfortune of being {misfortune}.'
]

gen_data['name'] = [
  'Morgwen',
  'Moralil',
  'Wenain',
  'Yslen',
  'Esme',
  'Drelil',
  'Thegwin',
  'Breagan',
  'Lirathil',
  'Agune',
  'Lirann',
  'Lisabeth',
  'Henaine',
  'Beatrice',
  'Wenlan',
  'Elgile',
  'Cannora',
  'Ygwal',
  'Theune',
  'Griya',
  'Gringle',
  'Breyir',
  'Ethex',
  'Yirmeor',
  'Clewd',
  'Breagle',
  'Melnax',
  'Mannog',
  'Arwel',
  'Wenlan',
  'Cwinglid',
  'Theglid',
  'Gruwid',
  'Boroth',
  'Borrid',
  'Gruwth',
  'Grinwit',
  'Breglor',
  'Orthax',
  'Canhoreal',
]

gen_data['surname'] = [
  'Cormick',
  'Abernathy',
  'Crumwaller',
  'Glass',
  'Getri',
  'Weavilman',
  'Loomer',
  'Burl',
  'Wolder',
  'Malksmilk',
  'Addercap',
  'Dunswallow',
  'Smythe',
  'Tolmen',
  'Swinney',
  'Thatcher',
  'Harper',
  'Candlewick',
  'Harkness',
  'Sunderman',
]

gen_data['background'] = [
  'Alchemist'
,  'Blacksmith'
,  'Butcher'
,  'Burglar'
,  'Carpenter'
,  'Cleric'
,  'Gambler'
,  'Gravedigger'
,  'Herbalist'
,  'Hunter'
,  'Magician'
,  'Mercenary'
,  'Merchant'
,  'Miner'
, 'Outlaw'
,  'Performer'
,  'Pickpocket'
,  'Smuggler'
,  'Servant'
,  'Ranger'
]

gen_data['physique'] = [
  'Statuesque'
,  'Brawny'
,  'Towering'
,  'Stout'
,  'Rugged'
,  'Athletic'
,  'Lanky'
,  'Short'
,  'Scrawny'
,  'Flabby'
]

gen_data['skin'] = [
  'Dark'
,  'a Birthmark on your'
,  'Tanned'
,  'Pockmarked'
,  'Weathered'
,  'Oily'
,  'Pale'
,  'Perfect'
,  'Rosy'
,  'Tattooed'
]

gen_data['hair'] = [
  'Bald'
,  'Braided'
,  'Oily'
,  'Wavy'
,  'Curly'
,  'Long'
,  'Wispy'
,  'Filthy'
,  'Frizzy'
,  'Luxurious'
]

gen_data['face'] = [
  'Chiseled'
,  'Square'
,  'Bony'
,  'Sharp'
,  'Sunken'
,  'Elongated'
,  'Broken'
,  'Soft'
,  'Rat-like'
,  'Round'
]

gen_data['speech'] = [
  'Blunt'
,  'Booming'
,  'Droning'
,  'Gravelly'
,  'Cryptic'
,  'Formal'
,  'Stuttering'
,  'Precise'
,  'Squeaky'
,  'Whispery'
]

gen_data['clothing'] = [
  'Antique'
,  'Bloody'
,  'Rancid'
,  'Soiled'
,  'Frumpy'
,  'Elegant'
,  'Frayed'
,  'Foreign'
,  'Livery'
,  'Filthy'
]

gen_data['virtue'] = [
  'Ambitious'
,  'Courageous'
,  'Disciplined'
,  'Honorable'
,  'Serene'
,  'Merciful'
,  'Humble'
,  'Tolerant'
,  'Gregarious'
,  'Cautious'
]

gen_data['vice'] = [
  'Aggressive'
,  'Bitter'
,  'Craven'
,  'Deceitful'
,  'Greedy'
,  'Vengeful'
,  'Lazy'
,  'Nervous'
,  'Rude'
,  'Vain'
]

gen_data['reputation'] = [
  'an Oddball'
,  'Wise'
,  'Respected'
,  'Ambitious'
,  'Repulsive'
,  'Dangerous'
,  'Honest'
,  'a Boor'
,  'a Loafer'
,  'an Entertainer'
]

gen_data['misfortune'] = [
  'Abandoned'
,  'Addicted'
,  'Blackmailed'
,  'Condemned'
,  'Cursed'
,  'Abandoned'
,  'Addicted'
,  'Blackmailed'
,  'Condemned'
,  'Cursed'
]

gen_data['equipment'] = [
  'armor: {armor}<br>Helmet/Shield: {helmet}<br>Weapons: {weapons}<br>Bonus item: {bonus}'
]
gen_data['armor'] = {
  '1-3': 'None',
  '4-14': 'Brigandine (1 Armor, bulky)',
  '15-19': 'Chainmail (2 Armor, bulky)',
  '20': 'Plate (3 Armor, bulky)'
}

gen_data['helmet'] = {
  '1-13': 'None',
  '14-16': 'Helmet (+1 Armor)',
  '17-19': 'Shield (+1 Armor)',
  '20': 'Helmet and Shield (+2 Armor)'
}

gen_data['weapons'] = {
  '1-5': 'Dagger, Cudgel, Staff ',
  '6-14': 'Sword, Mace, Axe',
  '15-19': 'Longbow (bulky), Crossbow (bulky), Sling',
  '20': 'Halberd (bulky), War Hammer (bulky), Battleaxe (bulky)'
}

gen_data['bonus'] = {
  '1-6': '{tool} or {trinket}',
  '7-13': '{gear}',
  '14-17': '{armor} armor or one of {weapons}',
  '18-20': 'Spellbook containing the spell \'{spellbook}\''
}

gen_data['tool'] = [
  'Air bladder'
,  'Sealant'
,  'Shovel'
,  'Bellows'
,  'Grease'
,  'Saw'
,  'Bucket'
,  'Caltrops'
,  'Chisel'
,  'Hand Drill'
,  'Fishing Rod'
,  'Marbles'
,  'Glue'
,  'Pick'
,  'Hourglass'
,  'Net'
,  'Tongs'
,  'Lockpicks'
,  'Metal File'
,  'Nails'
]

gen_data['trinket'] = [
  'Incense'
,  'Lens'
,  'Perfume'
,  'Horn'
,  'Bottle'
,  'Soap'
,  'Spyglass'
,  'Tar Pot'
,  'Twine'
,  'Fake Jewels'
,  'Salt Pack'
,  'Card Deck'
,  'Dice Set'
,  'Cook Pots'
,  'Face Paint'
,  'Whistle'
,  'Instrument'
,  'Quill & Ink'
,  'Small Bell'
]

gen_data['gear'] = [
  'Antitoxin'
,  'Pulleys'
,  'Large Trap'
,  'Chain (10ft)'
,  'Chalk'
,  'Crowbar'
,  'Tinderbox'
,  'Grappling Hook'
,  'Hammer'
,  'Poisoner’s Kit'
,  'Wolfsbane'
,  'Fire Oil'
,  'Padlock'
,  'Manacles'
,  'Mirror'
,  'Pole (10ft)'
,  'Large Sack'
,  'Repellant'
,  'Spirit Ward'
,  'Dowsing Rod'
]

gen_data['spellbook'] = [
  'Adhere'
,  'Anchor'
,  'Animate Object'
,  'Anthropomorphize'
,  'Arcane Eye'
,  'Astral Prison'
,  'Attract'
,  'Auditory Illusion'
,  'Babble'
,  'Bait Flower'
,  'Beast Form'
,  'Befuddle'
,  'Body Swap'
,  'Charm'
,  'Command'
,  'Comprehend'
,  'Cone of Foam'
,  'Control Plants'
,  'Control Weather'
,  'Cure Wounds'
,  'Deafen'
,  'Detect Magic'
,  'Disassemble'
,  'Disguise'
,  'Displace'
,  'Earthquake'
,  'Elasticity'
,  'Elemental Wall'
,  'Filch'
,  'Flare'
,  'Fog Cloud'
,  'Frenzy'
,  'Gate'
,  'Gravity Shift'
,  'Greed'
,  'Haste'
,  'Hatred'
,  'Hear Whispers'
,  'Hover'
,  'Hypnotize'
,  'Icy Touch'
,  'Identify Owner'
,  'Illuminate'
,  'Invisible Tether'
,  'Knock'
,  'Leap'
,  'Liquid Air'
,  'Magic Dampener'
,  'Manse'
,  'Marble Craze'
,  'Masquerade'
,  'Miniaturize'
,  'Mirror Image'
,  'Mirrorwalk'
,  'Multiarm'
,  'Night Sphere'
,  'Objectify'
,  'Ooze Form'
,  'Pacify'
,  'Phobia'
,  'Pit'
,  'Primal Surge'
,  'Push/Pull'
,  'Raise Dead'
,  'Raise Spirit'
,  'Read Mind'
,  'Repel'
,  'Scry'
,  'Sculpt Elements'
,  'Sense'
,  'Missile Shield'
,  'Shroud'
,  'Shuffle'
,  'Sleep'
,  'Slick'
,  'Smoke Form'
,  'Snail Knight'
,  'Sniff'
,  'Sort'
,  'Spectacle'
,  'Spellsaw'
,  'Spider Climb'
,  'Summon Cube'
,  'Swarm'
,  'Telekinesis'
,  'Telepathy'
,  'Teleport'
,  'Target Lure'
,  'Thicket'
,  'Summon Idol'
,  'Time Control'
,  'True Sight'
,  'Upwell'
,  'Vision'
,  'Visual Illusion'
,  'Ward'
,  'Web'
,  'Widget'
,  'Wizard Mark'
,  'X-Ray Vision'
]
