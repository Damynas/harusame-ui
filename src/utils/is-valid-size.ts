const isValidSize = (value?: string) => {
  if (!value) return false;

  const pattern =
    /^[\d.]+(?:(?<!\.)((px|em|rem|%|vh|vw|vmin|vmax|cm|mm|in|pt|pc|ex|ch)))?$/;

  const parts = value.split(' ');
  return parts.every((part) => pattern.test(part));
};

export { isValidSize };
