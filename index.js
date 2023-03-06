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

   bfs(goal, root = this.vertices[0]) {
         if (goal == root) {
           return "distance: 0";
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

            while(u != root) {
                stack.push(u);
                u = predecessors[u];
            }

            stack.push(root);

            let path = stack.reverse().join('-');

            return path;
        }
    

        while(queue.length) {
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
const vertices = [ 'A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1', 'H1',
                  'A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2', 'H2',
                  'A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3', 'H3',
                  'A4', 'B4', 'C4', 'D4', 'E4', 'F4', 'G4', 'H4',
                  'A5', 'B5', 'C5', 'D5', 'E5', 'F5', 'G5', 'H5',
                  'A6', 'B6', 'C6', 'D6', 'E6', 'F6', 'G6', 'H6',
                  'A7', 'B7', 'C7', 'D7', 'E7', 'F7', 'G7', 'H7',
                  'A8', 'B8', 'C8', 'D8', 'E8', 'F8', 'G8', 'H8',];

for (var i = 0; i < vertices.length; i++) {
    graph.addVertex(vertices[i]);
}

graph.addEdge('A1', 'B3');
graph.addEdge('A1', 'C2');
graph.addEdge('B1', 'A3');
graph.addEdge('B1', 'D2');
graph.addEdge('B1', 'C3');
graph.addEdge('C1', 'B3');
graph.addEdge('C1', 'D3');
graph.addEdge('C1', 'A2');
graph.addEdge('C1', 'E2');
graph.addEdge('D1', 'B2');
graph.addEdge('D1', 'F2');
graph.addEdge('D1', 'C3');
graph.addEdge('D1', 'E3');
graph.addEdge('E1', 'C2');
graph.addEdge('E1', 'G2');
graph.addEdge('E1', 'D3');
graph.addEdge('E1', 'F3');
graph.addEdge('F1', 'D2');
graph.addEdge('F1', 'H2');
graph.addEdge('F1', 'E3');
graph.addEdge('F1', 'G3');
graph.addEdge('G1', 'E2');
graph.addEdge('G1', 'F3');
graph.addEdge('G1', 'H3');
graph.addEdge('H1', 'F2');
graph.addEdge('H1', 'G3');


// console.log(graph.bfs('F1', 'D1'));
      