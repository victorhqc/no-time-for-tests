export const waitRequest = object => ({
  ...object,
  isFetching: true,
});

export const finishRequest = object => ({
  ...object,
  isFetching: false,
});

export const addError = (error, object) => ({
  ...object,
  error,
});
