export type Thunk<R> = () => R;
export type UnaryFunction<E, R> = (e: E) => R;
export type BinaryFunction<E, F, R> = (e: E, f: F) => R;



export type NumberProjection<E> = UnaryFunction<E, number>;
export type KeyProjection<E> = UnaryFunction<E, string> | NumberProjection<E>;
export type Predicate<E> = (e: E) => boolean;
export type Comparer<E> = BinaryFunction<E, E, number>;
export type Reduction<E> = BinaryFunction<E, E, E>;
export type Folder<E, F> = BinaryFunction<F, E, F>;
export type Mutation<E> = UnaryFunction<E, E>;

export interface Dictionary<E> {
    [name: string]: E;
}


export type Tuple<E, F> = [E, F];

export type Gen<E> = Generator<E, void, unknown>;
export type Seq<E> = { [Symbol.iterator](): Gen<E> } | Iterable<E>
