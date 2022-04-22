import React from "react"
import { Map, Marker } from "pigeon-maps"

export default function MyMap({height, defaultCenter, defaultZoom, width, anchor}) {
  return (
    <Map height={height} defaultCenter={defaultCenter} defaultZoom={defaultZoom}>
      <Marker width={width} anchor={anchor} />
    </Map>

//before
//     <Map height={300} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
//     <Marker width={50} anchor={[50.879, 4.6997]} />
//     </Map>
  )
}