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

const bem = blem("LeaderboardPage")
const Biv = blemish(bem)

const LEADERBOARD_FAKES = [
  {
    id: 0,
    name: "Redwood Bonsai",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/US_199_Redwood_Highway.jpg/1024px-US_199_Redwood_Highway.jpg",
    submitter: "brekk",
    date: Date.now(),
  },

  {
    id: 1,
    name: "Redwood Bonsai",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/US_199_Redwood_Highway.jpg/1024px-US_199_Redwood_Highway.jpg",
    submitter: "brekk",
    date: Date.now(),
  },
  {
    id: 2,
    name: "Redwood Bonsai",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/US_199_Redwood_Highway.jpg/1024px-US_199_Redwood_Highway.jpg",
    submitter: "brekk",
    date: Date.now(),
  },
]

const MissingImage = () => <Biv e="missing-image" />

const LeaderboardPage = ({ params }) => {
  // const { person } = use(params)
  const [$leaderboard, $setLeaderboard] = useState(LEADERBOARD_FAKES)
  return (
    <Page>
      <Biv e="">
        <Heading as="h1">Leaderboard</Heading>
        <ol className={bem("listing")}>
          {$leaderboard.map((e) => (
            <li className={bem("list-item")} key={e.id}>
              <Biv e="entry">
                {e.image ? (
                  <img className={bem("thumbnail")} src={e.image} />
                ) : (
                  <MissingImage />
                )}
                {e.name}
              </Biv>
            </li>
          ))}
        </ol>
      </Biv>
    </Page>
  )
}

export default LeaderboardPage
