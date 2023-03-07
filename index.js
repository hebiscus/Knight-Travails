class Graph {
    constructor() {
      this.vertices = [];
      this.adjacent = {};
      this.edges = 0;
    }
  
    addVertex(v) {
      this.vertices.push(v);
      this.adjacent[v] = null;
    }
    
    addEdge(v, w) {
      this.adjacent[v].push(w);
      this.adjacent[w].push(v);
      this.edges++;
    }
  
    bfs(goal, root = this.vertices[0]) {
      if (goal == root) {
        return "distance: 0";
      }
      if (!vertices.includes(goal) || !vertices.includes(root)) {
        return "no such place on the board"
      }
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
  
        let path = stack.reverse().join('-');
  
        return path;
      }
  
  
      while (queue.length) {
        let v = queue.shift();
  
        if (v === goal) {
          return {
            distance: edges[goal],
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
  const vertices = ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1',
    'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2',
    'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3',
    'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4',
    'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5',
    'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6',
    'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7',
    'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8',];
  
  // for (var i = 0; i < vertices.length; i++) {
  //   graph.addVertex(vertices[i]);
  // }
  
  // console.log(graph.bfs('B2', 'D2'));
  
  
  var iMax = 8;
  var jMax = 8;
  var board = [];
  
  for (i = 0; i < iMax; i++) {
    board[i] = [];
    for (j = 0; j < jMax; j++) {
      board[i][j] = [i, j];
    }
  }
  
  // console.log(board)
  
  const firstRow = board[0];
  const secondRow = board[1];
  const thirdRow = board[2];
  const fourthRow = board[3];
  const fifthRow = board[4];
  const sixthRow = board[5];
  const seventhRow = board[6];
  
  // console.log(firstRow)
  // for (var i = 0; i < firstRow.length; i++) {
  //   graph.addVertex(firstRow[i]);
  // }
  
  
  board.forEach((row) => {
    for (var i = 0; i < row.length; i++) {
    graph.addVertex(row[i]);
  }
  })
  
  // console.log(graph.vertices)
  
  // console.log(graph.adjacent)
  
  
  // function addEdges() {
  //   firstRow.forEach((vertice) => {
  //     let adjacentVertices = [[vertice[0] + 1, vertice[1] - 2], [vertice[0] + 1, vertice[1] + 2], [vertice[0] + 2, vertice[1] - 1], [vertice[0] + 2, vertice[1] + 1]];
  //         console.log(adjacentVertices)
  //     graph.adjacent["A1"] = (adjacentVertices);
  //     // graph.adjacent[w].push(v);
  //     graph.edges++;
  //   })
  // }
  
  // addEdges()
  
  // console.log(graph.adjacent)
  
  
  function addEdges() {
    for (let i = 0; i < board.length; i++) {
      board[i].forEach((vertice) => {
      let adjacentVertices = [[vertice[0] + 1, vertice[1] - 2], [vertice[0] + 1, vertice[1] + 2], [vertice[0] + 2, vertice[1] - 1], [vertice[0] + 2, vertice[1] + 1]];
          // console.log(adjacentVertices)
        // for (let i = 0; i < adjacentVertices.length; i++) {
        //   if (graph.vertices.includes(adjacentVertices[i])) {
        //     console.log("buh")
            graph.adjacent[vertice] = adjacentVertices;
          // }
          // else console.log("no such value") 
        // }
        
      
      // graph.adjacent[w].push(v);
      graph.edges++;
    })
    }
    
  }
  
  addEdges()
  
  console.log(graph.adjacent)