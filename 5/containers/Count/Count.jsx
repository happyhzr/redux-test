import { connect } from "react-redux"

import CountUI from "../../components/Count/Count"
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from "../../redux/count-action"

function mapStateToProps(state) {
    return { count: state }
}

function mapDispatchToProps(dispatch) {
    return {
        jia: (data) => {
            dispatch(createIncrementAction(data))
        },
        jian: (data) => {
            dispatch(createDecrementAction(data))
        },
        jiaAsync: (data, time) => {
            dispatch(createIncrementAsyncAction(data, time))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountUI)