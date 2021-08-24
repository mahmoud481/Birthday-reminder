import React from 'react';

const List = ({people}) => {
  
  return (
    <>
      <h2>list component</h2>
      {
        people.map((person)=>{
          const {id, image, name, age} = person;
          return( 
            <article className="person" key={id}>
                <img className="img" src={image} />
                <div className="">
                  <h4>{name}</h4>
                  <p>{age}</p>
                </div>
            </article>)
        })
      }
    </>
  );
};

export default List;
