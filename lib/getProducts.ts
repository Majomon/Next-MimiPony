export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  slug: string;
  ageRange: string;
  inStock: boolean;
}

export async function fetchProducts(): Promise<Product[]> {
  const SHEET_ID = "10ZgSCGR7nwPaBDQ6RFKQN_x6RGly56Dm65Le6kzvznM";
  const GID_PRODUCTS = "2108137954";

  const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${GID_PRODUCTS}`;

  const res = await fetch(url);
  const text = await res.text();

  const jsonData = JSON.parse(text.substring(47, text.length - 2));
  const rows = jsonData.table.rows;
  const dataRows = rows.slice(1); // saltar header

  const products = dataRows.map((row: any) => {
    const c = row.c;
    return {
      id: c[0]?.v ?? "",
      name: c[1]?.v ?? "",
      price: Number(c[2]?.v ?? 0),
      image: c[3]?.v ?? "",
      category: c[4]?.v ?? "",
      description: c[5]?.v ?? "",
      slug: c[6]?.v ?? "",
      ageRange: c[7]?.v ?? "",
      inStock: c[8]?.v === "true",
    };
  });

  return products;
}
