import React from "react";
import grapesjs from "grapesjs";
import "grapesjs/dist/css/grapes.min.css";
import { useEffect } from "react";
import { useState } from "react";
import grapesjsConfig from "../../Config/grapesjsConfig";
import "./styles.css";

const WebBuilder = () => {
  const [editors, setEditor] = useState(null);
  console.log("🚀 ~ file: WebBuilder.jsx:10 ~ WebBuilder ~ editors:", editors);
  useEffect(() => {
    const editor = grapesjs.init(grapesjsConfig());
    editor.Commands.add("set-device-desktop", {
      run: (editor) => editor.setDevice("Desktop"),
    });
    editor.Commands.add("set-device-tablet", {
      run: (editor) => editor.setDevice("Tablet"),
    });
    editor.Commands.add("set-device-mobile", {
      run: (editor) => editor.setDevice("Mobile"),
    });
    setEditor(editor);
  }, []);
  return (
    <div>
      <div className="header">
        <div class="panel__devices"></div>
        <div class="panel__basic-actions"></div>
      </div>
      <div id="editor"></div>
    </div>
  );
};

export default WebBuilder;
