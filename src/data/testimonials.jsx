import { nanoid } from 'nanoid'
import annaHolmes from '../assets/images/customers/anna-holmes.jpg'
import juliaAdam from '../assets/images/customers/julia-adams.jpg'
import billyMoore from '../assets/images/customers/billy-moore.jpg'
import christinaGomez from '../assets/images/customers/christina-gomez.jpg'

export const testimonials = [
  {
    id: nanoid(),
    userName: 'Anna Holmes',
    quoteText:
      'The carrot cake is insanely good. Moist, perfectly spiced, and the frosting? I could eat a bowl of it!',
    userImg: annaHolmes,
    imgTitle: 'Photo by Muhd Emir'
  },
  {
    id: nanoid(),
    userName: 'Julia Adams',
    quoteText:
      'I ordered a custom chocolate cake for my daughter’s birthday, and it was even more beautiful than I imagined. Tasted incredible too!',
    userImg: juliaAdam,
    imgTitle: 'Photo by Andrea Piacquadio'
  },
  {
    id: nanoid(),
    userName: 'Billy Moore',
    quoteText:
      'Every time I walk past this shop, I have to get something. The macarons melt in your mouth—total perfection. The cakes look amazing and taste even better. This place is a gem.',
    userImg: billyMoore,
    imgTitle: 'Photo by Italo Melo'
  },
  {
    id: nanoid(),
    userName: 'Christina Gomez',
    quoteText:
      'The new strawberry tart? Life-changing. Not too sweet, beautifully balanced. You can tell everything is made with care.',
    userImg: christinaGomez,
    imgTitle: 'Photo by Thaís Silva'
  }
]
