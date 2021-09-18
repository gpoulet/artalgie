import React, { memo, ReactElement } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ContactItem } from '../../constants';

import "./_field.scss";

export interface FieldProps {
  contact: ContactItem
}

const Field = ({contact: {icon, label, link, value, target}}: FieldProps): ReactElement =>
  <p className="valign-wrapper field">
    <FontAwesomeIcon icon={icon} />
    {label}&nbsp;:&nbsp;
    <a href={link} target={target} className="truncate" rel="noopener noreferrer">{value}</a>
  </p>

export default memo(Field);
