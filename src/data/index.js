// export const tableColumn = [
//   {
//     label: 'S.N.',
//     field: 'sn',
//   },
//   {
//     label: 'Repository Name',
//     field: 'name',
//   },
//   {
//     label: 'Author',
//     field: 'author',
//   },
//   {
//     label: 'Description',
//     field: 'description',
//   },
//   {
//     label: 'Last Update',
//     field: 'lastUpdate',
//   },
//   {
//     label: 'Stats',
//     field: 'stats',
//   },
//   {
//     label: 'Action',
//     field: 'action',
//   },
// ]

export const tableColumn = [
  { key: 'name', label: 'Name', _style: { width: '15%' } },
  { key: 'author', label: 'Author', _style: { width: '10%' } },
  { key: 'description', label: 'Description', _style: { width: '25%' } },
  { key: 'lastUpdate', label: 'Last Update', _style: { width: '10%' } },
  { key: 'stats', label: 'Stats', _style: { width: '25%' } },
  {
    key: 'actions',
    label: 'Actions',
    _style: { width: '10%' },
  },
]
