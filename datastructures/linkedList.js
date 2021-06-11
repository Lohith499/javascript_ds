
let head=null;;
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

function append(val){
    let newNode=new Node(val);
    if(head==null){
        head=new Node(val);
        return;
    }
    let last=head;
    while(last.next!=null){
        last=last.next;
    }

    last.next=newNode;

    return;
}

function insertAfter(prevnode,val){
    if(prevnode==null){
        return;
    }
    let newNode=new Node(val);
    newNode.next=prevnode.next;
    prevnode.next=newNode;
}


function deleteList(val){

    let currentNode=head;

    if(head.val==val){
        head=head.next;
        return;
    }

    let prev=null;
    while(currentNode.next!=null){
        if(currentNode.val==val){
            if(prev==null){
                head=head.next;
            }
            else{
                prev.next=currentNode.next
            }
            return;
        }
        prev=currentNode;
        currentNode=currentNode.next;
    }
    if(currentNode.val!==val){
        console.log("Node Not Found")
    }else{
        prev.next=null;
    }
    
    return;

}

function print(node){
    let currentNode=node
    while(currentNode.next!=null){
        console.log(currentNode.val);
        currentNode=currentNode.next;
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
print(head)