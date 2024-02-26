import { useContext } from 'react';
import './PlacementsContent.css';
import { DataContext } from '../DataService';

function PlacementContent() {
  const data = useContext(DataContext);

  let tableEntries = [];
  console.log(data.entries);
  for(let entry of data.entries as any[]){
    tableEntries.push(<tr key={(entry as any).id} className='placements-data-entry'><td>{ entry.lineItem }</td><td>{ entry.id }</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>);
  }

  setTimeout(() => {
    console.log("changing data from consumer");
    data.setEntries([
      {id: 1, lineItem: 'Entry ABC'},
      {id: 2, lineItem: 'Entry DEF'},
      {id: 3, lineItem: 'Entry GHI'}
    ]);
  }, 5000);

  return (
    <div id="placements-content">
        <table className='placements-data'>
            <thead>
                <tr><th>Line Item</th><th>ID</th><th>Prio</th><th>Type</th><th>Start</th><th>End</th><th>TKP</th><th>Booked</th><th>Delivered</th><th>Clicks/CTR</th><th>Viewability 50/1</th><th>Viewability 100/1</th><th>Forecast</th><th>Progress</th><th>Order & Position</th></tr>
            </thead>
            <tbody>{ tableEntries }</tbody>
        </table>
    </div>
  );
}

export default PlacementContent
