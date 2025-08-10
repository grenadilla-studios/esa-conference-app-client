"use client"
import { useState, useEffect } from "react"
import blem from "blem"

import LinkedList from "#/components/LinkedList"
import { blemish } from "#/components/Bemoan"
import Logo from "#/components/EsaLogo"
import { LINKS, FOOTER_LINKS } from "#/HARDCODED_GARBAGE"
import Heading from "#/components/Heading"
import Page from "#/components/Page"
import { useAPI } from "#/utilities/fetch"

const bem = blem("Homepage")
const Biv = blemish(bem)
import "#/app/page.scss"

const App = () => {
  const $page = useAPI("/api/homepage")
  return (
    <Page $data={$page.data}>
      {$page?.data ? (
        <>
          <Heading as="h1" bem={bem}>
            {$page.data.title}
          </Heading>
          <h2 className={bem("heading", "h2")}>{$page.data.subtitle}</h2>
          <Biv e="content">
            <img src={$page.data.image} className={bem("image")} />
            <p className={bem("cta")}>{$page.data.text}</p>
          </Biv>
        </>
      ) : null}
    </Page>
  )
}

export default App
