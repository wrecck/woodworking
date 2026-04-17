/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_OPT_IN_SAVE_URL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
