// 复制链表

// 复制含有随机指针节点的链表
interface NodeI {
    value: number;
    next: Node | null;
    rand: Node | null;
}
class Node {
    value: number;
    next: NodeI | null;
    rand: NodeI | null;
    constructor(val: number | null) {
        this.value = val || 0;
        this.next = null;
        this.rand = null;
    }
}
export function copyListWithRand1(head: NodeI) {
    let map = new Map();
    let cur = head;
    while(cur != null) {
        map.set(cur, cur.value);
        cur = cur.next as NodeI;
    }
    cur = head;
    while(cur != null) {
        map.get(cur).next = map.get(cur.next);
        map.get(cur).rand = map.get(cur.rand);
        cur = cur.next as NodeI;
    }
    return map.get(head);
}

export function copyListWithRand2(head: NodeI) {
    if(head === null) {
        return null;
    }
    let cur = head;
    let next = null;
    while(cur != null) {
        next = cur.next;
        cur.next = new Node(cur.value);
        cur.next.next = next;
        cur = next as NodeI;
    }
    cur = head;
    let curCopy = null;
    while(cur != null) {
        next = cur.next?.next;
        curCopy = cur.next;
        (curCopy as NodeI).rand = cur.rand != null ? cur.rand.next : null;
        cur = next as NodeI;
    }
    let res = head.next;
    cur = head;
    while(cur != null) {
        next = cur.next?.next;
        curCopy = cur.next as NodeI;
        cur.next = next as NodeI;
        curCopy.next = next != null ? next.next : null;
        cur = next as NodeI;
    }
    return res;
}