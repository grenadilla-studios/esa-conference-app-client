"use client"
import { useState, useEffect } from "react"
import blem from "blem"

import LinkedList from "#/components/LinkedList"
import { blemish } from "#/components/Bemoan"
import Logo from "#/components/EsaLogo"
import { LINKS, FOOTER_LINKS } from "#/HARDCODED_GARBAGE"
import Heading from "#/components/Heading"
import Page from "#/components/Page"
import { useAPI, api } from "#/utilities/fetch"
import Form from "#/components/Form/Form"

const bem = blem("SubmitPage")
const Biv = blemish(bem)
import "#/app/submit/page.scss"

const SUBMIT_FIELDS = [
  { name: "geo", label: "Location", kind: "geolocation" },
  { name: "image", label: "Image", kind: "file" },
]

const objectifyForm = (fd) => {
  const stack = {}
  for (const [key, value] of fd.entries()) {
    stack[key] = value
  }
  return stack
}

const submissionHandler = (id) => async (outcome, formRef) => {
  const formId = id + "-form"
  const submitId = id + "-submit"
  const form = document.getElementById(formId)
  const sub = document.getElementById(submitId)
  const formData = new FormData(form, sub)
  console.log("FORM DATA", formData)

  const formObj = objectifyForm(formData)
  console.log("FORM OBJ", formObj)
  const { image, geo } = { ...outcome, ...formObj }
  console.log("GEO!", geo)
  const cleaned = {
    image,
    lat: geo?.coords?.latitude ?? -0,
    long: geo?.coords?.longitude ?? -0,
    // cheated values for now
    specimenId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    userId: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
  }
  console.log("CLEANED", cleaned)
  const response = await fetch(api("/api/observation"), {
    method: "POST",

    body: cleaned,
  })
  const json = response.json()
  console.log("RESPONSE!", response, json)
}

const SubmitPage = () => {
  const $page = useAPI("/api/homepage")
  return (
    <Page $data={$page.data}>
      <Heading as="h1">Submit an image</Heading>
      {$page?.data ? (
        <>
          <Form
            fields={SUBMIT_FIELDS}
            id="submission"
            onSubmit={submissionHandler("submission")}
          />
        </>
      ) : null}
    </Page>
  )
}

export default SubmitPage
