import { nanoid } from 'nanoid'
import { makeHyphenatedLowerCase } from '../utils'

const rawBlogPosts = [
  {
    title: 'The Secret to Perfectly Fluffy Cakes',
    excerpt:
      'Ever wondered why some cakes are light and airy while others turn out dense? The secret lies in how you mix your ingredients and the role of temperature. In this article, we’ll explore the science behind fluffy cakes and share expert tips to achieve bakery-quality results at home.',
    date: '2025-06-10',
    postImage: 'assets/',
    imageDesc: 'Desc of the img',
    authorImage: 'assests/',
    author: 'Emily Brown',
    authorBio:
      'Emily Brown is a pastry chef turned food writer with over a decade of experience in the baking industry. Known for her approachable recipes and love of dessert science, Emily is passionate about helping home bakers achieve sweet success in their own kitchens.',
    sections: [
      {
        sectionTitle: 'Understanding the Fluff Factor',
        sectionText:
          'When it comes to baking cakes, texture is everything. A perfectly fluffy cake is soft, moist, and has an even crumb. So, what’s the magic behind that delicate structure? It all starts with air—or more precisely, how air is incorporated into your batter.'
      },
      {
        sectionType: 'quote',
        quoteText:
          'Baking is science with a pinch of magic. Fluffy cakes happen when you respect both.',
        quoteAuthor: 'Emily Brown'
      },
      {
        sectionTitle: 'The Role of Creaming',
        sectionText:
          'One of the most important techniques in cake making is creaming—that is, beating together butter and sugar. This step doesn’t just combine ingredients; it creates tiny air bubbles that expand when baked. For best results, use room-temperature butter and beat it for at least 3-5 minutes until it looks pale and fluffy. The more air you incorporate at this stage, the lighter your cake will be.'
      },
      {
        sectionTitle: "Don't Overmix",
        sectionText:
          'Once you add flour to the mix, it’s important not to overdo it. Overmixing develops gluten, which can make your cake tough and dense. Mix just until the flour disappears—no more.'
      },
      {
        sectionTitle: 'Temperature is Key',
        sectionText:
          'Cold ingredients don’t mix well and can lead to uneven texture. Always use room-temperature eggs, milk, and butter unless the recipe says otherwise. Likewise, make sure your oven is properly preheated. A sudden jolt of heat activates leavening agents like baking powder or baking soda, which helps your cake rise beautifully.'
      },
      {
        sectionTitle: 'Expert Tip: Sift Your Dry Ingredients',
        sectionText:
          'Sifting flour, baking powder, and cocoa powder (if you’re using it) helps prevent lumps and introduces more air into the batter. It’s a simple step that makes a big difference.'
      },
      {
        sectionTitle: 'The Final Touch',
        sectionText:
          'Want that bakery-style rise? After pouring your batter into the pan, tap it gently on the counter to release any large air pockets. Then bake it in the center of the oven to ensure even heat distribution.'
      },
      {
        sectionTitle: 'Conclusion',
        sectionText:
          'Achieving the perfect fluffy cake isn’t about complicated techniques—it’s about understanding the science behind each step. With a little care and attention to detail, you can bake cakes that look and taste like they came straight from a professional bakery.'
      }
    ]
  },
  {
    title: 'How to Decorate Cakes Like a Pro',
    excerpt:
      'Cake decorating is an art, but with the right techniques, anyone can master it. From smooth buttercream finishes to elegant piping designs, we’ll guide you through the basics. Learn which tools you need and how to create stunning decorations for any occasion.',
    date: '2025-06-03',
    postImage: 'assets/',
    imageDesc: 'Desc of the img',
    authorImage: 'assests/',
    author: 'Lana Jones',
    authorBio:
      'Lana Jones is a cake designer and instructor with over 12 years of experience creating showstopping cakes for weddings, birthdays, and everything in between. Known for her elegant style and passion for teaching, Lana loves helping aspiring decorators bring their visions to life.',
    sections: [
      {
        sectionTitle: 'Mastering the Basics of Cake Decorating',
        sectionText:
          "Cake decorating may look intimidating, but it all starts with a few fundamental skills. Whether you're frosting a birthday cake or preparing an elegant tiered masterpiece, a smooth foundation and clean technique will elevate your work instantly. The first step? Start with a chilled cake. Trying to decorate a warm or room-temperature cake can lead to crumbs in your icing and a wobbly surface. Once your cake layers are baked and cooled, wrap them in plastic and chill them for at least an hour before decorating."
      },
      {
        sectionTitle: 'Tools of the Trade',
        sectionText:
          'Professional decorators rely on a handful of essential tools to get those flawless results:',
        bullets: [
          'Offset spatula for smooth spreading',
          'Bench scraper for perfect sides',
          'Piping bags and tips for designs and writing',
          'Turntable to rotate the cake easily',
          'Cake combs for texture and patterns'
        ]
      },
      {
        sectionTitle: 'The Art of Smooth Buttercream',
        sectionText:
          'Want that sleek, polished bakery look? It’s all in the buttercream. Use a generous amount of frosting for the crumb coat, then chill the cake for 15 minutes before applying the final layer. A turntable helps you keep things even as you smooth with a scraper. Pro tip: dip your spatula in hot water and wipe it dry before smoothing the final layer—it melts the buttercream just enough for a silky finish.'
      },
      {
        sectionTitle: 'Getting Creative with Piping',
        sectionText:
          'Once your base is smooth, it’s time to get decorative. From simple stars to elegant rosettes and shells, piping adds personality to your cake. Start by practicing on parchment paper to get a feel for the pressure and motion. Popular piping tips include:',
        bullets: [
          'Wilton 1M for rosettes',
          'Round tips for dots and writing',
          'Leaf tips for floral accents'
        ]
      },
      {
        sectionType: 'quote',
        quoteText:
          'Decorating isn’t just technique—it’s expression. Every swirl of frosting tells a story.',
        quoteAuthor: 'Lana Jones'
      },
      {
        sectionTitle: 'Decorations for Any Occasion',
        sectionText: 'Think beyond flowers and frosting. You can use:',
        bullets: [
          'Fresh fruit for a rustic touch',
          'Edible gold leaf for luxury',
          'Sprinkles or candy for fun celebrations',
          'Chocolate ganache drips for drama',
          'Fondant cutouts for themed designs'
        ]
      },
      {
        sectionTitle: 'Conclusion',
        sectionText:
          'Decorating cakes like a pro isn’t about perfection—it’s about patience, practice, and a little creativity. With the right tools and techniques, you’ll be amazed at what you can create in your own kitchen. Whether you’re preparing a birthday surprise or a wedding showstopper, your beautifully decorated cake is sure to impress.'
      }
    ]
  },
  {
    title: 'Choosing the Best Chocolate for Baking',
    excerpt:
      'Not all chocolate is created equal, especially when it comes to baking. The right choice can elevate your desserts, while the wrong one can leave them lacking flavor. In this guide, we’ll break down the types of chocolate and how to pick the best one for your recipes.',

    date: '2025-05-27',
    postImage: 'assets/',
    imageDesc: 'Desc of the img',
    authorImage: 'assests/',
    author: 'Tom Baker',
    authorBio:
      'Tom Baker is a culinary educator and chocolate expert with a passion for pastry. He’s spent over 15 years working in artisanal kitchens and teaching baking science to home cooks. When he’s not testing recipes, he’s exploring new cacao origins or teaching chocolate workshops.',

    sections: [
      {
        sectionTitle: 'Why Chocolate Quality Matters',
        sectionText:
          'Chocolate is more than just a flavor—it’s a key structural and textural ingredient in many baked goods. Low-quality chocolate may contain fillers, less cocoa butter, or artificial flavors that affect not only taste but melting behavior and consistency in baking.'
      },
      {
        sectionTitle: 'Types of Chocolate and Their Uses',
        sectionText:
          'Here’s a quick breakdown of the most common types of chocolate and how they function in baking:',
        bullets: [
          'Unsweetened chocolate – pure chocolate liquor; great for brownies and rich cakes.',
          'Dark chocolate – 60–70% cocoa solids; ideal for cookies and ganache.',
          'Milk chocolate – contains milk solids; best for decorating or light flavor.',
          'White chocolate – technically not true chocolate, but useful in blondies or frostings.',
          'Couverture – high-quality chocolate with extra cocoa butter; best for melting and coating.'
        ]
      },
      {
        sectionType: 'quote',
        quoteText:
          'High-quality chocolate doesn’t just taste better—it performs better when melted, baked, or mixed into your batter.',
        quoteAuthor: 'Tom Baker'
      },
      {
        sectionTitle: 'Reading Chocolate Labels',
        sectionText:
          'Look for chocolate that lists cocoa mass or cocoa butter as one of the first ingredients. Avoid those with palm oil, vegetable fats, or excessive sugar, as they won’t behave well under heat. The percentage (e.g., 70%) tells you how much of the chocolate is made up of cocoa solids and cocoa butter.'
      },
      {
        sectionTitle: 'When to Splurge',
        sectionText:
          'Not every dessert needs premium chocolate, but for recipes where chocolate is the star—like truffles, flourless cake, or ganache—it’s worth spending a bit more. Quality chocolate melts more smoothly, sets better, and offers a richer, more nuanced flavor.'
      },
      {
        sectionTitle: 'Budget-Friendly Baking Tips',
        sectionText:
          'You don’t have to break the bank for good results. Look for baking bars instead of chocolate chips, as chips contain stabilizers that resist melting. Store-brand dark chocolate with a decent cocoa percentage can still give you amazing results in brownies, cakes, and cookies.'
      },
      {
        sectionTitle: 'Conclusion',
        sectionText:
          'Choosing the right chocolate is about understanding your recipe and your goals. Once you know what to look for, you can shop smarter and bake better—bringing out the best in every bite.'
      }
    ]
  }
]

export const blogPosts = rawBlogPosts.map(preview => {
  const slug = makeHyphenatedLowerCase(preview.title)
  return {
    ...preview,
    id: nanoid(),
    slug: slug
  }
})
