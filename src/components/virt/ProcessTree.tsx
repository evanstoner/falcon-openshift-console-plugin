// import { TreeView } from '@patternfly/react-core';
import * as React from 'react';

function makeTreeItem(processDetails) {
  return {
    name: processDetails.cmdline,
    id: processDetails.process_id,
    children: [],
  };
}

function makeProcessTreeUl(options) {
  return (
    <ul>
      <li>
        <pre>{options[0].name}</pre>
        {options[0].children.length > 0 && makeProcessTreeUl(options[0].children)}
      </li>
    </ul>
  );
}

export default function ProcessTree({ eppAlert }) {
  let options = [makeTreeItem(eppAlert)];

  if (eppAlert.parent_details) {
    let parent = makeTreeItem(eppAlert.parent_details);
    parent.children = options;
    options = [parent];
  }

  if (eppAlert.grandparent_details) {
    let grandparent = makeTreeItem(eppAlert.grandparent_details);
    grandparent.children = options;
    options = [grandparent];
  }

  //FIXME: styling is not correct, skipping TreeView in favor of a basic list for now
  // return <TreeView data={options} allExpanded={true} hasSelectableNodes={false} hasGuides={true} />;

  return makeProcessTreeUl(options);
}