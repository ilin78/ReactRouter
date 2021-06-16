import React, { Component } from "react";
import Car from "./Car";

class Cars extends Component {
    state = {
        cars: [
            { name: 'Ford', year: 2018 },
            { name: 'Audi', year: 2016 },
            { name: 'Mazda', year: 2010 }
        ]
    }

    goToHomePage = () => {
        console.log(this.props)
        this.props.history.push({
            pathname: "/"
        })
    }

    render() {

        return (
            <div>
                <button onClick={this.goToHomePage}>Go to Home Page</button>
                <div className="Cars">
                {
                    this.state.cars.map((car, index) => {
                        return <Car key={index}
                            name={car.name}
                            year={car.year}
                            pathname={car.name}
                            // вместо того чтобы передавать все props - можно в компоненте Car добавить 
                            // import { withRouter } from 'react-router-dom' А данный компонент обернуть в withRouter
                            // {...this.props} 
                        />
                    })
                }
                </div>
            </div>
        );
    }
}

export default Cars;
