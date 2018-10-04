import React from 'react';
import WineCard from "../components/WineCard";
import {Filter} from '../components/Filter';
import { connect } from 'react-redux';
import { Wines } from './Wines';

class Filters extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            minPrice: 0,
            maxPrice: Infinity, 
            wines: [],
            filters: {
                type: 'all'
              }

        }
    }


    renderWines = (wines) => {
        return this.props.wines.map(wine => <WineCard key={wine.id} wine={wine} />)
    }


    list = () => {
        if (this.state.minPrice===0 && this.state.maxPrice ===Infinity) {
            return this.props.wines
        } else {
            return this.props.wines.filter(wine=> this.state.minPrice <= wine.price && this.state.maxPrice >= wine.price);
        }
    }


    handleChange =  ({ target: { value } }) => {
        this.setState({ filters: { ...this.state.filters, type: value } });
      };
       
    
    render(){
        return (
            <div className='flex flex-wrap'>
                <Filter handleChange={this.handleChange}   />
                <br />
                {this.renderWines(this.list())}
            </div>
        )
    }
}
    const mapStateToProps = state => {
        return {
            wines: state.wines
        }
    }

    export default connect(mapStateToProps)(Filters);