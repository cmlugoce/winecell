possible routes for the project:

Get /api/wines
Get /api/wines/:id
Post /api/wines
Put /api/wines/:id
Delete /api/wines/:id


<Wines  /> ----app.js

class WinePage extends Component {
    state = {
        activeWine: []
    }

    componentDidMount= async ()=> {
       // const name = this.props.location.state.wine;
        const req = await fetch ('http://localhost:3001/api/wines')
        const res = await req.json();
        console.log(res);
       // debugger
        this.setState({activeWine: res[0]});
        console.log(this.state.activeWine);
      
    }
   render(){
       const wine = this.state.activeWine;
    return (
        
            
            
          <div className="container">
         
           <div className= "active-wine">
           <br></br>
           <br></br>
           <br></br>
           <br></br>
            <img className="active-wine_img" src={wine.image} alt={wine.name}/>
            <h2 className = "active-wine_name">{wine.name}</h2>
            <h3>Wine type: {wine.wine_type}</h3>
            <h3> Year: {wine.year} </h3>
            <h3> Description: {wine.description} </h3>
            <h3> Price: ${wine.price} </h3>

            <br></br>
            
                
                <Link to="/wines">All Wines </Link>

            
           
          </div>
         
          
        </div>

    )

  }

}

WineCard 
<p> Description: {wine.description} </p>
  
   <p> Year: {wine.year} </p>
   <p> Price:  ${wine.price} </p>
  



  export default WinePage;