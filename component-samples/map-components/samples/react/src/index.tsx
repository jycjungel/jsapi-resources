/* Copyright 2024 Esri
 *
 * Licensed under the Apache License Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Individual imports for each component used in this sample
import "@arcgis/map-components/dist/components/arcgis-map";
import "@arcgis/map-components/dist/components/arcgis-legend";
import "@arcgis/map-components/dist/components/arcgis-search";
import { ArcgisMap, ArcgisSearch, ArcgisLegend } from "@arcgis/map-components-react";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ArcgisMap
      itemId="d5dda743788a4b0688fe48f43ae7beb9"
      onArcgisViewReadyChange={(event: any) => {
        console.log("MapView ready", event);
      }}
    >
      <ArcgisSearch position="top-right"></ArcgisSearch>
      <ArcgisLegend position="bottom-left"></ArcgisLegend>
    </ArcgisMap>
  </React.StrictMode>
);
