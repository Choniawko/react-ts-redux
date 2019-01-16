interface Action<T> {
  type: string;
  payload?: T;
}

export default <T>(type: string) => ({
  type,
  create: (payload?: T): Action<T> => ({ type, payload })
});
