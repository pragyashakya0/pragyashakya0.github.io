import mario from './img/supermariobros.png';
import excitebike from './img/excitebike.png';
import pacman from './img/pacman.png';
import castlevania from './img/castlevania.png';
import duckhunt from './img/duckhunt.png';
import zelda from './img/zelda.png';
import megaman from './img/megaman.png';
import flyingmario from './img/pixalatedmario.png';
import person1 from './img/person1.png';
import person2 from './img/person2.png';
import person3 from './img/person3.png';


export const gameList = 
[
    {
      id:0,
      image: mario,
      name: "Super Mario"
    },

    {
      id: 1,
      image: excitebike,
      name: "Excite Bike"
    },

    { 
      id: 2,
      image: pacman,
      name: "Pacman"
    },
    {
      id:3,
      image: castlevania,
      name: "Castlevania"
    },
    {
      id:4,
      image: duckhunt,
      name: "Duck Hunt"
    },
    {
      id:5,
      image: zelda,
      name: "The Legend of Zelda"
    },
    {
      id:6,
      image: megaman,
      name: "Mega Man"
    }
];


export const about = {
  title: "About 8-bit Games",
  description: "8-Bit games provides free retro games on-site for everyone to play.Bringing back nostalgic memories of NES classic games online",
  image: {
    src: flyingmario,
    name: "flying-mario"
  }
}

export const testimonials = {
  title:"Loved by Everyone",
  testimonial:[
  {
  reviewtitle: "Retro Game is the best!",
  review: "Best retro game platform ever. Just click and start playing. Reminds me of my childhood. So nostalgic.",
  image: {
    src: person1,
    name: "John Smith"
    }
  },
  {
  reviewtitle: "Could be better!",
  review: "I don't know why, but this website could be better. I mean I love the games but could be better.",
  image: {
    src: person2,
    name: "Karen Brown"
    }
  },
  {
  reviewtitle: "One word! Amazing!",
  review: "I think I cried when I played Super Mario. I hope you all add more games.",
  image: {
    src: person3,
    name: "Rudolf Kilnman"
    }
  }
  ]
}