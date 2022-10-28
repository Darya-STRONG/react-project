import './Sidebar.scss';
import articles from '../data/articles.json'

function Sidebar(){
  return(
    <div className="Sidebar">
      {articles.map(item=>
      <section>
        <h2 className='Sidebar__title'>{item.title2}</h2>
        <div className='Sidebar__body'>
          <div>{item.body}</div>
        </div>
      </section>)}
    </div>
  );
}

export default Sidebar;