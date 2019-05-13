import Types from 'prop-types';
import React, { Component } from 'react';

export class Paginator extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
    }

    getData() {
        let data = {};
        if (this.props.total > this.props.offset) {
            data.currentPage = +this.props.currentPage;
            data.total = +this.props.total;
            data.offset = +this.props.offset;

            data.lastPage = Math.ceil(data.total / data.offset);
            data.hasPreviousReticents = (data.currentPage > this.props.showingPages);
            data.hasNextReticents = (data.lastPage > +(data.currentPage + this.props.showingPages));
            data.lastShowingPages = data.hasNextReticents ? +(data.currentPage + this.props.showingPages) : data.lastPage;

            var i = data.hasPreviousReticents ? +(data.currentPage - this.props.showingPages) : 0;
            data.pages = [];

            for (i; i < data.lastShowingPages; i++) {
                data.pages.push(i + 1);
            }
            data.show = true;
        } else {
            data.show = false;
        }

        return data;
    }

    onPaginate(page) {
        if (page !== this.props.currentPage) {
            this.props.onPaginate(page);
        }
    }

    render() {
        let data = this.getData();
        if (data.show !== true) {
            return null;
        }

        let firstPageClass = 'page-item pointer';
        let lastPageClass = 'page-item pointer';

        if (data.currentPage === 1) {
            firstPageClass += ' disabled';
        }
        if (data.currentPage === data.lastPage) {
            lastPageClass += ' disabled';
        }

        return (
            <nav>
                <ul className="pagination">
                    <li className={ firstPageClass }>
                        <span onClick={ this.onPaginate.bind(this, 1) } className="page-link" aria-label="Primeira página">
                            <span aria-hidden="true">&laquo;</span>
                            <span className="sr-only">Primeira página</span>
                        </span>
                    </li>
                    <li className={ firstPageClass }>
                        <span onClick={ this.onPaginate.bind(this, data.currentPage - 1) } className="page-link" aria-label="Anterior">
                            <span aria-hidden="true">&lsaquo;</span>
                            <span className="sr-only">Anterior</span>
                        </span>
                    </li>

                    { data.hasPreviousReticents ? <li className="page-item disabled"><span className="page-link">...</span></li> : null }

                    { data.pages.map((page, index) => {
                        var isActive = page === data.currentPage;
                        return (
                            <li key={ index } className={ 'page-item pointer' + (isActive ? ' active' : '') }>
                                <span onClick={ this.onPaginate.bind(this, page) } className="page-link">{ page }</span>
                            </li>
                        );
                    }) }

                    { data.hasNextReticents ? <li className="page-item disabled"><span className="page-link">...</span></li> : null }

                    <li className={ lastPageClass }>
                        <span onClick={ this.onPaginate.bind(this, data.currentPage + 1) } className="page-link" aria-label="Próxima">
                            <span aria-hidden="true">&rsaquo;</span>
                            <span className="sr-only">Próxima</span>
                        </span>
                    </li>
                    <li className={ lastPageClass }>
                        <span onClick={ this.onPaginate.bind(this, data.lastPage) } className="page-link" aria-label="Última página">
                            <span aria-hidden="true">&raquo;</span>
                            <span className="sr-only">Última página</span>
                        </span>
                    </li>
                </ul>
            </nav>
        );
    }
}

Paginator.displayName = 'Paginator';
Paginator.defaultProps = {
    offset: 10,
    showingPages: 3,
    hasPreviousReticents: true,
    hasNextReticents: true,
};
Paginator.propTypes = {
    onPaginate: Types.func.isRequired,
    currentPage: Types.oneOfType([Types.number, Types.string]).isRequired,
    total: Types.oneOfType([Types.number, Types.string]).isRequired,
    offset: Types.oneOfType([Types.number, Types.string]),
    showingPages: Types.oneOfType([Types.number, Types.string]),
    hasPreviousReticents: Types.bool,
    hasNextReticents: Types.bool,
};

export default Paginator;
