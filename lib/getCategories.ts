export async function fetchCategories() {
  const SHEET_ID = "10ZgSCGR7nwPaBDQ6RFKQN_x6RGly56Dm65Le6kzvznM";
  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`;

  const res = await fetch(url);
  const text = await res.text();

  const jsonData = JSON.parse(text.substring(47, text.length - 2));

  const rows = jsonData.table.rows;

  // Ignorar la primera fila (header)
  const dataRows = rows.slice(1);

  const categories = dataRows.map((row: any) => {
    const c = row.c;
    return {
      name: c[0]?.v ?? "",
      emoji: c[1]?.v ?? "",
      color: c[2]?.v ?? "",
      description: c[3]?.v ?? "",
    };
  });

  return categories;
}
