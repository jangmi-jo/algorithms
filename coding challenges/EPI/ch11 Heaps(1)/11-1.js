/*
merge sorted files

1) build heap class
2) build heap with the sequences and their index set to 0
3) extract one seq and push el with the index of it to res
4) increment idx and if the index is still smaller than the seq's length, insert the seq into the heap again

*/

class Heap {
    constructor(store = [], comparator = (a, b) => a - b) {
        this.comparator = comparator;
        this.store = this.buildHeap(store);
    }

    extract() {
        let value = this.store[0];
        this.store[0] = this.store[this.store.length - 1];
        this.store.pop();
        Heap.heapifyDown(this.store, 0, this.comparator);
        return value;
    }

    insert(val) {
        this.store.push(val);
        Heap.heapifyUp(this.store, this.store.length - 1, this.comparator);
    }

    peak() {
        return this.store[0];
    }

    buildHeap(store) {
        for (let i = store.length - 1; i >= 0; i--) {
            Heap.heapifyUp(store, i, this.comparator);
        }
        return store;
    }

    static parent(idx) {
        if (idx <= 0) {
            return;
        }
        let parentIdx = Math.floor((idx - 1) / 2);
        return parentIdx;
    }

    static children(idx, store) {
        let idxs = [2 * idx + 1, 2 * idx + 2];
        return idxs.filter((i) => i >= 0 && i <= store.length - 1);
    }

    static heapifyUp(store, idx, comparator) {
        let pIdx = Heap.parent(idx);
        if (pIdx !== undefined) {
            let compared = comparator(store[pIdx], store[idx]);
            if (compared > 0) {
                [store[idx], store[pIdx]] = [store[pIdx], store[idx]];
                Heap.heapifyUp(store, pIdx, comparator);
            }
        }
    }

    static heapifyDown(store, idx, comparator) {
        let cIdxs = Heap.children(idx, store);
        if (cIdxs.length) {
            cIdxs.sort((x, y) => comparator(store[x], store[y]));
            let cIdx = cIdxs[0];
            let compared = comparator(store[idx], store[cIdx]);
            if (compared > 0) {
                [store[idx], store[cIdx]] = [store[cIdx], store[idx]];
                Heap.heapifyDown(store, cIdx, comparator);
            }
        }
    }
}

const mergeWithHeap = (seqs) => {
    const heap = new Heap(seqs.map((seq) => [seq, 0]),
        (a, b) => a[0][a[1]] - b[0][b[1]]);
    const res = [];
    while (heap.store.length) {
        const seq = heap.extract();
        res.push(seq[0][seq[1]]);
        seq[1]++;
        if (seq[0].length > seq[1]) {
            heap.insert(seq);
        }
    }
    return res;
};

// console.log(mergeWithHeap([[3, 5, 7], [0, 6], [0, 6, 28]]));

module.exports = Heap;
