interface Node{
    value: number;
    next: Node;
}
export function getInstersectNode(head1: Node, head2: Node) {
    if(head1 == null || head2 == null) {
        return null;
    }
    let loop1 = getLoopNode(head1);
    let loop2 = getLoopNode(head2);
    if(loop1 == null || loop2 == null) {
        return noLoop(head1, head2);
    }
    if(loop1 != null && loop2 != null) {
        return bothLoop(head1, loop1, head2, loop2);
    }
    return null;
}

// 获取链表第一个入环节点，如果无环，返回null
export function getLoopNode(head: Node) {
    if(head == null || head.next == null || head.next.next == null) {
        return null;
    }
    let n1 = head.next; // 慢指针
    let n2 = head.next.next; // 快指针
    while(n1 !== n2) {
        if(n2.next == null || n2.next.next == null) {
            return null;
        }
        n2 = n2.next.next;
        n1 = n1.next;
    }
    n2 = head;
    while(n1 != n2) {
        n1 = n1.next;
        n2 = n2.next;
    }
    return n1;
}

export function noLoop(head1: Node, head2: Node) {
    if(head1 == null || head2 == null) {
        return null;
    }
    let cur1 = head1;
    let cur2 = head2;
    let n = 0;
    while(cur1.next != null) {
        n++;
        cur1 = cur1.next;
    }
    while(cur2.next != null) {
        n--;
        cur2 = cur2.next;
    }
    if(cur1 != cur2) {
        return null;
    }
    cur1 = n > 0 ? head1 : head2;
    cur2 = cur1 == head1 ? head2 : head1;
    n = Math.abs(n);
    while(n != 0) {
        n--;
        cur1 = cur1.next;
    }
    while(cur1 != cur2) {
        cur1 = cur1.next;
        cur2 = cur2.next;
    }
    return cur1;
}

// 两个有环链表，返回第一个相交节点，如果不相交返回null
export function bothLoop(head1: Node, loop1: Node, head2: Node, loop2: Node) {
    let cur1 = null;
    let cur2 = null;
    if(loop1 == loop2) {
        cur1 = head1;
        cur2 = head2;
        let n = 0;
        while(cur1 != loop1) {
            n++;
            cur1 = cur1.next;
        }
        while(cur2 != loop2) {
            n--;
            cur2 = cur2.next;
        }
        cur1 = n > 0 ? head1 : head2;
        cur2 = cur1 == head1 ? head2 : head1;
        n = Math.abs(n);
        while(n != 0) {
            n--;
            cur1 = cur1.next;
        }
        while(cur1 != cur2) {
            cur1 = cur1.next;
            cur2 = cur2.next;
        }
        return cur1;
    } else {
        cur1 = loop1.next;
        while(cur1 != loop1) {
            if(cur1 == loop2) {
                return loop1;
            }
            cur1 = cur1.next;
        }
        return null;
    }
}