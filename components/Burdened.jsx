export const Burden = ({title, load}) => (
  <details>
    <summary>{title}</summary>
    <pre>{JSON.stringify(load, null, 2)}</pre>
  </details>
)

export const Burdened = ({children}) => <><Burden {...children[0]} />{children[1]}</>

export default Burdened
