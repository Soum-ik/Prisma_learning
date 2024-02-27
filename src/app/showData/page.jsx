import getAllData from "../libs/getDataAll";

export default async function page() {
  const result = await getAllData();
  const data = result.data;
  console.log(data);
  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Company</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Message</th>
              </tr>
            </thead>
            {data?.map((item, id) => (
              <tbody key={id} className="bg-white">
                <tr className="text-gray-700">
                  <td className="px-4 py-3 border">
                    <div className="flex items-center text-sm">
                      <div>
                        <p className="font-semibold text-black">{item.first}</p>
                        <p className="text-xs text-gray-600">{item.last}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-ms font-semibold border">
                    {item.company}
                  </td>
                  <td className="px-4 py-3 text-xs border">
                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                      {" "}
                      {item.number}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-sm border">{item.message}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
}
