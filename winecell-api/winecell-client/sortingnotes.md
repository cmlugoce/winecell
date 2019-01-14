//const sortWinesNames = sorted.sort(function(a, b) {
                
               // if (a['name'] > b['name']) return 1;
               // if (a['name'] < b['name']) return -1;
                  
              //}) 
             //// debugger
              //const newWinesNames = sortWinesNames.map(wine => <WineCard key={wine.id} wine={wine}  />)
        //debugger




handleChange= (event) =>{
 this.setState({ search: event.target.value });

}

        sortByName=(key) => {
 
      // let wines = this.state.data.wines;
      // wines.sort(this.compareBy(key));
       this.setState({sorted: true});
     }
  
    compareBy(key) {
      return function (a, b) {
        if (a[key] > b[key]) return -1;
        if (a[key] < b[key]) return 1;
        return 0;
      };
    }



    handleChange= (event) =>{
  this.setState({ search: event.target.value });

}

//        const {search} = this.state;
      //  const filteredWines = this.props.wines.filter( wine =>{
    //        return wine.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
      //  })
     /// <div className="col">
      //<Input label="Filter by name" icon="search" onChange={this.handleChange}/>
    

     //</div>  


renderWine=()=>{
   
  // const filteredWines = wines.filter( wine =>{
  // return wine.name.toLowerCase().indexOf( search.toLowerCase() ) !== -1
  //   })
    
   
 // if (!this.state.sorted===true){


  //  return (
  //    <div className="WinesContainer">
  //     <br />                       
  //            <br />
  //            <br />
  //             <div>
  //                
  //    
  //              <div>
  //              {filteredWines.map(wine => <WineCard key={wine.id} wine={wine}  />)} 
  //
  //              </div> 
  //            <br />       
  //         </div>   
  //       
  //    </div>
  //  );          
  //  
  //  }else{
    return (
    
    <div className="WinesContainer">
      <br />                       
             <br />
             <br />
              <div>
                
     
              
             <br />       
          </div>   
        
     </div>
      ); 
    }
    
    

// }