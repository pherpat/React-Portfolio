//import components from our components folder
import React from 'react';

// function section
function Section(props) {
  return (
    <section className="section">
      {props.pageContent}
    </section>
  );
}
// Exporting a component called section 
export default Section;
