import { defineConfig, presetTypography, presetUno } from "unocss";
import { presetAttributify } from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetUno(), presetTypography()],
  rules: [["font-stylish", { "font-family": "Caveat" }]],
  shortcuts: [
    // 按钮
    [
      /^btn(-(.+))?$/,
      ([, , c = "blue"]) =>
        `block px-3 py-2 bg-${c}-5 hover:bg-${c}-7 text-sm text-white font-semibold rd-md shadow`,
    ],

    // 开关
    {
      "toggle-wrapper": "relative inline-flex items-center cursor-pointer",
      "toggle-input": "sr-only",
    },
    [
      /^toggle-bg(-(.+))?$/,
      ([, , c = "blue"]) =>
        [
          "bg-gray-200 rounded-full dark:bg-gray-700 dark:border-gray-600",
          "transition",
          "after:absolute after:content-[''] after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all",
          `peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-${c}-300 dark:peer-focus:ring-${c}-800`,
          `peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white peer-checked:bg-${c}-600`,
          "w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5",
        ].join(" "),
    ],
    [
      /^toggle-size-(.+)$/,
      ([, s = "md"]) =>
        ({
          sm: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4",
          md: "w-11 h-6 after:top-[2px] after:start-[2px] after:h-5 after:w-5",
          lg: "w-14 h-7 after:top-0.5 after:start-[4px] after:h-6 after:w-6",
        }[s]),
    ],

    // 键盘字符
    {
      kbd: "px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500",
    },
  ],
});
