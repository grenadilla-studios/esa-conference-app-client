"use client"
import { useState, useEffect } from "react"
import blem from "blem"

import LinkedList from "#/components/LinkedList"
import Logo from "#/components/EsaLogo"
import { LINKS, FOOTER_LINKS } from "#/data/constants"
import Heading from "#/components/Heading"
import Burdened from "#/components/Burdened"
import { blemish } from "#/components/Bemoan"
import RefGrid from "#/components/RefGrid"

import { bem as DEFAULT_BEM } from "#/utilities/style"

import "#/components/Page.scss"

const REF_COLUMNS = [
  { id: "col-left", offset: "1rem", position: "left" },
  { id: "col-right", offset: "1rem", position: "right" },
  { id: "col-center", offset: "50%", position: "left", color: "cyan" },
]
const REF_ROWS = [
  { id: "row-top", offset: "1rem", position: "top" },
  { id: "row-bottom", offset: "1rem", position: "bottom" },
  { id: "row-center", offset: "50%", position: "top", color: "cyan" },
]

const Page = ({ bem = DEFAULT_BEM, children: main = null, $data = [] }) => {
  const Biv = blemish(bem)
  const Sub = (
    <>
      <Biv e="header">
        <Logo className={bem("logo", ["header"])} />
      </Biv>
      <nav className={bem("nav")}>
        <LinkedList links={LINKS} />
      </nav>
      <Biv e="main">{main}</Biv>
      <Biv e="footer">
        <Heading as="h6">Links</Heading>
        <LinkedList links={FOOTER_LINKS} ul="links" li="link-item" />
      </Biv>
    </>
  )
  return (
    <>
      <RefGrid columns={REF_COLUMNS} rows={REF_ROWS} />
      <Biv e="">
        <Burdened>{[{ title: "RAW DATA", load: $data }, Sub]}</Burdened>
      </Biv>
    </>
  )
}

export default Page
