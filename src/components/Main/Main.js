import './Main.scss';
import articles from '../data/articles.json'

function Main() {
  return (
    <div className = "Main">
      {articles.map(item=>
      <section>
        <h2 className='Main__title'>{item.title}</h2>
        <div className='Main__li'>
          <div>{item.li}</div>
          <div>{item.li1}</div>
          <div>{item.li2}</div>
          <div>{item.li3}</div>
        </div>

      </section>)}
    </div>
  );
}

export default Main;