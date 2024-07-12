import {Component} from 'react';

export default class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pno: 0,
            ptitle: '',
            pcontent: '',
            pimg: '',
            pprice: 0
        };
    }
}