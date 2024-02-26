import { useState } from 'react'
import './PlacementsTool.css'
import PlacementHeader from './header/PlacementsHeader';
import PlacementContent from './content/PlacementsContent';
import { DataContext } from './DataService';

function PlacementsTool() {
  const [data, setData] = useState({ entries: [
    {id: 1, lineItem: 'Entry 1'},
    {id: 2, lineItem: 'Entry 2'},
    {id: 3, lineItem: 'Entry 3'},
    {id: 4, lineItem: 'Entry 4'},
    {id: 5, lineItem: 'Entry 5'},
    {id: 6, lineItem: 'Entry 6'},
    {id: 7, lineItem: 'Entry 7'},
    {id: 8, lineItem: 'Entry 8'},
    {id: 9, lineItem: 'Entry 9'},
    {id: 10, lineItem: 'Entry 10'}
  ], setEntries: (entries:any) => {}});

  return (
    <>
    <DataContext.Provider value={ {
      entries: data.entries,
      setEntries: (entries:any[]) => { setData({ entries: entries, setEntries: setData }) }
    } }>
      <div id="placements-tool">
        <PlacementHeader></PlacementHeader>
        <PlacementContent></PlacementContent>
      </div>
    </DataContext.Provider>
    </>
  );
}

export default PlacementsTool
