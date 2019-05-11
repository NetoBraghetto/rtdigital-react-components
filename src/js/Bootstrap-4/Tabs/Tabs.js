import React, { Component } from 'react';
import Types from 'prop-types';
import qs from 'qs';

export class Tabs extends Component {
    constructor(props) {
        super(props);
        this.renderNav = this.renderNav.bind(this);
        this.getLink = this.getLink.bind(this);
    }

    getLink(i) {
        let newQs = Object.assign({}, this.props.querystring, {
            [this.props.tabKey]: i
        });
        const querystring = qs.stringify(newQs, { encode: false });
        return `${window.location.origin}${window.location.pathname}?${querystring}`;
    }

    renderNav(title, i) {
        let className = 'nav-link';
        i = i.toString();
        if (i === this.props.querystring[this.props.tabKey] || (i === '0' && this.props.querystring[this.props.tabKey] === undefined)) {
            className += ' active';
        }

        return (
            <li className="nav-item" key={ title + i }>
                <a href={ this.getLink(i) } className={ className }>
                    { title }
                </a>
            </li>
        );
    }

    render() {
        let tabIndex = this.props.querystring[this.props.tabKey] === undefined
        ? 0
        : this.props.querystring[this.props.tabKey];

        return (
            <div>
                <ul className="nav nav-tabs mb-3">
                    { this.props.titles.map(this.renderNav) }
                </ul>

                <div className="tab-content">
                    { this.props.children[tabIndex] }
                </div>
            </div>
        );
    }
}

Tabs.displayName = 'Tabs';
Tabs.defaultProps = {
    tabKey: '$tab'
};
Tabs.propTypes = {
    querystring: Types.object.isRequired,
    tabKey: Types.string,
    children: Types.array,
    titles: Types.array,
};

export default Tabs;
