import { DataTable } from "./components/DataTable"


function App() {
  const table = [{
    "id": 0,
    '5-6': '7-8',
    'hehehegr': 'done',
  },
  {
    "id": 1,
    '5-6': '7-8',
    'hehehegr': 'done',
  },
  {
    "id": 2,
    '5-6': '7-8',
    'hehehegr': 'done',
  },
  {
    "id": 3,
    '5-6': '7-8',
    'hehehegr': 'done',
  },]

  const headers = Object.keys(table[0])
  return (
    <div>
      <DataTable table={table} headers={headers} />
    </div>
  )
}

export default App