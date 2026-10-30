// Flattens nested objects and arrays into path -> string.
export function leaves(
  value: unknown,
  path = '',
  out = new Map<string, string>(),
) {
  if (typeof value === 'string') out.set(path, value);
  else if (Array.isArray(value))
    value.forEach((item, i) => leaves(item, `${path}[${i}]`, out));
  else if (value && typeof value === 'object')
    for (const [key, item] of Object.entries(value))
      leaves(item, path ? `${path}.${key}` : key, out);
  return out;
}
