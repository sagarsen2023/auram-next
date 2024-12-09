export default function queryParamsFormatter(params: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  const queryString = new URLSearchParams(
    Object.entries(params).reduce<Record<string, string>>(
      (acc, [key, value]) => {
        if (value === undefined || value === null || value === "") {
          return acc;
        }
        acc[key] = String(value);
        return acc;
      },
      {}
    )
  ).toString();
  return queryString;
}
