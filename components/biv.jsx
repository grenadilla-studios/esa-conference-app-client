import blem from 'blem'


export const Biv = ({ e = "", m = "", children, bem = blem('ScavengerHunt') }) => (
  <div className={bem(e, m)}>{children}</div>
);

export default Biv
