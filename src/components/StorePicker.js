import React from 'react';
import {getFunName} from '../helpers'

class StorePicker extends React.Component {
    myInput = React.createRef();
    
    goToStore = (event) => {
        event.preventDefault();
        const storeName = this.myInput.value.value;

        this.props.history.push(`/store/${storeName}`);
    };


    
    render(){
        return (
            <form action="" className="store-selector">
                <h2>Please Enter A Store...</h2>
                <input 
                    type="text"
                    ref={this.myInput}
                    required
                    placeholder="Select Store"
                    defaultValue={getFunName()}
                />
                <button type="submit" onClick={this.goToStore} >Visit Store &rarr;</button>
            </form>
        )
    }
}

export default StorePicker;