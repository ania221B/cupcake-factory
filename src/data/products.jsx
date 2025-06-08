import { nanoid } from 'nanoid'
import { makeHyphenatedLowerCase } from '../utils'
import { productImages } from './images'

const rawProducts = [
  {
    name: 'Chocolate Fudge Cake',
    description: 'Rich chocolate sponge with creamy ganache.',
    fullDescription:
      'Our Chocolate Fudge Cake is a decadent delight made with layers of moist chocolate sponge and a velvety ganache filling. Perfectly rich without being overpowering, this classic cake is ideal for any chocolate lover seeking comfort in every bite. Finished with a glossy ganache coating, it’s an indulgent treat for special occasions or everyday cravings.',
    type: 'cake',
    pricePerKg: 30,
    regularPrice: 25,
    lowestPrice30Days: 23,
    currentPrice: 25,
    rating: 4.8,
    bestseller: true,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Vanilla Cupcakes',
    description: 'Soft vanilla sponge with buttercream frosting.',
    fullDescription:
      'These Vanilla Cupcakes are a timeless favorite featuring fluffy sponge made from real vanilla beans and topped with silky-smooth buttercream. Light, elegant, and full of flavor, they’re ideal for celebrations, afternoon tea, or a midday pick-me-up.',
    type: 'cake',
    pricePerKg: 20,
    regularPrice: 15,
    lowestPrice30Days: 14,
    currentPrice: 15,
    rating: 4.6,
    bestseller: true,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Almond Croissants',
    description: 'Flaky pastries with almond filling.',
    fullDescription:
      'Our Almond Croissants are handcrafted using traditional French techniques, layered with buttery dough and filled with a luscious almond paste. Topped with slivered almonds and a dusting of powdered sugar, each bite delivers a perfect balance of crunch and softness.',
    type: 'pastry',
    pricePerKg: 18,
    regularPrice: 10,
    lowestPrice30Days: 9,
    currentPrice: 10,
    rating: 4.7,
    bestseller: true,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Red Velvet Cake',
    description: 'Classic red velvet sponge with cream cheese frosting.',
    fullDescription:
      'This iconic Red Velvet Cake features a tender, ruby-colored sponge layered with tangy cream cheese frosting. Moist and mildly chocolaty, this cake is as visually stunning as it is delicious—perfect for birthdays, anniversaries, or any celebration.',
    type: 'cake',
    pricePerKg: 35,
    regularPrice: 28,
    lowestPrice30Days: 26,
    currentPrice: 28,
    rating: 4.9,
    bestseller: true,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Pistachio Eclairs',
    description:
      'Choux pastry filled with pistachio cream and glazed with white chocolate.',
    fullDescription:
      'Our Pistachio Éclairs combine airy choux pastry with a creamy, nutty pistachio filling, crowned with a delicate white chocolate glaze. The contrast of textures and refined flavor makes this pastry a standout in any dessert spread.',
    type: 'pastry',
    pricePerKg: 38,
    regularPrice: 20,
    lowestPrice30Days: 20,
    currentPrice: 20,
    rating: 4.5,
    bestseller: false,
    newArrival: true,
    sale: false,
    availability: false
  },
  {
    name: 'Raspberry Tarts',
    description: 'Crispy pastry shells filled with raspberry cream.',
    fullDescription:
      'Raspberry Tarts feature a crisp, buttery shell filled with tangy raspberry cream, topped with fresh raspberry glaze. Balanced between sweet and tart, they offer a refreshing burst of flavor in every bite.',
    type: 'dessert',
    pricePerKg: 25,
    regularPrice: 12,
    lowestPrice30Days: 11,
    currentPrice: 12,
    rating: 4.5,
    bestseller: false,
    newArrival: true,
    sale: false,
    availability: true
  },
  {
    name: 'Carrot Cake',
    description:
      'Moist carrot cake with a hint of cinnamon and cream cheese frosting.',
    fullDescription:
      'Made with freshly grated carrots, warm spices, and crunchy walnuts, our Carrot Cake is incredibly moist and flavorful. A thick layer of cream cheese frosting adds the perfect creamy contrast to every slice.',
    type: 'cake',
    pricePerKg: 32,
    regularPrice: 26,
    lowestPrice30Days: 24,
    currentPrice: 26,
    rating: 4.7,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Macarons',
    description:
      'Assorted delicate almond meringue cookies with various fillings.',
    fullDescription:
      'Our assorted Macarons come in a vibrant range of colors and flavors, from raspberry and pistachio to chocolate and vanilla. Each delicate shell encloses a rich ganache or buttercream filling, offering a refined taste of Paris in every bite.',
    type: 'cookie',
    pricePerKg: 40,
    regularPrice: 18,
    lowestPrice30Days: 16,
    currentPrice: 18,
    rating: 4.8,
    bestseller: false,
    newArrival: true,
    sale: false,
    availability: true
  },
  {
    name: 'Lemon Drizzle Cake',
    description: 'Light sponge cake soaked in lemon syrup.',
    fullDescription:
      'The Lemon Drizzle Cake is a zesty classic made with light sponge and a tangy lemon syrup that infuses each bite with citrus brightness. Finished with a delicate glaze, it’s both refreshing and indulgent.',
    type: 'cake',
    pricePerKg: 28,
    regularPrice: 22,
    lowestPrice30Days: 20,
    currentPrice: 22,
    rating: 4.6,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Hazelnut Cookies',
    description:
      'Crunchy cookies made with roasted hazelnuts and chocolate chips.',
    fullDescription:
      'Our Hazelnut Cookies are packed with roasted hazelnuts and rich chocolate chips. They deliver a perfect crunch and nutty flavor that pairs beautifully with a cup of coffee or tea.',
    type: 'cookie',
    pricePerKg: 26,
    regularPrice: 16,
    lowestPrice30Days: 14,
    currentPrice: 14,
    rating: 4.6,
    bestseller: true,
    newArrival: false,
    sale: true,
    availability: true
  },
  {
    name: 'Chocolate Chip Cookies',
    description: 'Crunchy cookies loaded with chocolate chips.',
    fullDescription:
      'These all-time favorites feature golden-brown edges and soft centers, filled with semi-sweet chocolate chips. Perfectly baked for the ultimate comforting cookie experience.',
    type: 'cookie',
    pricePerKg: 15,
    regularPrice: 10,
    lowestPrice30Days: 9,
    currentPrice: 10,
    rating: 4.4,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Cheesecake',
    description: 'Creamy cheesecake with a biscuit base.',
    fullDescription:
      'Our Cheesecake features a smooth, rich filling made from cream cheese and a hint of vanilla, sitting atop a buttery biscuit crust. It’s a velvety, crowd-pleasing dessert that melts in your mouth.',
    type: 'dessert',
    pricePerKg: 35,
    regularPrice: 29,
    lowestPrice30Days: 27,
    currentPrice: 29,
    rating: 4.9,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },

  {
    name: 'Blueberry Muffins',
    description: 'Soft and fluffy muffins packed with fresh blueberries.',
    fullDescription:
      'Bursting with juicy blueberries, our muffins are soft, fluffy, and delicately sweet. Perfect for breakfast or an afternoon snack, they’re made fresh daily with real fruit.',
    type: 'dessert',
    pricePerKg: 22,
    regularPrice: 12,
    lowestPrice30Days: 12,
    currentPrice: 12,
    rating: 4.3,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: false
  },

  {
    name: 'Strawberry Shortcake',
    description:
      'Layered sponge cake with whipped cream and fresh strawberries.',
    fullDescription:
      'A refreshing dessert that layers soft vanilla sponge, airy whipped cream, and fresh strawberries. Our Strawberry Shortcake is light, sweet, and an absolute treat during berry season.',
    type: 'cake',
    pricePerKg: 34,
    regularPrice: 24,
    lowestPrice30Days: 19,
    currentPrice: 19,
    rating: 4.7,
    bestseller: false,
    newArrival: false,
    sale: true,
    availability: true
  },
  {
    name: 'Dark Chocolate Almond Clusters',
    description:
      'Bittersweet dark chocolate poured over crunchy roasted almonds.',
    fullDescription:
      'Indulge in the rich, velvety taste of premium dark chocolate, hand-poured over crunchy roasted almonds. These elegant clusters deliver a perfect balance of bittersweet cocoa and nutty richness, making them an ideal treat for sophisticated palates. Perfect with coffee or wine, and great for gifting.',
    type: 'chocolate',
    pricePerKg: 40,
    regularPrice: 22,
    lowestPrice30Days: 20,
    currentPrice: 22,
    rating: 4.6,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Strawberry Cream Bonbons',
    description: 'Smooth white chocolate filled with creamy strawberry purée.',
    fullDescription:
      'Each bonbon is a delicate blend of real strawberry purée and silky cream encased in a smooth white chocolate shell. With a soft, melt-in-your-mouth texture and sweet berry notes, these bonbons are a dreamy escape into fruity decadence. A favorite for special occasions or everyday delight.',
    type: 'chocolate',
    pricePerKg: 40,
    regularPrice: 22,
    lowestPrice30Days: 20,
    currentPrice: 22,
    rating: 4.6,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Salted Caramel Brownies',
    description: 'Fudgy chocolate brownies swirled with rich salted caramel.',
    fullDescription:
      'Decadent and chewy, these brownies are made with rich dark chocolate and swirled with homemade salted caramel. The sweet-salty contrast enhances every bite, offering deep cocoa notes and a gooey center. Finished with a light sea salt sprinkle, they’re perfect for lovers of bold flavor.',
    type: 'dessert',
    pricePerKg: 32,
    regularPrice: 20,
    lowestPrice30Days: 18,
    currentPrice: 20,
    rating: 4.8,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Coffee Walnut Loaf',
    description:
      'Aromatic coffee loaf with toasted walnuts and espresso glaze.',
    fullDescription:
      'A moist and aromatic loaf cake, combining the warmth of fresh coffee with the crunch of toasted walnuts. Lightly glazed with espresso icing, this loaf is a comforting treat that pairs perfectly with your morning brew or afternoon tea.',
    type: 'cake',
    pricePerKg: 30,
    regularPrice: 19,
    lowestPrice30Days: 18,
    currentPrice: 19,
    rating: 4.5,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Tiramisu Cups',
    description: 'Classic tiramisu layers in an elegant, single-serve cup.',
    fullDescription:
      'Mini indulgent portions of the classic Italian dessert. Layers of espresso-soaked sponge, mascarpone cream, and cocoa powder are served in elegant cups for single-serve enjoyment. Each spoonful delivers a balance of bold coffee and creamy sweetness.',
    type: 'dessert',
    pricePerKg: 36,
    regularPrice: 25,
    lowestPrice30Days: 23,
    currentPrice: 25,
    rating: 4.9,
    bestseller: true,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Coconut Snowballs',
    description: 'Soft vanilla bites coated in fluffy shredded coconut.',
    fullDescription:
      'These soft vanilla bites are rolled in shredded coconut for a tropical twist. Light, airy, and coated in a fine coconut crust, they’re a nostalgic treat that melts on the tongue and leaves a sweet, lingering taste.',
    type: 'cookie',
    pricePerKg: 28,
    regularPrice: 14,
    lowestPrice30Days: 13,
    currentPrice: 14,
    rating: 4.4,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Peanut Butter Blondies',
    description:
      'Chewy blondies with peanut butter and white chocolate chunks.',
    fullDescription:
      'Chewy, rich, and nutty – these blondies are packed with creamy peanut butter and studded with chunks of white chocolate. A crowd-pleasing alternative to brownies, they’re dense and indulgent with just the right amount of sweetness.',
    type: 'dessert',
    pricePerKg: 30,
    regularPrice: 18,
    lowestPrice30Days: 17,
    currentPrice: 18,
    rating: 4.7,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Lemon Poppy Seed Muffins',
    description: 'Zesty lemon muffins with poppy seeds and a tangy glaze.',
    fullDescription:
      'Bright and zesty muffins infused with fresh lemon juice and dotted with crunchy poppy seeds. These light and fluffy treats are topped with a tangy lemon glaze for a burst of citrus in every bite.',
    type: 'cake',
    pricePerKg: 24,
    regularPrice: 14,
    lowestPrice30Days: 13,
    currentPrice: 14,
    rating: 4.6,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Mocha Cream Puffs',
    description: 'Light choux pastry filled with rich, creamy mocha.',
    fullDescription:
      'Delicate choux pastry filled with velvety mocha cream and finished with a dusting of cocoa powder. These elegant puffs are a coffee lover’s dream, offering a balance of sweetness and espresso in every airy bite.',
    type: 'pastry',
    pricePerKg: 36,
    regularPrice: 22,
    lowestPrice30Days: 20,
    currentPrice: 22,
    rating: 4.7,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Honey Almond Nougat',
    description: 'Chewy nougat made with golden honey and toasted almonds.',
    fullDescription:
      'A chewy, sweet nougat made with golden honey, toasted almonds, and whipped egg whites. This traditional confection has a satisfying crunch and a naturally sweet, floral flavor that lingers pleasantly on the palate.',
    type: 'candy',
    pricePerKg: 42,
    regularPrice: 24,
    lowestPrice30Days: 22,
    currentPrice: 24,
    rating: 4.8,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Salted Caramel Truffles',
    description: 'Milk chocolate truffles with a gooey salted caramel center.',
    fullDescription:
      'Luxurious and indulgent, these truffles feature a gooey salted caramel center enrobed in milk chocolate and lightly dusted with cocoa. The balance of sweet and salty makes every bite a decadent experience. Perfect as a gift or a little personal indulgence.',
    type: 'chocolate',
    pricePerKg: 38,
    regularPrice: 26,
    lowestPrice30Days: 24,
    currentPrice: 26,
    rating: 4.7,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Hazelnut Praline Squares',
    description: 'Crisp chocolate squares filled with silky hazelnut praline.',
    fullDescription:
      'Smooth hazelnut praline layered inside crisp chocolate squares for a timeless European-inspired treat. With a satisfying crunch and a silky finish, these squares are perfect for pairing with tea, coffee, or an afternoon break.',
    type: 'chocolate',
    pricePerKg: 36,
    regularPrice: 24,
    lowestPrice30Days: 22,
    currentPrice: 24,
    rating: 4.6,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Lemon Zest Fudge Bites',
    description: 'Creamy white chocolate fudge with a bright citrus twist.',
    fullDescription:
      'Bright and tangy, these soft fudge bites blend creamy white chocolate with real lemon zest for a refreshing citrus twist. Their melt-in-the-mouth texture and fresh finish make them a perfect spring or summer treat.',
    type: 'candy',
    pricePerKg: 34,
    regularPrice: 21,
    lowestPrice30Days: 19,
    currentPrice: 21,
    rating: 4.5,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Mint Chocolate Leaves',
    description: 'Dark chocolate leaves infused with refreshing peppermint.',
    fullDescription:
      'Elegant dark chocolate shaped into delicate leaf patterns, infused with cool peppermint oil for a refreshing finish. These artisanal leaves are great after meals, as a palate cleanser, or a refined companion to your evening tea.',
    type: 'chocolate',
    pricePerKg: 35,
    regularPrice: 23,
    lowestPrice30Days: 21,
    currentPrice: 23,
    rating: 4.6,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Raspberry Velvet Bars',
    description: 'Dark chocolate bars layered with tart raspberry ganache.',
    fullDescription:
      'A luxurious dark chocolate bar layered with a raspberry ganache filling. The tart berries complement the rich chocolate beautifully, offering a smooth, tangy-sweet experience. Cut into squares or enjoy whole—these bars are pure velvet.',
    type: 'chocolate',
    pricePerKg: 40,
    regularPrice: 26,
    lowestPrice30Days: 24,
    currentPrice: 26,
    rating: 4.7,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Orange Peel Sticks',
    description: 'Candied orange peel dipped in rich dark chocolate.',
    fullDescription:
      'Thin strips of candied orange peel dipped in 70% dark chocolate. A timeless combination of bitter citrus and deep chocolate, these sticks are a refined snack with a hint of Mediterranean charm. Ideal for pairing with espresso or red wine.',
    type: 'candy',
    pricePerKg: 42,
    regularPrice: 28,
    lowestPrice30Days: 25,
    currentPrice: 28,
    rating: 4.8,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Coconut Macaroon Medallions',
    description: 'Chewy coconut medallions dipped in smooth milk chocolate.',
    fullDescription:
      'Chewy coconut medallions dipped halfway in smooth milk chocolate. Sweet, nutty, and utterly satisfying, they offer a tropical escape with every bite. Gluten-free and naturally rich in flavor.',
    type: 'cookie',
    pricePerKg: 30,
    regularPrice: 18,
    lowestPrice30Days: 16,
    currentPrice: 18,
    rating: 4.5,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  },
  {
    name: 'Espresso Crunch Beans',
    description: 'Crispy espresso beans coated in rich dark chocolate.',
    fullDescription:
      'Dark chocolate–coated espresso beans with a crisp outer shell and a bold coffee kick. Perfect for midday energy, road trips, or a sweet and bitter nibble on the go. Serious coffee lovers only.',
    type: 'candy',
    pricePerKg: 38,
    regularPrice: 20,
    lowestPrice30Days: 19,
    currentPrice: 20,
    rating: 4.7,
    bestseller: false,
    newArrival: false,
    sale: false,
    availability: true
  }
]

export const products = rawProducts.map(product => {
  const slug = makeHyphenatedLowerCase(product.name)
  const entries = Object.entries(productImages)
    .filter(([path]) => path.includes(`/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b))

  const grouped = {}

  for (const [path, src] of entries) {
    const match = path.match(/img(\d)\.(jpg|webp|avif)$/)
    if (!match) continue

    const [, index, extension] = match
    const key = `img${index}`

    if (!grouped[key]) grouped[key] = {}
    grouped[key][extension] = src
  }

  const images = Object.entries(grouped).map(([_, formats], index) => ({
    id: nanoid(),
    type: ['main', 'secondary', 'additional'][index] || 'other',
    formats,
    src: formats.jpg || formats.webp || formats.avif,
    alt: `${product.name} image ${index + 1}`,
    title: 'Photo by Pexels'
  }))
  return {
    ...product,
    id: nanoid(),
    slug: slug,
    images: images
  }
})
