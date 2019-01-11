export default (type: string) => ({
  type,
  create: (payload: any) => ({ type, payload })
});
