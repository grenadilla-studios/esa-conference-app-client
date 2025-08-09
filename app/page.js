"use client"
import { useState, useEffect } from "react"
import blem from "blem"

import LinkedList from "#/components/LinkedList"
import { div as Biv } from "#/components/Bemoan"
import Logo from "#/components/EsaLogo"
import { LINKS, FOOTER_LINKS } from "#/HARDCODED_GARBAGE"
import Heading from "#/components/Heading"
import Page from "#/components/Page"
import { useAPI } from '#/utilities/fetch'

import { bem } from "#/utilities/style"

const App = () => {
  const $page = useAPI('/api/homepage')
  console.log("$PAGE", $page)
  return (
    <Page $data={$page.data}>
      {$page?.data ? (
      <>
      <Heading as="h1" bem={bem}>
        {$page.data.title}
      </Heading>
      <h2 className={bem('heading', 'h2')}>
        {$page.data.subtitle}
      </h2>
      <p className={bem('cta')}>
        {$page.data.text}
      </p>
      </>
      ) : null}
    </Page>
  )
}

export default App
