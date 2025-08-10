import { useState, useEffect } from "react"
import { Form as HouseForm, Field as HouseField } from "houseform"
import { z } from "zod"
import blem from "blem"

import { blemish } from "#/components/Bemoan"
import { api } from "#/utilities/fetch"
import { useLocation } from "#/utilities/geo"
import "#/components/Form/style.scss"

const defaultOnSubmit = function huh(outcome, formRef) {
  console.log("OUTCOME", outcome)
}

const bem = blem("Form")
const Biv = blemish(bem)

const Geolocation = ({ value, setValue }) => {
  const $geo = useLocation()
  const [$init, $setInit] = useState(false)
  useEffect(() => {
    if ($geo.loaded && $geo.position && !$init) {
      const raw = JSON.parse(JSON.stringify($geo.position))
      console.log("HUHUHUHUH", raw)
      setValue(raw)
      $setInit(true)
    }
  }, [$geo, setValue, $setInit, $init])
  return !$geo.loaded ? (
    <button onClick={$geo.check
    }>Geolocate me!</button>
  ) : (
    <pre>
      <code>{JSON.stringify($geo.position, null, 2)}</code>
    </pre>
  )
}

const Field = ({
  kind = "text",
  name,
  label,
  placeholder,
  onChangeValidate,
}) => (
  <HouseField name={name} onChangeValidate={onChangeValidate}>
    {({ value, setValue, onBlur, errors }) => {
      const inputProps = {
        name,
        className: bem("field-input", kind),
        type: kind,
        value,
        onBlur,
        onChange: (e) => setValue(e.target.value),
        placeholder,
      }
      return (
        <Biv e="field" m={kind}>
          <label className={bem("field-label")}>
            <span className={bem("field-label-text")}>{label}</span>
            {kind === "geolocation" ? (
              <Geolocation {...inputProps} setValue={setValue} />
            ) : (
              <input {...inputProps} />
            )}
          </label>
          {errors.map((e) => (
            <Biv e="error" key={e}>
              {e}
            </Biv>
          ))}
        </Biv>
      )
    }}
  </HouseField>
)

export const Form = ({ id, onSubmit, fields = [] }) => {
  const formId = id + "-form"
  const submitId = id + "-submit"
  return (
    <Biv e="" id={id}>
      <HouseForm onSubmit={onSubmit}>
        {({ isValid, submit }) => (
          <form
            className={bem("form")}
            id={formId}
            onSubmit={(e) => {
              e.preventDefault()
              submit()
            }}
          >
            <Biv e="wrapper">
              {fields.map((f) => (
                <Field key={f.name} {...f} />
              ))}
              <button
                id={submitId}
                className={bem("button", "submit")}
                disabled={!isValid}
                type="submit"
              >
                Submit
              </button>
            </Biv>
          </form>
        )}
      </HouseForm>
    </Biv>
  )
}

export default Form
