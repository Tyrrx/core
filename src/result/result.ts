export enum ResultType {
  Success = 'Success',
  Failure = 'Failure',
}

interface SuccessType<E> {
  readonly type: ResultType.Success;
  readonly value: E;
}

interface FailureType<E> {
  readonly type: ResultType.Failure;
  readonly value: E;
}

export type Result<S, F> = SuccessType<S> | FailureType<F>;

export const Success = <E>(value: E): SuccessType<E> => ({
  type: ResultType.Success,
  value,
});

export const Failure = <E>(value: E): FailureType<E> => ({
  type: ResultType.Failure,
  value,
});
export const isSuccess = <S, F>(result: Result<S, F>): result is SuccessType<S> => result.type === ResultType.Success
export const isFailure = <S, F>(result: Result<S, F>): result is FailureType<F> => result.type === ResultType.Failure