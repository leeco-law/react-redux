import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
class Viewer extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const { dataSource } = this.props;
        let firstNode = dataSource[0]
        return (
            <table>
                <thead>
                    {
                        Object.keys(firstNode || []).map((key) => {
                            return <td key={key}>{key}</td>
                        })
                    }
                </thead>
                <tbody>
                    {
                        dataSource.map((item, index) => {
                            return <tr key={index}>
                                {
                                    Object.keys(item).map((key) => {
                                        return <td>{item[key]}</td>
                                    })
                                }
                            </tr>
                        })
                    }
                </tbody>
            </table>)
    }

    componentWillReceiveProps(nextProps) {
        // this.setState({ ...nextProps });
        console.log("viewer currentProps:", this.props)
        console.log("viewer nextProps:", nextProps);
    }
}

export default connect((state) => {
    let { recentContactList } = state || {};
    return { dataSource: recentContactList || [] }
})(Viewer);