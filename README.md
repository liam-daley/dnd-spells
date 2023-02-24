# DnD 5e Spells App

## To run

In the project directory:

### `npm i`
### `npm start`

## notes on development process
Completed redux tutorial 
https://react-redux.js.org/introduction/getting-started

Read about dnd, dnd spells and how spells work in dnd.

Found some class icon svgs from reddit post with link to a dropbox
- https://www.reddit.com/r/DnD/comments/4t57fn/dd_5e_vector_icons/
- https://www.dropbox.com/s/4hw05xk8rhcth53/D%26D%205e%20Icons.zip?dl=0

Went through material UI for component ideas:

list, search  
use react-virtualized to render only some of the spells to fill the view not all 
- https://mui.com/material-ui/react-table/#virtualized-table

sorting columns min-max/A-Z, selecting rows to delete from favs when viewing favs or add to favs when viewing search result 
- https://mui.com/material-ui/react-table/#sorting-amp-selecting
- https://mui.com/material-ui/react-table/#sticky-header
- https://mui.com/material-ui/react-table/#collapsible-table show details of spell
- https://mui.com/material-ui/react-table/#caption

filters
icon dropdown for classes
- https://mui.com/material-ui/react-tooltip/#basic-tooltip

favs
- https://mui.com/material-ui/react-table/#virtualized-table

optional:
saved search
separate favs page
- https://mui.com/material-ui/react-grid/
- https://mui.com/material-ui/react-card/
- https://mui.com/material-ui/react-table/#virtualized-table

useful for css / aligning items
https://mui.com/material-ui/react-stack/#interactive
https://mui.com/material-ui/react-css-baseline/

Finished react redux tutorial to use get-spells query with redux rtk query
