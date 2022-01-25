import logoimg from "./img/8bit-logo.png"
import slide1 from "./img/Slide1.png"
import slide2 from "./img/Slide2.png"
import slide3 from "./img/Slide3.png"
import mario from './img/supermariobros.png';
import excitebike from './img/excitebike.png';
import pacman from './img/pacman.png';
import castlevania from './img/castlevania.png';
import duckhunt from './img/duckhunt.png';
import zelda from './img/zelda.png';
import megaman from './img/megaman.png';
import flyingmario from './img/pixalatedmario.png';
import closeicon from './img/closevector.png';
import person1 from './img/person1.png';
import person2 from './img/person2.png';
import person3 from './img/person3.png';
import rating from './img/star.png';
import humanicon from './img/personvector.png';
import emailicon from './img/emailvector.png';
import done from './img/donevector.png'
import facebook from './img/vector1.png';
import instagram from './img/vector2.png';
import twitter from './img/vector3.png';


export const logo = {
  src: logoimg,
  name: "8-bit-games",
  url: "index.js" 
}

export const navItems = [
  {
    item: "Games",
    url: "#games"
  },
  {
    item: "About",
    url: "#about"
  },
  {
    item: "Update",
    url: "#update"
  }
]

export const sliderImages = [
  {
    id:0,
    name: "slide_1",
    src : slide1
  },
  {
    id:1,
    name: "slide_2",
    src : slide2
  },
  {
    id:2,
    name: "slide_3",
    src: slide3
  }
]

export const sliderText = {
  title: "Collection of retro games",
  subtitle: "Play a number of Nintendo 64 classic games"
}

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
  rating:{
    src: rating,
    name: "rating"
  },
  testimonial:[
    {
      id:0,
      reviewtitle: "Retro Game is the best!",
      review: "Best retro game platform ever. Just click and start playing. Reminds me of my childhood. So nostalgic.",
      image: {
        src: person1,
        name: "John Smith"
      },
      rating: 4
    },
    {
      id:1,
      reviewtitle: "Could be better!",
      review: "I don't know why, but this website could be better. I mean I love the games but could be better.",
      image: {
        src: person2,
        name: "Karen Brown"
      },
      rating:3
    },
    {
      id:2,
      reviewtitle: "One word! Amazing!",
      review: "I think I cried when I played Super Mario. I hope you all add more games.",
      image: {
        src: person3,
        name: "Rudolf Kilnman"
      },
      rating: 5
    }
  ]
}

export const newsletter = {
  title:"Subscribe to our newsletter",
  subtitle:"and receive updates on new game uploads",
  form:[
    {
      icon:humanicon,
      text:"Fullname",
      type:"text"
    },
    {
      icon:emailicon,
      text:"Email",
      type:"email"
    }
  ],
  buttonText:"Subscribe",
  submit:{
    image:{
      src: done,
      alt:"done"
    },
    title:"Thank You",
    subtext: "You are now subscribed to newsletter."
  }
}

export const footer = {
  text:{
    text: "Developed by: ",
    name: "Pragya Shakya"
  },
  items:[
    {
      image:facebook,
      url:"https://www.facebook.com",
      name:"facebook"
    },
    {
      image:instagram,
      url:"https://www.instagram.com",
      name:"instagram"
    },
    {
      image:twitter,
      url:"https://twitter.com",
      name:"twitter"
    }
  ]
}

export const close = {
  src: closeicon,
  name: "close"
}

export const games = [
  {
    id: 0,
    type: "All Games",
    items: [
      {
        name: "Mario",
        image: {
          src: mario,
          alt: "Super Mario Bros"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2
      },
      {
        name:"Excite Bike",
        image: {
          src: excitebike,
          alt: "Excite Bike"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2,        
      },
      {
        name: "Pacman",
        image: {
          src: pacman,
          alt: "Pacman"
        },
        releaseDate: "May 1980",
        developer: "Namco",
        players: 3
      },
      {
        name: "Castlevania",
        image:{
          src: castlevania,
          alt: "Castlevania"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2
      },
      {
        name: "Duck Hunt",
        image:{
          src:duckhunt,
          alt:"Duck Hunt"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2
      },
      {
        name: "The Legend of Zelda",
        image:{
          src:zelda,
          alt:"The Legend of Zelda"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2
      },
      {
        name:"Mega Man",
        image:{
          src:megaman,
          alt:"Mega Man"
        },
        releaseDate: "December 1987",
        developer: "Capcom",
        players: 1
      }
    ]
  },
  {
    id: 1,
    type: "Action",
    items: [
      {
        name: "Mario",
        image: {
          src: mario,
          alt: "Super Mario Bros"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2
      },
      {
        name: "Pacman",
        image: {
          src: pacman,
          alt: "Pacman"
        },
        releaseDate: "May 1980",
        developer: "Nintendo",
        players: 2
      }
    ]
  },
  {
    id: 2,
    type: "Adventure",
    items: [
      {
        name: "MegaMan",
        image:{
          src: megaman,
          alt:"Megaman"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2
      },
      {
        name: "The Legend of Zelda",
        image: {
          src: zelda,
          alt:"The Legend of Zelda"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2
      }
    ]
  },
  {
    id: 3,
    type: "Strategy",
    items: [
      {
        name: "MegaMan",
        image:{
          src: megaman,
          alt:"Megaman"
        },
        releaseDate: "December 1987",
        developer: "Capcom",
        players: 1
      },
      {
        name: "Duck Hunt",
        image: {
          src:duckhunt,
          alt:"Duck Hunt"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2
      }
    ]
  },
  {
    id: 4,
    type: "Arcade",
    items: [
      {
        name: "Pacman",
        image:{
          src: pacman,
          alt:"Pacman"
        },
        releaseDate: "May 1980",
        developer: "Namco",
        players: 2
      },
      {
        name: "Castlevania",
        image: {
          src:castlevania,
          alt:"Castlevania"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2
      }
    ]
  },
  {
    id: 5,
    type: "Sports",
    items: [
      {
        name: "Magaman",
        image:{
          src: megaman,
          alt:"Megaman"
        },
        releaseDate: "December 1987",
        developer: "Capcom",
        players: 1
      },
      {
        name: "Duck Hunt",
        image: {
          src: duckhunt,
          alt:"Duck Hunt"
        },
        releaseDate: "January 1985",
        developer: "Nintendo",
        players: 2
      }
    ]
  }
];