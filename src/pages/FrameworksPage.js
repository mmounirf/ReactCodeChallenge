import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import "FrameworksPage.scss";
import parse from "html-react-parser";

const highlight = (needle, haystack) => {
  return needle
    ? haystack.replace(new RegExp(needle, "gi"), str => `<span>${str}</span>`)
    : haystack;
};

const FrameworksPage = observer(({ frameworks }) => {
  const searchList = query => {
    return frameworks.store.filteredData.length ? (
      <ul className="frameworks__list">
        {frameworks.store.filteredData.map((item, i) => {
          return (
            <li className="framework" key={i}>
              <p className="framework__title">
                {parse(highlight(query, item.title))}
              </p>
              <p className="framework__description">
                {parse(highlight(query, item.description))}
              </p>
            </li>
          );
        })}
      </ul>
    ) : (
      <div className="frameworks__no-results">
        <p>
          No results found for "<strong>{query}</strong>"
        </p>
      </div>
    );
  };

  const [query, setQuery] = useState("");
  useEffect(() => {
    Object.assign(frameworks.store, { query });
  }, [query]);

  return (
    <div className="frameworks">
      <h1>Frameworks Page</h1>
      <input
        className="frameworks__search"
        type="text"
        placeholder="Search..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      {searchList(query)}
    </div>
  );
});
export default FrameworksPage;
