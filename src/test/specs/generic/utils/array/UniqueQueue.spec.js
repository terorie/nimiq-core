describe('UniqueQueue', () => {
    it('correctly dequeues elements', () => {
        const q = new UniqueQueue();

        expect(q.length).toBe(0);

        q.enqueue(3);
        q.enqueue(1);
        q.enqueue(2);

        expect(q.length).toBe(3);
        expect(q.dequeue()).toBe(3);
        expect(q.length).toBe(2);
        expect(q.dequeue()).toBe(1);
        expect(q.length).toBe(1);
        expect(q.dequeue()).toBe(2);
        expect(q.length).toBe(0);
    });

    it('can clear itself', () => {
        const q = new UniqueQueue();

        q.enqueue(3);
        q.enqueue(1);
        q.enqueue(2);

        expect(q.length).toBe(3);
        q.clear();
        expect(q.length).toBe(0);
        expect(q.dequeue()).toBeFalsy();
    });

    it('can indexOf', () => {
        const q = new UniqueQueue();

        q.enqueue(3);
        q.enqueue(1);

        expect(q.indexOf(3)).toBe(0);
        expect(q.indexOf(1)).toBe(1);
        expect(q.indexOf(2)).toBe(-1);
    });

    it('can peek', () => {
        const q = new UniqueQueue();

        q.enqueue(3);
        q.enqueue(1);

        expect(q.peek()).toBe(3);
        q.dequeue();
        expect(q.peek()).toBe(1);
        q.dequeue();
        expect(q.peek()).toBeFalsy();
    });

    it('can dequeueMulti', () => {
        const q = new UniqueQueue();

        q.enqueue(3);
        q.enqueue(1);
        q.enqueue(2);

        expect(q.dequeueMulti(2)).toEqual([3, 1]);
        expect(q.dequeueMulti(2)).toEqual([2]);
        expect(q.dequeueMulti(2)).toEqual([]);
    });

    it('can enqueueUnique', () => {
        const q = new UniqueQueue();

        q.enqueueUnique(3);
        q.enqueueUnique(1);
        q.enqueueUnique(2);
        q.enqueueUnique(3);
        q.enqueueUnique(2);

        expect(q.length).toBe(3);
        expect(q.dequeue()).toBe(3);
        expect(q.dequeue()).toBe(1);
        expect(q.dequeue()).toBe(2);
    });

    it('can enqueueAllNew', () => {
        const q = new UniqueQueue();

        q.enqueueAllNew([3, 1, 2]);
        q.enqueueAllNew([3, 2, 4]);

        expect(q.length).toBe(4);
        expect(q.dequeue()).toBe(3);
        expect(q.dequeue()).toBe(1);
        expect(q.dequeue()).toBe(2);
        expect(q.dequeue()).toBe(4);
    });

    it('can enqueueAllNew (2)', () => {
        const q = new UniqueQueue();

        q.enqueueAllNew([3, 1, 2]);
        q.dequeue();
        q.enqueueAllNew([3, 2, 4]);

        expect(q.length).toBe(4);
        expect(q.dequeue()).toBe(1);
        expect(q.dequeue()).toBe(2);
        expect(q.dequeue()).toBe(3);
        expect(q.dequeue()).toBe(4);
    });

    it('can enqueueAllNew (3)', () => {
        const q = new UniqueQueue();

        q.enqueueAllNew([3, 1, 3, 1, 3]);
        q.dequeue();
        q.dequeue();
        q.enqueueAllNew([3, 4, 1]);

        expect(q.length).toBe(3);
        expect(q.dequeue()).toBe(3);
        expect(q.dequeue()).toBe(4);
        expect(q.dequeue()).toBe(1);
    });


    it('can enqueueAllNew (4)', () => {
        const q = new UniqueQueue();

        q.enqueueAllNew([3, 1, 3, 1, 3]);
        q.dequeue();
        q.enqueueAllNew([3, 4, 1]);

        expect(q.length).toBe(3);
        expect(q.dequeue()).toBe(1);
        expect(q.dequeue()).toBe(3);
        expect(q.dequeue()).toBe(4);
    });

    it('can enqueueAllNew (5)', () => {
        const q = new UniqueQueue();

        q.enqueueAllNew([3, 1, 3, 1, 3]);
        q.dequeueMulti(2);
        q.enqueueAllNew([3, 4, 1]);

        expect(q.length).toBe(3);
        expect(q.dequeue()).toBe(3);
        expect(q.dequeue()).toBe(4);
        expect(q.dequeue()).toBe(1);
    });

    it('can enqueueAllNew (6)', () => {
        const q = new UniqueQueue();

        q.enqueueAllNew([3, 1, 3, 1, 3]);
        q.dequeueUntil(1);
        q.enqueueAllNew([3, 4, 1]);

        expect(q.length).toBe(3);
        expect(q.dequeue()).toBe(3);
        expect(q.dequeue()).toBe(4);
        expect(q.dequeue()).toBe(1);
    });
});
