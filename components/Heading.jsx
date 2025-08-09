import blem from 'blem'
import { Biv } from "#/components/Bemoan"
import Leaves from '#/components/Leaves'

const ALLOWED_HEADINGS = ["h1", "h2", "h3", "h4", "h5", "h6"]

export const Heading = ({ as: el = "h1", children,  bem = blem("ScavengerHunt")  }) => {
  const px = { className: bem("heading-text", [el]), children };
  if (!ALLOWED_HEADINGS.includes(el)) {
    return null;
  }
  return (
    <Biv e="heading">
      {el === "h1" ? (
        <h1 {...px} />
      ) : el === "h2" ? (
        <h2 {...px} />
      ) : el === "h3" ? (
        <h3 {...px} />
      ) : el === "h4" ? (
        <h4 {...px} />
      ) : el === "h5" ? (
        <h5 {...px} />
      ) : (
        <h6 {...px} />
      )}
      <Leaves />
    </Biv>
  );
};
export default Heading
