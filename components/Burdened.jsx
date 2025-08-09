import blem from "blem"
import "#/components/Debug.scss"

const bem = blem("Data")

export const Burden = ({ title, className: clx, load = {} }) => (
  <details className={bem("details")}>
    <summary className={bem("summary")}>{title}</summary>
    <pre className={bem("body")}>{JSON.stringify(load, null, 2)}</pre>
  </details>
)

export const Burdened = ({ children, className }) => (
  <>
    <Burden {...children[0]} />
    {children[1]}
  </>
)

export default Burdened
