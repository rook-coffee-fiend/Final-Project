// credit to https://svelte.dev/playground/dbdad7821bff445ab806fa608a6aac9f?version=5.25.6

import PierreSink from '$assets/PierreSink.jpg';
import Buddy from '$assets/Buddy.jpg';
import Herbie from '$assets/Herbie.jpg';
import JasperI from '$assets/Jasper & Pooky.jpg';
import JasperII from '$assets/Jasper II.jpg';
import Moose from '$assets/Moose.jpg';
import Nanette from '$assets/Nanette.jpg';
import Nugget from '$assets/Nugget.jpg';
import Peta from '$assets/Peta.jpg';
import Stevie from '$assets/Stevie.jpg';
import Toula from '$assets/Toula.jpg';
import Wally from '$assets/Wally.jpg';


export const reviews = [
    {
        id: 0,
          name: "Buddy & Co",//Emily & Julian
          descr: "Emily & Julian's silly trio",//Buddy, Buffy, & Felix's parents
          img: Buddy, 
          alt: "A handsome grey cat sits on a wooden floor, facing the camera and looking off to the left.",
          review: "Featured kitty: Buddy! Buddy is the most dapper man in the whole world. His rotund tuxie brother, Felix, is a food goblin who will fully eat through plastic to get at anything remotely edible, and their all-black sister Buffy has to be kept away from Buddy at all times, or she'll try to fight him."
      },
    {
        id: 1,
          name: "Stevie",
          descr: "Lindsay & Maggie's cat",
          img: Stevie, 
          alt: "A large white cat with black markings that look like a helmet and saddle lays on a coffee table, staring balefully at the photographer.",
          review: "Bethany has been our cat sitter since June 2024. We have a sweet rescue cat who can often be distrustful of everybody but us. Bethany is so incredibly kind and patient. She completely understands that our cat is stressed out because moms aren’t home- and also, we don’t quite know her history prior to adoption. Bethany doesn’t mind the hissing and empty threats and sends us progress pics when she’s able to inch closer. Most recently she was even able to pet our cat!! We are so grateful to have someone who we trust wholeheartedly and who really GETS cats to watch our Stevie. Even if our cat’s bad manners towards her embarrasses us every single time. Bethany is prepared, thoughtful, loving, and spends ample amounts of time with Stevie during her visits. We would highly recommend! -Lindsay & Maggie"
      },
    {
        id: 2,
          name: "Peta",
          descr: "Liz & Jose's cat",
          img: Peta, 
          alt: "A petite tortoiseshell cat rolls over on a white bedspread to show her belly, and accepts scritches from someone offscreen except for her hand.",
          review: "Bethany has been our primary cat sitter for our kitty Peta for a couple years, and we feel so lucky to have her. She works hard to develop a great relationship with her clients and pets. The peace of mind we have when we’re away is directly related to how much Bethany cares about and cares for our pet. She is knowledgeable, communicates daily with photos, and truly understands our expectations. Our kitty loves spending time with her. There is a high level of care and engagement Bethany brings that makes her an excellent sitter. We are very happy customers! -Liz K."
      },
    {
        id: 3,
          name: "Nanette", //Louise
          descr: "Louise's cat", //Nanette's mom
          img: Nanette, 
          alt: "A petite tortoiseshell demurely avoids eye contact with the camera, though her cheerful tail in the background of the image belies her delight at the attention. She stands prettily on a geometric jewel toned carpet that is mostly red.",
          review: "Nanette is a delicate dame with a creaky little meow. She enjoys a daily dish of goat milk, has become increasingly discerning about the quality of her cat food, and, in lieu of a suitable sunbeam, thoroughly enjoys lounging on her heating pad on her armchair."
      },
      {
        id: 4,
          name: "Jasper and Pooky", //Natalie
          descr: "Natalie's cats- adopted brothers and the best of friends", //Jasper and Pooky's mom
          img: JasperI, 
          alt: "A large white cat stretches his neck out and flattens his ears to accept a smaller black cat's attempts to groom him. The black cat's ears are perked forward. They're sitting on a pale bedsheet, and white curtains can be seen across the room from them.",
          review: "Jasper is an absolutely gigantic white cat with grey patches. He's not particularly overweight, either- he's just extra-large! He's a sweet little man who enjoys being picked up, and beeps at his humans when it's dinner. Pooky, his much smaller, much more shy brother, lets Jasper bring out his silly side. The two of them race each other up and down the hall to get their daily steps in."
      },
      {
        id: 5,
          name: "Daphne, Gepetto, and Nugget", //Morgan
          descr: "Morgan's cats", //Daphne, Gepetto, and Nugget's mom
          img: Nugget, 
          alt: "An orange cat's head emerges from a den of blankets on a couch. His black eyes look downward, but his ears are perked forward in a friendly manner.",
          review: "Featured kitty: Nugget! Nugget and Gepetto are a pair of elderly kitties, accompanied by their younger sister, Daphne. Between the three of them, they have half a dozen diagnoses that require medical management- a service I'm more than happy to provide for three such sweet little guys!"
      },
      {
        id: 6,
          name: "Toula", //Samantha
          descr: "Samantha's cat- huntress and snugglebug", //Toula's mom
          img: Toula, 
          alt: "A silver tabby cat lounges on a red couch, leaning into pets given by a hand belonging to someone offscreen.",
          review: "Toula is a little lady with a lot of energy, and high expectations for her humans! She needs company while she eats, has mercurial opinions on her toys, and is an excellent hunter."
      },
      {
        id: 7,
          name: "Wally",
          descr: "Carly's cat",
          img: Wally, 
          alt: "Surrounded by a few scattered toys, a little tabby cat flattens himself to the floor, arms spread and tongue out as he enjoys the unseen catnip scattered on the rug. There is a blue living room chair behind him",
          review: "My cat Wally loved Bethany so much, he didn’t even care when I came home! 10/10, would recommend. -Carly V."
      },
      {
        id: 8,
          name: "Pierre", //Linds & Lee
          descr: "Lindsay & Lee's cat", //Pierre's humans
          img: PierreSink, 
          alt: "An impressively fluffy grey Maine Coon cat loafs on the far edge of a bathroom sink, watching the photographer expectantly. He wants her to turn the water on.",
          review: "I highly recommend Bethany to be an in-home cat sitter! SHe has cat sat for my kitties several times and stayed in my home several nights. She is trustworthy, thoughtful, and communicative. Once there was a concern about one of my cats' health, and she reached out to me immediately and we made a plan for next steps. And Bethany always sends pictures, which I so deeply appreciate!"
      },
      {
        id: 9,
          name: "Moose", //Erica
          descr: "Erica's cat and King of snuggle mountain",
          img: Moose, 
          alt: "A powerfully built tuxedo cat stands with his back paws on an ottoman, and his front paws on a comparatively taller coffee table. He surveys his surroundings and politely ignores the light blue purse in front of him.",
          review: "Moose is a big ol' sweetie. I've never met a more charismatic cat- he has a gravity to him. An incredibly large cat, his favorite thing is settling in for a nap on your chest. "
      },
      {
        id: 10,
          name: "Jasper", //Maya
          descr: "Maya's cat- A little guy with a lot of love!", //Jasper's mom
          img: JasperII, 
          alt: "A fluffy young tortoiseshell clutches a blue catnip toy, caught mid-lick of his nose. He makes direct eye contact with the camera, ears perked up and tensed for more play time.",
          review: "Jasper is a mischief man and a connessieur of shoelaces. All things remotely string-like have to be kept securely in drawers, closets, or outside of the apartment entirely, because this guy just can't seem to help himself! When he's not eating things he shouldn't, he's playing voraciously, begging to be picked up, or snuggled up to his favorite people for a nap."
      },
      {
        id: 11,
          name: "Herbie", //Leslie & Sarah
          descr: "Leslie & Sarah's cat- the chattiest boy in all the land", //Herbie's moms
          img: Herbie, 
          alt: "A tortoiseshell cat rests his head on a denim-clad leg, fast asleep in the photographer's lap.",
          review: "Herbie craves snacks of the human-food variety, but is picky about his own cat food. He also has a lot to say, especially if you've just come home from a day out!"
      },
    
  ]