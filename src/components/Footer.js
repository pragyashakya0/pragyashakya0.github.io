export function Footer({footerItems, footerText}){
  return(
    <div className='footer'>
      <div className='links'>
        <ul>
          {footerItems.map((item) => {
            return(
              <li className='item'>
                <a href={item.url} target="_blank">
                  <img src={item.image} alt={item.name}/>
                </a>
              </li>
            );
          })}          
        </ul>
      </div>
      <div className='footer-text'>
        {footerText.text}{footerText.name}
      </div>
    </div>
  )
}