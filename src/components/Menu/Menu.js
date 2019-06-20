import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
const menus = [
    {
        name: 'HOME',
        to: '/',
        exact: true
    },
    {
        name: 'PRODUCT',
        to: 'products',
        exact: false
    }
];

const OldSchoolMenuLink = ({ label, to, activeOnlyWhenExact }) => {
    return (
        <Route
            path={to}
            exact={activeOnlyWhenExact}
            children={({ match }) => (
                <div className={match ? "nav-item nav-link active" : "nav-item nav-link"}>
                    <Link to={to}>{label}</Link>
                </div>
            )}
        />
    );
}

export default class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <p className="navbar-brand" >React Api</p>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {this.showMenu(menus)}
                    </div>
                </div>
                <Link className="btn btn-outline-success my-2 my-sm-0" to="/product/add">Add Product</Link>
            </nav >
        );
    }
    showMenu = (menus) => {
        var result = null;
        if (menus.length > 0) {
            result = menus.map((item, i) => {
                return <OldSchoolMenuLink
                    key={i}
                    label={item.name}
                    to={item.to}
                    activeOnlyWhenExact={item.exact}
                />
            })
        }
        return result;
    }
}