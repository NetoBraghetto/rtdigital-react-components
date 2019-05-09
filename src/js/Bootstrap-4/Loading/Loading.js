import React, { Component } from 'react';

export class Loading extends Component {
    render() {
        return (
            <div className="loading">
                <div className="ellipsis ellipsis-1"></div>
                <div className="ellipsis ellipsis-2"></div>
                <div className="ellipsis ellipsis-3"></div>
            </div>
        );
    }
}

Loading.displayName = 'Loading';
Loading.defaultProps = {
    className:'',
};

export default Loading;
