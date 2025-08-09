"use client";
import { useState, useEffect } from "react";
import blem from "blem";

import LinkedList from "#/components/LinkedList";
import { Biv } from "#/components/Bemoan";
import Logo from "#/components/EsaLogo";
import { LINKS, FOOTER_LINKS } from "#/HARDCODED_GARBAGE";
import Heading from "#/components/Heading";

import { bem } from "#/utilities/style";

const App = () => {
  // to save some API calls, disable in real things
  const [$saveToLocalStorage, $setSaveToLocalStorage] = useState(true);
  const [$data, $setData] = useState([]);
  const [$loaded, $setLoaded] = useState(false);
  useEffect(() => {
    if ($saveToLocalStorage && $loaded && $data.length > 0) {
      console.log("Saving data", $data);
      localStorage.setItem("plant-data", JSON.stringify($data));
    }
  }, [$saveToLocalStorage, $loaded, $data]);
  useEffect(() => {
    const run = async () => {
      if (!$loaded) {
        if ($saveToLocalStorage) {
          const rawSeed = localStorage.getItem("plant-data");
          const plantData = rawSeed ? JSON.parse(rawSeed) : [];
          if (plantData.length) {
            console.log("LOADED DATA FROM STORAGE");
            $setData(plantData);
            $setLoaded(true);
            return;
          }
        }
        const data = await load();
        const json = await data.json();
        console.log("JSON", json);
        $setData(json.data);
        $setLoaded(true);
        console.log("DATA LOADED");
      }
    };
    run();
  }, [$loaded, $setData, $setLoaded, $saveToLocalStorage, $loaded]);
  return (
    <Biv e="">
      <details>
        <summary>RAW DATA</summary>
        <pre>PL</pre>
      </details>
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
  );
};

export default App;
