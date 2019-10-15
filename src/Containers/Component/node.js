import React from 'react'

export default class Node extends React.Component {

    state = {
        wall: false,
        isVisited: false,
        startNode: false,
        endNode: false
    }

/*
    styles = {
        node: {
            height: '25px',
            width: '25px',
            outline: '1px solid grey',
            display: 'inline-block',
        }

    }
*/
    makeWall = () => {
        if(this.state.startNode !== true && this.state.endNode !== true) {
            this.setState({
                wall: true
            })
        }
    }

    getStyle = () => {
        return {
            height: '25px',
            width: '25px',
            outline: this.state.startNode ? '1px solid green' : (this.state.endNode ? '1px solid red' : '1px solid grey'),
            display: 'inline-block',
            background: this.state.wall ? 'black' : 'white',
        }
    }
    
    getStarters = () => {
        if(!this.state.startNode || !this.state.endNode) {
            if(this.props.nodeInfo.startNode == true) {
                console.log('startnode true')
                this.setState({startNode: true})
            }
            else if(this.props.nodeInfo.endNode == true) {
                console.log('endnode true')
                this.setState({endNode: true})
            }
        }
    }

    componentDidMount() {
        this.getStarters()
    }

    assignStart = () => {
        this.setState({startNode: !this.state.startNode})
    }

    assignEnd = () => {
        this.setState({endNode: !this.state.endNode})
    }

    render() {
        //console.log('props', this.props)
        //console.log('state', this.state)
        return ( 
            <div style={this.getStyle()} onMouseDown={() => this.makeWall()}>
            </div>
        )
    }
}