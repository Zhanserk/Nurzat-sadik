// src/FilesPage.jsx
import { useState, useMemo } from "react";
import { data, BASE } from "./data/filesData";
import "./FilesPage.css";

function getExt(name) {
  const m = name.match(/\.([a-zA-Z0-9]+)$/);
  return m ? m[1].toLowerCase() : "";
}

function buildPath(folder, file) {
  const parts = (BASE + "/" + folder + "/" + file).split("/");
  return parts.map(encodeURIComponent).join("/");
}

const FILTERS = [
  { id: "all", label: "Барлығы" },
  { id: "pdf", label: "PDF" },
  { id: "word", label: "Word" },
  { id: "excel", label: "Excel" },
];

function matchesFilter(ext, filter) {
  if (filter === "all") return true;
  if (filter === "pdf") return ext === "pdf";
  if (filter === "word") return ext === "docx" || ext === "doc";
  if (filter === "excel") return ext === "xlsx" || ext === "xls";
  return true;
}

export default function FilesPage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data
      .map((group) => ({
        ...group,
        files: group.files.filter((f) => {
          const ext = getExt(f);
          return f.toLowerCase().includes(q) && matchesFilter(ext, filter);
        }),
      }))
      .filter((group) => group.files.length > 0);
  }, [query, filter]);

  const totalShown = groups.reduce((sum, g) => sum + g.files.length, 0);

  return (
    <div className="files-page">
      <header className="files-header">
        <h1>Нұрзат балабақшасы — Құжаттар</h1>
        <p>Файлды ашу үшін оның атауын басыңыз.</p>
      </header>

      <div className="search-wrap">
        <input
          id="search"
          type="text"
          placeholder="Файл атауы бойынша іздеу..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="filter-tabs">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`filter-tab ${filter === f.id ? "active" : ""}`}
              onClick={() => setFilter(f.id)}
              type="button"
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <main>
        {groups.map((group) => (
          <section className="folder" key={group.folder}>
            <h2 className="folder-title">
              📁 {group.folder}{" "}
              <span className="count">({group.files.length})</span>
            </h2>
            <div className="file-list">
              {group.files.map((file) => {
                const ext = getExt(file);
                const path = buildPath(group.folder, file);
                return (
                  <a
                    className="file-item"
                    key={path}
                    href={path}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className={`file-ext ${ext}`}>{ext}</span>
                    <span className="file-name">{file}</span>
                  </a>
                );
              })}
            </div>
          </section>
        ))}

        {totalShown === 0 && (
          <p className="empty-msg">Ешнәрсе табылмады.</p>
        )}
      </main>

      <footer>Нұрзат бб — барлық құқықтар қорғалған</footer>
    </div>
  );
}