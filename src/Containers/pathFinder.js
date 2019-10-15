import React from 'react'
import Node from './Component/node'
import Dijkstra from '../dijkstras'


export default class PathFinder extends React.Component {
      
    state = {
        grid: []
    } 


    mountDijkstra = () => {
        Dijkstra(this.state.grid)
    }
    
    componentDidMount() {
        const grid = [] 
        for(let row = 0; row <= 15; row++) {
            const curRow = []
            for(let col =0; col <=40; col++) {
                const currentNode = {
                    row,
                    col,
                    isVisited: false,
                    nodeDistance: Infinity,
                    startNode: row == 8 && col == 5,
                    endNode: row == 8 && col == 30
                }
                curRow.push(currentNode)
            }
            grid.push(curRow)
        }
        this.setState({grid})
    }
    
    styles = {
        grid: {
            position: 'absolute'
        }
    }


    render() {
        this.mountDijkstra()
        console.log(this.state)
        const {grid} = this.state
        console.log(grid)
        return (
            <div style={this.styles.grid}>
                {grid.map((row, rowIdx) => {
                    return <div>
                        {row.map((node, nodeIdx) => <Node nodeInfo={node}/>)}
                    </div>
                })}
            </div>
        )
    }
}