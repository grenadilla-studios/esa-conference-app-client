"use client"
import { propOr, __ as $ } from "ramda"
import { useState, useEffect, use } from "react"
import blem from "blem"

import LinkedList from "#/components/LinkedList"
import { blemish } from "#/components/Bemoan"
import Logo from "#/components/EsaLogo"
import { FAKE_SUBMISSIONS, LINKS, FOOTER_LINKS } from "#/HARDCODED_GARBAGE"
import Heading from "#/components/Heading"
import Page from "#/components/Page"
import Form from "#/components/Form/Form"
import "../page.scss"

// import { Temporal } from "temporal-polyfill"

import { bem as DEFAULT_BEM } from "#/utilities/style"

const formatDate = (date) => Date(date).toString()

const detailPairs = [
  ["Name", "name"],
  ["Location", "location"],
  ["Date", "date", formatDate],
]
const bem = blem("PersonEditPage")
const Biv = blemish(bem)

const PERSON_FIELDS = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "displayName", label: "Username" },
  { name: "profileImage", label: "Profile Image", kind: "file" },
]

const profileEditHandler = (id) => async (outcome, formRef) => {
  const formId = id + "-form"
  const submitId = id + "-submit"
  const form = document.getElementById(formId)
  const sub = document.getElementById(submitId)
  const formData = new FormData(form, sub)
  const formObj = objectifyForm(formData)
  const cleaned = { ...outcome, ...formObj }
  console.log("CLEANED", cleaned)
  const response = await fetch(api("/api/observation"), {
    method: "POST",
    body: cleaned,
  })
  const json = response.json()
  console.log("RESPONSE!", response, json)
}

const PersonEditPage = ({ params }) => {
  const { person } = use(params)
  const [$person, $setPerson] = useState(null)
  useEffect(() => {
    if (!$person && person) {
      // fetch()
      $setPerson({ name: person, submissions: FAKE_SUBMISSIONS })
    }
  }, [person, $person, $setPerson])

  return (
    <Page bem={DEFAULT_BEM}>
      <Heading as="h1">Edit Profile</Heading>
      <Form
        fields={PERSON_FIELDS}
        id="profile"
        onSubmit={profileEditHandler("profile")}
        submitText="Update"
      />
    </Page>
  )
}

export default PersonEditPage
