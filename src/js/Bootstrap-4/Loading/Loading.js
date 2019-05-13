import React, { Component } from 'react';

export class Loading extends Component {
    render() {
        let text = null;
        if (this.props.text !== undefined) {
            text = <div className="loading-text">{ this.props.text }</div>;
        }
        return (
            <div>
                <div className="loading">
                    <div className="ellipsis ellipsis-1"></div>
                    <div className="ellipsis ellipsis-2"></div>
                    <div className="ellipsis ellipsis-3"></div>
                </div>
                { text }
            </div>
        );
    }
}

Loading.displayName = 'Loading';
Loading.defaultProps = {
    className:'',
};

export default Loading;
