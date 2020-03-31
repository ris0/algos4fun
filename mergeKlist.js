var mergeKLists = function(lists) {
    if (lists.length === 0) {
      return null;
    }
    if (lists.length === 1) {
      return lists[0];
    }
    
    let merged = [], list1, list2;
    while (lists.length > 1) {
      do {
        list1 = lists.pop();
        list2 = lists.pop();
        merged.push(merge2Lists(list1, list2));
      } while (lists.length > 1);
  
      if (lists.length) merged.push(lists.pop());
  
      let temp = lists;
      lists = merged;
      merged = temp;
    }
    
    return lists[0];
  };
  
  var merge2Lists = function(l1, l2) {
    if (!l1) {
      return l2;
    } else if (!l2) {
      return l1;
    }
    
    const root = l1.val < l2.val ? l1 : l2;
    if (root === l1) {
      l1 = l1.next;
    } else {
      l2 = l2.next;
    }
    
    let tail = root;
    
    while (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1;
        l1 = l1.next;
      } else {
        tail.next = l2;
        l2 = l2.next;
      }
      tail = tail.next;
    }
    
    tail.next = l1 || l2;
    return root;
  }