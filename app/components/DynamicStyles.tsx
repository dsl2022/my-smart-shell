"use client"
import React, { useEffect } from 'react';
import command from '../../config.json';
import { Config } from '../types/config';

const DynamicStyles: React.FunctionComponent<{}> = () => {
  useEffect(() => {
    const style = document.createElement('style');
    document.head.appendChild(style);

    const commandTyped: Config = command as Config;
    const rules: string[] = [
      `body {background: ${commandTyped.colors.background}}`,
      `body {color: ${command.colors.foreground}}`,
      `input {background: ${command.colors.background}}`,
      `input {color: ${command.colors.prompt.input}}`,
      `.output {color: ${command.colors.prompt.input}}`,
      `#pre-host {color: ${command.colors.prompt.host}}`,
      `#host {color: ${command.colors.prompt.host}}`,
      `#pre-user {color: ${command.colors.prompt.user}}`,
      `#user {color: ${command.colors.prompt.user}}`,
      `#prompt {color: ${command.colors.prompt.default}}`,
      `pre {color: ${command.colors.banner}}`,
      `a {color: ${command.colors.link.text}}`,
      `a:hover {background: ${command.colors.link.highlightColor}}`,
      `a:hover {color: ${command.colors.link.highlightText}}`,
      `.command {color: ${command.colors.commands.textColor}}`,
      `.keys {color: ${command.colors.banner}}`,
    ];
    const styleSheet = style.sheet;
    if ( styleSheet) {
      rules.forEach((rule) => {
        styleSheet.insertRule(rule, styleSheet.cssRules.length);
      });

       // Insert border-related rules
       if (!command.colors.border.visible) {
        style.sheet.insertRule("#bars {display: none}");
        style.sheet.insertRule("main {border: none}");
      } else {
        style.sheet.insertRule(`#bars {background: ${command.colors.background}}`),
        style.sheet.insertRule(`main {border-color: ${command.colors.border.color}}`),
        style.sheet.insertRule(`#bar-1 {background: ${command.colors.border.color}; color: ${command.colors.background}}`),
        style.sheet.insertRule(`#bar-2 {background: ${command.colors.border.color}}`),
        style.sheet.insertRule(`#bar-3 {background: ${command.colors.border.color}}`),
        style.sheet.insertRule(`#bar-4 {background: ${command.colors.border.color}}`),
        style.sheet.insertRule(`#bar-5 {background: ${command.colors.border.color}}`)
      }
    }
  }, []);

  return null; // This component does not render anything
};

export default DynamicStyles;
