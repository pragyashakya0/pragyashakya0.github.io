import facebook from '../img/vector1.png';
import instagram from '../img/vector2.png';
import twitter from '../img/vector3.png';

export function Footer(){
  const items = [
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

  return(
    <div className='footer'>
      <div className='links'>
        <ul>
          {items.map((item) => {
            return(
              <li className='items'>
                <a href={item.url} target="_blank">
                  <img src={item.image} alt={item.name}/>
                </a>
              </li>
            );
          })}          
        </ul>
      </div>
      <div className='footer-text'>
        Developed By:
      </div>
    </div>
  )
}