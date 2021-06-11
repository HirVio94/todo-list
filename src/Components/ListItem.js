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
        this.affichageFleche();
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
        this.affichageFleche();

    }

    verfiPos() {
        if (document.getElementsByTagName('li').length > 0) {
            let liTab = document.getElementsByTagName('li');
            console.log(liTab);
            if (liTab[liTab.length - 1].firstChild.attributes.class != DONE) {
                let li = liTab[liTab.length - 1];

                let parent = li.parentElement;
                li = parent.insertBefore(li, parent.firstChild);
            }
            this.affichageFleche();

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
        this.affichageFleche();




    }
    moveUp(event) {
        let i = event.target;
        let li = i.parentElement;
        let parent = li.parentElement;

        if (li.firstChild.attributes.class.value != DONE && li.previousSibling) {
            let previousSibling = li.previousSibling;
            li = parent.insertBefore(li, previousSibling);
        }
        this.affichageFleche();
    }

    affichageFleche() {
        let i;
        let liTab = document.getElementsByTagName('li');
        let tab = [];
        for (i = 0; i < liTab.length; i++) {

            tab.push(liTab[i]);

            tab.map(li => {
                if (li.firstChild.attributes.class.value == DONE || tab.length == 1) {
                    li.lastChild.previousSibling.style.display = 'none';
                    li.lastChild.previousSibling.previousSibling.style.display = 'none';
                } else {
                    if (tab.indexOf(li) == 0) {
                        li.lastChild.previousSibling.style.display = 'none';
                        li.lastChild.previousSibling.previousSibling.style.display = 'block';
                    } else {
                        if (tab.indexOf(li) == tab.length - 1 || li.nextSibling.firstChild.attributes.class.value == DONE) {
                            li.lastChild.previousSibling.previousSibling.style.display = 'none';
                            li.lastChild.previousSibling.style.display = 'block';

                        } else {

                            li.lastChild.previousSibling.previousSibling.style.display = 'block';
                            li.lastChild.previousSibling.style.display = 'block';

                        }
                    }
                };
            })

        }
        console.log(tab);
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