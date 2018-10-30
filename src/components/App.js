import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import SampleFishes from '../sample-fishes';
import Fish from './Fish';

class App extends React.Component {
    state = {
        fishes: {},
        order: {}
    }
    addFish = fish => {
        const fishes = {...this.state.fishes};
        fishes[`fish${Date.now()}`] = fish;
        this.setState({fishes})
    }
    loadSampleFishes = () => {
        this.setState({fishes: SampleFishes});
    }
    addToOrder = key => {
        const order = {...this.state.order};
        order[key] = order[key] + 1 || 1;
        this.setState({ order });
    }
    render() {
        return (
            <div className='catch-of-the-day'>
                <div className="menu">
                    <Header tagline="test app"/>
                    <ul className="Fishes">
                        {Object.keys(this.state.fishes).map(
                            key => <Fish 
                                key={key} 
                                index={key}
                                details={this.state.fishes[key]}
                                addToOrder={this.addToOrder}/>
                        )}
                    </ul>
                </div>
                <Order fishes={this.state.fishes} order={this.state.order}/>
                <Inventory loadSampleFishes={this.loadSampleFishes} addFish={this.addFish}/>
            </div>
        );
    }
}

export default App;