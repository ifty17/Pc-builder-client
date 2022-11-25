import React from 'react';

const Blogs = () => {

    const handleSubmit = event =>{
        event.preventDefault();
        const selec = event.target.sel.value;
        console.log(selec);
    } 

    return (
      <form onSubmit={handleSubmit}>
        <select name="sel" className="select w-full max-w-xs">
          <option disabled selected>
            Pick your favorite Simpson
          </option>
          <option>Homer</option>
          <option>Marge</option>
          <option>Bart</option>
          <option>Lisa</option>
          <option>Maggie</option>
        </select>
        <button className="btn btn-outline">Submit</button>
      </form>
    );
};

export default Blogs;