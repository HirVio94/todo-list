import React from 'react';

class AddBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            placeholder: 'AddBar',
            inputValue: '',
        }
    }

    componentWillMount() {

    }

    handleOnClick() {
        let input = document.getElementById('id_addBar');
        // console.log('input value', input.value);
        if (input.value != '') {
            this.setState({ inputValue: input.value }, () => {
                // console.log('state input value', this.state.inputValue);
                this.props.callback(this.state.inputValue);
            })
        }

    }

    render() {

        return (
            <div className="row justify-content-center mt-5">
                <div className="col-md-5">
                    <div className="input-group mb-3">
                        <input
                            id="id_addBar"
                            type="text"
                            placeholder={this.state.placeholder}
                            className="form-control"
                        />
                        <button onClick={this.handleOnClick.bind(this)} className="btn btn-outline-danger">Ajouter</button>
                    </div>
                </div>
            </div> 



        );
    }
}

export default AddBar;