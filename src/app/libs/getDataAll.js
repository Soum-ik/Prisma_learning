export default async function getAllData() {
  const res = await fetch("http://localhost:3000/api/formData", {
    cache: "no-store",
  });
  if (res.ok) {
    return res.json();
  }
}
