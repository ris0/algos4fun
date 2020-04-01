

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var arr = [7, 0, 8];

const getListFromNumber = (numbersRemain, list = null) => {
    if (!numbersRemain.length) return list;
    const val = numbersRemain.shift();
    return {val, next: getListFromNumber(numbersRemain)}
};

var result = getListFromNumber(arr);