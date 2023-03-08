class Graph {
  constructor() {
    this.vertices = [];
    this.adjacent = {};
    this.edges = 0;
  }

  addVertex(v) {
    this.vertices.push(v);
    this.adjacent[v] = [];
  }
  
  addEdge(v, w) {
    this.adjacent[v].push(w);
    this.adjacent[w].push(v);
    this.edges++;
  }

  bfs(root = this.vertices[0], goal) {
    if (goal == root) {
      return "distance: 0";
    }
    // if (!vertices.includes(goal) || !vertices.includes(root)) {
    //   return "no such place on the board"
    // }
    let adj = this.adjacent;

    const queue = [];
    queue.push(root);

    const discovered = [];
    discovered[root] = true;

    const edges = [];
    edges[root] = 0;

    const predecessors = [];
    predecessors[root] = null;

    const buildPath = (goal, root, predecessors) => {
      const stack = [];
      stack.push(goal);

      let u = predecessors[goal];

      while (u != root) {
        stack.push(u);
        u = predecessors[u];
      }

      stack.push(root);

      let path = stack.reverse().join(' -> ');

      return path;
    }

    while (queue.length) {
      let v = queue.shift();
      
      if (v === goal) {
        return {
          moves: edges[goal],
          path: buildPath(goal, root, predecessors)
        };
      }
      for (let i = 0; i < adj[v].length; i++) {
        if (!discovered[adj[v][i]]) {
          discovered[adj[v][i]] = true;
          queue.push(adj[v][i]);
          edges[adj[v][i]] = edges[v] + 1;
          predecessors[adj[v][i]] = v;
        }
      }
    }

    return false;
  }

}

const graph = new Graph(16);

var iMax = 8;
var jMax = 8;
var board = [];

for (i = 0; i < iMax; i++) {
  board[i] = [];
  for (j = 0; j < jMax; j++) {
    board[i][j] = [i, j];
  }
}

board.forEach((row) => {
  for (var i = 0; i < row.length; i++) {
  graph.addVertex(row[i]);
}
})


let stringVertices = JSON.stringify(graph.vertices);


function addEdges() {
  for (let i = 0; i < board.length; i++) {
    board[i].forEach((vertice) => {
      let adjacentVertices = [`${vertice[0] - 1},${vertice[1] - 2}`, `${vertice[0] - 2},${vertice[1] - 1}`, `${vertice[0] - 2},${vertice[1] + 1}`, `${vertice[0] - 1},${vertice[1] + 2}`, `${vertice[0] + 1},${vertice[1] - 2}`, `${vertice[0] + 1},${vertice[1] + 2}`, `${vertice[0] + 2},${vertice[1] - 1}`, `${vertice[0] + 2},${vertice[1] + 1}`];
      while (adjacentVertices.length != 0) {
        currentAdjacent = adjacentVertices[0]
        if (stringVertices.includes(currentAdjacent)) {
          graph.adjacent[vertice].push(currentAdjacent);
           graph.edges++;
          adjacentVertices.shift();
        } else {
          adjacentVertices.shift();
        }
      }
  })
  }
  
}

addEdges()


console.log(graph.bfs('0,4', '1,4'))