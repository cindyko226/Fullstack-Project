import React from 'react';
import PriceFilterContainer from './price_filter_container';

class FilterForm extends React.Component {
    constructor(props) {
        super(props)
        this.clearFilters = this.clearFilters.bind(this)
    }

    clearFilters() {
        this.props.resetFilters();
    }

    render() {

        return (
          <div className="filter-form">
            <div>
              <button className="price-button" onClick={() => this.props.openModal("price")}>
                Price Filter
              </button>
              {/* <PriceFilterContainer /> */}
            </div>

            <div className="clear-filter-button">
              <button id="clear-filters" onClick={this.clearFilters}>
                Clear All Filters
              </button>
            </div>
          </div>
        );
    }
}

export default FilterForm;