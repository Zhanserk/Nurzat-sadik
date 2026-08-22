// src/FilesPage.jsx
import { useState, useMemo } from "react";
import { sections, BASE, GROUP_DEFS, detectGroup, detectYear } from "./data/filesData";
import "./FilesPage.css";

function getExt(name) {
  const m = name.match(/\.([a-zA-Z0-9]+)$/);
  return m ? m[1].toLowerCase() : "";
}

function buildPath(folder, file) {
  const parts = (BASE + "/" + folder + "/" + file).split("/");
  return parts.map(encodeURIComponent).join("/");
}

const TYPE_FILTERS = [
  { id: "all", label: "Барлығы" },
  { id: "pdf", label: "PDF" },
  { id: "word", label: "Word" },
  { id: "excel", label: "Excel" },
];

function matchesType(ext, filter) {
  if (filter === "all") return true;
  if (filter === "pdf") return ext === "pdf";
  if (filter === "word") return ext === "docx" || ext === "doc";
  if (filter === "excel") return ext === "xlsx" || ext === "xls";
  return true;
}

// Жыл бойынша сүзгі (жоғарыдағы жалпы сүзгі): белгілі бір жыл таңдалса,
// тек сол жылға сәйкес келетін файлдар көрсетіледі.
function matchesYear(fileName, yearLabel) {
  if (yearLabel === "all") return true;
  const y = detectYear(fileName);
  return !!y && y.label === yearLabel;
}

// Топ бойынша сүзгі (карточка ішіндегі жеке таңдау үшін): белгілі бір топ
// таңдалса, сол топқа тиесілі файлдар ЖӘНЕ ешбір топқа арнайы тиесілі емес
// жалпы құжаттар көрсетіледі — өйткені олар бүкіл балабақшаға ортақ.
function matchesGroup(fileName, groupId) {
  if (groupId === "all") return true;
  const g = detectGroup(fileName);
  if (!g) return true;
  return g.id === groupId;
}

export default function FilesPage() {
  const [query, setQuery] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [yearFilter, setYearFilter] = useState("all");

  // "groupPicker" карточкалары үшін әр карточканың ӨЗІНДІК топ таңдауы.
  const [localGroupFilters, setLocalGroupFilters] = useState({});

  // Барлық құжаттардан кездесетін жылдарды жинап, сүзгі тізімін құрамыз
  const yearOptions = useMemo(() => {
    const set = new Set();
    sections.forEach((section) =>
      section.folders.forEach((group) =>
        group.files.forEach((f) => {
          const y = detectYear(f);
          if (y) set.add(y.label);
        })
      )
    );
    return [...set].sort((a, b) => b.localeCompare(a, "kk", { numeric: true }));
  }, []);

  const filteredSections = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sections
      .map((section) => ({
        ...section,
        folders: section.folders
          .map((group) => ({
            ...group,
            files: group.files.filter((f) => {
              const ext = getExt(f);
              return (
                f.toLowerCase().includes(q) &&
                matchesType(ext, typeFilter) &&
                matchesYear(f, yearFilter)
              );
            }),
          }))
          .filter((group) => group.files.length > 0),
      }))
      .filter((section) => section.folders.length > 0);
  }, [query, typeFilter, yearFilter]);

  let totalShown = 0;

  return (
    <div className="files-page">
      <div className="files-top-card">
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
            {TYPE_FILTERS.map((f) => (
              <button
                key={f.id}
                className={`filter-tab ${typeFilter === f.id ? "active" : ""}`}
                onClick={() => setTypeFilter(f.id)}
                type="button"
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="filter-tabs wrap-tabs">
            <button
              className={`filter-tab year-tab ${yearFilter === "all" ? "active" : ""}`}
              onClick={() => setYearFilter("all")}
              type="button"
            >
              Барлық жылдар
            </button>
            {yearOptions.map((y) => (
              <button
                key={y}
                className={`filter-tab year-tab ${yearFilter === y ? "active" : ""}`}
                onClick={() => setYearFilter(y)}
                type="button"
              >
                {y}
              </button>
            ))}
          </div>
        </div>
      </div>

      <main>
        {filteredSections.map((section) => (
          <section className="doc-section" key={section.title}>
            <h2 className="section-title">
              <span className="section-icon">{section.icon}</span>
              {section.title}
            </h2>

            {section.folders.map((group, idx) => {
              const key = section.title + "-" + group.title + "-" + idx;
              const localGroup = localGroupFilters[key] || "all";

              const visibleFiles = group.groupPicker
                ? group.files.filter((f) => matchesGroup(f, localGroup))
                : group.files;

              totalShown += visibleFiles.length;

              return (
                <div className="folder" key={key}>
                  <h3 className="folder-title">
                    <span className="folder-icon">{group.icon || "📁"}</span>
                    {group.title || group.folder}{" "}
                    <span className="count">({visibleFiles.length})</span>
                  </h3>

                  {group.groupPicker && (
                    <div className="filter-tabs local-group-tabs">
                      <button
                        className={`filter-tab group-tab small-tab ${
                          localGroup === "all" ? "active" : ""
                        }`}
                        onClick={() =>
                          setLocalGroupFilters((prev) => ({ ...prev, [key]: "all" }))
                        }
                        type="button"
                      >
                        Барлығы
                      </button>
                      {GROUP_DEFS.map((g) => (
                        <button
                          key={g.id}
                          className={`filter-tab group-tab small-tab ${
                            localGroup === g.id ? "active" : ""
                          }`}
                          onClick={() =>
                            setLocalGroupFilters((prev) => ({ ...prev, [key]: g.id }))
                          }
                          type="button"
                        >
                          {g.label}
                        </button>
                      ))}
                    </div>
                  )}

                  <div className="file-list">
                    {visibleFiles.map((file) => {
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
                </div>
              );
            })}
          </section>
        ))}

        {totalShown === 0 && <p className="empty-msg">Ешнәрсе табылмады.</p>}
      </main>

      <footer>Нұрзат балабақшасы — барлық құқықтар қорғалған</footer>
    </div>
  );
}