const isValidSize = (value?: string) => {
  const pattern =
    /^[\d.]+(?<!\.)((px|em|rem|%|vh|vw|vmin|vmax|cm|mm|in|pt|pc|ex|ch)?)$/;
  return !!value && pattern.test(value);
};

export { isValidSize };
