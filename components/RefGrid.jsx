import blem from "blem"
import "#/components/RefGrid.scss"

const bem = blem("Debug")

export const RefLine = ({ className: clx, id, offset, position, color }) => {
  const style = { [position]: offset }
  if (color) {
    style[`border-${position}-color`] = color
  }
  return <div className={clx} style={style} />
}

export const RefGrid = ({ columns = [], rows = [] }) => (
  <div className={bem("")}>
    <div className={bem("wrapper")}>
      {columns.map((c) => (
        <RefLine
          className={bem("column", [`column-${c.id}`])}
          key={c.id}
          {...c}
        />
      ))}
      {rows.map((r) => (
        <RefLine className={bem("row", [`row-${r.id}`])} key={r.id} {...r} />
      ))}
    </div>
  </div>
)

export default RefGrid
