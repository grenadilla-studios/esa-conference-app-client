import {bem as DEFAULT_BEM} from '#/utilities/style'

export const Leaves = ({ className: clx = "svg", bem = DEFAULT_BEM }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 51 51"
    className={bem(clx, ["leaves"])}
  >
    <path
      className={bem("leaf", ["c"])}
      d="M25.35,25.35L33.71,25.35C43.09,25.35 50.71,32.97 50.71,42.35L50.71,50.71L42.35,50.71C32.97,50.71 25.35,43.09 25.35,33.71L25.35,25.35Z"
    />
    <path
      className={bem("leaf", ["b"])}
      d="M42.35,0L50.71,0L50.71,8.36C50.71,17.74 43.09,25.36 33.71,25.36L25.35,25.36L25.35,17C25.35,7.62 32.97,0 42.35,0Z"
    />
    <path
      className={bem("leaf", ["a"])}
      d="M0,0L8.36,0C17.74,0 25.36,7.62 25.36,17L25.36,25.36L17,25.36C7.62,25.36 0,17.74 0,8.36L0,0Z"
    />
  </svg>
);

export default Leaves
