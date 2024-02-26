import { useState } from 'react'
import ReactDOM from 'react-dom/client';
import './PlacementsHeader.css'

function PlacementHeader() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event:any) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
    }
  
    const handleSubmit = (event:any) => {
      event.preventDefault();
      console.log(inputs);
    }

  return (
    <div id="placements-header">
        <form className="filters" onSubmit={handleSubmit}>
            <div className='filter-group'>
                <select name="presets" onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>
                <input name="id" type="text" placeholder="ID/Search term" onChange={handleChange}/>
            </div>
            <div className='filter-group'>
                <input name="advertiser" type="text" placeholder="Advertiser" onChange={handleChange}/>
            </div>
            <div className='filter-group'>
                <input name="priority" type="number" placeholder="Priority" onChange={handleChange}/>
                <input name="forecast" type="number" placeholder="Forecast" onChange={handleChange}/>
            </div>
            <div className='filter-group'>
                <input name="start-date" type="text" placeholder="Start date" onChange={handleChange}/>
                <input name="tkp" type="number" placeholder="TKP" onChange={handleChange}/>
            </div>
            <div className='filter-group'>
                <input name="end-date" type="text" placeholder="End date" onChange={handleChange}/>
                <button type="submit">Filter</button>
            </div>
        </form>
    </div>
  );
}

export default PlacementHeader
