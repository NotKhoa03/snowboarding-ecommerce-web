//List of products to seed the DB

const products = [
  {
    name: 'Burton Ripcord Flat Top Snowboard',
    image: '/images/RipCord.jpg',
    description: 'The Burton Ripcord is designed to accelerate beginners and intermediates into more advanced riding situations. A directional shape makes easy work of any terrain or snow condition, while the added stability and catch-free feel of Flat Top with Easy Bevel puts you in the pilot’s seat. A softer, more playful flex make this an easier going alternative to the Clash, with a performance-oriented ride that gives you more room to grow than you’ll get with most entry level boards. The upgrade to The Channel gives you the easiest stance setup and adjustments possible with compatibility that works with any binding (not just Burton’s).',
    brand: 'Burton',
    category: 'Snowboards',
    price: 419.95,
    rating: 4.71,
    numReviews: 15,
    sizes: [
      { size: '145', qty: 10 }, { size: '154', qty: 7 }, { size: '157', qty: 5 }, { size: '162W', qty: 0 }
    ],
  },

  {
    name: 'Burton Family Tree 3D Double Dog Camber Snowboard',
    image: '/images/FamilyTree.jpg',
    description: `Speed and stability are a given in the Burton Family Tree 3D Double Dog Snowboard. It's the way the board draws you into and boosts you out of turns that inspires the ride. Slight convex shaping in the tip and tail sets the Double Dog apart from the boards you know with a subtle surfy feel. A floaty, supportive nose and bat wing tail work with the board's camber to encourage speed and dropping in on big lines with a new range of power and control. This shape is made to go bigger in big terrain.`,
    brand: 'Burton',
    category: 'Snowboards',
    price: 669.95,
    rating: 4.2,
    numReviews: 12,
    sizes: [
      { size: '152', qty: 4 }, { size: '158', qty: 2 }, { size: '164', qty: 2 }
    ],
  },
  {
    name: 'Burton Rewind Camber Snowboard',
    image: '/images/BurtonRewind.jpg',
    description: `The Burton Rewind Snowboard is a true twin park board with a softer flex for easy riding and progression. The Flat Top profile and twin shape make it easy to ride switch and the Off-Axis Filet-O-Flex construction gives the board a forgiving feel. The Burton Rewind is a great choice for riders looking to progress their park riding and have fun all over the mountain.`,
    brand: 'Burton',
    category: 'Snowboards',
    price: 370.95,
    rating: 4.0,
    numReviews: 7,
    sizes: [
      { size: '141', qty: 4 }, { size: '146', qty: 8 }, { size: '149', qty: 3 }, { size: '152', qty: 1 }
    ]
  },
  {
    name: 'Burton Yeasayer Flat Top Snowboard',
    image: '/images/Yeasayer.jpg',
    description: `The Burton Yeasayer Snowboard is a versatile board for all-mountain riding. The Flat Top profile and twin shape make it easy to ride switch and the Off-Axis Filet-O-Flex construction gives the board a forgiving feel. The Burton Yeasayer is a great choice for riders looking to progress their riding and have fun all over the mountain.`,
    brand: 'Burton',
    category: 'Snowboards',
    price: 350.95,
    rating: 4.3,
    numReviews: 10,
    sizes: [
      { size: '152', qty: 6 }, { size: '158', qty: 3 }, { size: '162', qty: 1 }, { size: '166', qty: 0 }
    ]
  },
  {
    name: 'Salomon Huck Knife Pro Snowboard 2024',
    image: '/images/HuckKnife.jpg',
    description: `The Salomon Huck Knife Pro Snowboard is a true twin park board with a medium flex for all-mountain riding. The Quad Camber profile and twin shape make it easy to ride switch and the Ghost Green Core gives the board a lively feel. The Salomon Huck Knife Pro is a great choice for riders looking to progress their park riding and have fun all over the mountain.`,
    brand: 'Salomon',
    category: 'Snowboards',
    price: 499.95,
    rating: 4.5,
    numReviews: 12,
    sizes: [
      { size: '151', qty: 4 }, { size: '155', qty: 8 }, { size: '158', qty: 3 }
    ]
  },
  {
    name: 'Salomon Sleepwalker Snowboard',
    image: '/images/sleepwalker.jpg',
    description: `The Sleepwalker Is A Park And Jib Board Designed To Match The Riding Style Of Tommy Gesme. A Mid-Soft Flex Paired With Rock Out Camber Allows For A Playful Ride That Locks Into Rails And Provides Definitive Pop Off Jumps. Royal Rubber Pads Are Placed Underfoot For A Smooth Ride With Added Protection Against Sidewall Blow Outs.`,
    brand: 'Salomon',
    category: 'Snowboards',
    price: 300.95,
    rating: 4.0,
    numReviews: 7,
    sizes: [
      { size: '158', qty: 4 }, { size: '161', qty: 4 }, { size: '164', qty: 2 }, { size: '167', qty: 1 }
    ]
  },
  {
    name: 'Salomon Sight Snowboard 2024',
    image: '/images/Sight.jpg',
    description: `The Sight is an all-mountain snowboard with a freeride-inspired shape. A tapered directional shape enhances turning sensation and float, with Cross Profile camber for stability on groomers. Using eco-friendly cork rails the Sight makes hard pack feel like butter while reducing the impact on the planet.`,
    brand: 'Salomon',
    category: 'Snowboards',
    price: 319.95,
    rating: 4.3,
    numReviews: 10,
    sizes: [
      { size: '151', qty : 4 }, { size: '155', qty: 8 }, { size: '158', qty: 3 }, { size: '162', qty: 1 } 
    ]
  },
  {
    name: 'Salomon Assassin Pro Snowboard 2024',
    image: '/images/Assassin.jpg',
    description: `If your usual route takes you from the park to the ridgelines and everywhere in between, the Salomon Assassin Pro Snowboard is the board you need for all-mountain snow sliding. Ghost Carbon Beams and the Ghost Green Core add mega pop to your jumps but are light enough to haul on hikes to sidecountry summits. Gunslinger carbon sidewalls absorb chatter and the stiff flex makes for a high-speed ride that can land cliffs and carve groomers all the way back to the lift.`,
    brand: 'Salomon',
    category: 'Snowboards',
    price: 503.95,
    rating: 4.5,
    numReviews: 12,
    sizes: [
      { size: '150', qty: 4 }, { size: '153', qty: 8 }, { size: '156', qty: 3 }, { size: '159', qty: 1 }
    ]
  },
  {
    name: `Men's Searipe Prime Crago Snowboard Pants`,
    image: '/images/Searipe.jpg',
    description: 'These pants also offer advanced skin warm insulation to keep you toasty on even the coldest of days. And with critically taped seams, you can be sure that no snow or moisture will seep in through the cracks. The adjustable waistband and boot gaiters make these pants perfect for any winter sport, and the cargo pockets provide plenty of storage for all your essentials.',
    brand: 'Snowears',
    category: 'Outerwear',
    price: 139.95,
    rating: 4.5,
    numReviews: 15,
    sizes: [
      { size: 'S', qty: 10 }, { size: 'M', qty: 7 }, { size: 'L', qty: 5 }, { size: 'XL', qty: 0 }
    ],
  },
  {
    name: `Men's Burton Covert 2.0 2L Jacket`,
    image: '/images/Covert.jpg',
    description: `All the little details on the men's Burton Covert 2.0 2L Jacket add up to more time riding and less time messing with gear. With storm-sealing extras that keep you warmer and pockets that keep the important stuff like your phone warm and handy, all you need to worry about is which run to do next and which features to hit.`,
    brand: 'Burton',
    category: 'Outerwear',
    price: 199.95,
    rating: 4.5,
    numReviews: 15,
    sizes: [
      { size: 'S', qty: 2 }, { size: 'M', qty: 7 }, { size: 'L', qty: 5 }, { size: 'XL', qty: 5 }
    ],
  },
  {
    name: `Women's Burton Pyne 2L Jacket`,
    image: '/images/Pyne.jpg',
    description: `Rider-designed and ready to shred, the women's Burton Pyne 2L Jacket is perfect for layering over an insulator in the dead of winter or wearing solo on bluebird days. The shell has some stretch to let you twist and tuck, along with weather-beating, heat-venting tech to keep you just as comfy in the sunshine as in the driving snow.`,
    brand: 'Burton',
    category: 'Outerwear',
    price: 179.95,
    rating: 4.5,
    numReviews: 15,
    sizes: [
      { size: 'XS', qty: 10 }, { size: 'S', qty: 7 }, { size: 'M', qty: 5 }, { size: 'L', qty: 5 }
    ],
  },
  {
    name: `Women's Burton Avalon Bib Pants`,
    image: '/images/Avalon.jpg',
    description: `Bibs are just better. They stay where you want them, have great pockets, and offer extra coverage where you need it. We built the women's Burton Avalon GORE-TEX 2L Bib Pants for riders who know what they want. They're decked out with all the little details that keep you riding more and messing with your gear less. The cut mirrors the fit of your favorite overalls with plenty of room to twist, bend, and flex as you like.`,
    brand: 'Burton',
    category: 'Outerwear',
    price: 299.95,
    rating: 4.9,
    numReviews: 12,
    sizes: [
      { size: 'XS', qty: 10 }, { size: 'S', qty: 8 }, { size: 'M', qty: 5 }, { size: 'L', qty: 2 }
    ],
  },
  {
    name: 'CLEW Freedom 1.0',
    image: '/images/Clew.jpg',
    description: `You want the speed and simplicity of a Step-in binding, but you want to choose your own boot. With CLEW® Step-In bindings you have the freedom of choice. Whether you're pushing your limits on the slopes, shredding through untouched powder, or showcasing your skills in the terrain park – our bindings are ready for whatever adventure you have in mind. Your snow adventure starts right here!`,
    brand: 'CLEW',
    category: 'Bindings',
    price: 499.95,
    rating: 4.5,
    numReviews: 5,
    sizes: [
      { size: 'S', qty: 40 }, { size: 'M', qty: 27 }, { size: 'L', qty: 15 }
    ],
  },
  {
    name: `Men's Burton Step On Re:Flex Snowboard Bindings`,
    image: '/images/Reflex.jpg',
    description: `Step up to Step On®. The men's Burton Step On® Re:Flex Snowboard Bindings pair an intuitive boot-to-binding connection with all-mountain performance. Three connection points, two at the toe and one at the heel, deliver unmatched simplicity, security, and board control.`,
    brand: 'Burton',
    category: 'Bindings',
    price: 269.95,
    rating: 4.7,
    numReviews: 19,
    sizes: [
      { size: 'S', qty: 10 }, { size: 'M', qty: 7 }, { size: 'L', qty: 5 }, { size: 'XL', qty: 7 }
    ],
  },
  {
    name: `Women's Burton Escapade EST Snowboard Bindings`,
    image: '/images/Escapede.jpg',
    description: `Lightweight, strong, and built to perform on any terrain, the women's Burton Escapade EST® Snowboard Bindings are the only choice for women who want it all. Slightly softer and more playful than the Lexa bindings, they offer a balance of high-end comfort and a playful feel.`,
    brand: 'Burton',
    category: 'Bindings',
    price: 349.95,
    rating: 4.6,
    numReviews: 12,
    sizes: [
      { size: 'S', qty: 6 }, { size: 'M', qty: 7 }, { size: 'L', qty: 5 }
    ],
  },
  {
    name: `Men's Burton Ion Step On Snowboard Boots`,
    image: '/images/Stepon.jpg',
    description: `The men's Burton Ion Step On® Snowboard Boots combine the legendary fit and flex of the Ion boot with the intuitive ease of Step On®. The Ion's firm flex supports full-speed-ahead charging. Speedzone lacing and a BOA® adjustable snugger strap provide secure foot hold. Add out-of-the-box comfort, and we're talking about a true step on and go program for riders who like to rip.`,
    brand: 'Burton',
    category: 'Boots',
    price: 499.95,
    rating: 4.5,
    numReviews: 15,
    sizes: [
      { size: '7', qty: 10 }, { size: '8', qty: 7 }, { size: '9', qty: 5 }, { size: '10', qty: 5 }
    ],
  },
  {
    name: `Women's Burton Felix Step On Snowboard Boots`,
    image: '/images/Felix.jpg',
    description: `The only thing you need to worry about when you're riding in the women's Burton Felix BOA® Snowboard Boots is what run to hit next. They're packed with the tech to keep you warm and dry plus a micro-adjustable fit that locks in a secure hold and lets you dial in the feel of the upper and lower to match your feet. And it's all packed into a responsive flex that encourages a relaxed stance and all-terrain versatility.`,
    brand: 'Burton',
    category: 'Boots',
    price: 349.95,
    rating: 4.5,
    numReviews: 10,
    sizes: [
      { size: '6', qty: 10 }, { size: '7', qty: 7 }, { size: '8', qty: 5 }, { size: '9', qty: 5 }
    ],
  },
  {
    name: `Kids' Burton Grom BOA Snowboard Boots`,
    image: '/images/Grom.jpg',
    description: `The kids' Burton Grom BOA® Snowboard Boots are the perfect way to keep your little ripper's feet warm and dry. The BOA® Fit System makes it easy for them to get in and out of their boots, and the soft flex encourages a relaxed stance and all-terrain versatility.`,
    brand: 'Burton',
    category: 'Boots',
    price: 99.95,
    rating: 4.8,
    numReviews: 6,
    sizes: [
      { size: '11', qty: 10 }, { size: '12', qty: 7 }, { size: '13', qty: 5 }, { size: '1', qty: 5 }
    ],
  }

]

export default products