

interface TableCellProfileImgProps {
  length: number
}

const TableCellProfileImg = ({ length }: TableCellProfileImgProps) => {
  const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500'];

  return (
    <div className="flex flex-row relative justify-left">

      <div className="flex flex-row relative justify-left">
        {Array.from({ length }, (_, index) => (
          <div
            key={index}
            className={`relative shadow-lg p-2.5 rounded-full border border-white hover:z-10 ${colors[index % colors.length]}`}
            style={{ marginLeft: '-5px' }}
          />
        ))}
      </div>

    </div>
  )
}

export default TableCellProfileImg
