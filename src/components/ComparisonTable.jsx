import top5 from "../data/top5"

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="w-full border text-sm bg-white">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-2">Producto</th>
            <th className="p-2">Precio</th>
            <th className="p-2">Ver</th>
          </tr>
        </thead>
        <tbody>
          {top5.map(item => (
            <tr key={item.rank} className="border-t">
              <td className="p-2">{item.title}</td>
              <td className="p-2">{item.price}</td>
              <td className="p-2">
                <a
                  href={item.affiliate_url}
                  target="_blank"
                  rel="nofollow sponsored"
                  className="text-yellow-600 font-semibold"
                >
                  Amazon →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
