import React  from "react";
import Star from './Star';


class StarClass extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: 0,
    }

  }

  change = (starsSelected) => 
    this.setState({starsSelected}); 


  render() {
    const starsSelected = this.state.starsSelected 

    return(
      
      <div className="star-rating">    

        {[...Array(this.props.totalStars)].map((n, i) => 
        <Star 
        key={i.toString()}
        selected={i < starsSelected}
        onClick={() => this.change(i+1)}
        // onMouseLeave={() => this.change(0)}
        // onMouseEnter={() => this.change(i+1)}

        //Помоги пожалуйста розобраться с событиями!)

        />
        )}
    
    </div>
    )
  }
}
 export default StarClass;