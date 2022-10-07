declare module 'shoppyfit-tool' {
  export function shoppyfit_init(): void;
  export function shoppyfit_action(
    config: {
      name: string;
      images?: string[];
      options?: string[];
      rtl?: boolean;
      trigger?: 'hover' | 'click';
      listStyle?: 'dropdown' | 'dropdown-static' | 'overlay' | 'modal';
      background?: boolean;
      buttonStyle?: 'default' | '3d' | 'flat' | 'round' | 'neumorphism' | 'text' | 'none';
      size?: bigint;
      customLabels?: object;
      lightMode?: 'system' | 'dark' | 'light' | 'bodyScheme';
      language?:
        | 'en'
        | 'de'
        | 'nl'
        | 'fr'
        | 'es'
        | 'pt'
        | 'tr'
        | 'zh'
        | 'ar'
        | 'hi'
        | 'pl'
        | 'id'
        | 'no'
        | 'fi'
        | 'sv'
        | 'cs'
        | 'ja'
        | 'it'
        | 'ko'
        | 'vi';
    },
    triggerElement?: HTMLElement,
    keyboardTrigger?: boolean
  ): void;
}
