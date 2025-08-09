import { useState, useEffect } from 'react'
import { Form as HouseForm, Field as HouseField } from 'houseform'
import { z} from 'zod'
import blem from 'blem'

import { blemish } from "#/components/Bemoan"
import "#/components/Form/style.scss"

const defaultOnSubmit = (values) => alert(JSON.stringify(values))

const bem = blem('Form')
const Biv = blemish(bem)

const Field = ({name, label, placeholder, onChangeValidate }) => (
  <HouseField
    name={name}
    onChangeValidate={onChangeValidate}
  >
    {({ value, setValue, onBlur, errors }) => (
      <Biv e="field">
        <label className={bem('field-label')}>
          <span
className={bem('field-label-text')}>
          {label}
          </span>
          <input
className={bem('field-input')}
            value={value}
            onBlur={onBlur}
            onChange={(e) => setValue(e.target.value)}
            placeholder={placeholder}
          />
        </label>
        {errors.map((e) => (
          <Biv e="error" key={e}>{e}</Biv>
        ))}
      </Biv>
    )}
  </HouseField>
)

export const Form = ({onSubmit = defaultOnSubmit, fields = []}) => <Biv e="">
  <HouseForm onSubmit={onSubmit}>
    {({ isValid, submit }) => (
      <Biv e="wrapper">
        {fields.map(f => <Field key={f.name} {...f} />)} 
        <button className={bem('button', 'submit')}disabled={!isValid} type="submit">
          Submit
        </button>
      </Biv>
    )}
  </HouseForm>
</Biv>

export default Form
