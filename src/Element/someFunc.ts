const enum EnumTest {
  VALUE1 = 1,
  VALUE2 = 2,
}

export const someFunc = (): string => {
  const b = EnumTest.VALUE1;
  return "OK";
};
