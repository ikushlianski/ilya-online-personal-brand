export async function GETWORKS() {
  const res = await fetch(`http://localhost:3001/works`);
  return await res.json();
}
