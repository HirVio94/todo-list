import React from 'react';
import ListItem from '../Components/ListItem';

class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: [],
        }
    }

    componentWillMount() {
        this.initList();
    }

    initList() {
        this.setState({ list: this.props.list })
    }


    render() {
        // console.log('props.tache', this.props.list);
        return (
            <div className="row justify-content-center">
                <div className="col-md-6 ">
                    <ul className="list-group mt-5">
                        {this.state.list.map(tache => {
                            return <ListItem tache={tache} />
                        })}
                    </ul>
                </div>


            </div>

        );
    }
}

export default TodoList;