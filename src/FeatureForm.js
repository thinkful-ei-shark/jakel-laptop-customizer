
import React, { Component } from 'react';
import FeatureItem from './FeatureItem';
import Features from './Features';


class FeatureForm extends Component {

    getFeatureItemList = () => {
        return Object.keys(Features).map((feature, idx) => {

            const featureHash = feature + '-' + idx;
        
            return (
              <FeatureItem 
                key={featureHash}
                featureHash={featureHash}
                name={feature}
                options={Features[feature]}
                updateFeature={this.props.updateFeature}
                selected={this.props.selected}
              />
            );
        
          });
    }

    render( ) {
        return (
            <form className="main__form">
                <h2>Customize your laptop</h2>
                {this.getFeatureItemList()}
            </form> 
        )
    }
}

export default FeatureForm;