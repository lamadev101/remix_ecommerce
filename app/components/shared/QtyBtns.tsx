
interface Props {
  qty: number;
  setQty: (qty: number | ((prevQty: number) => number)) => void;
}

const QtyBtns = ({ qty, setQty }: Props) => {

  const qtyHandler = (sign: string) => {
    if (sign === "plus")
      setQty(prev => prev + 1)
    if (sign === "minus")
      setQty(prev => prev > 1 ? prev - 1 : prev)
  }
  return (
    <div className="flex items-center gap-2">
      <button onClick={() => qtyHandler("minus")} className="hover:shadow-md px-4 py-2 bg-slate-300 rounded-md">-</button>
      <span className="px-4 py-2 border border-slate-200">{qty}</span>
      <button onClick={() => qtyHandler("plus")} className="hover:shadow-md px-4 py-2 bg-slate-300 rounded-md">+</button>
    </div>
  )
}

export default QtyBtns