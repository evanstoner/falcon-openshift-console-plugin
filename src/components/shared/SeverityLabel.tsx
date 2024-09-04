import { Label } from '@patternfly/react-core';
import * as React from 'react';

export default function SeverityLabel({ name, text = null, showIcon = true, showColor = true }) {
  const n = (name || '').toLowerCase();

  const colors = {
    critical: 'red',
    high: 'orange',
    medium: 'gold',
    low: 'green',
    informational: 'blue',
  };

  const icons = {
    //TODO: PF critical icon isn't displayed
    // critical: 'pf-v5-pficon pf-v5-pficon-critical-risk',
    critical: 'fas fa-exclamation-triangle',
    high: 'fas fa-angle-double-up',
    medium: 'fas fa-equals',
    low: 'fas fa-angle-double-down',
    informational: 'fas fa-info',
  };

  const color = showColor && n in colors ? colors[n] : null;
  const iconElement =
    showIcon && n in icons ? (
      <span className="pf-v5-c-icon">
        <span className="pf-v5-c-icon__content">
          <i className={icons[n]}></i>
        </span>
      </span>
    ) : null;

  function capitalize(s: string) {
    if (s && s.length >= 2) {
      return s.charAt(0).toUpperCase() + s.substring(1).toLowerCase();
    } else {
      return s;
    }
  }

  return (
    <Label color={color} icon={iconElement}>
      {text != undefined ? text : capitalize(name)}
    </Label>
  );
}