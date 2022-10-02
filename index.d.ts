declare module 'shoppyfit-tool' {
  export function shoppyfit_init(): void;
  export function shoppyfit_action(
    config: {
      name: string;
      description?: string;
      // startDate: string;
      // startTime?: string;
      // endDate?: string;
      // endTime?: string;
      // location?: string;
      // icsFile?: string;
      images?: string[];
      recurrence?: string;
      recurrence_interval?: bigint;
      // recurrence_until?: string;
      // recurrence_count?: string;
      // recurrence_byDay?: string;
      // recurrence_byMonth?: string;
      // recurrence_byMonthDay?: string;
      // recurrence_weekstart?: string;
      sequence?: bigint;
      identifier?: string;
      options: ('step1' | 'step2' | ' ')[];
      // iCalFileName?: string;
      // timeZone?: string;
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
