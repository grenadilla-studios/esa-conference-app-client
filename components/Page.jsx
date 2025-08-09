"use client";
import { useState, useEffect } from "react";
import blem from "blem";

import LinkedList from "#/components/LinkedList";
import Logo from "#/components/EsaLogo";
import { LINKS, FOOTER_LINKS } from "#/HARDCODED_GARBAGE";
import Heading from "#/components/Heading";

import { bem as DEFAULT_BEM, blemish } from "#/utilities/style";

const Page = ({bem = DEFAULT_BEM}) => {
const Biv = blemish(bem)
  return (
    <Biv e="">
      <Burdened>
        {[
          {title: "RAW DATA", load: $data},
         (
         <>
<Biv e="header">
        <Logo className={bem("logo", ["header"])} />
      </Biv>
      <nav className={bem("nav")}>
        <LinkedList links={LINKS} />
      </nav>
      <Biv e="main">
        <Heading as="h1" bem={bem}>
          Scavenger Hunt
        </Heading>
        <Biv e="challenge">
          <div className={bem("control-panel", ["search"])}>
            <button className={bem("toggle", ["people"])}>People</button>
            <button className={bem("toggle", ["plants"])}>Plants</button>
          </div>

          <Biv e="plants">
            {($data || []).map((raw) => {
              const {
                id,
                common_name: name,
                default_image: image,
                other_name: alts,
              } = raw;
              const { thumbnail = "" } = image ?? {};
              return (
                <Biv e="plant" m={name} key={id + name}>
                  <img
                    src={thumbnail}
                    className={bem("thumbnail", "plant")}
                    alt={name}
                  />
                  <strong className={bem("plant-label")}>{name}</strong>
                  {alts.length > 0 && (
                    <Biv e="plant-details">
                      {alts.map((a) => (
                        <em key={a} className={bem("plant-alt")}>
                          {a}
                        </em>
                      ))}
                    </Biv>
                  )}
                </Biv>
              );
            })}
          </Biv>
        </Biv>
      </Biv>
      <Biv e="footer">
        <Heading as="h6">Links</Heading>
        <LinkedList links={FOOTER_LINKS} ul="links" li="link-item" />
      </Biv>
    </Biv>
    </>
         ) 
          ]}
   </Burdened>
  );
};

export default App;
