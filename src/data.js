import logoimg from "./img/8bit-logo.png"
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
import facebook from './img/vector1.png';
import instagram from './img/vector2.png';
import twitter from './img/vector3.png';


export const logo = {
  src: logoimg,
  name: "8-bit-games" 
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

export const gameTypes = [
  {
    id:0,
    name: "All Games"
  },
  {
    id:1,
    name: "Adventure"
  },
  {
    id:2,
    name: "Action"
  },
  {
    id:3,
    name: "Arcade"
  },
  {
    id:4,
    name: "Sports"
  },
  {
    id:5,
    name: "Strategy"
  }
]

export const gameList = 
[
    {
      id:0,
      image:mario,
      name:"Super Mario",
      category:"Adventure",
      dateInfo:"October 1985",
      playerInfo: 2,
      developerInfo:"Nintendo"
    },

    {
      id:1,
      image:excitebike,
      name:"Excite Bike",
      category:"Action"
    },

    { 
      id:2,
      image:pacman,
      name:"Pacman",
      category:"Strategy"
    },
    {
      id:3,
      image: castlevania,
      name: "Castlevania",
      category:"Arcade"
    },
    {
      id:4,
      image: duckhunt,
      name: "Duck Hunt",
      category:"Sports"
    },
    {
      id:5,
      image: zelda,
      name: "The Legend of Zelda",
      category:"Arcade"

    },
    {
      id:6,
      image: megaman,
      name: "Mega Man",
      category:"Strategy"
    }
];

export const popCard = {
  buttonText:"Play Game",
  infoText:{
    date: "NES release date:",
    number: "Number of players",
    developer: "Developer"
    }
    // close:{
    //   image:close,
    //   name:close
    //  }
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

export const footerItems = [
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
