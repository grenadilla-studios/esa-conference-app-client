"use client"
import { useState, useEffect } from "react"
import blem from "blem"

import LinkedList from "#/components/LinkedList"
import { blemish } from "#/components/Bemoan"
import Logo from "#/components/EsaLogo"
import { LINKS, FOOTER_LINKS } from "#/HARDCODED_GARBAGE"
import Heading from "#/components/Heading"
import Page from "#/components/Page"

import { bem as DEFAULT_BEM } from "#/utilities/style"

const PersonPage = ({params}) => {
  const Biv = blemish(bem)
const {person}= await params
  const [$person, $setPerson] = useState(null)
  useEffect(() => {
    if (!$person && person) {
      // fetch()
    }
  }, [person, $person, $setPerson])
  return (
    <Page bem={DEFAULT_BEM}>
{$person ? (
<>
  <Heading as="h1" bem={bem}>
    {$person}
  </Heading>
  <Biv e="person">
  </Biv>
</>
) : <Biv e='missing'>No user by that name</Biv>}
    </Page>
  )
}

export default App
