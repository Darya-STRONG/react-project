import './Header.scss';
import dog from './sobaka-foto.jpg'
function Header(){
  return(
    <div className="Header">
      <img src={dog} alt="dog-photo" className='Header__photo' />
      <div className='Header__name'>
        <h1>Марк Колбаскин</h1>
        <h2>Управляющий магазином</h2>
      </div>

    </div>
  );
}

export default Header;