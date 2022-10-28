import './Footer.scss'

function Footer(){
  return(
    <div className="Footer">
      <h1>Контакты</h1>
      <p>Звоните, пишите нимедленно!</p>
      <a href="tel:+74957873422" className='Contacts Footer__tel'>+74957873422</a>
      <hr />
      <a href="mailto:example@gmail.com" className=' Contacts Footer__mailto'>MarkKolbaska@gmail.com</a>
    </div>
  );
}

export default Footer;