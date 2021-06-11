
let head=null;
class Node{
    constructor(val){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}

function append(val){
    let newNode=new Node(val);
    if(head==null){
        head=new Node(val);
        return;
    }
    let last=head;
    while(last.right!=null){
        last=last.right;
    }
    last.right=newNode;
    newNode.left=last;
    return;
}

function insertAfter(prevnode,val){
    if(prevnode==null){
        return;
    }
    let newNode=new Node(val);
    newNode.right=prevnode.right;
    prevnode.right=newNode;
    newNode.left=prevnode;
}


function deleteList(val){

    let currentNode=head;

    if(head.val==val){
        head=head.right;
        return;
    }

    let prev=null;
    while(currentNode.right!=null){
        if(currentNode.val==val){
            if(prev==null){
                head=head.right;
            }
            else{
                prev.right=currentNode.right
            }
            return;
        }
        prev=currentNode;
        currentNode=currentNode.right;
    }
    if(currentNode.val!==val){
        console.log("Node Not Found")
    }else{
        prev.right=null;
    }
    
    return;

}

function printRight(node){
    let currentNode=node
    while(currentNode.right!=null){
        console.log(currentNode.val);
        currentNode=currentNode.right;
    }
    console.log(currentNode.val)
    return;
}



append(5)

append(6)

insertAfter(head,7)
deleteList(6)

append(4)
append(6)
deleteList(7)
printRight(head)