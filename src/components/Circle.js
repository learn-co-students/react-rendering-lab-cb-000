import React from 'react';

class Circle extends React.Component {

  

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
  
  shouldComponentUpdate(nextprops) {
    return (nextprops.color !== this.props.color)
  }
}

export default Circle;
