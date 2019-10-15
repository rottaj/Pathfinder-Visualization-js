
const $points = {}

function Dijkstra(grid) {
    console.log(grid)
    const nodes = getNodes(grid)
    console.log(nodes)
    console.log($points)
    const nodeNeighbors = getNeighbors(grid, $points.startNode)
    while ($points.endNode !== Infinity) { 

    }
    console.log(nodeNeighbors)
}

//function to get neighbors by node
function getNeighbors(grid, node) {
    console.log(node)
    var nodeNeighbors = {}
    if(node !== undefined || null) {
        console.log(node.col)
        nodeNeighbors.nodeRight = grid[node.row][node.col+1]
        nodeNeighbors.nodeLeft = grid[node.row][node.col-1]
        nodeNeighbors.nodeUp = grid[node.row-1][node.col]
        nodeNeighbors.nodeDown = grid[node.row+1][node.col]

    }
    return nodeNeighbors
}

  
 // a visited node will never be checked again
 // function to update nodes to visited
function updateToVisited(node, grid) {

}

//function to sort shortest nodes 
/*
function sortShortest(grid) {

}
*/

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
    const nodes = []
    for (let row of grid) {
        const currRow = []
        for(var node of row) {
            if(node.startNode) {
                node.nodeDistance = 0
                $points.startNode = node
            }
            else if(node.endNode) {
                $points.endNode = node
            }
            currRow.push(node)
        }
        nodes.push(currRow)
    }
    console.log($points)
    return nodes 
}

export default Dijkstra