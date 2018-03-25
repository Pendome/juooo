import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './redux/configStore.js'

// import DatagridComponent from './src/components/datagrid/datagridcomponent'
import StudentCompnent from './component/student/studentcomponent'

ReactDOM.render(
    <Provider store={store}>
        <StudentCompnent />
    </Provider>,
    document.getElementById('app')
)