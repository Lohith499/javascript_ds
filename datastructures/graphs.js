const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


const adjacencyList = new Map();

// Add node
function addNode(airport) {
    adjacencyList.set(airport, []);
}

// Add edge, undirected
function addEdge([x,y]) {
    adjacencyList.get(x).push(y);
    adjacencyList.get(y).push(x);
}


airports.forEach(addNode)
routes.forEach(addEdge)




console.log(adjacencyList)



//bfs('PHX')



function bfs(start){
    const visited=new Set();

    const queue=[start];


    while(queue.length>0){
        const airport=queue.shift();
    
        const destinations=adjacencyList.get(airport);

        for(const destination of destinations){


            if(destination==='BKK'){
                console.log("BKK found")
            }
            if(!visited.has(destination)){
                visited.add(destination);
                queue.push(destination)
                console.log(destination)
            }
        }
    }
}


let fullpath=[];
function dfs(start,path,visited=new Set(),){
    path.add(start)
    visited.add(start);
    const destinations=adjacencyList.get(start);
    for(const destination of destinations){
        path.add(destination)
        if(destination==="BKK"){
            fullpath=[...Array.from(path)];
            return;
        }

        if(!visited.has(destination)){
            dfs(destination,path,visited);
        }

    }
}

dfs('PHX',new Set())
console.log(fullpath)



