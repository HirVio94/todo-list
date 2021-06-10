import React from 'react';
import BoostrapIcons from '../../node_modules/bootstrap-icons/font/bootstrap-icons.css';

const UNDONE = 'bi bi-check-lg float-start mt-1 text-success';
const DONE = '"bi bi-check-lg float-start mt-1 text-danger';

class ListItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tache: props.tache,
        }
    }

    componentDidMount() {
        this.verfiPos();
    }

    deleteLi(event) {
        // console.log(event.target.parentElement);

        let li = event.target.parentElement;
        li.remove();
    }

    done(event) {
        // console.log(event);
        let i = event.target;
        let li = event.target.parentElement;
        let parent = li.parentElement;
        if (i.attributes.class.value == UNDONE) {
            i.attributes.class.value = DONE;
            i.nextSibling.attributes.class.value = 'text-decoration-line-through';
            if (li.nextSibling) {
                parent.appendChild(li);


            }
        } else {
            i.attributes.class.value = UNDONE;
            i.nextSibling.attributes.class.value = '';
            li = parent.insertBefore(li, parent.firstChild);
        }

    }

    verfiPos() {
        if (document.getElementsByTagName('li').length > 0) {
            let liTab = document.getElementsByTagName('li');
            if (liTab[liTab.length - 1].firstChild.attributes.class != DONE) {
                let li = liTab[liTab.length - 1];

                let parent = li.parentElement;
                li = parent.insertBefore(li, parent.firstChild);
            }
        }

    }

    moveDown(event) {
        let i = event.target;
        let li = i.parentElement;
        let parent = li.parentElement;
        if (li.nextSibling && li.nextSibling.firstChild.attributes.class.value != DONE) {
            let nextSibling = li.nextSibling;

            if (nextSibling.nextSibling) {
                li = parent.insertBefore(li, nextSibling.nextSibling);
            } else {
                parent.appendChild(li);
            }
        }




    }
    moveUp(event) {
        let i = event.target;
        let li = i.parentElement;
        let parent = li.parentElement;

        if (li.firstChild.attributes.class.value != DONE && li.previousSibling){
            let previousSibling = li.previousSibling;
            li = parent.insertBefore(li, previousSibling);
        }
    }

    render() {
        // console.log('item-tache', this.state.tache)
        return (
            <li className="list-group-item mt-2 border rounded shadow-sm">

                <i className={UNDONE} onClick={this.done.bind(this)}></i>
                <span className="">{this.state.tache}</span>
                <i className="bi bi-arrow-down  mt-1 text-white position-absolute bottom-0 end-100" onClick={this.moveDown.bind(this)}></i>
                <i className="bi bi-arrow-up  mt-1 text-white position-absolute top-0 end-100" onClick={this.moveUp.bind(this)}></i>
                <i className="bi bi-x-circle text-danger float-end mt-1 " onClick={this.deleteLi.bind(this)}></i>
            </li>

        );

    }
}

export default ListItem;