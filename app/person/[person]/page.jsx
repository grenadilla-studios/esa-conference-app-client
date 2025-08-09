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
import "./page.scss"

// import { Temporal } from "temporal-polyfill"

import { bem as DEFAULT_BEM } from "#/utilities/style"

const formatDate = (date) => Date(date).toString()

const detailPairs = [
  ["Name", "name"],
  ["Location", "location"],
  ["Date", "date", formatDate],
]
const bem = blem("PersonPage")

const Biv = blemish(bem)

const Submission = ({ $submission: s }) => (
  <li key={s.id} className={bem("submission-item")}>
    <Biv className={bem("submission")}>
      {detailPairs.map(([v, k, accessor = propOr("N/A", k)]) => (
        <Biv key={s.id + k} e="submission-pair" m={k}>
          <strong className={bem("label", k)}>{v}</strong>
          <span className={bem("submission-name")}>{accessor(s)}</span>
        </Biv>
      ))}
    </Biv>
  </li>
)

const Person = ({ $person }) => (
  <div className={bem("person")}>
    <Heading as="h1" bem={bem}>
      {$person.name}
    </Heading>
    <Biv e="person">
      <ul className={bem("submissions")}>
        {$person.submissions
          ? $person.submissions.map((s) => (
              <Submission $submission={s} key={s.id} />
            ))
          : null}
      </ul>
    </Biv>
  </div>
)

const PersonPage = ({ params }) => {
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
      {!!$person ? (
        <Person $person={$person} />
      ) : (
        <Biv e="missing">No user by that name</Biv>
      )}
    </Page>
  )
}

export default PersonPage
