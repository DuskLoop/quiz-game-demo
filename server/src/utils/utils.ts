export const shuffle = <T>(a: T[]) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
};

export const throwIfUndefined = <T>(a: T, errorMessage: string) => {
  if (a != null) {
    return a;
  } else {
    throw Error(errorMessage);
  }
};
