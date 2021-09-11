import React, { memo, ReactElement } from "react";

import Field from "./Field";

import { CONTACTS, LINK_CONTACT } from '../../constants'

const Fields = (): ReactElement =>
  <>
    <span className="card-title">{LINK_CONTACT}</span>
    {CONTACTS.map(contact => <Field key={contact.label} contact={contact}/>)}
  </>

export default memo(Fields);
