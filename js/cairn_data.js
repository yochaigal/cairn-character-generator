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
  'alchemist'
,  'blacksmith'
,  'butcher'
,  'burglar'
,  'carpenter'
,  'cleric'
,  'gambler'
,  'gravedigger'
,  'herbalist'
,  'hunter'
,  'magician'
,  'mercenary'
,  'merchant'
,  'miner'
, 'outlaw'
,  'performer'
,  'pickpocket'
,  'smuggler'
,  'servant'
,  'ranger'
]

gen_data['physique'] = [
  'statuesque'
,  'brawny'
,  'towering'
,  'stout'
,  'rugged'
,  'athletic'
,  'lanky'
,  'short'
,  'scrawny'
,  'flabby'
]

gen_data['skin'] = [
  'dark'
,  'a birthmark on your'
,  'tanned'
,  'pockmarked'
,  'weathered'
,  'oily'
,  'pale'
,  'perfect'
,  'rosy'
,  'tattooed'
]

gen_data['hair'] = [
  'bald'
,  'braided'
,  'oily'
,  'wavy'
,  'curly'
,  'long'
,  'wispy'
,  'filthy'
,  'frizzy'
,  'luxurious'
]

gen_data['face'] = [
  'chiseled'
,  'square'
,  'bony'
,  'sharp'
,  'sunken'
,  'elongated'
,  'broken'
,  'soft'
,  'rat-like'
,  'round'
]

gen_data['speech'] = [
  'blunt'
,  'booming'
,  'droning'
,  'gravelly'
,  'cryptic'
,  'formal'
,  'stuttering'
,  'precise'
,  'squeaky'
,  'whispery'
]

gen_data['clothing'] = [
  'antique'
,  'bloody'
,  'rancid'
,  'soiled'
,  'frumpy'
,  'elegant'
,  'frayed'
,  'foreign'
,  'livery'
,  'filthy'
]

gen_data['virtue'] = [
  'ambitious'
,  'courageous'
,  'disciplined'
,  'honorable'
,  'serene'
,  'merciful'
,  'humble'
,  'tolerant'
,  'gregarious'
,  'cautious'
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
  'an oddball'
,  'wise'
,  'respected'
,  'ambitious'
,  'repulsive'
,  'dangerous'
,  'honest'
,  'a boor'
,  'a loafer'
,  'an entertainer'
]

gen_data['misfortune'] = [
  'abandoned'
,  'addicted'
,  'blackmailed'
,  'condemned'
,  'cursed'
,  'abandoned'
,  'addicted'
,  'blackmailed'
,  'condemned'
,  'cursed'
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
