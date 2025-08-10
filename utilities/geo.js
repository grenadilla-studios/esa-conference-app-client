import { useEffect, useState, useCallback } from "react"

const askLocation = (callback) =>
  navigator?.geolocation?.getCurrentPosition(callback)

export const useLocation = () => {
  const [$initialized, $setInitialized] = useState(false)
  const [$allowed, $setAllowed] = useState(true)
  const [$coords, $setCoords] = useState(null)
  const check = useCallback(() => {
    if (!$initialized) {
      if (!navigator.geolocation) {
        $setAllowed(false)
      } else {
        askLocation($setCoords)
      }
      $setInitialized(true)
    }
  }, [$setCoords, $initialized, $setAllowed, $setInitialized])

  return { position: $coords, allowed: $allowed, loaded: $initialized, check }
}
