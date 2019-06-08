import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";
import './index.css';

const Card = ({list}) => (
    <div className="card">
        <div className="card-header">
            <div className="card-title">{list.title}</div>
            <div className="card-options">...</div>
        </div>
        {list.items.map(item => (
            <CardListItem key={item.id} item={item.value}></CardListItem>
        ))}
        <div className="card-footer">
            <div className="card-add">Add a card...</div>
        </div>
    </div>
);

Card.propTypes = {
    title: PropTypes.object.isRequired,
    items: PropTypes.array
};

const CardListItem = ({item}) => (
    <div className="card-item">{item}</div>
);

const testList = {
    title: "TODOS", 
    items: [
        {
            id:0,
            value: "Git"
        }, 
        {
            id:1,
            value: "Template"
        }, 
        {
            id:2,
            value: "Add Functionality"
        }, 
        {
            id:3,
            value: "Edit Functionality"
        }, 
        {
            id:4,
            value: "Remove Functionality"
        }, 
    ]
};

ReactDOM.render(<Card list={testList} />, document.getElementById('root'));
