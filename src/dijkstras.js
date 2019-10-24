
const $points = {}

export default function Dijkstra(grid) {
    //const nodes = getNodes(grid)
    const unvisitedNodes = getNodes(grid)
    const visitedNodes = []
    //console.log('foobar', grid, unvisitedNodes, visitedNodes)
    if(!!Object.keys($points).length) {
        //var startNeighbors = getNeighbors(grid, grid[$points.startNode.row][$points.startNode.col])
        //startNeighbors.forEach(node => sctNodes.push(node)) 
        while(!!unvisitedNodes.length) { 
            sortDistance(unvisitedNodes)
            const currentNode = unvisitedNodes.shift()
            updateNodes(grid, currentNode)
        }
    } 
    //console.log('sctNodes', visitedNodes)
}

function sortDistance(unvisited) {
    unvisited.sort((a, b) => a.nodeDistance - b.nodeDistance)
}


function updateNodes(grid, node) {
    const neighbors = getNeighbors(grid, node)
    neighbors.forEach(node => {
        if(node.nodeDistance == Infinity) 
            node.nodeDistance = node.previousNode.nodeDistance + 1
    })
}

//function to get neighbors by node -- sets previousNode
function getNeighbors(grid, node) { // update distance 
    var nodeNeighbors = []
    if(node) {
        try {
            if(grid[node.row][node.col+1] != undefined || null) {
                //console.log(grid[node.row][node.col+1])
                grid[node.row][node.col+1].previousNode = node
                nodeNeighbors.push(grid[node.row][node.col+1])
            }
            if(grid[node.row][node.col-1] != undefined || null) {
                //console.log(grid[node.row][node.col-1])
                grid[node.row][node.col-1].previousNode = node
                nodeNeighbors.push(grid[node.row][node.col-1])
            }
            if(grid[node.row+1][node.col] != undefined || null) {
                //console.log(grid[node.row+1][node.col])
                grid[node.row+1][node.col].previousNode = node
                nodeNeighbors.push(grid[node.row+1][node.col])
            }
            if(grid[node.row-1][node.col] != undefined || null) {
                //console.log(grid[node.row-1][node.col])
                grid[node.row-1][node.col].previousNode = node
                nodeNeighbors.push(grid[node.row-1][node.col])
            }
        }
        finally {
            return nodeNeighbors
        }
    }
    //return nodeNeighbors
}


function getPoints(node) {
    if(node.startNode) {
        $points.startNode = node
    }
    else if(node.endNode) {
        $points.endNode = node
    }
    return $points
}


function getNodes(grid) {
    const nodes = [];
    for (const row of grid) {
      for (const node of row) {
        if(node.startNode) {
            $points.startNode = node
            node.nodeDistance = 0
            node.startNode = true
        }
        else if(node.endNode) {
            $points.endNode = node
        }
        nodes.push(node)
      }
    }
    return nodes;
}

