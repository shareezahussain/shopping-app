import React, { Component } from "react";
import Items from "./components/items";
import ReactDOM from 'react-dom';

//let category = "Skirt"; //dynamically change this value
//console.log(category);


export class App extends Component {
    _isMounted = false;

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            //category: "Skirt",
            categories: [],
            visibleCategory: 'Skirt'
        };

        //this.getCategory = this.getCategory.bind(this);

    }


   GetVisibleCategory(category) {
    
        this.setState({visibleCategory:category})
        console.log('hey');
    }



    fetchItem(category) {

        fetch("http://localhost/data/data.json")
            .then(res => res.json()) //return the response as json 
            .then((data) => {
                if (this._isMounted) {
                    this.setState({ items: data.item[category], categories:data.item })
                }
                //handle the json data by storing the data to the state object
            })
            .catch(console.log)

             
            

    }

    

   

    componentDidMount() {
        this._isMounted = true;

        this.fetchItem(this.state.visibleCategory);
    }

    componentWillUnmount() {
        this._isMounted = false;
    }


  handleClick = (category) =>{
    this.fetchItem(category); 
    this.GetVisibleCategory(category);
  }




    render() {
        return (
            <main>
          <div id="sidebar" className="sidebar">
          <ul>
    {Object.keys(this.state.categories).map((category) => (
    <li className={this.state.visibleCategory === category ? "show-category": " "} key={category} id={category} onClick={() => {this.handleClick(category)}}>{category}</li>


     ))}

  </ul>
  </div>



           <div id="content" className="content">
            <Items items={this.state.items}/>
            </div>
</main>




        )
    }



}

export const app = new App();