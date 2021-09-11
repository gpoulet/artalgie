import React, { memo, ReactElement } from "react";

import {
  ContactItem,
} from '../../constants'

export interface FieldProps {
  contact: ContactItem
}

const Field = ({contact: {icon, label, link, value, target}}: FieldProps): ReactElement =>
  <p className="valign-wrapper"><i className="material-icons contact">{icon}</i>
    {label}&nbsp;:&nbsp;
    <a href={link} target={target} className="truncate">{value}</a>
  </p>

export default memo(Field);
