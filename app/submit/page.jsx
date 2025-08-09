"use client"
import { useState, useEffect } from "react"
import blem from "blem"

import LinkedList from "#/components/LinkedList"
import { blemish } from "#/components/Bemoan"
import Logo from "#/components/EsaLogo"
import { LINKS, FOOTER_LINKS } from "#/HARDCODED_GARBAGE"
import Heading from "#/components/Heading"
import Page from "#/components/Page"
import { useAPI } from '#/utilities/fetch'
import Form from '#/components/Form/Form'

const bem = blem('SubmitPage')
const Biv = blemish(bem)
import '#/app/submit/page.scss'

const SUBMIT_FIELDS = [
  {name: 'location', label: 'Location'},
  {name: 'image', label: 'Image'},
]

const SubmitPage = () => {
  const $page = useAPI('/api/homepage')
  return (
    <Page $data={$page.data}>
      {$page?.data ? (
      <>
      <Form fields={SUBMIT_FIELDS}/>
      </>
      ) : null}
    </Page>
  )
}

export default SubmitPage
