/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_MOCKAPI_KEY: string;
  readonly VITE_RECAPTCHA_KEY: string;
  readonly VITE_RECAPTCHA_SECRET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
