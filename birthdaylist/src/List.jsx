import React from 'react';

const List = ({ props }) => {
   return (
      <>
         {props.map((person) => {
            const { id, name, age, image } = person;
            return (
               <article id={id} className='person'>
                  <img src={image} />
                  <div>
                     <h4>{name}</h4>
                     <p>{age} years</p>
                  </div>
               </article>
            );
         })}
      </>
   );
};

export default List;
