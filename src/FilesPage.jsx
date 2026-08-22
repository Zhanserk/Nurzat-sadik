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

export default function FilesPage() {
  const [query, setQuery] = useState("");

  const groups = useMemo(() => {
    const q = query.trim().toLowerCase();
    return data
      .map((group) => ({
        ...group,
        files: group.files.filter((f) => f.toLowerCase().includes(q)),
      }))
      .filter((group) => group.files.length > 0);
  }, [query]);

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