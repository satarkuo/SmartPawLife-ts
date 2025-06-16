// 圖片與媒體資源
declare module '*.png';
declare module '*.jpg';
declare module '*.svg';

// 定義 Vite 的環境變數型別
interface ImportMetaEnv {
  readonly VITE_BASE_URL: string;
  readonly VITE_API_PATH: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
