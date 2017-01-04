import React from 'react';
import InputButton from './InputButton'


const OperatorPad = React.createClass({
  render: function () {
    return(
      <div className="row operator-pad clearfix">
        <div className="col">
          <InputButton
            className="btn-floating orange"
            id='clear'
            value='clear'
            text='AC'
            onClick={this.props.onOperatorClick}
            key='clear'
          />
          <InputButton
            className="btn-floating orange"
            id='equals'
            value='equals'
            text='='
            onClick={this.props.onOperatorClick}
            key='equals'
          />
          <InputButton
            className="btn-floating orange"
            id='plus'
            value='plus'
            text='+'
            onClick={this.props.onOperatorClick}
            key='plus'
          />
          <InputButton
            className="btn-floating orange"
            id='minus'
            value='minus'
            text='-'
            onClick={this.props.onOperatorClick}
            key='minus'
          />
        </div>
      </div>
    )
  }
})

export default OperatorPad;
