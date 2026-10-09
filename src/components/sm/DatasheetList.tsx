import React from "react";
import { Download, FileText } from "lucide-react";
import { PRODUCTS_DATA } from "../../data/skymirrData";
import { showToast } from "./bus";

/* Datasheet downloads list. Built only from the datasheetUrl values already in PRODUCTS_DATA.
   File size is not stored anywhere in the project, so none is shown. */
export const DatasheetList: React.FC = () => {
  const rows = PRODUCTS_DATA.filter((p) => p.datasheetUrl);
  if (!rows.length) return null;
  const fileName = (url: string) => decodeURIComponent(url.split("/").pop() || url);
  return (
    <ul className="sm-ds">
      {rows.map((p) => (
        <li key={p.id} className="sm-ds-row">
          <span className="sm-ds-ico"><FileText aria-hidden="true" /></span>
          <span className="sm-ds-txt"><b>{p.name}</b><small>{fileName(p.datasheetUrl!)}</small></span>
          <a className="sm-ds-btn" href={p.datasheetUrl} target="_blank" rel="noreferrer"
             aria-label={`Download datasheet: ${p.name}`} onClick={() => showToast("Download started")}>
            <Download aria-hidden="true" />
          </a>
        </li>
      ))}
    </ul>
  );
};
