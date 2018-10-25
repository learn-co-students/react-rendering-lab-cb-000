import React from 'react';

class Circle extends React.Component {

  shouldComponentUpdate(newColor){
    // return true if the new color being passed in is different from the existing one.
    let result = newColor.color !== this.props.color ? true : false
    return result
  }

  render() {
    const { color } = this.props;
    console.log(`A ${color} circle was rendered!`);
    return (
      <div className={`circle ${color}`}></div>
    )
  }
}

export default Circle;
