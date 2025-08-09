import blem from "blem"
import { bem as GLOBAL_BEM } from "#/utilities/style"

export const Biv = ({ b = "", e = "", m = "", children, bem = blem(b) }) => (
  <div className={bem(e, m)}>{children}</div>
)

export const blemish = (bem) => (rest) => <Biv {...rest} bem={bem} />

export const hex = (b) => blemish(blem(b))

export const div = blemish(GLOBAL_BEM)
export default Biv
