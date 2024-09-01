import { Component } from "react";
import Loaders from "../loaders";
import { CustomList } from "../list";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import CustomHeart from "../icons/heart";
import { Subhead } from "../header";

export class RecipeData extends Component { 
    state = {
        recipes: [],
        loading: true,
        error: false
    }

    componentDidMount = () => {
        console.log("im executed")
        this.FetchData();
    }

    FetchData = async () => {
        try {
            const data = await axios.get('https://dummyjson.com/recipes'); 
            console.log(data.data.recipes);
            this.setState({
                recipes: data.data.recipes,
                loading: false
            });
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    render() {
        return (
            <div className="container">
                <h2 className="my-4">Recipe Data</h2>
                {this.state.loading ? (
                    <Loaders />
                ) : 
                (
                    <div className="row">
                        {
                        this.state.recipes.map((eachrecipe, id) => (
                            <div className="col-md-4 mb-4" key={id}>
                                <div className="card" style={{ width: '20rem' }}>
                                    <img src={eachrecipe.image} className="card-img-top" alt={eachrecipe.name} />
                                    <CustomHeart/>
                                    <div className="card-body">
                                        <h5 className="card-title">{eachrecipe.name}</h5>
                                        <Subhead heading={"ingredients:"}/>
                                        <CustomList list={eachrecipe.ingredients} />
                                        <Subhead heading={"instructions:"}/>
                                        <CustomList list={eachrecipe.instructions} />
                                        
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
