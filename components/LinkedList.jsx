import { bem as DEFAULT_BEM} from "#/utilities/style"


export const LinkedList = ({ ul = "menu", li = "menu-item", links = [], bem = DEFAULT_BEM }) => (
  <ul className={bem(ul)}>
    {links.map(([key, href]) => (
      <li className={bem(li)} key={key+href}>
        <a href={href}>{key}</a>
      </li>
    ))}
  </ul>
);

export default LinkedList
