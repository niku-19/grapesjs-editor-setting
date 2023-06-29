import plugin from "grapesjs-blocks-basic";
import "bootstrap-icons/font/bootstrap-icons.css";
import formPlugin from "grapesjs-plugin-forms";
import exportPlugin from "grapesjs-plugin-export";
import navbarPlugin from "grapesjs-navbar";
import componentCountdown from "grapesjs-component-countdown";
import styleFilter from "grapesjs-style-filter";
import stylebg from "grapesjs-style-bg";
import flexPlugin from "grapesjs-blocks-flexbox";
import tabsPlugin from "grapesjs-tabs";
import pluginTooltip from "grapesjs-tooltip";
import customCodePlugin from "grapesjs-custom-code";
// import formPlugin from "grapesjs-plugin-forms";

const grapesjsConfig = () => {
  return {
    container: "#editor",
    storageManager: true,
    plugins: [
      plugin,
      formPlugin,
      exportPlugin,
      navbarPlugin,
      componentCountdown,
      styleFilter,
      stylebg,
      flexPlugin,
      "",
      tabsPlugin,
      pluginTooltip,
      customCodePlugin,
    ],
    pluginsOpts: {
      [plugin]: {},
      [formPlugin]: {},
      [exportPlugin]: {},
      [navbarPlugin]: {},
      [componentCountdown]: {},
      [styleFilter]: {},
      [stylebg]: {},
      [flexPlugin]: {},
      "grapesjs-lory-slider": {},
      [tabsPlugin]: {},
      [pluginTooltip]: {},
      [customCodePlugin]: {},
    },
    blockManager: {
      appendTo: "#blocks",
    },
    layerManager: {
      appendTo: "#layer-container",
    },
    styleManager: {
      appendTo: "#style-view",
    },

    deviceManager: {
      devices: [
        {
          name: "Desktop",
          width: "", // default size
        },
        {
          name: "Tablet",
          width: "768px", // this value will be used on canvas width
          widthMedia: "992px", // this value will be used in CSS @media
        },
        {
          name: "Mobile",
          width: "320px", // this value will be used on canvas width
          widthMedia: "480px", // this value will be used in CSS @media
        },
      ],
    },

    panels: {
      defaults: [
        {
          id: "basic-actions",
          el: ".panel__basic-actions",
          buttons: [
            {
              id: "visibility",
              active: true, // active by default
              className: "btn-toggle-borders",
              label: '<i class="fa fa-square-o"></i>',
              command: "sw-visibility", // Built-in command
            },
          ],
        },
        {
          id: "panel-devices",
          el: ".panel__devices",
          buttons: [
            {
              id: "device-desktop",
              label: '<i class="bi bi-laptop-fill"></i>',
              command: "set-device-desktop",
              active: true,
              togglable: false,
            },
            {
              id: "device-tablet",
              label: '<i class="bi bi-tablet-fill"></i>',
              command: "set-device-tablet",
              togglable: false,
            },
            {
              id: "device-mobile",
              label: '<i class="bi bi-phone-fill"></i>',
              command: "set-device-mobile",
              togglable: false,
            },
          ],
        },
      ],
    },
  };
};

export default grapesjsConfig;

//Hi I'm Nikhil Ranjan Kumar. A passionate Full Stack Mern Developer based in Bengaluru Karnataka
///Full Stack MERN Developer 🤚🏻
